/*
 * @Author: sepgit 
 * @Date: 2018-06-11 10:35:12 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-05 10:22:08
 */

import React,{Component} from 'react';
import {Input,Select,Checkbox,Popover} from 'antd';
import moment from 'moment';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import Hcheck from './hcheck';
const Option = Select.Option;
let timeout;

export default class Hgrxx extends Component {
  constructor(props) {
    super(props);

    this.handqr=this.handqr.bind(this);
    this.handqx=this.handqx.bind(this);
    this.chexm=this.chexm.bind(this);
    this.chehy=this.chehy.bind(this);
    this.chezw=this.chezw.bind(this);
    this.chekan=this.chekan.bind(this);
    this.chegsqc=this.chegsqc.bind(this);
    this.chegsjc=this.chegsjc.bind(this);
    this.chedz=this.chedz.bind(this);
    this.chebd=this.chebd.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handsqrz=this.handsqrz.bind(this);
    this.handckqy=this.handckqy.bind(this);
    this.handckqyc=this.handckqyc.bind(this);
    this.state={
      xm:'',
      hy:'',
      zw:'',
      kan:'',
      sj:'',
      gsqc:'',
      yx:'',
      gsjc:'',
      cz:'',
      dh:'',
      dz:'',
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      user:sessionStorage.getItem("SESSIONUSER"),
      bd:false,
      qydn:'',
      qq:'',
      isqy:false
    }
  }
  handckqy(){
      this.setState({
          isqy:true
      });
  }
  handckqyc(){
      this.setState({
          isqy:false
      });
  }
  handsqrz(){
    let userName = this.state.userName;
    let token = this.state.token;
    this.props.actions.postsqrz(userName,token);
    this.props.hnandclose(false,0);
  }
  componentDidMount(){
    if(this.state.comp>0){
      if(this.props.text.comps.portName){
        this.setState({
          qydn:this.props.text.comps.portName==null?'':this.props.text.comps.portName
        })
      }else {
        this.setState({
          qydn:this.props.text.user.portName==null?'':this.props.text.user.portName
        })
      }
    }else{
      this.setState({
        qydn:this.props.text.user.portName==null?'':this.props.text.user.portName
      })
    }
  }
  handcn(v){
    this.setState({
      qydn:v
    });
    let userName = this.state.userName;
    let token = this.state.token;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.gethports(userName,token,v);
      }
    }, 300);
  }
  handcns(v,o){
    let kan=o.props.date;
    this.setState({ kan:kan });
  }
  chexm(e){
    this.props.text.user.name=e.target.value;
    this.setState({
      xm:e.target.value
    })
  }
  chehy(v){
    this.props.text.user.induName=v;
    this.setState({
      hy:v
    })
  }
  chezw(e){
    this.props.text.user.posi=e.target.value;
    this.setState({
      zw:e.target.value
    })
  }
  chekan(v){
    this.props.text.user.portName=v;
    this.setState({
      kan:v
    })
  }
  chegsqc(e){
    this.props.text.user.compName=e.target.value;
    this.setState({
      gsqc:e.target.value
    })
  }
  chegsjc(e){
    this.props.text.user.compAlia=e.target.value;
    this.setState({
      gsjc:e.target.value
    })
  }
  chedz(e){
    this.props.text.user.addr=e.target.value;
    this.setState({
      dz:e.target.value
    })
  }
  chebd(e){
    this.props.text.user.mobiBind=e.target.checked;
    this.setState(
      {
        bd:e.target.checked
      }
    )
  }
  handqr(){
    let userName=this.state.userName;
    let token=this.state.token;
    let user=this.state.user;
    let name=this.state.xm==''?this.props.text.user.name:this.state.xm;
    let comp=this.state.comp;
    let compName,compAlia,indu,addr,port;
    if(comp>0){
      compName=this.props.text.comps.compName==null||this.props.text.comps.compName==''?this.state.gsqc==''?this.props.text.user.compName:this.state.gsqc:this.props.text.comps.compName;
      compAlia=this.props.text.comps.compAlia==null||this.props.text.comps.compAlia==''?this.state.gsjc==''?this.props.text.user.compAlia:this.state.gsjc:this.props.text.comps.compAlia;
      indu=this.props.text.comps.indu==null||this.props.text.comps.indu==''?this.state.hy==''?this.props.text.user.indu:this.state.hy:this.props.text.comps.indu;
      addr=this.props.text.comps.addr==null||this.props.text.comps.addr==''?this.state.dz==''?this.props.text.user.addr:this.state.dz:this.props.text.comps.addr;
      port=this.props.text.comps.portName==null||this.props.text.comps.portName==''?this.state.kan==''?this.props.text.user.port:this.state.kan:this.props.text.comps.port;
    }else{
      compName=this.state.gsqc==''?this.props.text.user.compName:this.state.gsqc;
      compAlia=this.state.gsjc==''?this.props.text.user.compAlia:this.state.gsjc;
      indu=this.state.hy==''?this.props.text.user.indu:this.state.hy;
      addr=this.state.dz==''?this.props.text.user.addr:this.state.dz;
      port=this.state.kan==''?this.props.text.user.port:this.state.kan;
    }
    let posi=this.state.zw==''?this.props.text.user.posi:this.state.zw;
    let phon=this.state.dh==''?this.props.text.user.phon:this.state.dh;
    let fax=this.state.cz==''?this.props.text.user.fax:this.state.cz;
    let mobi=this.state.sj==''?this.props.text.user.mobi:this.state.sj;
    let mobiBind=this.props.text.user.mobiBind?1:0;
    let mail=this.state.yx==''?this.props.text.user.mail:this.state.yx;
    let qq=this.state.qq==''?this.props.text.user.qq:this.state.qq;
    //修改个人信息
    this.props.actions.gethgerxx(userName,token,user,name,comp,compName,compAlia,indu,port,addr,posi,phon,fax,mobi,mobiBind,mail,qq);
    this.props.hnandclose(false,0);
  }
  handqx(){
    this.props.hnandclose(false,0);
  }
  render() {
    let xm,zw,sj,yx,cz,dh,gsqc,gsjc,dz,bd,qq;
    xm=this.props.text.user.name=='null'?'':this.props.text.user.name;
    zw=this.props.text.user.posi=='null'?'':this.props.text.user.posi;
    sj=this.props.text.user.mobi=='null'?'':this.props.text.user.mobi;
    yx=this.props.text.user.mail=='null'?'':this.props.text.user.mail;
    cz=this.props.text.user.fax=='null'?'':this.props.text.user.fax;
    dh=this.props.text.user.phon=='null'?'':this.props.text.user.phon;
    gsqc=this.props.text.user.compName=='null'?'':this.props.text.user.compName;
    gsjc=this.props.text.user.compAlia=='null'?'':this.props.text.user.compAlia;
    dz=this.props.text.user.addr=='null'?'':this.props.text.user.addr;
    qq=this.props.text.user.qq=='null'?'':this.props.text.user.qq;
    if(this.props.text.user.mobiBind){
      bd=true;
    }else{
      bd=false;
    }
    let adddz;
    if(this.state.comp>0){
      if(this.props.text.comps.addr==null||this.props.text.comps.addr==''){
        if(this.props.text.user.addr==null||this.props.text.user.addr==''){
          adddz='';
        }else{
          adddz=this.props.text.user.addr;
        }
      }else{
        adddz=this.props.text.comps.addr;
      }
    }else{
      adddz=this.props.text.user.addr;
    }
    let grxxss;
    this.props.text.user.userVip==1?grxxss='grxxs4':grxxss="grxxs";
    const texts=(
      <div>
        提示
      </div>
    );
    const content = (
      <div>
        <p>打勾后，该手机号可作为账号登陆。</p>
      </div>
    );
    console.log(this.props.text.user);
    // console.log(this.props.text);
    return (
      <div className="hgrxx">
        <div className="grxx">
          <div className="grxx1">
            <h5>个人信息</h5>
          </div>
          <div className="grxx2">
            <ul>
              <li className="grxxliaa">
                {
                  this.props.text.user.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
                }
                <span className={grxxss}>账号：</span>
                <p className="grxadds">
                  {this.props.text.user.userAcco}
                </p>
              </li>
              <li className="grxxlib">
                <span className="grxxs">姓名：</span>
                <p>
                  {
                    this.state.comp>0?
                      this.props.text.priv.admi!=0?<Input value={xm} placeholder="姓名" onChange={this.chexm}/>
                        :this.props.text.user.name
                      :<Input value={xm} placeholder="姓名" onChange={this.chexm}/>
                  }
                </p>
                <i className="gexxbt">*</i>
              </li>
              <li className="grxxlib">
                <span className="grxxs">职位：</span>
                <p>
                  {
                    this.state.comp>0?
                      this.props.text.priv.admi!=0?<Input value={zw} placeholder="职位" onChange={this.chezw}/>
                        :this.props.text.user.posi
                      :<Input value={zw} placeholder="职位" onChange={this.chezw}/>
                  }
                </p>
              </li>
              <li className="grxxlib">
                <span className="grxxs">行业：</span>
                {
                  this.state.comp>0?
                    this.props.text.comps.induName==null||this.props.text.comps.induName==''?
                      this.props.text.user.induName==null||this.props.text.user.induName==''?
                        <Select showSearch
                                value={this.state.hy}
                                optionFilterProp="children"
                                style={{ width: 140 }}
                                notFoundContent="无法找到"
                                placeholder="行业"
                                className="grxxkan"
                                onChange={(v)=>{return this.setState({hy:v})}}
                        >
                          {
                            this.props.text.indus.map(s => <Option key={s.indu}>{s.induName}</Option>)
                          }
                        </Select>:<p>{this.props.text.user.induName}</p>
                      :<p>{this.props.text.comps.induName}</p>
                    :
                    <Select showSearch
                            value={this.props.text.user.induName}
                            optionFilterProp="children"
                            style={{ width: 140 }}
                            notFoundContent="无法找到"
                            placeholder="行业"
                            className="grxxkan"
                            onChange={this.chehy}
                    >
                      {
                        this.props.text.indus.map(s => <Option key={s.indu}>{s.induName}</Option>)
                      }
                    </Select>
                }
                <i className="gexxbt">*</i>
              </li>
              <li className="grxxlib">
                <span className="grxxs">口岸：</span>
                {
                  this.state.comp>0?
                    this.props.text.comps.portName==null||this.props.text.comps.portName==''?
                      this.props.text.user.portName==null||this.props.text.user.portName==''?
                        <Select
                          combobox
                          value={this.state.qydn}
                          style={{ width: 140 }}
                          className="grxxkan"
                          notFoundContent=""
                          defaultActiveFirstOption={false}
                          showArrow={false}
                          filterOption={false}
                          placeholder={this.props.text.user.portName}
                          onChange={this.handcn}
                          onSelect={this.handcns}
                          >
                        {
                          this.props.text.xports.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                        }
                        </Select>
                        :<p>{this.props.text.user.portName}</p>
                      :<p>{this.props.text.comps.portName}</p>
                    :
                    <Select
                      combobox
                      value={this.state.qydn}
                      style={{ width: 140 }}
                      className="grxxkan"
                      notFoundContent=""
                      defaultActiveFirstOption={false}
                      showArrow={false}
                      filterOption={false}
                      placeholder='请先输入口岸并选择'
                      onChange={this.handcn}
                      onSelect={this.handcns}
                    >
                      {
                        this.props.text.xports.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                      }
                    </Select>
                }
                <i className="gexxbt">*</i>
              </li>
              <li className="grxxlib">
                <span className="grxxs">手机：</span>
                <p>
                  {
                    <Input
                      value={sj}
                      placeholder="手机"
                      onChange={(e)=>{this.setState({sj:e.target.value});this.props.text.user.mobi=e.target.value;}}
                    />
                  }
                </p>
                <i className="gexxbt">*</i>
              </li>
              <li className="grxxlib">
                <span className="grxxs">绑定手机</span>
                <Checkbox
                  value={bd}
                  checked={bd}
                  className="grxxs3"
                  onChange={this.chebd}
                >
                </Checkbox>
                <Popover content={content} title={texts} trigger="hover">
                  <h6 className="gexxbt1">?</h6>
                </Popover>
              </li>
              <li className="grxxlia">
                <span className="grxxs">公司全称：</span>
                <p className="grxadds">
                  {
                    this.state.comp>0?
                      this.props.text.comps.compName==null||this.props.text.comps.compName==''?
                        this.props.text.user.compName==null||this.props.text.user.compName==''?<Input
                          value={this.state.gsqc}
                          placeholder="公司全称"
                          onChange={(e)=>{return this.setState({gsqc:e.target.value})}}
                        />:this.props.text.user.compName
                        :this.props.text.comps.compName
                      :
                      <Input
                        value={gsqc}
                        placeholder="公司全称"
                        onChange={this.chegsqc}
                      />
                  }
                </p>
              </li>
              <li className="grxxlib">
                <span className="grxxs">公司简称：</span>
                <p>
                  {
                    this.state.comp>0?
                      this.props.text.comps.compAlia==null||this.props.text.comps.compAlia==''?
                        this.props.text.user.compAlia==null||this.props.text.user.compAlia==''?<Input
                          value={this.state.gsjc}
                          placeholder="公司简称"
                          onChange={(e)=>{return this.setState({gsjc:e.target.value})}}
                        />:this.props.text.user.compAlia
                        :this.props.text.comps.compAlia
                      :
                      <Input
                        value={gsjc}
                        placeholder="公司简称"
                        onChange={this.chegsjc}
                      />
                  }
                </p>
                <i className="gexxbt">*</i>
              </li>
              <li className="grxxlib">
                <span className="grxxs">邮箱：</span>
                <p>
                  {
                    <Input
                      value={yx}
                      placeholder="邮箱"
                      onChange={(e)=>{this.setState({yx:e.target.value});this.props.text.user.mail=e.target.value;}}
                    />
                  }
                </p>
              </li>
              <li className="grxxlib">
                <span className="grxxs">电话：</span>
                <p>
                  {
                    <Input
                      value={dh}
                      placeholder="电话"
                      onChange={(e)=>{this.setState({dh:e.target.value});this.props.text.user.phon=e.target.value;}}
                    />
                  }
                </p>
              </li>
              <li className="grxxlib">
                <span className="grxxs">传真：</span>
                <p>
                  {
                    <Input
                      value={cz}
                      placeholder="传真"
                      onChange={(e)=>{this.setState({cz:e.target.value});this.props.text.user.fax=e.target.value;}}
                    />
                  }
                </p>
              </li>
              <li className="grxxlib">
                <span className="grxxs">QQ：</span>
                <p>
                  {
                    <Input
                      value={qq}
                      placeholder="QQ"
                      onChange={(e)=>{this.setState({qq:e.target.value});this.props.text.user.qq=e.target.value;}}
                    />
                  }
                </p>
              </li>
              <li className="grxxlib">

              </li>
              <li className="grxxlia">
                <span className="grxxs">地址：</span>
                <p title={adddz} className="grxadds">
                  {
                    this.state.comp>0?
                      this.props.text.comps.addr==null||this.props.text.comps.addr==''?
                        this.props.text.user.addr==null||this.props.text.user.addr==''?<Input
                          value={this.state.dz}
                          placeholder="地址"
                          onChange={(e)=>{return this.setState({dz:e.target.value})}}
                        />:this.props.text.user.addr
                        :this.props.text.comps.addr
                      :
                      <Input
                        value={dz}
                        placeholder="地址"
                        onChange={this.chedz}
                      />
                  }
                </p>
                <i className="gexxbt">*</i>
              </li>
              <li className="grxxlib">
                  <span className="grxxs">授信状态：</span>
                  <p>{this.props.text.user.depositEnab==1?'已授信':'未授信'}</p>
              </li>
              <li className="grxxlib">
                  <span className="grxxs">授信有效期：</span>
                  <p>{moment(this.props.text.user.guarPrivTo).format('YYYY.MM.DD')}</p>
              </li>
              <li className="grxxlia">
                  {/* <span className="grxxs">认证会员：</span>
                  {
                    this.props.text.isAudi?
                        <div className="grxxrz1">
                            认证中
                        </div>:this.props.text.user.certNo?
                          <div className="grxxrz3">
                              <span>已认证</span>
                              {
                                  this.state.comp>0?this.props.text.priv.admi>0?
                                      <a href="javascript:void(0);" className="grxxrz4" onClick={this.handsqrz}>申请续约</a>:undefined:
                                      <a href="javascript:void(0);" className="grxxrz4" onClick={this.handsqrz}>申请续约</a>
                              }
                          </div>:
                          this.state.comp>0?this.props.text.priv.admi>0?
                              <div className="grxxrz" onClick={this.handsqrz}>申请账号认证</div>:
                              <div className="grxxrz2">
                                  未认证
                              </div>:
                              <div className="grxxrz" onClick={this.handsqrz}>申请账号认证</div>

                  }
                  <a href="javascript:void(0);" className="grxxrzs" onClick={this.handckqy}>查看认证会员权益</a> */}
                  <span className="grxxs">认证会员：</span>
                  {
                    this.props.text.isAudi?
                    <div className="grxxrz1">认证中</div>:this.props.text.user.certNo?
                      <div className="grxxrz3">
                        <span>已认证</span>
                          {
                            this.state.comp>0?this.props.text.priv.admi>0?
                              <a href="javascript:void(0);" className="grxxrz4" onClick={this.handsqrz}>申请续约</a>:undefined:
                              <a href="javascript:void(0);" className="grxxrz4" onClick={this.handsqrz}>申请续约</a>
                          }
                      </div>:<div className="grxxrz" onClick={this.handsqrz}>申请账号认证</div>
                  }
                  <a href="javascript:void(0);" className="grxxrzs" onClick={this.handckqy}>查看认证会员权益</a>
              </li>
                <li className="grxxlib">
                    <span className="grxxs">认证有效期：</span>
                    <p>{moment(this.props.text.user.userVipTime).format('YYYY.MM.DD')}</p>
                </li>
                <li className="grxxlib">
                    <span className="grxxs">认证会员编号：</span>
                    <p>{this.props.text.user.certNo}</p>
                </li>
                <li className="grxxlib">
                    <span className="grxxs">预警：</span>
                    <p>{this.props.text.user.warn==1?'预警':'正常'}</p>
                </li>
                <li className="grxxlia">
                    <span className="grxxs">平台供应商：</span>
                    {/* <p>{this.props.text.user.warn==1?'预警':'正常'}</p> */}
                </li>
            </ul>
          </div>
          <div className="grxx3">
            <a href="javascript:void(0);" onClick={this.handqr} className="grxxqr">确认</a>
            <a href="javascript:void(0);" onClick={this.handqx} className="grxxqx">关闭</a>
          </div>
        </div>
          {

          }
          <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
              {
                  this.state.isqy?<Hcheck handckqyc={this.handckqyc}/>:undefined
              }
          </VelocityTransitionGroup>
      </div>
    );
  }
}