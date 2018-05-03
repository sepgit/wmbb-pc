/**
 * Created by Chen on 2017/12/11.
 */
import React,{Component} from 'react';
import {Popover} from 'antd';
import HTTPED from '../../date/address';
import moment from 'moment';
import Cabgdetil from './cabgdetil';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Cabglistall extends Component {
  constructor(props) {
    super(props);
    this.detailonClick=this.detailonClick.bind(this);
    this.fonClose=this.fonClose.bind(this);
    this.handover=this.handover.bind(this);
    this.state={
      isxq:false,
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handover(){
    //获取个人信息
    let uid=this.props.rows.provUser;
    this.props.actions.getcainfo(this.state.userName,this.state.token,uid);
  }
  detailonClick(){
    this.setState({
      isxq:true
    });
    //获取舱位保函详情
    let userName=this.state.userName;
    let token=this.state.token;
    let cabDisp=this.props.rows.cabDisp;
    this.props.actions.getcabDisp(userName,token,cabDisp);
  }
  fonClose(){
    this.setState({
      isxq:false
    })
  }
  render() {
    let logo=this.props.cabgnew.cainfo.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
        <p className="infologop">授信是否通过：{this.props.cabgnew.cainfo.depositEnab==1?'是':'否'}</p>
      </div>
    );
    const content = (
      <div>
        <p>
          {
            this.props.cabgnew.cainfo.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
          }
          公司全称:{this.props.cabgnew.cainfo.compName}
        </p>
        <p>公司简称:{this.props.cabgnew.cainfo.compAlia}</p>
        <p>行业:{this.props.cabgnew.cainfo.induName}</p>
        <p>口岸:{this.props.cabgnew.cainfo.portName}</p>
        <p>职位:{this.props.cabgnew.cainfo.posi}</p>
        <p>手机:{this.props.cabgnew.cainfo.mobi}</p>
        <p>电话:{this.props.cabgnew.cainfo.phon}</p>
        <p>QQ:{this.props.cabgnew.cainfo.qq}</p>
        <p>邮箱:{this.props.cabgnew.cainfo.mail}</p>
        <p>地址:{this.props.cabgnew.cainfo.addr}</p>
      </div>
    );
    let EnquStat,zt;
    switch(this.props.rows.cabSt){
      case 1:
        EnquStat='正常';
        zt ='zt1';
        break;
      case 2:
        EnquStat='退关';
        zt ='zt4';
        break;
      case 3:
        EnquStat='履约';
        zt ='zt3';
        break;
      case 4:
        EnquStat='争议';
        zt ='zt5';
        break;
      default:
        EnquStat='';
        zt ='';
        break;
    }
    return (
      <li className="cab9">{/* className='cab99'*/}
        {/*<div className="cab132">
          <div className="cab101" >
            <h5>服务类型:</h5>
            <span>{this.props.rows.servName}</span>
          </div>
          <div className="cab101" >
            <h5>起运地:</h5>
            <span>{this.props.rows.depaPortName}</span>
          </div>
          <div className="cab101" >
            <h5>目的地:</h5>
            <span>{this.props.rows.destPortName}</span>
          </div>
          <div className="cab101" >
            <h5>供舱公司:</h5>
            <span>{this.props.rows.resCompAlia}</span>
          </div>
        </div>
        <div className="cab104">
          <a href="javascript:void(0);" onClick={this.detailonClick}>详情</a>
        </div>*/}
          <div className="cab10">
              <div className="cab12" title={this.props.rows.provCompAlia}>
                  <h5>服务类型:</h5>
                  <span>{this.props.rows.servName}</span>
              </div>
              <div className="cab12" title={this.props.rows.depaPortName}>
                  <h5>起运地:</h5>
                  <span>{this.props.rows.depaPortName}</span>
              </div>
              <div className="cab12" title={this.props.rows.destPortName}>
                  <h5>目的地:</h5>
                  <span>{this.props.rows.destPortName}</span>
              </div>
              <div className="cab12">
                  <h5>手机号:</h5>
                  <span></span>
              </div>
              <div className="cab12">
                  <h5>货物状态:</h5>
                  <span></span>
              </div>
              <div className="cab12">
                  <h5>供舱人:</h5>
                 <span title={this.props.rows.resName}>{this.props.rows.resName}</span>
              </div>
              <div className="cab12" title={this.props.rows.resCompAlia}>
                  <h5>供舱公司:</h5>
                  <span>{this.props.rows.resCompAlia}</span>
              </div>
              <div className="cab12">
                  <h5>承运商:</h5>
                  <span></span>
              </div>
              <div className="cab12">
                  <h5>求舱编号:</h5>
                  <span>{this.props.rows.cabDisp}</span>
              </div>
              <div className="cab12">
                  <h5>舱位状态:</h5>
                  <span></span>
              </div>
              <div className="cab12">
                  <h5>定金金额:</h5>
                 <span></span>
              </div>
              <div className="cab12">
                  <h5>内陆费用:</h5>
                 <span></span>
              </div>
              <div className="cab60">
                  <h5>中标时间:</h5>
                 <span></span>
              </div>

          </div>
          <div className="cab11">
              <a href="javascript:void(0);" onClick={this.detailonClick}>详情</a>
          </div>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.state.isxq?
              <Cabgdetil
                actions={this.props.actions}
                cabgnew={this.props.cabgnew}
                fonClose={this.fonClose}
                cabDisp={this.props.rows.cabDisp}
              /> :
              undefined
          }
        </VelocityTransitionGroup>
      </li>
    );
  }
}