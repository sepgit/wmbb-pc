/**
 * Created by Zing on 2016/8/4.
 */
import React,{Component} from 'react';
import { Select,Checkbox } from 'antd';
import Replylists from './rlist';
import Footinfo from './../login/footinfo';
import moment from 'moment';
import DateRangehf from './hfdatepick';
const Option = Select.Option;
let timeout;

export default class Rseach extends Component {
  constructor(props) {
    super(props);
    this.handseach=this.handseach.bind(this);
    this.handrest=this.handrest.bind(this);
    this.handfilts=this.handfilts.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.state={
      port:undefined,
      serv:'',
      servOpti:'',
      respStat:'',
      hfbg:null,
      hfed:null,
      hfwhf:false,
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      qydn:''
    }
  }
  handcn(v){
    this.setState({
      qydn:v
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.serv;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getkanhf(userName,token,serv,v);
      }
    }, 300);
  }
  handcns(v,o){
    let port=o.props.date;
    this.setState({ port:port });
  }
  handleStartChange(v){
    this.setState({
      hfbg: v
    });
  }
  handleEndChange(v){
    this.setState({
      hfed: v
    });
  }
  handfilts(inputValue,option){
    if(typeof(option.props.children)=='object'){
      let str='';
      for(let v of option.props.children) {
        str+=v;
      }
      if(str.indexOf(inputValue.toLocaleUpperCase())<0){
        return false;
      }else{
        return true;
      }
    }else{
      if(option.props.children.indexOf(inputValue.toLocaleUpperCase())<0){
        return false;
      }else{
        return true;
      }
    }
  }
  handseach(){
    let port=this.state.port==undefined?'':this.state.port;
    let serv=this.state.serv;
    let servOpti=this.state.servOpti;
    let respStat=this.state.respStat;
    let userName = sessionStorage.getItem("SESSIONUSERACC");
    let token = sessionStorage.getItem("SESSIONTOKEN");
    let respTimeFrom=this.state.hfbg==null?'':moment(this.state.hfbg).format('YYYY-MM-DD');
    let respTimeTo=this.state.hfed==null?'':moment(this.state.hfed).format('YYYY-MM-DD');
    let unrespOnly=this.state.hfwhf==false?0:1;
    this.props.actions.gethflist(userName,token,1,port,serv,servOpti,respStat,respTimeFrom,respTimeTo,unrespOnly);//获取搜索数据
    this.refs.hflist.setState({
      Hes:0,
      page:1,
      hhs:[]
    });
  }
  handrest(){
    this.setState({
      port:undefined,
      serv:'',
      servOpti:'',
      respStat:'',
      hfbg:null,
      hfed:null,
      hfwhf:false,
      qydn:''
    });
    this.refs.datepickhf.setState({
      startValue: null,
      endValue: null,
      endOpen: false
    });
  }
  render() {
    let Fstate=Array.of(
      this.state.port==undefined?'':this.state.port,
      this.state.serv,
      this.state.servOpti,
      this.state.respStat,
      this.state.hfbg==null?'':this.state.hfbg,
      this.state.hfed==null?'':this.state.hfed,
      this.state.hfwhf==false?0:1
    );
    return (
      <div className="rhfn">
        <div className="rhfn1">
          <ul className="rseachuls">
            <li className="hflik">口岸
              <Select combobox
                      value={this.state.qydn}
                      style={{ width: 150 }}
                      className="xseachop"
                      notFoundContent=""
                      defaultActiveFirstOption={false}
                      showArrow={false}
                      filterOption={false}
                      placeholder="请输入口岸"
                      onChange={this.handcn}
                      onSelect={this.handcns}
              >
                {
                  this.props.replays.kanhf.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                }
              </Select>
            </li>
            <li className="hflik">服务
              <Select showSearch
                      value={this.state.serv}
                      style={{ width: 120 }}
                      className="xseachop"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={(v)=>{return this.setState({serv:v})}}
              >
                {
                  this.props.replays.hfser.map(s => <Option key={s.serv}>{s.servName}</Option>)
                }
              </Select>
            </li>
            <li className="hflik">具体服务
              <Select showSearch
                      value={this.state.servOpti}
                      className="xseachop"
                      style={{ width: 120 }}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={(v)=>{return this.setState({servOpti:v})}}
              >
                {
                  this.props.replays.servOptis.map(s => <Option key={s.servOpti}>{s.name}</Option>)
                }
              </Select>
            </li>
            <li className="hflik">回复状态
              <Select showSearch
                      value={this.state.respStat}
                      className="xseachop"
                      style={{ width: 120 }}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={(v)=>{return this.setState({respStat:v})}}
              >
                <Option value="0">全部</Option>
                <Option value="10">正常</Option>
                <Option value="30">收藏</Option>
                <Option value="50">终止</Option>
              </Select>
            </li>
          </ul>
        </div>
        <div className="rhfn2">
          <DateRangehf ref="datepickhf" onStartChange={this.handleStartChange} onEndChange={this.handleEndChange}/>
          <ul>
            <li>
              <h5>只看未回复</h5>
              <Checkbox checked={this.state.hfwhf}
                        style={{marginLeft:5 }}
                        onChange={(e)=>{return this.setState({hfwhf:e.target.checked})}}>
              </Checkbox>
            </li>
            <li>
              <a href='javascript:void(0);' className="replyas" onClick={this.handseach}>搜索</a>
              <a href='javascript:void(0);' className="replyas" onClick={this.handrest}>重置</a>
              <a href='javascript:void(0);' className="replyas" onClick={this.handseach}>刷新</a>
            </li>
          </ul>
        </div>
        <Replylists
          ref="hflist"
          actions={this.props.actions}
          replays={this.props.replays}
          Fstate={Fstate}
          shows={this.props.shows}
          text={this.props.text}
        />
        <Footinfo />
      </div>
    );
  }
}