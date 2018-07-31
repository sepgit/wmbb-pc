/**
 * Created by Chen on 2017/12/08.
 */
import React,{Component} from 'react';
import CabMydetil from './cabMydetil';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import Copydg from './copydg';
import Copydot from './copydot';
import Copyfcl from './copyfcl';
import Copyfr from './copyfr';
import Copyhg from './copyhg';

export default class CabMylistall extends Component {
  constructor(props) {
    super(props);
    this.detailonClick=this.detailonClick.bind(this);//打开明细窗口
    this.fonClose=this.fonClose.bind(this);         //关闭明细窗口
    this.handover=this.handover.bind(this);
    this.handcopy = this.handcopy.bind(this);
    this.copyClose = this.copyClose.bind(this);
    this.handcx=this.handcx.bind(this);
    this.toChexiao =this.toChexiao.bind(this);
    this.toClose = this.toClose.bind(this);
    this.state={
      isxq:false,
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      copyPage:false,//false 不显示  true 显示
      servName:'',
      revoke:false,
      revokePage:false,
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
    // let userName=this.state.userName;
    // let token=this.state.token;
    // let cabDisp=this.props.rows.cabDisp;
    // this.props.actions.putcwbcx(userName,token,cabDisp,60);
    if (this.state.revokePage == false) {
      this.setState({
        revokePage:true
      })
    }
  }
  toChexiao() {
    this.setState({
      revokePage:false
    })
    let userName=this.state.userName;
    let token=this.state.token;
    let cabDisp=this.props.rows.cabDisp;
    this.props.actions.putcwbcx(userName,token,cabDisp,60);
  }
  toClose() {
    this.setState({
      revokePage:false
    })
  }
  fonClose(){
    this.setState({
      isxq:false
    })
  }
  copyClose(){
    this.setState({
      copyPage:false,
    })
  }
  handcopy() {
    let userName=this.state.userName;
    let token=this.state.token;
    let cabDisp=this.props.rows.cabDisp;
    let servName = this.props.rows.servName;
    let userid = this.state.userid
    if (cabDisp != 0) {
      this.setState({
        servName:servName,
        copyPage:true,
      })
    }
    this.props.actions.getcabyue(userName,token,userid);
    this.props.actions.getcabDisp(userName,token,cabDisp);
  }
  render() {
    // console.log(this.props.rows);
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
          <div className="cab101" >
            <h5>状态:</h5>
            {
                this.props.rows.reqUser > 0 ? <span>已被购买</span>:
                  this.props.rows.stat ==10?<span>正常</span>:
                    this.props.rows.stat ==20?<span>过期</span>:
                      this.props.rows.stat ==60?<span>撤销</span>: <span>其他</span>
                
            }
          </div>
        </div>
        <div className="cab100">
          <a href="javascript:void(0);" onClick={this.detailonClick}>详情</a>
        </div>
        {/* {
          this.props.rows.stat ==10 ?
            this.props.rows.reqName > 0 ? undefined:
            <div className="cab100">
              <a href="javascript:void(0);" onClick={this.handcx}>撤销舱位</a>
            </div>
          :undefined
        } */}
        {
          this.props.rows.reqUser > 0 ? undefined:
            this.props.rows.stat == 10 ?
          <div className="cab100">
            <a href="javascript:void(0);" onClick={this.handcx}>撤销舱位</a>
          </div>:undefined
        }
        
        <div className="cab100">
          <a href="javascript:void(0);" onClick={this.handcopy} >复制该条</a>
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
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          { //fcl--1    hg--4   fr--17   ot--18   dg--19
            this.state.copyPage?
              this.props.rows.servName == 'FCL' ?
              <Copyfcl
                actions={this.props.actions}
                cabmynew={this.props.cabmynew}
                fonClose={this.copyClose}
                stat='FCL'
                indexs={1}
                cabDisp={this.props.rows.cabDisp}
              /> 
              :this.props.rows.servName == 'DG' ?
                <Copydg 
                actions={this.props.actions}
                cabmynew={this.props.cabmynew}
                fonClose={this.copyClose}
                stat='DG'
                indexs={19}
                cabDisp={this.props.rows.cabDisp}
                />
                :this.props.rows.servName == 'HG' ?
                  <Copyhg
                  actions={this.props.actions}
                  cabmynew={this.props.cabmynew}
                  fonClose={this.copyClose}
                  stat='HG'
                  indexs={4}
                  cabDisp={this.props.rows.cabDisp}
                  />
                  :this.props.rows.servName == 'FR' ?
                    <Copyfr 
                    actions={this.props.actions}
                    cabmynew={this.props.cabmynew}
                    fonClose={this.copyClose}
                    stat='FR'
                    indexs={17}
                    cabDisp={this.props.rows.cabDisp}
                    />
                    :this.props.rows.servName == 'OT' ?
                    <Copydot 
                    actions={this.props.actions}
                    cabmynew={this.props.cabmynew}
                    fonClose={this.copyClose}
                    stat='OT'
                    indexs={18}
                    cabDisp={this.props.rows.cabDisp}
                    />:undefined
            :undefined
          }
        </VelocityTransitionGroup>
        {
          this.state.revokePage ?
          <div className="detail-bg">
            <div className="cabMyFixed-content">
              <div className="tit">是否确认撤销？</div>
              <div className="btn">
                <a href="javascript:void(0)" className="qr" onClick={this.toChexiao}>确认</a>
                <a href="javascript:void(0)" className="qx" onClick={this.toClose}>取消</a>
              </div>
            </div>
          </div>:undefined
        }
        
      </li>
    );
  }
}