/**
 * Created by Chen on 2017/12/06.
 */
import React,{Component} from 'react';
import Cabpdetil from './cabpdetil';
import Cabpbuy from './cabpbuy';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class cabplistall extends Component {
  constructor(props) {
    super(props);
    this.detailonClick=this.detailonClick.bind(this);
    this.fonClose=this.fonClose.bind(this);
    this.handover=this.handover.bind(this);
    this.buyonClick=this.buyonClick.bind(this);
    this.buyonClose=this.buyonClose.bind(this);

    this.state={
      isxq:false,
      isbuyform:false,
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handover(){
    //获取个人信息
    let uid=this.props.rows.provUser;
    this.props.actions.getcainfo(this.state.userName,this.state.token,uid);
  }
  detailonClick(){
    this.setState({
      isxq:true
    });
    //获取舱位保函详情
    let userName=this.state.userName;
    let token=this.state.token;
    let cabDisp=this.props.rows.cabDisp;
    this.props.actions.getcabDisp(userName,token,cabDisp);
  }
  fonClose(){
    this.setState({
      isxq:false
    })
  }
  buyonClick(){
    this.setState({
      isbuyform:true
    });
    //获取舱位保函详情
    let userName=this.state.userName;
    let token=this.state.token;
    let cabDisp=this.props.rows.cabDisp;
    this.props.actions.getcabDisp(userName,token,cabDisp);
  }
  buyonClose(){
    this.setState({
      isbuyform:false
    });
  }
  render() {
    console.log(this.props.rows.showname);
    return (
      <li className="cab99">
        <div className="cab10">
          <div className="cab101" >
            <h5>服务类型:</h5>
            <span>{this.props.rows.servName}</span>
          </div>
          <div className="cab101" >
            <h5>起运地:</h5>
            <span>{this.props.rows.depaPortName}</span>
          </div>
          <div className="cab101" >
            <h5>目的地:</h5>
            <span>{this.props.rows.destPortName}</span>
          </div>
          <div className="cab101" >
            <h5>供舱公司:</h5>
            <span>{this.props.rows.showname==0?"（求购成功后显示）":this.props.rows.resCompAlia}</span>
            {/* <span>{this.props.rows.resCompAlia}</span> */}
          </div>
        </div>
        <div className="cab104">
          <a href="javascript:void(0);" onClick={this.detailonClick}>详情</a>
          <a href="javascript:void(0);" onClick={this.buyonClick}>购买</a>
        </div>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.state.isxq?
              <Cabpdetil
                actions={this.props.actions}
                cabnewr={this.props.cabnewr}
                fonClose={this.fonClose}
                cabDisp={this.props.rows.cabDisp}
              /> :
              undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.state.isbuyform?
              <Cabpbuy
                rows={this.props.rows}
                actions={this.props.actions}
                cabnewr={this.props.cabnewr}
                buyonClose={this.buyonClose}
              /> :
              undefined
          }
        </VelocityTransitionGroup>
      </li>
    );
  }
}