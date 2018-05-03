/**
 * Created by Zing on 2016/8/3.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Xphplistbz from './xphplistbz';
import {Popover,message} from 'antd';
import HTTPED from '../../date/address';
import { VelocityTransitionGroup } from 'velocity-react';

export default class Xphplistbb extends Component {
  constructor(props) {
    super(props);
    this.handlhplist=this.handlhplist.bind(this);
    this.handcl=this.handcl.bind(this);
    this.handover=this.handover.bind(this);
    this.handzbpjs=this.handzbpjs.bind(this);
    this.state={
      ishplistshow:false,
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handzbpjs(){
    let v=this.props.rows.replStat;//中标状态
    let s=this.props.rows.repl;//回盘ID
    //回盘评价详情
    this.props.actions.gethppjxq(this.state.userName,this.state.token,s);
    this.props.handyspj(v,s);
  }
  handover(){
    //获取个人信息
    this.props.actions.getpeohpinfod(this.state.userName,this.state.token,this.props.rows.repler);
  }
  handcl(){
    this.props.handxz(this.props.rows.repl,this.props.rows.replStat,this.props.keys);
    //回盘超期提醒
    let hptime=this.props.rows.expiDate;
    let ctime=moment().diff(hptime,'days');
    if(ctime>0){
      message.error('超过运价有效期！');
    }
    //显示中标按钮
    this.props.handzbin();
  }
  handlhplist(){
    this.setState({
      ishplistshow: !this.state.ishplistshow
    });
  }
  render() {
    let styl='';
    if(this.props.keys==this.props.hpindex){
      styl='2px solid #18A1DD';
    }
    let logo=this.props.getdetil.peohpinfo.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
        <p className="infologop">授信是否通过：{this.props.getdetil.peohpinfo.depositEnab==1?'是':'否'}</p>
      </div>
    );
    const content = (
      <div>
        <p>
          {
            this.props.getdetil.peohpinfo.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
          }
          公司全称:{this.props.getdetil.peohpinfo.compName}
        </p>
        <p>公司简称:{this.props.getdetil.peohpinfo.compAlia}</p>
        <p>行业:{this.props.getdetil.peohpinfo.induName}</p>
        <p>口岸:{this.props.getdetil.peohpinfo.portName}</p>
        <p>职位:{this.props.getdetil.peohpinfo.posi}</p>
        <p>手机:{this.props.getdetil.peohpinfo.mobi}</p>
        <p>电话:{this.props.getdetil.peohpinfo.phon}</p>
        <p>QQ:{this.props.getdetil.peohpinfo.qq}</p>
        <p>邮箱:{this.props.getdetil.peohpinfo.mail}</p>
        <p>地址:{this.props.getdetil.peohpinfo.addr}</p>
      </div>
    );
    return (
      <li onClick={this.handcl} style={{border:styl}}>
        <div className="xppxa">
          {
            this.props.rows.replStat==30?
              <div className="xppxh">
                <img src={require('../../src/image/zb.png')}/>
              </div>:undefined
          }
          <div className="xppxi">
            {
              this.props.rows.replerQq?
                <a target="_blank" className="qqqexpxq"
                   href={"http://wpa.qq.com/msgrd?v=3&uin=" + this.props.rows.replerQq + "&site=qq&menu=yes"}>
                  <img src={require('../../src/image/qqqe.png')} alt="点击这里给我发消息"
                       title="点击这里给我发消息"/>
                </a>:undefined
            }
          </div>
          <div className="xppxb" onMouseEnter={this.handover}>
            <h5>回盘人:</h5>
            <Popover content={content} title={texts} trigger="hover">
              <span>{this.props.rows.replerName?this.props.rows.replerName:undefined}</span>
            </Popover>
          </div>
          <div className="xppxj">
            <h5>回盘公司:</h5>
            {
              this.props.rows.replVip==1?
                <img src={require('../../src/image/vip.png')}/>:undefined
            }
            <span>{this.props.rows.replCompAlia?this.props.rows.replCompAlia:undefined}</span>
          </div>
          <div className="xppxc">
            <h5>中转地:</h5>
            <span>{this.props.rows.tranPortName==''?'直达':this.props.rows.tranPortName}</span>
          </div>
          <div className="xppxe">
            <h5>CLS/ETD:</h5>
            <span>{this.props.rows.closTime}/{this.props.rows.sailTime}</span>
          </div>
          <div className="xppxpl">
            <span onClick={this.handzbpjs}>评</span>
          </div>
        </div>
        <div className="xppxa">
          <div className="xppxb">
            <h5>承运商:</h5>
            <span>{this.props.rows.carrName}</span>
          </div>
          <div className="xppxc">
            <h5>运价有效期:</h5>
            <span>{moment(this.props.rows.expiDate).format('YYYY.MM.DD')}</span>
          </div>
          <div className="xppxc">
            <h5>回盘时间:</h5>
            <span>{moment(this.props.rows.replTime).format('YYYY.MM.DD HH:mm')}</span>
          </div>
          <div className="xppxd">
            <h5>T/T:</h5>
            <span>约{this.props.rows.sailDays}天</span>
          </div>
          <div className="xppxf">
            <span onClick={this.handlhplist}>回盘详情</span>
          </div>
        </div>
        <div className="xppxa">
          <div className="xppxg">
            <h5>运价:</h5>
            <p>{this.props.rows.freiCurr}</p>
            <ul>
              <li>{this.props.rows.RTMi+'W/M'}</li>
            </ul>
          </div>
        </div>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.state.ishplistshow?<Xphplistbz rows={this.props.rows}/>:undefined
          }
        </VelocityTransitionGroup>
      </li>
    );
  }
}