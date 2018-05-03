/**
 * Created by Zing on 2016/8/30.
 */
import React,{Component} from 'react';
import {Input,Select,message} from 'antd';
import Hgssh from './hgssh';
import HTTPED from '../../date/address';
const Option = Select.Option;
let timeout;

export default class Hgsxx extends Component {
  constructor(props) {
    super(props);
    this.handqr=this.handqr.bind(this);
    this.handqx=this.handqx.bind(this);
    this.handsj=this.handsj.bind(this);
    this.chegsqc=this.chegsqc.bind(this);
    this.chegsjc=this.chegsjc.bind(this);
    this.chehy=this.chehy.bind(this);
    this.chekan=this.chekan.bind(this);
    this.chedz=this.chedz.bind(this);
    this.chesj=this.chesj.bind(this);
    this.chedh=this.chedh.bind(this);
    this.checz=this.checz.bind(this);
    this.chedz2=this.chedz2.bind(this);
    this.chenglogo=this.chenglogo.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handshc=this.handshc.bind(this);
    this.state={
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      kan:'',
      dh:'',
      dz:'',
      cz:'',
      gsqc:'',
      gsjc:'',
      hy:'',
      sj:'',
      enab:sessionStorage.getItem("SESSIONADMIENAB"),
      qydn:'',
      issh:false,
      strdh:'gsxxinp',
      strcz:'gsxxinp',
      strdz:'gsxxinpa',
      strqc:'gsxxinpa',
      strjc:'gsxxinp',
      strhy:'gsxxinp',
      strkan:'gsxxinp',
      strsj:'gsxxinp',
    }
  }
  handshc(){
    this.setState({
      issh:false
    });
    this.props.hnandclose(false,0);
  }
  handcn(v){
    this.setState({
      qydn:v,
      strkan:'gsxxinp'
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
  chenglogo(v){
    var arr=v.target.value.split('\\');
    var fileName=arr[arr.length-1];
    if(v.target.files && v.target.files[0]){
      if(v.target.files[0]==undefined){
        message.error("请上传文件！");
      }else{
        if(v.target.files[0].type!='image/jpeg'&&v.target.files[0].type!='image/png'){
          message.error("请上传jpg或者png格式图片！");
        }else{
          if(v.target.files[0].size>81920){
            message.error("只能上传小于80K的文件！");
          }else{
            this.refs.gs9.src=window.URL.createObjectURL(v.target.files[0]);
            this.refs.gs8.href=window.URL.createObjectURL(v.target.files[0]);
          }
        }
      }
    }else{
      this.refs.gs9.src=require('../../src/image/kong.png');
      this.refs.gs8.href=require('../../src/image/kong.png');
    }
  }
  chegsqc(e){
    this.props.text.user.compName=e.target.value;
    this.setState({
      gsqc:e.target.value,
      strqc:'gsxxinpa'
    })
  }
  chegsjc(e){
    this.props.text.user.compAlia=e.target.value;
    this.setState({
      gsjc:e.target.value,
      strjc:'gsxxinp'
    })
  }
  chehy(v){
    this.props.text.user.induName=v;
    this.setState({
      hy:v,
      strhy:'gsxxinp'
    })
  }
  chekan(v){
    this.props.text.user.portName=v;
    this.setState({
      kan:v
    })
  }
  chedz(e){
    this.props.text.user.addr=e.target.value;
    this.setState({
      dz:e.target.value,
      strdz:'gsxxinpa'
    })
  }
  chesj(e){
    this.props.text.user.mobi=e.target.value;
    this.setState({
      sj:e.target.value,
      strsj:'gsxxinp'
    })
  }
  chedh(e){
    this.props.text.comps.phon=e.target.value;
    this.setState({
      dh:e.target.value,
      strdh:'gsxxinp'
    })
  }
  checz(e){
    this.props.text.comps.fax=e.target.value;
    this.setState({
      cz:e.target.value,
      strcz:'gsxxinp'
    })
  }
  chedz2(e){
    this.props.text.comps.addr=e.target.value;
    this.setState({
      dz:e.target.value,
      strdz:'gsxxinpa'
    })
  }
  handsj(){
    let formdate=new FormData();
    let logo1,logo2;
    logo1=this.refs.gs7.files[0];
    if (logo1 != undefined) {
      logo2 = this.refs.gs7.files[0];
    } else {
      logo2 = '';
    }
    let userName=this.state.userName;
    let token=this.state.token;
    let compName,compAlia,indu,port,addr;
    compName=this.state.gsqc==''?this.props.text.user.compName:this.state.gsqc;
    compAlia=this.state.gsjc==''?this.props.text.user.compAlia:this.state.gsjc;
    indu=this.state.hy==''?this.props.text.user.indu:this.state.hy;
    port=this.state.kan==''?this.props.text.user.port:this.state.kan;
    addr=this.state.dz==''?this.props.text.user.addr:this.state.dz;
    let phon=this.state.dh;
    let fax=this.state.cz;
    formdate.append("userName", userName);
    formdate.append("token", token);
    formdate.append("compName", compName);
    formdate.append("compAlia", compAlia);
    formdate.append("indu", indu);
    formdate.append("port", port);
    formdate.append("addr", addr);
    formdate.append("phon", phon);
    formdate.append("fax", fax);
    formdate.append("logo", logo2);
    //修改个人信息
    let user=this.props.text.user.user;
    let name=this.props.text.user.name==null?'':this.props.text.user.name;
    let comp=this.props.text.user.comp;
    let posi=this.props.text.user.posi==null?'':this.props.text.user.posi;
    let mobi=this.state.sj==''?this.props.text.user.mobi:this.state.sj;
    let mobiBind=this.props.text.user.mobiBind==null?0:this.props.text.user.mobiBind;
    let mail=this.props.text.user.mail==null?'':this.props.text.user.mail;
    if(compName!=''&&compAlia!=''&&indu!=''&&port!=''&&addr!=''&&phon!=''&&fax!=''&&mobi!=''){
      this.props.actions.gethxjqy(formdate);//修改公司信息
      this.props.actions.gethgerxx(userName,token,user,name,comp,compName,compAlia,indu,port,addr,posi,phon,fax,mobi,mobiBind,mail);
      this.setState({
        issh:true
      })
    }else{
      if(compName==''){
        this.setState({
          strqc:'gsxxinpa gsxxinpb'
        })
      }else{
        this.setState({
          strqc:'gsxxinpa'
        })
      }
      if(compAlia==''){
        this.setState({
          strjc:'gsxxinp gsxxinpb'
        })
      }else{
        this.setState({
          strjc:'gsxxinp'
        })
      }
      if(indu==''){
        this.setState({
          strhy:'gsxxinp gsxxinpb'
        })
      }else{
        this.setState({
          strhy:'gsxxinp'
        })
      }
      if(mobi==''){
        this.setState({
          strsj:'gsxxinp gsxxinpb'
        })
      }else{
        this.setState({
          strsj:'gsxxinp'
        })
      }
      if(port==''){
        this.setState({
          strkan:'gsxxinp gsxxinpb'
        })
      }else{
        this.setState({
          strkan:'gsxxinp'
        })
      }
      if(phon==''){
        this.setState({
          strdh:'gsxxinp gsxxinpb'
        })
      }else{
        this.setState({
          strdh:'gsxxinp'
        })
      }
      if(fax==''){
        this.setState({
          strcz:'gsxxinp gsxxinpb'
        })
      }else{
        this.setState({
          strcz:'gsxxinp'
        })
      }
      if(addr==''){
        this.setState({
          strdz:'gsxxinpa gsxxinpb'
        })
      }else{
        this.setState({
          strdz:'gsxxinpa'
        })
      }
      message.error("请填写完整再升级！");
    }
  }
  handqr(){
    let formdate=new FormData();
    let logo1,logo2;
    if(this.state.comp > 0 ){
      if(this.props.text.priv.admi != 0 ){
        logo1=this.refs.gs7.files[0];
        if (logo1 != undefined) {
          logo2 = this.refs.gs7.files[0];
        } else {
          logo2 = this.props.text.comps.logo == null || this.props.text.comps.logo == '' ? '' : this.props.text.comps.logo;
        }
      }else{
        logo2='';
      }
    }else{
      logo2='';
    }
    let userName=this.state.userName;
    let token=this.state.token;
    let addr;
    addr=this.props.text.comps.addr==null||this.props.text.comps.addr==''?this.props.text.user.addr==null||this.props.text.user.addr==''?this.state.dz:this.props.text.user.addr:this.props.text.comps.addr;
    let phon=this.props.text.comps.phon;
    let fax=this.props.text.comps.fax;
    formdate.append("userName", userName);
    formdate.append("token", token);
    formdate.append("addr", addr);
    formdate.append("phon", phon);
    formdate.append("fax", fax);
    formdate.append("logo", logo2);
    if(phon==''||fax==''||addr==''){
      if(phon==''){
        this.setState({
          strdh:'gsxxinp gsxxinpb'
        })
      }else{
        this.setState({
          strdh:'gsxxinp'
        })
      }
      if(fax==''){
        this.setState({
          strcz:'gsxxinp gsxxinpb'
        })
      }else{
        this.setState({
          strcz:'gsxxinp'
        })
      }
      if(addr==''){
        this.setState({
          strdz:'gsxxinpa gsxxinpb'
        })
      }else{
        this.setState({
          strdz:'gsxxinpa'
        })
      }
      message.error("请填写完整！");
    }else {
      this.props.actions.gethcj(formdate,this.state.comp);
      this.props.hnandclose(false,0);
    }
  }
  handqx(){
    this.props.hnandclose(false,0);
  }
  render() {
    let gsqc,gsjc,hy,kan,dz,sj;
    gsqc=this.props.text.user.compName=='null'?'':this.props.text.user.compName;
    gsjc=this.props.text.user.compAlia=='null'?'':this.props.text.user.compAlia;
    hy=this.props.text.user.induName=='null'?'':this.props.text.user.induName;
    kan=this.props.text.user.portName=='null'?'':this.props.text.user.portName;
    dz=this.props.text.user.addr=='null'?'':this.props.text.user.addr;
    sj=this.props.text.user.mobi=='null'?'':this.props.text.user.mobi;
    let gsxxss;
    this.props.text.user.userVip==1?gsxxss='gsxx14':gsxxss='gsxxs';
    let logo=this.props.text.comps.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=HTTPED+logo.substring(1);
    }else{
      logos=require('../../src/image/kong.png');
    }
    return (
      <div className="hgsxx">
        <div className="gsxx">
          <div className="gsxx1">
            <h5>{this.state.comp==0?'升级到公司':'公司信息'}</h5>
            <span>
              {
                this.state.comp!=0?
                 this.state.enab==undefined||this.state.enab==0?'管理员权限正在审核中!':undefined:undefined
              }
                        </span>
          </div>
          <div className="gsxx2">
            <ul>
              <li className="gsxxlid">
                {
                  this.props.text.user.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
                }
                <span className={gsxxss}>公司全称：</span>
                <p>
                {
                  this.state.comp>0?
                    this.props.text.comps.compName==null||this.props.text.comps.compName==''?
                      this.props.text.user.compName==null||this.props.text.user.compName==''?
                        <Input
                          value={this.state.gsqc}
                          placeholder="公司全称"
                          className={this.state.strqc}
                          onChange={(e)=>{return this.setState({gsqc:e.target.value,strqc:'gsxxinpa'})}}
                        />:this.props.text.user.compName
                      :this.props.text.comps.compName
                    :
                    <Input
                      value={gsqc}
                      placeholder="公司全称"
                      className={this.state.strqc}
                      onChange={this.chegsqc}
                    />
                }
                </p>
                <i className="gsxxbt">*</i>
              </li>
              <li className="gsxxlib">
                <span className="gsxxs">公司简称：</span>
                <p>
                {
                  this.state.comp>0?
                    this.props.text.comps.compAlia==null||this.props.text.comps.compAlia==''?
                      this.props.text.user.compAlia==null||this.props.text.user.compAlia==''?
                        <Input
                          value={this.state.gsjc}
                          placeholder="公司简称"
                          className={this.state.strjc}
                          onChange={(e)=>{return this.setState({gsjc:e.target.value,strjc:'gsxxinp'})}}
                        />:this.props.text.user.compAlia
                      :this.props.text.comps.compAlia
                    :
                    <Input
                      value={gsjc}
                      placeholder="公司简称"
                      className={this.state.strjc}
                      onChange={this.chegsjc}
                    />
                }
                </p>
                <i className="gsxxbt">*</i>
              </li>
              <li className="gsxxlib">
                <span className="gsxxs">行业：</span>

                {
                  this.state.comp>0?
                    this.props.text.comps.induName==null||this.props.text.comps.induName==''?
                      this.props.text.user.induName==null||this.props.text.user.induName==''?
                        <Select showSearch
                                value={this.state.hy}
                                optionFilterProp="children"
                                className={this.state.strhy}
                                style={{ width: 140 }}
                                notFoundContent="无法找到"
                                placeholder="行业"
                                onChange={(v)=>{return this.setState({hy:v,strhy:'gsxxinp'})}}
                        >
                          {
                            this.props.text.indus.map(s => <Option key={s.indu}>{s.induName}</Option>)
                          }
                        </Select>:<p>{this.props.text.user.induName}</p>
                      :<p>{this.props.text.comps.induName}</p>
                    :
                    <Select showSearch
                            value={hy}
                            optionFilterProp="children"
                            style={{ width: 140 }}
                            notFoundContent="无法找到"
                            className={this.state.strhy}
                            placeholder="行业"
                            onChange={this.chehy}
                    >
                      {
                        this.props.text.indus.map(s => <Option key={s.indu}>{s.induName}</Option>)
                      }
                    </Select>
                }
                <i className="gsxxbt">*</i>
              </li>
              <li className="gsxxlib">
                <span className="gsxxs">口岸：</span>
                {
                  this.state.comp>0?
                    this.props.text.comps.portName==null||this.props.text.comps.portName==''?
                      this.props.text.user.portName==null||this.props.text.user.portName==''?
                        <Select
                          combobox
                          value={this.state.qydn}
                          style={{ width: 140 }}
                          className={this.state.strkan}
                          notFoundContent=""
                          defaultActiveFirstOption={false}
                          showArrow={false}
                          filterOption={false}
                          placeholder={kan}
                          onChange={this.handcn}
                          onSelect={this.handcns}
                        >
                          {
                            this.props.text.xports.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                          }
                        </Select>:<p>{this.props.text.user.portName}</p>
                      :<p>{this.props.text.comps.portName}</p>
                    :
                    <Select
                      combobox
                      value={this.state.qydn}
                      style={{ width: 140 }}
                      className={this.state.strkan}
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
                }
                <i className="gsxxbt">*</i>
              </li>
              <li className="gsxxlib">
                <span className="gsxxs">电话：</span>
                {
                  this.state.comp>0?
                    this.props.text.priv.admi!=0?
                      <Input
                        value={this.props.text.comps.phon}
                        placeholder="电话"
                        className={this.state.strdh}
                        onChange={this.chedh}
                      />
                      :<p>{this.props.text.comps.phon}</p>
                    :
                    <Input
                      value={this.state.dh}
                      placeholder="电话"
                      className={this.state.strdh}
                      onChange={(e)=>{return this.setState({dh:e.target.value,strdh:'gsxxinp'})}}
                    />
                }
                <i className="gsxxbt">*</i>
              </li>
              <li className="gsxxlib">
                <span className="gsxxs">传真：</span>
                {
                  this.state.comp>0?
                    this.props.text.priv.admi!=0?
                      <Input
                        value={this.props.text.comps.fax}
                        placeholder="传真"
                        className={this.state.strcz}
                        onChange={this.checz}
                      />
                      :<p>{this.props.text.comps.fax}</p>
                    :
                    <Input
                      value={this.state.cz}
                      placeholder="传真"
                      className={this.state.strcz}
                      onChange={(e)=>{return this.setState({cz:e.target.value,strcz:'gsxxinp'})}}
                    />
                }
                <i className="gsxxbt">*</i>
              </li>
              {
                this.state.comp>0?undefined:
                  <li className="gsxxlib">
                    <span className="gsxxs">手机：</span>
                    {
                      <Input
                        value={sj}
                        placeholder="传真"
                        className={this.state.strsj}
                        onChange={this.chesj}
                      />
                    }
                    <i className="gsxxbt">*</i>
                  </li>
              }
              <li className="gsxxlia">
                <span className="gsxxs">地址：</span>
                {
                  this.state.comp>0?
                    this.props.text.priv.admi!=0?
                      this.props.text.comps.addr==null||this.props.text.comps.addr==''?
                        this.props.text.user.addr==null||this.props.text.user.addr==''?
                          <Input
                            value={this.state.dz}
                            placeholder="地址"
                            className={this.state.strdz}
                            onChange={(e)=>{return this.setState({dz:e.target.value})}}
                          />:<Input
                          value={dz}
                          placeholder="地址"
                          className={this.state.strdz}
                          onChange={this.chedz}
                        />
                        : <Input
                        value={this.props.text.comps.addr}
                        placeholder="地址"
                        className={this.state.strdz}
                        onChange={this.chedz2}
                      />
                      :<p>{this.props.text.comps.addr}</p>
                    :
                    <Input
                      value={dz}
                      placeholder="地址"
                      className={this.state.strdz}
                      onChange={this.chedz}
                    />
                }
                <i className="gsxxbt">*</i>
              </li>
              <li className="gsxxlic">
                <span className="gsxxs">授信是否通过：</span>
                {this.props.text.user.depositEnab==1?'是':'否'}
              </li>
            </ul>
          </div>
          {
            this.state.comp > 0 ?
              this.props.text.priv.admi != 0 ?
                <div className="gsxx4">
                  <div className="gs2">
                    <a className="gs3" ref="gs8"
                       href={this.props.text.comps.logo==null?require('../../src/image/kong.png'):logos}
                       target="_blank">
                      <img className="gs4" ref="gs9" src={this.props.text.comps.logo==null?require('../../src/image/kong.png'):logos}/>
                    </a>
                   {/* <div className="gs1">
                      <a href='javascript:void(0);' className="gs6">
                        上传图片
                        <input type="file" ref='gs7' onChange={this.chenglogo}/>
                      </a>
                    </div>*/}
                  </div>
                </div>:
                <div className="gsxx4">
                  <div className="gs2">
                    <a className="gs3" ref="gs8"
                       href={this.props.text.comps.logo==null?require('../../src/image/kong.png'):logos}
                       target="_blank">
                      <img className="gs4" ref="gs9"
                           src={this.props.text.comps.logo==null?require('../../src/image/kong.png'):logos}/>
                    </a>
                  </div>
                </div>:
              <div className="gsxx4">
                <div className="gs2">
                  <a className="gs3" ref="gs8" href={require('../../src/image/kong.png')} target="_blank">
                    <img className="gs4" ref="gs9" src={require('../../src/image/kong.png')}/>
                  </a>
                  <div className="gs1">
                    <a href='javascript:void(0);' className="gs6">
                      上传图片
                      <input type="file" ref='gs7' onChange={this.chenglogo}/>
                    </a>
                  </div>
                </div>
              </div>
          }

          <div className="gsxx3">
            {
              this.state.comp==0?<a href="javascript:void(0);" className="grxxqr" onClick={this.handsj}>确认</a>:undefined
            }
            {
              this.state.comp!=0?
                this.props.text.priv.admi!=0?
                  <a href="javascript:void(0);" className="grxxqr" onClick={this.handqr}>确认</a>:undefined:undefined
            }
            <a href="javascript:void(0);" className="grxxqx" onClick={this.handqx}>关闭</a>
          </div>
          {
            this.state.issh?
            <Hgssh handshc={this.handshc}/>:undefined
          }
        </div>
      </div>
    );
  }
}