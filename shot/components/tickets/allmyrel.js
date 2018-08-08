/*
 * @Author: sepgit 
 * @Date: 2018-07-18 10:33:37 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-06 09:56:23
 */

import React,{Component} from 'react';
import HTTPED from '../../date/address';
import moment from 'moment';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import {message} from 'antd';
import OwnDetail from './ownDetail';

export default class Allmyrel extends Component {
  constructor(props) {
    super(props);
    // this.ticketListsRender = this.ticketListsRender.bind(this);
    // this.loadLists = this.loadLists.bind(this);
    // this.todatail = this.todatail.bind(this);
    // this.closedetail = this.closedetail.bind(this);
    // this.useTkts = this.useTkts.bind(this);
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
    let arr =[];
    console.log(this.props.myrls.allmyrel)
    for (let i=0;i<this.props.myrls.allmyrel.length;i++) {
        let datas = this.props.myrls.allmyrel[i];
        console.log(datas)
        arr.push(datas.prebatch);
    }
    console.log(arr)
    // this.props.actions.gettktlists(userName,token);
    // console.log(this.props.myrls.allmyrel);
  }
  render() {
    // console.log(this.props.myrls.allmyrel);
    let datailLogos = HTTPED+'/images/ygxq.png';
    return (
      <div>
        <ul  className="tkt-receive-lists ">
          {
            this.props.owntkts.owntktLists.length>0 ?
            this.props.owntkts.owntktLists.map( (s) => {
              return <li  className="lists-li clearfix" key={s.predetail}>
                <div className="lists-li-img"><img  src="" alt=""/></div>
                  <ul className="lists-li-msg clearfix">
                    <li className="msg-detail fontSize14">发券公司：{s.compName}</li>
                    <li className="msg-detail text-R">卡券编号：{s.NO}</li>
                    <li className="msg-detail fontSize14">公司电话：{s.Phone}</li>
                    <li className="msg-detail text-R fontSize14">有效期：{moment(s.EffectiveDate).format('YYYY.MM.DD')}</li>
                  </ul>
                <div className="lists-li-btn clearfix">
                  <span className="btn-datail" onClick={this.todatail} data={s.predetail}><img src={datailLogos} alt="" data={s.predetail} /></span>
                  {
                    s.Stat == 2?<span className="btn-get"  data={s.predetail}>点击使用</span>:undefined 
                  }
                  {
                    s.Stat == 3?<span className="btn-get"  data={s.predetail}>已提交使用申请</span>:undefined 
                  }
                  {
                    s.Stat == 4?<span className="btn-get"  data={s.predetail}>已使用</span>:undefined 
                  }
                  {
                    s.Stat == 5?<span className="btn-get"  data={s.predetail}>过期</span>:undefined 
                  }
                </div>
              </li>
            }):undefined
          }
        </ul>
          
        {/* <VelocityTransitionGroup  enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
          {
            this.state.datailShow?<OwnDetail 
              actions={this.props.actions} text={this.props.text} tktnew={this.props.tktnew}
              closedetail ={this.closedetail} tktID = {this.state.tktID} owntkts={this.props.owntkts}
            ></OwnDetail>  :undefined
          }
        </VelocityTransitionGroup> */}
      </div>
    );
  }
}