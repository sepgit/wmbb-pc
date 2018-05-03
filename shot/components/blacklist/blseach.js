/**
 * Created by Zing on 2016/1/11.
 */
import React,{Component} from 'react';
import { message,Select,Input } from 'antd';
import Bllist from './bllist';
import Footinfo from './../login/footinfo';
const Option = Select.Option;
const OptGroup = Select.OptGroup;

export default class Blseach extends Component {
  constructor(props) {
    super(props);
    this.handseach=this.handseach.bind(this);
    this.handrest=this.handrest.bind(this);
    this.state={
      bhh:'',
      zh:'',
      gsjc:'',
      sjh:'',
      lx:'',
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handseach(){
    let userName = this.state.userName;
    let token = this.state.token;
    let guar=this.state.bhh;
    let userAcco=this.state.zh;
    let compAlia=this.state.gsjc;
    let mobi=this.state.sjh;
    let listType=this.state.lx;
    this.props.actions.getblls(userName,token,1,guar,userAcco,compAlia,mobi,listType);//获取搜索数据
    this.refs.bllist.setState({
      Hes:0,
      page:1,
      hhs:[]
    });

  }
  handrest(){
    this.setState({
      bhh:'',
      zh:'',
      gsjc:'',
      sjh:'',
      lx:''
    });
  }
  render() {
    let Fstate=Array.of(
      this.state.bhh,
      this.state.zh,
      this.state.gsjc,
      this.state.sjh,
      this.state.lx
    );
    return (
      <div className="black1">
        <ul className="black2">
          <li>保函号
            <Input
              value={this.state.bhh}
              placeholder="保函号"
              style={{width:180,marginLeft:5}}
              onChange={(e)=>{return this.setState({bhh:e.target.value})}}
            />
          </li>
          <li>账号
            <Input
              value={this.state.zh}
              placeholder="账号"
              style={{width:180,marginLeft:5}}
              onChange={(e)=>{return this.setState({zh:e.target.value})}}
            />
          </li>
          <li>公司简称
            <Input
              value={this.state.gsjc}
              placeholder="公司简称"
              style={{width:180,marginLeft:5}}
              onChange={(e)=>{return this.setState({gsjc:e.target.value})}}
            />
          </li>
        </ul>
        <ul className="black3">
          <li>手机号
            <Input
              value={this.state.sjh}
              placeholder="手机号"
              style={{width:180,marginLeft:5}}
              onChange={(e)=>{return this.setState({sjh:e.target.value})}}
            />
          </li>
          <li>类型
            <Select showSearch
                    value={this.state.lx}
                    style={{ width: 180, marginLeft:5}}
                    optionFilterProp="children"
                    notFoundContent="无法找到"
                    onChange={(v)=>{return this.setState({lx:v})}}
            >
              <Option value="1">服务未履约</Option>
              <Option value="2">付款未履约</Option>
            </Select>
          </li>
          <li>
            <a href='javascript:void(0);' className="replyas" onClick={this.handseach}>搜索</a>
            <a href='javascript:void(0);' className="replyas" onClick={this.handrest}>重置</a>
          </li>
        </ul>
        <Bllist ref="bllist"
                actions={this.props.actions}
                blck={this.props.blck}
                Fstate={Fstate}/>
        <Footinfo />
      </div>
    );
  }
}