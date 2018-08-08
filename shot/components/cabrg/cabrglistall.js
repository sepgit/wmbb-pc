/**
 * Created by Chen on 2017/12/11.
 */
import React,{Component} from 'react';
import {Popover} from 'antd';
import HTTPED from '../../date/address';
import moment from 'moment';
import Cabrgdetil from './cabrgdetil';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Cabrglistall extends Component {
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
    let uid=this.props.rows.reqUser;
    this.props.actions.getcainfo(this.state.userName,this.state.token,uid);
  }
  detailonClick(){
    this.setState({
      isxq:true
    });
    //获取舱位保函详情
    // console.log(this.props.cabrgnew.cabDispdetail);
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
    let logo=this.props.cabrgnew.cainfo.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
        <p className="infologop">授信是否通过：{this.props.cabrgnew.cainfo.depositEnab==1?'是':'否'}</p>
      </div>
    );
    const content = (
      <div>
        <p>
          {
            this.props.cabrgnew.cainfo.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
          }
          公司全称:{this.props.cabrgnew.cainfo.compName}
        </p>
        <p>公司简称:{this.props.cabrgnew.cainfo.compAlia}</p>
        <p>行业:{this.props.cabrgnew.cainfo.induName}</p>
        <p>口岸:{this.props.cabrgnew.cainfo.portName}</p>
        <p>职位:{this.props.cabrgnew.cainfo.posi}</p>
        <p>手机:{this.props.cabrgnew.cainfo.mobi}</p>
        <p>电话:{this.props.cabrgnew.cainfo.phon}</p>
        <p>QQ:{this.props.cabrgnew.cainfo.qq}</p>
        <p>邮箱:{this.props.cabrgnew.cainfo.mail}</p>
        <p>地址:{this.props.cabrgnew.cainfo.addr}</p>
      </div>
    );
    let EnquStat,zt;
    switch(this.props.rows.stat){
      case 10:
        EnquStat='正常';
        zt ='zt1';
        break;
      case 20:
        EnquStat='过期';
        zt ='zt5';
        break;
      case 30:
        EnquStat='履约';
        zt ='zt3';
        break;
      case 40:
        EnquStat='退关';
        zt ='zt4';
        break;
      case 50:
        EnquStat='争议';
        zt ='zt5';
        break;
      case 60:
        EnquStat='撤销';
        zt ='zt5';
        break;
      default:
        EnquStat='';
        zt ='';
        break;
    }
    return (
      <li className="cab9">{/* className='cab99'*/}
       {/* <div className="cab132">
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
                  <span>{this.props.rows.mobi}</span>
              </div>
              <div className="cab12">
                  <h5>货物状态:</h5>
                  <span>{this.props.rows.goodsStat}</span>
              </div>
              <div className="cab12"  onMouseEnter={this.handover}>
                  <h5>求舱人:</h5>
                  {/* <span title={this.props.rows.reqName}>{this.props.rows.reqName}</span> */}
                  <Popover content={content} title={texts} trigger="hover">
                    <span title={this.props.rows.reqName}>{this.props.rows.reqName}</span>
                  </Popover>
              </div>
              <div className="cab12" title={this.props.rows.reqCompAlia}>
                  <h5>求舱公司:</h5>
                  <span>{this.props.rows.reqCompAlia}</span>
              </div>
              <div className="cab12">
                  <h5>承运商:</h5>
                  <span>{this.props.rows.carrName}</span>
              </div>
              <div className="cab12">
                  <h5>供舱编号:</h5>
                  <span>{this.props.rows.cabDisp}</span>
              </div>
              <div className="cab12">
                  <h5>舱位状态:</h5>
                  <span className={zt}>{EnquStat}</span>
              </div>
              <div className="cab12">
                  <h5>定金金额:</h5>
                  {
                  this.props.rows.allDepo != null?
                    <span>{this.props.rows.curr == '1' ? '¥' : '$'} {this.props.rows.allDepo}</span>:undefined
                  }
                  {/* <span>{this.props.rows.allDepo}</span> */}
              </div>
              <div className="cab12">
                  <h5>内陆费用:</h5>
                  {
                    this.props.rows.cabFee != null?
                      this.props.rows.cabFee != 0?
                      <span> {this.props.rows.curr == '1' ? '¥' : '$'} {this.props.rows.cabFee}</span>:undefined
                    :undefined
                  }
                  
              </div>
              <div className="cab60">
                  <h5>中标时间:</h5>
                  {
                    this.props.rows.creatTime!=null?
                      <span>{moment(this.props.rows.creatTime).format('YYYY.MM.DD HH:mm:ss')}</span>:undefined
                  }
              </div>

          </div>
          <div className="cab11">
              <a href="javascript:void(0);" onClick={this.detailonClick}>详情</a>
          </div>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.state.isxq?
              <Cabrgdetil
                actions={this.props.actions}
                cabrgnew={this.props.cabrgnew}
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