/**
 * Created by Zing on 2016/1/04.
 */
import React,{Component} from 'react';
import HTTPED from '../../date/address';
import {message} from 'antd';

export default class Xptsli extends Component {
    constructor(props) {
        super(props);
        this.handxq=this.handxq.bind(this);
        this.handxz=this.handxz.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            prov : sessionStorage.getItem("SESSIONPROV")
        }
    }
    handxq(){
        this.props.actions.getysdel(this.state.userName,this.state.token,this.props.rows.adva);
        this.props.handxq(this.props.servType);
    }
    handxz(){
        if(this.state.prov==1) {
            this.props.actions.getusedel(this.state.userName, this.state.token, this.props.rows.user);//获取联系人
            //添加供应商
            this.props.handgys(this.props.rows.user);
        }else{
            message.error("您没有添加供应商的权限，请联系公司管理员开通！");
        }
    }
    render() {
        let logo=this.props.rows.logo;
        let logos;
        if(logo!=null&&logo!=''&&logo!='null'){
            logos=HTTPED+logo.substring(1);
        }else{
            logos=require('../../src/image/kong.png');
        }
        return (
                <li>
                    <div className="xpts6">
                        <img src={logos}/>
                    </div>
                    <div className="xpts10" title={this.props.rows.name}>
                        {this.props.rows.name}
                    </div>
                    <div className="xpts11" title={this.props.rows.mobi}>
                        {this.props.rows.mobi}
                    </div>
                    <div className="xpts7" title={this.props.rows.userAcco}>
                        {this.props.rows.userAcco}
                    </div>
                    <div className="xpts7" title={this.props.rows.compAlia}>
                        {this.props.rows.compAlia}
                    </div>
                    <div className="xpts6">
                        <a href="javascript:void(0);" className="xpts8" onClick={this.handxq}>详情</a>
                    </div>
                    <div className="xpts6">
                        <a href="javascript:void(0);" className="xpts9" onClick={this.handxz}>+</a>
                    </div>
                </li>
        );
    }
}