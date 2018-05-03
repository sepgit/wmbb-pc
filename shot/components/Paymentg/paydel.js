/**
 * Created by Zing on 2016/10/26.
 */
import React,{Component} from 'react';
import moment from 'moment';
import HTTPED from '../../date/address';
import { message,Modal } from 'antd';
const confirm = Modal.confirm;

export default class Paydel extends Component {
  constructor(props) {
    super(props);
    this.handc=this.handc.bind(this);
    this.hanscly=this.hanscly.bind(this);
    this.hanqrly=this.hanqrly.bind(this);
    this.chengly=this.chengly.bind(this);
    this.hansclyt=this.hansclyt.bind(this);
    this.chenglyt=this.chenglyt.bind(this);
    this.handdsfzf=this.handdsfzf.bind(this);
    this.handqxjl=this.handqxjl.bind(this);
    this.handsc=this.handsc.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      isly:true
    }
  }
  handsc(){
    //删除
    let This=this;
    confirm({
      title: '您是否确定要删除',
      content: '删除完不可恢复',
      onOk() {
        let guarid=This.props.pays.bhxq.guar;
        This.props.actions.deldelbh(guarid,This.state.userName,This.state.token);
        This.props.handcb('zt3','已核销');
        This.props.actions.bhshow(false);
      },
      onCancel() {}
    });
  }
  handdsfzf(){
    //申请平台支付
    let guarid=this.props.pays.bhxq.guar;
    this.props.actions.putxgzt(guarid,this.state.userName,this.state.token,40);
    this.props.handcb('zt4','申请平台支付');
    this.props.actions.bhshow(false);
  }
  handqxjl(){
    //取消记录
    let guarid=this.props.pays.bhxq.guar;
    this.props.actions.putxgzt(guarid,this.state.userName,this.state.token,60);
    this.props.actions.bhshow(false);
  }
  chengly(v){
    var arr=v.target.value.split('\\');
    var fileName=arr[arr.length-1];
    this.refs.lujing.innerHTML=fileName;
    if(v.target.files && v.target.files[0]){
      this.refs.lvtu.style.display= 'block';
      this.refs.lvtu2.style.display= 'none';
      this.refs.lvtu.src=window.URL.createObjectURL(v.target.files[0]);
      this.refs.lvtu5.href=window.URL.createObjectURL(v.target.files[0]);
    }else{
      this.refs.lvtu.style.display= 'none';
      this.refs.lvtu2.style.display= 'block';
      let lye=this.props.pays.bhxq.perfCertLabe;
      if(lye!=null&&lye!=''){
        this.refs.lvtu5.href=HTTPED+lye.substring(1);
      }else{
        this.refs.lvtu5.href=require('../../src/image/kong.png');
      }
    }
  }
  hanscly(){
    let guarid=this.props.pays.bhxq.guar;
    let formdate=new FormData();
    let filelvzm=this.refs.lyzm.files[0];
    if(filelvzm==undefined){
      message.error("请上传文件！");
    }else{
      if(filelvzm.type!='image/jpeg'&&filelvzm.type!='image/png'){
        message.error("请上传jpg或者png格式图片！");
      }else{
        formdate.append("userName", this.state.userName);
        formdate.append("token", this.state.token);
        formdate.append("perfCertFile", filelvzm);
        formdate.append("perfCert", true);
        if(filelvzm.size>2097152){
          message.error("只能上传小于2M的文件！");
        }else{
          //上传履约证明
          this.props.actions.putlysc(guarid,formdate);
        }
      }
    }
  }
  hanqrly(){
    let guarid=this.props.pays.bhxq.guar;
    let userName=this.state.userName;
    let token=this.state.token;
    this.props.actions.putlyqr(guarid,userName,token);//确认履约证明
    this.setState({
      isly:false
    })
  }
  chenglyt(v){
    var arr=v.target.value.split('\\');
    var fileName=arr[arr.length-1];
    this.refs.lujing2.innerHTML=fileName;
    if(v.target.files && v.target.files[0]){
      this.refs.lvtu3.style.display= 'block';
      this.refs.lvtu4.style.display= 'none';
      this.refs.lvtu3.src=window.URL.createObjectURL(v.target.files[0]);
      this.refs.lvtu6.href=window.URL.createObjectURL(v.target.files[0]);
    }else{
      this.refs.lvtu3.style.display= 'none';
      this.refs.lvtu4.style.display= 'block';
      let lye=this.props.pays.bhxq.invoCopyLabe;
      if(lye!=null&&lye!=''){
        this.refs.lvtu6.href=HTTPED+lye.substring(1);
      }else{
        this.refs.lvtu6.href=require('../../src/image/kong.png');
      }
    }
  }
  hansclyt(){
    let guarid=this.props.pays.bhxq.guar;
    let formdate=new FormData();
    let filelvzm=this.refs.fapaof.files[0];
    if(filelvzm==undefined){
      message.error("请上传文件！");
    }else{
      if(filelvzm.type!='image/jpeg'&&filelvzm.type!='image/png'){
        message.error("请上传jpg或者png格式图片！");
      }else{
        formdate.append("userName", this.state.userName);
        formdate.append("token", this.state.token);
        formdate.append("invoCopyFile", filelvzm);
        formdate.append("invoCopy", true);
        if(filelvzm.size>2097152){
          message.error("只能上传小于2M的文件！");
        }else{
          //上传履约证明
          this.props.actions.putfpsc(guarid,formdate);
        }
      }
    }
  }
  handc(){
    this.props.actions.bhshow(false);
  }
  render() {
    let dsfzf=<li><a className="bntact" href='javascript:void(0);' onClick={this.handdsfzf}>申请平台支付</a></li>;
    let qxjl=<li><a className="bntact" href='javascript:void(0);' onClick={this.handqxjl}>取消记录</a></li>;
    let sc=<li><a className="bntact" href='javascript:void(0);' onClick={this.handsc}>删除</a></li>;
    let sq,ds,qx;
    let EnquStat,zt;
    switch(this.props.pays.bhxq.stat) {
      case 10:
        sq=undefined;ds=undefined;qx=qxjl;
        if(this.props.pays.bhxq.certStat==1){
          ds=dsfzf;
        }else{
          ds=undefined;
        }
        EnquStat = '正常';
        zt = 'zt1';
        break;
      case 20:
        sq=undefined;qx=qxjl;
        if(this.props.pays.bhxq.certStat==1){
          ds=dsfzf;
        }else{
          ds=undefined;
        }
        EnquStat = '超期';
        zt = 'zt2';
        break;
      case 30:
        sq=undefined;ds=undefined;qx=undefined;
        EnquStat = '已核销';
        zt = 'zt3';
        break;
      case 40:
        sq=undefined;ds=undefined;qx=undefined;
        EnquStat = '申请平台支付';
        zt = 'zt4';
        break;
      case 50:
        sq=undefined;ds=undefined;qx=sc;
        EnquStat = '未确认';
        zt = 'zt5';
        break;
      case 60:
        sq=undefined;ds=undefined;qx=undefined;
        EnquStat = '取消';
        zt = 'zt6';
        break;
      default:
        sq=undefined;ds=undefined;qx=undefined;
        EnquStat = '';
        zt = '';
        break;
    }
    let lye=this.props.pays.bhxq.perfCertLabe,fap=this.props.pays.bhxq.invoCopyLabe,fks=this.props.pays.bhxq.payVouchLabe;
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
                {sq}
                {ds}
                {
                  this.props.pays.bhxq.receCel==1?<li><a className="bntact" href='javascript:void(0);'>已取消</a></li>:qx
                }
              </ul>
            </div>
            <div className="payd4">
              <ul>
                <li>
                  <span>保函号：</span>
                  <p>{this.props.pays.bhxq.guar}</p>
                </li>
                <li>
                  <span>状态：</span>
                  <p className={zt}>{EnquStat}</p>
                </li>
                <li>
                  <span>收款人：</span>
                  <p>{this.props.pays.bhxq.receUserName}</p>
                </li>
                <li>
                  <span>付款人：</span>
                  <p>{this.props.pays.bhxq.payUserName}</p>
                </li>
                <li>
                  <span>收款公司：</span>
                  <p>{this.props.pays.bhxq.receCompAlia}</p>
                </li>
                <li>
                  <span>付款公司：</span>
                  <p>{this.props.pays.bhxq.payCompAlia}</p>
                </li>
                <li>
                  <span>服务类型：</span>
                  <p>{this.props.pays.bhxq.servName}</p>
                </li>
                <li>
                  <span>运输工具：</span>
                  <p>{this.props.pays.bhxq.trans}</p>
                </li>
                <li>
                  <span>运单号：</span>
                  <p>{this.props.pays.bhxq.billNum}</p>
                </li>
                <li>
                  <span>航次：</span>
                  <p>{this.props.pays.bhxq.voyage}</p>
                </li>
                <li>
                  <span>箱号：</span>
                  <p>{this.props.pays.bhxq.cartNum}</p>
                </li>
                <li>
                  <span>押款金额:</span>
                  <div className="payd15">
                    <div className="payd12">{this.props.pays.bhxq.curr==2?'$':'￥'} {this.props.pays.bhxq.depo}</div>
                    <div className="payd13">信用余额：{this.props.pays.bhxq.curr==2?'$':'￥'} {this.props.pays.bhxq.residual}</div>
                  </div>
                </li>
                <li>
                  <span>付款期限：</span>
                  <p>{moment(this.props.pays.bhxq.expiTime).format('YYYY-MM-DD HH:mm')}</p>
                </li>
                <li>
                  <span>履约指标：</span>
                  <p>{this.props.pays.bhxq.guarTarget}</p>
                </li>
                <li>
                  <span title="保函发起时间">发起时间：</span>
                  <p>{moment(this.props.pays.bhxq.guarTime).format('YYYY-MM-DD HH:mm')}</p>
                </li>
                <li>
                  <span title="付款人接受时间">接受时间：</span>
                  {
                    this.props.pays.bhxq.payRevTime!=null?
                      <p>{moment(this.props.pays.bhxq.payRevTime).format('YYYY-MM-DD HH:mm')}</p>:undefined
                  }
                </li>
              </ul>
            </div>
            {
              this.props.pays.bhxq.stat == 50 ? undefined :
                <div className="payd5">
                  <h3>流程记录</h3>

                  <div className="payd6">
                    <div className="payd7">
                      履约证明：
                    </div>
                    <div className="payd9">
                      <div className="payd10">
                        <a className="tu1" ref="lvtu5"
                           href={this.props.pays.bhxq.perfCertLabe==null?require('../../src/image/kong.png'):lvyue}
                           target="_blank">
                          <img className="tu2" ref="lvtu"/>
                          {
                            this.props.pays.bhxq.perfCertLabe == null ?
                              <img className="tu4"
                                   src={require('../../src/image/kong.png')}
                                   ref="lvtu2"/> :
                              <img className="tu4" src={lvyue} ref="lvtu2"/>
                          }
                        </a>
                        <span ref="lujing"></span>
                        <a href='javascript:void(0);' className="file">
                          浏览
                          {
                            this.props.pays.bhxq.perfCert == 1 ? undefined :
                              this.state.isly ? <input type="file" ref='lyzm'
                                                       onChange={this.chengly}/> : undefined
                          }
                        </a>
                      </div>
                      <div className="payd11">
                        {
                          this.props.pays.bhxq.perfCert == 1 ? undefined :
                            this.state.isly ?
                              <a href='javascript:void(0);' className="file2"
                                 onClick={this.hanscly}>上传</a> : undefined
                        }
                        {
                          this.props.pays.bhxq.perfCert == 1 ? undefined :
                            this.state.isly ?
                              <a href='javascript:void(0);' className="file2"
                                 onClick={this.hanqrly}>确认</a> : undefined
                        }
                      </div>
                    </div>
                  </div>
                  <div className="payd6">
                    <div className="payd7">
                      确认履约：
                    </div>
                    <div className="payd8">
                      {
                        this.props.pays.bhxq.certStat == 0 || this.props.pays.bhxq.certStat == null ?
                          '未确认' : this.props.pays.bhxq.certStat == 1 ?
                          '已确认' : this.props.pays.bhxq.certStat == 2 ?
                            '提出异议（' + this.props.pays.bhxq.certStatLabe + ')' : '未确认'
                      }
                    </div>
                  </div>
                  <div className="payd6">
                    <div className="payd7">
                      发票复印件：
                    </div>
                    <div className="payd9">
                      <div className="payd10">
                        <a className="tu1" ref="lvtu6"
                           href={this.props.pays.bhxq.invoCopyLabe==null?require('../../src/image/kong.png'):fapiao}
                           target="_blank">
                          <img className="tu2" ref="lvtu3"/>
                          {
                            this.props.pays.bhxq.invoCopyLabe == null ?
                              <img className="tu4"
                                   src={require('../../src/image/kong.png')}
                                   ref="lvtu4"/> :
                              <img className="tu4" src={fapiao} ref="lvtu4"/>
                          }
                        </a>
                        <span ref="lujing2"></span>
                        <a href='javascript:void(0);' className="file">
                          浏览
                          <input type="file" ref="fapaof" onChange={this.chenglyt}/>
                        </a>
                      </div>
                      <div className="payd11">
                        <a href='javascript:void(0);' className="file2" onClick={this.hansclyt}>上传</a>
                      </div>
                    </div>
                  </div>
                  <div className="payd6">
                    <div className="payd7">
                      付款水单：
                    </div>
                    <div className="payd8">
                      <a href={this.props.pays.bhxq.payVouchLabe==null?require('../../src/image/kong.png'):fksd}
                         target="_blank">
                        {
                          this.props.pays.bhxq.payVouchLabe == null ?
                            <img src={require('../../src/image/kong.png')}/> :
                            <img src={fksd}/>
                        }
                      </a>
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    );
  }
}