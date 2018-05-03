/**
 * Created by Zing on 2017/5/16.
 */
import React,{Component} from 'react';
import Cabrdetil from './cabrdetil';
import {Popover} from 'antd';
import moment from 'moment';
import HTTPED from '../../date/address';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Cabrlistall extends Component {
  constructor(props) {
    super(props);
    this.handxq=this.handxq.bind(this);
    this.handxqc=this.handxqc.bind(this);
    this.handover=this.handover.bind(this);
    this.state={
      isxq:false,
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handover(){
    //获取个人信息
    let uid=this.props.rows.reqUser;
    this.props.actions.getcarinfo(this.state.userName,this.state.token,uid);
  }
  handxq(){
    this.setState({
      isxq:true
    });
    //获取舱位保函详情
    let userName=this.state.userName;
    let token=this.state.token;
    let cabRepl=this.props.rows.cabRepl;
    let cabEnqu=this.props.rows.cabEnqu;
    this.props.actions.gethqxqr(userName,token,cabRepl,cabEnqu);
  }
  handxqc(){
    this.setState({
      isxq:false
    })
  }
  render() {
    let logo=this.props.cabrnew.carinfo.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
          <p className="infologop">授信是否通过：{this.props.cabrnew.carinfo.depositEnab==1?'是':'否'}</p>
      </div>
    );
    const content = (
      <div>
          <p>
            {
              this.props.cabrnew.carinfo.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
            }
              公司全称:{this.props.cabrnew.carinfo.compName}
          </p>
          <p>公司简称:{this.props.cabrnew.carinfo.compAlia}</p>
          <p>行业:{this.props.cabrnew.carinfo.induName}</p>
          <p>口岸:{this.props.cabrnew.carinfo.portName}</p>
          <p>职位:{this.props.cabrnew.carinfo.posi}</p>
          <p>手机:{this.props.cabrnew.carinfo.mobi}</p>
          <p>电话:{this.props.cabrnew.carinfo.phon}</p>
          <p>QQ:{this.props.cabrnew.carinfo.qq}</p>
          <p>邮箱:{this.props.cabrnew.carinfo.mail}</p>
          <p>地址:{this.props.cabrnew.carinfo.addr}</p>
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
      <li className="cab9">
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
              <div className="cab12" title={this.props.rows.reqCompAlia}>
                  <h5>手机号:</h5>
                  <span>{this.props.rows.reqMobi}</span>
              </div>
              <div className="cab12">
                  <h5>货物状态:</h5>
                  <span>{this.props.rows.goodsStat}</span>
              </div>
              <div className="cab12" onMouseEnter={this.handover}>
                  <h5>求舱人:</h5>
                  <Popover content={content} title={texts} trigger="hover">
                      <span title={this.props.rows.reqName}>{this.props.rows.reqName}</span>
                  </Popover>
              </div>
              <div className="cab12" title={this.props.rows.reqCompAlia}>
                  <h5>求舱公司:</h5>
                  <span>{this.props.rows.reqCompAlia}</span>
              </div>
              <div className="cab12" title={this.props.rows.carrName}>
                  <h5>承运商:</h5>
                  <span>{this.props.rows.carrName}</span>
              </div>
              <div className="cab12">
                  <h5>供舱编号:</h5>
                  <span>{this.props.rows.cabRepl}</span>
              </div>
              <div className="cab12">
                  <h5>舱位状态:</h5>
                  <span className={zt}>{EnquStat}</span>
              </div>
              <div className="cab12">
                  <h5>定金金额:</h5>
                {
                  this.props.rows.depo != null ?
                    <span>{this.props.rows.curr == '1' ? '¥' : '$'} {this.props.rows.depo}</span>:undefined
                }
              </div>
              <div className="cab12">
                  <h5>内陆费用:</h5>
                {
                  this.props.rows.cabFee!=null?
                    <span>{this.props.rows.curr == '1' ? '¥' : '$'} {this.props.rows.cabFee}</span>:undefined
                }
              </div>
              <div className="cab60" title={moment(this.props.rows.winTime).format('YYYY.MM.DD HH:mm:ss')}>
                  <h5>中标时间:</h5>
                {
                  this.props.rows.winTime!=null?
                    <span>{moment(this.props.rows.winTime).format('YYYY.MM.DD HH:mm:ss')}</span>:undefined
                }
              </div>

          </div>
          <div className="cab11">
              <a href="javascript:void(0);" onClick={this.handxq}>详情</a>
          </div>
          <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
            {
              this.state.isxq?
                <Cabrdetil
                  actions={this.props.actions}
                  cabrnew={this.props.cabrnew}
                  cabEnqu={this.props.rows.cabEnqu}
                  handxqc={this.handxqc}
                /> :
                undefined
            }
          </VelocityTransitionGroup>
      </li>
    );
  }
}