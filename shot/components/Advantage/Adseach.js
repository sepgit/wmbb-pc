/**
 * Created by Zing on 2016/8/17.
 */
import React,{Component} from 'react';
import { Select,Checkbox,message } from 'antd';
import Adlists from './adlist';
import Adplxg from './adplxg';
import Adplxgjq from './adplxgjq';
import Footinfo from './../login/footinfo';
import Adts from '../ccom/adts';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout,timeoutm;
let xzone = [];

export default class Adseach extends Component {
  constructor(props) {
    super(props);
    this.handss=this.handss.bind(this);
    this.handcz=this.handcz.bind(this);
    this.handplxg=this.handplxg.bind(this);
    this.handxg=this.handxg.bind(this);
    this.handqx=this.handqx.bind(this);
    this.handc=this.handc.bind(this);
    this.handpljq=this.handpljq.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handcm=this.handcm.bind(this);
    this.handcms=this.handcms.bind(this);
    this.handysxh=this.handysxh.bind(this);
    this.handists=this.handists.bind(this);
    this.handistsc=this.handistsc.bind(this);
    this.handfilts=this.handfilts.bind(this);
    let admiAcco='';
    let comp=sessionStorage.getItem("SESSIONCOMP");
    if(comp!=0) {
      admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
    }
    this.state={
      fw:'',
      cys:'',
      qyd:undefined,
      mdd:undefined,
      fbr:'',
      jsr:'',
      xpzt:'',
      admiAcco:admiAcco,
      zjdc:false,
      yj:false,
      sq:false,
      cw:false,
      xgary:[],
      ispl:false,
      userid:sessionStorage.getItem("SESSIONUSER"),
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      ispljq:false,
      qydn:'',
      mddn:'',
      ists:false
    }
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
  handists(){
    this.setState({
      ists:true
    })
  }
  handistsc(){
    this.setState({
      ists:false
    })
  }
  handysxh(v){
    let booking,freight,qing,shipSpace;
    if (v.indexOf('0')<0){
      booking =0;
    }else{
      booking =1;
    }
    if (v.indexOf('1')<0){
      freight =0;
    }else{
      freight =1;
    }
    if (v.indexOf('2')<0){
      qing =0;
    }else{
      qing =1;
    }
    if (v.indexOf('3')<0){
      shipSpace =0;
    }else{
      shipSpace =1;
    }
    this.setState({
      zjdc:booking,
      yj:freight,
      sq:qing,
      cw:shipSpace
    });
  }
  handcn(v){
    this.setState({
      qydn:v
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.fw;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getqydyj(userName,token,serv,v);
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
    let serv=this.state.fw;
    if (timeoutm) {
      clearTimeout(timeoutm);
      timeoutm = null;
    }
    timeoutm = setTimeout(() => {
      if(v){
        this.props.actions.getmddyj(userName,token,serv,v);
      }
    }, 300);
  }
  handcms(v,o){
    let mdd=o.props.date;
    this.setState({ mdd:mdd });
  }
  handqx(f,v){
    xzone.splice(0,xzone.length);//清空
    if(f){
      for(var i=0;i<v.length; i++){
          xzone.push(v[i].adva);
      }
    }else{
      xzone.splice(0,xzone.length);//清空
    }
    this.setState({
      xgary:xzone
    })
  }
  handxg(f,v){
    let indexxz=-1;
    if(f){
      xzone.push(v);
    }else{
      for(var i=0;i<xzone.length; i++){
        if (xzone[i] == v){
          indexxz=i;
        }
      }
      xzone.splice(indexxz,1);
    }
    this.setState({
      xgary:xzone
    });
    this.refs.yslists.setState({
      qx:false
    });
  }
  handplxg(){
    if(this.state.xgary.length>0){
      this.setState({
        ispl:true
      });
    }else{
      message.error("请先选择需要修改的优势！");
    }
  }
  handpljq(){
    if(this.state.xgary.length>0){
      this.setState({
        ispljq:true
      });
    }else{
      message.error("请先选择需要修改的优势！");
    }
  }
  handc(){
    this.setState({
      ispl:false,
      ispljq:false
    });
  }
  handss(){
    let userName = sessionStorage.getItem("SESSIONUSERACC");
    let token = sessionStorage.getItem("SESSIONTOKEN");
    let serv=this.state.fw;
    let carr=this.state.cys;
    let depaPort=this.state.qyd==undefined?'':this.state.qyd;
    let destPort=this.state.mdd==undefined?'':this.state.mdd;
    let creator=this.state.fbr;
    let user=this.state.jsr;
    let enab=this.state.xpzt;
    let booking=this.state.zjdc?1:0;
    let freight=this.state.yj?1:0;
    let qing=this.state.sq?1:0;
    let shipSpace=this.state.cw?1:0;
    this.props.actions.getyslist(userName,token,1,serv,carr,depaPort,destPort,creator,user,enab,booking,freight,qing,shipSpace);//获取搜索数据
    this.refs.yslists.setState({
      Hes:0,
      page:1,
      hhs:[],
      qx:false
    });
    this.refs.yslists.handcbc();
    this.refs.yslists.handczqx();
    xzone.splice(0,xzone.length);//清空数组
  }
  handcz(){
    this.setState({
      fw:'',
      cys:'',
      qyd:undefined,
      mdd:undefined,
      fbr:'',
      jsr:'',
      xpzt:'',
      zjdc:false,
      yj:false,
      sq:false,
      cw:false,
      xgary:[],
      ispl:false,
      ispljq:false,
      qydn:'',
      mddn:''
    });
    //重置子组件
    this.refs.yslists.setState({
      qx:false
    });
    this.refs.yslists.handczqx();
    xzone.splice(0,xzone.length);//清空数组
  }
  render() {
    let Fstate=Array.of(
      this.state.fw,
      this.state.cys,
      this.state.qyd==undefined?'':this.state.qyd,
      this.state.mdd==undefined?'':this.state.mdd,
      this.state.fbr,
      this.state.jsr,
      this.state.xpzt,
      this.state.zjdc?1:0,
      this.state.yj?1:0,
      this.state.sq?1:0,
      this.state.cw?1:0,
    );
    return (
      <div className="adsch4">
        <div className="yjys1">
          <div className="yjys2">
            <img className="yjys3" src={require('../../src/image/ptzs.png')} />
            <span>优势：当前平台展示数&nbsp;{this.props.ysrdu.platCount}&nbsp;条</span>
          </div>
          <div className="yjys2">
            <img className="yjys3" src={require('../../src/image/hyzs.png')} />
            <span>优势：当前会员展示数&nbsp;{this.props.ysrdu.vipCount}&nbsp;条&nbsp;剩余会员展示数&nbsp;{this.props.ysrdu.allVipCount-this.props.ysrdu.vipCount}&nbsp;条</span>
          </div>
          <div className="yjys2">
            <img className="yjys3" src={require('../../src/image/zdts.png')} />
            <span>优势：当前已自动推送数&nbsp;{this.props.ysrdu.pushCount}&nbsp;条</span>
          </div>
          <img className="yjys4" src={require('../../src/image/ygts.png')} onClick={this.handists}/>
        </div>
        <div className="adsch1">
          <ul>
            <li className="adsli">
              <h5>服务类型</h5>
              <Select showSearch
                      value={this.state.fw}
                      style={{ width: 170 }}
                      className="yjys5"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="服务"
                      onChange={(v)=>{return this.setState({fw:v})}}
              >
                {
                  this.props.ysrdu.ysser.map(s => <Option key={s.serv}>{s.servName}</Option>)
                }
              </Select>
            </li>
            <li className="adsli">
              <h5>承运商</h5>
              <Select showSearch
                      value={this.state.cys}
                      style={{ width: 170 }}
                      className="yjys5"
                      filterOption={this.handfilts}
                      notFoundContent="无法找到"
                      placeholder="服务"
                      onChange={(v)=>{return this.setState({cys:v})}}
              >
                {
                  this.props.ysrdu.yscarrsall.map(s => <Option key={s.carr}>{s.carrName}</Option>)
                }
              </Select>
            </li>
            <li className="adsli">
              <h5>起运地</h5>
              <Select combobox
                      value={this.state.qydn}
                      style={{ width: 170 }}
                      className="yjys5"
                      notFoundContent=""
                      defaultActiveFirstOption={false}
                      showArrow={false}
                      filterOption={false}
                      placeholder="请输入起运地并选择"
                      onChange={this.handcn}
                      onSelect={this.handcns}
              >
                <OptGroup label="所有">
                  {
                    this.props.ysrdu.qydyj.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
                <OptGroup label="最近">
                  {
                    this.props.ysrdu.kannoq.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
              </Select>
            </li>
            <li className="adsli">
              <h5>目的地</h5>
              <Select combobox
                      value={this.state.mddn}
                      style={{ width: 170 }}
                      className="yjys5"
                      notFoundContent=""
                      defaultActiveFirstOption={false}
                      showArrow={false}
                      filterOption={false}
                      placeholder="请输入目的地并选择"
                      onChange={this.handcm}
                      onSelect={this.handcms}
              >
                <OptGroup label="所有">
                  {
                    this.props.ysrdu.mddyj.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
                <OptGroup label="最近">
                  {
                    this.props.ysrdu.kannom.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
              </Select>
            </li>
          </ul>
        </div>
        <div className="adsch2">
          <ul>
            <li className="adsli">
              <h5>发布人</h5>
              <Select showSearch
                      value={this.state.fbr}
                      style={{ width: 170 }}
                      className="yjys5"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="发布人"
                      onChange={(v)=>{return this.setState({fbr:v})}}
              >
                {
                  this.props.ysrdu.ysfbr.map(s => {
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
            <li className="adsli">
              <h5>接收人</h5>
              <Select showSearch
                      value={this.state.jsr}
                      style={{ width: 170 }}
                      className="yjys5"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="接收人"
                      onChange={(v)=>{return this.setState({jsr:v})}}
              >
                {
                  this.props.ysrdu.ysfbr.map(s => {
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
            <li className="adsli">
              <h5>状态</h5>
              <Select showSearch
                      value={this.state.xpzt}
                      style={{ width: 170 }}
                      className="yjys5"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="状态"
                      onChange={(v)=>{return this.setState({xpzt:v})}}
              >
                <Option value="2">全部</Option>
                <Option value="1">启用</Option>
                <Option value="0">禁用</Option>
              </Select>
            </li>
            <li className="adslione">
              <h5>优势细化</h5>
              <Select multiple
                      style={{ width: 270 }}
                      notFoundContent=""
                      placeholder="优势明细,可多选"
                      className="yjys5"
                      defaultValue={[]}
                      onChange={this.handysxh}
              >
                <Option key='0'>直接订舱</Option>
                <Option key='1'>运价</Option>
                <Option key='2'>DDP DDU</Option>
                <Option key='3'>保障舱位</Option>
              </Select>
            </li>
          </ul>
        </div>
        <div className="adsch3">
          <div className="adslitwo">
            <a href='javascript:void(0);' className="adage" onClick={this.handss}>搜索</a>
            <a href='javascript:void(0);' className="adage" onClick={this.handcz}>重置</a>
            <a href='javascript:void(0);' className="adage" onClick={this.handss}>刷新</a>
            <a href='javascript:void(0);' className="adage1" onClick={this.handplxg}>批量修改</a>
            <a href='javascript:void(0);' className="adage2" onClick={this.handpljq}>批量启用/禁用</a>
          </div>
          <Adlists ref="yslists"
                   handqx={this.handqx}
                   handxg={this.handxg}
                   shows={this.props.shows}
                   actions={this.props.actions}
                   ysrdu={this.props.ysrdu}
                   yts={this.state.yts}
                   text={this.props.text}
                   Fstate={Fstate}/>
          <Footinfo />
        </div>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:100}} leave={{animation: "fadeOut"}}>
          {
            this.state.ispl?<Adplxg handc={this.handc}
                                    handcz={this.handcz}
                                    plxgdate={this.state.xgary}
                                    actions={this.props.actions}
                                    ysrdu={this.props.ysrdu}
            />:undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:100}} leave={{animation: "fadeOut"}}>
          {
            this.state.ispljq?<Adplxgjq handc={this.handc}
                                    handcz={this.handcz}
                                    plxgdate={this.state.xgary}
                                    actions={this.props.actions}
                                    ysrdu={this.props.ysrdu}
            />:undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:100}} leave={{animation: "fadeOut"}}>
          {
            this.state.ists?<Adts handistsc={this.handistsc}/>:undefined
          }
        </VelocityTransitionGroup>
      </div>
    );
  }
}