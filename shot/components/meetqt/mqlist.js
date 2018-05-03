/**
 * Created by Zing on 2017/3/24.
 */
import React,{Component} from 'react';
import moment from 'moment';
import {Modal,message,Popover} from 'antd';
import {browserHistory} from 'react-router'
const confirm = Modal.confirm;
import HTTPED from '../../date/address';

function isRtimes(a){
  if(a=='0000-00-00 00:00:00'||a==null){
    return '';
  }else{
    return a;
  }
}

export default class Mqlist extends Component {
  constructor(props) {
    super(props);
    this.handqt=this.handqt.bind(this);
    this.handxq=this.handxq.bind(this);
    this.handys=this.handys.bind(this);
    this.handover=this.handover.bind(this);
    this.handoverone=this.handoverone.bind(this);
    this.state= {
      names: sessionStorage.getItem("SESSIONUNAME"),
      userName: sessionStorage.getItem("SESSIONUSERACC"),
      token: sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handover(){
    //获取个人信息
    let uid=this.props.rows.user;
    this.props.actions.getpinfo(this.state.userName,this.state.token,uid);
  }
  handoverone(a){
    //获取个人信息
    let uid=a.target.getAttribute('name');
    this.props.actions.getpinfo(this.state.userName,this.state.token,uid);
  }
  handqt(a){
    let msci=a.target.getAttribute('name');
    let meetChat=this.props.rows.meetChat;
    let meetid=this.props.meetid;
    let userName=this.state.userName;
    let token=this.state.token;
    let This=this;
    let m1fr=isRtimes(this.props.rows.m1fr);//第一时段
    let m2fr=isRtimes(this.props.rows.m2fr);//第二时段
    let m3fr=isRtimes(this.props.rows.m3fr);//第三时段
    let m4fr=isRtimes(this.props.rows.m4fr);//第四时段
    let m5fr=isRtimes(this.props.rows.m5fr);//第五时段
    let m6fr=isRtimes(this.props.rows.m6fr);//第六时段
    let m7fr=isRtimes(this.props.rows.m7fr);//第七时段
    let shiduan=false;
    if(msci=='1'){
      if(m1fr==''){
        shiduan=false;
      }else{
        shiduan=true;
      }
    }else if(msci=='2'){
      if(m2fr==''){
        shiduan=false;
      }else{
        shiduan=true;
      }
    }else if(msci=='3'){
      if(m3fr==''){
        shiduan=false;
      }else{
        shiduan=true;
      }
    }else if(msci=='4'){
      if(m4fr==''){
        shiduan=false;
      }else{
        shiduan=true;
      }
    }else if(msci=='5'){
      if(m5fr==''){
        shiduan=false;
      }else{
        shiduan=true;
      }
    }else if(msci=='6'){
      if(m6fr==''){
        shiduan=false;
      }else{
        shiduan=true;
      }
    }else if(msci=='7'){
      if(m7fr==''){
        shiduan=false;
      }else{
        shiduan=true;
      }
    }else{
      shiduan=false;
    }

    if(this.state.names==this.props.rows.name){
      message.error("不能约谈自己！");
    }else{
      if(!shiduan){
        message.error("不存在该时段！");
      }else {
        confirm({
          title: '您是否确认要占用该时间段!',
          content: '约谈',
          onOk() {
            This.props.actions.postmct(userName, token, meetChat, msci, meetid);//约谈
          },
          onCancel() {
          }
        });
      }
    }
  }
  handxq(){
    browserHistory.push({
      pathname:'/meetxqlist',
      query:{
        a:this.props.rows.meetChat,
        b:this.props.rows.name,
        c:this.props.meetnames
      }
    });
  }
  handys(){
    browserHistory.push({
      pathname:'/meetyslist',
      query:{
        a:this.props.rows.user,
        b:this.props.rows.name,
        c:this.props.meetnames
      }
    });
  }
  render() {
    let logo=this.props.meetq.pinfo.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
        <p className="infologop">授信是否通过：{this.props.meetq.pinfo.depositEnab==1?'是':'否'}</p>
      </div>
    );
    const content = (
      <div>
        <p>
          {
            this.props.meetq.pinfo.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
          }
          公司全称:{this.props.meetq.pinfo.compName}
        </p>
        <p>公司简称:{this.props.meetq.pinfo.compAlia}</p>
        <p>行业:{this.props.meetq.pinfo.induName}</p>
        <p>口岸:{this.props.meetq.pinfo.portName}</p>
        <p>职位:{this.props.meetq.pinfo.posi}</p>
        <p>手机:{this.props.meetq.pinfo.mobi}</p>
        <p>电话:{this.props.meetq.pinfo.phon}</p>
        <p>QQ:{this.props.meetq.pinfo.qq}</p>
        <p>邮箱:{this.props.meetq.pinfo.mail}</p>
        <p>地址:{this.props.meetq.pinfo.addr}</p>
      </div>
    );
    let m1a,m2a,m3a,m4a,m5a,m6a,m7a,m1,m2,m3,m4,m5,m6,m7,mb,mc;
    m1a=<a href="javascript:void(0);" name='1' onClick={this.handqt} >
      {isRtimes(this.props.rows.m1fr)==''?'':moment(this.props.rows.m1fr).format('HH:mm')}~{isRtimes(this.props.rows.m1to)==''?'':moment(this.props.rows.m1to).format('HH:mm')}
      </a>;
    m2a=<a href="javascript:void(0);" name='2' onClick={this.handqt} >
      {isRtimes(this.props.rows.m2fr)==''?'':moment(this.props.rows.m2fr).format('HH:mm')}~{isRtimes(this.props.rows.m2to)==''?'':moment(this.props.rows.m2to).format('HH:mm')}
      </a>;
    m3a=<a href="javascript:void(0);" name='3' onClick={this.handqt} >
      {isRtimes(this.props.rows.m3fr)==''?'':moment(this.props.rows.m3fr).format('HH:mm')}~{isRtimes(this.props.rows.m3to)==''?'':moment(this.props.rows.m3to).format('HH:mm')}
      </a>;
    m4a=<a href="javascript:void(0);" name='4' onClick={this.handqt} >
      {isRtimes(this.props.rows.m4fr)==''?'':moment(this.props.rows.m4fr).format('HH:mm')}~{isRtimes(this.props.rows.m4to)==''?'':moment(this.props.rows.m4to).format('HH:mm')}
      </a>;
    m5a=<a href="javascript:void(0);" name='5' onClick={this.handqt} >
      {isRtimes(this.props.rows.m5fr)==''?'':moment(this.props.rows.m5fr).format('HH:mm')}~{isRtimes(this.props.rows.m5to)==''?'':moment(this.props.rows.m5to).format('HH:mm')}
      </a>;
    m6a=<a href="javascript:void(0);" name='6' onClick={this.handqt} >
      {isRtimes(this.props.rows.m6fr)==''?'':moment(this.props.rows.m6fr).format('HH:mm')}~{isRtimes(this.props.rows.m6to)==''?'':moment(this.props.rows.m6to).format('HH:mm')}
      </a>;
    m7a=<a href="javascript:void(0);" name='7' onClick={this.handqt} >
      {isRtimes(this.props.rows.m7fr)==''?'':moment(this.props.rows.m7fr).format('HH:mm')}~{isRtimes(this.props.rows.m7to)==''?'':moment(this.props.rows.m7to).format('HH:mm')}
      </a>;
    mb=<a href="javascript:void(0);">已占用</a>;
    if(this.props.rows.m1sc>0){
      if(this.state.names==this.props.rows.name){
        m1=<Popover content={content} title={texts} trigger="hover"><a href="javascript:void(0);" name={this.props.rows.m1sc} onMouseEnter={this.handoverone}>{this.props.rows.m1scName}</a></Popover>;
      }else{
        m1=mb;
      }
    }else{
      m1=m1a;
    }
    if(this.props.rows.m2sc>0){
      if(this.state.names==this.props.rows.name){
        m2=<Popover content={content} title={texts} trigger="hover"><a href="javascript:void(0);" name={this.props.rows.m2sc} onMouseEnter={this.handoverone}>{this.props.rows.m2scName}</a></Popover>;
      }else{
        m2=mb;
      }
    }else{
      m2=m2a;
    }
    if(this.props.rows.m3sc>0){
      if(this.state.names==this.props.rows.name){
        m3=<Popover content={content} title={texts} trigger="hover"><a href="javascript:void(0);" name={this.props.rows.m3sc} onMouseEnter={this.handoverone}>{this.props.rows.m3scName}</a></Popover>;
      }else{
        m3=mb;
      }
    }else{
      m3=m3a;
    }
    if(this.props.rows.m4sc>0){
      if(this.state.names==this.props.rows.name){
        m4=<Popover content={content} title={texts} trigger="hover"><a href="javascript:void(0);" name={this.props.rows.m4sc} onMouseEnter={this.handoverone}>{this.props.rows.m4scName}</a></Popover>;
      }else{
        m4=mb;
      }
    }else{
      m4=m4a;
    }
    if(this.props.rows.m5sc>0){
      if(this.state.names==this.props.rows.name){
        m5=<Popover content={content} title={texts} trigger="hover"><a href="javascript:void(0);" name={this.props.rows.m5sc} onMouseEnter={this.handoverone}>{this.props.rows.m5scName}</a></Popover>;
      }else{
        m5=mb;
      }
    }else{
      m5=m5a;
    }
    if(this.props.rows.m6sc>0){
      if(this.state.names==this.props.rows.name){
        m6=<Popover content={content} title={texts} trigger="hover"><a href="javascript:void(0);" name={this.props.rows.m6sc} onMouseEnter={this.handoverone}>{this.props.rows.m6scName}</a></Popover>;
      }else{
        m6=mb;
      }
    }else{
      m6=m6a;
    }
    if(this.props.rows.m7sc>0){
      if(this.state.names==this.props.rows.name){
        m7=<Popover content={content} title={texts} trigger="hover"><a href="javascript:void(0);" name={this.props.rows.m7sc} onMouseEnter={this.handoverone}>{this.props.rows.m7scName}</a></Popover>;
      }else{
        m7=mb;
      }
    }else{
      m7=m7a;
    }
    return (
      <li>
        <div className="mmetqt4" onMouseEnter={this.handover}>
          <Popover content={content} title={texts} trigger="hover">
            <span>{this.props.keys+1}.{this.props.rows.name}</span>
          </Popover>
        </div>
        <div className="mmetqt5">
          {this.props.rows.portName}
        </div>
        <div className="mmetqt6">
          <a href="javascript:void(0);" onClick={this.handxq}>需求</a>
        </div>
        <div className="mmetqt6">
          <a href="javascript:void(0);" onClick={this.handys}>优势</a>
        </div>
        <div className="mmetqt8">
          {m1}
        </div>
        <div className="mmetqt8">
          {m2}
        </div>
        <div className="mmetqt8">
          {m3}
        </div>
        <div className="mmetqt8">
          {m4}
        </div>
        <div className="mmetqt8">
          {m5}
        </div>
        <div className="mmetqt8">
          {m6}
        </div>
        <div className="mmetqt8">
          {m7}
        </div>
      </li>
    );
  }
}