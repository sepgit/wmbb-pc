/**
 * Created by Zing on 2016/6/13.
 */

import React,{Component} from 'react';
import Hinfo from './hinfo';
import Hgrxx from './hgrxx';
import Hgsxx from './hgsxx';
import Hxgmm from './hxgmm';
import Hxxtx from './hxxtx';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Name extends Component {
    constructor(props) {
        super(props);
        this.handshow=this.handshow.bind(this);
        this.handhid=this.handhid.bind(this);
        this.handgr=this.handgr.bind(this);
        this.handgs=this.handgs.bind(this);
        this.handmm=this.handmm.bind(this);
        this.handtc=this.handtc.bind(this);
        this.hnandclose=this.hnandclose.bind(this);
        this.handxx=this.handxx.bind(this);
        this.state={
            isinfo:false,
            isshow:false,
            indx:0,
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            user:sessionStorage.getItem("SESSIONUSER"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP")
        }
    }
    componentDidMount(){
        if(this.state.comp!=0){
            this.props.actions.gethcomps(this.state.userName,this.state.token,this.state.comp);
        }
    }
    handshow(){
        this.setState({
            isinfo:true
        });
    }
    handhid(){
        this.setState({
            isinfo:false
        })
    }
    handxx(){
        this.setState({
            isshow:true,
            indx:4
        });
        this.props.actions.getyg(this.state.user,this.state.userName,this.state.token);
    }
    handgr(){
        this.setState({
            isshow:true,
            indx:1
        });
        this.props.actions.getsfzzrz(this.state.userName,this.state.token);  //获取认证信息
        this.props.actions.getyg(this.state.user,this.state.userName,this.state.token);
        if(this.state.comp!=0){
            this.props.actions.gethcomps(this.state.userName,this.state.token,this.state.comp);
        }
    }
    handgs(){
        this.setState({
            isshow:true,
            indx:2
        });
        this.props.actions.getyg(this.state.user,this.state.userName,this.state.token);//重新获个人信息
        this.props.actions.getxyye(this.state.userName,this.state.token,this.state.user);//获取信用余额
        if(this.state.comp!=0){
            this.props.actions.gethcomps(this.state.userName,this.state.token,sessionStorage.getItem("SESSIONCOMP"));
        }
    }
    handmm(){
        this.setState({
            isshow:true,
            indx:3
        })
    }
    handtc(){
        this.props.actions.gethtcdl(this.state.userName,this.state.token);
    }
    hnandclose(v,s){
        this.setState({
            isshow:v,
            indx:s
        });
    }
    
    showwin(){
        return this.state.isshow?
            this.state.indx==1?<Hgrxx
                actions={this.props.actions}
                text={this.props.text}
                hnandclose={this.hnandclose}
                />:
                this.state.indx==2?<Hgsxx
                    hnandclose={this.hnandclose}
                    actions={this.props.actions}
                    text={this.props.text}
                    />:
                    this.state.indx==3?<Hxgmm
                        hnandclose={this.hnandclose}
                        actions={this.props.actions}
                        text={this.props.text}
                        />:
                        this.state.indx==4?<Hxxtx
                            hnandclose={this.hnandclose}
                            actions={this.props.actions}
                            text={this.props.text}
                            />:undefined:undefined;
    }
    render() {
        let isxm,ishy,iszw,iskan,isphon,isyx,isgsqc,isgsjc,iscz,isdh,isadd,str;
        isxm=this.props.text.user.name==''||this.props.text.user.name=='null'?0:1;
        ishy=this.props.text.user.indu==''||this.props.text.user.indu=='null'?0:1;
        iszw=this.props.text.user.posi==''||this.props.text.user.posi=='null'?0:1;
        iskan=this.props.text.user.port==''||this.props.text.user.port=='null'?0:1;
        isphon=this.props.text.user.mobi==''||this.props.text.user.mobi=='null'?0:1;
        isyx=this.props.text.user.mail==''||this.props.text.user.mail=='null'?0:1;
        isgsqc=this.props.text.user.compName==''||this.props.text.user.compName=='null'?0:1;
        isgsjc=this.props.text.user.compAlia==''||this.props.text.user.compAlia=='null'?0:1;
        iscz=this.props.text.user.fax==''||this.props.text.user.fax=='null'?0:1;
        isdh=this.props.text.user.phon==''||this.props.text.user.phon=='null'?0:1;
        isadd=this.props.text.user.addr==''||this.props.text.user.addr=='null'?0:1;
        if(isxm==0||ishy==0||iszw==0||iskan==0||isphon==0||isyx==0||isgsqc==0||isgsjc==0||iscz==0||isdh==0||isadd==0){
            str=<div className="wz">*</div>;
        }else{
            str=undefined;
        }
        return (
            <ul className="userinfo">
                <li onMouseEnter={this.handshow} onMouseLeave={this.handhid}>
                    {str}
                    <div className="ico"></div>
                    {
                        this.props.text.user.name==''||this.props.text.user.name==null||this.props.text.user.name=='null'?
                        <span className="infosp" title={this.props.text.user.userAcco}>{this.props.text.user.userAcco}</span>:
                        <span className="infosp" title={this.props.text.user.name}>{this.props.text.user.name}</span>
                    }
                    <i className="useri"></i>
                    {
                        this.state.isinfo?<Hinfo handgr={this.handgr}
                                                 handgs={this.handgs}
                                                 handmm={this.handmm}
                                                 handtc={this.handtc}
                                                 handxx={this.handxx}
                                                 text={this.props.text}
                                                 actions={this.props.actions}
                            />:undefined
                    }
                </li>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.showwin()
                    }
                </VelocityTransitionGroup>
            </ul>
        );
    }
}