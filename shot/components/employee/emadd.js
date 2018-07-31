/**
 * Created by Zing on 2016/8/25.
 */
import React,{Component} from 'react';
import {Input,message} from 'antd';

export default class Emadd extends Component {
  constructor(props) {
    super(props);
    this.handqr=this.handqr.bind(this);
    this.handc=this.handc.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      ygzh:'',
      xm:'',
      zw:'',
      sj:'',
      dh:'',
      cz:'',
      yx:'',
      dz:''
    }
  }
  handc(){
    this.props.handnewc(false);
  }
  handqr(){
    let userName=this.state.userName;
    let token=this.state.token;
    let userAcco=this.state.ygzh;
    let comp=this.state.comp;
    let name=this.state.xm;
    let posi=this.state.zw;
    let mobi=this.state.sj;
    let phon=this.state.dh;
    let fax=this.state.cz;
    let mail=this.state.yx;
    //let addr=this.state.dz;
    let addr=this.props.text.comps.addr;//默认公司地址
    console.log(comp);
    if(userAcco==''||name==''||posi==''){
      message.error("请填写完整再提交！");
    }else{
      this.props.actions.getemxj(userName,token,userAcco,comp,name,posi,mobi,phon,fax,mail,addr);
      this.props.handnewc(this.props.ema.isfs);
    }
  }
  render() {
    return (
      <div className="emad">
        <div className="emad1">
          <div className="emad2">
            <div className="emad3">
              <span>新增员工</span>
              <ul>
                <li><a className="emad5" href='javascript:void(0);' onClick={this.handqr}>确认</a></li>
                <li><a className="emad6" href='javascript:void(0);' onClick={this.handc}>关闭</a></li>
              </ul>
            </div>
            <div className="emad7">
              <span className="emad8">员工账号</span>
              <Input
                value={this.state.ygzh}
                placeholder="建议输入员工的公司邮箱或者常用邮箱"
                className="emad9"
                onChange={(e)=>{return this.setState({ygzh:e.target.value})}}
              />
              <i className="emcolor">*</i>
            </div>
            <div className="emad4">
              <ul>
                <li>
                  <span className="emad8">姓名</span>
                  <Input
                    value={this.state.xm}
                    placeholder="姓名"
                    className="emad10"
                    onChange={(e)=>{return this.setState({xm:e.target.value})}}
                  />
                  <i className="emcolor">*</i>
                </li>
                <li>
                  <span className="emad8">职位</span>
                  <Input
                    value={this.state.zw}
                    placeholder="职位"
                    className="emad10"
                    onChange={(e)=>{return this.setState({zw:e.target.value})}}
                  />
                  <i className="emcolor">*</i>
                </li>
                <li>
                  <span className="emad8">手机</span>
                  <Input
                    value={this.state.sj}
                    placeholder="手机"
                    className="emad10"
                    onChange={(e)=>{return this.setState({sj:e.target.value})}}
                  />
                </li>
                <li>
                  <span className="emad8">电话</span>
                  <Input
                    value={this.state.dh}
                    placeholder="电话"
                    className="emad10"
                    onChange={(e)=>{return this.setState({dh:e.target.value})}}
                  />
                </li>
                <li>
                  <span className="emad8">传真</span>
                  <Input
                    value={this.state.cz}
                    placeholder="传真"
                    className="emad10"
                    onChange={(e)=>{return this.setState({cz:e.target.value})}}
                  />
                </li>
                <li>
                  <span className="emad8">邮箱</span>
                  <Input
                    value={this.state.yx}
                    placeholder="邮箱"
                    className="emad10"
                    onChange={(e)=>{return this.setState({yx:e.target.value})}}
                  />
                </li>
                {
                  /*<li>
                   <span className="emsp">地址</span>
                   <Input
                   value={this.state.dz}
                   placeholder="地址"
                   className="emspinp"
                   style={{ width: 250 }}
                   onChange={(e)=>{return this.setState({dz:e.target.value})}}
                   />
                   </li>*/
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}