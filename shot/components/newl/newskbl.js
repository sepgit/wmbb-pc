/**
 * Created by Zing on 2017/2/28.
 */
import React,{Component} from 'react';
import Getskb from './getskb';
import Panewadd from './../Paymentg/panewadd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class NewskbL extends Component {
  constructor(props) {
    super(props);
    this.handskb=this.handskb.bind(this);
    this.handskbc=this.handskbc.bind(this);
    this.linkskb=this.linkskb.bind(this);
    this.linkskbc=this.linkskbc.bind(this);
    this.handqr=this.handqr.bind(this);
    this.hnandclose=this.hnandclose.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      sk:sessionStorage.getItem("SESSIONCASH"),
      gpv:sessionStorage.getItem("SESSIONGUARPRIV"),
      isskb:false,
      lkskb:false,
      isshow:false,
      stat:'',
      indexs:-1
    }
  }
  linkskb(){
    this.setState({
      lkskb:true
    })
  }
  linkskbc(){
    this.setState({
      lkskb:false
    })
  }
  handskb(){
    this.setState({
      isskb:true
    })
  }
  handskbc(){
    this.setState({
      isskb:false
    })
  }
  handqr(a,b){
    this.setState({
      isshow:true,
      stat:b,
      indexs:a
    });
  }
  hnandclose(v,s){
    this.setState({
      isshow:v,
      stat:s
    });
  }
  render() {
    let xnewFK=<a href="javascript:void(0);" onClick={this.linkskb}>立即发起收付款保函</a>;
    let xnewWu=<span className="newlsp">您没有权限！</span>;
    let xnewL;
    if(this.state.comp>0){
      if(this.state.gpv==1){
        if(this.state.sk==1){
          xnewL = xnewFK;
        }else{
          xnewL = xnewWu;
        }
      }else{
        xnewL = xnewWu;
      }
    }else{
      if(this.state.gpv==1){
        xnewL = xnewFK;
      }else{
        xnewL = xnewWu;
      }
    }
    // console.log(this.props.actions)
    return (
      <div>
        <li className='newl2' onMouseEnter={this.handskb} onMouseLeave={this.handskbc}>
          <h4 className='newlh4'>发起收款宝</h4>
          {
            this.state.isskb?
              <div className='newl3'>
                <h5>收款宝是一个收付款双方为某项服务自愿签订的收付款保函</h5>
                <ul className='newl3-1'>
                  <li>1.让收款方在提供服务后提供收据</li>
                  <li>2.让付款方确认保函后,可以快速拿到物权凭证,节省咨询垫付,方便业务进程</li>
                </ul>
                {xnewL}
              </div>:undefined
          }
        </li>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
          {
            this.state.lkskb?<Getskb pays={this.props.pays}
                                     actions={this.props.actions}
                                     handqr={this.handqr}
                                     text={this.props.text}
                                     linkskbc={this.linkskbc}/>:undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.state.isshow?
              <Panewadd
                pays={this.props.pays}
                text={this.props.text}
                indexs={this.state.indexs}
                actions={this.props.actions}
                hnandclose={this.hnandclose}
              />:undefined
          }
        </VelocityTransitionGroup>
      </div>
    );
  }
}