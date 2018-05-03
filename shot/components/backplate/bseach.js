/**
 * Created by Zing on 2016/8/31.
 */
import React,{Component} from 'react';
import { Select,Checkbox,Input } from 'antd';
import DateRangebp from './bdate';
import Blist from './blist';
import moment from 'moment';
import Footinfo from './../login/footinfo';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout,timeoutm;

export default class Bseach extends Component {
  constructor(props) {
    super(props);
    this.onStartChange=this.onStartChange.bind(this);
    this.onEndChange=this.onEndChange.bind(this);
    this.handss=this.handss.bind(this);
    this.handcz=this.handcz.bind(this);
    this.handblur=this.handblur.bind(this);
    this.handzkhl=this.handzkhl.bind(this);
    this.handfilts=this.handfilts.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handcm=this.handcm.bind(this);
    this.handcms=this.handcms.bind(this);
    let admiAcco='';
    let comp=sessionStorage.getItem("SESSIONCOMP");
    if(comp!=0) {
      admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
    }
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:comp,
      fw:'',
      xpr:'',
      hpr:'',
      xpzt:'',
      mdd:undefined,
      qyd:undefined,
      bgt:null,
      edt:null,
      hl:false,
      wbj:false,
      admiAcco:admiAcco,
      qydn:'',
      mddn:''
    }
  }
  handcn(v){
    this.setState({
      qydn:v
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.fw;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getqydhp(userName,token,serv,v);
      }
    }, 300);
  }
  handcns(v,o){
    let qyd=o.props.date;
    this.setState({ qyd:qyd });
  }
  handcm(v){
    this.setState({
      mddn:v,
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.fw;
    if (timeoutm) {
      clearTimeout(timeoutm);
      timeoutm = null;
    }
    timeoutm = setTimeout(() => {
      if(v){
        this.props.actions.getmddhp(userName,token,serv,v);
      }
    }, 300);
  }
  handcms(v,o){
    let mdd=o.props.date;
    this.setState({ mdd:mdd });
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
  handblur(e){
    //获取询盘人id
    if(e.target.value!=''){
      this.props.actions.gethpxppeo(this.state.userName,this.state.token,e.target.value);
    }
  }
  handss(){
    let enquer;
    if(this.state.xpr!=''){
      enquer=this.props.bck.hpxppeo[0].user;
    }else{
      enquer='';
    }
    let userName=this.state.userName;
    let token=this.state.token;
    let pageIndex=1;
    let serv=this.state.fw;
    let unreplOnly=this.state.wbj;
    let depaPort=this.state.qyd==undefined?'':this.state.qyd;
    let destPort=this.state.mdd==undefined?'':this.state.mdd;
    let skipOnly=this.state.hl;
    let enquStat=this.state.xpzt;
    let repler=this.state.hpr;
    let replTimeFrom=this.state.bgt==null?'':moment(this.state.bgt).format('YYYY-MM-DD');
    let replTimeTo=this.state.edt==null?'':moment(this.state.edt).format('YYYY-MM-DD');
    this.props.actions.gethplist(userName,token,pageIndex,serv,unreplOnly,depaPort,destPort,skipOnly,enquStat,enquer,repler,replTimeFrom,replTimeTo);
    this.refs.hplists.setState({
      Hes:0,
      page:1,
      hhs:[]
    });
  }
  handcz(){
    this.setState({
      fw:'',
      xpr:'',
      hpr:'',
      xpzt:'',
      mdd:undefined,
      qyd:undefined,
      bgt:null,
      edt:null,
      hl:false,
      wbj:false,
      qydn:'',
      mddn:''
    });
    this.refs.dapick.setState({
      startValue: null,
      endValue: null,
      endOpen: false
    });
  }
  onStartChange(v){
    this.setState({
      bgt: v
    });
  }
  onEndChange(v){
    this.setState({
      edt: v
    });
  }
  handzkhl(e){
    this.setState({
      hl:e.target.checked
    });
    let enquer;
    if(this.props.bck.hpxppeo.length>0){
      enquer=this.props.bck.hpxppeo[0].user;
    }else{
      enquer='';
    }
    let userName=this.state.userName;
    let token=this.state.token;
    let pageIndex=1;
    let serv=this.state.fw;
    let unreplOnly=this.state.wbj;
    let depaPort=this.state.qyd==undefined?'':this.state.qyd;
    let destPort=this.state.mdd==undefined?'':this.state.mdd;
    let skipOnly=e.target.checked;
    let enquStat=this.state.xpzt;
    let repler=this.state.hpr;
    let replTimeFrom=this.state.bgt==null?'':moment(this.state.bgt).format('YYYY-MM-DD');
    let replTimeTo=this.state.edt==null?'':moment(this.state.edt).format('YYYY-MM-DD');
    this.props.actions.gethplist(userName,token,pageIndex,serv,unreplOnly,depaPort,destPort,skipOnly,enquStat,enquer,repler,replTimeFrom,replTimeTo);
    this.refs.hplists.setState({
      Hes:0,
      page:1,
      hhs:[]
    });
  }
  render() {
    let Fstate=Array.of(
      this.state.fw,
      this.state.wbj,
      this.state.qyd==undefined?'':this.state.qyd,
      this.state.mdd==undefined?'':this.state.mdd,
      this.state.hl,
      this.state.xpzt,
      this.props.bck.hpxppeo.length>0?this.props.bck.hpxppeo[0].user:'',
      this.state.hpr,
      this.state.bgt==null?'':moment(this.state.bgt).format('YYYY-MM-DD'),
      this.state.edt==null?'':moment(this.state.edt).format('YYYY-MM-DD')
    );
    return (
      <div className="bpllist">
        <div className="bplcondition1">
          <ul className="bpl1">
            <li>
              <span className="bplsp">服务</span>
              <Select showSearch
                      value={this.state.fw}
                      style={{ width: 120 }}
                      className="bpl2"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="服务"
                      onChange={(v)=>{return this.setState({fw:v})}}
              >
                {
                  this.props.bck.hser.map(s => <Option key={s.serv}>{s.servName}</Option>)
                }
              </Select>
            </li>
            <li>
              <span className="bplsp">询盘人</span>
              <Input
                value={this.state.xpr}
                placeholder="询盘人账号"
                style={{width:120,marginLeft:5}}
                onChange={(e)=>{return this.setState({xpr:e.target.value})}}
                onBlur={this.handblur}
              />
            </li>
            <li>
              <span className="bplsp">回盘人</span>
              <Select showSearch
                      value={this.state.hpr}
                      style={{ width: 120 }}
                      className="bpl2"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="回盘人"
                      onChange={(v)=>{return this.setState({hpr:v})}}
              >
                {
                  this.props.bck.hppeo.map(s => {
                    if(this.props.text.priv.admi!=0){
                      return <Option key={s.user}>{s.name}</Option>
                    }else{
                      if(s.userAcco!=this.state.admiAcco){
                        return <Option key={s.user}>{s.name}</Option>
                      }else{
                        return <Option style={{display:'none'}} key={s.user} >{s.name}</Option>
                      }
                    }
                  })
                }
              </Select>
            </li>
            <li>
              <span className="bplsp">询盘状态</span>
              <Select showSearch
                      value={this.state.xpzt}
                      style={{ width: 120 }}
                      className="bpl2"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="询盘状态"
                      onChange={(v)=>{return this.setState({xpzt:v})}}
              >
                <Option value="0">全部</Option>
                <Option value="10">正常</Option>
                <Option value="20">超期</Option>
                <Option value="30">中标</Option>
                <Option value="40">退关</Option>
                <Option value="50">终止</Option>
              </Select>
            </li>
          </ul>
        </div>
        <div className="bplcondition2">
          <div className="bpl3">
            <ul>
              <li>
                <span className="bplsp">起运地</span>
                <Select combobox
                        value={this.state.qydn}
                        style={{ width: 120 }}
                        className="xseachop"
                        notFoundContent=""
                        defaultActiveFirstOption={false}
                        showArrow={false}
                        filterOption={false}
                        placeholder="请输入起运地"
                        onChange={this.handcn}
                        onSelect={this.handcns}
                >
                  {
                    this.props.bck.qydhp.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </Select>
              </li>
              <li>
                <span className="bplsp">目的地</span>
                <Select combobox
                        value={this.state.mddn}
                        style={{ width: 120 }}
                        className="xseachop"
                        notFoundContent=""
                        defaultActiveFirstOption={false}
                        showArrow={false}
                        filterOption={false}
                        placeholder="请输入目的地"
                        onChange={this.handcm}
                        onSelect={this.handcms}
                >
                  {
                    this.props.bck.mddhp.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </Select>
              </li>
            </ul>
          </div>
          <DateRangebp ref="dapick" onStartChange={this.onStartChange} onEndChange={this.onEndChange}/>
        </div>
        <div className="bplcondition3">
          <ul className="bpl5">
            <li>
              <span className="bplsp">只看忽略</span>
              <Checkbox
                checked={this.state.hl}
                onChange={this.handzkhl}
              ></Checkbox>
            </li>
            <li>
              <span className="bplsp">只看未报价</span>
              <Checkbox
                checked={this.state.wbj}
                onChange={(e)=>{this.setState({wbj:e.target.checked});}}
              ></Checkbox>
            </li>
            <li>
              <a href="javascript:void(0);" onClick={this.handss}>搜索</a>
            </li>
            <li>
              <a href="javascript:void(0);" onClick={this.handcz}>重置</a>
            </li>
            <li>
              <a href="javascript:void(0);" onClick={this.handss}>刷新</a>
            </li>
          </ul>
        </div>
        <Blist ref="hplists"
               Fstate={Fstate}
               actions={this.props.actions}
               cabnew={this.props.cabnew}
               cabrnew={this.props.cabrnew}
               bck={this.props.bck}
               shows={this.props.shows}
               text={this.props.text}
               hl={this.state.hl}
        />
        <Footinfo />
      </div>
    );
  }
}