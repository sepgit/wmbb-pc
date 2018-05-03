/**
 * Created by Chen on 2017/12/13.
 */
import React,{Component} from 'react';
import {Input,DatePicker,Select,message} from 'antd';
import moment from 'moment';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout,timeoutm;

export default class Cwbadfcl extends Component {
  constructor(props) {
    super(props);
    this.handfb=this.handfb.bind(this);
    this.handgb=this.handgb.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handcm=this.handcm.bind(this);
    this.handcms=this.handcms.bind(this);
    this.handfilts=this.handfilts.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      currCos:'2',
      curr:'1',
      cys:'',
      qyd:'',
      mdd:'',
      qydn:'',
      mddn:'',
      GP20:'',
      GP20Fee:'',
      GP20Cos:'',
      GP40:'',
      GP40Fee:'',
      GP40Cos:'',
      NOR40:'',
      NOR40Fee:'',
      NOR40Cos:'',
      HQ40:'',
      HQ40Fee:'',
      HQ40Cos:'',
      HQ45:'',
      HQ45Fee:'',
      HQ45Cos:'',
      reqPref:'',
      resPref:'',
      expiTime:null,
      lastShutTime:null,
      sailTime:null,
      closTime:null
    }
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
    let serv=this.props.indexs;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getqydkacwb(userName,token,serv,v);
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
    let serv=this.props.indexs;
    if (timeoutm) {
      clearTimeout(timeoutm);
      timeoutm = null;
    }
    timeoutm = setTimeout(() => {
      if(v){
        this.props.actions.getmddkacwb(userName,token,serv,v);
      }
    }, 300);
  }
  handcms(v,o){
    let mdd=o.props.date;
    this.setState({ mdd:mdd });
  }
  componentDidMount(){
    this.props.actions.getcarrscwb(this.state.userName,this.state.token,this.props.indexs);//根据服务获取承运商
  }
  handfb(){
    //立即发布
    let userName=this.state.userName;
    let token=this.state.token;
    let serv=this.props.indexs;
    let carr=this.state.cys;
    let depaPort=this.state.qyd;
    let destPort=this.state.mdd;
    let curr=this.state.curr;
    let currCos=this.state.currCos;//总价币种
    let resPref=this.state.resPref;
    let reqPref=this.state.reqPref;
    let closTime=this.state.closTime==null?'':moment(this.state.closTime).format('YYYY.MM.DD HH:mm:ss');
    let sailTime=this.state.sailTime==null?'':moment(this.state.sailTime).format('YYYY.MM.DD HH:mm:ss');
    let expiTime=this.state.expiTime==null?'':moment(this.state.expiTime).format('YYYY.MM.DD HH:mm:ss');
    let lastShutTime=this.state.lastShutTime==null?'':moment(this.state.lastShutTime).format('YYYY.MM.DD HH:mm:ss');
    let GP20=this.state.GP20;
    let GP20Fee=this.state.GP20Fee;
    let GP20Cos=this.state.GP20Cos;
    let GP40=this.state.GP40;
    let GP40Fee=this.state.GP40Fee;
    let GP40Cos=this.state.GP40Cos;
    let NOR40=this.state.NOR40;
    let NOR40Fee=this.state.NOR40Fee;
    let NOR40Cos=this.state.NOR40Cos;
    let HQ40=this.state.HQ40;
    let HQ40Fee=this.state.HQ40Fee;
    let HQ40Cos=this.state.HQ40Cos;
    let HQ45=this.state.HQ45;
    let HQ45Fee=this.state.HQ45Fee;
    let HQ45Cos=this.state.HQ45Cos;
    this.props.actions.postcwbfb(userName,token,serv,carr,depaPort,destPort,curr,resPref,reqPref,closTime,sailTime,expiTime,lastShutTime,GP20,GP20Fee,GP20Cos,GP40,GP40Fee,GP40Cos,NOR40,NOR40Fee,NOR40Cos,HQ40,HQ40Fee,HQ40Cos,HQ45,HQ45Fee,HQ45Cos,currCos);
    this.props.fonClose(false,'');
  }
  handgb(){
    //关闭
    this.props.fonClose(false,'');
  }
  render() {
    let djzjye="充值余额"+this.props.cabmynew.residual;
    let djzjyeusd="充值余额"+this.props.cabmynew.resiUsd;
    let djye=this.state.curr=='1'?djzjye:djzjyeusd;
    return (
      <div className="cwbadd">
        <div className="cwbadd1">
          <div className="cwbadd2">
            <div className="cwbadd3">
              <sapn>发布现成舱位</sapn>
              <a className="cwbadd7" href='javascript:void(0);' onClick={this.handfb}>立即发布</a>
              <a className="cwbadd8" href='javascript:void(0);' onClick={this.handgb}>关闭</a>
            </div>
            <div className="cwbadd4">
              <ul>
                <li className="cwbadd16">
                  <h4>服务类型：</h4>
                  <p>{this.props.stat}</p>
                </li>
                <li className="cwbadd16">
                  <h4>承运商：</h4>
                  <Select showSearch
                          value={this.state.cys}
                          className="cwbadd14"
                          filterOption={this.handfilts}
                          notFoundContent="无法找到"
                          placeholder="服务"
                          onChange={(v)=>{return this.setState({cys:v})}}
                  >
                    {
                      this.props.cabmynew.carrscwb.map(s => <Option key={s.carr}>{s.carrName}</Option>)
                    }
                  </Select>
                </li>
                <li className="cwbadd16">
                  <h4>起运地：</h4>
                  <Select combobox
                          value={this.state.qydn}
                          className="cwbadd14"
                          notFoundContent=""
                          defaultActiveFirstOption={false}
                          showArrow={false}
                          filterOption={false}
                          placeholder="请输入起运地并选择"
                          onChange={this.handcn}
                          onSelect={this.handcns}
                  >
                      {
                        this.props.cabmynew.qydkacwb.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                      }
                  </Select>
                </li>
                <li className="cwbadd16">
                  <h4>目的地：</h4>
                  <Select combobox
                          value={this.state.mddn}
                          className="cwbadd14"
                          notFoundContent=""
                          defaultActiveFirstOption={false}
                          showArrow={false}
                          filterOption={false}
                          placeholder="请输入目的地并选择"
                          onChange={this.handcm}
                          onSelect={this.handcms}
                  >
                      {
                        this.props.cabmynew.mddkacwb.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                      }
                  </Select>
                </li>
              </ul>
            </div>
            <div className="cwbadd5">
              <h4>箱型：</h4>
              <div className="cwbadd9">
                <div className="cwbadd10">
                  <div className="cwbadd11">
                    <h6>20GP</h6>
                    <Input
                      style={{ width: 100 }}
                      placeholder="个数"
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({GP20:e.target.value})}}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.curr}
                      className="cwbadd13"
                      onChange={(v)=>{return this.setState({curr:v})}}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder={djye}
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({GP20Fee:e.target.value})}}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.currCos}
                      className="cwbadd13"
                      onChange={(v)=>{return this.setState({currCos:v})}}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder="运价总价"
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({GP20Cos:e.target.value})}}
                    />
                  </div>
                </div>
                <div className="cwbadd10">
                  <div className="cwbadd11">
                    <h6>40GP</h6>
                    <Input
                      style={{ width: 100 }}
                      placeholder="个数"
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({GP40:e.target.value})}}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.curr}
                      className="cwbadd13"
                      onChange={(v)=>{return this.setState({curr:v})}}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder={djye}
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({GP40Fee:e.target.value})}}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.currCos}
                      className="cwbadd13"
                      onChange={(v)=>{return this.setState({currCos:v})}}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder="运价总价"
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({GP40Cos:e.target.value})}}
                    />
                  </div>
                </div>
                <div className="cwbadd10">
                  <div className="cwbadd11">
                    <h6>40NOR</h6>
                    <Input
                      style={{ width: 100 }}
                      placeholder="个数"
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({NOR40:e.target.value})}}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.curr}
                      className="cwbadd13"
                      onChange={(v)=>{return this.setState({curr:v})}}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder={djye}
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({NOR40Fee:e.target.value})}}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.currCos}
                      className="cwbadd13"
                      onChange={(v)=>{return this.setState({currCos:v})}}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder="运价总价"
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({NOR40Cos:e.target.value})}}
                    />
                  </div>
                </div>
                <div className="cwbadd10">
                  <div className="cwbadd11">
                    <h6>40HQ</h6>
                    <Input
                      style={{ width: 100 }}
                      placeholder="个数"
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({HQ40:e.target.value})}}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.curr}
                      className="cwbadd13"
                      onChange={(v)=>{return this.setState({curr:v})}}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder={djye}
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({HQ40Fee:e.target.value})}}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.currCos}
                      className="cwbadd13"
                      onChange={(v)=>{return this.setState({currCos:v})}}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder="运价总价"
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({HQ40Cos:e.target.value})}}
                    />
                  </div>
                </div>
                <div className="cwbadd10">
                  <div className="cwbadd11">
                    <h6>45HQ</h6>
                    <Input
                      style={{ width: 100 }}
                      placeholder="个数"
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({HQ45:e.target.value})}}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.curr}
                      className="cwbadd13"
                      onChange={(v)=>{return this.setState({curr:v})}}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder={djye}
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({HQ45Fee:e.target.value})}}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.currCos}
                      className="cwbadd13"
                      onChange={(v)=>{return this.setState({currCos:v})}}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder="运价总价"
                      className="cwbadd12"
                      onChange={(e)=>{return this.setState({HQ45Cos:e.target.value})}}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="cwbadd6">
              <ul>
                <li className="cwbadd17">
                  <h5>求舱履约：</h5>
                  <Select showSearch
                          value={this.state.reqPref}
                          className="cwbadd15"
                          optionFilterProp="children"
                          notFoundContent="无法找到"
                          placeholder="请选择"
                          onChange={(v)=>{return this.setState({reqPref:v})}}
                  >
                    <Option key='货物进仓'>货物进仓</Option>
                    <Option key='货物备妥'>货物备妥</Option>
                    <Option key='货物进港'>货物进港</Option>
                    <Option key='货物报关放行'>货物报关放行</Option>
                  </Select>
                </li>
                <li className="cwbadd17">
                  <h5>供舱履约：</h5>
                  <Select showSearch
                          value={this.state.resPref}
                          className="cwbadd15"
                          optionFilterProp="children"
                          notFoundContent="无法找到"
                          placeholder="请选择"
                          onChange={(v)=>{return this.setState({resPref:v})}}
                  >
                    <Option key='S/O签发'>S/O签发</Option>
                    <Option key='放箱签发'>放箱签发</Option>
                    <Option key='货物上运输工具'>货物上运输工具</Option>
                  </Select>
                </li>
                <li className="cwbadd17">
                  <h5>运价有效期：</h5>
                  <DatePicker
                    showTime
                    style={{ width: 200 , marginTop:10 }}
                    format="yyyy.MM.dd HH:mm:ss"
                    placeholder="运价有效期"
                    value={this.state.expiTime}
                    onChange={(v)=>{return this.setState({expiTime:v})}}
                  />
                </li>
                <li className="cwbadd17">
                  <h5>最晚退关时间：</h5>
                  <DatePicker
                    showTime
                    style={{ width: 200 , marginTop:10 }}
                    format="yyyy.MM.dd HH:mm:ss"
                    placeholder="最晚退关时间"
                    value={this.state.lastShutTime}
                    onChange={(v)=>{return this.setState({lastShutTime:v})}}
                  />
                </li>
                <li className="cwbadd17">
                  <h5>截关时间：</h5>
                  <DatePicker
                    showTime
                    style={{ width: 200 , marginTop:10 }}
                    format="yyyy.MM.dd HH:mm:ss"
                    placeholder="截关时间"
                    value={this.state.closTime}
                    onChange={(v)=>{return this.setState({closTime:v})}}
                  />
                </li>
                <li className="cwbadd17">
                  <h5>开航时间：</h5>
                  <DatePicker
                    style={{ width: 200 , marginTop:10 }}
                    format="yyyy.MM.dd"
                    placeholder="开航时间"
                    value={this.state.sailTime}
                    onChange={(v)=>{return this.setState({sailTime:v})}}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}