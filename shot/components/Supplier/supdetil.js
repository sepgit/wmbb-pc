/**
 * Created by Zing on 2016/8/16.
 */
import React,{Component} from 'react';
import {Input} from 'antd';

export default class Supdetil extends Component {
    constructor(props) {
        super(props);
        this.handqd=this.handqd.bind(this);
        this.handsc=this.handsc.bind(this);
        this.handqy=this.handqy.bind(this);
        this.handjy=this.handjy.bind(this);
        this.handdec=this.handdec.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            bz:''
        }
    }
    handdec(){
        //改变详情动画
        this.props.actions.gysshow(false);
    }
    handqd(){
        //修改供应商
        if(this.state.bz==''){
            this.state.bz=this.props.rsup.provdel.labe;
        }
        this.props.actions.putgysupd(this.state.userName,this.state.token,this.props.rsup.provdel.prov,this.state.bz,this.props.rsup.provdel.enab);
        this.props.actions.gysshow(this.props.rsup.upisshow);
        this.props.handegysbz(this.state.bz);
    }
    handsc(){
        this.props.handdel();
    }
    handqy(){
        //修改供应商启用
        if(this.state.bz==''){
            this.state.bz=this.props.rsup.provdel.labe;
        }
        this.props.actions.putgysupd(this.state.userName,this.state.token,this.props.rsup.provdel.prov,this.state.bz,1);
        this.props.actions.gysshow(this.props.rsup.upisshow);
        this.props.handcb('zt1','启用');
    }
    handjy(){
        //修改供应商禁用
        if(this.state.bz==''){
            this.state.bz=this.props.rsup.provdel.labe;
        }
        this.props.actions.putgysupd(this.state.userName,this.state.token,this.props.rsup.provdel.prov,this.state.bz,0);
        this.props.actions.gysshow(this.props.rsup.upisshow);
        this.props.handcb('zt5','禁用');
    }
    render() {
        return (
            <div className="supdet">
                <div className="supdet1">
                    <a className="close" href='javascript:void(0);' onClick={this.handdec}>X</a>
                    <div className="supdet2">
                        <div className="supdet3">
                            <span>供应商详情</span>
                            <ul>
                                <li><a className="bntact" href='javascript:void(0);' onClick={this.handqd}>保存</a></li>
                                <li><a className="bntact" href='javascript:void(0);' onClick={this.handsc}>删除</a></li>
                                <li><a className="bntact" href='javascript:void(0);' onClick={this.handqy}>启用</a></li>
                                <li><a className="bntact" href='javascript:void(0);' onClick={this.handjy}>禁用</a></li>
                            </ul>
                        </div>
                        <div className="supdet4">
                            <ul>
                                <li>
                                    <span>姓名</span>
                                    <p>{this.props.rsup.provdel.name}</p>
                                </li>
                                <li>
                                    <span>标注</span>
                                    <p>
                                        <Input
                                            value={this.state.bz}
                                            placeholder={this.props.rsup.provdel.labe}
                                            className="supinp"
                                            style={{ width: 200 }}
                                            onChange={(e)=>{return this.setState({bz:e.target.value})}}
                                        />
                                    </p>
                                </li>
                                <li>
                                    <span>账号</span>
                                    <p>{this.props.rsup.provdel.userAcco}</p>
                                </li>
                                <li>
                                    <span>手机</span>
                                    <p>{this.props.rsup.provdel.mobi}</p>
                                </li>
                                <li>
                                    <span>公司</span>
                                    <p>{this.props.rsup.provdel.compAliaName}</p>
                                </li>
                                <li>
                                    <span>行业</span>
                                    <p>{this.props.rsup.provdel.induName}</p>
                                </li>
                                <li>
                                    <span>服务类型</span>
                                    <p>{this.props.rsup.provdel.servName}</p>
                                </li>
                                <li>
                                    <span>口岸</span>
                                    <p>{this.props.rsup.provdel.portName}</p>
                                </li>
                                <li>
                                    <span>状态</span>
                                    <p className="supdet5">
                                        {this.props.rsup.provdel.enab==1?"启用":"禁用"}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}