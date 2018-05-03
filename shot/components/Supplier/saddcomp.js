/**
 * Created by Zing on 2016/8/15.
 */
import React,{Component} from 'react';
import Saddaccr from "./saddaccr";
import { Input,message } from 'antd';

export default class Saddcomp extends Component {
  constructor(props) {
    super(props);
    this.handss=this.handss.bind(this);
    this.handr=this.handr.bind(this);
    this.handrc=this.handrc.bind(this);
    this.handhover=this.handhover.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      compAlia:'',
      compA:'',
      isr:false
    }
  }
  handhover(a){
    let userName=this.state.userName;
    let token=this.state.token;
    let comp=a.target.getAttribute('data');
    let userAcco=a.target.getAttribute('name');
    if(comp>0){
      //根据企业id获取用户
      this.props.actions.getuserlb(userName,token,comp);
    }else{
      //直接赋值
      this.props.actions.getlianxir(userName,token,userAcco);//获取联系人
    }
  }
  handr(a){
    let comp=a.target.getAttribute('data');
    let compAlia=a.target.innerHTML;
    let userAcco=a.target.getAttribute('name');
    let xm=this.props.rsup.lianuser.name;
    let gs=this.props.rsup.lianuser.compAlia;
    let hy=this.props.rsup.lianuser.induName;
    let sj=this.props.rsup.lianuser.mobi;
    let yh=this.props.rsup.lianuser.user;
    let vipimg=this.props.rsup.lianuser.userVip;
    if(comp>0){
      this.setState({
        isr:true,
        compA:compAlia
      });
    }else{
      //直接赋值
      this.props.handarc(userAcco,xm,gs,hy,sj,yh,vipimg);
      this.props.handsaddc();
    }
  }
  handrc(){
    this.setState({
      isr:false
    })
  }
  handss(){
    //获取企业数据
    let userName=this.state.userName;
    let token=this.state.token;
    let compAlia=this.state.compAlia;
    if(compAlia==''){
      message.error("请输入公司名称/账号");
    }else{
      this.props.actions.getusermh(userName,token,compAlia);
    }
  }
  render() {
    return (
      <div className="saddcompall">
        <div className="saddcomp">
          <div className="saddcomp1">
            <a className="closesadd" href='javascript:void(0);' onClick={this.props.handsaddc}>X</a>
          </div>
          <div className="saddcomp2">
            <Input
              value={this.state.compAlia}
              placeholder="请输入公司名称/账号/姓名"
              className="saddcompa"
              style={{ width: 300 }}
              onChange={(e)=>{return this.setState({compAlia:e.target.value})}}
            />
            <a href='javascript:void(0);' className="saddcompb" onClick={this.handss}>搜索</a>
          </div>
          <div className="saddcomp3">
            {
              this.state.compAlia!=''?
                <ul>
                  {
                    this.props.rsup.usermh.map((item, index) =>
                      <li className="saddcompc" key={index}>
                        <div className="saddcomp4">
                          {
                            item.userVip>0?
                            <img src={require('../../src/image/hyzs.png')}/>:undefined
                          }
                          {
                            item.comp>0?
                            <img src={require('../../src/image/gsyh.png')}/>:undefined
                          }
                        </div>
                        <h5>{item.name}</h5>
                        <span onClick={this.handr} onMouseOver={this.handhover} data={item.comp} name={item.userAcco}>{item.compAlia}</span>
                      </li>)
                  }
                </ul>:
                <ul>
                  <li className="saddcompc">
                    <h4>最近联系人</h4>
                  </li>
                  {
                    this.props.rsup.zjusr.map((item, index) =>
                      <li className="saddcompc" key={index}>
                        <div className="saddcomp4">
                          {
                            item.userVip>0?
                              <img src={require('../../src/image/hyzs.png')}/>:undefined
                          }
                          {
                            item.comp>0?
                              <img src={require('../../src/image/gsyh.png')}/>:undefined
                          }
                        </div>
                        <h5>{item.name}</h5>
                        <span onClick={this.handr} onMouseOver={this.handhover} data={0} name={item.userAcco}>{item.compAliaName}</span>
                      </li>)
                  }
                </ul>
            }
          </div>
        </div>
        {
          this.state.isr?<Saddaccr handrc={this.handrc}
                                   compA={this.state.compA}
                                   handsaddc={this.props.handsaddc}
                                   handarc={this.props.handarc}
                                   actions={this.props.actions}
                                   rsup={this.props.rsup}/>:undefined
        }
      </div>
    );
  }
}