/**
 * Created by Zing on 2016/8/15.
 */
import React,{Component} from 'react';
import { Modal,message } from 'antd';
const confirm = Modal.confirm;

export default class Panaccr extends Component {
  constructor(props) {
    super(props);
    this.handyhar=this.handyhar.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      compAlia:''
    }
  }
  handyhar(a){
    let userName=this.state.userName;
    let token=this.state.token;
    let userAcco=a.target.getAttribute('name');
    //直接赋值
    this.props.actions.getlianxir(userName,token,userAcco);//获取联系人
    this.props.actions.getpayr(userName,token,userAcco);//获取付款人和获取付款人信用余额
    let This=this;
    confirm({
      title: '您是否确认要选择该账号',
      content: '选择该账号完成,如需要可修改',
      onOk() {
        This.props.handarc(userAcco);
        This.props.handssc();
      },
      onCancel() {}
    });
  }
  render() {
    return (
      <div className="saddcompr">
        <div className="saddcompr1">
          <a className="closesaddr" href='javascript:void(0);' onClick={this.props.handssc}>X</a>
        </div>
        <div className="saddcompr2">
          <span>{this.props.compA}</span>
        </div>
        <div className="saddcompr3">
          <ul>
            {
              this.props.pays.userlbp.map((item, index) =>
                <li className="saddcomprc" key={index}>
                  <span className="saddcompd">{item.name}</span>
                  <span className="saddcompe" onClick={this.handyhar} name={item.userAcco}>{item.userAcco}</span>
                </li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}