/**
 * Created by Chen on 2017/12/05.
 */
import React,{Component} from 'react';
import { message,Select } from 'antd';
import Cabplist from './cabplist';
import Footinfo from './../login/footinfo';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout,timeoutm;

export default class Cabpseach extends Component {
  constructor(props) {
    super(props);
    this.handseach=this.handseach.bind(this);
    this.handrest=this.handrest.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handcm=this.handcm.bind(this);
    this.handcms=this.handcms.bind(this);
    this.carronChange=this.carronChange.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      fwlx:'',
      qyd:undefined,
      mdd:undefined,
      carr:'',
      cwzt:'',
      qydn:'',
      mddn:''
    }
  }
  handseach(){
    let userName = this.state.userName;
    let token = this.state.token;
    let serv = this.state.fwlx;
    let depaPort = this.state.qyd==undefined?'':this.state.qyd;
    let destPort = this.state.mdd==undefined?'':this.state.mdd;
    let carr=this.state.carr;
    this.props.actions.getcabDisps(userName,token,1,serv,depaPort,destPort,carr,'');//获取搜索数据
    this.refs.cabplist.setState({
      Hes:0,
      page:1,
      hhs:[]
    });
  }
  handrest(){
    this.setState({
      fwlx:'',
      qyd:undefined,
      mdd:undefined,
      cwzt:'',
      qydn:'',
      mddn:'',
      carr:''
    });
  }
  handcn(v){
    this.setState({
      qydn:v,
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.fwlx;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getqydka(userName,token,serv,v);
      }
    }, 300);
  }
  handcns(v,o){
    let qyd=o.props.date;
    this.setState({ qyd:qyd });
  }
  handcm(v){
    this.setState({
      mddn:v,
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.fwlx;
    if (timeoutm) {
      clearTimeout(timeoutm);
      timeoutm = null;
    }
    timeoutm = setTimeout(() => {
      if(v){
        this.props.actions.getmddka(userName,token,serv,v);
      }
    }, 300);
  }

  handcms(v,o){
    let mdd=o.props.date;
    this.setState({ mdd:mdd });
  }

  carronChange(v){
    this.setState({
      carr:v
    });
  }

  render() {
    let Fstate=Array.of(
      this.state.fwlx,
      this.state.qyd,
      this.state.mdd,
      this.state.carr
    );
    return (
      <div className="cab3">
        <div className="cab4">
          <ul>
            <li className="caba">服务类型
              <Select showSearch
                      value={this.state.fwlx}
                      className="xseachop"
                      style={{ width: 120 }}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={(v)=>{return this.setState({fwlx:v})}}
              >
                {
                  this.props.cabnewr.fwlxary.map(s => <Option key={s.serv}>{s.servName}</Option>)
                }
              </Select>
            </li>
            <li className="caba">起运地
              <Select combobox
                      value={this.state.qydn}
                      style={{ width: 120 }}
                      className="xseachop"
                      notFoundContent=""
                      defaultActiveFirstOption={false}
                      showArrow={false}
                      filterOption={false}
                      placeholder="请输入起运地并选择"
                      onChange={this.handcn}
                      onSelect={this.handcns}
              >
                {
                  this.props.cabnewr.qydka.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                }
              </Select>
            </li>
            <li className="caba">目的地
              <Select combobox
                      value={this.state.mddn}
                      style={{ width: 120 }}
                      className="xseachop"
                      notFoundContent=""
                      defaultActiveFirstOption={false}
                      showArrow={false}
                      filterOption={false}
                      placeholder="请输入目的地并选择"
                      onChange={this.handcm}
                      onSelect={this.handcms}
              >
                {
                  this.props.cabnewr.mddka.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                }
              </Select>
            </li>
            <li className="caba">
              承运商
              <Select showSearch
                      value={this.state.carr}
                      style={{ width: 120 }}
                      className="xseachop"
                      optionFilterProp="children"
                      notFoundContent=""
                      placeholder="(下拉模糊)"
                      onChange={this.carronChange}
              >
                <OptGroup label="全部">
                  {
                    <Option key='-1'>全部</Option>
                  }
                </OptGroup>
                <OptGroup label="所有">
                  {
                    this.props.cabnewr.carrsp.map(s => <Option key={s.carr} date={s.carr} value={s.carrName}>{s.carrName}</Option>)
                  }
                </OptGroup>
              </Select>
            </li>
          </ul>
        </div>
        <div className="cab5">
          <ul>
            <li>
              <a href='javascript:void(0);' className="cab6" onClick={this.handseach}>搜索</a>
              <a href='javascript:void(0);' className="cab6" onClick={this.handrest}>重置</a>
              <a href='javascript:void(0);' className="cab6" onClick={this.handseach}>刷新</a>
            </li>
          </ul>
        </div>
        <Cabplist ref="cabplist"
                 actions={this.props.actions}
                  cabnewr={this.props.cabnewr}
                 Fstate={Fstate}/>
        <Footinfo />
      </div>
    );
  }
}