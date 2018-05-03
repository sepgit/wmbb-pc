/**
 * Created by Zing on 2016/8/15.
 */
import React,{Component} from 'react';
import { Input } from 'antd';

export default class Saddaccr extends Component {
  constructor(props) {
    super(props);
    this.handyhar=this.handyhar.bind(this);
    this.handhover=this.handhover.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      compAlia:''
    }
  }
  handhover(a){
    let userName=this.state.userName;
    let token=this.state.token;
    let userAcco=a.target.getAttribute('name');
    this.props.actions.getlianxir(userName,token,userAcco);//获取联系人
  }
  handyhar(a){
    let userAcco=a.target.getAttribute('name');
    let xm=this.props.rsup.lianuser.name;
    let gs=this.props.rsup.lianuser.compAlia;
    let hy=this.props.rsup.lianuser.induName;
    let sj=this.props.rsup.lianuser.mobi;
    let yh=this.props.rsup.lianuser.user;
    let vipimg=this.props.rsup.lianuser.userVip;
    //直接赋值
    this.props.handarc(userAcco,xm,gs,hy,sj,yh,vipimg);
    this.props.handsaddc();
  }
  render() {
    return (
      <div className="saddcompr">
        <div className="saddcompr1">
          <a className="closesaddr" href='javascript:void(0);' onClick={this.props.handrc}>X</a>
        </div>
        <div className="saddcompr2">
          <span>{this.props.compA}</span>
        </div>
        <div className="saddcompr3">
          <ul>
            {
              this.props.rsup.userlb.map((item, index) =>
                <li className="saddcomprc" key={index}>
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
                  <span className="saddcompd">{item.name}</span>
                  <span className="saddcompe" onMouseOver={this.handhover} onClick={this.handyhar} name={item.userAcco}>{item.userAcco}</span>
                </li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}