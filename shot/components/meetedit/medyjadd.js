/**
 * Created by Zing on 2017/4/6.
 */
import React,{Component} from 'react';
import {Select} from 'antd';
import Zselectop1 from './../ccom/zselectop1';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout,timeoutm,timeoutk;

export default class Medyjadd extends Component {
  constructor(props) {
    super(props);
    this.handc=this.handc.bind(this);
    this.handqd=this.handqd.bind(this);
    this.handfw=this.handfw.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handcm=this.handcm.bind(this);
    this.handcms=this.handcms.bind(this);
    this.handck=this.handck.bind(this);
    this.handcks=this.handcks.bind(this);
    this.state={
      userName: sessionStorage.getItem("SESSIONUSERACC"),
      token: sessionStorage.getItem("SESSIONTOKEN"),
      fw:'',
      jtfu:'',
      cys:'',
      qyd:'',
      mdd:'',
      kan:'',
      qydn:'',
      mddn:'',
      kann:'',
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
        this.props.actions.getqydm(userName,token,serv,v);
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
        this.props.actions.getmddm(userName,token,serv,v);
      }
    }, 300);
  }
  handcms(v,o){
    let mdd=o.props.date;
    this.setState({ mdd:mdd });
  }
  handck(v){
    this.setState({
      kann:v,
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.fw;
    if (timeoutk) {
      clearTimeout(timeoutk);
      timeoutk = null;
    }
    timeoutk = setTimeout(() => {
      if(v){
        this.props.actions.getkanm(userName,token,serv,v);
      }
    }, 300);
  }
  handcks(v,o){
    let kan=o.props.date;
    this.setState({ kan:kan });
  }
  handqd(){
    let userName=this.state.userName;
    let token=this.state.token;
    let meetChat=this.props.Aary;
    let serv=this.state.fw;
    let servOpti=this.state.jtfu;
    let port=this.state.kan;
    let depaPort=this.state.qyd;
    let destPort=this.state.mdd;
    let carr=this.state.cys;
    this.props.actions.postxjxq(userName,token,meetChat,serv,servOpti,port,depaPort,destPort,carr);//新建需求
    this.props.handc();
  }
  handc(){
    this.props.handc();
  }
  handfw(v){
    if(this.props.isxz==3){
      this.props.actions.getcra(this.state.userName,this.state.token,v);//根据服务获取所有承运商
      this.props.actions.getcrah(this.state.userName,this.state.token,v); //根据服务获取热门承运商
      this.props.actions.getqyda(this.state.userName,this.state.token,v);//根据服务获取所有起运地
      this.props.actions.getqydaz(this.state.userName,this.state.token,v); //根据服务获取最近起运地
      this.props.actions.getmdda(this.state.userName,this.state.token,v); //根据服务获取所有目的地
      this.props.actions.getmddaz(this.state.userName,this.state.token,v); //根据服务获取最近目的地
    }else if(this.props.isxz==4){
      this.props.actions.getmedkan(this.state.userName,this.state.token,v);//根据服务获取所有口岸
      this.props.actions.getmedkanz(this.state.userName,this.state.token,v);//根据服务获取最近口岸
    }else if(this.props.isxz==2){
      this.props.actions.getmedkan(this.state.userName,this.state.token,v);//根据服务获取所有口岸
      this.props.actions.getmedkanz(this.state.userName,this.state.token,v);//根据服务获取最近口岸
      this.props.actions.getjtfw(this.state.userName,this.state.token,v); //根据服务获取具体服务
    }
    this.setState({
      fw:v
    })
  }
  render() {
    return (
      <div className="medyjad">
          <div className="medyjad1">
              <a className="medyjadcl" href='javascript:void(0);' onClick={this.handc}>X</a>
              <div className="medyjad2">
                  <div className="medyjad3">
                      <span>新增{this.props.isxz==3?'运价':this.props.isxz==4?'特种货运价':this.props.isxz==2?'服务':undefined}需求</span>
                      <a href='javascript:void(0);' onClick={this.handqd}>确定</a>
                  </div>
                  <div className="medyjad4">
                      <ul>
                          <li className="meda">
                              <h5>服务</h5>
                              <Select showSearch
                                      value={this.state.fw}
                                      style={{ width: 160 }}
                                      className="adselect"
                                      optionFilterProp="children"
                                      notFoundContent="无法找到"
                                      placeholder="服务"
                                      onChange={this.handfw}
                              >
                                {
                                  this.props.mbdit.myjfw.map(s => {
                                    return <Option key={s.serv}>{s.servName}</Option>
                                  })
                                }
                              </Select>
                          </li>
                        {
                          this.props.isxz==3?
                            <li className="meda">
                                <h5>承运商</h5>
                                <Select
                                  showSearch
                                  value={this.state.cys}
                                  style={{ width: 160 }}
                                  filterOption={this.handfilts}
                                  notFoundContent="请先选择服务或未找到"
                                  className="adselect"
                                  placeholder="承运商"
                                  onChange={(v)=>{return this.setState({cys:v})}}
                                >
                                    <OptGroup key='1' label="热门">
                                      {
                                        this.props.mbdit.crah.map(s => <Option key={s.carr}>{s.carrName}</Option>)
                                      }
                                    </OptGroup>
                                    <OptGroup key='2' label="所有">
                                      {
                                        this.props.mbdit.cra.map(s => <Option key={s.carr}>{s.carrName}</Option>)
                                      }
                                    </OptGroup>
                                </Select>
                            </li>:undefined
                        }
                        {
                          this.props.isxz==3?
                            <li className="meda">
                              <h5>起运地</h5>
                              <Select combobox
                                      value={this.state.qydn}
                                      style={{ width: 160 }}
                                      className="xseachop"
                                      notFoundContent=""
                                      defaultActiveFirstOption={false}
                                      showArrow={false}
                                      filterOption={false}
                                      placeholder="请输入起运地并选择"
                                      onChange={this.handcn}
                                      onSelect={this.handcns}
                              >
                                <OptGroup label="所有">
                                  {
                                    this.props.mbdit.qydm.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                                  }
                                </OptGroup>
                                <OptGroup label="最近">
                                  {
                                    this.props.mbdit.qydzj.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                                  }
                                </OptGroup>
                              </Select>
                            </li>:undefined
                        }
                        {
                          this.props.isxz==3?
                            <li className="meda">
                              <h5>目的地</h5>
                              <Select combobox
                                      value={this.state.mddn}
                                      style={{ width: 160 }}
                                      className="xseachop"
                                      notFoundContent=""
                                      defaultActiveFirstOption={false}
                                      showArrow={false}
                                      filterOption={false}
                                      placeholder="请输入目的地并选择"
                                      onChange={this.handcm}
                                      onSelect={this.handcms}
                              >
                                <OptGroup label="所有">
                                  {
                                    this.props.mbdit.mddm.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                                  }
                                </OptGroup>
                                <OptGroup label="最近">
                                  {
                                    this.props.mbdit.mddzj.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                                  }
                                </OptGroup>
                              </Select>
                            </li>:undefined
                        }
                        {
                          this.props.isxz==2?
                            <li className="meda">
                                <h5>具体服务</h5>
                                <Select showSearch
                                        value={this.state.jtfu}
                                        style={{ width: 160 }}
                                        className="xseachop"
                                        optionFilterProp="children"
                                        notFoundContent="无法找到"
                                        placeholder="具体服务"
                                        onChange={(v)=>{return this.setState({jtfu:v})}}
                                >
                                  {
                                    this.props.mbdit.mjtfw.map(s => <Option key={s.servOpti}>{s.name}</Option>)
                                  }
                                </Select>
                            </li>:undefined
                        }
                        {
                          this.props.isxz==3?undefined:
                            <li className="meda">
                              <h5>口岸</h5>
                              <Select combobox
                                      value={this.state.kann}
                                      style={{ width: 160 }}
                                      className="xseachop"
                                      notFoundContent=""
                                      defaultActiveFirstOption={false}
                                      showArrow={false}
                                      filterOption={false}
                                      placeholder="请输入口岸并选择"
                                      onChange={this.handck}
                                      onSelect={this.handcks}
                              >
                                <OptGroup label="最近">
                                  {
                                    this.props.mbdit.kanzj.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                                  }
                                </OptGroup>
                                <OptGroup label="所有">
                                  {
                                    this.props.mbdit.kanm.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                                  }
                                </OptGroup>
                              </Select>
                            </li>
                        }
                          <li className="meda">
                              <h5>状态</h5>
                              <div className="medyjad5">启用</div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}