/**
 * Created by Chen on 2017/12/13.
 */
import React, { Component } from 'react';
import { Input, DatePicker, Select, message, Checkbox } from 'antd';
import moment from 'moment';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout, timeoutm;

export default class Cwbadfr extends Component {
  constructor(props) {
    super(props);
    this.handfb = this.handfb.bind(this);
    this.handgb = this.handgb.bind(this);
    this.handcn = this.handcn.bind(this);
    this.handcns = this.handcns.bind(this);
    this.handcm = this.handcm.bind(this);
    this.handcms = this.handcms.bind(this);
    this.handfilts = this.handfilts.bind(this);
    this.showName = this.showName.bind(this);
    this.state = {
      userName: sessionStorage.getItem("SESSIONUSERACC"),
      token: sessionStorage.getItem("SESSIONTOKEN"),
      currCos: '2',
      curr: '1',
      cys: '',
      qyd: '',
      mdd: '',
      qydn: '',
      mddn: '',
      FR20: '',
      FR20Fee: '',
      FR20Cos: '',
      FR40: '',
      FR40Fee: '',
      FR40Cos: '',
      reqPref: '',
      resPref: '',
      expiTime: null,
      lastShutTime: null,
      sailTime: null,
      closTime: null,
      voyage: '',
      trans: '',
      leng: '',
      widt: '',
      high: '',
      label:'',
      checked: false
    }
  }
  handfilts(inputValue, option) {
    if (typeof (option.props.children) == 'object') {
      let str = '';
      for (let v of option.props.children) {
        str += v;
      }
      if (str.indexOf(inputValue.toLocaleUpperCase()) < 0) {
        return false;
      } else {
        return true;
      }
    } else {
      if (option.props.children.indexOf(inputValue.toLocaleUpperCase()) < 0) {
        return false;
      } else {
        return true;
      }
    }
  }
  handcn(v) {
    this.setState({
      qydn: v
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv = this.props.indexs;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if (v) {
        this.props.actions.getqydkacwb(userName, token, serv, v);
      }
    }, 300);
  }
  handcns(v, o) {
    let qyd = o.props.date;
    this.setState({ qyd: qyd });
  }
  handcm(v) {
    this.setState({
      mddn: v,
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv = this.props.indexs;
    if (timeoutm) {
      clearTimeout(timeoutm);
      timeoutm = null;
    }
    timeoutm = setTimeout(() => {
      if (v) {
        this.props.actions.getmddkacwb(userName, token, serv, v);
      }
    }, 300);
  }
  handcms(v, o) {
    let mdd = o.props.date;
    this.setState({ mdd: mdd });
  }
  componentDidMount() {
    this.props.actions.getcarrscwb(this.state.userName, this.state.token, this.props.indexs);//根据服务获取承运商
  }
  handfb() {
    //立即发布
    let userName = this.state.userName;
    let token = this.state.token;
    let serv = this.props.indexs;
    let carr = this.state.cys;
    let depaPort = this.state.qyd;
    let destPort = this.state.mdd;
    let curr = this.state.curr;
    let currCos = this.state.currCos;//总价币种
    let resPref = this.state.resPref;
    let reqPref = this.state.reqPref;
    let closTime = this.state.closTime == null ? '' : moment(this.state.closTime).format('YYYY.MM.DD HH:mm:ss');
    let sailTime = this.state.sailTime == null ? '' : moment(this.state.sailTime).format('YYYY.MM.DD HH:mm:ss');
    let expiTime = this.state.expiTime == null ? '' : moment(this.state.expiTime).format('YYYY.MM.DD HH:mm:ss');
    let lastShutTime = this.state.lastShutTime == null ? '' : moment(this.state.lastShutTime).format('YYYY.MM.DD HH:mm:ss');
    let FR20 = this.state.FR20;
    let FR20Fee = this.state.FR20Fee;
    let FR20Cos = this.state.FR20Cos;
    let FR40 = this.state.FR40;
    let FR40Fee = this.state.FR40Fee;
    let FR40Cos = this.state.FR40Cos;
    let leng = this.state.leng;
    let widt = this.state.widt;
    let high = this.state.high;
    let voyage = this.state.voyage;
    let trans = this.state.trans;
    let label = this.state.label;
    let showname;
    if (this.state.checked) {
      showname = 0;
    } else {
      showname = 1;
    }
    let FR20TF, FR40TF;

    if (FR20 != "" || FR20Fee != "" || FR20Cos != "") {
      FR20TF = false
    } else {
      FR20TF = true;
    }

    if (FR40 != "" || FR40Fee != "" || FR40Cos != "") {
      FR40TF = false
    } else {
      FR40TF = true;
    }

    if (carr == "") {
      message.error('承运商不能为空');
    } else if (depaPort == "") {
      message.error('起运地不能为空');
    } else if (destPort == "") {
      message.error('目的地不能为空');
    } else if (reqPref == "") {
      message.error('求舱履约不能为空');
    } else if (resPref == "") {
      message.error('供舱履约不能为空');
    } else if (expiTime == "") {
      message.error('运价有效期：不能为空');
    } else if (lastShutTime == "") {
      message.error('最晚退关时间不能为空');
    } else if (closTime == "") {
      message.error('截关时间不能为空');
    } else if (sailTime == "") {
      message.error('开航时间不能为空');
    } else if (high == "") {
      message.error('限高不能为空');
    } else if (widt == "") {
      message.error('限宽不能为空');
    } else if (leng == "") {
      message.error('限长不能为空');
    } else if (FR20TF && FR40TF) {
      message.error('至少填写一个箱型');
    } else {
      this.props.actions.postcwbfbfr(userName, token, serv, carr, depaPort, destPort, curr, resPref, reqPref, closTime, sailTime, expiTime, lastShutTime, FR20, FR20Fee, FR20Cos, FR40, FR40Fee, FR40Cos, leng, widt, high, currCos, showname, voyage, trans,label);
      this.props.fonClose(false, '');
    }
    // this.props.actions.postcwbfbfr(userName,token,serv,carr,depaPort,destPort,curr,resPref,reqPref,closTime,sailTime,expiTime,lastShutTime,FR20,FR20Fee,FR20Cos,FR40,FR40Fee,FR40Cos,leng,widt,high,currCos,showname,voyage,trans);
    // this.props.fonClose(false,'');
  }
  handgb() {
    //关闭
    this.props.fonClose(false, '');
  }
  showName(e) {
    this.setState({
      checked: e.target.checked
    })
  }
  render() {
    // let djzjye = "充值余额" + this.props.cabmynew.residual;
    // let djzjyeusd = "充值余额" + this.props.cabmynew.resiUsd;
    // let djye = this.state.curr == '1' ? djzjye : djzjyeusd;
    let djzjye = this.props.cabmynew.residual;
    let djzjyeusd =  this.props.cabmynew.resiUsd;
    let djye = '所压定金';
    let sydj = this.state.curr == '1' ? djzjye : djzjyeusd;
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
                  <h4>隐私：</h4>
                  <p>
                    <Checkbox checked={this.state.checked} onChange={this.showName} /> &nbsp;&nbsp;购买后才能查看我的信息
                  </p>
                </li>
                <li className="cwbadd16">
                  <h4><span className="thered">*</span>承运商：</h4>
                  <Select showSearch
                    value={this.state.cys}
                    className="cwbadd14"
                    filterOption={this.handfilts}
                    notFoundContent="无法找到"
                    placeholder="服务"
                    onChange={(v) => { return this.setState({ cys: v }) }}
                  >
                    {
                      this.props.cabmynew.carrscwb.map(s => <Option key={s.carr}>{s.carrName}</Option>)
                    }
                  </Select>
                </li>
                <li className="cwbadd16">
                  <h4><span className="thered">*</span>起运地：</h4>
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
                      this.props.cabmynew.qydkacwb.map(s => <Option key={s.port} date={s.port} value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                    }
                  </Select>
                </li>
                <li className="cwbadd16">
                  <h4><span className="thered">*</span>目的地：</h4>
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
                      this.props.cabmynew.mddkacwb.map(s => <Option key={s.port} date={s.port} value={s.portName + '/' + s.chsName}>{s.portName + '/' + s.chsName}</Option>)
                    }
                  </Select>
                </li>
                <li className="cwbadd16">
                  <h4>余额：</h4>
                  {/* <Input
                      style={{ width: 100 }}
                      placeholder={sydj}
                      className="cwbadd12"
                      disabled='true'
                    /> */}
                    <div className="cwbadd12">{sydj}</div>
                </li>
              </ul>
            </div>
            <div className="cwbadd20">
              <h4><span className="thered">*</span>箱型（至少填写一个）：</h4>
              <div className="cwbadd21">
                <div className="cwbadd10">
                  <div className="cwbadd11">
                    <h6>20FR</h6>
                    <Input
                      style={{ width: 100 }}
                      placeholder="个数"
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ FR20: e.target.value }) }}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.curr}
                      className="cwbadd13"
                      onChange={(v) => { return this.setState({ curr: v }) }}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder={djye}
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ FR20Fee: e.target.value }) }}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.currCos}
                      className="cwbadd13"
                      onChange={(v) => { return this.setState({ currCos: v }) }}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder="运价总价"
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ FR20Cos: e.target.value }) }}
                    />
                  </div>
                </div>
                <div className="cwbadd10">
                  <div className="cwbadd11">
                    <h6>40FR</h6>
                    <Input
                      style={{ width: 100 }}
                      placeholder="个数"
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ FR40: e.target.value }) }}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.curr}
                      className="cwbadd13"
                      onChange={(v) => { return this.setState({ curr: v }) }}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder={djye}
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ FR40Fee: e.target.value }) }}
                    />
                  </div>
                  <div className="cwbadd11">
                    <Select
                      value={this.state.currCos}
                      className="cwbadd13"
                      onChange={(v) => { return this.setState({ currCos: v }) }}
                    >
                      <Option key='1' value="2">USD</Option>
                      <Option key='2' value="1">CNY</Option>
                    </Select>
                    <Input
                      style={{ width: 100 }}
                      placeholder="运价总价"
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ FR40Cos: e.target.value }) }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="cwbadd22">
              <div className="cwbadd23">
                <h4><span className="thered">*</span>限长：</h4>
                <Input
                  style={{ width: 100 }}
                  placeholder="长"
                  className="cwbadd12"
                  onChange={(e) => { return this.setState({ leng: e.target.value }) }}
                />
                <p>m</p>
              </div>
              <div className="cwbadd23">
                <h4><span className="thered">*</span>限宽：</h4>
                <Input
                  style={{ width: 100 }}
                  placeholder="宽"
                  className="cwbadd12"
                  onChange={(e) => { return this.setState({ widt: e.target.value }) }}
                />
                <p>m</p>
              </div>
              <div className="cwbadd23">
                <h4><span className="thered">*</span>限高：</h4>
                <Input
                  style={{ width: 100 }}
                  placeholder="高"
                  className="cwbadd12"
                  onChange={(e) => { return this.setState({ high: e.target.value }) }}
                />
                <p>m</p>
              </div>
            </div>
            <div className="cwbadd6">
              <ul>

                <li className="cwbadd17">
                  <h5><span className="thered">*</span>求舱履约：</h5>
                  <Select showSearch
                    value={this.state.reqPref}
                    className="cwbadd15"
                    optionFilterProp="children"
                    notFoundContent="无法找到"
                    placeholder="请选择"
                    onChange={(v) => { return this.setState({ reqPref: v }) }}
                  >
                    <Option key='货物进仓'>货物进仓</Option>
                    <Option key='货物备妥'>货物备妥</Option>
                    <Option key='货物进港'>货物进港</Option>
                    <Option key='货物报关放行'>货物报关放行</Option>
                  </Select>
                </li>
                <li className="cwbadd17">
                  <h5><span className="thered">*</span>供舱履约：</h5>
                  <Select showSearch
                    value={this.state.resPref}
                    className="cwbadd15"
                    optionFilterProp="children"
                    notFoundContent="无法找到"
                    placeholder="请选择"
                    onChange={(v) => { return this.setState({ resPref: v }) }}
                  >
                    <Option key='S/O签发'>S/O签发</Option>
                    <Option key='放箱签发'>放箱签发</Option>
                    <Option key='货物上运输工具'>货物上运输工具</Option>
                  </Select>
                </li>
                <li className="cwbadd17">
                  <h5><span className="thered">*</span>运价有效期：</h5>
                  <DatePicker
                    showTime
                    style={{ width: 200, marginTop: 10 }}
                    format="yyyy.MM.dd HH:mm:ss"
                    placeholder="运价有效期"
                    value={this.state.expiTime}
                    onChange={(v) => { return this.setState({ expiTime: v }) }}
                  />
                </li>
                <li className="cwbadd17">
                  <h5><span className="thered">*</span>最晚退关时间：</h5>
                  <DatePicker
                    showTime
                    style={{ width: 200, marginTop: 10 }}
                    format="yyyy.MM.dd HH:mm:ss"
                    placeholder="最晚退关时间"
                    value={this.state.lastShutTime}
                    onChange={(v) => { return this.setState({ lastShutTime: v }) }}
                  />
                </li>
                <li className="cwbadd17">
                  <h5><span className="thered">*</span>截关时间：</h5>
                  <DatePicker
                    showTime
                    style={{ width: 200, marginTop: 10 }}
                    format="yyyy.MM.dd HH:mm:ss"
                    placeholder="截关时间"
                    value={this.state.closTime}
                    onChange={(v) => { return this.setState({ closTime: v }) }}
                  />
                </li>
                <li className="cwbadd17">
                  <h5><span className="thered">*</span>开航时间：</h5>
                  <DatePicker
                    style={{ width: 200, marginTop: 10 }}
                    format="yyyy.MM.dd"
                    placeholder="开航时间"
                    value={this.state.sailTime}
                    onChange={(v) => { return this.setState({ sailTime: v }) }}
                  />
                </li>
                <li className="cwbadd17">
                  <h5>运输工具：</h5>
                  <Input
                    style={{ width: 200 }}
                    placeholder="请输入运输方式"
                    className="cwbadd12"
                    onChange={(e) => { return this.setState({ trans: e.target.value }) }}
                  />
                </li>
                <li className="cwbadd17">
                  <h5>航次：</h5>
                  <Input
                    style={{ width: 200 }}
                    placeholder="请输入航次"
                    className="cwbadd12"
                    onChange={(e) => { return this.setState({ voyage: e.target.value }) }}
                  />
                </li>
                <li className="cwbadd171">
                  <h5>备注：</h5>
                  <Input
                    style={{ width: 350 }}
                    placeholder="请输入备注"
                    className="cwbadd12"
                    onChange={(e) => { return this.setState({ label: e.target.value }) }}
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