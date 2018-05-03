/**
 * Created by Zing on 2016/7/5.
 */
import React,{Component} from 'react';
import {Input} from 'antd';

export default class Alertmsg extends Component {
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
        this.props.actions.putjh(this.props.login.uac,this.state.jhm);
    }
    handfs(){
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
        this.props.actions.postjhyj(this.props.login.uac);
    }
    render() {
        return(
            <div className="divmsg">
                <div className="divinfo">
                    <span className="dvsp" onClick={this.handc}>X</span>
                    <p>{this.props.login.userid!=0?'注册成功':'注册失败'}</p>
                    {this.props.login.userid!=0?
                        <div className="getinfo">
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
