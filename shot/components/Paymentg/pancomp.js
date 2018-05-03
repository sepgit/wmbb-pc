/**
 * Created by Zing on 2016/8/15.
 */
import React,{Component} from 'react';
import Panaccr from "./panaccr";
import { Input,message } from 'antd';

export default class Pancomp extends Component {
  constructor(props) {
    super(props);
    this.handss=this.handss.bind(this);
    this.handr=this.handr.bind(this);
    this.handrc=this.handrc.bind(this);
    this.handgetlx=this.handgetlx.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      compAlia:'',
      compA:'',
      isr:false
    }
  }
  handgetlx(e){
    let userName=this.state.userName;
    let token=this.state.token;
    let userAcco=e.target.getAttribute('name');
    this.props.actions.getpayr(userName,token,userAcco);//获取付款人和获取付款人信用余额
  }
  handr(a){
    let userName=this.state.userName;
    let token=this.state.token;
    let comp=a.target.getAttribute('data');
    let userAcco=a.target.getAttribute('name');
    let compAlia=a.target.innerHTML;
    this.setState({
      isr:true,
      compA:compAlia
    });
    if(comp>0){
      //根据企业id获取用户
      this.props.actions.getuserlbp(userName,token,comp);
    }else{
      //直接赋值
      this.props.handarc(userAcco);
      this.props.handssc();
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
      message.error("请填写公司名称/账号！");
    }else{
      this.props.actions.getusermhp(userName,token,compAlia);
    }
  }
  render() {
    return (
      <div className="saddcompall">
        <div className="saddcomp">
          <div className="saddcomp1">
            <a className="closesadd" href='javascript:void(0);' onClick={this.props.handssc}>X</a>
          </div>
          <div className="saddcomp2">
            <Input
              value={this.state.compAlia}
              placeholder="请填写公司名称/账号/姓名"
              className="saddcompa"
              style={{ width: 210 }}
              onChange={(e)=>{return this.setState({compAlia:e.target.value})}}
            />
            <a href='javascript:void(0);' className="saddcompb" onClick={this.handss}>搜索</a>
          </div>
          <div className="saddcomp3">
            {
              this.state.compAlia!=''?
                <ul>
                  {
                    this.props.pays.usermhp.map((item, index) =>
                      <li className="saddcompc" key={index}>
                        <h5>{item.name}</h5>
                        <span onClick={this.handr} onMouseOver={this.handgetlx} data={item.comp} name={item.userAcco}>{item.compAlia}</span>
                      </li>)
                  }
                </ul>:
                <ul>
                  <li className="saddcompc">
                    <h4>最近联系人</h4>
                  </li>
                  {
                    this.props.pays.zjusrf.map((item, index) =>
                      <li className="saddcompc" key={index}>
                        <h5>{item.name}</h5>
                        <span onClick={this.handr} onMouseOver={this.handgetlx} data={0} name={item.userAcco}>{item.compAlia}</span>
                      </li>)
                  }
                </ul>
            }
          </div>
        </div>
        {
          this.state.isr?<Panaccr handrc={this.handrc}
                                  compA={this.state.compA}
                                  handssc={this.props.handssc}
                                  handarc={this.props.handarc}
                                  actions={this.props.actions}
                                  pays={this.props.pays}/>:undefined
        }
      </div>
    );
  }
}