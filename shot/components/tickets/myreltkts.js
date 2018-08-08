/*
 * @Author: sepgit 
 * @Date: 2018-07-18 10:33:37 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-03 13:52:51
 */

import React,{Component} from 'react';
import HTTPED from '../../date/address';
import moment from 'moment';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import GetDetail from './getDetail';
import {message} from 'antd';
export default class GetMyreltkts extends Component {
  constructor(props) {
    super(props);
    // this.ticketListsRender = this.ticketListsRender.bind(this);
    this.loadLists = this.loadLists.bind(this);
    this.todatail = this.todatail.bind(this);
    this.closedetail = this.closedetail.bind(this);
    this.getClick = this.getClick.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      user:sessionStorage.getItem("SESSIONUSER"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      tktLists :[],
      datailShow:false,
      tktID:'',
    }
  }
  componentDidMount(){
    let userName = this.state.userName;
    let token = this.state.token;
    this.loadLists();
  }
    //一开始加载的列表
  loadLists() {
    let userName = this.state.userName;
    let token = this.state.token;
    let comp = this.state.comp;
    this.props.actions.gettktlists(userName,token,comp);
  }
  //进入详情页面
  todatail(e) {
    // console.log();
    let id = e.target.getAttribute('data')
    this.setState({
      datailShow:true,
      tktID:id,
    })
  }
  closedetail(s) {
    this.setState({
      datailShow:false,
    })
  }
  //领取
  getClick(e) {
    let prebatch = e.target.getAttribute('data')
    let userName = this.state.userName;
    let token = this.state.token;
    let user = this.state.user;
    this.props.actions.getgettkts(userName,token,user,prebatch);
    if(this.props.tktnew.err == false) {
      message.success('领取成功')
    }
  }
  render() {
    // console.log(sessionStorage);
    let lists = this.props.tktnew.tktLists;
    console.log(this.props.tktnew)
    let datailLogos = HTTPED+'/images/ygxq.png';
    return (
      <div>
        <ul  className="tkt-receive-lists ">
          {
            this.props.tktnew.tktLists.length>0 ?
            
            this.props.tktnew.tktLists.map( (s) => {
              return <li  className="lists-li clearfix" key={s.prebatch}>
                <div className="lists-li-img"><img  src="" alt=""/></div>
                  <ul className="lists-li-msg clearfix">
                    <li className="msg-detail fontSize14">发券公司：{s.compName}</li>
                    <li className="msg-detail text-R">批次号：{s.BatchNo}</li>
                    <li className="msg-detail fontSize14">公司电话：{s.Phone}</li>
                    <li className="msg-detail text-R fontSize14">有效期：{moment(s.EffectiveDate).format('YYYY.MM.DD')}</li>
                  </ul>
                <div className="lists-li-btn clearfix">
                  <span className="btn-datail" onClick={this.todatail} data={s.prebatch}><img src={datailLogos} alt="" data={s.prebatch} /></span>
                  <span className="btn-get"
                  //  onClick={this.getClick} 
                   data={s.prebatch}>查看</span>
                </div>
              </li>
            }):undefined
          }
        </ul>
          
        <VelocityTransitionGroup  enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
          {
            this.state.datailShow?<GetDetail 
              actions={this.props.actions} text={this.props.text} tktnew={this.props.tktnew}
              closedetail ={this.closedetail} tktID = {this.state.tktID}
            ></GetDetail>  :undefined
          }
        </VelocityTransitionGroup>
      </div>
    );
  }
}