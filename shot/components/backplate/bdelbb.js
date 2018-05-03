/**
 * Created by Zing on 2016/10/28.
 */
import React,{Component} from 'react';
import moment from 'moment';

export default class Bdelbb extends Component {
    constructor(props) {
        super(props);
        this.handclo=this.handclo.bind(this);
        this.handch=this.handch.bind(this);
        this.handhl=this.handhl.bind(this);
        this.handzf=this.handzf.bind(this);
        this.handhf=this.handhf.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            userid:sessionStorage.getItem("SESSIONUSER"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            repl:sessionStorage.getItem("SESSIONSYSREPL")
        }
    }
    handzf(){
        this.props.actions.gethpcarrs(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取该服务承运商
        this.props.actions.getportshf(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取该服务的港口
        this.props.actions.gethpwtuo(this.state.userName,this.state.token,this.state.comp);//获取委托人
        this.props.actions.gethpcarrscy(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取常用承运商
        this.props.actions.gethpportszj(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取最近起运港港口
        this.props.actions.gethpportszjm(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取最近港口目的地
        this.props.actions.gethpsendto(this.state.userName,this.state.token,this.props.bck.enqudx.serv,this.props.bck.enqudx.depaPort,this.props.bck.enqudx.destPort);//获取收件人(对应服务供应商)
        this.props.handzfshow(this.props.keysd,this.props.bck.enqudx.serv);
    }
    handch(){
        this.props.handchshow(this.props.keysd);
        this.props.actions.gethpcarrs(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取该服务承运商
    }
    handhl(){
        this.props.actions.gethphl(this.state.userName,this.state.token,this.props.bck.repldx.repl);//忽略
        this.props.actions.hpshow(false);
    }
    handhf(){
        this.props.actions.gethphf(this.state.userName,this.state.token,this.props.bck.repldx.repl);//恢复
        this.props.actions.hpshow(false);
    }
    handclo(){
        this.props.actions.hpshow(false);
    }
    render() {
        let strch=<li><a className="bntact" href='javascript:void(0);' onClick={this.handch}>重回</a></li>;
        let strhp=<li><a className="bntact" href='javascript:void(0);' onClick={this.handch}>回盘</a></li>;
        let strhl=<li><a className="bntact" href='javascript:void(0);' onClick={this.handhl}>忽略</a></li>;
        let strhf=<li><a className="bntact" href='javascript:void(0);' onClick={this.handhf}>恢复</a></li>;
        let strxz=<li><a className="bntactB" href={this.props.bck.filename} title={this.props.bck.enqudx.file} download={this.props.bck.enqudx.file}>托单下载</a></li>;
        let strzf=<li><a className="bntact" href='javascript:void(0);' onClick={this.handzf}>转发</a></li>;
        let ch,hp,hl,hf,xz,zf;
        if(this.state.repl!=1){
            ch=undefined;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=undefined;
        }else{
            if(this.props.bck.iscz){
                ch=undefined;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=strzf;
            }else {
                if(this.props.hl){
                    ch=undefined;hp=undefined;hl=undefined;hf=strhf;xz=undefined;zf=undefined;
                }else{
                    switch(this.props.bck.repldx.enquStat){
                        case 10:
                            if(this.props.bck.repldx.repler>0){
                                ch=strch;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=strzf;
                            }else{
                                ch=undefined;hp=strhp;hl=strhl;hf=undefined;xz=undefined;zf=strzf;
                            }
                            break;
                        case 20:
                            ch=undefined;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=strzf;
                            break;
                        case 30:
                            ch=undefined;hp=undefined;hl=undefined;hf=undefined;zf=strzf;
                            if(this.props.bck.repldx.replStat==30){
                                this.props.bck.enqudx.file!=null?xz=strxz:xz=undefined;
                            }else{
                                xz=undefined;
                            }
                            break;
                        case 40:
                            ch=undefined;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=strzf;
                            break;
                        case 50:
                            ch=undefined;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=strzf;
                            break;
                        default:
                            ch=strch;hp=strhp;hl=strhl;hf=strhf;xz=strxz;zf=strzf;
                            break;
                    }
                }
            }
        }
        let sfile=this.props.bck.enqudx.file;
        let sary;
        if(sfile!=null){
            sfile=sfile.split('/');
            sary=sfile[sfile.length-1];
        }else{
            sary='无';
        }
        return (
            <div className="bdeldiv">
                <div className="bdel1">
                    <a className="close" href='javascript:void(0);' onClick={this.handclo}>X</a>
                    <div className="bdel2">
                        <div className="bdel3">
                            <span>回盘-{this.props.bck.repldx.repl}</span>
                            <ul>
                                {ch}
                                {hp}
                                {hl}
                                {hf}
                                {xz}
                                {zf}
                            </ul>
                        </div>
                        <div className="bdel4">
                            <div className="bdel6">
                                {
                                    this.props.bck.repldx.replStat==30?
                                        <img src={require('../../src/image/zb.png')}/>:undefined
                                }
                                <span>抄送</span>
                                <p>{this.props.bck.cctoary}</p>
                            </div>
                            <div className="bdel15">
                                <span className="bdel15sp">运价</span>
                                {
                                    this.props.bck.repldx.RTMi!=null?
                                        <p>{this.props.bck.repldx.freiCurr}:{this.props.bck.repldx.RTMi}W/M</p>:undefined
                                }
                            </div>
                            <div className="bdel8">
                                <ul>
                                    <li>
                                        <span className="bdel8sp">运价有效期</span>
                                        <p>
                                            {this.props.bck.repldx.expiDate!=null?
                                                moment(this.props.bck.repldx.expiDate).format('YYYY.MM.DD'):''}
                                        </p>
                                    </li>
                                    <li>
                                        <span className="bdel8sp">中转地</span>
                                        <p>{this.props.bck.repldx.tranPortName==null?'无':this.props.bck.repldx.tranPortName}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bdel9">
                                <ul>
                                    <li>
                                        <span className="bdel9sp">T/T</span>
                                        {
                                            this.props.bck.repldx.sailDays==null?undefined:
                                                <p>{this.props.bck.repldx.sailDays}天</p>
                                        }
                                    </li>
                                    <li>
                                        <span className="bdel9sp">CLS</span>
                                        <p>{
                                            this.props.bck.repldx.closTime==0?'未指定':
                                                this.props.bck.repldx.closTime==1?'周一':
                                                    this.props.bck.repldx.closTime==2?'周二':
                                                        this.props.bck.repldx.closTime==3?'周三':
                                                            this.props.bck.repldx.closTime==4?'周四':
                                                                this.props.bck.repldx.closTime==5?'周五':
                                                                    this.props.bck.repldx.closTime==6?'周六':
                                                                        this.props.bck.repldx.closTime==7?'周日':''
                                        }
                                        </p>
                                    </li>
                                    <li>
                                        <span className="bdel9sp">ETD</span>
                                        <p>
                                            {
                                                this.props.bck.repldx.sailTime==0?'未指定':
                                                    this.props.bck.repldx.sailTime==1?'周一':
                                                        this.props.bck.repldx.sailTime==2?'周二':
                                                            this.props.bck.repldx.sailTime==3?'周三':
                                                                this.props.bck.repldx.sailTime==4?'周四':
                                                                    this.props.bck.repldx.sailTime==5?'周五':
                                                                        this.props.bck.repldx.sailTime==6?'周六':
                                                                            this.props.bck.repldx.sailTime==7?'周日':''
                                            }
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bdel10">
                                <span>回盘备注</span>
                                <p>{this.props.bck.repldx.replMemo}</p>
                            </div>
                        </div>
                        <div className="bdel5">
                            <div className="bdel11">
                                <ul>
                                    <li>
                                        <span>询盘号</span>
                                        <p>{this.props.bck.enqudx.enqu}</p>
                                    </li>
                                    <li>
                                        <span>询盘人</span>
                                        <p className="bdel11p">
                                            {this.props.bck.enqudx.mngrName!=''&&this.props.bck.enqudx.mngrName!=null?this.props.bck.enqudx.mngrName:this.props.bck.enqudx.enquerName}
                                        </p>
                                    </li>
                                    <li>
                                        <span>起运地</span>
                                        <p>{this.props.bck.enqudx.depaPortName}</p>
                                    </li>
                                    <li>
                                        <span>目的地</span>
                                        <p>{this.props.bck.enqudx.destPortName}</p>
                                    </li>
                                    <li>
                                        <span>运输要求</span>
                                        <p>{
                                            this.props.bck.enqudx.tranship==1?'直达':
                                                this.props.bck.enqudx.tranship==2?'中转':
                                                    this.props.bck.enqudx.tranship==3?'不限':''
                                        }
                                        </p>
                                    </li>
                                    <li>
                                        <span>完货日期</span>
                                        <p>{moment(this.props.bck.enqudx.compDate).format('YYYY-MM-DD')}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bdel12">
                                <span>运输条款</span>
                                <p>{
                                    this.props.bck.enqudx.item==0?'FLT':
                                        this.props.bck.enqudx.item==1?'FILO':
                                            this.props.bck.enqudx.item==2?'FIO':''
                                }
                                </p>
                            </div>
                            <div className="bdel12">
                                <span>询盘时间</span>
                                <p>{moment(this.props.bck.enqudx.enquTime).format('YYYY-MM-DD HH:mm')}</p>
                            </div>
                            <div className="bdel21">
                                <ul>
                                    <li>
                                        <span>品名</span>
                                        <p>{this.props.bck.enqudx.itemName}</p>
                                    </li>
                                    <li>
                                        <span className="fjfile">附件</span>
                                        {

                                            this.props.bck.enqudx.file!=null?
                                                <img title={sary} src={require('../../src/image/hxz.png')}/>:<p>无</p>
                                        }
                                    </li>
                                </ul>
                            </div>
                            <div className="bdel30">
                                <ul>
                                    <li>
                                        <span>最长</span>
                                        <p>{this.props.bck.enqudx.leng}m</p>
                                    </li>
                                    <li>
                                        <span>最宽</span>
                                        <p>{this.props.bck.enqudx.widt}m</p>
                                    </li>
                                    <li>
                                        <span>最高</span>
                                        <p>{this.props.bck.enqudx.high}m</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bdel12">
                                <span>重量</span>
                                <p>{this.props.bck.enqudx.wate}T</p>
                            </div>
                            <div className="bdel14">
                                <span>更多要求</span>
                                <p>{this.props.bck.enqudx.enquMemo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}