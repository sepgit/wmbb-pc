/**
 * Created by Zing on 2016/7/5.
 */
import React,{Component} from 'react';
import {Input,message} from 'antd';

export default class Accjh extends Component {
  constructor(props) {
    super(props);
    this.handc=this.handc.bind(this);
    this.handjh=this.handjh.bind(this);
    this.handfs=this.handfs.bind(this);
    this.state={
      jhm:''
    }
  }
  handc(){
    this.props.handzcc(false);
  }
  handjh(){
    if(this.props.uaczh==''){
      message.error('请返回输入账号再激活');
    }else{
      this.props.actions.putjh(this.props.uaczh,this.state.jhm);
      this.props.handzcc(false);
    }
  }
  handfs(){
    if(this.props.uaczh==''){
      message.error('请返回输入账号');
    }else{
      let min=10;
      let THIS=this;
      this.refs.getyz.disabled=true;
      let timedjs=setInterval(function(){
        if(min==0){
          THIS.refs.getyz.innerHTML='重新发送';
          THIS.refs.getyz.disabled=false;
          clearInterval(timedjs);
        }else{
          min--;
          THIS.refs.getyz.innerHTML=min+'秒重取';
        }
      },1000);
      this.props.actions.postjhyj(this.props.uaczh);
    }
  }
  render() {
    return(
      <div className="ajhdiv">
        <div className="ajh1">
          <span className="dvsp" onClick={this.handc}>X</span>
          <p>{this.props.user.err?'该账号未注册或者已经激活':undefined}</p>
          {!this.props.user.err?
            <div className="ajh2">
              <ul>
                <li>请前往<a href="javascript:void(0);">邮箱</a>获取激活码</li>
                <li>
                  <Input
                    value={this.state.jhm}
                    className="inps"
                    placeholder="请输入激活码"
                    onChange={(e)=>{this.setState({jhm:e.target.value})}}
                  />
                  <button className="qr" onClick={this.handjh}>确认</button>
                </li>
                <li>
                  若未收到激活码
                  <button className="bsend" ref="getyz" onClick={this.handfs}>重新发送</button>
                </li>
              </ul>
            </div>:undefined
          }
        </div>
      </div>
    )
  }
}
