/**
 * Created by Zing on 2016/10/26.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Payhkt from './payhkt';
import Payly from './payly';
import HTTPED from '../../date/address';
import Payjsfk from './payjsfk';
import { message } from 'antd';

export default class Paydelh extends Component {
  constructor(props) {
    super(props);
    this.handcl=this.handcl.bind(this);
    this.handclc=this.handclc.bind(this);
    this.handc=this.handc.bind(this);
    this.handqx=this.handqx.bind(this);
    this.handche=this.handche.bind(this);
    this.handsc=this.handsc.bind(this);
    this.hanqr=this.hanqr.bind(this);
    this.handjs=this.handjs.bind(this);
    this.handyiyi=this.handyiyi.bind(this);
    this.hisjs=this.hisjs.bind(this);
    this.hisjsc=this.hisjsc.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      isly:false,
      yiyi:'',
      isjs:false
    }
  }
  hisjs(){
    let yaje=this.props.paysh.bhxqh.depo;//押款金额
    let xyye=this.props.paysh.bhxqh.residual;//信用余额
    if(yaje<=xyye){
      this.setState({
        isjs:true
      })
    }else{
      message.error("信用余额不足！");
    }
  }
  hisjsc(){
    this.setState({
      isjs:false
    })
  }
  handyiyi(v){
    this.setState({
      yiyi:v
    })
  }
  handche(v){
    var arr=v.target.value.split('\\');
    var fileName=arr[arr.length-1];
    this.refs.lujing3.innerHTML=fileName;
    if(v.target.files && v.target.files[0]){
      this.refs.lvtu7.style.display= 'block';
      this.refs.lvtu8.style.display= 'none';
      this.refs.lvtu7.src=window.URL.createObjectURL(v.target.files[0]);
      this.refs.lvtu9.href=window.URL.createObjectURL(v.target.files[0]);
    }else{
      this.refs.lvtu7.style.display= 'none';
      this.refs.lvtu8.style.display= 'block';
      let fks=this.props.paysh.bhxqh.payVouchLabe;
      if(fks!=null&&fks!=''){
        this.refs.lvtu9.href=HTTPED+fks.substring(1);
      }else{
        this.refs.lvtu9.href=require('../../src/image/kong.png');
      }
    }
  }
  handsc(){
    let guarid=this.props.paysh.bhxqh.guar;
    let formdate=new FormData();
    let filelvzm=this.refs.fksdan.files[0];
    if(filelvzm==undefined){
      message.error("请上传文件！");
    }else{
      if(filelvzm.type!='image/jpeg'&&filelvzm.type!='image/png'){
        message.error("请上传jpg或者png格式图片！");
      }else{
        formdate.append("userName", this.state.userName);
        formdate.append("token", this.state.token);
        formdate.append("payVouchFile", filelvzm);
        formdate.append("payVouch", true);
        if(filelvzm.size>2097152){
          message.error("只能上传小于2M的文件！");
        }else{
          //上传履约证明
          this.props.actions.putfksdh(guarid,formdate);
        }
      }
    }
  }
  handqx(){
    let guarid=this.props.paysh.bhxqh.guar;
    this.props.actions.putxgzth(guarid,this.state.userName,this.state.token,60);
    this.props.actions.fkshow(false);
  }
  handjs(a){
    let guarid=this.props.paysh.bhxqh.guar;
    if(a){
      this.props.actions.putxgzth(guarid,this.state.userName,this.state.token,10);
      this.props.handcb('zt1','正常');
      this.props.actions.fkshow(false);
    }else {
      message.error('请先阅读相关文件！');
    }
  }
  handc(){
    this.props.actions.fkshow(false);
  }
  handcl(){
    this.setState({
      isly:true
    })
  }
  handclc(){
    this.setState({
      isly:false
    })
  }
  hanqr(){
    let guarid=this.props.paysh.bhxqh.guar;
    this.props.actions.putqrlv(guarid,this.state.userName,this.state.token,1);//确认履约
    this.props.actions.putyih(guarid,this.state.userName,this.state.token,'');//异议内容
    //改变前端状态
    this.props.paysh.bhxqh.certStat=1;
  }
  render() {
    let qx=<li><a className="bntact" href='javascript:void(0);' onClick={this.handqx}>取消记录</a></li>;
    let js=<li><a className="bntact" href='javascript:void(0);' onClick={this.hisjs}>接受</a></li>;
    let jj=<li><a className="bntact" href='javascript:void(0);' onClick={this.handqx}>拒绝</a></li>;
    let qxjl,jies,juj;
    let EnquStat,zt;
    switch(this.props.paysh.bhxqh.stat){
      case 10:
        if(this.props.paysh.bhxqh.payCel==1){
          qxjl=undefined;jies=undefined;juj=undefined;
        }else{
          qxjl=qx;jies=undefined;juj=undefined;
        }
        EnquStat='正常';
        zt ='zt1';
        break;
      case 20:
        qxjl=qx;jies=undefined;juj=undefined;
        EnquStat='超期';
        zt ='zt2';
        break;
      case 30:
        qxjl=undefined;jies=undefined;juj=undefined;
        EnquStat='已核销';
        zt ='zt3';
        break;
      case 40:
        qxjl=undefined;jies=undefined;juj=undefined;
        EnquStat='第三方支付';
        zt ='zt4';
        break;
      case 50:
        qxjl=undefined;jies=js;juj=jj;
        EnquStat='未确认';
        zt ='zt5';
        break;
      case 60:
        qxjl=undefined;jies=undefined;juj=undefined;
        EnquStat='取消';
        zt ='zt6';
        break;
      default:
        qxjl=undefined;jies=undefined;juj=undefined;
        EnquStat='';
        zt ='';
        break;
    }
    let lye=this.props.paysh.bhxqh.perfCertLabe,fap=this.props.paysh.bhxqh.invoCopyLabe,fks=this.props.paysh.bhxqh.payVouchLabe;
    let lvyue,fapiao,fksd;
    if(lye!=null&&lye!=''){
      lvyue=HTTPED+lye.substring(1);
    }else{
      lvyue='';
    }
    if(fap!=null&&fap!=''){
      fapiao=HTTPED+fap.substring(1);
    }else{
      fapiao='';
    }
    if(fks!=null&&fks!=''){
      fksd=HTTPED+fks.substring(1);
    }else{
      fksd='';
    }
    return (
      <div className="paydel">
        <div className="payd1">
          <a className="close" href='javascript:void(0);' onClick={this.handc}>X</a>
          <div className="payd2">
            <div className="payd3">
              <span>收付款保函详情</span>
              <ul>
                {jies}
                {juj}
                {
                  this.props.paysh.bhxqh.payCel==1?<li><a className="bntact" href='javascript:void(0);'>已取消</a></li>:qxjl
                }
              </ul>
            </div>
            <div className="payd4">
              <ul>
                <li>
                  <span>保函号：</span>
                  <p>{this.props.paysh.bhxqh.guar}</p>
                </li>
                <li>
                  <span>状态：</span>
                  <p className={zt}>{EnquStat}</p>
                </li>
                <li>
                  <span>收款人：</span>
                  <p>{this.props.paysh.bhxqh.receUserName}</p>
                </li>
                <li>
                  <span>付款人：</span>
                  <p>{this.props.paysh.bhxqh.payUserName}</p>
                </li>
                <li>
                  <span>收款公司：</span>
                  <p>{this.props.paysh.bhxqh.receCompAlia}</p>
                </li>
                <li>
                  <span>付款公司：</span>
                  <p>{this.props.paysh.bhxqh.payCompAlia}</p>
                </li>
                <li>
                  <span>服务类型：</span>
                  <p>{this.props.paysh.bhxqh.servName}</p>
                </li>
                <li>
                  <span>运输工具：</span>
                  <p>{this.props.paysh.bhxqh.trans}</p>
                </li>
                <li>
                  <span>运单号：</span>
                  <p>{this.props.paysh.bhxqh.billNum}</p>
                </li>
                <li>
                  <span>航次：</span>
                  <p>{this.props.paysh.bhxqh.voyage}</p>
                </li>
                <li>
                  <span>箱号：</span>
                  <p>{this.props.paysh.bhxqh.cartNum}</p>
                </li>
                <li>
                  <span>押款金额：</span>
                  <div className="payd15">
                    <div className="payd12">{this.props.paysh.bhxqh.curr==2?'$':'￥'} {this.props.paysh.bhxqh.depo}</div>
                    <div className="payd13">信用余额:{this.props.paysh.bhxqh.curr==2?'$':'￥'} {this.props.paysh.bhxqh.residual}</div>
                  </div>
                </li>
                <li>
                  <span>付款期限：</span>
                  <p>{moment(this.props.paysh.bhxqh.expiTime).format('YYYY-MM-DD HH:mm')}</p>
                </li>
                <li>
                  <span>履约指标：</span>
                  <p>{this.props.paysh.bhxqh.guarTarget}</p>
                </li>
                <li>
                  <span title="保函发起时间">发起时间：</span>
                  <p>{moment(this.props.paysh.bhxqh.guarTime).format('YYYY-MM-DD HH:mm')}</p>
                </li>
                <li>
                  <span title="付款人接受时间">接受时间：</span>
                  {
                    this.props.paysh.bhxqh.payRevTime!=null?
                      <p>{moment(this.props.paysh.bhxqh.payRevTime).format('YYYY-MM-DD HH:mm')}</p>:undefined
                  }
                </li>
              </ul>
            </div>
            {
              this.props.paysh.bhxqh.stat==50?undefined:
                <div className="payd5">
                  <h3>流程记录</h3>
                  <div className="payd6">
                    <div className="payd7">
                      履约证明：
                    </div>
                    <div className="payd8">
                      <a href={this.props.paysh.bhxqh.perfCertLabe==null?require('../../src/image/kong.png'):lvyue} target="_blank" >
                        {
                          this.props.paysh.bhxqh.perfCertLabe==null?
                            <img src={require('../../src/image/kong.png')} />:<img src={lvyue}/>
                        }
                      </a>
                    </div>
                  </div>
                  <div className="payd6">
                    <div className="payd7">
                      确认履约：
                    </div>
                    <div className="payd9">
                      {
                        this.props.paysh.bhxqh.certStat==1?<div className="payd20">已确认</div>:
                          this.props.paysh.bhxqh.certStat==2?
                            <div className="payd20">
                              <a href='javascript:void(0);' className="qrly" onClick={this.hanqr}>确认</a>
                              提出异议({this.props.paysh.bhxqh.certStatLabe==null?this.state.yiyi:this.props.paysh.bhxqh.certStatLabe})
                            </div>:
                            <div className="payd10">
                              <a href='javascript:void(0);' className="qrly" onClick={this.hanqr}>确认</a>
                              <a href='javascript:void(0);' className="qrly1" onClick={this.handcl}>提出异议</a>
                            </div>
                      }
                      {
                        this.props.paysh.bhxqh.certStat!=1&&this.props.paysh.bhxqh.certStat!=2?
                          <div className="payd11">(超过10天未操作自动确认{
                            this.props.paysh.bhxqh.perfCert==1?
                              ',剩余'+this.props.paysh.bhxqh.remainTime+'天':undefined
                          })</div>:undefined
                      }
                      {
                        this.state.isly?
                          this.props.paysh.bhxqh.servName=='海空铁'?
                            <div className="payd14">
                              <Payhkt actions={this.props.actions}
                                      paysh={this.props.paysh}
                                      handyiyi={this.handyiyi}
                                      handclc={this.handclc}/>
                            </div>:
                            this.props.paysh.bhxqh.servName=='陆运'?
                              <div className="payd14">
                                <Payly actions={this.props.actions}
                                       paysh={this.props.paysh}
                                       handyiyi={this.handyiyi}
                                       handclc={this.handclc}/>
                              </div>:undefined:undefined
                      }
                    </div>
                  </div>
                  <div className="payd6">
                    <div className="payd7">
                      发票复印件：
                    </div>
                    <div className="payd8">
                      <a href={this.props.paysh.bhxqh.invoCopyLabe==null?require('../../src/image/kong.png'):fapiao} target="_blank" >
                        {
                          this.props.paysh.bhxqh.invoCopyLabe==null?
                            <img src={require('../../src/image/kong.png')} />:<img src={fapiao}/>
                        }
                      </a>
                    </div>
                  </div>
                  <div className="payd6">
                    <div className="payd7">
                      付款水单：
                    </div>
                    <div className="payd9">
                      <div className="payd10">
                        <a className="tu1" ref="lvtu9" href={this.props.paysh.bhxqh.payVouchLabe==null?require('../../src/image/kong.png'):fksd} target="_blank">
                          <img className="tu2" ref="lvtu7" />
                          {
                            this.props.paysh.bhxqh.payVouchLabe==null?
                              <img className="tu4" src={require('../../src/image/kong.png')} ref="lvtu8"/>:
                              <img className="tu4" src={fksd} ref="lvtu8"/>
                          }
                        </a>
                        <span ref="lujing3"></span>
                        <a href='javascript:void(0);' className="file">
                          浏览
                          <input type="file" ref="fksdan" onChange={this.handche}/>
                        </a>
                      </div>
                      <div className="payd11">
                        <a href='javascript:void(0);' className="file2" onClick={this.handsc}>上传</a>
                      </div>
                    </div>
                  </div>
                </div>
            }
          </div>
          {
            this.state.isjs?
              <Payjsfk
                text={this.props.text}
                hisjsc={this.hisjsc}
                handjs={this.handjs}/>:undefined
          }
        </div>
      </div>
    );
  }
}