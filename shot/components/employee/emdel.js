/**
 * Created by Zing on 2016/8/25.
 */
import React,{Component} from 'react';
import {Input,Checkbox,Modal,message} from 'antd';
const confirm = Modal.confirm;

export default class Emdel extends Component {
  constructor(props) {
    super(props);
    this.handqr=this.handqr.bind(this);
    this.handc=this.handc.bind(this);
    this.handjy=this.handjy.bind(this);
    this.ygyj=this.ygyj.bind(this);
    this.ygfw=this.ygfw.bind(this);
    this.yggys=this.yggys.bind(this);
    this.ygwt=this.ygwt.bind(this);
    this.ygsk=this.ygsk.bind(this);
    this.ygfk=this.ygfk.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      ygzh:'',
      xm:'',
      zw:'',
      dh:'',
      cz:'',
      yx:'',
      dz:'',
      qxyj:false,
      qxfw:false,
      qxgys:false,
      wt:false,
      sk:false,
      fk:false
    }
  }
  componentDidMount(){
    let adva,cont,prov,pvs,sks,fks;
    if(this.props.ema.privqx.adva==null){
      adva=false;
    }else if(this.props.ema.privqx.adva==1){
      adva=true;
    }else{
      adva=false;
    }
    if(this.props.ema.privqx.cont==null){
      cont=false;
    }else if(this.props.ema.privqx.cont==1){
      cont=true;
    }else{
      cont=false;
    }
    if(this.props.ema.privqx.prov==null){
      prov=false;
    }else if(this.props.ema.privqx.prov==1){
      prov=true;
    }else{
      prov=false;
    }
    if(this.props.ema.userdx.freiMngr==null){
      pvs=false;
    }else if(this.props.ema.userdx.freiMngr==1){
      pvs=true;
    }else{
      pvs=false;
    }
    if(this.props.ema.privqx.paym==null){
      fks=false;
    }else if(this.props.ema.privqx.paym==1){
      fks=true;
    }else{
      fks=false;
    }
    if(this.props.ema.privqx.cash==null){
      sks=false;
    }else if(this.props.ema.privqx.cash==1){
      sks=true;
    }else{
      sks=false;
    }
    this.setState({
      qxyj:adva,
      qxfw:cont,
      qxgys:prov,
      wt:pvs,
      sk:sks,
      fk:fks
    })
  }
  ygyj(){
    this.setState({
      qxyj:!this.state.qxyj
    })
  }
  ygfw(){
    this.setState({
      qxfw:!this.state.qxfw
    })
  }
  yggys(){
    this.setState({
      qxgys:!this.state.qxgys
    })
  }
  ygwt(){
    this.setState({
      wt:!this.state.wt
    })
  }
  ygsk(){
    this.setState({
      sk:!this.state.sk
    })
  }
  ygfk(){
    this.setState({
      fk:!this.state.fk
    })
  }
  handc(){
    //改变详情动画
    this.props.actions.emshow(false);
  }
  handqr(){
    let userName=this.state.userName;
    let token=this.state.token;
    let name=this.props.ema.userdx.name?this.props.ema.userdx.name:'';
    let posi=this.props.ema.userdx.posi?this.props.ema.userdx.posi:'';
    let phon=this.props.ema.userdx.phon?this.props.ema.userdx.phon:'';
    let fax=this.props.ema.userdx.fax?this.props.ema.userdx.fax:'';
    let mail=this.props.ema.userdx.mail?this.props.ema.userdx.mail:'';
    let adva=this.state.qxyj?1:0;
    let cont=this.state.qxfw?1:0;
    let prov=this.state.qxgys?1:0;
    let paym=this.state.fk?1:0;
    let cash=this.state.sk?1:0;
    let freiMngr=this.state.wt?1:0;
    if(name==''||posi==''){
      message.error("请填写完整再提交！");
    }else{
      //修改用户
      this.props.actions.putemuse(userName,token,this.props.ema.userdx.user,name,posi,phon,fax,mail,adva,cont,prov,paym,cash,freiMngr);
      //修改权限
      this.props.actions.emshow(false);
    }
  }
  handjy(){
    let This=this;
    confirm({
      title: '您是否确认要禁用',
      content: '禁用完不可恢复,如需要请联系管理员',
      onOk() {
        This.props.actions.putemlz(This.state.userName,This.state.token,This.props.ema.userdx.user);
        This.props.handjy();
        This.props.actions.emshow(This.props.ema.upis);
      },
      onCancel() {}
    });
  }
  render() {
    return (
      <div className="emds">
        <div className="emds1">
          <div className="emds2">
            <div className="emds3">
              <span>员工-{this.props.ema.userdx.name}</span>
              <ul>
                <li><a className="emds6" href='javascript:void(0);' onClick={this.handqr}>确定</a></li>
                {
                  this.props.ema.userdx.user!=this.state.userid?
                    <li><a className="emds6" href='javascript:void(0);' onClick={this.handjy}>禁用</a>
                    </li>:undefined
                }
                <li><a className="emds7" href='javascript:void(0);' onClick={this.handc}>关闭</a></li>
              </ul>
            </div>
            <div className="emds8">
              <span className="emds9">员工账号</span>
              <p>{this.props.ema.userdx.userAcco}</p>
              <i className="emcolor">*</i>
            </div>
            <div className="emds4">
              <ul>
                <li>
                  <span className="emsp">姓名</span>
                  <Input
                    value={this.props.ema.userdx.name}
                    placeholder="姓名"
                    className="emds10"
                    onChange={(e)=>{this.setState({zw:e.target.value});this.props.ema.userdx.name=e.target.value;}}
                  />
                  <i className="emcolor">*</i>
                </li>
                <li>
                  <span className="emsp">职位</span>
                  <Input
                    value={this.props.ema.userdx.posi}
                    placeholder="职位"
                    className="emds10"
                    onChange={(e)=>{this.setState({zw:e.target.value});this.props.ema.userdx.posi=e.target.value;}}
                  />
                  <i className="emcolor">*</i>
                </li>
                <li>
                  <span className="emsp">手机</span>
                  <p>{this.props.ema.userdx.mobi}</p>
                </li>
                <li>
                  <span className="emsp">电话</span>
                  <Input
                    value={this.props.ema.userdx.phon}
                    placeholder="电话"
                    className="emds10"
                    onChange={(e)=>{this.setState({dh:e.target.value});this.props.ema.userdx.phon=e.target.value;}}
                  />
                </li>
                <li>
                  <span className="emsp">传真</span>
                  <Input
                    value={this.props.ema.userdx.fax}
                    placeholder="传真"
                    className="emds10"
                    onChange={(e)=>{this.setState({sj:e.target.value});this.props.ema.userdx.fax=e.target.value;}}
                  />
                </li>
                <li>
                  <span className="emsp">邮箱</span>
                  <Input
                    value={this.props.ema.userdx.mail}
                    placeholder="邮箱"
                    className="emds10"
                    onChange={(e)=>{this.setState({yx:e.target.value});this.props.ema.userdx.mail=e.target.value;}}
                  />
                </li>
              </ul>
            </div>
            <div className="emds8">
              <span className="emds9">地址</span>
              <p>{this.props.ema.userdx.addr}</p>
            </div>
            <div className="emds5">
              <span className="emsp9">权限</span>
              <ul>
                {
                  this.state.qxyj?
                    <li className="emds14" onClick={this.ygyj}>
                      发布运价优势
                      <img className="emds15" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="emds13" onClick={this.ygyj}>
                      发布运价优势
                    </li>
                }
                {
                  this.state.qxfw?
                    <li className="emds14" onClick={this.ygfw}>
                      发布服务优势
                      <img className="emds15" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="emds13" onClick={this.ygfw}>
                      发布服务优势
                    </li>
                }
                {
                  this.state.qxgys?
                    <li className="emds14" onClick={this.yggys}>
                      录入供应商
                      <img className="emds15" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="emds13" onClick={this.yggys}>
                      录入供应商
                    </li>
                }
                {
                  this.state.wt?
                    <li className="emds14" onClick={this.ygwt}>
                      委托
                      <img className="emds15" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="emds13" onClick={this.ygwt}>
                      委托
                    </li>
                }
                {
                  this.state.sk?
                    <li className="emds14" onClick={this.ygsk}>
                      收款
                      <img className="emds15" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="emds13" onClick={this.ygsk}>
                      收款
                    </li>
                }
                {
                  this.state.fk?
                    <li className="emds14" onClick={this.ygfk}>
                      付款
                      <img className="emds15" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="emds13" onClick={this.ygfk}>
                      付款
                    </li>
                }
              </ul>
              <img className="emds12" src={require('../../src/image/ygqx.png')} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}