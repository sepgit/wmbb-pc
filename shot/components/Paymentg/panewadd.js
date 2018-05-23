/**
 * Created by Zing on 2016/11/22.
 */
import React,{Component} from 'react';
import {Input,message,DatePicker,Popover,Select,Modal} from 'antd';
import moment from 'moment';
import Paylyzb from './palyzb';
import Pancomp from './pancomp';
const Option = Select.Option;
const confirm = Modal.confirm;

export default class Panewadd extends Component {
  constructor(props) {
    super(props);
    this.handss=this.handss.bind(this);
    this.handc=this.handc.bind(this);
    this.handfs=this.handfs.bind(this);
    this.handcz=this.handcz.bind(this);
    this.handykje=this.handykje.bind(this);
    this.handzb=this.handzb.bind(this);
    this.handzbc=this.handzbc.bind(this);
    this.handlvzb=this.handlvzb.bind(this);
    this.disDa=this.disDa.bind(this);
    this.handse=this.handse.bind(this);
    this.handssc=this.handssc.bind(this);
    this.handarc=this.handarc.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      zh:'',
      fxm:'',
      fgs:'',
      fhy:'',
      fsj:'',
      xyye:'下拉显示授信余额',
      ydh:'',
      ysgj:'',
      hc:'',
      ykje:'',
      xh:'',
      fkqx:moment().format('YYYY-MM-DD HH:mm'),
      fkid:-1,
      iszb:false,
      lvzb:'',
      enab:2,
      resiEnab:2,
      fcomp:0,
      xyyev:0,
      bz:'',
      iscp:false
    }
  }
  handse(v,e){
    let xyyev;
    xyyev=e.props.date.split('-');
    this.setState({
      bz:xyyev[1],
      xyyev:xyyev[0]
    });
  }
  disDa(c){
    return c && c.getTime() > Date.parse(moment().add(3,'M'));
  }
  handzb(){
    this.setState({
      iszb:true
    })
  }
  handzbc(){
    this.setState({
      iszb:false
    })
  }
  handlvzb(v){
    this.setState({
      lvzb:v
    })
  }
  handykje(e){
    const { value } = e.target;
    const reg = /^[1-9]\d*|0$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' ) {
      this.setState({ykje:value});
    }
  }
  handss(){
    let userName = this.state.userName;
    let token = this.state.token;
    //获取最近付款人列表
    this.props.actions.getzjusrf(userName,token);
    this.setState({
      iscp:true
    });
  }
  handssc(){
    this.setState({
      iscp:false
    });
  }
  handarc(v){
    let privs=this.props.pays.privs.paym;
    let comps=this.props.pays.payr[0].comp;
    if(comps>0){
      if(privs!=1){
        message.error("该付款人还没权限付款，请让该付款人的公司管理员为其开通权限！");
      }
    }
    if(this.props.pays.payr.length>0){
      this.setState({
        fkid:this.props.pays.payr[0].user,
        fxm: this.props.pays.payr[0].name,
        fgs: this.props.pays.payr[0].compAlia,
        fhy: this.props.pays.payr[0].induName,
        fsj: this.props.pays.payr[0].mobi,
        enab:this.props.pays.enab,
        resiEnab:this.props.pays.resiEnab,
        zh:v
      });
    }else{
      this.setState({
        fkid:-1,
        fxm: '',
        fgs: '',
        fhy: '',
        fsj: '',
        enab:2,
        resiEnab:2,
        zh:''
      });
    }
  }
  handfs(){
    
    let userName=this.state.userName;
    let token=this.state.token;
    let payUser=this.state.fkid;
    let serv=this.props.indexs;
    let trans=this.state.ysgj;
    let voyage=this.state.hc;
    let billNum=this.state.ydh;
    let cartNum=this.state.xh;
    let depo=parseInt(this.state.ykje);
    let expiTime=moment(this.state.fkqx).format('YYYY-MM-DD HH:mm');
    let guarTarget=this.state.lvzb;
    let enab=this.state.enab;
    let resiEnab=this.state.resiEnab;
    let privs=this.props.pays.privs.paym;
    let comps=this.props.pays.payr[0].comp;
    let zdje;
    if(this.state.bz=='$'){
      zdje=parseInt(this.props.text.user.maxMargUsd);
    }else{
      zdje=parseInt(this.props.text.user.maxMarg);
    }
    let xyye=this.state.xyye;
    let xyyev=parseInt(this.state.xyyev);
    if(comps>0){
      if(privs==1){
        if(payUser==-1||depo==''){
          message.error("请填写完整再发送！");
        }else{
          if(enab==0){
            message.error("授信余额不可用！");
          }else{
            if(resiEnab==0){
              message.error("该用户有违约！");
            }else{
              if(depo>xyyev){
                message.error("授信余额不足！");
              }else{
                if(depo>zdje){
                  message.error("押款金额不可超过最大收款金额！");
                }else {
                  //判断是否复制保函
                  let This=this;
                  confirm({
                    title: '您是否确认',
                    cancelText:"确认并复制该保函",
                    onOk() {
                      //确认该保函
                      This.props.actions.getnewbh(userName, token, payUser, serv, trans, voyage, billNum, cartNum, depo, expiTime, guarTarget,xyye);
                      This.props.hnandclose(false, 0);
                    },
                    onCancel() {
                      //确认并复制该保函
                      This.props.actions.getnewbh(userName, token, payUser, serv, trans, voyage, billNum, cartNum, depo, expiTime, guarTarget,xyye);
                    }
                  });
                }
              }
            }
          }
        }
      }else{
        message.error("该付款人还没权限付款，请让该付款人的公司管理员为其开通权限！");
      }
    }else{
      if(payUser==-1||depo==''){
        message.error("请填写完整再发送！");
      }else{
        if(enab==0){
          message.error("授信余额不可用！");
        }else{
          if(resiEnab==0){
            message.error("该用户有违约！");
          }else {
            if (depo > xyyev) {
              message.error("授信余额不足！");
            } else {
              if (depo > zdje) {
                message.error("押款金额不可超过最大收款金额！");
              } else {
                //判断是否复制保函
                let This=this;
                confirm({
                  title: '您是否确认',
                  cancelText:"确认并复制该保函",
                  onOk() {
                    //确认该保函
                    This.props.actions.getnewbh(userName, token, payUser, serv, trans, voyage, billNum, cartNum, depo, expiTime, guarTarget,xyye);
                    This.props.hnandclose(false, 0);
                  },
                  onCancel() {
                    //确认并复制该保函
                    This.props.actions.getnewbh(userName, token, payUser, serv, trans, voyage, billNum, cartNum, depo, expiTime, guarTarget,xyye);
                  }
                });
              }
            }
          }
        }
      }
    }
  }
  handcz(){
    this.setState({
      zh:'',
      fxm: '',
      fgs: '',
      fhy: '',
      fsj: '',
      xyye:'下拉显示授信余额',
      ydh: '',
      ysgj:'',
      hc:'',
      ykje:'',
      xh:'',
      fkqx:moment().format('YYYY-MM-DD HH:mm'),
      fkid:-1,
      iszb:false,
      lvzb:'',
      enab:2,
      resiEnab:2,
      xyyev:0,
      bz:''
    })
  }
  handc(){
    this.props.hnandclose(false,0);
  }
  render() {
    const texts=(
      <span>
                个人信息
            </span>
    );
    const content = (
      <div>
        <p>姓名:{this.state.fxm}</p>
        <p>公司:{this.state.fgs}</p>
        <p>行业:{this.state.fhy}</p>
        <p>手机:{this.state.fsj}</p>
      </div>
    );
    console.log(this.props.pays);
    return (
      <div className="paydd">
        <div className="paydd1">
          <a className="close" href='javascript:void(0);' onClick={this.handc}>X</a>
          <div className="paydd2">
            <div className="paydd3">
              <span>新增收付款保函</span>
              <ul>
                <li><a className="bntact" href='javascript:void(0);' onClick={this.handfs}>发送</a></li>
                <li><a className="bntact" href='javascript:void(0);' onClick={this.handcz}>重置</a></li>
              </ul>
            </div>
            <div className="paydd4">
              <ul>
                <li>
                  <h4>收款人：</h4>
                  <p>{this.props.text.user.name}</p>
                </li>
                <li>
                  <h4>付款人：</h4>
                  <Popover placement="top" content={content} title={texts} trigger="hover">
                  <Input
                    value={this.state.zh}
                    placeholder="联系人账号"
                    className="padaccr"
                    style={{ width: 200 }}
                    onFocus={this.handss}
                  />
                  </Popover>
                </li>
                <li className="paysml">
                  <h3>最大收款金额：¥{this.props.text.user.maxMarg}    ${this.props.text.user.maxMargUsd}</h3>
                </li>
                <li className="paysml">
                  <h5>授信余额：</h5>
                  {
                    this.state.enab==0?
                      <h6>不可用</h6>
                      :this.state.resiEnab==0?
                      <h6>该用户有违约</h6>
                      :<Select showSearch
                               value={this.state.xyye}
                               style={{ width:200 }}
                               optionFilterProp="children"
                               notFoundContent="无法找到"
                               placeholder="下拉显示授信余额"
                               onChange={(v)=>{return this.setState({xyye:v})}}
                               onSelect={this.handse}
                      >
                        {
                          this.props.pays.xyye.map(s => {
                            let sr = s.residual+'-'+s.curr;
                            return <Option date={sr} key={s.guarCre}>{s.type}——{s.curr} {s.residual}</Option>
                          })
                        }
                      </Select>
                  }
                </li>
                <li>
                  <h4>收款公司：</h4>
                  <p>{this.props.text.user.compAlia}</p>
                </li>
                <li>
                  <h4>付款公司：</h4>
                  <p>{this.state.fgs}</p>
                </li>
                <li>
                  <h4>运单号：</h4>
                  <p>
                    <Input
                      value={this.state.ydh}
                      placeholder="运单号"
                      onChange={(e)=>{return this.setState({ydh:e.target.value})}}
                    />
                  </p>
                </li>
                <li>
                  <h4>运输工具：</h4>
                  <div className="paysgj">
                    <Input
                      value={this.state.ysgj}
                      placeholder="运输工具"
                      onChange={(e)=>{return this.setState({ysgj:e.target.value})}}
                    />
                  </div>
                  <h5>航次：</h5>
                  <div className="payhc">
                    <Input
                      value={this.state.hc}
                      placeholder="航次"
                      onChange={(e)=>{return this.setState({hc:e.target.value})}}
                    />
                  </div>
                </li>
                <li>
                  <h4>押款金额:{this.state.bz}</h4>
                  <p>
                    <Input
                      value={this.state.ykje}
                      placeholder="押款金额"
                      onChange={this.handykje}
                    />
                  </p>
                </li>
                <li>
                  <h4>箱号：</h4>
                  <p>
                    <Input
                      value={this.state.xh}
                      placeholder="箱号"
                      onChange={(e)=>{return this.setState({xh:e.target.value})}}
                    />
                  </p>
                </li>
                <li>
                  <h4>付款期限：</h4>
                  <p>
                    <DatePicker
                      showTime
                      format="yyyy-MM-dd HH:mm"
                      value={this.state.fkqx}
                      disabledDate={this.disDa}
                      placeholder="付款期限"
                      onChange={(v)=>{return this.setState({fkqx:v})}}
                    />
                  </p>
                </li>
                <li>
                  <h4>履约指标：</h4>
                  <a className="lvyezb" href="javascript:void(0);" onClick={this.handzb}>
                    {this.state.lvzb==''?'填写指标':'已填写'}
                  </a>
                  {
                    this.state.iszb?
                      <Paylyzb handzbc={this.handzbc} handlvzb={this.handlvzb} lvzb={this.state.lvzb}/>:undefined
                  }
                </li>
              </ul>
            </div>
          </div>
          {
            this.state.iscp? <Pancomp handssc={this.handssc}
                                      handarc={this.handarc}
                                      actions={this.props.actions}
                                      pays={this.props.pays}/>:undefined
          }
        </div>
      </div>
    );
  }
}