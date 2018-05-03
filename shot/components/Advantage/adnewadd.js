/**
 * Created by Zing on 2016/8/15.
 */
import React,{Component} from 'react';
import {Select,Input,message,Modal} from 'antd';
import { VelocityTransitionGroup} from 'velocity-react';
import Adtsfw from '../ccom/adtsfw';
import Adhx from './adhx';
import Addxkan from './addxkan';
import Addxkanq from './addxkanq';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout,timeoutm;
const confirm = Modal.confirm;

export default class Adnewadd extends Component {
  constructor(props) {
    super(props);
    this.handch=this.handch.bind(this);
    this.handkan=this.handkan.bind(this);
    this.handc=this.handc.bind(this);
    this.handqydhx=this.handqydhx.bind(this);
    this.handmddhx=this.handmddhx.bind(this);
    this.handfilts=this.handfilts.bind(this);
    this.handishx=this.handishx.bind(this);
    this.handishxc=this.handishxc.bind(this);
    this.handmdddx=this.handmdddx.bind(this);
    this.handmdddxc=this.handmdddxc.bind(this);
    this.handmdddxqd=this.handmdddxqd.bind(this);
    this.handqyddx=this.handqyddx.bind(this);
    this.handqyddxc=this.handqyddxc.bind(this);
    this.handqyddxqd=this.handqyddxqd.bind(this);
    this.mddsyc=this.mddsyc.bind(this);
    this.qydsyc=this.qydsyc.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handcm=this.handcm.bind(this);
    this.handcms=this.handcms.bind(this);
    this.handsel=this.handsel.bind(this);
    this.handists=this.handists.bind(this);
    this.handistsc=this.handistsc.bind(this);
    this.hzjdc=this.hzjdc.bind(this);
    this.hyj=this.hyj.bind(this);
    this.hsq=this.hsq.bind(this);
    this.hcw=this.hcw.bind(this);
    let admiAcco='';
    let comp=sessionStorage.getItem("SESSIONCOMP");
    if(comp!=0) {
      admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
    }
    this.state={
      fw:'',
      cys:'',
      jsr:this.props.text.user.name,
      qyd1:[],
      qyd2:undefined,
      mdd1:[],
      mdd2:undefined,
      qydhx:'',
      mddhx:'',
      activm:true,
      activq:false,
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:comp,
      admiAcco:admiAcco,
      ishx:false,
      qm:false,
      hxinfoq:'',
      hxinfom:'',
      ismdddx:false,
      mddduox:'',
      isqyddx:false,
      qydduox:'',
      zjdc:false,
      yj:false,
      sq:false,
      cw:false,
      bz:'',
      nbz:'',
      qydn:'',
      mddn:'',
      ists:false
    }
  }
  hzjdc(){
    this.setState({
      zjdc:!this.state.zjdc
    })
  }
  hyj(){
    this.setState({
      yj:!this.state.yj
    })
  }
  hsq(){
    this.setState({
      sq:!this.state.sq
    })
  }
  hcw(){
    this.setState({
      cw:!this.state.cw
    })
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
        this.props.actions.getqydyj(userName,token,serv,v);
      }
    }, 300);
  }
  handcns(v,o){
    let qyd2=o.props.date;
    this.setState({ qyd2:qyd2 });
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
    let mdd2=o.props.date;
    this.setState({ mdd2:mdd2 });
  }
  mddsyc(){
    this.setState({
      mdd1:[]
    })
  }
  qydsyc(){
    this.setState({
      qyd1:[]
    })
  }
  handqyddx(){
    if( this.state.qydhx == '' ){
      message.error("请先选择航线！");
    }else {
      this.setState({
        isqyddx: true
      });
    }
  }
  handqyddxc(){
    this.setState({
      isqyddx:false
    })
  }
  handqyddxqd(v){
    this.setState({
      qyd1:v,
      qydduox:v.length>0?'已选':'未选'
    });
  }
  handmdddxqd(v){
    this.setState({
      mdd1:v,
      mddduox:v.length>0?'已选':'未选'
    });
  }
  handmdddx(){
    if( this.state.mddhx == '' ){
      message.error("请先选择航线！");
    }else{
      this.setState({
        ismdddx:true
      });
    }
  }
  handmdddxc(){
    this.setState({
      ismdddx:false
    })
  }
  handishx(){
    this.setState({
      qm:this.state.activq?true:false,
      ishx:true
    })
  }
  handishxc(){
    this.setState({
      ishx:false
    })
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
  handqydhx(v,s){
    this.setState({
      qyd1:[],
      qydduox:'未选',
      qydhx:v,
      hxinfoq:s
    });
    this.props.actions.getysports(this.state.userName,this.state.token,this.state.fw,v);//根据服务航线获取港口
    this.props.actions.gethxportszjs(this.state.userName,this.state.token,this.state.fw,v);//根据服务航线获取最近港口
    this.props.actions.gethotpol(this.state.userName,this.state.token,this.state.fw,v);//获取该服务起运地港口热门
  }
  handmddhx(v,s){
    this.setState({
      mdd1:[],
      mddduox:'未选',
      mddhx:v,
      hxinfom:s
    });
    this.props.actions.gethxportszjms(this.state.userName,this.state.token,this.state.fw,v);//根据服务航线获取最近港口
    this.props.actions.getysportsm(this.state.userName,this.state.token,this.state.fw,v);//根据服务航线获取港口
    this.props.actions.gethotpol(this.state.userName,this.state.token,this.state.fw,v);//获取该服务起运地港口热门
  }
  handc(){
    this.props.handnewc();
  }
  handkan(v){
    this.setState({
      fw:v,
      cys:''
    });
    this.props.actions.getyscarrscy(this.state.userName,this.state.token,v);

    this.props.actions.getyscarrs(this.state.userName,this.state.token,v);//根据服务获取承运商
    this.props.actions.getysqportszj(this.state.userName,this.state.token,v);//获取根据服务最近港口起运地
    this.props.actions.getysmportszjm(this.state.userName,this.state.token,v);//获取根据服务最近港口目的地
    this.props.actions.getysgfwportsf(this.state.userName,this.state.token,v);//获取该服务港口
    this.props.actions.gethotpo(this.state.userName,this.state.token,v);//获取该服务港口热门
  }
  handsel(v,op){
    let lineType=1;
    let servName=op.props.children;
    if(servName=='AIR'){
      lineType=2;
    }else{
      lineType=1;
    }
    this.props.actions.getysline(this.state.userName,this.state.token,lineType);//根据服务获取航线
  }
  handch(){
    let userName=this.state.userName;
    let token=this.state.token;
    let serv=this.state.fw;
    let carr=this.state.cys;
    let user=this.state.comp!=0?this.state.jsr==this.props.text.user.name?this.props.text.user.user:this.state.jsr:this.props.ysrdu.ysusers.user;
    let isDepa=this.state.activq;
    let isDest=this.state.activm;
    let depaPort,destPort;
    if(isDepa){
      let qyd1s='';
      if(this.state.qyd1.length>0){
        for(let j=0;j<this.state.qyd1.length; j++){
          qyd1s+=JSON.parse(this.state.qyd1[j]).port+',';
        }
      }
      depaPort='['+qyd1s.substring(0,qyd1s.length-1)+']';
      destPort=this.state.mdd2==undefined?'':this.state.mdd2;
    }
    if(isDest){
      depaPort=this.state.qyd2==undefined?'':this.state.qyd2;
      let mdd1s='';
      if(this.state.mdd1.length>0){
        for(let i=0;i<this.state.mdd1.length; i++){
          mdd1s+=JSON.parse(this.state.mdd1[i]).port+',';
        }
      }
      destPort='['+mdd1s.substring(0,mdd1s.length-1)+']';
    }
    let booking=this.state.zjdc?1:0;
    let freight=this.state.yj?1:0;
    let qing=this.state.sq?1:0;
    let shipSpace=this.state.cw?1:0;
    let labe=this.state.bz;
    let inLabe=this.state.nbz;
    console.log(depaPort);
    console.log(destPort);
    if(serv==''||carr==''||depaPort=='[]'||destPort=='[]'||user==''||depaPort==''||destPort==''){
      message.error("请填写完整再提交");
    }else{
      //判断是否复制优势
      let This=this;
      confirm({
        title: '您是否确认',
        cancelText:"确认并复制该优势",
        onOk() {
          //确认该优势
          This.props.actions.postysnew(userName,token,serv,carr,depaPort,destPort,user,isDepa,isDest,booking,freight,qing,shipSpace,labe,inLabe);//新增运价优势
          This.props.handnewc(This.props.ysrdu.isshow);
        },
        onCancel() {
          //确认并复制该优势
          This.props.actions.postysnew(userName,token,serv,carr,depaPort,destPort,user,isDepa,isDest,booking,freight,qing,shipSpace,labe,inLabe);//新增运价优势
        }
      });
    }
  }
  render() {
    return (
      <div className="adnad">
        <div className="adnad1">
          <div className="adnad2">
            <div className="adnad3">
              <span>新增运价优势</span>
              <ul>
                <li><img className="adnad30" src={require('../../src/image/ystxl.png')} onClick={this.handists}/></li>
                <li><a href='javascript:void(0);' onClick={this.handch}>确定</a></li>
                <li><a href='javascript:void(0);' onClick={this.handc}>关闭</a></li>
              </ul>
            </div>
            <div className="adnad4">
              <ul>
                <li className="adnadli1">
                  <span className="adnad6">服务类型</span>
                  <Select showSearch
                          value={this.state.fw}
                          style={{ width: 180 }}
                          className="adselect"
                          optionFilterProp="children"
                          notFoundContent="无法找到"
                          placeholder="服务"
                          onChange={this.handkan}
                          onSelect={this.handsel}
                  >
                    {
                      this.props.ysrdu.ysser.map(s => {
                        return <Option key={s.serv}>{s.servName}</Option>
                      })
                    }
                  </Select>
                  <i className="btcolor1">*</i>
                </li>
                <li className="adnadli1">
                  <span className="adnad6">承运商</span>
                  <Select
                    showSearch
                    value={this.state.cys}
                    style={{ width: 180 }}
                    filterOption={this.handfilts}
                    notFoundContent="请先选择服务或未找到"
                    className="adselect"
                    placeholder="承运商"
                    onChange={(v)=>{return this.setState({cys:v})}}
                  >
                    <OptGroup key='1' label="热门">
                      {
                        this.props.ysrdu.carrscy.map(s => <Option key={s.carr}>{s.carrName}</Option>)
                      }
                    </OptGroup>
                    <OptGroup key='2' label="所有">
                      {
                        this.props.ysrdu.yscarrs.map(s => <Option key={s.carr}>{s.carrName}</Option>)
                      }
                    </OptGroup>
                  </Select>
                  <i className="btcolor1">*</i>
                </li>
                <li className="adnadli1">
                  <span className="adnad6">发布人</span>
                  <p>{this.props.ysrdu.ysusers.name}</p>
                </li>
                <li className="adnadli1">
                  <span className="adnad6">接收人</span>
                  {
                    this.state.comp!=0?
                      <Select showSearch
                              value={this.state.jsr}
                              style={{ width: 180 }}
                              optionFilterProp="children"
                              notFoundContent="未找到"
                              className="adselect"
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
                      </Select>:<p>{this.props.ysrdu.ysusers.name}</p>
                  }
                  {
                    this.state.comp!=0? <i className="btcolor1">*</i>:undefined
                  }
                </li>
                <li className="adnadli1">
                  <div className="adnad7">
                    <a href='javascript:void(0);'
                       className={this.state.activq?'activcolor':''}
                       onClick={(v)=>{return this.setState({activq:true,activm:false,qyd1:[],qyd2:undefined,mdd1:[],mdd2:undefined,hxinfoq:'',hxinfom:''})}}>起运地多选
                    </a>
                    <a href='javascript:void(0);'
                       className={this.state.activm?'activcolor':''}
                       onClick={(v)=>{return this.setState({activm:true,activq:false,qyd1:[],qyd2:undefined,mdd1:[],mdd2:undefined,hxinfoq:'',hxinfom:''})}}>目的地多选
                    </a>
                  </div>
                </li>
              </ul>
              <div className="adnad18">
                {
                  this.state.activq ? undefined :
                    <div className="adnad19">
                      <ul>
                        <li className="adnadli1">
                          <span className="adnad6">目的地航线</span>
                          <Input
                            value={this.state.hxinfom}
                            placeholder="请先选择服务再选择目的地航线"
                            style={{width: 180}}
                            className="adselect"
                            onClick={this.handishx}
                          />
                          <i className="btcolor1">*</i>
                        </li>
                        <li className="adnadli1">
                          <span className="adnad6">起运地</span>
                          {this.state.activq ?
                            <Input
                              value={this.state.qydduox}
                              placeholder="起运地多选"
                              style={{width: 180}}
                              className="adselect"
                              onClick={this.handqyddx}
                            />
                            :
                            <Select combobox
                                    value={this.state.qydn}
                                    style={{width: 180}}
                                    className="adselect"
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
                                  this.props.ysrdu.qydyj.map(s => <Option key={s.port} date={s.port}
                                                                          value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                }
                              </OptGroup>
                              <OptGroup label="最近">
                                {
                                  this.props.ysrdu.ysqportszj.map(s => <Option key={s.port} date={s.port}
                                                                               value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                }
                              </OptGroup>
                              <OptGroup label="热门">
                                {
                                  this.props.ysrdu.hotpo.map(s => <Option key={s.port} date={s.port}
                                                                          value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                }
                              </OptGroup>
                            </Select>
                          }
                          <i className="btcolor1">*</i>
                        </li>
                        <li className="adnadli1">
                          <span className="adnad6">目的地</span>
                          {
                            this.state.activm ?
                              <Input
                                value={this.state.mddduox}
                                placeholder="目的地多选"
                                style={{width: 180}}
                                className="adselect"
                                onClick={this.handmdddx}
                              />
                              :
                              <Select combobox
                                      value={this.state.mddn}
                                      style={{width: 180}}
                                      className="adselect"
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
                                    this.props.ysrdu.mddyj.map(s => <Option key={s.port} date={s.port}
                                                                            value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                  }
                                </OptGroup>
                                <OptGroup label="最近">
                                  {
                                    this.props.ysrdu.ysmportszjm.map(s => <Option key={s.port} date={s.port}
                                                                                  value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                  }
                                </OptGroup>
                                <OptGroup label="热门">
                                  {
                                    this.props.ysrdu.hotpo.map(s => <Option key={s.port} date={s.port}
                                                                            value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                  }
                                </OptGroup>
                              </Select>
                          }
                          <i className="btcolor1">*</i>
                        </li>
                      </ul>
                    </div>
                }
                {
                  this.state.activm ? undefined :
                    <div className="adnad19">
                      <ul>
                        <li className="adnadli1">
                          <span className="adnad6">起运地航线</span>
                          <Input
                            value={this.state.hxinfoq}
                            placeholder="请先选择服务再选择起运地航线"
                            style={{width:180}}
                            className="adselect"
                            onClick={this.handishx}
                          />
                          <i className="btcolor1">*</i>
                        </li>
                        <li className="adnadli1">
                          <span className="adnad6">目的地</span>
                          {
                            this.state.activm ?
                              <Input
                                value={this.state.mddduox}
                                placeholder="目的地多选"
                                style={{width: 180}}
                                className="adselect"
                                onClick={this.handmdddx}
                              />
                              :
                              <Select combobox
                                      value={this.state.mddn}
                                      style={{width: 180}}
                                      className="adselect"
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
                                    this.props.ysrdu.mddyj.map(s => <Option key={s.port} date={s.port}
                                                                            value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                  }
                                </OptGroup>
                                <OptGroup label="最近">
                                  {
                                    this.props.ysrdu.ysmportszjm.map(s => <Option key={s.port} date={s.port}
                                                                                  value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                  }
                                </OptGroup>
                                <OptGroup label="热门">
                                  {
                                    this.props.ysrdu.hotpo.map(s => <Option key={s.port} date={s.port}
                                                                            value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                  }
                                </OptGroup>
                              </Select>
                          }
                          <i className="btcolor1">*</i>
                        </li>
                        <li className="adnadli1">
                          <span className="adnad6">起运地</span>
                          {this.state.activq ?
                            <Input
                              value={this.state.qydduox}
                              placeholder="起运地多选"
                              style={{width: 180}}
                              className="adselect"
                              onClick={this.handqyddx}
                            />
                            :
                            <Select combobox
                                    value={this.state.qydn}
                                    style={{width: 180}}
                                    className="adselect"
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
                                  this.props.ysrdu.qydyj.map(s => <Option key={s.port} date={s.port}
                                                                          value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                }
                              </OptGroup>
                              <OptGroup label="最近">
                                {
                                  this.props.ysrdu.ysqportszj.map(s => <Option key={s.port} date={s.port}
                                                                               value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                }
                              </OptGroup>
                              <OptGroup label="热门">
                                {
                                  this.props.ysrdu.hotpo.map(s => <Option key={s.port} date={s.port}
                                                                          value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                                }
                              </OptGroup>
                            </Select>
                          }
                          <i className="btcolor1">*</i>
                        </li>
                      </ul>
                    </div>
                }
              </div>
              <VelocityTransitionGroup enter={{animation: "fadeIn",duration:100}} leave={{animation: "fadeOut"}}>
                {
                  this.state.ishx?<Adhx actions={this.props.actions}
                                        ysrdu={this.props.ysrdu}
                                        qm={this.state.qm}
                                        handqydhx={this.handqydhx}
                                        handmddhx={this.handmddhx}
                                        handishxc={this.handishxc}/>:undefined
                }
              </VelocityTransitionGroup>
              <VelocityTransitionGroup enter={{animation: "fadeIn",duration:100}} leave={{animation: "fadeOut"}}>
                {
                  this.state.ismdddx?<Addxkan actions={this.props.actions}
                                              ysrdu={this.props.ysrdu}
                                              hxinfom={this.state.hxinfom}
                                              handmdddxqd={this.handmdddxqd}
                                              mdd1={this.state.mdd1}
                                              mddsyc={this.mddsyc}
                                              handmdddxc={this.handmdddxc}/>:undefined
                }
              </VelocityTransitionGroup>
              <VelocityTransitionGroup enter={{animation: "fadeIn",duration:100}} leave={{animation: "fadeOut"}}>
                {
                  this.state.isqyddx?<Addxkanq actions={this.props.actions}
                                               ysrdu={this.props.ysrdu}
                                               hxinfoq={this.state.hxinfoq}
                                               qyd1={this.state.qyd1}
                                               qydsyc={this.qydsyc}
                                               handqyddxqd={this.handqyddxqd}
                                               handqyddxc={this.handqyddxc}/>:undefined
                }
              </VelocityTransitionGroup>
            </div>
          </div>
          <div className="adnad9">
            <div className="adnad10">非必选</div>
            <div className="adnad12">
              <span className="adnad13">优势明细</span>
              <ul>
                {
                  this.state.zjdc?
                    <li className="adnad14" onClick={this.hzjdc}>
                      直接订舱
                      <img className="adnad15" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="adnad16" onClick={this.hzjdc}>
                      直接订舱
                    </li>
                }
                {
                  this.state.yj?
                    <li className="adnad14" onClick={this.hyj}>
                      运价
                      <img className="adnad15" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="adnad16" onClick={this.hyj}>
                      运价
                    </li>
                }
                {
                  this.state.sq?
                    <li className="adnad14" onClick={this.hsq}>
                      DDP&nbsp;&nbsp;DDU
                      <img className="adnad15" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="adnad16" onClick={this.hsq}>
                      DDP&nbsp;&nbsp;DDU
                    </li>
                }
                {
                  this.state.cw?
                    <li className="adnad14" onClick={this.hcw}>
                      保障舱位
                      <img className="adnad15" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="adnad16" onClick={this.hcw}>
                      保障舱位
                    </li>
                }
              </ul>
              <img className="adnad17" src={require('../../src/image/ystxlh.png')} />
            </div>
            <div className="adnad11">
              <span>外标注</span>
              <textarea
                value={this.state.bz}
                maxLength="100"
                placeholder="该处内容为公司外其他用户所见"
                onChange={(e)=>{return this.setState({bz:e.target.value})}}
              ></textarea>
            </div>
            {
              this.state.comp>0?
                <div className="adnad11">
                  <span>内标注</span>
                  <textarea
                    value={this.state.nbz}
                    maxLength="100"
                    placeholder="该处内容公司员工可见"
                    onChange={(e)=>{return this.setState({nbz:e.target.value})}}
                  ></textarea>
                </div>
                :undefined
            }
          </div>
          <VelocityTransitionGroup enter={{animation: "fadeIn",duration:100}} leave={{animation: "fadeOut"}}>
            {
              this.state.ists?<Adtsfw handistsc={this.handistsc}/>:undefined
            }
          </VelocityTransitionGroup>
        </div>
      </div>
    );
  }
}