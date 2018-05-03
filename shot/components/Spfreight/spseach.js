/**
 * Created by Zing on 2016/10/20.
 */
import React,{Component} from 'react';
import { Select,message,Checkbox } from 'antd';
import Splists from './splists';
import Adplxgsp from './adplxgsp';
import Adplxgspjq from './adplxgspjq';
import Footinfo from './../login/footinfo';
import Adts from '../ccom/adts';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout;
let xzthr= [];

export default class Adsseach extends Component {
  constructor(props) {
    super(props);
    this.handss=this.handss.bind(this);
    this.handcz=this.handcz.bind(this);
    this.handplxg=this.handplxg.bind(this);
    this.handxg=this.handxg.bind(this);
    this.handqx=this.handqx.bind(this);
    this.handc=this.handc.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handpljq=this.handpljq.bind(this);
    this.handists=this.handists.bind(this);
    this.handistsc=this.handistsc.bind(this);
    let admiAcco='';
    let comp=sessionStorage.getItem("SESSIONCOMP");
    if(comp!=0) {
      admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
    }
    this.state={
      fw:'',
      kan:undefined,
      fbr:'',
      jsr:'',
      xpzt:'',
      admiAcco:admiAcco,
      xgary:[],
      ispl:false,
      userid:sessionStorage.getItem("SESSIONUSER"),
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      qydn:'',
      ispljq:false,
      ists:false
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
        this.props.actions.getkansp(userName,token,serv,v);
      }
    }, 300);
  }
  handcns(v,o){
    let kan=o.props.date;
    this.setState({ kan:kan });
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
  handqx(f,v){
    xzthr.splice(0,xzthr.length);//清空
    if(f){
      for(var i=0;i<v.length; i++){
          xzthr.push(v[i].adva);
      }
    }else{
      xzthr.splice(0,xzthr.length);//清空
    }
    this.setState({
      xgary:xzthr
    })
  }
  handxg(f,v){
    let indexxz=-1;
    if(f){
      xzthr.push(v);
    }else{
      for(var i=0;i<xzthr.length; i++){
        if (xzthr[i] == v){
          indexxz=i;
        }
      }
      xzthr.splice(indexxz,1);
    }
    this.setState({
      xgary:xzthr
    });
    this.refs.ysplists.setState({
      qx:false
    });
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
    let port=this.state.kan==undefined?'':this.state.kan;
    let creator=this.state.fbr;
    let user=this.state.jsr;
    let enab=this.state.xpzt;
    this.props.actions.getysplist(userName,token,1,serv,port,creator,user,enab);//获取搜索数据
    this.refs.ysplists.setState({
      Hes:0,
      page:1,
      hhs:[],
      qx:false
    });
    this.refs.ysplists.handcbc();
    this.refs.ysplists.handczqx();
    xzthr.splice(0,xzthr.length);//清空数组
  }
  handcz(){
    this.setState({
      fw:'',
      kan:undefined,
      xpzt:'',
      fbr:'',
      jsr:'',
      xgary:[],
      ispl:false,
      ispljq:false,
      qydn:''
    });
    //重置子组件
    this.refs.ysplists.setState({
      qx:false
    });
    this.refs.ysplists.handczqx();
    xzthr.splice(0,xzthr.length);//清空数组
  }
  render() {
    let Fstate=Array.of(
      this.state.fw,
      this.state.kan==undefined?'':this.state.kan,
      this.state.fbr,
      this.state.jsr,
      this.state.xpzt
    );
    return (
      <div className="adsch4">
        <div className="yjys1">
          <div className="yjys2">
            <img className="yjys3" src={require('../../src/image/ptzs.png')} />
            <span>优势：当前平台展示数&nbsp;{this.props.yssp.platCount}&nbsp;条</span>
          </div>
          <div className="yjys2">
            <img className="yjys3" src={require('../../src/image/hyzs.png')} />
            <span>优势：当前会员展示数&nbsp;{this.props.yssp.vipCount}&nbsp;条&nbsp;剩余会员展示数&nbsp;{this.props.yssp.allVipCount-this.props.yssp.vipCount}&nbsp;条</span>
          </div>
          <div className="yjys2">
            <img className="yjys3" src={require('../../src/image/zdts.png')} />
            <span>优势：当前已自动推送数&nbsp;{this.props.yssp.pushCount}&nbsp;条</span>
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
                  this.props.yssp.ysper.map(s => <Option key={s.serv}>{s.servName}</Option>)
                }
              </Select>
            </li>
            <li className="adsli">
              <h5>口岸</h5>
              <Select combobox
                      value={this.state.qydn}
                      style={{ width: 170 }}
                      className="yjys5"
                      notFoundContent=""
                      defaultActiveFirstOption={false}
                      showArrow={false}
                      filterOption={false}
                      placeholder="请输入口岸并选择"
                      onChange={this.handcn}
                      onSelect={this.handcns}
              >
                <OptGroup label="所有">
                  {
                    this.props.yssp.kansp.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
                <OptGroup label="最近">
                  {
                    this.props.yssp.kannoqtz.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
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
                  this.props.yssp.yspfbr.map(s => {
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
                  this.props.yssp.yspfbr.map(s => {
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
          <Splists ref="ysplists"
                   Fstate={Fstate}
                   handqx={this.handqx}
                   handxg={this.handxg}
                   actions={this.props.actions}
                   yssp={this.props.yssp}
                   shows={this.props.shows}
                   text={this.props.text}
                   yts={this.state.yts}
          />
          <Footinfo />
        </div>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:100}} leave={{animation: "fadeOut"}}>
          {
            this.state.ispl?<Adplxgsp handc={this.handc}
                                      handcz={this.handcz}
                                      plxgdate={this.state.xgary}
                                      actions={this.props.actions}
                                      yssp={this.props.yssp}
            />:undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:100}} leave={{animation: "fadeOut"}}>
          {
            this.state.ispljq?<Adplxgspjq handc={this.handc}
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