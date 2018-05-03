/**
 * Created by Zing on 2016/8/8.
 */
import React,{Component} from 'react';
import moment from 'moment';
import {Select} from 'antd';

const Option = Select.Option;
export default class Rhfnew extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleccto=this.handleccto.bind(this);
        this.handsend=this.handsend.bind(this);
        this.handzz=this.handzz.bind(this);
        this.handzfxq=this.handzfxq.bind(this);
        let admiAcco='';
        let comp=sessionStorage.getItem("SESSIONCOMP");
        if(comp!=0) {
            admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
        }
        this.state={
            ccto:[],
            respMemo:'',
            userid:sessionStorage.getItem("SESSIONUSER"),
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            comp:comp,
            token:sessionStorage.getItem("SESSIONTOKEN"),
            resp:sessionStorage.getItem("SESSIONSYSRESP"),
            admiAcco:admiAcco
        }
    }
    handzfxq(){
        this.props.actions.hfshow(false);
        this.props.handzf();
    }
    handleccto(){
        this.setState({
            ccto:[]
        })
    }
    handleClick(){
        //改变详情动画
        this.props.actions.hfshow(false);
    }
    handsend(){
        let userid=this.state.userid;
        let userName =this.state.userName;
        let token = this.state.token;
        let fg='',admininfo='';
        if(this.state.comp>0){
            fg=this.state.ccto==''?'':this.props.text.priv.admi!=0?'':',';
            admininfo=this.props.text.priv.admi!=0?'':this.props.replays.adminlinfohf;
        }
        let ccto = "["+this.state.ccto+fg+admininfo+"]";//抄送人数组
        let respMemo=this.state.respMemo;
        //回复备注
        this.props.actions.postfshfl(userid,userName,token,this.props.rows.resp,respMemo,ccto);
        this.props.actions.hfshow(this.props.replays.isshow,0);
    }
    handzz(){
        //终止
        this.props.actions.puthfxqhl(this.state.userName,this.state.token,this.props.rows.resp);
        this.props.actions.hfshow(false);
    }
    render() {
        let EnquStat,zt;
        switch(this.props.replays.hfdetl.consStat){
            case 10:
                EnquStat='正常';
                zt ='zt1';
                break;
            case 20:
                EnquStat='过期';
                zt ='zt2';
                break;
            case 30:
                EnquStat='中标';
                zt ='zt3';
                break;
            case 40:
                EnquStat='退关';
                zt ='zt4';
                break;
            case 50:
                EnquStat='终止';
                zt ='zt5';
                break;
            case 60:
                EnquStat='删除';
                zt ='';
                break;
            default:
                EnquStat='';
                zt ='';
                break;
        }
        let strfs=<li><a className="bntact" href='javascript:void(0);' onClick={this.handsend}>发送</a></li>;
        let strhl=<li><a className="bntact" href='javascript:void(0);' onClick={this.handzz}>忽略</a></li>;
        let strzf=<li><a className="bntact" href='javascript:void(0);' onClick={this.handzfxq}>转发</a></li>;
        let strxz=<li><a className="bntactB" href={this.props.replays.consfile} download={this.props.replays.zxdetl.file}>托单下载</a></li>;
        let fs,zf,hl,xz;
        if(this.state.resp!=1){
            fs=undefined;hl=undefined;zf=strzf;xz=undefined;
        }else{
            switch(this.props.replays.hfdetl.consStat){
                case 10:
                    fs=strfs;zf=strzf;
                    //this.props.replays.hfdetl.resper>0?hl=undefined:hl=strhl;
                    hl=undefined
                    this.props.replays.zxdetl.file==null||this.props.replays.zxdetl.file==''?xz=undefined:xz=strxz;
                    break;
                case 50:
                    fs=undefined;zf=strzf;hl=undefined;xz=undefined;
                    break;
                default:
                    fs=undefined;zf=strzf;hl=undefined;xz=undefined;
                    break;
            }
        }
        let sfile=this.props.replays.zxdetl.file;
        let sary;
        if(sfile!=null&&sfile!=''){
            sfile=sfile.split('/');
            sary=sfile[sfile.length-1];
        }else{
            sary='无';
        }
        return (
            <div className="hfdetils">
                <div className="rhf1">
                    <a className="close" href='javascript:void(0);' onClick={this.handleClick}>X</a>
                    <div className="rhf2">
                        <div className="rhf3">
                            <span>回复-{this.props.rows.resp}</span>
                                <ul>
                                    {fs}
                                    {hl}
                                    {zf}
                                    {xz}
                                </ul>
                        </div>
                        <div className="rhf4">
                            <span>回复内容</span>
                            {
                                this.state.comp != 0 ?
                                    <div className="rhf5">
                                        <span className="refspan">抄送:</span>

                                        <div className="xnew16">
                                            <Select
                                                multiple
                                                style={{ width: 530 }}
                                                value={this.state.ccto}
                                                placeholder="请选择公司同事抄送"
                                                onChange={(v)=>{return this.setState({ccto:v})}}
                                                >
                                                {
                                                    this.props.replays.hfcctos.map((item, index)=> {
                                                        let strcctos = '{"user":"' + item.user + '","userAcco":"' + item.userAcco + '","name":"' + item.name + '"}';
                                                        if(item.user!=this.state.userid){
                                                            if(item.userAcco!=this.state.admiAcco){
                                                                return <Option key={strcctos} >{item.name}</Option>
                                                            }else{
                                                                return <Option key={strcctos} style={{display:'none'}}>{item.name}</Option>
                                                            }
                                                        }else{
                                                            return <Option key={strcctos} style={{display:'none'}}>{item.name}</Option>
                                                        }
                                                    })
                                                }
                                            </Select>
                                        </div>
                                        <span className="refcz" onClick={this.handleccto}>|x</span>
                                    </div>:undefined
                            }
                            <div className="rhf6">
                                <span className="refspan"></span>
                                <textarea className="refstext"
                                    value={this.state.respMemo}
                                    maxLength="155"
                                    onChange={(e)=>{return this.setState({respMemo:e.target.value})}}
                                    ></textarea>
                            </div>
                        </div>
                        <div className="rhf7">
                            <span>咨询信息</span>
                            <div className="rhf5">
                                <ul className="rhf5ul">
                                    <li>
                                        <span>咨询号</span>
                                        <p>{this.props.replays.hfdetl.cons}</p>
                                    </li>
                                    <li>
                                        <span>咨询时间</span>
                                        <p>{moment(this.props.replays.hfdetl.consTime).format('YYYY-MM-DD HH:mm')}</p>
                                    </li>
                                    <li>
                                        <span>状态</span>
                                        <p className={zt}>{EnquStat}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="rhf5">
                                <ul className="rhf5ul">
                                    <li>
                                        <span>咨询人</span>
                                        <p>
                                            {this.props.replays.zxdetl.mngr>0?
                                                this.props.replays.zxdetl.mngrName:this.props.replays.hfdetl.conserName}
                                        </p>
                                    </li>
                                    <li>
                                        <span>具体服务</span>
                                        <p>
                                            {this.props.replays.hfdetl.servName}
                                            -
                                           {this.props.replays.hfdetl.servOptiName}
                                        </p>
                                    </li>
                                    <li>
                                        <span>口岸</span>
                                        <p title={this.props.replays.hfdetl.portName}>{this.props.replays.hfdetl.portName}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="rhf8">
                                <span>咨询公司</span>
                                <p>
                                    {
                                        this.props.replays.zxdetl.consVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
                                    }
                                    {this.props.replays.zxdetl.compAlia=='null'||this.props.replays.zxdetl.compAlia==''?'':this.props.replays.zxdetl.compAlia}
                                </p>
                                {
                                    this.props.replays.zxdetl.file!=null&&this.props.replays.zxdetl.file != '' ?
                                        <span title={sary}>附件</span>:undefined
                                }
                                {
                                    this.props.replays.zxdetl.file!=null&&this.props.replays.zxdetl.file != '' ?
                                        <div className="ffiles" title={sary}></div>:undefined
                                }
                            </div>
                            <div className="rhf6">
                                <span>服务要求:</span>
                                <p>{this.props.replays.zxdetl.consMemo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}