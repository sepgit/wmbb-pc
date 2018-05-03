/**
 * Created by Zing on 2016/7/14.
 */
import React,{Component} from 'react';
import Xppxfcl from './xppxfcl';
import Xppxlcl from './xppxlcl';
import Xppxair from './xppxair';
import Xppxhang from './xppxhang';
import Xppxreefer from './xppxreefer';
import Xppxfr from './xppxfr';
import Xppxdg from './xppxdg';
import Xppxot from './xppxot';
import Xppxbb from './xppxbb';
import Xppxroro from './xppxroro';
import Cyspjcmid from '../comment/cyspjcmid';
import Yspjcmid from '../comment/yspjcmid';
import Yspjmid from '../comment/yspjmid';
import Cyspjmid from '../comment/cyspjmid';
import moment from 'moment';
import {Checkbox,message} from 'antd';
import { VelocityTransitionGroup } from 'velocity-react';

export default class Xpdetil extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.UpladFiles=this.UpladFiles.bind(this);
    this.chengFiles=this.chengFiles.bind(this);
    this.handzb=this.handzb.bind(this);
    this.hantg=this.hantg.bind(this);
    this.hanzz=this.hanzz.bind(this);
    this.handisup=this.handisup.bind(this);
    this.handisupc=this.handisupc.bind(this);
    this.handxz=this.handxz.bind(this);
    this.handzf=this.handzf.bind(this);
    this.handzbin=this.handzbin.bind(this);
    this.handcyspj=this.handcyspj.bind(this);
    this.handcyspjc=this.handcyspjc.bind(this);
    this.handyspj=this.handyspj.bind(this);
    this.handyspjc=this.handyspjc.bind(this);
    this.yspj=this.yspj.bind(this);
    this.yspjc=this.yspjc.bind(this);
    this.cyspj=this.cyspj.bind(this);
    this.cyspjc=this.cyspjc.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      isup:'none',
      replzbid:0,
      hpzt:60,
      hpindex:-1,
      zbindex:false,
      iscyspjc:false,
      isyspjc:false,
      iscyspj:false,
      isyspj:false,
      iszbin:0,
      ishpid:0
    }
  }
  cyspj(){
    this.setState({
      iscyspjc:false,
      isyspjc:false,
      iscyspj:true,
      isyspj:false
    })
  }
  cyspjc(){
    this.setState({
      iscyspj:false
    })
  }
  yspj(){
    this.setState({
      iscyspjc:false,
      isyspjc:false,
      isyspj:true,
      iscyspj:false
    })
  }
  yspjc(){
    this.setState({
      isyspj:false
    })
  }
  handcyspjc(){
    this.setState({
      iscyspjc:false
    })
  }
  handcyspj(v,s){
    this.setState({
      iscyspjc:true,
      isyspjc:false,
      iszbin:v,
      ishpid:s
    })
  }
  handyspjc(){
    this.setState({
      isyspjc:false
    })
  }
  handyspj(v,s){
    this.setState({
      isyspjc:true,
      iscyspjc:false,
      iszbin:v,
      ishpid:s
    })
  }
  handzbin(){
    this.setState({
      zbindex:true
    })
  }
  handxz(v,c,i){
    this.setState({
      replzbid:v,
      hpzt:c,
      hpindex:i
    });
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
  handleClick(){
    this.setState({
      zbindex:false
    });
    //改变详情动画
    this.props.actions.xpshow(false);
  }
  handzb(){
    if(this.state.replzbid==0){
      message.error('请选择一条回盘');
    }else{
      this.props.actions.putxpxqzb(this.state.userName,this.state.token,30,this.state.replzbid);
      this.props.handcb('zt3','中标');
      this.props.actions.xpshow(false);
      //调用供舱舱位保函修改状态接口
      let cabRepl=this.props.getdetil.cabReplrs.cabRepl;
      if(this.props.getdetil.cabReplrs.cabRepl){
        this.props.actions.getxgztq(this.state.userName,this.state.token,cabRepl);
      }
    }
  }
  hantg(){
    if(this.state.replzbid==0){
      message.error('请选择一条回盘');
    }else {
      this.props.actions.putxpxqtg(this.state.userName, this.state.token, 40, this.props.rows.enqu);//修改询盘退关状态
      this.props.handcb('zt4','退关');
      this.props.actions.xpshow(false);
    }
  }
  hanzz(){
    this.props.actions.putxpxqzz(this.state.userName,this.state.token,50,this.props.rows.enqu);
    this.props.handcb('zt5','终止');
    this.props.actions.xpshow(false);
    //调用求舱舱位保函修改状态接口
    let cabEnqu=this.props.getdetil.cabEnqucd.cabEnqu;
    if(this.props.getdetil.cabReplrs.cabEnqu) {
      this.props.actions.getxgztc(this.state.userName, this.state.token, cabEnqu);
    }
  }
  UpladFiles(){
    let enquid=this.props.rows.enqu;
    let formdate=new FormData();
    let filesda=this.refs.filedates.files[0];
    if(filesda==undefined){
      message.error("请上传文件！");
    }else{
      formdate.append("userName", this.state.userName);
      formdate.append("token", this.state.token);
      formdate.append("fileName", filesda);
      if(filesda.size>2097152){
        message.error("只能上传小于2M的文件！");
      }else{
        this.props.actions.putxpxqsc(enquid,formdate);
        this.setState({
          isup:'none'
        });
      }
    }
  }
  chengFiles(v){
    var arr=v.target.value.split('\\');
    var fileName=arr[arr.length-1];
    this.refs.uploadtexts.innerHTML=fileName;
  }
  handzf(){
    this.props.actions.xpshow(false);//关闭详情
    this.props.handisnew(this.props.rows.servName,this.props.rows.serv);
    this.props.actions.getportsf(this.state.userName,this.state.token,this.props.rows.serv);//获取该服务港口
    this.props.actions.getcarrs(this.state.userName,this.state.token,this.props.rows.serv);//获取该服务承运商
    this.props.actions.getcarrscy(this.state.userName,this.state.token,this.props.rows.serv);//获取常用承运商
    this.props.actions.getportszj(this.state.userName,this.state.token,this.props.rows.serv);//获取最近港口
    this.props.actions.getportszjm(this.state.userName,this.state.token,this.props.rows.serv);//获取最近港口目的地
    this.props.actions.getsendto(this.state.userName,this.state.token,this.props.rows.serv,this.props.rows.depaPort,this.props.rows.destPort);//获取收件人(对应服务供应商)
  }
  render() {
    let servist;
    this.props.rows.servName=='FCL'?servist=<Xppxfcl
      actions={this.props.actions}
      getdetil={this.props.getdetil}
      rows={this.props.getdetil.rows}
      handxz={this.handxz}
      handzbin={this.handzbin}
      handyspj={this.handyspj}
      hpindex={this.state.hpindex}/>:
      this.props.rows.servName=='LCL'?servist=<Xppxlcl
        actions={this.props.actions}
        getdetil={this.props.getdetil}
        rows={this.props.getdetil.rows}
        handxz={this.handxz}
        handzbin={this.handzbin}
        handyspj={this.handyspj}
        hpindex={this.state.hpindex}/>:
        this.props.rows.servName=='AIR'?servist=<Xppxair
          actions={this.props.actions}
          getdetil={this.props.getdetil}
          rows={this.props.getdetil.rows}
          handxz={this.handxz}
          handzbin={this.handzbin}
          handyspj={this.handyspj}
          hpindex={this.state.hpindex}/>:
          this.props.rows.servName=='HG'?servist=<Xppxhang
            actions={this.props.actions}
            getdetil={this.props.getdetil}
            rows={this.props.getdetil.rows}
            handxz={this.handxz}
            handzbin={this.handzbin}
            handyspj={this.handyspj}
            hpindex={this.state.hpindex}/>:
            this.props.rows.servName=='RF'?servist=<Xppxreefer
              actions={this.props.actions}
              getdetil={this.props.getdetil}
              rows={this.props.getdetil.rows}
              handxz={this.handxz}
              handzbin={this.handzbin}
              handyspj={this.handyspj}
              hpindex={this.state.hpindex}/>:
              this.props.rows.servName=='FR'?servist=<Xppxfr
                actions={this.props.actions}
                getdetil={this.props.getdetil}
                rows={this.props.getdetil.rows}
                handxz={this.handxz}
                handzbin={this.handzbin}
                handyspj={this.handyspj}
                hpindex={this.state.hpindex}/>:
                this.props.rows.servName=='DG'?servist=<Xppxdg
                  actions={this.props.actions}
                  getdetil={this.props.getdetil}
                  rows={this.props.getdetil.rows}
                  handxz={this.handxz}
                  handzbin={this.handzbin}
                  handyspj={this.handyspj}
                  hpindex={this.state.hpindex}/>:
                  this.props.rows.servName=='OT'?servist=<Xppxot
                    actions={this.props.actions}
                    getdetil={this.props.getdetil}
                    rows={this.props.getdetil.rows}
                    handxz={this.handxz}
                    handzbin={this.handzbin}
                    handyspj={this.handyspj}
                    hpindex={this.state.hpindex}/>:
                    this.props.rows.servName=='BB'?servist=<Xppxbb
                      actions={this.props.actions}
                      getdetil={this.props.getdetil}
                      rows={this.props.getdetil.rows}
                      handxz={this.handxz}
                      handzbin={this.handzbin}
                      handyspj={this.handyspj}
                      hpindex={this.state.hpindex}/>:
                      this.props.rows.servName=='RORO'?servist=<Xppxroro
                        actions={this.props.actions}
                        getdetil={this.props.getdetil}
                        rows={this.props.getdetil.rows}
                        handxz={this.handxz}
                        handzbin={this.handzbin}
                        handyspj={this.handyspj}
                        hpindex={this.state.hpindex}/>:
                        undefined;
    let strsc=<li className="uploadkj">
        <a className="bntact" href='javascript:void(0);' onClick={this.handisup}>上传</a>
      {
        this.props.getdetil.enqu.file == null ? undefined :
          <i></i>
      }
        <div className="uploadfines" style={{display:this.state.isup}}>
            <p>文件上传</p>

            <div className="upclose" onClick={this.handisupc}>×</div>
            <span ref="uploadtexts"></span>
            <a href='javascript:void(0);' className="files">
                浏览
                <input type="file" onChange={this.chengFiles} ref="filedates"/>
            </a>
            <a href='javascript:void(0);' className="uploadbut"
               onClick={this.UpladFiles}>上传</a>
        </div>
    </li>;
    let strzb=<li><a className="bntact" href="javascript:void(0);" onClick={this.handzb}>中标</a></li>;
    let strtg=<li><a className="bntact" href='javascript:void(0);' onClick={this.hantg}>退关</a></li>;
    let strzf=<li><a className="bntact" href='javascript:void(0);' onClick={this.handzf}>转发</a></li>;
    let strzz=<li><a className="bntact" href='javascript:void(0);' onClick={this.hanzz}>终止</a></li>;
    let sc,zb,tg,zf,zz;
    if(this.props.getdetil.iscz){
      sc=undefined;zb=undefined;tg=undefined;zf=strzf;zz=undefined;
    }else{
      if(this.props.getdetil.enqu.mngr > 0){
        if(this.props.getdetil.enqu.mngr == this.state.userid){
          switch(this.props.rows.enquStat){
            case 10:
              sc=strsc;tg=undefined;zf=strzf;zz=strzz;
              this.state.zbindex?zb=strzb:zb=undefined;
              break;
            case 20:
              sc=undefined;zb=undefined;tg=undefined;zf=strzf;zz=undefined;
              break;
            case 30:
              sc=strsc;zb=undefined;zf=strzf;zz=undefined;
              this.state.hpzt == 30?tg=strtg:tg=undefined;
              break;
            case 40:
              sc=undefined;zb=undefined;tg=undefined;zf=strzf;zz=undefined;
              break;
            case 50:
              sc=undefined;zb=undefined;tg=undefined;zf=strzf;zz=undefined;
              break;
            default:
              sc=undefined;zb=undefined;tg=undefined;zf=undefined;zz=undefined;
              break;
          }
        }else{
          sc=undefined;zb=undefined;tg=undefined;zf=strzf;zz=undefined;
        }
      }else{
        switch(this.props.rows.enquStat){
          case 10:
            sc=strsc;tg=undefined;zf=strzf;zz=strzz;
            this.state.zbindex?zb=strzb:zb=undefined;
            break;
          case 20:
            sc=undefined;zb=undefined;tg=undefined;zf=strzf;zz=undefined;
            break;
          case 30:
            sc=strsc;zb=undefined;zf=strzf;zz=undefined;
            this.state.hpzt == 30?tg=strtg:tg=undefined;
            break;
          case 40:
            sc=undefined;zb=undefined;tg=undefined;zf=strzf;zz=undefined;
            break;
          case 50:
            sc=undefined;zb=undefined;tg=undefined;zf=strzf;zz=undefined;
            break;
          default:
            sc=undefined;zb=undefined;tg=undefined;zf=undefined;zz=undefined;
            break;
        }
      }
    }
    return (
      <div className="xpdetilz">
          <div className="dxp">
              <a className="close" href='javascript:void(0);' onClick={this.handleClick}>X</a>
              <div className="dxp1">
                  <div className="dxp2">
                      <span>询盘-{this.props.rows.enqu}</span>
                      <ul>
                        {sc}
                        {zb}
                        {tg}
                        {zf}
                        {zz}
                      </ul>
                  </div>
                  <div className="dxp3">
                      <span className="dxp3info">询盘信息:</span>
                      <div className="dxp4">
                          <ul>
                              <li>询盘号：{this.props.rows.enqu}</li>
                              <li title={this.props.getdetil.enqu.depaPortName}>起运地：{this.props.getdetil.enqu.depaPortName}</li>
                              <li title={this.props.getdetil.enqu.destPortName}>目的地：{this.props.getdetil.enqu.destPortName}</li>
                              <li>询盘有效期：{moment(this.props.getdetil.enqu.expiDate).format('YYYY.MM.DD')}</li>
                              <li title={this.props.getdetil.enqusendTo}>收件人：<div className="issj">{this.props.getdetil.enqusendTo}</div></li>
                            {
                              this.state.comp!=0?
                                <li title={this.props.getdetil.enqu.mngrName}>
                                    委托人：
                                    <div className="issj">{this.props.getdetil.enqu.mngrName}</div>
                                </li>:undefined
                            }
                            {
                              this.state.comp!=0?
                                <li title={this.props.getdetil.enquccto}>
                                    抄送人：
                                    <div className="issj">{this.props.getdetil.enquccto}</div>
                                </li>:undefined
                            }
                              <li>完货日期：{moment(this.props.getdetil.enqu.compDate).format('YYYY.MM.DD')}</li>
                              <li title={this.props.getdetil.enqucarrs==''?'不限':this.props.getdetil.enqucarrs}>承运商：<div className="issj">{this.props.getdetil.enqucarrs==''?'不限':this.props.getdetil.enqucarrs}</div></li>
                              <li>运输要求：{this.props.getdetil.enqu.tranship==1?'直达':this.props.getdetil.enqu.tranship==2?'中转':'不限'}</li>
                              <li>平台供应商：<Checkbox checked={this.props.getdetil.enqu.match==1?true:0} disabled></Checkbox></li>
                            {
                              this.props.rows.servName=='BB'||this.props.rows.servName=='RORO'?
                                <li>运输条款：{this.props.rows.item==0?'FLT':this.props.rows.item==1?'FILO':this.props.rows.item==2?'FIO':undefined}</li>:undefined
                            }
                            <li>品名：{this.props.getdetil.enqu.itemName}</li>
                          </ul>
                          <span className="dxp4span">询盘备注：</span>
                          <p>{this.props.getdetil.enqu.enquMemo}
                          </p>
                      </div>
                    {
                      typeof(this.props.getdetil.cabEnqub.enquTar) == 'undefined' ? undefined :
                        <span className="dxp3info">求舱保函详情:</span>
                    }
                    {
                      typeof(this.props.getdetil.cabEnqub.enquTar) == 'undefined' ? undefined :
                        <div className="dxp100">
                            <ul>
                                <li>
                                    定金金额：{this.props.getdetil.cabEnqub.curr == '1' ? '¥' : '$'} {this.props.getdetil.cabEnqub.depo}
                                </li>
                                <li>
                                    内陆费用：{this.props.getdetil.cabEnqub.curr == '1' ? '¥' : '$'} {this.props.getdetil.cabEnqub.cabFee}
                                </li>
                                <li>求舱履约指标：{this.props.getdetil.cabEnqub.enquTar}</li>
                                <li>供舱履约指标：{this.props.getdetil.cabEnqub.replTar}</li>
                                <li>内陆方式：{this.props.getdetil.cabEnqub.cabServName}</li>
                            </ul>
                        </div>
                    }
                      <span className="dxp3info">回盘内容:</span>
                      <div className="dxp5">
                        {servist}
                      </div>
                  </div>
              </div>
            <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
              {
                this.state.iscyspjc?<Cyspjcmid handcyspjc={this.handcyspjc}
                                               iszbin={this.state.iszbin}
                                               ishpid={this.state.ishpid}
                                               handyspj={this.handyspj}
                                               getdetil={this.props.getdetil}
                                               actions={this.props.actions}
                                               cyspj={this.cyspj}
                                            />:undefined
              }
            </VelocityTransitionGroup>
            <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
              {
                this.state.isyspjc?<Yspjcmid
                  handyspjc={this.handyspjc}
                  iszbin={this.state.iszbin}
                  ishpid={this.state.ishpid}
                  handcyspj={this.handcyspj}
                  getdetil={this.props.getdetil}
                  actions={this.props.actions}
                  yspj={this.yspj}
                />:undefined
              }
            </VelocityTransitionGroup>
            <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
              {
                this.state.isyspj?<Yspjmid
                  yspjc={this.yspjc}
                  cyspj={this.cyspj}
                  ishpid={this.state.ishpid}
                  getdetil={this.props.getdetil}
                  actions={this.props.actions}
                />:undefined
              }
            </VelocityTransitionGroup>
            <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
              {
                this.state.iscyspj?<Cyspjmid
                  cyspjc={this.cyspjc}
                  yspj={this.yspj}
                  ishpid={this.state.ishpid}
                  getdetil={this.props.getdetil}
                  actions={this.props.actions}
                />:undefined
              }
            </VelocityTransitionGroup>
          </div>
      </div>
    );
  }
}