/**
 * Created by Zing on 2016/8/12.
 */
import React,{Component} from 'react';
import Zsjr from './zsjr';
import Zcsr from './zcsr';
import { Select,Checkbox,message } from 'antd';
const Option = Select.Option;
let timeout;

export default class Anewadd extends Component {
  constructor(props) {
    super(props);
    this.handlefs=this.handlefs.bind(this);
    this.handlecz=this.handlecz.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handfilts=this.handfilts.bind(this);
    this.handsjrc=this.handsjrc.bind(this);
    this.handcsrc=this.handcsrc.bind(this);
    this.hsjr=this.hsjr.bind(this);
    this.hsjrc=this.hsjrc.bind(this);
    this.hsjrq=this.hsjrq.bind(this);
    this.hcsr=this.hcsr.bind(this);
    this.hcsrc=this.hcsrc.bind(this);
    this.hcsrq=this.hcsrq.bind(this);
    let matchs=false;
    this.props.text.comps.matcCons==1?matchs=true:matchs=false;
    let admiAcco='';
    let comp=sessionStorage.getItem("SESSIONCOMP");
    if(comp!=0) {
      admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
    }
    this.state={
      ports:undefined,
      sendTo:[],
      ccto:[],
      mngr:undefined,
      servOpti:'',
      consMemo:'',
      match:matchs,
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:comp,
      userid:sessionStorage.getItem("SESSIONUSER"),
      admiAcco:admiAcco,
      isjs:false,
      icss:false,
      qydn:''
    }
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
  handcn(v){
    this.setState({
      qydn:v
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.props.adindex;
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
    let ports=o.props.date;
    this.setState({ ports:ports });
    this.props.actions.getzxsendto(this.state.userName,this.state.token,this.props.adindex,ports);//获取收件人
  }
  componentDidMount(){
    this.props.actions.getzxjtser(this.state.userName,this.state.token,this.props.adindex);//获取服务类型
  }
  handlefs(){
    let userName=this.state.userName;
    let userid=this.state.userid;
    let token=this.state.token;
    let serv=this.props.adindex;
    let servOpti=this.state.servOpti;
    let port=this.state.ports==undefined?'':this.state.ports;
    let consMemo=this.state.consMemo;
    let sendTo='['+this.state.sendTo+']';
    let fg='',admininfo='';
    if(this.state.comp>0){
      fg=this.state.ccto==''?'':this.props.text.priv.admi!=0?'':',';
      admininfo=this.props.text.priv.admi!=0?'':this.props.zxinfo.adminlinfozx;
    }
    let ccto = "["+this.state.ccto+fg+admininfo+"]";
    let match=this.state.match?1:0;
    let mngr=this.state.mngr==undefined?'':this.state.mngr;
    //获取推送列表
    this.props.actions.getfwys(userName,token,port,servOpti,serv);
    //发送
    if (servOpti == '' || port == '') {
      message.error('请填写完整在提交！')
    } else {
      this.props.actions.getzxaddnew(userid,userName,token,serv,servOpti,port,consMemo,sendTo,ccto,match,mngr);
      this.props.showdate(this.props.zxinfo.isshow,0);
    }
  }
  handlecz(){
    let matchs=false;
    this.props.text.comps.matcCons==1?matchs=true:matchs=false;
    this.setState({
      ports:undefined,
      sendTo:[],
      ccto:[],
      mngr:'',
      servOpti:'',
      consMemo:'',
      match:matchs,
      qydn:''
    });
  }
  render() {
    return (
      <div className="zxnewdiv">
        <div className="zxnd">
          <a className="close" href='javascript:void(0);' onClick={this.props.handclose}>X</a>
          <div className="zxnd1">
            <div className="zxnd2">
              <span>新增咨询-{this.props.tiname}</span>
              <ul>
                <li><a className="bntact" href='javascript:void(0);' onClick={this.handlefs}>发送</a></li>
                <li><a className="bntact" href='javascript:void(0);' onClick={this.handlecz}>重置</a></li>
              </ul>
            </div>
            <div className="zxnd3">
              <ul className="zxnd7">
                <li className="zxnd8">
                  <div className="zxnd4">
                    <p>服务类型</p>
                    <Select showSearch
                            value={this.state.servOpti}
                            className="xseachop"
                            style={{ width: 200 }}
                            optionFilterProp="children"
                            notFoundContent="无法找到"
                            onChange={(v)=>{return this.setState({servOpti:v})}}
                    >
                      {
                        this.props.zxinfo.serJser.map(s => <Option key={s.servOpti}>{s.name}</Option>)
                      }
                    </Select>
                  </div>
                  <div className="zxnd4">
                    <p>口岸</p>
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
                        this.props.zxinfo.kanzx.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                      }
                    </Select>
                  </div>
                </li>
                <li className="zxnd8">
                  <div className="zxnd6">
                    <p>收件人</p>
                    <div className="xnew16">
                      <a className="xpsjr" href="javascript:void(0);" onClick={this.hsjr}>
                        {this.state.sendTo.length==0?'填写收件人':'已填写'}
                      </a>
                      <span>收件人为已录入的供应商，可请公司有权限的人录入.</span>
                    </div>
                  </div>
                </li>
                <li className="zxnd8">
                  {
                    this.state.comp != 0 ?
                      <div className="zxnd6">
                        <p>抄送</p>
                        <div className="xnew16">
                          <a className="xpsjr" href="javascript:void(0);" onClick={this.hcsr}>
                            {this.state.ccto.length==0?'填写抄送人':'已填写'}
                          </a>
                          <span>请选择公司同事抄送,可多选.</span>
                        </div>
                      </div> : undefined
                  }
                </li>
                <li className="zxnd8">
                  {
                    this.state.comp != 0 ?
                      <div className="zxnd4">
                        <p>委托</p>
                        <Select showSearch
                                placeholder="请选择委托的人"
                                value={this.state.mngr}
                                className="xseachop"
                                style={{ width: 200 }}
                                optionFilterProp="children"
                                notFoundContent="无法找到"
                                onChange={(v)=>{return this.setState({mngr:v})}}
                        >
                          {
                            this.props.zxinfo.zxwtuo.map((item, index)=> {
                              return <Option key={item.user}>{item.name}</Option>
                            })
                          }
                        </Select>
                      </div> : undefined
                  }
                  <div className="zxnd4">
                    <p></p>
                    {
                      this.props.text.comps.matcCons==1?
                        <Checkbox
                          className="chke"
                          value={this.state.match}
                          checked={this.state.match}
                          onChange={(e)=>{return this.setState({match:e.target.checked})}}
                        >平台供应商
                        </Checkbox>:undefined
                    }
                  </div>
                </li>
              </ul>
              <div className="zxnd5">
                <span>服务要求</span>
                <textarea
                  value={this.state.consMemo}
                  maxLength="155"
                  onChange={(e)=>{return this.setState({consMemo:e.target.value})}}
                >
                                </textarea>
              </div>
            </div>
          </div>
          {
            this.state.isjs?
              <Zsjr actions={this.props.actions}
                    zxinfo={this.props.zxinfo}
                    hsjrc={this.hsjrc}
                    hsjrq={this.hsjrq}
                    sendTo={this.state.sendTo}
                    handsjrc={this.handsjrc}
              />
              :undefined
          }
          {
            this.state.icss?
              <Zcsr actions={this.props.actions}
                    zxinfo={this.props.zxinfo}
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