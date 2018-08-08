/*
 * @Author: sepgit 
 * @Date: 2018-07-26 14:26:25 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-30 16:29:22
 */

import React, { Component } from 'react';
import { Input, DatePicker, Select, message, Checkbox } from 'antd';
import moment from 'moment';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout, timeoutm;

export default class Copyhg extends Component {
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
      cysID: this.props.cabmynew.cabDispdetail.carr,//
      cysShowName:this.props.cabmynew.cabDispdetail.carrName,//
      qydID: this.props.cabmynew.cabDispdetail.depaPort,//起运地ID
      mddID: this.props.cabmynew.cabDispdetail.destPort,//目的地ID
      qydName: this.props.cabmynew.cabDispdetail.depaPortName,
      mddName: this.props.cabmynew.cabDispdetail.destPortName,
      GP20: this.props.cabmynew.cabDispdetail.GP20,
      GP20Fee: this.props.cabmynew.cabDispdetail.GP20Fee,
      GP20Cos: this.props.cabmynew.cabDispdetail.GP20Cos,
      GP40: this.props.cabmynew.cabDispdetail.GP40,
      GP40Fee: this.props.cabmynew.cabDispdetail.GP40Fee,
      GP40Cos: this.props.cabmynew.cabDispdetail.GP40Cos,
      HQ40: this.props.cabmynew.cabDispdetail.HQ40,
      HQ40Fee: this.props.cabmynew.cabDispdetail.HQ40Fee,
      HQ40Cos: this.props.cabmynew.cabDispdetail.HQ40Cos,
      HQ45: this.props.cabmynew.cabDispdetail.HQ45,
      HQ45Fee: this.props.cabmynew.cabDispdetail.HQ45Fee,
      HQ45Cos: this.props.cabmynew.cabDispdetail.HQ45Cos,
      reqPref: this.props.cabmynew.cabDispdetail.reqPref,
      resPref: this.props.cabmynew.cabDispdetail.resPref,
      expiTime: moment(this.props.cabmynew.cabDispdetail.expiTime).format('YYYY.MM.DD HH:mm:ss'),
      lastShutTime: moment(this.props.cabmynew.cabDispdetail.lastShutTime).format('YYYY.MM.DD HH:mm:ss'),
      sailTime: moment(this.props.cabmynew.cabDispdetail.sailTime).format('YYYY.MM.DD'),
      closTime: moment(this.props.cabmynew.cabDispdetail.closTime).format('YYYY.MM.DD HH:mm:ss'),
      voyage: this.props.cabmynew.cabDispdetail.voyage,
      trans: this.props.cabmynew.cabDispdetail.trans,
      label:this.props.cabmynew.cabDispdetail.label,
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
      qydName: v
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
    let qydID = o.props.date;
    this.setState({ qydID: qydID });
  }
  handcm(v) {
    this.setState({
      mddName: v,
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
    let mddID = o.props.date;
    this.setState({ mddID: mddID });
  }
  componentDidMount() {
    this.props.actions.getcarrscwb(this.state.userName, this.state.token, this.props.indexs);//根据服务获取承运商
  }
  handfb() {
    //立即发布
    let userName = this.state.userName;
    let token = this.state.token;
    let serv = this.props.indexs;
    let carr =this.props.cabmynew.cabDispdetail.carr != this.state.cysID ? this.state.cysID:this.props.cabmynew.cabDispdetail.carr;;
    let depaPort = this.props.cabmynew.cabDispdetail.depaPort != this.state.qydID ? this.state.qydID:this.props.cabmynew.cabDispdetail.depaPort;
    let destPort =this.props.cabmynew.cabDispdetail.destPort!= this.state.mddID ? this.state.mddID:this.props.cabmynew.cabDispdetail.destPort;
    let curr =this.props.cabmynew.cabDispdetail.curr != this.state.curr ? this.state.curr:this.props.cabmynew.cabDispdetail.curr;
    let currCos =this.props.cabmynew.cabDispdetail.currCos  != this.state.currCos ? this.state.currCos:this.props.cabmynew.cabDispdetail.currCos;//总价币种
    let resPref =this.props.cabmynew.cabDispdetail.resPref != this.state.resPref ? this.state.resPref:this.props.cabmynew.cabDispdetail.resPref;
    let reqPref =this.props.cabmynew.cabDispdetail.reqPref != this.state.reqPref ? this.state.reqPref:this.props.cabmynew.cabDispdetail.reqPref;
    let closTime =moment(this.props.cabmynew.cabDispdetail.closTime).format('YYYY.MM.DD HH:mm:ss') != moment(this.state.closTime).format('YYYY.MM.DD HH:mm:ss') ? moment(this.state.closTime).format('YYYY.MM.DD HH:mm:ss') : moment(this.props.cabmynew.cabDispdetail.closTime).format('YYYY.MM.DD HH:mm:ss');
    let sailTime =moment(this.props.cabmynew.cabDispdetail.sailTime).format('YYYY.MM.DD') != moment(this.state.sailTime).format('YYYY.MM.DD') ? moment(this.state.sailTime).format('YYYY.MM.DD') : moment(this.props.cabmynew.cabDispdetail.sailTime).format('YYYY.MM.DD');
    let expiTime =moment(this.props.cabmynew.cabDispdetail.expiTime).format('YYYY.MM.DD HH:mm:ss') != moment(this.state.expiTime).format('YYYY.MM.DD HH:mm:ss') ? moment(this.state.expiTime).format('YYYY.MM.DD HH:mm:ss') : moment(this.props.cabmynew.cabDispdetail.expiTime).format('YYYY.MM.DD HH:mm:ss');
    let lastShutTime =moment(this.props.cabmynew.cabDispdetail.lastShutTime).format('YYYY.MM.DD HH:mm:ss') != moment(this.state.lastShutTime).format('YYYY.MM.DD HH:mm:ss') ? moment(this.state.lastShutTime).format('YYYY.MM.DD HH:mm:ss') : moment(this.props.cabmynew.cabDispdetail.lastShutTime).format('YYYY.MM.DD HH:mm:ss');
    let GP20 = this.props.cabmynew.cabDispdetail.GP20 != this.state.GP20 ? this.state.GP20:this.props.cabmynew.cabDispdetail.GP20;
    let GP20Fee =this.props.cabmynew.cabDispdetail.GP20Fee!= this.state.GP20Fee ? this.state.GP20Fee:this.props.cabmynew.cabDispdetail.GP20Fee;
    let GP20Cos =this.props.cabmynew.cabDispdetail.GP20Cos!= this.state.GP20Cos ? this.state.GP20Cos:this.props.cabmynew.cabDispdetail.GP20Cos;
    let GP40 =this.props.cabmynew.cabDispdetail.GP40!= this.state.GP40 ? this.state.GP40:this.props.cabmynew.cabDispdetail.GP40;
    let GP40Fee =this.props.cabmynew.cabDispdetail.GP40Fee!= this.state.GP40Fee ? this.state.GP40Fee:this.props.cabmynew.cabDispdetail.GP40Fee;
    let GP40Cos =this.props.cabmynew.cabDispdetail.GP40Cos!= this.state.GP40Cos ? this.state.GP40Cos:this.props.cabmynew.cabDispdetail.GP40Cos;
    let HQ40 =this.props.cabmynew.cabDispdetail.HQ40!= this.state.HQ40 ? this.state.HQ40:this.props.cabmynew.cabDispdetail.HQ40;
    let HQ40Fee =this.props.cabmynew.cabDispdetail.HQ40Fee!= this.state.HQ40Fee ? this.state.HQ40Fee:this.props.cabmynew.cabDispdetail.HQ40Fee;
    let HQ40Cos =this.props.cabmynew.cabDispdetail.HQ40Cos!= this.state.HQ40Cos ? this.state.HQ40Cos:this.props.cabmynew.cabDispdetail.HQ40Cos;
    let HQ45 =this.props.cabmynew.cabDispdetail.HQ45!= this.state.HQ45 ? this.state.HQ45:this.props.cabmynew.cabDispdetail.HQ45;
    let HQ45Fee =this.props.cabmynew.cabDispdetail.HQ45Fee!= this.state.HQ45Fee ? this.state.HQ45Fee:this.props.cabmynew.cabDispdetail.HQ45Fee;
    let HQ45Cos =this.props.cabmynew.cabDispdetail.HQ45Cos!= this.state.HQ45Cos ? this.state.HQ45Cos:this.props.cabmynew.cabDispdetail.HQ45Cos;
    let voyage =this.props.cabmynew.cabDispdetail.voyage!= this.state.voyage ? this.state.voyage:this.props.cabmynew.cabDispdetail.voyage;
    let trans =this.props.cabmynew.cabDispdetail.trans!= this.state.trans ? this.state.trans:this.props.cabmynew.cabDispdetail.trans;
    let label =this.props.cabmynew.cabDispdetail.label!= this.state.label ? this.state.label:this.props.cabmynew.cabDispdetail.label;
    let showname;
    if (this.state.checked) {
      showname = 0;
    } else {
      showname = 1;
    }
    let GP20TF, GP40TF, HQ40TF, HQ45TF;
    if (GP20 != "" || GP20Fee != "" || GP20Cos != "") {
      GP20TF = false
    } else {
      GP20TF = true;
    }

    if (GP40 != "" || GP40Fee != "" || GP40Cos != "") {
      GP40TF = false
    } else {
      GP40TF = true;
    }

    if (HQ40 != "" || HQ40Fee != "" || HQ40Cos != "") {
      HQ40TF = false
    } else {
      HQ40TF = true;
    }

    if (HQ45 != "" || HQ45Fee != "" || HQ45Cos != "") {
      HQ45TF = false
    } else {
      HQ45TF = true;
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
    } else if (GP20TF && GP40TF && HQ40TF && HQ45TF) {
      message.error('至少填写一个箱型');
    } else {
      this.props.actions.postcwbfbhg(userName, token, serv, carr, depaPort, destPort, curr, resPref, reqPref, closTime, sailTime, expiTime, lastShutTime, GP20, GP20Fee, GP20Cos, GP40, GP40Fee, GP40Cos, HQ40, HQ40Fee, HQ40Cos, HQ45, HQ45Fee, HQ45Cos, currCos, showname, voyage, trans,label);
      this.props.fonClose(false, '');
      let cabDisp=this.props.cabDisp;
     
      this.props.actions.getcabDisp(userName,token,cabDisp);
    }
    // this.props.actions.postcwbfbhg(userName,token,serv,carr,depaPort,destPort,curr,resPref,reqPref,closTime,sailTime,expiTime,lastShutTime,GP20,GP20Fee,GP20Cos,GP40,GP40Fee,GP40Cos,HQ40,HQ40Fee,HQ40Cos,HQ45,HQ45Fee,HQ45Cos,currCos,showname,voyage,trans);
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
    if (this.props.cabmynew.cabDispdetail.cabDisp) {
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
                      defaultValue={this.state.cysShowName}
                      className="cwbadd14"
                      filterOption={this.handfilts}
                      // notFoundContent="无法找到"
                      // placeholder={this.state.cysShowName}
                      onChange={(v) => { return this.setState({ cysID: v }) }}
                    >
                      {
                        this.props.cabmynew.carrscwb.map(s => <Option key={s.carr}>{s.carrName}</Option>)
                      }
                    </Select>
                  </li>
                  <li className="cwbadd16">
                    <h4><span className="thered">*</span>起运地：</h4>
                    <Select combobox
                      defaultValue={this.state.qydName}
                      className="cwbadd14"
                      notFoundContent=""
                      defaultActiveFirstOption={false}
                      showArrow={false}
                      filterOption={false}
                      // placeholder={this.state.qydName}
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
                      value={this.state.mddName}
                      className="cwbadd14"
                      notFoundContent=""
                      defaultActiveFirstOption={false}
                      showArrow={false}
                      filterOption={false}
                      // placeholder={this.props.cabmynew.cabDispdetail.destPortName}
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
            <div className="cwbadd5">
              <h4><span className="thered">*</span>箱型（至少填写一个）：</h4>
              <div className="cwbadd9">
                <div className="cwbadd10">
                  <div className="cwbadd11">
                  <h6>20GP</h6>
                      <Input
                        style={{ width: 100 }}
                        // placeholder={this.state.GP20}
                        value={this.state.GP20}
                        className="cwbadd12"
                        onChange={(e) => { return this.setState({ GP20: e.target.value }) }}
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
                        // placeholder={sydj}
                        value={this.state.GP20Fee}
                        className="cwbadd12"
                        onChange={(e) => { return this.setState({ GP20Fee: e.target.value }) }}
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
                        // placeholder="运价总价"
                        value={this.state.GP20Cos}
                        className="cwbadd12"
                        onChange={(e) => { return this.setState({ GP20Cos: e.target.value }) }}
                      />
                  </div>
                </div>
                <div className="cwbadd10">
                  <div className="cwbadd11">
                    <h6>40GP</h6>
                    <Input
                      style={{ width: 100 }}
                      // placeholder="个数"
                      value={this.state.GP40}
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ GP40: e.target.value }) }}
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
                      // placeholder={djye}
                      value={this.state.GP40Fee}
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ GP40Fee: e.target.value }) }}
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
                      // placeholder="运价总价"
                      value={this.state.GP40Cos}
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ GP40Cos: e.target.value }) }}
                    />
                  </div>
                </div>
                <div className="cwbadd10">
                  <div className="cwbadd11">
                    <h6>40HQ</h6>
                    <Input
                      style={{ width: 100 }}
                      // placeholder="个数"
                      value={this.state.HQ40}
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ HQ40: e.target.value }) }}
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
                      // placeholder={djye}
                      value={this.state.HQ40Fee}
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ HQ40Fee: e.target.value }) }}
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
                      // placeholder="运价总价"
                      value={this.state.HQ40Cos}
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ HQ40Cos: e.target.value }) }}
                    />
                  </div>
                </div>
                <div className="cwbadd10">
                  <div className="cwbadd11">
                    <h6>45HQ</h6>
                    <Input
                      style={{ width: 100 }}
                      // placeholder="个数"
                      value={this.state.HQ45}
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ HQ45: e.target.value }) }}
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
                      // placeholder={djye}
                      value={this.state.HQ45Fee}
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ HQ45Fee: e.target.value }) }}
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
                      // placeholder="运价总价"
                      value={this.state.HQ45Cos}
                      className="cwbadd12"
                      onChange={(e) => { return this.setState({ HQ45Cos: e.target.value }) }}
                    />
                  </div>
                </div>
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
                    // placeholder="开航时间"
                    value={this.state.sailTime}
                    onChange={(v) => { return this.setState({ sailTime: v }) }}
                  />
                </li>
                <li className="cwbadd17">
                  <h5>运输工具：</h5>
                  <Input
                    style={{ width: 200 }}
                    // placeholder="请输入运输工具"
                    value={this.state.trans}
                    className="cwbadd12"
                    onChange={(e) => { return this.setState({ trans: e.target.value }) }}
                  />
                </li>
                <li className="cwbadd17">
                  <h5>航次：</h5>
                  <Input
                    style={{ width: 200 }}
                    // placeholder="请输入航次"
                    value={this.state.voyage}
                    className="cwbadd12"
                    onChange={(e) => { return this.setState({ voyage: e.target.value }) }}
                  />
                </li>
                <li className="cwbadd171">
                  <h5>备注：</h5>
                  <Input
                    style={{ width: 350 }}
                    // placeholder="请输入备注"
                    value={this.state.label}
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
}