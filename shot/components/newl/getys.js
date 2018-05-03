/**
 * Created by Zing on 2017/2/28.
 */
import React,{Component} from 'react';
import {Select} from 'antd';
import { Link } from 'react-router';
const Option = Select.Option;

export default class Getys extends Component {
    constructor(props) {
        super(props);
        this.ysqr=this.ysqr.bind(this);
        this.ysgb=this.ysgb.bind(this);
        this.handce=this.handce.bind(this);
        this.handse=this.handse.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            userid:sessionStorage.getItem("SESSIONUSER"),
            adva:sessionStorage.getItem("SESSIONADVA"),
            cont:sessionStorage.getItem("SESSIONCONT"),
            ser:'',
            serN:true
        }
    }
    handce(v){
        this.setState({
            ser:v
        });
    }
    handse(v){
        if(v==0){
            //运价
            this.props.actions.getysfw(this.state.userName,this.state.token);//获取运价服务
            this.props.actions.getysusers(this.state.userName,this.state.token,this.state.userid);//获取用户详情
            this.props.actions.getysfbr(this.state.userName,this.state.token,this.state.userid,this.state.comp);//获取用户列表（发布人）
            this.props.actions.getyscarrsall(this.state.userName,this.state.token);//获取所有供应商
            this.props.actions.getportsyjys(this.state.userName,this.state.token);//获取所有港口
            this.props.actions.getkannoq(this.state.userName,this.state.token);//获取最近起运港口 不带服务
            this.props.actions.getkannom(this.state.userName,this.state.token);//获取最近目的港口 不带服务
            if(this.state.comp>0){
                if(this.state.adva==1){
                    this.setState({
                        serN:true
                    });
                }else{
                    this.setState({
                        serN:false
                    });
                };
            }else{
                this.setState({
                    serN:true
                });
            }
        }else if(v==1){
            //服务
            this.props.actions.getyssfw(this.state.userName,this.state.token);//获取服务优势服务
            this.props.actions.getyssfbr(this.state.userName,this.state.token,this.state.userid,this.state.comp);//获取用户列表（发布人）
            this.props.actions.getyssusers(this.state.userName,this.state.token,this.state.userid);//获取用户详情
            this.props.actions.getyssjtfww(this.state.userName,this.state.token);//获取具体服务无条件
            this.props.actions.getportsfwys(this.state.userName,this.state.token);//获取口岸
            this.props.actions.getkanfu(this.state.userName,this.state.token);//获取口岸最近
            if(this.state.comp>0){
                if(this.state.cont==1){
                    this.setState({
                        serN:true
                    });
                }else{
                    this.setState({
                        serN:false
                    });
                };
            }else{
                this.setState({
                    serN:true
                });
            }
        }else if(v==2){
            //特种货
            this.props.actions.getyspfw(this.state.userName,this.state.token);//获取服务优势服务
            this.props.actions.getyspfbr(this.state.userName,this.state.token,this.state.userid,this.state.comp);//获取用户列表（发布人）
            this.props.actions.getyspusers(this.state.userName,this.state.token,this.state.userid);//获取用户详情
            this.props.actions.getyspportsa(this.state.userName,this.state.token);//获取所有口岸
            this.props.actions.getkannoqtz(this.state.userName,this.state.token);//获取最近口岸 不带服务
            if(this.state.comp>0){
                if(this.state.adva==1){
                    this.setState({
                        serN:true
                    });
                }else{
                    this.setState({
                        serN:false
                    });
                };
            }else{
                this.setState({
                    serN:true
                });
            }
        }else{
            return false
        }
    }
    ysqr(){
        this.props.handqr(this.state.ser);
        this.props.linkysc();
    }
    ysgb(){
        this.props.linkysc();
    }
    render() {
        return (
            <div className="getxp">
                <div className="getxp1">
                    <a className="getxp2" href='javascript:void(0);' onClick={this.props.linkysc}>X</a>
                    <div className="getxp3">
                        <div className="getxp4">
                            <h4>请选择优势种类</h4>
                            <Select showSearch
                                    value={this.state.ser}
                                    style={{ width: 200 }}
                                    className="getxp4-s"
                                    optionFilterProp="children"
                                    notFoundContent="无法找到"
                                    onChange={this.handce}
                                    onSelect={this.handse}
                                >
                                <Option value="0">运价优势</Option>
                                <Option value="1">服务优势</Option>
                                <Option value="2">特种货运价优势</Option>
                            </Select>
                        </div>
                        <div className="getxp5">
                            {
                                this.state.serN?
                                    <a className="getxp6" href='javascript:void(0);' onClick={this.ysqr}>确认</a>
                                    :<span className="getxp6" onClick={this.ysgb}>您没有权限！</span>
                            }
                            <a className="getxp6" href='javascript:void(0);' onClick={this.ysgb}>关闭</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}