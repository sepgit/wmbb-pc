/**
 * Created by Zing on 2016/8/30.
 */
import React,{Component} from 'react';
import {Input} from 'antd';
import {message} from 'antd';

export default class Hxgmm extends Component {
    constructor(props) {
        super(props);
        this.handqr=this.handqr.bind(this);
        this.handqx=this.handqx.bind(this);
        this.state={
            jmm:'',
            xmm:'',
            qrxmm:'',
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN")
        }
    }
    handqr(){
        let userName=this.state.userName;
        let token=this.state.token;
        let jmm=this.state.jmm;
        let xmm=this.state.xmm;
        let qrxmm=this.state.qrxmm;
        if(jmm==''||xmm==''||qrxmm==''){
            message.error('请填写完整再提交！');
        }else if(xmm!=qrxmm){
            message.error('两次输入密码不相同！');
        }else{
            this.props.actions.gethxgmm(userName,token,jmm,qrxmm);
        }
    }
    handqx(){
        this.props.hnandclose(false,0);
    }
    render() {
        return (
            <div className="hxgmm">
                <div className="xgmm">
                    <div className="xgmm1">
                        <h5>修改密码</h5>
                    </div>
                    <div className="xgmm2">
                        <ul>
                            <li>
                                <span className="xgmms">旧密码：</span>
                                <p>
                                    <Input
                                        value={this.state.jmm}
                                        placeholder="旧密码"
                                        type='password'
                                        onChange={(e)=>{return this.setState({jmm:e.target.value})}}
                                        />
                                </p>
                            </li>
                            <li>
                                <span className="xgmms">新密码：</span>
                                <p>
                                    <Input
                                        value={this.state.xmm}
                                        placeholder="新密码"
                                        type='password'
                                        onChange={(e)=>{return this.setState({xmm:e.target.value})}}
                                        />
                                </p>
                            </li>
                            <li>
                                <span className="xgmms">确认新密码：</span>
                                <p>
                                    <Input
                                        value={this.state.qrxmm}
                                        placeholder="确认新密码"
                                        type='password'
                                        onChange={(e)=>{return this.setState({qrxmm:e.target.value})}}
                                        />
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="xgmm3">
                        <a href="javascript:void(0);" onClick={this.handqr}>确认</a>
                        <a href="javascript:void(0);" onClick={this.handqx}>取消</a>
                    </div>
                </div>
            </div>
        );
    }
}