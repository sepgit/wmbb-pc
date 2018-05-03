/**
 * Created by Zing on 2016/7/25.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Xpdetil from './xpdetil';
import Xpsxfcl from './xpsxfcl';
import Xpsxlcl from './xpsxlcl';
import Xpsxair from './xpsxair';
import Xpsxhang from './xpsxhang';
import Xpsxreefer from './xpsxreefer';
import Xpsxfr from './xpsxfr';
import Xpsxdg from './xpsxdg';
import Xpsxot from './xpsxot';
import Xpsxbb from './xpsxbb';
import Xpsxroro from './xpsxroro';
import Xpbzlist from './Xpbzlist';

import {Popover} from 'antd';
import HTTPED from '../../date/address';
import { VelocityTransitionGroup} from 'velocity-react';

export default class Xplistsc extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handcb=this.handcb.bind(this);
    this.handover=this.handover.bind(this);
    this.handxpbz=this.handxpbz.bind(this);
    this.handmose=this.handmose.bind(this);
    this.handmosec=this.handmosec.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      user:sessionStorage.getItem("SESSIONUSER"),
      iscb:false,
      zt:'',
      EnquStat:'',
      xpbz:false
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
      xpbz:!this.state.xpbz
    });
    //获取标注列表
    this.props.actions.getbzlb(this.state.userName,this.state.token,this.props.rows.enqu);
  }
  handover(){
    //获取个人信息
    let uid=this.props.rows.enquer;
    //this.props.rows.mngr>0?uid=this.props.rows.mngr:uid=this.props.rows.enquer;
    this.props.actions.getpeohpinfod(this.state.userName,this.state.token,uid);
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
    this.props.actions.xpshow(true,this.props.keys);
    //获取询盘详情
    let userName = sessionStorage.getItem("SESSIONUSERACC");
    let token = sessionStorage.getItem("SESSIONTOKEN");
    let userid=sessionStorage.getItem("SESSIONUSER");
    this.props.actions.getxpdetil(this.props.rows.enqu,userName,token,userid);
    //获取回盘列表
    this.props.actions.getxphplist(userName,token,this.props.rows.enqu);
    //根据询盘ID获取求舱详情
    this.props.actions.getxpxqcw(userName,token,this.props.rows.enqu);
    //根据询盘ID获取询盘详情的舱位部分
    this.props.actions.getxpcwb(userName,token,this.props.rows.enqu);
  }
  render() {
    let EnquStat,zt;
    switch(this.props.rows.enquStat){
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
      <li className="xpc">
        <div className="xpqq">
          {
            this.props.rows.enquerQq?
              <a target="_blank" className="qqqexp"
                 href={"http://wpa.qq.com/msgrd?v=3&uin=" + this.props.rows.enquerQq + "&site=qq&menu=yes"}>
                <img src={require('../../src/image/qqqe.png')} alt="点击这里给我发消息"
                     title="点击这里给我发消息"/>
              </a>:undefined
          }
        </div>
        <div className="xpd" onMouseEnter={this.handover}>
          {
            this.props.rows.cabEnqu>0?
              <img className="cwbz" src={require('../../src/image/cwbz.png')}/>:undefined
          }
          <Popover content={content} title={texts} trigger="hover">
            <span>{this.props.rows.enquerName}</span>
          </Popover>
          <div className="xpqch">{this.props.rows.cabEnqu}</div>
          <p>{moment(this.props.rows.enquTime).format('YYYY.MM.DD HH:mm')}</p>
        </div>
        <div className="xpe">
          <span>{this.props.rows.depaPortName}</span>
          <div className="xpe1">
            <p>{this.props.rows.servName}</p>
            <div></div>
            {
              this.props.rows.servName=='FCL'?<Xpsxfcl rows={this.props.rows}/>:
                this.props.rows.servName=='LCL'?<Xpsxlcl rows={this.props.rows}/>:
                  this.props.rows.servName=='AIR'?<Xpsxair rows={this.props.rows}/>:
                    this.props.rows.servName=='HG'?<Xpsxhang rows={this.props.rows}/>:
                      this.props.rows.servName=='RF'?<Xpsxreefer rows={this.props.rows}/>:
                        this.props.rows.servName=='FR'?<Xpsxfr rows={this.props.rows}/>:
                          this.props.rows.servName=='DG'?<Xpsxdg rows={this.props.rows}/>:
                            this.props.rows.servName=='OT'?<Xpsxot rows={this.props.rows}/>:
                              this.props.rows.servName=='BB'?<Xpsxbb rows={this.props.rows}/>:
                                this.props.rows.servName=='RORO'?<Xpsxroro rows={this.props.rows}/>
                                  :undefined
            }
          </div>
          <span>{this.props.rows.destPortName}</span>
        </div>
        <div className="xpf">
          <div className="xpf1">
            <span className={this.state.iscb?this.state.zt:zt}>{this.state.iscb?this.state.EnquStat:EnquStat}</span>
            <p>{this.props.rows.enqu}</p>
          </div>
          <div className="xpf2">
            <a href="javascript:void(0);" onClick={this.handleClick}>》</a>
            <span>{this.props.rows.replCount}</span>
          </div>
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
            this.state.xpbz?
              <Xpbzlist
                rows={this.props.rows}
                actions={this.props.actions}
                getdetil={this.props.getdetil}
                getnewlist={this.props.getnewlist}
              /> : undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {this.props.shows.textxp&&this.props.shows.keysxp==this.props.keys ?
            <Xpdetil
              rows={this.props.rows}
              actions={this.props.actions}
              getdetil={this.props.getdetil}
              getnewlist={this.props.getnewlist}
              handisnew={this.props.handisnew}
              handcb={this.handcb}
            /> : undefined}
        </VelocityTransitionGroup>
      </li>
    );
  }
}