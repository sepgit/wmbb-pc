/**
 * Created by Zing on 2016/1/04.
 */
import React,{Component} from 'react';
import {Select,Input} from 'antd';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout;

export default class Addgysfw extends Component {
  constructor(props) {
    super(props);
    this.handzf=this.handzf.bind(this);
    this.handch=this.handch.bind(this);
    this.changefw=this.changefw.bind(this);
    this.handfilts=this.handfilts.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      serv:'',
      port:undefined,
      labe:'',
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
        this.props.actions.getkanzx(userName,token,serv,v);
      }
    }, 300);
  }
  handcns(v,o){
    let port=o.props.date;
    this.setState({ port:port });
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
  componentDidMount(){
    this.props.actions.getseraf(this.state.userName,this.state.token);//所有服务
  }
  handch(){
    let userName=this.state.userName;
    let token=this.state.token;
    let serv=this.state.serv;
    let port=this.state.port==undefined?'':this.state.port;
    let cont=this.props.userid;
    let labe=this.state.labe;
    this.props.actions.postxjgysf(userName,token,serv,port,cont,labe);//新增供应商
    this.props.handgysc();
  }
  handzf(){
    this.setState({
      serv:'',
      port:undefined,
      labe:'',
      qydn:''
    });
  }
  changefw(v){
    this.setState({
      serv:v
    });
    this.props.actions.getfwkanf(this.state.userName,this.state.token,v);//口岸
  }
  render() {
    return (
      <div className="supadd">
        <div className="supadd1">
          <a className="close" href='javascript:void(0);' onClick={this.props.handgysc}>X</a>
          <div className="supadd2">
            <div className="supadd3">
              <span>新增供应商</span>
              <ul>
                <li><a className="bntact" href='javascript:void(0);' onClick={this.handch}>确定</a></li>
                <li><a className="bntact" href='javascript:void(0);' onClick={this.handzf}>重置</a></li>
              </ul>
            </div>
            <div className="supadd4">
              <ul>
                <li>
                  <span className="suph">联系人账号</span>
                  <p>
                    {this.props.zxinfo.userdelfw.userAcco}
                  </p>
                </li>
                <li>
                  <span className="suph">姓名</span>
                  <p>
                    {this.props.zxinfo.userdelfw.name}
                  </p>
                </li>
                <li>
                  <span className="suph">公司</span>
                  <p>
                    {this.props.zxinfo.userdelfw.compAlia}
                  </p>
                </li>
                <li>
                  <span className="suph">行业</span>
                  <p>
                    {this.props.zxinfo.userdelfw.induName}
                  </p>
                </li>
                <li>
                  <span className="suph">手机</span>
                  <p>
                    {this.props.zxinfo.userdelfw.mobi}
                  </p>
                </li>
              </ul>
            </div>
            <div className="supadd20">
              <div className="supadd21">
                <div className="supadd23"></div>
              </div>
              <div className="supadd22">供应商归类</div>
              <div className="supadd21">
                <div className="supadd23"></div>
              </div>
            </div>
            <div className="supadd5">
              <div className="supadd24">
                <div className="supadd6">
                  <h5>服务类型</h5>
                  <Select showSearch
                          value={this.state.serv}
                          style={{ width: 120}}
                          optionFilterProp="children"
                          notFoundContent="无法找到"
                          placeholder="服务"
                          onChange={this.changefw}
                  >
                    {
                      this.props.zxinfo.xseraf.map(s => <Option key={s.serv}>{s.servName}</Option>)
                    }
                  </Select>
                </div>
                <div className="supadd7">
                  <h5>口岸</h5>
                  <Select combobox
                          value={this.state.qydn}
                          style={{ width: 200 }}
                          className="xseachop"
                          notFoundContent=""
                          defaultActiveFirstOption={false}
                          showArrow={false}
                          filterOption={false}
                          placeholder="请输入口岸并选择"
                          onChange={this.handcn}
                          onSelect={this.handcns}
                  >
                    {
                      this.props.zxinfo.fwkanf.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                    }
                  </Select>
                </div>
              </div>
              <div className="supadd25">
                您归类后，以后该供应商将在您（公司）询盘或者咨询时候，在收件人列表里自动出现，供您选择使用。
              </div>
            </div>
            <div className="supadd8">
              <span>标注</span>
              <textarea
                value={this.state.labe}
                maxLength="155"
                placeholder="建议标注该供应商的特点，如船公司、航线、口岸等更细化的信息，以便精确地进行询盘，咨询。"
                onChange={(e)=>{return this.setState({labe:e.target.value})}}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}