/**
 * Created by Chen on 2017/12/08.
 */
import React,{Component} from 'react';
import CabMydetil from './cabMydetil';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class CabMylistall extends Component {
  constructor(props) {
    super(props);
    this.detailonClick=this.detailonClick.bind(this);//打开明细窗口
    this.fonClose=this.fonClose.bind(this);         //关闭明细窗口
    this.handover=this.handover.bind(this);
    this.handcx=this.handcx.bind(this);
    this.state={
      isxq:false,
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
  handcx(){
    //撤销
    let userName=this.state.userName;
    let token=this.state.token;
    let cabDisp=this.props.rows.cabDisp;
    this.props.actions.putcwbcx(userName,token,cabDisp,60);
  }
  fonClose(){
    this.setState({
      isxq:false
    })
  }
  render() {
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
            <span>{this.props.rows.resCompAlia}</span>
          </div>
        </div>
        <div className="cab100">
          <a href="javascript:void(0);" onClick={this.detailonClick}>详情</a>
        </div>
        <div className="cab100">
          <a href="javascript:void(0);" onClick={this.handcx}>撤销舱位</a>
        </div>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.state.isxq?
              <CabMydetil
                actions={this.props.actions}
                cabmynew={this.props.cabmynew}
                fonClose={this.fonClose}
                cabDisp={this.props.rows.cabDisp}
              /> :
              undefined
          }
        </VelocityTransitionGroup>
      </li>
    );
  }
}