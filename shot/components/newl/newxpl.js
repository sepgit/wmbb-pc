/**
 * Created by Zing on 2017/2/28.
 */
import React,{Component} from 'react';
import Getxp from './getxp';
import NewFCL from './../inquiry/xnewfcl';
import NewLCL from './../inquiry/xnewlcl';
import NewAIR from './../inquiry/xnewair';
import NewHang from './../inquiry/xnewhang';
import NewReefer from './../inquiry/xnewreefer';
import NewFR from './../inquiry/xnewfr';
import NewDG from './../inquiry/xnewdg';
import NewOT from './../inquiry/xnewot';
import NewBB from './../inquiry/xnewbb';
import NewRORO from './../inquiry/xnewroro';
import Xpts from './../inquiry/xpts';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class NewxpL extends Component {
    constructor(props) {
        super(props);
        this.handxp=this.handxp.bind(this);
        this.handxpc=this.handxpc.bind(this);
        this.linkxp=this.linkxp.bind(this);
        this.linkxpc=this.linkxpc.bind(this);
        this.showwin=this.showwin.bind(this);
        this.handqr=this.handqr.bind(this);
        this.hnandclose=this.hnandclose.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            enqu:sessionStorage.getItem("SESSIONSYSENQU"),
            isxp:false,
            lkxp:false,
            isshow:false,
            stat:'',
            indexs:0,
            servType:0
        }
    }
    handxp(){
        this.setState({
            isxp:true
        })
    }
    handxpc(){
        this.setState({
            isxp:false
        })
    }
    linkxp(){
        this.setState({
            lkxp:true
        })
    }
    linkxpc(){
        this.setState({
            lkxp:false
        })
    }
    handqr(a,b,c){
        this.props.actions.getportsf(this.state.userName,this.state.token,a);//获取该服务港口
        this.props.actions.getcarrs(this.state.userName,this.state.token,a);//获取该服务承运商
        this.props.actions.getcarrscy(this.state.userName,this.state.token,a);//获取常用承运商
        this.props.actions.getportszj(this.state.userName,this.state.token,a);//获取最近港口
        this.props.actions.getportszjm(this.state.userName,this.state.token,a);//获取最近港口目的地
        this.setState({
            isshow:true,
            stat:b,
            indexs:a,
            servType:c
        });
    }
    hnandclose(v,s){
        this.setState({
            isshow:v,
            stat:s
        });
    }
    showwin(){
        return this.state.isshow?
            this.state.stat=='FCL'?<NewFCL
                text={this.props.text}
                sclss={this.state.indexs}
                servType={this.state.servType}
                showdate={this.hnandclose}
                actions={this.props.actions}
                getdetil={this.props.getdetil}
                getnewlist={this.props.getnewlist}
                cabnew={this.props.cabnew}
                />:
                this.state.stat=='LCL'?<NewLCL
                    text={this.props.text}
                    sclss={this.state.indexs}
                    servType={this.state.servType}
                    showdate={this.hnandclose}
                    actions={this.props.actions}
                    getdetil={this.props.getdetil}
                    getnewlist={this.props.getnewlist}
                    cabnew={this.props.cabnew}
                    />:
                    this.state.stat=='AIR'?<NewAIR
                        text={this.props.text}
                        sclss={this.state.indexs}
                        servType={this.state.servType}
                        showdate={this.hnandclose}
                        actions={this.props.actions}
                        getdetil={this.props.getdetil}
                        getnewlist={this.props.getnewlist}
                        cabnew={this.props.cabnew}
                        />:
                        this.state.stat=='HG'?<NewHang
                            text={this.props.text}
                            sclss={this.state.indexs}
                            servType={this.state.servType}
                            showdate={this.hnandclose}
                            actions={this.props.actions}
                            getdetil={this.props.getdetil}
                            getnewlist={this.props.getnewlist}
                            cabnew={this.props.cabnew}
                            />:
                            this.state.stat=='RF'?<NewReefer
                                text={this.props.text}
                                sclss={this.state.indexs}
                                servType={this.state.servType}
                                showdate={this.hnandclose}
                                actions={this.props.actions}
                                getdetil={this.props.getdetil}
                                getnewlist={this.props.getnewlist}
                                />:
                                this.state.stat=='FR'?<NewFR
                                    text={this.props.text}
                                    sclss={this.state.indexs}
                                    servType={this.state.servType}
                                    showdate={this.hnandclose}
                                    actions={this.props.actions}
                                    getdetil={this.props.getdetil}
                                    getnewlist={this.props.getnewlist}
                                    cabnew={this.props.cabnew}
                                    />:
                                    this.state.stat=='DG'?<NewDG
                                        text={this.props.text}
                                        sclss={this.state.indexs}
                                        servType={this.state.servType}
                                        showdate={this.hnandclose}
                                        actions={this.props.actions}
                                        getdetil={this.props.getdetil}
                                        getnewlist={this.props.getnewlist}
                                        cabnew={this.props.cabnew}
                                        />:
                                        this.state.stat=='OT'?<NewOT
                                            text={this.props.text}
                                            sclss={this.state.indexs}
                                            servType={this.state.servType}
                                            showdate={this.hnandclose}
                                            actions={this.props.actions}
                                            getdetil={this.props.getdetil}
                                            getnewlist={this.props.getnewlist}
                                            cabnew={this.props.cabnew}
                                            />:
                                            this.state.stat=='BB'?<NewBB
                                                text={this.props.text}
                                                sclss={this.state.indexs}
                                                servType={this.state.servType}
                                                showdate={this.hnandclose}
                                                actions={this.props.actions}
                                                getdetil={this.props.getdetil}
                                                getnewlist={this.props.getnewlist}
                                                />:
                                                this.state.stat=='RORO'?<NewRORO
                                                    text={this.props.text}
                                                    sclss={this.state.indexs}
                                                    servType={this.state.servType}
                                                    showdate={this.hnandclose}
                                                    actions={this.props.actions}
                                                    getdetil={this.props.getdetil}
                                                    getnewlist={this.props.getnewlist}
                                                    />:undefined:false;
    }
    render() {
        return (
            <div>
                <li className='newl2' onMouseEnter={this.handxp} onMouseLeave={this.handxpc}>
                    <h4 className='newlh4'>免费发布询盘</h4>
                    {
                        this.state.isxp?
                        <div className='newl3'>
                            <h3>发布询盘,集中获取回盘</h3>
                            <ul>
                                <li>1.一键发送,让所有的供应商都能收到该询盘</li>
                                <li>2.在同一界面上进行价格、服务的比较</li>
                                <li>3.管理您的询价记录,及时查询、统计</li>
                            </ul>
                            {
                                this.state.enqu==1?
                                    <a href="javascript:void(0);" onClick={this.linkxp}>立即发布询盘</a>
                                    :<span className="newlsp">您没有权限！</span>
                            }
                        </div>:undefined
                    }
                </li>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.lkxp?<Getxp getdetil={this.props.getdetil}
                                               actions={this.props.actions}
                                               handqr={this.handqr}
                                               linkxpc={this.linkxpc}/>:undefined
                    }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
                    {
                        this.showwin()
                    }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                    {
                        this.props.getnewlist.xpts?
                            <Xpts actions={this.props.actions}
                                  text={this.props.text}
                                  servType={this.state.servType}
                                  getnewlist={this.props.getnewlist}
                                />:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}