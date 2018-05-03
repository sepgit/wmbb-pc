/**
 * Created by Zing on 2016/6/30.
 */
import React,{Component} from 'react';
import Alertmsg from './alertmsg';
import {Input} from 'antd';
import { Link } from 'react-router'
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Rmid extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleregist = this.handleregist.bind(this);
        this.handcj=this.handcj.bind(this);
        this.handma=this.handma.bind(this);
        this.handqr=this.handqr.bind(this);
        this.handzcc=this.handzcc.bind(this);
        this.state={
            zh:'',
            ma:'',
            qrma:'',
            yzm:'',
            msgzh:'请输入正确的邮箱',
            msgma:'密码不能为空',
            msgqrma:'',
            ismsg:false
        }
    }
    componentDidMount (){
        this.props.actions.getCode();
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
    handleClick(){
        this.props.actions.getCode();
    }
    handleregist(){
        this.setState({
            ismsg:true
        });
        let userAcco=this.state.zh;
        let password=this.state.qrma;
        let capi=this.props.login.capi;
        let capt=this.state.yzm;
        this.props.actions.postzc(userAcco,password,capi,capt);
    }
    handzcc(){
        this.setState({
            ismsg:false
        });
    }
    render() {
        return (
            <div className="rmid">
                <div className="loginr">
                    <ul>
                        <li>强烈建议使用IE10以上浏览器，GOOGLE浏览器、360浏览器极速模式、搜狗浏览器极速模式、QQ浏览器极速模式.</li>
                        <li>
                            <label className="la">创建账号</label>
                            <Input
                                value={this.state.zh}
                                className="inpr"
                                placeholder="邮箱"
                                onChange={this.handcj}
                                />
                            <span className="viad">{this.state.msgzh}</span>
                        </li>
                        <li>
                            <label className="la">设置密码</label>
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
                            <label className="la">确认密码</label>
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
                            <label className="la">验证码</label>
                            <Input
                                value={this.state.yzm}
                                className="inpry"
                                ref="capt"
                                placeholder="验证码"
                                onChange={(e)=>{return this.setState({yzm:e.target.value})}}
                                />
                            <img src={this.props.login.pic} onClick={this.handleClick}/>
                        </li>
                        <li>
                            <a href="javascript:void(0);" className="gorest" onClick={this.handleregist}>立即注册</a>
                            <Link className="gorest" to="/">返回</Link>
                        </li>
                    </ul>
                </div>
                <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.ismsg?<Alertmsg handzcc={this.handzcc}
                                                   login={this.props.login}
                                                   actions={this.props.actions}/>:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}