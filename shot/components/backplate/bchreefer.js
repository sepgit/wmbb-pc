/**
 * Created by Zing on 2016/8/31.
 */
import React,{Component} from 'react';
import {Input,DatePicker,Select,message} from 'antd';
import moment from 'moment';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout;

export default class Bchreefer extends Component {
  constructor(props) {
    super(props);
    this.handfs=this.handfs.bind(this);
    this.handcz=this.handcz.bind(this);
    this.handleccto=this.handleccto.bind(this);
    this.handfilts=this.handfilts.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    let admiAcco='';
    let comp=sessionStorage.getItem("SESSIONCOMP");
    if(comp!=0) {
      admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
    }
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:comp,
      cs:[],
      bz20rf:'USD',
      jg20rf:'',
      bz40rf:'USD',
      jg40rf:'',
      yjyxq:null,
      cys:'',
      zzd:'',
      tt:'',
      cls:'截关日',
      etd:'预计开航时间',
      hpbz:'',
      userid:sessionStorage.getItem("SESSIONUSER"),
      admiAcco:admiAcco,
      zzdn:''
    }
  }
  handcn(v){
    this.setState({
      zzdn:v
    });
    let userName = this.state.userName;
    let token = this.state.token;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getzzdhp(userName,token,v);
      }
    }, 300);
  }
  handcns(v,o){
    let zzd=o.props.date;
    this.setState({ zzd:zzd });
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
  handleccto(){
    this.setState({
      cs:[]
    })
  }
  handfs(){
    let userid=this.state.userid;
    let userName=this.state.userName;
    let token=this.state.token;
    let repl=this.props.bck.repldx.repl;
    let carr=this.state.cys;
    let tranPort=this.state.zzd=='无'?'':this.state.zzd;
    let sailTime=this.state.etd=='预计开航时间'?'':this.state.etd;
    let closTime=this.state.cls==''?'截关日':this.state.cls;
    let sailDays=this.state.tt;
    let freiCurr=this.state.bz20rf;
    let GP20=this.props.bck.repldx.GP20;
    let GP40=this.props.bck.repldx.GP40;
    let NOR40=this.props.bck.repldx.NOR40;
    let HQ40=this.props.bck.repldx.HQ40;
    let HQ45=this.props.bck.repldx.HQ45;
    let RTMi=this.props.bck.repldx.RTMi;
    let KGAi=this.props.bck.repldx.KGAi;
    let RF20=this.state.jg20rf;
    let RF40=this.state.jg40rf;
    let FR20=this.props.bck.repldx.FR20;
    let FR40=this.props.bck.repldx.FR40;
    let replMemo=this.state.hpbz;
    let expiDate=this.state.yjyxq==null?'':moment(this.state.yjyxq).format('YYYY.MM.DD HH:mm:ss');
    let fg='',admininfo='';
    if(this.state.comp>0){
      fg=this.state.cs==''?'':this.props.text.priv.admi!=0?'':',';
      admininfo=this.props.text.priv.admi!=0?'':this.props.bck.adminlinfohp;
    }
    let ccto = "["+this.state.cs+fg+admininfo+"]";
    if(freiCurr==''||RF20==''||RF40==''||expiDate==null||carr==''||sailTime==''||closTime==''||sailDays==''){
      message.error('请填写完整再发送');
    }else{
      this.props.actions.gethpxj(userid,userName,token,repl,carr,tranPort,sailTime,closTime,sailDays,freiCurr,GP20,GP40,NOR40,HQ40,HQ45,RTMi,KGAi,RF20,RF40,FR20,FR40,replMemo,expiDate,ccto);
      if(!this.props.bck.isshow){
        this.props.handchclose();
      }
    }
  }
  handcz(){
    this.setState({
      cs:[],
      bz20rf:'USD',
      jg20rf:'',
      bz40rf:'USD',
      jg40rf:'',
      yjyxq:null,
      cys:'',
      zzd:'',
      tt:'',
      cls:'截关日',
      etd:'预计开航时间',
      hpbz:'',
      zzdn:''
    })
  }
  render() {
    let sfile=this.props.bck.enqudx.file;
    let sary;
    if(sfile!=null){
      sfile=sfile.split('/');
      sary=sfile[sfile.length-1];
    }else{
      sary='无';
    }
    return (
      <div className="bdeldiv">
        <div className="bdel1">
          <a className="close" href='javascript:void(0);' onClick={this.props.handchclose}>X</a>
          <div className="bdel2">
            <div className="bdel3">
              <span>回盘-{this.props.bck.repldx.repl}</span>
              <ul>
                <li><a className="bntact" href='javascript:void(0);' onClick={this.handfs}>发送</a></li>
                <li><a className="bntact" href='javascript:void(0);' onClick={this.handcz}>重置</a></li>
              </ul>
            </div>
            <div className="bdel4">
              {
                this.state.comp != 0 ?
                  <div className="bdel23">
                    <h5>抄送</h5>

                    <div className="bdel24">
                      <Select
                        multiple
                        style={{ width: 555 }}
                        value={this.state.cs}
                        placeholder="请选择公司同事抄送"
                        onChange={(v)=>{return this.setState({cs:v})}}
                      >
                        {
                          this.props.bck.hpcctos.map((item, index)=> {
                            let strcctos = '{"user":"' + item.user + '","userAcco":"' + item.userAcco + '","name":"' + item.name + '"}';
                            if(item.user!=this.state.userid){
                              if(item.userAcco!=this.state.admiAcco){
                                return <Option key={strcctos} >{item.name}</Option>
                              }else{
                                return <Option key={strcctos} style={{display:'none'}}>{item.name}</Option>
                              }
                            }else{
                              return <Option key={strcctos} style={{display:'none'}}>{item.name}</Option>
                            }
                          })
                        }
                      </Select>
                    </div>
                    <span className="bdel25" onClick={this.handleccto}>|x</span>
                  </div>:undefined
              }
              <div className="bdel20">
                <h5>O/F</h5>
                <ul>
                  <li>
                    <span className="bdel20sp">20RF</span>
                    <Select
                      value={this.state.bz20rf}
                      style={{ width: 60,marginBottom:5 }}
                      className="delsel"
                      onChange={(v)=>{return this.setState({bz20rf:v,bz40rf:v})}}
                    >
                      <Option key='1' value="USD">USD</Option>
                      <Option key='2' value="CNY">CNY</Option>
                    </Select>:
                    <Input
                      value={this.state.jg20rf}
                      style={{width:115,height:23}}
                      className="delinp"
                      onChange={(e)=>{return this.setState({jg20rf:e.target.value})}}
                    />
                    {this.props.bck.enqudx.RF20!=0? <i className="btcolor">*</i>:undefined}
                  </li>
                  <li>
                    <span className="bdel20sp">40RF</span>
                    <Select
                      value={this.state.bz40rf}
                      style={{ width: 60,marginBottom:5 }}
                      className="delsel"
                      onChange={(v)=>{return this.setState({bz40rf:v,bz20rf:v})}}
                    >
                      <Option key='1' value="USD">USD</Option>
                      <Option key='2' value="CNY">CNY</Option>
                    </Select>:
                    <Input
                      value={this.state.jg40rf}
                      style={{width:115,height:23}}
                      className="delinp"
                      onChange={(e)=>{return this.setState({jg40rf:e.target.value})}}
                    />
                    {this.props.bck.enqudx.RF40!=0? <i className="btcolor">*</i>:undefined}
                  </li>
                </ul>
              </div>
              <div className="bdel8">
                <ul>
                  <li>
                    <span className="bdel8sp">运价有效期</span>
                    <p>
                      <DatePicker
                        showTime="true"
                        value={this.state.yjyxq}
                        format="yyyy.MM.dd HH:mm:ss"
                        placeholder="运价有效期"
                        style={{ width: 100 }}
                        onChange={(v)=>{return this.setState({yjyxq:v})}}
                      />
                    </p>
                    <i className="btcolor">*</i>
                  </li>
                  <li>
                    <span className="bdel8sp">承运商</span>
                    <Select showSearch
                            value={this.state.cys}
                            style={{ width: 95,marginLeft:5 }}
                            className="delsel"
                            filterOption={this.handfilts}
                            notFoundContent="无法找到"
                            placeholder="承运商"
                            onChange={(v)=>{return this.setState({cys:v})}}
                    >
                      {
                        this.props.bck.carrs.map(s => <Option key={s.carr}>{s.carrName}</Option>)
                      }
                    </Select>
                    <i className="btcolor">*</i>
                  </li>
                  <li>
                    <span className="bdel8sp">中转地</span>
                    {
                      this.props.bck.enqudx.tranship==2?
                        <Select combobox
                                value={this.state.zzdn}
                                style={{ width: 95,marginLeft:5 }}
                                className="delsel"
                                notFoundContent="无法找到"
                                defaultActiveFirstOption={false}
                                showArrow={false}
                                filterOption={this.handfilts}
                                placeholder="中转地"
                                onChange={this.handcn}
                                onSelect={this.handcns}
                        >
                          {
                            this.props.bck.zzdhp.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                          }
                        </Select>
                        :
                        <Select combobox
                                value={this.state.zzdn}
                                style={{ width: 95,marginLeft:5 }}
                                className="delsel"
                                notFoundContent="无法找到"
                                defaultActiveFirstOption={false}
                                showArrow={false}
                                filterOption={this.handfilts}
                                placeholder="中转地"
                                onChange={this.handcn}
                                onSelect={this.handcns}
                        >
                          <OptGroup key='0' label="直达">
                            {
                              <Option key='无'>无</Option>
                            }
                          </OptGroup>
                          <OptGroup key='1' label="转运">
                            {
                              this.props.bck.zzdhp.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                            }
                          </OptGroup>
                        </Select>
                    }
                  </li>
                </ul>
              </div>
              <div className="bdel9">
                <ul>
                  <li>
                    <span className="bdel9sp">T/T</span>
                    <p>
                      <Input
                        value={this.state.tt}
                        className="delinp8"
                        placeholder="航程"
                        onChange={(e)=>{return this.setState({tt:e.target.value})}}
                      />天
                    </p>
                    <i className="btcolor">*</i>
                  </li>
                  <li>
                    <span className="bdel9sp">CLS</span>
                    <Select
                      value={this.state.cls}
                      style={{ width: 95,marginLeft:5 }}
                      className="delsel"
                      placeholder="截关日"
                      onChange={(v)=>{return this.setState({cls:v})}}
                    >
                      <Option key='0' value="0">未指定</Option>
                      <Option key='1' value="1">周一</Option>
                      <Option key='2' value="2">周二</Option>
                      <Option key='3' value="3">周三</Option>
                      <Option key='4' value="4">周四</Option>
                      <Option key='5' value="5">周五</Option>
                      <Option key='6' value="6">周六</Option>
                      <Option key='7' value="7">周日</Option>
                    </Select>
                    <i className="btcolor">*</i>
                  </li>
                  <li>
                    <span className="bdel9sp">ETD</span>
                    <Select
                      value={this.state.etd}
                      style={{ width: 95,marginLeft:5 }}
                      className="delsel"
                      placeholder="预计开航时间"
                      onChange={(v)=>{return this.setState({etd:v})}}
                    >
                      <Option key='0' value="0">未指定</Option>
                      <Option key='1' value="1">周一</Option>
                      <Option key='2' value="2">周二</Option>
                      <Option key='3' value="3">周三</Option>
                      <Option key='4' value="4">周四</Option>
                      <Option key='5' value="5">周五</Option>
                      <Option key='6' value="6">周六</Option>
                      <Option key='7' value="7">周日</Option>
                    </Select>
                    <i className="btcolor">*</i>
                  </li>
                </ul>
              </div>
              <div className="bdel10">
                <span>回盘备注</span>
                <p>
                  <textarea
                    value={this.state.hpbz}
                    maxLength="155"
                    onChange={(e)=>{return this.setState({hpbz:e.target.value})}}
                  ></textarea>
                </p>
              </div>
            </div>
            <div className="bdel5">
              <div className="bdel11">
                <ul>
                  <li>
                    <span>询盘号</span>
                    <p>{this.props.bck.enqudx.enqu}</p>
                  </li>
                  <li>
                    <span>询盘人</span>
                    <p className="bdel11p">{this.props.bck.enqudx.mngrName!=''&&this.props.bck.enqudx.mngrName!=null?this.props.bck.enqudx.mngrName:this.props.bck.enqudx.enquerName}</p>
                  </li>
                  <li>
                    <span>起运地</span>
                    <p>{this.props.bck.enqudx.depaPortName}</p>
                  </li>
                  <li>
                    <span>目的地</span>
                    <p>{this.props.bck.enqudx.destPortName}</p>
                  </li>
                  <li>
                    <span>运输要求</span>
                    <p>{
                      this.props.bck.enqudx.tranship==1?'直达':
                        this.props.bck.enqudx.tranship==2?'中转':
                          this.props.bck.enqudx.tranship==3?'不限':''
                    }
                    </p>
                  </li>
                  <li>
                    <span>完货日期</span>
                    <p>{moment(this.props.bck.enqudx.compDate).format('YYYY-MM-DD')}</p>
                  </li>
                </ul>
              </div>
              <div className="bdel12">
                <span>承运商</span>
                <p>{this.props.bck.carrsary}</p>
              </div>
              <div className="bdel21">
                <ul>
                  <li>
                    <span>品名</span>
                    <p>{this.props.bck.enqudx.itemName}</p>
                  </li>
                  <li>
                    <span>温度</span>
                    {
                      this.props.bck.enqudx.temp!=0?
                        <p>{this.props.bck.enqudx.temp}℃</p>:undefined
                    }
                  </li>
                </ul>
              </div>
              <div className="bdel22">
                <span>货物信息</span>
                <ul>
                  {
                    this.props.bck.enqudx.RF20 != 0 ?
                      <li>
                        20RF*{this.props.bck.enqudx.RF20} GW {this.props.bck.enqudx.RF20Wate}t
                      </li>:undefined
                  }
                  {
                    this.props.bck.enqudx.RF40 != 0 ?
                      <li>
                        40RF*{this.props.bck.enqudx.RF40} GW {this.props.bck.enqudx.RF40Wate}t
                      </li>:undefined
                  }
                </ul>
              </div>
              <div className="bdel12">
                <span>发货人</span>
                <p>{this.props.bck.enqudx.shpr}</p>
              </div>
              <div className="bdel12">
                <span className="fjfile">附件</span>
                {

                  this.props.bck.enqudx.file!=null?
                    <img title={sary} src={require('../../src/image/hxz.png')}/>:<p>无</p>
                }
              </div>
              <div className="bdel14">
                <span>更多要求</span>
                <p>{this.props.bck.enqudx.enquMemo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}