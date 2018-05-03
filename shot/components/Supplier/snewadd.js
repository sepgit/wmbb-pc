/**
 * Created by Zing on 2016/8/15.
 */
import React,{Component} from 'react';
import {Select,Input,message} from 'antd';
import Saddcomp from "./saddcomp";
const Option = Select.Option;
let timeout;

export default class Snewadd extends Component {
  constructor(props) {
    super(props);
    this.handzf=this.handzf.bind(this);
    this.handch=this.handch.bind(this);
    this.changefw=this.changefw.bind(this);
    this.handc=this.handc.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handsadd=this.handsadd.bind(this);
    this.handsaddc=this.handsaddc.bind(this);
    this.handarc=this.handarc.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userAcco:'',
      serv:'',
      servOpti:'',
      port:undefined,
      labe:'',
      qydn:'',
      issadd:false,
      xm:'',
      gs:'',
      hy:'',
      sj:'',
      yh:0,
      vipimg:0
    }
  }
  handarc(v,xm,gs,hy,sj,yh,vipimg){
    this.setState({
      userAcco:v,
      xm:xm,
      gs:gs,
      hy:hy,
      sj:sj,
      yh:yh,
      vipimg:vipimg
    });
  }
  handsadd(){
    let userName = this.state.userName;
    let token = this.state.token;
    //获取最近供应商
    this.props.actions.getzjusr(userName,token);
    this.setState({
      issadd:true
    });
  }
  handsaddc(){
    this.setState({
      issadd:false
    });
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
        this.props.actions.getkansu(userName,token,serv,v);
      }
    }, 300);
  }
  handcns(v,o){
    let port=o.props.date;
    this.setState({ port:port });
  }
  handc(){
    this.props.handnewc(false);
  }
  componentDidMount(){
    this.props.actions.getgysser(this.state.userName,this.state.token);//服务
  }
  handch(){
    let userName=this.state.userName;
    let token=this.state.token;
    let serv=this.state.serv;
    let servOpti=this.state.servOpti;
    let port=this.state.port==undefined?'':this.state.port;
    let cont=this.refs.supp5.innerHTML;
    let labe=this.state.labe;
    if(this.state.userAcco==''){
      message.error("请先选择联系人账号!");
    }else{
      this.props.actions.postgysnew(userName,token,serv,servOpti,port,cont,labe);//新增供应商
      this.props.handnewc(this.props.rsup.isshow);
    }
  }
  handzf(){
    this.setState({
      userAcco:'',
      serv:'',
      servOpti:'',
      port:undefined,
      labe:'',
      qydn:'',
      xm:'',
      gs:'',
      hy:'',
      sj:'',
      yh:0,
      vipimg:0
    });
  }
  changefw(v){
    this.setState({
      serv:v,
      servOpti:''
    });
    this.props.actions.getgysjtser(this.state.userName,this.state.token,v);//具体服务
    this.props.actions.getgyshfka(this.state.userName,this.state.token,v);//口岸
  }
  render() {
    return (
      <div className="supadd">
        <div className="supadd1">
          <a className="close" href='javascript:void(0);' onClick={this.handc}>X</a>
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
                  <Input
                    value={this.state.userAcco}
                    placeholder="联系人账号"
                    className="supha"
                    style={{ width: 210 }}
                    onFocus={this.handsadd}
                  />
                </li>
                <li>
                  <span className="suph">姓名</span>
                  <p ref="supp1">
                    {
                      this.state.xm
                    }
                  </p>
                </li>
                <li>
                  <span className="suph">公司</span>
                  <p ref="supp2">
                    {
                      this.state.vipimg==1?<img src={require('../../src/image/vip.png')}/>:undefined
                    }
                    {
                      this.state.gs
                    }
                  </p>
                </li>
                <li>
                  <span className="suph">行业</span>
                  <p ref="supp3">
                    {
                      this.state.hy
                    }
                  </p>
                </li>
                <li>
                  <span className="suph">手机</span>
                  <p ref="supp4">
                    {
                      this.state.sj
                    }
                  </p>
                </li>
                <li style={{display:'none'}}>
                  <p ref="supp5">{this.state.yh}</p>
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
                      this.props.rsup.gysser.map(s => <Option key={s.serv}>{s.servName}</Option>)
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
                      this.props.rsup.kansu.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
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
          {
            this.state.issadd? <Saddcomp handsaddc={this.handsaddc}
                                         handarc={this.handarc}
                                         actions={this.props.actions}
                                         rsup={this.props.rsup}/>:undefined
          }
        </div>
      </div>
    );
  }
}