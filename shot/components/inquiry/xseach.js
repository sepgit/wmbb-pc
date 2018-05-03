/**
 * Created by Zing on 2016/7/21.
 */
import React,{Component} from 'react';
import { Select,Checkbox } from 'antd';
import moment from 'moment';
import DateRange from './xdatepick';
import Xplistall from './../inquiry/xplistall';
import Footinfo from './../login/footinfo';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout,timeoutm;

export default class Xseach extends Component {
  constructor(props) {
    super(props);
    this.handleChangeser = this.handleChangeser.bind(this);
    this.handleChangesxpeo = this.handleChangesxpeo.bind(this);
    this.handleChangesxpst = this.handleChangesxpst.bind(this);
    this.handleChangeschbox = this.handleChangeschbox.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickR = this.handleClickR.bind(this);
    this.handfilts=this.handfilts.bind(this);
    this.handxpts = this.handxpts.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handcm=this.handcm.bind(this);
    this.handcms=this.handcms.bind(this);
    let admiAcco='';
    let comp=sessionStorage.getItem("SESSIONCOMP");
    if(comp!=0) {
      admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
    }
    this.state={
      ser:'',
      sxpeo:'',
      sqad:undefined,
      smad:undefined,
      sxpst:'',
      sxpbg:null,
      sxped:null,
      schbox:false,
      admiAcco:admiAcco,
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      qydn:'',
      mddn:''
    }
  }
  handcn(v){
    this.setState({
      qydn:v
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.ser;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getqydxp(userName,token,serv,v);
      }
    }, 300);
  }
  handcns(v,o){
    let sqad=o.props.date;
    this.setState({ sqad:sqad });
  }
  handcm(v){
    this.setState({
      mddn:v,
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.ser;
    if (timeoutm) {
      clearTimeout(timeoutm);
      timeoutm = null;
    }
    timeoutm = setTimeout(() => {
      if(v){
        this.props.actions.getmddxp(userName,token,serv,v);
      }
    }, 300);
  }
  handcms(v,o){
    let smad=o.props.date;
    this.setState({ smad:smad });
  }
  handxpts(){
    this.props.getnewlist.xpts=false;
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
  handleChangeser(v){
    this.setState({
      ser: v
    });
  }
  handleChangesxpeo(v){
    this.setState({
      sxpeo: v
    });
  }
  handleChangesxpst(v){
    this.setState({
      sxpst: v
    });
  }
  handleChangeschbox(e){
    this.setState({
      schbox: e.target.checked
    });
  }
  handleStartChange(v){
    this.setState({
      sxpbg: v
    });
  }
  handleEndChange(v){
    this.setState({
      sxped: v
    });
  }
  handleClick(){
    let serv=this.state.ser;
    let enquer=this.state.sxpeo;
    let depaPort=this.state.sqad==undefined?'':this.state.sqad;
    let destPort=this.state.smad==undefined?'':this.state.smad;
    let enquStat=this.state.sxpst;
    let enquTimeFrom=this.state.sxpbg==null?'':moment(this.state.sxpbg).format('YYYY-MM-DD');
    let enquTimeTo=this.state.sxped==null?'':moment(this.state.sxped).format('YYYY-MM-DD');
    let unreadOnly=this.state.schbox;
    let userName = sessionStorage.getItem("SESSIONUSERACC");
    let token = sessionStorage.getItem("SESSIONTOKEN");
    this.props.actions.getxseachs(userName,token,1,serv,enquer,depaPort,destPort,enquTimeFrom,enquTimeTo,enquStat,unreadOnly);//获取搜索数据
    this.refs.xplistson.setState({
      Hes:0,
      page:1,
      hhs:[]
    });
    this.refs.xplistson.handcbc();
  }
  handleClickR(){
    //改变状态重新渲染dom
    this.setState({
      ser:'',
      sxpeo:'',
      sqad:undefined,
      smad:undefined,
      sxpst:'',
      sxpbg:null,
      sxped:null,
      schbox:false,
      qydn:'',
      mddn:''
    });
    //重置子组件
    this.refs.datepick.setState({
      startValue: null,
      endValue: null,
      endOpen: false
    });
  }
  render() {
    let Fstate=Array.of(
      this.state.ser,
      this.state.sxpeo,
      this.state.sqad==undefined?'':this.state.sqad,
      this.state.smad==undefined?'':this.state.smad,
      this.state.sxpbg==null?'':this.state.sxpbg,
      this.state.sxped==null?'':this.state.sxped,
      this.state.sxpst,
      this.state.schbox
    );
    return (
      <div className="addx3">
        <div className="addx4">
          <ul>
            <li>服务
              <Select showSearch
                      value={this.state.ser}
                      className="xseachop"
                      style={{ width: 120 }}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={this.handleChangeser}
              >
                {
                  this.props.getdetil.xser.map(s => <Option key={s.serv}>{s.servName}</Option>)
                }
              </Select>
            </li>
            <li>询盘人
              <Select showSearch
                      value={this.state.sxpeo}
                      className="xseachop"
                      style={{ width: 120 }}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={this.handleChangesxpeo}
              >
                {
                  this.props.getdetil.xuser.map(s => {
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
            <li>起运地
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
                  this.props.getdetil.qydxp.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                }
              </Select>
            </li>
            <li>目的地
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
                  this.props.getdetil.mddxp.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                }
              </Select>
            </li>
            <li>询盘状态
              <Select showSearch
                      value={this.state.sxpst}
                      className="xseachop"
                      style={{ width: 120 }}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={this.handleChangesxpst}
              >
                <Option value="0">全部</Option>
                <Option value="10">正常</Option>
                <Option value="20">过期</Option>
                <Option value="30">中标</Option>
                <Option value="40">退关</Option>
                <Option value="50">终止</Option>
              </Select>
            </li>
          </ul>
        </div>
        <div className="addx5">
          <DateRange ref="datepick" onStartChange={this.handleStartChange} onEndChange={this.handleEndChange}/>
          <div className="xseach2">
            <ul>
              <li>
                <h5>只看未读</h5>
                <Checkbox checked={this.state.schbox} onChange={this.handleChangeschbox}></Checkbox>
              </li>
              <li>
                <a href='javascript:void(0);' onClick={this.handleClick}>搜索</a>
                <a href='javascript:void(0);' onClick={this.handleClickR}>重置</a>
              </li>
              <li className="shaxnew1">
                <a href='javascript:void(0);' onClick={this.handleClick}>刷新</a>
              </li>
            </ul>
          </div>
        </div>
        <Xplistall
          ref="xplistson"
          actions={this.props.actions}
          getdetil={this.props.getdetil}
          Fstate={Fstate}
          shows={this.props.shows}
          getnewlist={this.props.getnewlist}
          text={this.props.text}
          cabnew={this.props.cabnew}
        />
        <Footinfo />
      </div>
    );
  }
}