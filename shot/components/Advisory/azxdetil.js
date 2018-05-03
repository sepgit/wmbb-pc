/**
 * Created by Zing on 2016/8/11.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Azxdhflist from './azxdhflist';
import {message} from 'antd';

export default class Azxdetil extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.handzx=this.handzx.bind(this);
        this.handzz=this.handzz.bind(this);
        this.UpladFiles=this.UpladFiles.bind(this);
        this.chengFiles=this.chengFiles.bind(this);
        this.handisup=this.handisup.bind(this);
        this.handisupc=this.handisupc.bind(this);

        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            userid:sessionStorage.getItem("SESSIONUSER"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            isup:'none'
        }
    }
    handisup(){
        this.setState({
            isup:'block'
        });
    }
    handisupc(){
        this.setState({
            isup:'none'
        });
    }
    UpladFiles(){
        let consid=this.props.zxinfo.zxdetl.cons;
        let formdate=new FormData();
        let filesda=this.refs.filedateszx.files[0];
        if(filesda==undefined){
            message.error("请上传文件！");
        }else{
            formdate.append("userName", this.state.userName);
            formdate.append("token", this.state.token);
            formdate.append("fileName", filesda);
            if(filesda.size>2097152){
                message.error("只能上传小于2M的文件！");
            }else{
                this.props.actions.putzxxzsc(consid,formdate);
                this.setState({
                    isup:'none'
                });
            }
        }
    }
    chengFiles(v){
        var arr=v.target.value.split('\\');
        var fileName=arr[arr.length-1];
        this.refs.uploadzx.innerHTML=fileName;
    }
    handleClick(){
        //改变详情动画
        this.props.actions.zxshow(false);
    }
    handzx(){
        this.props.handzf();
        this.props.actions.zxshow(false);
    }
    handzz(){
        let consid=this.props.zxinfo.zxdetl.cons;
        this.props.actions.putzxztgb(this.state.userName,this.state.token,consid,50);
        this.props.actions.zxshow(this.props.zxinfo.isc);
        this.props.handcb('zt5','终止');
    }
    render() {
        let re=this.props.zxinfo.zxhflist;
        let EnquStat,zt;
        switch(this.props.zxinfo.zxdetl.consStat){
            case 10:
                EnquStat='正常';
                zt ='zt1';
                break;
            case 30:
                EnquStat='收藏';
                zt ='zt3';
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
        let strsc=<li>
                    <a className="bntact" href='javascript:void(0);' onClick={this.handisup}>上传</a>
                    {
                        this.props.zxinfo.zxdetl.file!=null&&this.props.zxinfo.zxdetl.file != '' ?
                            <i></i>:undefined
                    }
                    <div className="uploadfines" style={{display:this.state.isup}}>
                        <p>文件上传</p>

                        <div className="upclose" onClick={this.handisupc}>×</div>
                        <span ref="uploadzx"></span>
                        <a href='javascript:void(0);' className="files">
                            浏览
                            <input type="file" onChange={this.chengFiles} ref="filedateszx"/>
                        </a>
                        <a href='javascript:void(0);' className="uploadbut"
                           onClick={this.UpladFiles}>上传</a>
                    </div>
                </li>;
        let strzf=<li><a className="bntact" href='javascript:void(0);' onClick={this.handzx}>转发</a></li>;
        let strzz=<li><a className="bntact" href='javascript:void(0);' onClick={this.handzz}>终止</a></li>;
        let sc,zf,zz;
        if(this.props.zxinfo.iscz){
            sc=undefined;zf=strzf;zz=undefined;
        }else{
            if(this.props.zxinfo.zxdetl.mngr>0){
                if(this.props.zxinfo.zxdetl.mngr == this.state.userid){
                    switch(this.props.zxinfo.zxdetl.consStat){
                        case 10:
                            sc=strsc;zf=strzf;zz=strzz;
                            break;
                        case 30:
                            sc=undefined;zf=strzf;zz=undefined;
                            break;
                        case 50:
                            sc=undefined;zf=strzf;zz=undefined;
                            break;
                        default:
                            sc=undefined;zf=undefined;zz=undefined;
                            break;
                    }
                }else{
                    sc=undefined;zf=strzf;zz=undefined;
                }
            }else{
                switch(this.props.zxinfo.zxdetl.consStat){
                    case 10:
                        sc=strsc;zf=strzf;zz=strzz;
                        break;
                    case 30:
                        sc=undefined;zf=strzf;zz=undefined;
                        break;
                    case 50:
                        sc=undefined;zf=strzf;zz=undefined;
                        break;
                    default:
                        sc=undefined;zf=undefined;zz=undefined;
                        break;
                }
            }
        }
        let sfile=this.props.zxinfo.zxdetl.file;
        let sary;
        if(sfile!=null&&sfile!=''){
            sfile=sfile.split('/');
            sary=sfile[sfile.length-1];
        }else{
            sary='无';
        }
        return (
            <div className="zxdetils">
                <div className="zxd1">
                    <a className="close" href='javascript:void(0);' onClick={this.handleClick}>X</a>
                    <div className="zxd2">
                        <div className="zxd3">
                            <span className="zxd3sp">咨询-{this.props.zxinfo.zxdetl.cons}</span>
                            <ul>
                                {sc}
                                {zf}
                                {zz}
                            </ul>
                        </div>
                        <div className="zxd4">
                            咨询信息:
                        </div>
                        <div className="zxd5">
                            <ul>
                                <li>咨询号：{this.props.zxinfo.zxdetl.cons}</li>
                                <li>咨询时间：{moment(this.props.zxinfo.zxdetl.consTime).format('YYYY-MM-DD HH:mm')}</li>
                                <li>状态：<span className={zt}>{EnquStat}</span></li>
                                <li>咨询人：{this.props.zxinfo.zxdetl.mngr!=''?this.props.zxinfo.zxdetl.mngr:this.props.zxinfo.zxdetl.conserName}</li>
                                <li>具体服务：{this.props.zxinfo.zxdetl.servName}-{this.props.zxinfo.zxdetl.servOptiName}</li>
                                <li>口岸：{this.props.zxinfo.zxdetl.portName}</li>
                                <li>
                                    咨询公司：
                                    {
                                        this.props.zxinfo.zxdetl.consVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
                                    }
                                    {this.props.zxinfo.zxdetl.compAlia}
                                </li>
                                <li>
                                    {
                                        this.props.zxinfo.zxdetl.file != null && this.props.zxinfo.zxdetl.file != '' ?
                                            '附件' : undefined
                                    }
                                    {
                                        this.props.zxinfo.zxdetl.file!=null&&this.props.zxinfo.zxdetl.file != '' ?
                                        <img src={require('../../src/image/hxz.png')} title={sary} />:undefined
                                    }
                                </li>
                            </ul>
                            <div className="zxd8">
                                <span>服务要求：</span>
                                <p>{this.props.zxinfo.zxdetl.consMemo}</p>
                            </div>
                        </div>
                        <div className="zxd6">
                            回复内容:
                        </div>
                        <ul className="zxd7">
                            {
                                re.map((item, index) => {
                                    return <Azxdhflist actions={this.props.actions}
                                                       zxinfo={this.props.zxinfo}
                                                       key={index}
                                                       rows={item}
                                        />;
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}