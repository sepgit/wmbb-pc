/**
 * Created by Zing on 2016/11/24.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Sjr from './sjr';
import Csr from './csr';
import {Checkbox,Input,DatePicker,Radio,Select,message} from 'antd';
let timeout,timeoutm;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const OptGroup = Select.OptGroup;

export default class NewRORO extends Component {
  constructor(props) {
    super(props);
    this.handlesend=this.handlesend.bind(this);
    this.handlerest=this.handlerest.bind(this);
    this.handleclose=this.handleclose.bind(this);
    this.handfilts=this.handfilts.bind(this);
    this.handsjrc=this.handsjrc.bind(this);
    this.handcsrc=this.handcsrc.bind(this);
    this.hsjr=this.hsjr.bind(this);
    this.hsjrc=this.hsjrc.bind(this);
    this.hsjrq=this.hsjrq.bind(this);
    this.hcsr=this.hcsr.bind(this);
    this.hcsrc=this.hcsrc.bind(this);
    this.hcsrq=this.hcsrq.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handcm=this.handcm.bind(this);
    this.handcms=this.handcms.bind(this);
    let matchs=false;
    this.props.text.comps.matcEnqu==1?matchs=true:matchs=false;
    let admiAcco='';
    let comp=sessionStorage.getItem("SESSIONCOMP");
    if(comp!=0) {
      admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
    }
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:comp,
      bgport:undefined,
      edport:undefined,
      sendTo:[],
      ccto:[],
      mngr:undefined,
      match:matchs,
      compDate:moment().add(1,'d').format('YYYY-MM-DD'),
      tranship:3,
      item:0,
      leng:'',
      widt:'',
      high:'',
      itemName:'',
      expiDate:moment().add(5,'d').format('YYYY-MM-DD'),
      enquMemo:'',
      userid:sessionStorage.getItem("SESSIONUSER"),
      admiAcco:admiAcco,
      wate:'',
      isjs:false,
      icss:false,
      qydn:'',
      mddn:''
    }
  }
  handcn(v){
    this.setState({
      qydn:v,
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.props.sclss;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getqydkain(userName,token,serv,v);
      }
    }, 300);
  }
  handcns(v,o){
    let bgport=o.props.date;
    this.setState({ bgport:bgport, sendTo:[] });
    this.props.actions.getsendto(this.state.userName,this.state.token,this.props.sclss,bgport,this.state.edport);//获取收件人(对应服务供应商)
  }
  handcm(v){
    this.setState({
      mddn:v,
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.props.sclss;
    if (timeoutm) {
      clearTimeout(timeoutm);
      timeoutm = null;
    }
    timeoutm = setTimeout(() => {
      if(v){
        this.props.actions.getmddkain(userName,token,serv,v);
      }
    }, 300);
  }
  handcms(v,o){
    let edport=o.props.date;
    this.setState({
      edport:edport,
      sendTo:[]
    });
    this.props.actions.getsendto(this.state.userName,this.state.token,this.props.sclss,this.state.bgport,edport);//获取收件人(对应服务供应商)
  }
  handsjrc(){
    this.setState({
      sendTo:[]
    })
  }
  handcsrc(){
    this.setState({
      ccto:[]
    })
  }
  hsjr(){
    this.setState({
      isjs:true
    })
  }
  hsjrc(){
    this.setState({
      isjs:false
    })
  }
  hsjrq(v){
    this.setState({
      sendTo:v
    });
  }
  hcsr(){
    this.setState({
      icss:true
    })
  }
  hcsrc(){
    this.setState({
      icss:false
    })
  }
  hcsrq(v){
    this.setState({
      ccto:v
    });
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
  handlesend(){
    let userid=this.state.userid;
    let userName =this.state.userName;
    let token = this.state.token;
    let serv = this.props.sclss;
    let depaPort = this.state.bgport==undefined?'':this.state.bgport;
    let destPort = this.state.edport==undefined?'':this.state.edport;
    let sendTo = "["+this.state.sendTo+"]";
    let fg='',admininfo='';
    if(this.state.comp>0){
      fg=this.state.ccto==''?'':this.props.text.priv.admi!=0?'':',';
      admininfo=this.props.text.priv.admi!=0?'':this.props.getnewlist.adminlinfo;
    }
    let ccto = "["+this.state.ccto+fg+admininfo+"]";
    let mngr = this.state.mngr==undefined?'':this.state.mngr;
    let match = this.state.match?1:0;
    let compDate = moment(this.state.compDate).format('YYYY-MM-DD');

    let tranship = this.state.tranship;
    let item = this.state.item;
    let leng = this.state.leng;
    let widt = this.state.widt;
    let high = this.state.high;
    let itemName = this.state.itemName;
    let expiDate = moment(this.state.expiDate).format('YYYY-MM-DD');
    let enquMemo = this.state.enquMemo;
    let wate = this.state.wate;
    //获取推送列表
    if(this.props.servType==1){
      this.props.actions.gettspuys(userName,token,carrs,depaPort,destPort,serv);
    }else if(this.props.servType==3){
      this.props.actions.gettstzx(userName,token,depaPort,destPort,serv);
    }
    //发送
    if(depaPort==''||destPort==''||leng==''||widt==''||high==''||wate==''){
      message.error('请填写完整在提交！')
    }else{
      this.props.actions.getxaddroro(userid,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,tranship,item,leng,widt,high,itemName,expiDate,enquMemo,wate);
      this.props.showdate(this.props.getnewlist.isshow,0);
    }
  }
  handleclose() {
    this.props.showdate(false,0);
  }
  handlerest(){
    let matchs=false;
    this.props.text.comps.matcEnqu==1?matchs=true:matchs=false;
    this.setState({
      bgport:undefined,
      edport:undefined,
      sendTo:[],
      ccto:[],
      mngr:undefined,
      match:matchs,
      compDate:moment().add(1,'d').format('YYYY-MM-DD'),
      tranship:3,
      item:0,
      leng:'',
      widt:'',
      high:'',
      itemName:'',
      expiDate:moment().add(5,'d').format('YYYY-MM-DD'),
      enquMemo:'',
      wate:'',
      qydn:'',
      mddn:''
    });
  }
  render() {
    return (
      <div className="xnewfcl">
        <div className="xnew1">
          <a className="xclo" href='javascript:void(0);' onClick={this.handleclose}>X</a>
          <div className="xnew2">
            <div className="xnew3">
              <h4>新增询盘-RORO</h4>
              <ul>
                <li><a href='javascript:void(0);' onClick={this.handlesend}>发送</a></li>
                <li><a href='javascript:void(0);' onClick={this.handlerest}>重置</a></li>
              </ul>
            </div>
            <div className="xnew4">
              <ul>
                <li className="xnew15">
                  <div className="xnew5">
                    <span className="xspan5">起运地</span>
                    <Select combobox
                            value={this.state.qydn}
                            style={{ width: 180 }}
                            className="xseachop"
                            notFoundContent=""
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            placeholder="请输入起运地并选择"
                            onChange={this.handcn}
                            onSelect={this.handcns}
                    >
                      <OptGroup key='0' label="所有">
                        {
                          this.props.getdetil.qydkaxp.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                        }
                      </OptGroup>
                      <OptGroup key='1' label="最近">
                        {
                          this.props.getdetil.portszj.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                        }
                      </OptGroup>
                    </Select>
                    <i className="xicolor">*</i>
                  </div>
                  <div className="xnew6">
                    <span className="xspan5">目的地</span>
                    <Select combobox
                            value={this.state.mddn}
                            style={{ width: 180 }}
                            className="xseachop"
                            notFoundContent=""
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            placeholder="请输入目的地并选择"
                            onChange={this.handcm}
                            onSelect={this.handcms}
                    >
                      <OptGroup key='0' label="所有">
                        {
                          this.props.getdetil.mddkaxp.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                        }
                      </OptGroup>
                      <OptGroup key='1' label="最近">
                        {
                          this.props.getdetil.portszjm.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                        }
                      </OptGroup>
                    </Select>
                    <i className="xicolor">*</i>
                  </div>
                </li>
                <li className="xnew15">
                  <span className="xspan5">收件人</span>
                  <div className="xnew16">
                    <a className="xpsjr" href="javascript:void(0);" onClick={this.hsjr}>
                      {this.state.sendTo.length==0?'填写收件人':'已填写'}
                    </a>
                    <span>收件人为已录入的供应商，可请公司有权限的人录入.</span>
                  </div>
                </li>
                {
                  this.state.comp!=0?
                    <li className="xnew15">
                      <span className="xspan5">抄送</span>
                      <div className="xnew16">
                        <a className="xpsjr" href="javascript:void(0);" onClick={this.hcsr}>
                          {this.state.ccto.length==0?'填写抄送人':'已填写'}
                        </a>
                        <span>请选择公司同事抄送,可多选.</span>
                      </div>
                    </li>:undefined
                }
                <li className="xnew15">
                  {
                    this.state.comp != 0 ?
                      <div className="xnew7">
                        <span className="xspan5">委托</span>
                        <Select showSearch
                                value={this.state.mngr}
                                className="xaddmngr"
                                style={{ width: 150}}
                                optionFilterProp="children"
                                notFoundContent="无法找到"
                                placeholder="请选择委托的人"
                                onChange={(v)=>{return this.setState({mngr:v})}}
                        >
                          {
                            this.props.getnewlist.wtuo.map((item, index)=> {
                              return <Option key={item.user}>{item.name}</Option>
                            })
                          }
                        </Select>
                        {
                          this.props.text.comps.matcEnqu == 1 ?
                            <span className="xspan5">平台供应商</span> : undefined
                        }
                        {
                          this.props.text.comps.matcEnqu == 1 ?
                            <Checkbox
                              value={this.state.match}
                              checked={this.state.match}
                              onChange={(e)=>{return this.setState({match:e.target.checked})}}
                            >
                            </Checkbox> : undefined
                        }
                      </div>:undefined
                  }
                  <div className="xnew8">
                    <span className="xspan5">完货日期</span>
                    <div>
                      <DatePicker
                        value={this.state.compDate}
                        format="yyyy-MM-dd"
                        placeholder="完货日期"
                        style={{ width: 125,marginLeft:5 }}
                        onChange={(v)=>{return this.setState({compDate:v})}}
                      />
                    </div>
                  </div>
                </li>
                <li className="xnew15">
                  <span className="xspan5">运输要求</span>
                  <div className="xnew9">
                    <RadioGroup
                      value={this.state.tranship}
                      defaultValue={3}
                      onChange={(e)=>{return this.setState({tranship:e.target.value})}}
                    >
                      <Radio key="a" value={3}>不限</Radio>
                      <Radio key="b" value={1}>直达</Radio>
                      <Radio key="c" value={2}>转运</Radio>
                    </RadioGroup>
                  </div>
                </li>
                <li className="xnew15">
                  <span className="xspan5">运输条款</span>
                  <div className="xnew9">
                    <RadioGroup
                      value={this.state.item}
                      defaultValue={0}
                      onChange={(e)=>{return this.setState({item:e.target.value})}}
                    >
                      <Radio key="a" value={0}>FLT</Radio>
                      <Radio key="b" value={1}>FILO</Radio>
                      <Radio key="c" value={2}>FIO</Radio>
                    </RadioGroup>
                  </div>
                </li>
                <li className="xnew15">
                  <span className="xspan5">最长</span>
                  <div className="xnew11">
                    <Input
                      value={this.state.leng}
                      placeholder="最长"
                      style={{width:115}}
                      onChange={(e)=>{return this.setState({leng:e.target.value})}}
                    />m
                  </div>
                  <div className="xnewxing">*</div>
                  <div className="xnew12">
                    <span>最宽</span>
                    <Input
                      value={this.state.widt}
                      placeholder="最宽"
                      style={{width:115}}
                      className="xmidls"
                      onChange={(e)=>{return this.setState({widt:e.target.value})}}
                    />m
                  </div>
                  <div className="xnewxing">*</div>
                  <div className="xnew11">
                    <span>最高</span>
                    <Input
                      value={this.state.high}
                      placeholder="最高"
                      style={{width:95}}
                      className="xmidls"
                      onChange={(e)=>{return this.setState({high:e.target.value})}}
                    />m
                  </div>
                  <div className="xnewxing">*</div>
                </li>
                <li className="xnew15">
                  <span className="xspan5">品名</span>
                  <div className="xnew11">
                    <Input
                      value={this.state.itemName}
                      placeholder="品名"
                      style={{width:115}}
                      onChange={(e)=>{return this.setState({itemName:e.target.value})}}
                    />
                  </div>
                  <div className="xnew12">
                    <span>重量</span>
                    <Input
                      value={this.state.wate}
                      placeholder="重量"
                      style={{width:115}}
                      className="xmidls"
                      onChange={(e)=>{return this.setState({wate:e.target.value})}}
                    />T
                  </div>
                  <div className="xnewxing">*</div>
                </li>
                <li className="xnew15">
                  <span className="xspan5">询盘有效期</span>
                  <div className="xnew13">
                    <DatePicker
                      value={this.state.expiDate}
                      format="yyyy-MM-dd"
                      placeholder="询盘有效期"
                      style={{ width: 140 }}
                      onChange={(v)=>{return this.setState({expiDate:v})}}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="xnew14">
              <span className="xspan5">更多要求</span>
              <textarea
                value={this.state.enquMemo}
                maxLength="155"
                placeholder="(字数上限100)"
                onChange={(e)=>{return this.setState({enquMemo:e.target.value})}}
              ></textarea>
            </div>
          </div>
          {
            this.state.isjs?
              <Sjr actions={this.props.actions}
                   getdetil={this.props.getdetil}
                   getnewlist={this.props.getnewlist}
                   hsjrc={this.hsjrc}
                   hsjrq={this.hsjrq}
                   sendTo={this.state.sendTo}
                   handsjrc={this.handsjrc}
              />
              :undefined
          }
          {
            this.state.icss?
              <Csr actions={this.props.actions}
                   getdetil={this.props.getdetil}
                   getnewlist={this.props.getnewlist}
                   hcsrc={this.hcsrc}
                   hcsrq={this.hcsrq}
                   admiAcco={this.state.admiAcco}
                   ccto={this.state.ccto}
                   handcsrc={this.handcsrc}
              />
              :undefined
          }
        </div>
      </div>
    );
  }
}