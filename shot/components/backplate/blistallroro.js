/**
 * Created by Zing on 2016/11/24.
 */
import React,{Component} from 'react';
import Bdelroro from './bdelroro';
import Bchroro from './bchroro';
import Bzfroro from './bzfroro';
import moment from 'moment';
import {Popover} from 'antd';
import HTTPED from '../../date/address';
import Hpbzlist from './Hpbzlist';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Blistallot extends Component {
  constructor(props) {
    super(props);
    this.handxq=this.handxq.bind(this);
    this.handchshow=this.handchshow.bind(this);
    this.handchclose=this.handchclose.bind(this);
    this.handzfshow=this.handzfshow.bind(this);
    this.handzfclose=this.handzfclose.bind(this);
    this.handover=this.handover.bind(this);
    this.handxpbz=this.handxpbz.bind(this);
    this.handmose=this.handmose.bind(this);
    this.handmosec=this.handmosec.bind(this);
    let EnquStat,zt,yjyx;
    switch(this.props.rows.enquStat){
      case 10:
        EnquStat='正常';
        zt ='zt1';
        yjyx="运价有效";
        break;
      case 20:
        EnquStat='过期';
        zt ='zt2';
        yjyx='';
        break;
      case 30:
        if(this.props.rows.replStat==30){
          EnquStat='中标';
          zt ='zt3';
          yjyx='';
        }else{
          EnquStat='终止';
          zt ='zt5';
          yjyx='';
        }
        break;
      case 40:
        EnquStat='退关';
        zt ='zt4';
        yjyx='';
        break;
      case 50:
        EnquStat='终止';
        zt ='zt5';
        yjyx='';
        break;
      case 60:
        EnquStat='删除';
        zt ='';
        yjyx='';
        break;
      default:
        EnquStat='';
        zt ='';
        yjyx='';
        break;
    }
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      keysd:-1,
      isch:false,
      EnquStat:EnquStat,
      zt:zt,
      yjyx:yjyx,
      iszf:false,
      serindexs:0,
      hpbz:false
    }
  }
  handmosec(e){
    this.props.rows.comm!=null?e.target.setAttribute('src',require('../../src/image/ybz.png')):e.target.setAttribute('src',require('../../src/image/nbz.png'));
  }
  handmose(e){
    e.target.setAttribute('src',require('../../src/image/sbbz.png'));
  }
  handxpbz(){
    //重置所有
    this.props.handbzcz();
    this.setState({
      hpbz:!this.state.hpbz
    });
    //获取标注列表
    this.props.actions.getbzlbh(this.state.userName,this.state.token,this.props.rows.repl);
  }
  handover(){
    //获取个人信息
    let uid;
    this.props.rows.mngr>0?uid=this.props.rows.mngr:uid=this.props.rows.enquer;
    this.props.actions.getpeoinfo(this.state.userName,this.state.token,uid);
  }
  handxq(){
    //改变详情动画
    this.props.actions.hpshow(true,this.props.keys);
    //获取询盘详情
    this.props.actions.gethpxpxq(this.state.userName,this.state.token,this.props.rows.enqu);
    //获取回盘详情
    this.props.actions.gethphpxq(this.state.userName,this.state.token,this.props.rows.repl,this.state.userid);
  }
  handchshow(k){
    this.props.actions.hpshow(false);
    this.setState({
      keysd:k,
      isch:true
    });
  }
  handchclose(){
    this.props.actions.hpshow(false);
    this.setState({
      keysd:-1,
      isch:false
    });
  }
  handzfshow(k,v){
    this.props.actions.hpshow(false);
    this.setState({
      keysd:k,
      iszf:true,
      serindexs:v
    });
  }
  handzfclose(){
    this.setState({
      keysd:-1,
      iszf:false,
      serindexs:0
    });
  }
  render() {
    let logo=this.props.bck.peoinfo.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
        <p className="infologop">授信是否通过：{this.props.bck.peoinfo.depositEnab==1?'是':'否'}</p>
      </div>
    );
    const content = (
      <div>
        <p>
          {
            this.props.bck.peoinfo.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
          }
          公司全称:{this.props.bck.peoinfo.compName}
        </p>
        <p>公司简称:{this.props.bck.peoinfo.compAlia}</p>
        <p>行业:{this.props.bck.peoinfo.induName}</p>
        <p>口岸:{this.props.bck.peoinfo.portName}</p>
        <p>职位:{this.props.bck.peoinfo.posi}</p>
        <p>手机:{this.props.bck.peoinfo.mobi}</p>
        <p>电话:{this.props.bck.peoinfo.phon}</p>
        <p>QQ:{this.props.bck.peoinfo.qq}</p>
        <p>邮箱:{this.props.bck.peoinfo.mail}</p>
        <p>地址:{this.props.bck.peoinfo.addr}</p>
      </div>
    );
    return (
      <li className="bplt">
        <div className="hpqq">
          {
            this.props.rows.enquerQq?
              <a target="_blank" className="qqqehp"
                 href={"http://wpa.qq.com/msgrd?v=3&uin=" + this.props.rows.enquerQq + "&site=qq&menu=yes"}>
                <img src={require('../../src/image/qqqe.png')} alt="点击这里给我发消息"
                     title="点击这里给我发消息"/>
              </a>:undefined
          }
        </div>
        <div className="bplt1">
          <ul onMouseEnter={this.handover}>
            <li><span className={this.state.zt}>{this.state.EnquStat}</span></li>
            <Popover content={content} title={texts} trigger="hover">
              <li>{this.props.rows.mngr>0?this.props.rows.mngrName:this.props.rows.enquerName}</li>
            </Popover>
            <li>
              {
                this.props.rows.enquVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
              }
              {this.props.rows.enquCompAlia}
            </li>
          </ul>
        </div>
        <div className="bplt2">
          <div className="bplta">
            <h5>{this.props.rows.servName}:</h5>
            <ul>
              <li>{this.props.rows.depaPortName}</li>
              <li className="bpltd">
                {this.props.rows.freiCurr}
                {
                  this.props.rows.freiAll!=null?
                    ':':undefined
                }
                {this.props.rows.freiAll}</li>
              <li className="bpltb">{this.props.rows.destPortName}</li>
            </ul>
          </div>
          <div className="bpltc">
            <h5 title={this.props.rows.carrName}>{this.props.rows.carrName}
              {
                this.props.rows.carrName!=null?':':undefined
              }
            </h5>
            <span>
                            {this.props.rows.closTime}
              {this.props.rows.closTime!=null?'/':undefined}
              {this.props.rows.sailTime}
                        </span>
            <div title={this.props.rows.tranPortName==null?'':this.props.rows.tranPortName}>
              {this.props.rows.tranPortName==null?'':this.props.rows.tranPortName}
            </div>
            {
              this.props.rows.sailDays!=null?
                <p>约{this.props.rows.sailDays}天</p>:<p></p>
            }
          </div>
          <div className="bplte">
            {
              this.props.rows.freiAll != null ?
                <h5>{this.props.rows.freiCurr}:</h5>:undefined
            }
            {
              this.props.rows.RTMi != null&&this.props.rows.RTMi != 0 ?
                <div className="bpltediv">{this.props.rows.RTMi}W/M</div>:undefined
            }
          </div>
        </div>
        <div className="bplt3">
          <ul>
            <li>{this.state.yjyx}</li>
            <li>{this.props.rows.replerName}</li>
            {
              this.props.rows.replTime != null ?
                <li>{moment(this.props.rows.replTime).format('YYYY.MM.DD HH:mm')}</li>:undefined
            }
          </ul>
        </div>
        <div className="bplt4">
          <a href="javascript:void(0);" className="emlxq" onClick={this.handxq}>》</a>
        </div>
        <div className="xpg">
          {
            this.props.rows.comm!=null?
              <img onMouseOver={this.handmose} onMouseOut={this.handmosec} onClick={this.handxpbz} src={require('../../src/image/ybz.png')}/>:
              <img onMouseOver={this.handmose} onMouseOut={this.handmosec} onClick={this.handxpbz} src={require('../../src/image/nbz.png')}/>
          }
        </div>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.state.hpbz?
              <Hpbzlist
                rows={this.props.rows}
                actions={this.props.actions}
                bck={this.props.bck}
              /> : undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
          {
            this.props.shows.texthp&&this.props.shows.keyshp==this.props.keys?
              <Bdelroro handchshow={this.handchshow}
                        handzfshow={this.handzfshow}
                        keysd={this.props.keys}
                        actions={this.props.actions}
                        bck={this.props.bck}
                        hl={this.props.hl}
                        shows={this.props.shows}/>:undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
          {
            this.state.isch&&this.state.keysd==this.props.keys?
              <Bchroro handchclose={this.handchclose}
                       actions={this.props.actions}
                       text={this.props.text}
                       bck={this.props.bck}/>:undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
          {
            this.state.iszf&&this.state.keysd==this.props.keys?
              <Bzfroro handzfclose={this.handzfclose}
                       text={this.props.text}
                       sclss={this.state.serindexs}
                       actions={this.props.actions}
                       bck={this.props.bck}/>:undefined
          }
        </VelocityTransitionGroup>
      </li>
    );
  }
}