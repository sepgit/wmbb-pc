/**
 * Created by Zing on 2016/8/16.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';
import Adnew from './adnew';
import Adseach from './Adseach';

export default class Admid extends Component {
    constructor(props) {
        super(props);
        this.state={
            adva:sessionStorage.getItem("SESSIONADVA"),
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            userid:sessionStorage.getItem("SESSIONUSER"),
            comp:sessionStorage.getItem("SESSIONCOMP")
        }
    }
    componentDidMount(){
        let userName = this.state.userName;
        let token = this.state.token;
        let userid = this.state.userid;
        let comp = this.state.comp;
        this.props.actions.getysfw(userName,token);//获取运价服务
        this.props.actions.getysusers(userName,token,userid);//获取用户详情
        this.props.actions.getysfbr(userName,token,userid,comp);//获取用户列表（发布人）
        this.props.actions.getyscarrsall(userName,token);//获取所有供应商
        this.props.actions.getportsyjys(userName,token);//获取所有港口
        this.props.actions.getkannoq(userName,token);//获取最近起运港口 不带服务
        this.props.actions.getkannom(userName,token);//获取最近目的港口 不带服务
    }
    render() {
        return (
            <div className="yjysmid">
                <div className="adchange">
                    <ul>
                        <li>
                            <Link activeClassName="activad" to="/Advantage">普通运价优势</Link>
                        </li>
                        <li>
                            <Link activeClassName="activad" to="/Spfreight">特种货运价优势</Link>
                        </li>
                        <li>
                            <Link activeClassName="activad" to="/Adsertage">服务优势</Link>
                        </li>
                    </ul>
                </div>
                <div className="rseachlist">
                    {
                        /*this.state.adva==1?
                        <Adnew actions={this.props.actions} ysrdu={this.props.ysrdu} text={this.props.text}/>:undefined */
                    }
                    <Adseach actions={this.props.actions} ysrdu={this.props.ysrdu} shows={this.props.shows} text={this.props.text}/>
                </div>
            </div>
        );
    }
}