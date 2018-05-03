/**
 * Created by Zing on 2016/12/19.
 */
import React,{Component} from 'react';
import {Select,message} from 'antd';
const Option = Select.Option;

export default class Addxkan extends Component {
  constructor(props) {
    super(props);
    this.handfilts=this.handfilts.bind(this);
    this.handc=this.handc.bind(this);
    this.handqr=this.handqr.bind(this);
    this.handxz=this.handxz.bind(this);
    this.handce=this.handce.bind(this);
    this.handyxsy=this.handyxsy.bind(this);
    this.handcz=this.handcz.bind(this);
    this.handqx=this.handqx.bind(this);
    this.state={
      mdd1:this.props.mdd1
    }
  }
  handqx(v){
    let vlue = v.target.getAttribute('value');
    //清空数组并且全选
    let aryqxm=[];
    let strqxm="";
    for(let z=0;z<this.props.ysrdu.hotpol.length; z++){
      strqxm='{"port":"'+this.props.ysrdu.hotpol[z].port+'","portName":"'+this.props.ysrdu.hotpol[z].portName+'/'+this.props.ysrdu.hotpol[z].chsName+'"}';
      aryqxm.push(strqxm);
    }
    this.setState({
      mdd1: aryqxm
    });
  }
  handcz(){
    this.props.mddsyc();
    this.setState({
      mdd1:[]
    })
  }
  handce(v){
    let m=this.state.mdd1;
    //判断是否存在
    let cs=false;
    for(var i=0;i<m.length; i++){
      if (JSON.parse(m[i]).port == JSON.parse(v).port){
        cs=true;
      }
    }
    if(cs){
      message.error("该口岸已选择！");
    }else{
      m.push(v);
    }
    this.setState({
      mdd1:m
    });
  }
  handyxsy(v){
    let val=v.target.getAttribute('value');
    let st=this.state.mdd1;
    for(var i=0;i<st.length; i++){
      if (JSON.parse(st[i]).port == val){
        st.splice(i,1);
      }
    }
    this.setState({
      mdd1:st
    });
  }
  handxz(v){
    let vlue = v.target.getAttribute('value');
    let htm = v.target.getAttribute('content');
    let a='{"port":"'+vlue+'","portName":"'+htm+'"}';
    let m=this.state.mdd1;
    //判断是否存在
    let cs=false;
    for(var i=0;i<m.length; i++){
      if (JSON.parse(m[i]).port == JSON.parse(a).port){
        cs=true;
      }
    }
    if(cs){
      message.error("该口岸已选择！");
    }else{
      m.push(a);
    }
    this.setState({
      mdd1:m
    })
  }
  handqr(){
    this.props.handmdddxqd(this.state.mdd1);
    this.props.handmdddxc();
  }
  handc(){
    this.props.handmdddxqd(this.state.mdd1);
    this.props.handmdddxc();
  }
  handfilts(inputValue,option){
    if(typeof(option.props.children)=='object'){
      let str='';
      for(let v of option.props.children) {
        str+=v;
      }
      if(str.indexOf(inputValue.toLocaleUpperCase())<0){
        return false;
      }else{
        return true;
      }
    }else{
      if(option.props.children.indexOf(inputValue.toLocaleUpperCase())<0){
        return false;
      }else{
        return true;
      }
    }
  }
  render() {
    return (
      <div className="addxkan">
        <div className="addxkan1">
          <span>目的地多选-{this.props.hxinfom}</span>
          <ul>
            <li><a className="addxkan2" href='javascript:void(0);' onClick={this.handqr}>确认</a></li>
            <li><a className="addxkan3" href='javascript:void(0);' onClick={this.handc}>X</a></li>
          </ul>
        </div>
        <div className="addxkan4">
          <span>最近：</span>
          <ul>
            {
              this.props.ysrdu.hxportszjm.map(s =>
                <li key={s.port} title={s.portName+'/'+s.chsName}>
                  <a className="addxkan10" value={s.port} content={s.portName+'/'+s.chsName} href='javascript:void(0);' onClick={this.handxz}>
                    {s.portName}/{s.chsName}
                  </a>
                </li>
              )
            }
          </ul>
        </div>
        <div className="addxkan5">
          <span>热门：</span>
          <ul>
            <li title="全选">
              <a className="addxkan11" value="全选" content="全选" href='javascript:void(0);' onClick={this.handqx}>
                全选
              </a>
            </li>
            {
              this.props.ysrdu.hotpol.map(s =>
                <li key={s.port} title={s.portName+'/'+s.chsName}>
                  <a className="addxkan8" value={s.port} content={s.portName+'/'+s.chsName} href='javascript:void(0);' onClick={this.handxz}>
                    {s.portName}/{s.chsName}
                  </a>
                </li>
              )
            }
          </ul>
        </div>
        <div className="addxkan6">
          <h5>所有：</h5>
          <Select showSearch
                  className="Assjrs"
                  filterOption={this.handfilts}
                  notFoundContent="请先选择航线或未找到"
                  placeholder="口岸"
                  style={{ width: 300 }}
                  onChange={this.handce}
          >
            {
              this.props.ysrdu.ysportsm.map(s => {
                  let suoyou = '{'+ '"port":"'+s.port+'",'+ '"portName":"'+s.portName+'/'+s.chsName+'"}';
                  return <Option key={suoyou}>{s.portName}/{s.chsName}</Option>
                }
              )
            }
          </Select>
          {/*<div className="sjrqrcz">
            <a className="sjrqrcz1" href='javascript:void(0);'>√</a>
            <a className="sjrqrcz2" href='javascript:void(0);' onClick={this.handcz}>×</a>
          </div>*/}
        </div>
        <div className="addxkan7">
          <span>已选：</span>
          <ul>
            <li title="全不选">
              <a className="addxkan12" value="全不选" content="全不选" href='javascript:void(0);' onClick={this.handcz}>
                全不选
              </a>
            </li>
            {
              this.state.mdd1.map((s,index) =>
                <li key={JSON.parse(s).port} title={JSON.parse(s).portName}>
                  <span>{JSON.parse(s).portName}</span>
                  <a value={JSON.parse(s).port} className="addxkan9" href='javascript:void(0);' onClick={this.handyxsy}>x</a>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}