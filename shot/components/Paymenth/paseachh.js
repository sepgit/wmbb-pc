/**
 * Created by Zing on 2016/7/21.
 */
import React,{Component} from 'react';
import { Select,Checkbox,DatePicker,Input } from 'antd';
import moment from 'moment';
import Palisth from './palisth';
import Footinfo from './../login/footinfo';
const Option = Select.Option;

export default class Paseachh extends Component {
  constructor(props) {
    super(props);
    this.handseach=this.handseach.bind(this);
    this.handrest=this.handrest.bind(this);
    let admiAcco='';
    let comp=sessionStorage.getItem("SESSIONCOMP");
    if(comp!=0) {
      admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
    }
    this.state={
      sk:'',
      fk:'',
      ser:'',
      ffdate:null,
      bhno:'',
      zt:'',
      xyjb:false,
      admiAcco:admiAcco
    }
  }
  handseach(){
    let userName=sessionStorage.getItem("SESSIONUSERACC");
    let token=sessionStorage.getItem("SESSIONTOKEN");
    let serv=this.state.ser;
    let payUser=this.state.fk;
    let receUser = this.state.sk;
    let expiTime = this.state.ffdate==null?'':moment(this.state.ffdate).format('YYYY-MM-DD');
    let guar=this.state.bhno;
    let stat=this.state.zt;
    let blacklist=this.state.xyjb?1:0;
    this.props.actions.getcklsh(userName,token,1,serv,payUser,receUser,expiTime,guar,stat,blacklist);//获取搜索数据
    this.refs.cklsh.setState({
      Hes:0,
      page:1,
      hhs:[]
    });
    this.refs.cklsh.handcbc();
  }
  handrest(){
    this.setState({
      sk:'',
      fk:'',
      ser:'',
      ffdate:null,
      bhno:'',
      zt:'',
      xyjb:false
    });
  }
  render() {
    let Fstate=Array.of(
      this.state.ser,
      this.state.fk,
      this.state.sk,
      this.state.ffdate==null?'':moment(this.state.ffdate).format('YYYY-MM-DD'),
      this.state.bhno,
      this.state.zt,
      this.state.xyjb?1:0
    );
    return (
      <div className="payt">
        <div className="payt1">
          <ul>
            <li>收款人
              <Input
                value={this.state.sk}
                className="tjpay"
                style={{ width: 120 }}
                placeholder="收款人账号"
                onChange={(e)=>{return this.setState({sk:e.target.value})}}
              />
            </li>
            <li>付款人
              <Select showSearch
                      value={this.state.fk}
                      className="tjpay"
                      style={{ width: 120 }}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={(v)=>{return this.setState({fk:v})}}
              >
                {
                  this.props.paysh.bhrh.map(s => {
                    if(this.props.text.priv.admi!=0){
                      return <Option key={s.user}>{s.name}</Option>
                    }else{
                      if(s.userAcco!=this.state.admiAcco){
                        return <Option key={s.user}>{s.name}</Option>
                      }else{
                        return <Option style={{display:'none'}} key={s.user} >{s.name}</Option>
                      }
                    }
                  })
                }
              </Select>
            </li>
            <li>服务类型
              <Select showSearch
                      value={this.state.ser}
                      style={{ width: 120 }}
                      className="tjpay"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="服务类型"
                      onChange={(v)=>{return this.setState({ser:v})}}
              >
                {
                  this.props.paysh.bhfwh.map(s => <Option key={s.serv}>{s.servName}</Option>)
                }
              </Select>
            </li>
            <li>付费期限
              <DatePicker
                format="yyyy-MM-dd"
                value={this.state.ffdate}
                placeholder="付费期限"
                className="tjpay"
                onChange={(v)=>{return this.setState({ffdate:v})}}
                style={{ width: 120 }}
              />
            </li>
          </ul>
        </div>
        <div className="payt2">
          <ul className="payt3">
            <li>保函号
              <Input
                value={this.state.bhno}
                placeholder="保函号"
                className="tjpay"
                style={{ width: 120 }}
                onChange={(e)=>{return this.setState({bhno:e.target.value})}}
              />
            </li>
            <li>状态
              <Select showSearch
                      value={this.state.zt}
                      style={{ width: 120 }}
                      className="tjpay"
                      filterOption={this.handfilr}
                      notFoundContent="无法找到"
                      onChange={(v)=>{return this.setState({zt:v})}}
              >
                <Option value="0">全部</Option>
                <Option value="10">正常</Option>
                <Option value="20">超期</Option>
                <Option value="30">已核销</Option>
                <Option value="40">第三方支付</Option>
                <Option value="50">未确认</Option>
                <Option value="60">取消</Option>
              </Select>
            </li>
          </ul>
          <ul className="payt4">
            <li>
              <h5>信用警报</h5>
              <Checkbox
                checked={this.state.xyjb}
                onChange={(e)=>{this.setState({xyjb:e.target.checked});}}
              ></Checkbox>
            </li>
            <li>
              <a href='javascript:void(0);' onClick={this.handseach}>搜索</a>
            </li>
            <li>
              <a href='javascript:void(0);' onClick={this.handrest}>重置</a>
            </li>
            <li>
              <a href='javascript:void(0);' onClick={this.handseach}>刷新</a>
            </li>
          </ul>
        </div>
        <Palisth
          ref="cklsh"
          Fstate={Fstate}
          paysh={this.props.paysh}
          text={this.props.text}
          actions={this.props.actions}
          shows={this.props.shows}/>
        <Footinfo />
      </div>
    );
  }
}