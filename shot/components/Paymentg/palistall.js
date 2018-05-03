/**
 * Created by Zing on 2016/11/22
 */
import React,{Component} from 'react';
import Paydel from './paydel';
import {Popover} from 'antd';
import HTTPED from '../../date/address';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Palistall extends Component {
  constructor(props) {
    super(props);
    this.handxq=this.handxq.bind(this);
    this.handcb=this.handcb.bind(this);
    this.handover=this.handover.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      iscb:false,
      zt:'',
      EnquStat:''
    }
  }
  handover(){
    //获取个人信息
    let uid=this.props.rows.payUser;
    this.props.actions.getreinfo(this.state.userName,this.state.token,uid);
  }
  handxq(){
    //改变详情动画
    this.props.actions.bhshow(true,this.props.keys);
    //获取详情
    this.props.actions.getbhxq(this.state.userName,this.state.token,this.props.rows.guar);
  }
  handcb(v,c){
    this.setState({
      iscb:true,
      zt:v,
      EnquStat:c
    })
  }
  render() {
    let EnquStat,zt;
    switch(this.props.rows.stat){
      case 10:
        EnquStat='正常';
        zt ='zt1';
        break;
      case 20:
        EnquStat='超期';
        zt ='zt2';
        break;
      case 30:
        EnquStat='已核销';
        zt ='zt3';
        break;
      case 40:
        EnquStat='申请平台支付';
        zt ='zt4';
        break;
      case 50:
        EnquStat='未确认';
        zt ='zt5';
        break;
      case 60:
        EnquStat='取消';
        zt ='zt6';
        break;
      default:
        EnquStat='';
        zt ='';
        break;
    }
    let logo=this.props.pays.reinfo.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
        <p className="infologop">授信是否通过：{this.props.pays.reinfo.depositEnab==1?'是':'否'}</p>
      </div>
    );
    const content = (
      <div>
        <p>
          {
            this.props.pays.reinfo.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
          }
          公司全称:{this.props.pays.reinfo.compName}
        </p>
        <p>公司简称:{this.props.pays.reinfo.compAlia}</p>
        <p>行业:{this.props.pays.reinfo.induName}</p>
        <p>口岸:{this.props.pays.reinfo.portName}</p>
        <p>职位:{this.props.pays.reinfo.posi}</p>
        <p>手机:{this.props.pays.reinfo.mobi}</p>
        <p>电话:{this.props.pays.reinfo.phon}</p>
        <p>QQ:{this.props.pays.reinfo.qq}</p>
        <p>邮箱:{this.props.pays.reinfo.mail}</p>
        <p>地址:{this.props.pays.reinfo.addr}</p>
      </div>
    );
    return (
      <li>
        <div className='pali3' onMouseEnter={this.handover}>
          {
            this.props.rows.payCel==1?<img className="payqx" src={require('../../src/image/yth1.png')} title='付款人已申请取消该记录，如同意，请您点击详情后，取消该条记录'/>:undefined
          }
          {
            this.props.rows.blacklist==1?<img className="payqx1" src={require('../../src/image/sth.png')} title='信用余额不足' />:undefined
          }
          <span>付款人：</span>
          <Popover content={content} title={texts} trigger="hover">
            <p title={this.props.rows.payUserName}>{this.props.rows.payUserName}</p>
          </Popover>
        </div>
        <div className='pali3'>
          <span>付款公司：</span>
          <p title={this.props.rows.payCompAlia}>{this.props.rows.payCompAlia}</p>
        </div>
        <div className='pali3'>
          <span>保函号：</span>
          <p>{this.props.rows.guar}</p>
        </div>
        <div className='pali3'>
          <span>状态：</span>
          <p className={this.state.iscb?this.state.zt:zt}>{this.state.iscb?this.state.EnquStat:EnquStat}</p>
        </div>
        <div className='pali31'>
          <div className="pali2">
            <img src={require('../../src/image/xq.png')}/>
          </div>
          <a href="javascript:void(0);" onClick={this.handxq}>详情</a>
        </div>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
          {

            this.props.shows.textck&&this.props.shows.keysck==this.props.keys?
              <Paydel
                handcb={this.handcb}
                shows={this.props.shows}
                actions={this.props.actions}
                pays={this.props.pays}
              /> :
              undefined
          }
        </VelocityTransitionGroup>
      </li>
    );
  }
}