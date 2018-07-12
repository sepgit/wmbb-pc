/**
 * Created by Zing on 2017/5/16.
 */
import React,{Component} from 'react';
import Cabdetil from './cabdetil';
import {Popover} from 'antd';
import HTTPED from '../../date/address';
import moment from 'moment';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

//求舱方发起的求舱列表  列表页
export default class Cablistall extends Component {
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
    let uid=this.props.rows.provUser;
    this.props.actions.getcainfo(this.state.userName,this.state.token,uid);
  }
  handxq(){
    this.setState({
      isxq:true
    });
    //获取舱位保函详情
    let userName=this.state.userName;
    let token=this.state.token;
    let cabEnqu=this.props.rows.cabEnqu;
    let cabRepl=this.props.rows.cabRepl;
    this.props.actions.gethqxq(userName,token,cabEnqu,cabRepl);
  }
  
  handxqc(){
    this.setState({
      isxq:false
    })
  }
  render() {
    let logo=this.props.cabnew.cainfo.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
          <p className="infologop">授信是否通过：{this.props.cabnew.cainfo.depositEnab==1?'是':'否'}</p>
      </div>
    );
    // console.log(this.props.cabnew);
    const content = (
      <div>
          <p>
            {
              this.props.cabnew.cainfo.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
            }
              公司全称:{this.props.cabnew.cainfo.compName}
          </p>
          <p>公司简称:{this.props.cabnew.cainfo.compAlia}</p>
          <p>行业:{this.props.cabnew.cainfo.induName}</p>
          <p>口岸:{this.props.cabnew.cainfo.portName}</p>
          <p>职位:{this.props.cabnew.cainfo.posi}</p>
          <p>手机:{this.props.cabnew.cainfo.mobi}</p>
          <p>电话:{this.props.cabnew.cainfo.phon}</p>
          <p>QQ:{this.props.cabnew.cainfo.qq}</p>
          <p>邮箱:{this.props.cabnew.cainfo.mail}</p>
          <p>地址:{this.props.cabnew.cainfo.addr}</p>
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

    
    console.log(this.props.rows)
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
              <div className="cab12" title={this.props.rows.provMobi}>
                  <h5>手机号:</h5>
                  <span>{this.props.rows.provMobi}</span>
              </div>
              <div className="cab12">
                  <h5>货物状态:</h5>
                  <span>{this.props.rows.goodsStat}</span>
              </div>
              <div className="cab12" onMouseEnter={this.handover}>
                  <h5>供舱人:</h5>
                  <Popover content={content} title={texts} trigger="hover">
                      <span title={this.props.rows.provName}>{this.props.rows.provName}</span>
                  </Popover>
              </div>
              <div className="cab12" title={this.props.rows.provCompAlia}>
                  <h5>供舱公司:</h5>
                  <span>{this.props.rows.provCompAlia}</span>
              </div>
              <div className="cab12" title={this.props.rows.carrName}>
                  <h5>承运商:</h5>
                  <span>{this.props.rows.carrName}</span>
              </div>
              <div className="cab12">
                  <h5>求舱编号:</h5>
                  <span>{this.props.rows.cabEnqu}</span>
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
                  this.props.rows.cabFee != null || this.props.rows.cabFee != 0?
                    // <span>{this.props.rows.curr == '1' ? '¥' : '$'} {this.props.rows.cabFee}</span>
                    // <span> {this.props.rows.cabFee}</span>:undefined
                  //   this.props.rows.cabFee == 0 ?undefined: <span>{this.props.rows.curr == '1' ? '¥' : '$'}  {this.props.rows.cabFee}</span>
                  // :undefined
                  <span>{this.props.rows.curr == '1' ? '¥' : '$'}  {this.props.rows.cabFee}</span>:undefined
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
                <Cabdetil
                  actions={this.props.actions}
                  cabnew={this.props.cabnew}
                  handxqc={this.handxqc}
                  cabRepl={this.props.rows.cabRepl}
                /> :
                undefined
            }
          </VelocityTransitionGroup>
      </li>
    );
  }
}