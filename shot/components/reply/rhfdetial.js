/**
 * Created by Zing on 2016/8/4.
 */
import React,{Component} from 'react';
import moment from 'moment';

export default class Rhfdetil extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handzfxq=this.handzfxq.bind(this);
        this.handzz=this.handzz.bind(this);
        this.state={
            resp:sessionStorage.getItem("SESSIONSYSRESP")
        }
    }
    handzz(){
        //终止
        this.props.actions.puthfxqhl(this.state.userName,this.state.token,this.props.rows.resp);
        this.props.actions.hfshow(false);
    }
    handzfxq(){
        this.props.actions.hfshow(false);
        this.props.handzf();
    }
    handleClick(){
        //改变详情动画
        this.props.actions.hfshow(false);
    }
    render() {
        let EnquStat,zt;
        switch(this.props.replays.hfdetl.consStat){
            case 10:
                EnquStat='正常';
                zt ='zt1';
                break;
            case 50:
                EnquStat='终止';
                zt ='zt5';
                break;
            default:
                EnquStat='';
                zt ='';
                break;
        }
        let strch=<li><a className="bntact" href='javascript:void(0);' onClick={this.props.handch}>重回</a></li>;
        let strzf=<li><a className="bntact" href='javascript:void(0);' onClick={this.handzfxq}>转发</a></li>;
        let strzz=<li><a className="bntact" href='javascript:void(0);' onClick={this.handzz}>终止</a></li>;
        let strxz=<li><a className="bntactB" href={this.props.replays.consfile} title={this.props.replays.zxdetl.file} download={this.props.replays.zxdetl.file}>托单下载</a></li>;
        let ch,zf,zz,xz;
        if(this.state.resp!=1){
            ch=undefined;zf=strzf;zz=undefined;xz=undefined;
        }else{
            if(this.props.replays.iscz){
                ch=undefined;zf=strzf;zz=undefined;xz=undefined;
            }else {
                switch(this.props.replays.hfdetl.consStat){
                    case 10:
                        ch=strch;zf=strzf;zz=undefined;
                        this.props.replays.zxdetl.file==null||this.props.replays.zxdetl.file==''?xz=undefined:xz=strxz;
                        break;
                    case 50:
                        ch=undefined;zf=strzf;zz=undefined;xz=undefined;
                        break;
                    default:
                        ch=undefined;zf=strzf;zz=undefined;xz=undefined;
                        break;
                }
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
                                {ch}
                                {zf}
                                {zz}
                                {xz}
                            </ul>
                        </div>
                        <div className="rhf4">
                            <span>回复内容</span>
                            <div className="rhf5">
                                <span className="refspan">抄送:</span>
                                <p>{this.props.replays.respccto}</p>
                            </div>
                            <div className="rhf5">
                                <span className="refspan">回复人:</span>
                                <p>{this.props.replays.hfdetl.resperName}</p>
                            </div>
                            <div className="rhf6">
                                <span className="refspan">回复详情:</span>
                                <p>{this.props.replays.hfdetl.respMemo}</p>
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
                                                this.props.replays.zxdetl.mngr:this.props.replays.hfdetl.conserName}
                                        </p>
                                    </li>
                                    <li>
                                        <span>具体服务</span>
                                        <p>{this.props.replays.hfdetl.servName}-{this.props.replays.hfdetl.servOptiName}</p>
                                    </li>
                                    <li>
                                        <span>口岸</span>
                                        <p>{this.props.replays.hfdetl.portName}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="rhf5">
                                <span>咨询公司</span>
                                <p>
                                    {
                                        this.props.replays.zxdetl.consVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
                                    }
                                    {this.props.replays.zxdetl.compAlia=='null'||this.props.replays.zxdetl.compAlia==''?'':this.props.replays.zxdetl.compAlia}
                                </p>
                                {
                                    this.props.replays.zxdetl.file!=null&&this.props.replays.zxdetl.file != '' ?
                                        <span title={sary}>附件<img title={sary} src={require('../../src/image/hxz.png')}/></span>:undefined

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