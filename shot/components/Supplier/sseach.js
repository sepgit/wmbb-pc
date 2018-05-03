/**
 * Created by Zing on 2016/8/15.
 */
import React,{Component} from 'react';
import { Select,Input } from 'antd';
import Footinfo from './../login/footinfo';
import Suplists from './suplist';
const Option = Select.Option;
let timeout;

export default class Sseach extends Component {
  constructor(props) {
    super(props);
    this.handseach=this.handseach.bind(this);
    this.handrest=this.handrest.bind(this);
    this.changefw=this.changefw.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      serv:'',
      userAcco:'',
      mobi:'',
      kan:'',
      qydn:''
    }
  }
  handcn(v){
    this.setState({
      qydn:v
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.serv;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getkansup(userName,token,serv,v);
      }
    }, 300);
  }
  handcns(v,o){
    let kan=o.props.date;
    this.setState({ kan:kan });
  }
  changefw(v){
    this.setState({
      serv:v,
      servOpti:''
    });
    this.props.actions.getgysjtser(this.state.userName,this.state.token,v);//具体服务
  }
  componentDidMount(){
    this.props.actions.getgysser(this.state.userName,this.state.token);//服务
  }
  handseach(){
    let userAcco=this.state.userAcco;
    let mobi=this.state.mobi;
    let serv=this.state.serv;
    let depaPort=this.state.kan;
    this.props.actions.getgyslist(this.state.userName,this.state.token,1,userAcco,mobi,serv,depaPort);//获取搜索数据
    this.refs.gyslist.setState({
      Hes:0,
      page:1,
      hhs:[]
    });
    this.refs.gyslist.handcbc();
  }
  handrest(){
    this.setState({
      serv:'',
      kan:'',
      userAcco:'',
      mobi:'',
      qydn:''
    });
  }
  render() {
    let Fstate=Array.of(
      this.state.userAcco,
      this.state.mobi,
      this.state.serv,
      this.state.kan
    );
    return (
      <div className="supn">
        <div className="supn1">
          <ul>
            <li>
              <h5>服务类型</h5>
              <Select showSearch
                      value={this.state.serv}
                      className="supinps"
                      style={{ width: 180 }}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={this.changefw}
              >
                {
                  this.props.rsup.gysser.map(s => <Option key={s.serv}>{s.servName}</Option>)
                }
              </Select>
            </li>
            <li>
              <h5>口岸</h5>
              <Select combobox
                      value={this.state.qydn}
                      style={{ width: 180 }}
                      className="supinps"
                      notFoundContent=""
                      defaultActiveFirstOption={false}
                      showArrow={false}
                      filterOption={false}
                      placeholder="请输入口岸并选择"
                      onChange={this.handcn}
                      onSelect={this.handcns}
              >
                {
                  this.props.rsup.kansup.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                }
              </Select>
            </li>
            <li>
              <h5>用户名</h5>
              <Input
                value={this.state.userAcco}
                placeholder="用户名"
                className="supinps"
                style={{width:180}}
                onChange={(e)=>{return this.setState({userAcco:e.target.value})}}
              />
            </li>
            <li>
              <h5>手机号</h5>
              <Input
                value={this.state.mobi}
                placeholder="手机号"
                className="supinps"
                style={{width:180}}
                onChange={(e)=>{return this.setState({mobi:e.target.value})}}
              />
            </li>
          </ul>
        </div>
        <div className="supn2">
          <ul>
            <li>
              <a href='javascript:void(0);' className="supbuts" onClick={this.handseach}>搜索</a>
              <a href='javascript:void(0);' className="supbuts" onClick={this.handrest}>重置</a>
              <a href='javascript:void(0);' className="supbuts" onClick={this.handseach}>刷新</a>
            </li>
          </ul>
        </div>
        <Suplists ref="gyslist"
                  actions={this.props.actions}
                  rsup={this.props.rsup}
                  Fstate={Fstate}
                  shows={this.props.shows}
        />
        <Footinfo />
      </div>
    );
  }
}