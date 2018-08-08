/*
 * @Author: sepgit 
 * @Date: 2018-07-24 11:09:24 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-06 09:40:12
 */

import React,{Component} from 'react';
import HTTPED from '../../date/address';
import moment from 'moment';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import {message} from 'antd';
export default class OwnDetail extends Component {
  constructor(props) {
    super(props);
    this.loadLists = this.loadLists.bind(this);
    this.closeThis = this.closeThis.bind(this);
    this.giveThis = this.giveThis.bind(this);
    this.findUsers = this.findUsers.bind(this);
    this.useTkts = this.useTkts.bind(this);
    this.giveUserLists =  this.giveUserLists.bind(this);
    this.getUser = this.getUser.bind(this);
    this.closeToGive = this.closeToGive.bind(this);
    this.togiveuser = this.togiveuser.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
        tktDetailID:this.props.tktID,
        user:sessionStorage.getItem("SESSIONUSER"),
        users:'',
        toGivePage:false,
        trueGive:false,
        touser:'',
    }
  }
  componentDidMount(){
    let userName = this.state.userName;
    let token = this.state.token;
    // this.props.actions.gettktlists(userName,token)
    this.loadLists();
  }
  //卡券批次详情
  loadLists() {
    let userName = this.state.userName;
    let token = this.state.token;
    let predetail=this.state.tktDetailID;
    this.props.actions.getowntktdetail(userName,token,predetail);
  }
  closeThis() {
      this.props.closedetail('close');
  }
  //一开始加载的列表
  giveThis() {
    this.setState({
        toGivePage:true,
    })
  }
  findUsers() {
    console.log(this.state.users)
    let userName = this.state.userName;
    let token = this.state.token;
    let usnameers = this.state.users;
    this.props.actions.getfinduser(userName,token,usnameers)
  }
  useTkts(e){
    let userName = this.state.userName;
    let token = this.state.token;
    let predetail = e.target.getAttribute('data')
    // console.log(token);
    this.props.actions.getusetkts(userName,token,predetail,3,'')
    message.success('已提交试用申请')
  }
  giveUserLists() {
      let data = this.props.owntkts.alluser;
        return <div className="thisLists">
        {
            data.map( (datas)=>{
                return <div className="lists" key={datas.user} data={datas.user} onClick={this.getUser}>{datas.name}&nbsp;/&nbsp;{datas.compAlia}</div>
            })
        }
    </div>
  }
  getUser(e) {
    let touser = e.target.getAttribute('data');
    let userName = this.state.userName;
    let token = this.state.token;
    let predetail = this.props.owntkts.owntktDetail.predetail;
    //  this.props.actions.getgiveuser(userName,token,user);
    if(touser !=  this.state.user) {
        this.setState({
            trueGive:true,
            touser:touser
        })
    }else {
        message.error('不能选择自己做为转发对象')
    }
   
  }
  togiveuser() {
    let user =this.state.touser;
    let userName = this.state.userName;
    let token = this.state.token;
    let predetail = this.props.owntkts.owntktDetail.predetail;
    this.props.actions.getgiveuser(userName,token,predetail,user);
    this.setState({
        trueGive:false,
        toGivePage:false
    });
    message.success('转发成功')
  }
  closeToGive() {
    this.setState({
        trueGive:false,
        // toGivePage:false
    })
  }
  render() {
      let datas = this.props.owntkts.owntktDetail
    // console.log(this.props.owntkts.owntktDetail)
    return <div className="detail-bg">
        <div className="detail-content" > 
            <div className="detail-content-banner"  ><img width={688} height={216} src="" alt="asd"/></div>
            <div className="detail-content-tit fontSize22">优惠券详情</div>
            <div className="detail-content-comp fontSize20">{datas.compName}</div>
            <div className="detail-content-msg clearfix">
                <span className="column">电话</span>
                <span className="tips">{datas.Phone}</span>
            </div>
            <div className="detail-content-msg clearfix">
                <span className="column"> 有效期</span>
                <span className="tips">{moment(datas.EffectiveDate).format('YYYY.MM.DD')}</span>
            </div>
            <div className="detail-content-msg clearfix">
                <span className="column">批次号</span>
                <span className="tips">{datas.BatchNo}</span>
            </div>
            <div className="detail-content-msg clearfix">
                <span className="column">使用说明</span>
                <span className="tips">{datas.Instructions}</span>
            </div>
            <div className="detail-content-form">
                <span className="detail-content-surplus"></span>
                {/* <div className="detail-content-get">
                    <a href="javascript:void(0)">使用</a>
                </div> */}
                {
                    datas.Stat == 2?<div className="detail-content-get">
                        <a href="javascript:void(0)" onClick={this.useTkts} data={datas.predetail}>可使用</a>
                    </div>:undefined 
                }
                {
                    datas.Stat == 3?<div className="detail-content-get">
                        <a href="javascript:void(0)">已提交</a>
                    </div>:undefined 
                }
                {
                    datas.Stat == 4?<div className="detail-content-get">
                        <a href="javascript:void(0)">已使用</a>
                    </div>:undefined 
                }
                {
                    datas.Stat == 5?<div className="detail-content-get">
                        <a href="javascript:void(0)">过期</a>
                    </div>:undefined 
                }
                {/* <div  className="detail-content-give">
                    <a href="javascript:void(0)" onClick={this.giveThis}>转发</a>
                </div> */}
                {
                    datas.Stat == 2?<div  className="detail-content-give">
                    <a href="javascript:void(0)" onClick={this.giveThis}>转发</a>
                </div>:undefined 
                }
                <div  className="detail-content-close">
                    <a href="javascript:void(0)" onClick={this.closeThis}>关闭</a>
                </div>
            </div>
            {
                this.state.toGivePage?
                <div className="detail-content-other">
                    <div className="detail-content-other-input">
                        <input className="input" placeholder="请填写公司名称/账号/姓名" onChange={(e)=>{return this.setState({users:e.target.value})}} type="text" />
                        <a className="search" href="javascript:void(0)" onClick={this.findUsers}>搜索</a>
                    </div>
                    {
                        this.giveUserLists()
                    }
            </div>:undefined
            }
            {
                this.state.trueGive?
                <div className="detail-bg">
                    <div className="toUser">
                        <div className="user-tit">是否确认转发给该用户？</div>
                        <div className="user-btn">
                            <a className="togive" onClick={this.togiveuser} href="javascript:void(0)">确认</a>
                            <a className="close" onClick={this.closeToGive} href="javascript:void(0)">取消</a>
                        </div>
                    </div>
                </div>:undefined
            }
        </div>
    </div>
  }
}