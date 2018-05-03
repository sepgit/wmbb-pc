/**
 * Created by Zing on 2016/8/4.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Rhfdetil from './rhfdetial';
import Rhfnew from './rhfnew';
import {Popover} from 'antd';
import HTTPED from '../../date/address';
import Hfbzlist from './Hfbzlist';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Relistall extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handlech = this.handlech.bind(this);
    this.handover=this.handover.bind(this);
    this.handxpbz=this.handxpbz.bind(this);
    this.handmose=this.handmose.bind(this);
    this.handmosec=this.handmosec.bind(this);
    let respt;
    this.props.rows.respTime==null?respt=1:respt=0;
    this.state={
      respt:respt,
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      hfbz:false
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
      hfbz:!this.state.hfbz
    });
    //获取标注列表
    this.props.actions.getbzlbf(this.state.userName,this.state.token,this.props.rows.resp);
  }
  handover(){
    //获取个人信息
    let uid;
    this.props.rows.mngr>0?uid=this.props.rows.mngr:uid=this.props.rows.conser;
    this.props.actions.getpeoinfohf(this.state.userName,this.state.token,uid);
  }
  handleClick(){
    //改变详情动画
    this.props.rows.respTime==null?this.setState({respt:1}): this.setState({respt:0});
    this.props.actions.hfshow(true,this.props.keys);
    let userName = this.state.userName;
    let token = this.state.token;
    let userid=this.state.userid;
    let respid=this.props.rows.resp;
    this.props.actions.gethfhfrede(userName,token,respid,userid);//获取回复详情
    let consid=this.props.rows.cons;
    this.props.actions.getzxxq(userName,token,consid);//获取咨询详情
  }
  handlech(){
    //详情重回
    this.setState({
      respt:1
    })
  }
  render() {
    let EnquStat,zt;
    switch(this.props.rows.respStat){
      case 10:
        EnquStat='正常';
        zt ='zt1';
        break;
      case 30:
        EnquStat='收藏';
        zt ='zt3';
        break;
      case 50:
        EnquStat='终止';
        zt ='zt5';
        break;
      default:
        EnquStat='';
        zt ='';
        break;
    }
    let logo=this.props.replays.peoinfohf.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
        <p className="infologop">授信是否通过：{this.props.replays.peoinfohf.depositEnab==1?'是':'否'}</p>
      </div>
    );
    const content = (
      <div>
        <p>
          {
            this.props.replays.peoinfohf.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
          }
          公司全称:{this.props.replays.peoinfohf.compName}
        </p>
        <p>公司简称:{this.props.replays.peoinfohf.compAlia}</p>
        <p>行业:{this.props.replays.peoinfohf.induName}</p>
        <p>口岸:{this.props.replays.peoinfohf.portName}</p>
        <p>职位:{this.props.replays.peoinfohf.posi}</p>
        <p>手机:{this.props.replays.peoinfohf.mobi}</p>
        <p>电话:{this.props.replays.peoinfohf.phon}</p>
        <p>QQ:{this.props.replays.peoinfohf.qq}</p>
        <p>邮箱:{this.props.replays.peoinfohf.mail}</p>
        <p>地址:{this.props.replays.peoinfohf.addr}</p>
      </div>
    );
    return (
      <li className="replis">
        <div className="reply2" onMouseEnter={this.handover}>
          <Popover content={content} title={texts} trigger="hover">
            <p>{this.props.rows.conserName}</p>
          </Popover>
        </div>
        <div className="reply2">
          {
            this.props.rows.consVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
          }
          {this.props.rows.consCompAlia}
        </div>
        <div className="reply2">
          {this.props.rows.portName}
        </div>
        <div className="reply2">
          {this.props.rows.servName}
          {
            this.props.rows.servName==null?undefined:this.props.rows.servOptiName==null?undefined:'-'
          }
          {this.props.rows.servOptiName}
        </div>
        <div className="reply2">
          {
            this.props.rows.respTime==null?'':moment(this.props.rows.respTime).format('YYYY-MM-DD')
          }
        </div>
        <div className="reply2">
          <span className={zt}>{EnquStat}</span>
        </div>
        <a href="javascript:void(0);" className="reply3" onClick={this.handleClick}>
          》
        </a>
        <div className="xpg">
          {
            this.props.rows.comm!=null?
              <img onMouseOver={this.handmose} onMouseOut={this.handmosec} onClick={this.handxpbz} src={require('../../src/image/ybz.png')}/>:
              <img onMouseOver={this.handmose} onMouseOut={this.handmosec} onClick={this.handxpbz} src={require('../../src/image/nbz.png')}/>
          }
        </div>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.state.hfbz?
              <Hfbzlist
                rows={this.props.rows}
                actions={this.props.actions}
                replays={this.props.replays}
              /> : undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.props.shows.texthf&&this.props.shows.keyshf==this.props.keys ? this.state.respt==1?
              <Rhfnew
                actions={this.props.actions}
                rows={this.props.rows}
                text={this.props.text}
                replays={this.props.replays}
                handzf={this.props.handzf}
              /> :
              <Rhfdetil
                handch={this.handlech}
                handzf={this.props.handzf}
                text={this.props.text}
                actions={this.props.actions}
                rows={this.props.rows}
                replays={this.props.replays}
              /> : undefined
          }
        </VelocityTransitionGroup>
      </li>
    );
  }
}