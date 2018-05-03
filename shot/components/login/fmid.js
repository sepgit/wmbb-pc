/**
 * Created by Zing on 2016/6/30.
 */
import React,{Component} from 'react';
import {message,Input} from 'antd';
import { Link, browserHistory } from 'react-router'

export default class Fmid extends Component {
  constructor(props) {
    super(props);
    this.handleregist = this.handleregist.bind(this);
    this.handcj=this.handcj.bind(this);
    this.handma=this.handma.bind(this);
    this.handqr=this.handqr.bind(this);
    this.handhq=this.handhq.bind(this);
    this.state={
      zh:'',
      ma:'',
      qrma:'',
      yzm:'',
      msgzh:'请输入正确的邮箱',
      msgma:'密码不能为空',
      msgqrma:''
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      zh: nextProps.zh
    })
  }
  handcj(e){
    let errmsg='';
    var myreg =  /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(!myreg.test(e.target.value)){
      errmsg='请输入正确的邮箱';
    }
    this.setState({
      zh:e.target.value,
      msgzh:errmsg
    })
  }
  handma(e){
    let msgma='';
    if(e.target.value==''){
      msgma="密码不能为空";
    }
    this.setState({
      ma:e.target.value,
      msgma:msgma
    })
  }
  handqr(e){
    let msgqrma='';
    if(e.target.value!=this.state.ma){
      msgqrma="两次密码不相同";
    }
    this.setState({
      qrma:e.target.value,
      msgqrma:msgqrma
    })
  }
  handleregist(){
    if(this.state.zh==''&&this.state.qrma==''&&this.state.yzm==''){
      message.error('请填写完整在提交');
    }else{
      this.props.actions.putczmm(this.state.zh,this.state.yzm,this.state.qrma)
    }
  }
  handhq(){
    var myreg =  /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(!myreg.test(this.state.zh)){
      message.error('请先输入正确的邮箱');
    }else{
      let min=10;
      let THIS=this;
      this.refs.getyz.disabled=true;
      let timedjs=setInterval(function(){
        if(min==0){
          THIS.refs.getyz.innerHTML='获取验证码';
          THIS.refs.getyz.disabled=false;
          clearInterval(timedjs);
        }else{
          min--;
          THIS.refs.getyz.innerHTML=min+'秒后重新获取';
        }
      },1000);
      this.props.actions.putwjmm(this.state.zh)
    }
  }
  render() {
    return (
      <div className="rmid">
        <div className="loginr">
          <ul>
            <li>
              <label className="laa">账号</label>
              <Input
                value={this.state.zh}
                className="inpr"
                placeholder="邮箱"
                onChange={this.handcj}
              />
              <span className="viad">{this.state.msgzh}</span>
            </li>
            <li>
              <label className="laa">新密码</label>
              <Input
                value={this.state.ma}
                className="inpr"
                type="password"
                placeholder="密码"
                onChange={this.handma}
              />
              <span className="viad">{this.state.msgma}</span>
            </li>
            <li>
              <label className="laa">确认密码</label>
              <Input
                value={this.state.qrma}
                className="inpr"
                type="password"
                placeholder="确认密码"
                onChange={this.handqr}
              />
              <span className="viad">{this.state.msgqrma}</span>
            </li>
            <li>
              <label className="laa">验证码</label>
              <Input
                value={this.state.yzm}
                className="inprya"
                ref="capt"
                placeholder="验证码"
                onChange={(e)=>{return this.setState({yzm:e.target.value})}}
              />
              <button className="hqyzm" ref="getyz" onClick={this.handhq} title="请前往邮箱查看">获取验证码</button>
            </li>
            <li>
              <a href="javascript:void(0);" className="gorest" onClick={this.handleregist}>完成</a>
              <Link to="/" className="gorest">返回</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}