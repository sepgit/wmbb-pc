/**
 * Created by Zing on 2016/7/21.
 */
import React,{Component} from 'react';
import NewFCL from './xnewfcl';
import NewLCL from './xnewlcl';
import NewAIR from './xnewair';
import NewHang from './xnewhang';
import NewReefer from './xnewreefer';
import NewFR from './xnewfr';
import NewDG from './xnewdg';
import NewOT from './xnewot';
import NewBB from './xnewbb';
import NewRORO from './xnewroro';
import Xpts from './xpts';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class NewList extends Component {
    constructor(props) {
        super(props);
        this.showwin=this.showwin.bind(this);
        this.handser=this.handser.bind(this);
        this.handright=this.handright.bind(this);
        this.handleft=this.handleft.bind(this);
        this.hnandclose=this.hnandclose.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            isshow:false,
            nowLocal:0,
            cwith:9999,
            stat:'',
            indexs:0,
            servType:0
        }
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
            />:
            this.state.stat=='LCL'?<NewLCL
                text={this.props.text}
                sclss={this.state.indexs}
                servType={this.state.servType}
                showdate={this.hnandclose}
                actions={this.props.actions}
                getdetil={this.props.getdetil}
                getnewlist={this.props.getnewlist}
            />:
            this.state.stat=='AIR'?<NewAIR
                text={this.props.text}
                sclss={this.state.indexs}
                servType={this.state.servType}
                showdate={this.hnandclose}
                actions={this.props.actions}
                getdetil={this.props.getdetil}
                getnewlist={this.props.getnewlist}
            />:
            this.state.stat=='HG'?<NewHang
                text={this.props.text}
                sclss={this.state.indexs}
                servType={this.state.servType}
                showdate={this.hnandclose}
                actions={this.props.actions}
                getdetil={this.props.getdetil}
                getnewlist={this.props.getnewlist}
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
            />:
            this.state.stat=='DG'?<NewDG
                text={this.props.text}
                sclss={this.state.indexs}
                servType={this.state.servType}
                showdate={this.hnandclose}
                actions={this.props.actions}
                getdetil={this.props.getdetil}
                getnewlist={this.props.getnewlist}
            />:
            this.state.stat=='OT'?<NewOT
                text={this.props.text}
                sclss={this.state.indexs}
                servType={this.state.servType}
                showdate={this.hnandclose}
                actions={this.props.actions}
                getdetil={this.props.getdetil}
                getnewlist={this.props.getnewlist}
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
    handser(e){
        let serv=e.target.getAttribute('value');
        let servName=e.target.innerHTML;
        let servType=e.target.getAttribute('data');
        this.props.actions.getportsf(this.state.userName,this.state.token,serv);//获取该服务港口
        this.props.actions.getcarrs(this.state.userName,this.state.token,serv);//获取该服务承运商
        this.props.actions.getcarrscy(this.state.userName,this.state.token,serv);//获取常用承运商
        this.props.actions.getportszj(this.state.userName,this.state.token,serv);//获取最近港口
        this.props.actions.getportszjm(this.state.userName,this.state.token,serv);//获取最近港口目的地
        this.setState({
            isshow:true,
            stat:servName,
            indexs:serv,
            servType:servType
        });
    }
    handleft(){
        let counts=Math.ceil(this.props.getdetil.xser.length/5);
        let allwith=610*counts;
        let n=this.state.nowLocal;
        if(n<0){
            n+=610;
            this.setState({
                nowLocal:n,
                cwith:allwith
            })
        }
    }
    handright(){
        let counts=Math.ceil(this.props.getdetil.xser.length/5);
        let allwith=610*counts;
        let _n=Math.abs(this.state.nowLocal)+610;
        let n=this.state.nowLocal;
        if(_n<allwith){
            n-=610;
            this.setState({
                nowLocal:n,
                cwith:allwith
            })
        }
    }
    render() {
        return (
            <div className="addx">
                <div className="addx1">
                    <a href="javascript:void(0);">新增询盘</a>
                </div>
                <div className="addx0">
                    <a className="tleft" href="javascript:void(0);" onClick={this.handleft}></a>
                    <div className="addx2">
                        <ul style={{left: this.state.nowLocal,transitionDuration: 1.5 + "s",width: this.state.cwith}}>
                            {
                                this.props.getdetil.xser.map((item, index)=> {
                                  return <li key={index}><a value={item.serv} data={item.servType} href="javascript:void(0);" onClick={this.handser}>{item.servName}</a></li>
                                })
                            }
                        </ul>
                    </div>
                    <a className="tright" href="javascript:void(0);" onClick={this.handright}></a>
                </div>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.showwin()
                    }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                    {
                        this.props.getnewlist.xpts?
                            <Xpts actions={this.props.actions}
                                  servType={this.state.servType}
                                  getnewlist={this.props.getnewlist}
                                />:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}