/*
 * @Author: sepgit 
 * @Date: 2018-07-24 11:09:24 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-03 09:40:06
 */


import React,{Component} from 'react';
import HTTPED from '../../date/address';
import moment from 'moment';
import {message} from 'antd';
export default class GetDetail extends Component {
  constructor(props) {
    super(props);
    this.loadLists = this.loadLists.bind(this);
    this.closeThis = this.closeThis.bind(this);
    this.getClick = this.getClick.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
    //   tktLists :[],
        tktDetailID:this.props.tktID,
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
      console.log('123132123');
    let userName = this.state.userName;
    let token = this.state.token;
    let prebatch=this.state.tktDetailID;
    this.props.actions.gettktlistspre(userName,token,prebatch);
  }
  closeThis() {
      this.props.closedetail('close');
  }
  getClick(e) {
    let prebatch = e.target.getAttribute('data')
    let userName = this.state.userName;
    let token = this.state.token;
    let user = this.state.user;
    this.props.actions.getgettkts(userName,token,user,prebatch);
    if(this.props.tktnew.err == false) {
        message.success('领取成功')
    }
    // console.log(this.props.tktnew.err)
  }
  //一开始加载的列表

  render() {
      let datas = this.props.tktnew.tktListspre
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
                <span className="detail-content-surplus">剩余数量:{datas.DNum}</span>
                <div className="detail-content-get">
                    <a href="javascript:void(0)" onClick={this.getClick} data={datas.prebatch}>领取</a>
                </div>
                <div  className="detail-content-close">
                    <a href="javascript:void(0)" onClick={this.closeThis}>关闭</a>
                </div>
            </div>
        </div>
    </div>
  }
}