/**
 * Created by Zing on 2016/1/11.
 */
import React,{Component} from 'react';
import moment from 'moment';
import {Popover} from 'antd';
import HTTPED from '../../date/address';

export default class Bllistall extends Component {
  constructor(props) {
    super(props);
    this.handover=this.handover.bind(this);
    this.state={
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handover(){
    //获取个人信息
    let uid=this.props.rows.user;
    this.props.actions.getbkinfo(this.state.userName,this.state.token,uid);
  }
  render() {
    let logo=this.props.blck.bkinfo.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
        <p className="infologop">授信是否通过：{this.props.blck.bkinfo.depositEnab==1?'是':'否'}</p>
      </div>
    );
    const content = (
      <div>
        <p>
          {
            this.props.blck.bkinfo.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
          }
          公司全称:{this.props.blck.bkinfo.compName}
        </p>
        <p>公司简称:{this.props.blck.bkinfo.compAlia}</p>
        <p>行业:{this.props.blck.bkinfo.induName}</p>
        <p>口岸:{this.props.blck.bkinfo.portName}</p>
        <p>职位:{this.props.blck.bkinfo.posi}</p>
        <p>手机:{this.props.blck.bkinfo.mobi}</p>
        <p>电话:{this.props.blck.bkinfo.phon}</p>
        <p>QQ:{this.props.blck.bkinfo.qq}</p>
        <p>邮箱:{this.props.blck.bkinfo.mail}</p>
        <p>地址:{this.props.blck.bkinfo.addr}</p>
      </div>
    );
    return (
      <li className="black7">
        <div className="black8" title={this.props.rows.guar}>
          {this.props.rows.guar}
        </div>
        <div className="black8" title={this.props.rows.userAcco}>
          {this.props.rows.userAcco}
        </div>
        <div className="black8" title={this.props.rows.name} onMouseEnter={this.handover}>
          <Popover content={content} title={texts} trigger="hover">
            <span>{this.props.rows.name=='null'||this.props.rows.name==''?'':this.props.rows.name}</span>
          </Popover>
        </div>
        <div className="black8" title={this.props.rows.compAlia}>
          {this.props.rows.compAlia=='null'||this.props.rows.compAlia==''?'':this.props.rows.compAlia}
        </div>
        <div className="black8">
          {this.props.rows.startTime=='null'||this.props.rows.startTime==''?'':moment(this.props.rows.startTime).format('YYYY.MM.DD')}
        </div>
        <div className="black8">
          {this.props.rows.listType=='1'?'服务未履约':'付款未履约'}
        </div>
      </li>
    );
  }
}