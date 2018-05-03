/**
 * Created by Zing on 2017/3/24.
 */
import React,{Component} from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import {Modal,message} from 'antd';
import {browserHistory} from 'react-router'
const confirm = Modal.confirm;

export default class Meetlist extends Component {
    constructor(props) {
        super(props);
        this.handbm=this.handbm.bind(this);
        this.handqx=this.handqx.bind(this);
        this.handed=this.handed.bind(this);
        this.state= {
            userName: sessionStorage.getItem("SESSIONUSERACC"),
            token: sessionStorage.getItem("SESSIONTOKEN"),
            userN: sessionStorage.getItem("SESSIONUNAME")
        }
    }
    handbm(){
        let dq=moment().format('YYYY.MM.DD HH:mm:ss');
        let metd=moment(this.props.rows.tifr).format('YYYY.MM.DD HH:mm:ss');
        let This=this;
        if(moment(dq).isSameOrAfter(metd)){
            message.error("已经超过会议报名日期！");
        }else{
            confirm({
                title: '您是否确认要报名',
                content: '报名',
                onOk() {
                    This.props.actions.postmeetbm(This.state.userName,This.state.token,This.props.rows.meet);//报名
                },
                onCancel() {}
            });
        }
    }
    handqx(){
        let This=this;
        confirm({
            title: '您是否确认要退出会议',
            content: '退出该会议',
            onOk() {
                This.props.actions.putmeetqx(This.state.userName,This.state.token,This.props.rows.meet);//缺席
            },
            onCancel() {}
        });
    }
    handed(){
        browserHistory.push({
            pathname:'/meetedit',
            query:{
                a:this.props.rows.meetChat,
                b:this.state.userN,
                c:this.props.rows.name
            }
        });
    }
    render() {
        let a,b,c,d;
        a=<a href="javascript:void(0)" onClick={this.handed}>修改需求</a>;
        c=<a href="javascript:void(0)" onClick={this.handqx}>缺席</a>;
        d=<a href="javascript:void(0)" onClick={this.handbm}>报名</a>;
        return (
            <li>
                <div className="memid3">
                    {this.props.keys+1}.{this.props.rows.name}
                </div>
                <div className="memid4">
                    {this.props.rows.addr}
                </div>
                <div className="memid5">
                    {moment(this.props.rows.tifr).format('YYYY.MM.DD')}~{moment(this.props.rows.tito).format('YYYY.MM.DD')}
                </div>
                {
                    this.props.rows.meetChat>0?
                        <div className="memid6">
                            {a}
                            <Link activeClassName="active" to={"/meetqt?a="+this.props.rows.meet} >进入会议</Link>
                            {c}
                        </div>:
                        <div className="memid6">
                            {d}
                        </div>
                }
            </li>
        );
    }
}