/**
 * Created by Zing on 2016/8/18.
 */
import React,{Component} from 'react';
import moment from 'moment';
import {Popover} from 'antd';
export default class Azxdhflist extends Component {
  constructor(props) {
    super(props);
    this.handsc=this.handsc.bind(this);
    this.handover=this.handover.bind(this);
    let tusc,titlesc='';
    if(this.props.rows.respStat=='30'){
      tusc=true;
      titlesc="已收藏";
    }else{
      tusc=false;
      titlesc="未收藏";
    }
    this.state={
      issc:tusc,
      titlesc:titlesc,
      userid:sessionStorage.getItem("SESSIONUSER"),
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handover(){
    //获取个人信息
    let uid=this.props.rows.resper;
    //this.props.rows.mngr>0?uid=this.props.rows.mngr:uid=this.props.rows.conser;
    this.props.actions.getpeoinfozx(this.state.userName,this.state.token,uid);
  }
  handsc() {
    if(this.props.zxinfo.iscz){
      return false;
    }else{
      if(this.props.zxinfo.zxdetl.mngr>0){
        if(this.props.zxinfo.zxdetl.mngr == this.state.userid){
          switch(this.props.zxinfo.zxdetl.consStat){
            case 10:
              let zt;
              if(this.state.issc){
                zt='10';
                this.setState({issc: false, titlesc: '未收藏'})
              }else{
                zt='30';
                this.setState({issc: true, titlesc: '已收藏'});
              }
              let userName = sessionStorage.getItem("SESSIONUSERACC");
              let token = sessionStorage.getItem("SESSIONTOKEN");
              let respid=this.props.rows.resp;
              this.props.actions.putzxhfsc(userName,token,respid,zt);
              break;
            case 30:
              return false;
              break;
            case 50:
              return false;
              break;
            default:
              return false;
              break;
          }
        }else{
          return false;
        }
      }else{
        switch(this.props.zxinfo.zxdetl.consStat){
          case 10:
            let zt;
            if(this.state.issc){
              zt='10';
              this.setState({issc: false, titlesc: '未收藏'})
            }else{
              zt='30';
              this.setState({issc: true, titlesc: '已收藏'});
            }
            let userName = sessionStorage.getItem("SESSIONUSERACC");
            let token = sessionStorage.getItem("SESSIONTOKEN");
            let respid=this.props.rows.resp;
            this.props.actions.putzxhfsc(userName,token,respid,zt);
            break;
          case 20:
            return false;
            break;
          case 30:
            return false;
            break;
          case 40:
            return false;
            break;
          case 50:
            return false;
            break;
          default:
            return false;
            break;
        }
      }
    }
  }
  render() {
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
        <p className="infologop">信用金额启用：{this.props.zxinfo.peoinfozx.depositEnab==1?'是':'否'}</p>
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
        <p>邮箱:{this.props.zxinfo.peoinfozx.mail}</p>
        <p>地址:{this.props.zxinfo.peoinfozx.addr}</p>
      </div>
    );
    return (
      <li>
        <div className="zxd9">
          <div className="zxd10">
            {
              this.state.issc?<img src={require('../../src/image/sc.png')} title={this.state.titlesc} onClick={this.handsc}/>
                :<img src={require('../../src/image/nsc.png')} title={this.state.titlesc} onClick={this.handsc}/>
            }
            <Popover content={content} title={texts} trigger="hover">
              <span onMouseEnter={this.handover}>{this.props.rows.resperName}</span>
            </Popover>
          </div>
          <div className="zxd10">
                        <span>
                            {
                              this.props.rows.respVip==1?<i></i>:undefined
                            }
                          {this.props.rows.respCompAlia}
                        </span>
          </div>
          {
            this.props.rows.respTime!=null?
              <div className="zxd10">{moment(this.props.rows.respTime).format('YYYY-MM-DD')}</div>:undefined
          }
        </div>
        <p className="zxd11">{this.props.rows.respMemo}</p>
      </li>
    );
  }
}