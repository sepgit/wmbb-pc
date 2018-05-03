/**
 * Created by Zing on 2016/8/10.
 */
import React,{Component} from 'react';
import { Select,Checkbox } from 'antd';
import moment from 'moment';
import Adlists from './alist';
import Footinfo from './../login/footinfo';
import DateRangezx from './zxdatepick';
const Option = Select.Option;
let timeout;

export default class Aseach extends Component {
  constructor(props) {
    super(props);
    this.handseach=this.handseach.bind(this);
    this.handrest=this.handrest.bind(this);
    this.handfilts=this.handfilts.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.state={
      port:undefined,
      serv:'',
      servOpti:'',
      consStat:'',
      zxbg:null,
      zxed:null,
      zkwd:false,
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
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
  handleStartChange(v){
    this.setState({
      zxbg: v
    });
  }
  handleEndChange(v){
    this.setState({
      zxed: v
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
  handseach(){
    let port=this.state.port==undefined?'':this.state.port;
    let serv=this.state.serv;
    let servOpti=this.state.servOpti;
    let consStat=this.state.consStat;
    let userName = sessionStorage.getItem("SESSIONUSERACC");
    let token = sessionStorage.getItem("SESSIONTOKEN");
    let consTimeFrom=this.state.zxbg==null?'':moment(this.state.zxbg).format('YYYY-MM-DD');
    let consTimeTo=this.state.zxed==null?'':moment(this.state.zxed).format('YYYY-MM-DD');
    let unreadOnly=this.state.zkwd==false?0:1;
    this.props.actions.getzxlist(userName,token,1,port,serv,servOpti,consStat,consTimeFrom,consTimeTo,unreadOnly);//获取搜索数据
    this.refs.zxlists.setState({
      Hes:0,
      page:1,
      hhs:[]
    });
    this.refs.zxlists.handcbc();
  }
  handrest(){
    this.setState({
      port:undefined,
      serv:'',
      servOpti:'',
      consStat:'',
      zxbg:null,
      zxed:null,
      zkwd:false,
      qydn:''
    });
    this.refs.datepickzx.setState({
      startValue: null,
      endValue: null,
      endOpen: false
    });
  }
  render() {
    let Fstate=Array.of(
      this.state.port==undefined?'':this.state.port,
      this.state.serv,
      this.state.servOpti,
      this.state.consStat,
      this.state.zxbg==null?'':this.state.zxbg,
      this.state.zxed==null?'':this.state.zxed,
      this.state.zkwd==false?0:1
    );
    return (
      <div className="azxlist">
        <div className="zxn1">
          <ul className="tjlist">
            <li className="zxlik">口岸
              <Select combobox
                      value={this.state.qydn}
                      style={{ width: 150 }}
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
                  this.props.zxinfo.kanzx.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                }
              </Select>
            </li>
            <li className="zxlik">服务
              <Select showSearch
                      value={this.state.serv}
                      style={{ width: 120 }}
                      className="xseachop"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={(v)=>{return this.setState({serv:v})}}
              >
                {
                  this.props.zxinfo.zxlist.map(s => <Option key={s.serv}>{s.servName}</Option>)
                }
              </Select>
            </li>
            <li className="zxlik">具体服务
              <Select showSearch
                      value={this.state.servOpti}
                      style={{ width: 120 }}
                      className="xseachop"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={(v)=>{return this.setState({servOpti:v})}}
              >
                {
                  this.props.zxinfo.servOptis.map(s => <Option key={s.servOpti}>{s.name}</Option>)
                }
              </Select>
            </li>
            <li className="zxlik">咨询状态
              <Select showSearch
                      value={this.state.consStat}
                      style={{ width: 120 }}
                      className="xseachop"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={(v)=>{return this.setState({consStat:v})}}
              >
                <Option value="0">全部</Option>
                <Option value="10">正常</Option>
                <Option value="50">终止</Option>
              </Select>
            </li>

          </ul>
        </div>
        <div className="zxn2">
          <DateRangezx ref="datepickzx" onStartChange={this.handleStartChange} onEndChange={this.handleEndChange}/>
          <ul>
            <li>
              <h5>只看未读</h5>
              <Checkbox checked={this.state.zkwd}
                        style={{marginLeft:5 }}
                        onChange={(e)=>{return this.setState({zkwd:e.target.checked})}}>
              </Checkbox>
            </li>
            <li>
              <a href='javascript:void(0);' className="replyas" onClick={this.handseach}>搜索</a>
              <a href='javascript:void(0);' className="replyas" onClick={this.handrest}>重置</a>
              <a href='javascript:void(0);' className="replyas" onClick={this.handseach}>刷新</a>
            </li>

          </ul>
        </div>
        <Adlists
          ref="zxlists"
          shows={this.props.shows}
          actions={this.props.actions}
          zxinfo={this.props.zxinfo}
          Fstate={Fstate}
          text={this.props.text}
        />
        <Footinfo />
      </div>
    );
  }
}