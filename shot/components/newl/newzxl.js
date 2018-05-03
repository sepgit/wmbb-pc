/**
 * Created by Zing on 2017/2/28.
 */
import React,{Component} from 'react';
import Getzx from './getzx';
import Anewadd from './../Advisory/anewadd';
import Xptsfw from './../Advisory/xptsfw';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class NewzxL extends Component {
    constructor(props) {
        super(props);
        this.handzx=this.handzx.bind(this);
        this.handzxc=this.handzxc.bind(this);
        this.linkzx=this.linkzx.bind(this);
        this.linkzxc=this.linkzxc.bind(this);
        this.handclose=this.handclose.bind(this);
        this.showdate=this.showdate.bind(this);
        this.handqr=this.handqr.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            cons:sessionStorage.getItem("SESSIONSYSCONS"),
            iszx:false,
            lkzx:false,
            isshow:false,
            addindex:0,
            tiname:''
        }
    }
    linkzx(){
        this.setState({
            lkzx:true
        })
    }
    linkzxc(){
        this.setState({
            lkzx:false
        })
    }
    handzx(){
        this.setState({
            iszx:true
        })
    }
    handzxc(){
        this.setState({
            iszx:false
        })
    }
    showdate(s){
        this.setState({
            isshow:s
        });
    }
    handclose(){
        this.setState({
            isshow:false
        });
    }
    handqr(a,b){
        this.setState({
            isshow:true,
            addindex:a,
            tiname:b
        });
        this.props.actions.getzxportszj(this.state.userName,this.state.token,a);//获取最近口岸
        this.props.actions.getzxportsf(this.state.userName,this.state.token,a);//获取该服务的口岸
    }
    render() {
        return (
            <div>
                <li className='newl2' onMouseEnter={this.handzx} onMouseLeave={this.handzxc}>
                    <h4 className='newlh4'>免费发布咨询</h4>
                    {
                        this.state.iszx?
                            <div className='newl3'>
                                <h3>发布咨询,集中获取回复</h3>
                                <ul>
                                    <li>1.一键发送,让所有的供应商都能收到该咨询</li>
                                    <li>2.在同一界面上进行价格、服务的比较</li>
                                    <li>3.管理您的咨询记录,及时查询、统计</li>
                                </ul>
                                {
                                    this.state.cons==1?
                                        <a href="javascript:void(0);" onClick={this.linkzx}>立即发布咨询</a>
                                        :<span className="newlsp">您没有权限！</span>
                                }
                            </div>:undefined
                    }
                </li>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.lkzx?<Getzx zxinfo={this.props.zxinfo}
                                               actions={this.props.actions}
                                               handqr={this.handqr}
                                               linkzxc={this.linkzxc}/>:undefined
                    }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.isshow? <Anewadd
                            text={this.props.text}
                            adindex={this.state.addindex}
                            tiname={this.state.tiname}
                            handclose={this.handclose}
                            showdate={this.showdate}
                            zxinfo={this.props.zxinfo}
                            actions={this.props.actions}
                            /> : undefined
                    }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                    {
                        this.props.zxinfo.xptsfw?
                            <Xptsfw actions={this.props.actions}
                                    text={this.props.text}
                                    zxinfo={this.props.zxinfo}
                                />:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}