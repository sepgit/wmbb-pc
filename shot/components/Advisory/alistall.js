/**
 * Created by Zing on 2016/8/11.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Azxdetil from './azxdetil';
import {Popover} from 'antd';
import HTTPED from '../../date/address';
import Zxbzlist from './Zxbzlist';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Adlistall extends Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.handcb=this.handcb.bind(this);
    this.handover=this.handover.bind(this);
    this.handxpbz=this.handxpbz.bind(this);
    this.handmose=this.handmose.bind(this);
    this.handmosec=this.handmosec.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      iscb:false,
      zt:'',
      EnquStat:'',
      zxbz:false
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
      zxbz:!this.state.zxbz
    });
    //获取标注列表
    this.props.actions.getbzlbz(this.state.userName,this.state.token,this.props.rows.cons);
  }
  handover(){
    //获取个人信息
    let uid=this.props.rows.conser;
    //this.props.rows.mngr>0?uid=this.props.rows.mngr:uid=this.props.rows.conser;
    this.props.actions.getpeoinfozx(this.state.userName,this.state.token,uid);
  }
  handcb(v,c){
    this.setState({
      iscb:true,
      zt:v,
      EnquStat:c
    })
  }
  handleClick(){
    //改变详情动画
    this.props.actions.zxshow(true,this.props.keys);
    let userName = this.state.userName;
    let token = this.state.token;
    let userid = this.state.userid;
    let consid=this.props.rows.cons;
    this.props.actions.getzxhf(userName,token,consid);//获取回复列表
    this.props.actions.getzxxqs(userName,token,consid,userid);//获取咨询详情
  }
  render() {
    let EnquStat,zt;
    switch(this.props.rows.consStat){
      case 10:
        EnquStat='正常';
        zt ='zt1';
        break;
      case 20:
        EnquStat='过期';
        zt ='zt2';
        break;
      case 30:
        EnquStat='中标';
        zt ='zt3';
        break;
      case 40:
        EnquStat='退关';
        zt ='zt4';
        break;
      case 50:
        EnquStat='终止';
        zt ='zt5';
        break;
      case 60:
        EnquStat='删除';
        zt ='';
        break;
      default:
        EnquStat='';
        zt ='';
        break;
    }
    let logo=this.props.zxinfo.peoinfozx.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
        <p className="infologop">授信是否通过：{this.props.zxinfo.peoinfozx.depositEnab==1?'是':'否'}</p>
      </div>
    );
    const content = (
      <div>
        <p>
          {
            this.props.zxinfo.peoinfozx.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
          }
          公司全称:{this.props.zxinfo.peoinfozx.compName}
        </p>
        <p>公司简称:{this.props.zxinfo.peoinfozx.compAlia}</p>
        <p>行业:{this.props.zxinfo.peoinfozx.induName}</p>
        <p>口岸:{this.props.zxinfo.peoinfozx.portName}</p>
        <p>职位:{this.props.zxinfo.peoinfozx.posi}</p>
        <p>手机:{this.props.zxinfo.peoinfozx.mobi}</p>
        <p>电话:{this.props.zxinfo.peoinfozx.phon}</p>
        <p>QQ:{this.props.zxinfo.peoinfozx.qq}</p>
        <p>邮箱:{this.props.zxinfo.peoinfozx.mail}</p>
        <p>地址:{this.props.zxinfo.peoinfozx.addr}</p>
      </div>
    );
    return (
      <li className="zxlis">
        <div className="zx2" onMouseEnter={this.handover}>
          <Popover content={content} title={texts} trigger="hover">
            <p>{this.props.rows.conserName}</p>
          </Popover>
        </div>
        <div className="zx2">
          {this.props.rows.portName}
        </div>
        <div className="zx2">
          {this.props.rows.servName}
          {
            this.props.rows.servName==null?undefined:this.props.rows.servOptiName==null?undefined:'-'
          }
          {this.props.rows.servOptiName}
        </div>
        <div className="zx2">
          <h5 className={this.state.iscb?this.state.zt:zt}>{this.state.iscb?this.state.EnquStat:EnquStat}</h5>
          <p className="zx4">{moment(this.props.rows.consTime).format('YYYY-MM-DD HH:mm')}</p>
        </div>
        <div className="zx2">
          <a href="javascript:void(0);" className="zx3" onClick={this.handleClick}>
            》
          </a>
          <span className="zx5">{this.props.rows.respCount}</span>
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
            this.state.zxbz?
              <Zxbzlist
                rows={this.props.rows}
                actions={this.props.actions}
                zxinfo={this.props.zxinfo}
              /> : undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.props.shows.textzx&&this.props.shows.keyszx==this.props.keys?
              <Azxdetil
                handcb={this.handcb}
                handzf={this.props.handzf}
                shows={this.props.shows}
                actions={this.props.actions}
                zxinfo={this.props.zxinfo}
              /> :
              undefined
          }
        </VelocityTransitionGroup>
      </li>
    );
  }
}