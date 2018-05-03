import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Addgys from './addgys'
import {message,Select,Collapse,Input,Popover  } from 'antd';
import { VelocityTransitionGroup} from 'velocity-react';
import HTTPED from '../../date/address';
import Ptyjpj from '../comment/ptyjpj';
import Fwpj from '../comment/fwpj';

const Option = Select.Option;
const OptGroup = Select.OptGroup;
const Panel = Collapse.Panel;
let timeout,timeoutm;

export default class Tabwmbaidu extends Component {
  constructor(props) {
    super(props);
    this.handfilts=this.handfilts.bind(this);
    this.servyjonChang=this.servyjonChang.bind(this);     //根据运价服务类型的chang事件
    this.YjqyonSelect=this.YjqyonSelect.bind(this);       //运价页面启运地onSelect事件
    this.YjqyonChang=this.YjqyonChang.bind(this);         //运价页面启运地onChang事件
    this.YjmdonSelect=this.YjmdonSelect.bind(this);       //运价页面目的地onSelect事件
    this.YjmdonChange=this.YjmdonChange.bind(this);       //运价页面目的地onChang事件
    this.YjcarronChange=this.YjcarronChange.bind(this);   //运价页面承运商onChange事件
    this.servtzonChange=this.servtzonChange.bind(this);   //特种页面运价类型onChange事件
    this.tzportonSelect=this.tzportonSelect.bind(this);   //特种页面口岸onSelect事件
    this.tzportonChange=this.tzportonChange.bind(this);   //特种页面口岸onChange事件
    this.servfwonChange=this.servfwonChange.bind(this);   //服务页面服务类型onChange事件
    this.fwjtfwonChange=this.fwjtfwonChange.bind(this);   //服务页面服务类型onChange事件
    this.fwportonSelect=this.fwportonSelect.bind(this);   //服务页面口岸onSelect事件
    this.fwportonChange=this.fwportonChange.bind(this);   //服务页面口岸onChange事件
    this.gsinduonChange=this.gsinduonChange.bind(this);   //公司页面行业onChange事件
    this.gsportonSelect=this.gsportonSelect.bind(this);   //公司页面行业onSelect事件
    this.gsportonChange=this.gsportonChange.bind(this);   //公司页面行业onChange事件
    this.YjOtheronChange=this.YjOtheronChange.bind(this); //公司页面行业onChange事件
    this.yjSearchonClick=this.yjSearchonClick.bind(this); //运价搜索页面的onClick事件
    this.fwSearchonClick=this.fwSearchonClick.bind(this); //服务搜索页面的onClick事件
    this.tzSearchonClick=this.tzSearchonClick.bind(this); //特种搜索页面的onClick事件
    this.gsSearchonClick=this.gsSearchonClick.bind(this); //公司页面的onClick事件
    this.yjResetonClick=this.yjResetonClick.bind(this);   //运价搜索页面的重置onClick事件
    this.fwResetonClick=this.fwResetonClick.bind(this);   //服务搜索页面的重置onClick事件
    this.tzResetonClick=this.tzResetonClick.bind(this);   //特种或搜索页面的重置onClick事件
    this.AddyjgysonClick=this.AddyjgysonClick.bind(this);     //加入供应商onClick事件
    this.AddfwgysonClick=this.AddfwgysonClick.bind(this);     //加入供应商onClick事件
    this.AddtzgysonClick=this.AddtzgysonClick.bind(this);     //加入供应商onClick事件
    //this.handleScroll=this.handleScroll.bind(this);   //服务页面Scroll事件
    this.tabonSelect=this.tabonSelect.bind(this);   //tab切换
    this.handgysc=this.handgysc.bind(this);
    this.handlb=this.handlb.bind(this);
    this.handlbtz=this.handlbtz.bind(this);
    this.handlbfw=this.handlbfw.bind(this);
    this.handlbgsk=this.handlbgsk.bind(this);
    this.restgsk=this.restgsk.bind(this);
    this.handover=this.handover.bind(this);
    this.handptyjpl=this.handptyjpl.bind(this);
    this.handptyjplc=this.handptyjplc.bind(this);
    this.handfwpj=this.handfwpj.bind(this);
    this.handfwpjc=this.handfwpjc.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),    //登陆账号
      token:sessionStorage.getItem("SESSIONTOKEN"),         //token
      prov : sessionStorage.getItem("SESSIONPROV"),         //供应商权限
      uvips : sessionStorage.getItem("SESSIONUVIP"),         //是否是会员
      yj:'服务类型',                                         //运价页面，运价类型的值
      yjqy:undefined,                                       //运价页面，启运地的值
      yjqyName:'',                                          //运价页面，启运地的名称
      yjmd:undefined,                                       //运价页面，目的地的值
      yjmdName:'',                                          //运价页面，目的地的名称
      yjcarr:'承运商',                                       //运价页面，承运商的值
      yjOther:'',                                           //运价页面，其它信息
      yjOtherAll:[],                                        //运价页面，其它信息(全)
      tz:'服务类型',                                         //特种页面，特种运价的值
      tzport:undefined,                                     //特种页面，口岸的值
      tzportName:'',                                        //特种页面，口岸的名称
      fw:'服务类型',                                         //服务页面，服务的值
      jtfw:'具体服务',                                       //服务页面，具体服务的值
      fwport:undefined,                                     //服务页面，具体口岸的值
      fwportName:'',                                        //服务页面，具体口岸的名称
      yjList:[],
      tzList:[],
      fwList:[],
      gsList:[],
      gsindu:'行业',                                        //公司页面，职位的值
      gsport:undefined,                                            //公司页面，口岸的值
      gsportName:'',                                        //公司页面，口岸的名称
      gsuserAcco:'',                                        //公司页面，账号的名称
      gscompAlia:'',                                        //公司页面，公司简称
      addgysyj:false,
      addgysfw:false,
      addgystz:false,
      Hes:0,
      pageyj:1,
      pagetz:1,
      pagefw:1,
      pagegs:1,
      tabindex:0,
      qydn:'',
      qydName:'',
      mddm:'',
      cys:'',
      cysName:'',
      userList:[],
      islb:false,
      islbtz:false,
      islbfw:false,
      islbgsk:false,
      wumaoqx:true,
      strfw:'xseachop',
      strqyd:'xseachop',
      strmdd:'xseachop',
      strcys:'xseachop',
      strfwt:'xseachop',
      strkan:'xseachop',
      strfwf:'xseachop',
      strjtfwf:'xseachop',
      strkanf:'xseachop',
      strhy:'xseachop',
      strkangsk:'xseachop',
      advaid:0,
      isptyj:false,
      isfwpj:false,
      cont:0,
      rzbh:''
    };
  }
  handfwpj(e){
    //获取普通运价评分
    let disp= e.target.getAttribute('value');
    this.props.actions.getfwyjxq(this.state.userName,this.state.token,disp);
    //查看评价
    this.setState({
      isfwpj:true,
      cont:disp
    })
  }
  handfwpjc(){
    //关闭评价
    this.setState({
      isfwpj:false,
      cont:0
    })
  }
  handptyjpl(e){
    //获取普通运价评分
    let disp= e.target.getAttribute('value');
    this.props.actions.getptyjxq(this.state.userName,this.state.token,disp);
    //查看评价
    this.setState({
      isptyj:true,
      advaid:disp
    })
  }
  handptyjplc(){
    //关闭评价
    this.setState({
      isptyj:false,
      advaid:0
    })
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
  handover(e){
    //获取个人信息
    this.props.actions.getwumaoge(this.state.userName,this.state.token,e.target.getAttribute('data'));
  }
  handlb(){
    this.setState({
      islb:!this.state.islb
    })
  }
  handlbtz(){
    this.setState({
      islbtz:!this.state.islbtz
    })
  }
  handlbfw(){
    this.setState({
      islbfw:!this.state.islbfw
    })
  }
  handlbgsk(){
    this.setState({
      islbgsk:!this.state.islbgsk
    })
  }
  componentDidMount() {   //初始化事件
    this.props.actions.getyjfw(this.state.userName,this.state.token);   //获取运价类型
    this.props.actions.getypfw(this.state.userName,this.state.token);   //获取特种货类型
    this.props.actions.getyjsfw(this.state.userName,this.state.token);  //运价页面启运地口岸
    this.props.actions.getyjports(this.state.userName,this.state.token,0);  //运价页面目的地口岸
    this.props.actions.getkanzs(this.state.userName,this.state.token,0);//服务页面最近口岸
    this.state.yjOtherAll.push(<Option key='0'>直接订舱</Option>);
    this.state.yjOtherAll.push(<Option key='1'>运价</Option>);
    this.state.yjOtherAll.push(<Option key='2'>双清</Option>);
    this.state.yjOtherAll.push(<Option key='3'>舱位</Option>);    //运价页面优势选项
  }
  servyjonChang(v){    //根据运价服务类型的chang事件
    this.setState({
      yj:v,
      strfw:'xseachop'
    });
    //根据服务获取口岸
    this.props.actions.getyjportsn(this.state.userName,this.state.token,v);//获取港口
    this.props.actions.getkanzs(this.state.userName,this.state.token,v);//获取最近起运地
    this.props.actions.getkanzsm(this.state.userName,this.state.token,v);//获取最近目的地
    this.props.actions.getyjcarrs(this.state.userName,this.state.token,v);//获取承运商
  }
  YjqyonChang(v){        //运价页面启运地onChang事件
    this.setState({
      yjqyName:v,
      strqyd:'xseachop'
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.yj;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getyjportsn(userName,token,serv,v);
      }
    }, 300);
  }
  YjqyonSelect(v,o){    //运价页面启运地onSelect事件
    let Value=o.props.date;
    this.setState({
      yjqy:Value
    });
  }
  YjmdonChange(v){
    this.setState({
      yjmdName:v,
      strmdd:'xseachop'
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.yj;
    if (timeoutm) {
      clearTimeout(timeoutm);
      timeoutm = null;
    }
    timeoutm = setTimeout(() => {
      if(v){
        this.props.actions.getyjportsn(userName,token,serv,v);
      }
    }, 300);
  }
  YjmdonSelect(v,o){
    let Value=o.props.date;
    this.setState({
      yjmd:Value
    });
  }
  YjcarronChange(v){
    this.setState({
      yjcarr:v,
      strcys:'xseachop'
    });
  }
  servtzonChange(v){  //根据特种运价服务类型的chenge事件
    this.setState({
      tz:v,
      strfwt:'xseachop'
    });
  }
  tzportonChange(v){
    this.setState({
      tzportName:v,
      strkan:'xseachop'
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.tz;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getyjportsn(userName,token,serv,v);
      }
    }, 300);
  }
  tzportonSelect(v,o){
    let Value=o.props.date;
    this.setState({
      tzport:Value
    });
  }
  servfwonChange(v){ //根据服务类型的chang事件
    this.setState({
      fw:v,
      jtfw:'具体服务',
      strfwf:'xseachop'
    });
    //根据服务获取具体服务
    this.props.actions.getyjsjtfww(this.state.userName,this.state.token,v);//获取具体服务
    this.props.actions.getyjportsn(this.state.userName,this.state.token,v);//获取港口
    this.props.actions.getkanzs(this.state.userName,this.state.token,v);//获取最近港口
  }
  fwjtfwonChange(v){    //具体服务change事件
    this.setState({
      jtfw:v,
      strjtfwf:'xseachop'
    });
  }
  fwportonChange(v){
    this.setState({
      fwportName:v,
      strkanf:'xseachop'
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
        this.props.actions.getyjportsn(userName,token,serv,v);
      }
    }, 300);
  }
  fwportonSelect(v,o){
    let Value=o.props.date;
    this.setState({
      fwport:Value
    });
  }
  gsinduonChange(v){
    this.setState({
      gsindu:v,
      strhy:'xseachop'
    });
  }
  gsportonChange(v){
    this.setState({
      gsportName:v,
      strkangsk:'xseachop'
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv='';
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getyjportsn(userName,token,serv,v);
      }
    }, 300);
  }
  gsportonSelect(v,o){
    let Value=o.props.date;
    this.setState({
      gsport:Value
    });
  }
  YjOtheronChange(v){
    this.setState({
      yjOther:v,
    });
  }
  yjSearchonClick(){
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.yj;
    let depaPort=this.state.yjqy==undefined?'':this.state.yjqy;
    let destPort=this.state.yjmd==undefined?'':this.state.yjmd;
    let carr=this.state.yjcarr==-1?'':this.state.yjcarr;
    let Other = this.state.yjOther;   //let booking = 0 in Other?  1:0;
    let booking= '';
    let freight= '';
    let qing ='';
    let shipSpace ='';
    if (Other.indexOf('0')<0){
      booking =0;
    }else{
      booking =1;
    }
    if (Other.indexOf('1')<0){            //let freight=1 in Other?  1:0;
      freight =0;
    }else{
      freight =1;
    }
    if (Other.indexOf('2')<0){            //let qing=2 in Other?  1:0;
      qing =0;
    }else{
      qing =1;
    }
    if (Other.indexOf('3')<0){            //let shipSpace=3 in Other?  1:0;
      shipSpace =0;
    }else{
      shipSpace =1;
    }
    if(serv=='服务类型'||depaPort==''||destPort==''||carr=='承运商'){
      if(serv=='服务类型'){
        this.setState({
          strfw:'xseachop xseachopa'
        })
      }
      if(depaPort==''){
        this.setState({
          strqyd:'xseachop xseachopa'
        })
      }
      if(destPort==''){
        this.setState({
          strmdd:'xseachop xseachopa'
        })
      }
      if(carr=='承运商'){
        this.setState({
          strcys:'xseachop xseachopa'
        })
      }
      message.error("请选择完整");
    }else{
      this.setState({
        islb:true
      });
      this.props.actions.getyjlist(userName,token,1,serv,depaPort,destPort,carr,booking,freight,qing,shipSpace);//获取搜索数据
      if(this.props.text.user.viewCont == 1){
        this.setState({
          wumaoqx:true
        })
      }else{
        this.setState({
          wumaoqx:false
        })
      }
    }
  }
  fwSearchonClick(){
    this.setState({
      islbfw:true
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.fw;
    let servOpti=this.state.jtfw;
    let port=this.state.fwport;

    if(serv=='服务类型'||servOpti=='具体服务'||port==undefined){
      if(serv=='服务类型'){
        this.setState({
          strfwf:'xseachop xseachopa'
        })
      }
      if(servOpti=='具体服务'){
        this.setState({
          strjtfwf:'xseachop xseachopa'
        })
      }
      if(port==undefined){
        this.setState({
          strkanf:'xseachop xseachopa'
        })
      }
      message.error("请选择完整");
    }else{
      this.props.actions.getfwlist(userName,token,1,serv,servOpti,port);//获取搜索数据
      if(this.props.text.user.viewCont == 1){
        this.setState({
          wumaoqx:true
        })
      }else{
        this.setState({
          wumaoqx:false
        })
      }
    }
  }
  tzSearchonClick(){
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.tz;
    let port=this.state.tzport;

    if(serv=='服务类型'||port==undefined){
      if(serv=='服务类型'){
        this.setState({
          strfwt:'xseachop xseachopa'
        })
      }
      if(port==undefined){
        this.setState({
          strkan:'xseachop xseachopa'
        })
      }
      message.error("请选择完整");
    }else{
      this.setState({
        islbtz:true
      });
      this.props.actions.getyplist(userName,token,1,serv,port);//获取搜索数据
      if(this.props.text.user.viewCont == 1){
        this.setState({
          wumaoqx:true
        })
      }else{
        this.setState({
          wumaoqx:false
        })
      }
    }
  }
  gsSearchonClick(){
    let userName = this.state.userName;
    let token = this.state.token;
    let indu = this.state.gsindu;
    let port = this.state.gsport;
    let userAcco = this.state.gsuserAcco;
    let compAlia = this.state.gscompAlia;
    let certNo = this.state.rzbh;
    if(userAcco!=''||compAlia!=''||indu!='行业'||port!=undefined||certNo!=''){
        this.setState({
            islbgsk:true
        });
        let indus= indu=='行业'?'':indu;
        let ports= port==undefined?'':port;
        this.props.actions.getvips(userName,token,indus,ports,compAlia,userAcco,certNo);//获取搜索数据
        if(this.props.text.user.viewCont == 1){
            this.setState({
                wumaoqx:true
            })
        }else{
            this.setState({
                wumaoqx:false
            })
        }
    }else{
        message.error("请选择查询条件");
    }
  }
  restgsk(){
    this.setState({
      gsindu:'行业',
      gsport:undefined,
      gscompAlia:'',
      gsuserAcco:'',
      islbgsk:false,
      gsportName:'',
      strhy:'xseachop',
      strkangsk:'xseachop',
      rzbh:''
    });
  }
  yjResetonClick(){
    this.setState({
      yj:'服务类型',
      yjqyName:'',
      yjmdName:'',
      yjqy:'',
      yjmd:'',
      yjcarr:'承运商',
      yjOther:'',
      islb:false
    });
  }
  fwResetonClick(){
    this.setState({
      fw:'服务类型',
      jtfw:'具体服务',
      fwportName:'',
      islbfw:false,
      fwport:undefined
    });
  }
  tzResetonClick(){
    this.setState({
      tz:'服务类型',
      tzportName:'',
      islbtz:false,
      tzport:undefined
    });
  }
  AddyjgysonClick(e){
    if(this.state.prov==1){
      //获取个人信息
      let uid= e.target.getAttribute('value');
      //let uid=this.props.rows.user;
      this.props.actions.getyjuinfo(this.state.userName,this.state.token,uid);
      this.setState({
        addgysyj:true
      })
    }else{
      message.error("您没有添加供应商的权限，请联系公司管理员开通！");
    }
  }
  AddfwgysonClick(e){
    if(this.state.prov==1){
      //获取个人信息
      let uid= e.target.getAttribute('value');
      this.props.actions.getyjuinfo(this.state.userName,this.state.token,uid);
      this.setState({
        addgysfw:true
      })
    }else{
      message.error("您没有添加供应商的权限，请联系公司管理员开通！");
    }
  }
  AddtzgysonClick(e){
    if(this.state.prov==1){
      //获取个人信息
      let uid= e.target.getAttribute('value');
      this.props.actions.getyjuinfo(this.state.userName,this.state.token,uid);
      this.setState({
        addgystz:true
      })
    }else{
      message.error("您没有添加供应商的权限，请联系公司管理员开通！");
    }
  }
  handgysc(){
    if (this.state.tabindex == 0){
      this.setState({
        addgysyj:false
      })
    }
    if (this.state.tabindex == 1){
      this.setState({
        addgystz:false
      })
    }
    if (this.state.tabindex == 2){
      this.setState({
        addgysfw:false
      })
    }
  }
  /*handleScroll(v){
    let a = [
      {"user":"7","contName":"大公司","compAliaName":"APL","labe":'111111'},
      {"user":"8","contName":"小公司","compAliaName":"BLM","labe":'111111'},
      {"user":"9","contName":"小公司","compAliaName":"BLM","labe":'111111'},
      {"user":"10","contName":"小公司","compAliaName":"BLM","labe":'111111'},
      {"user":"11","contName":"小公司","compAliaName":"BLM","labe":'111111'}
    ]; //调试数据

    let bodyheight = document.body.clientHeight;// 获取可见区域高
    let sohe=v.deltaY;//每次滚动高
    this.state.Hes+=sohe;//每次滚动叠加
    if((bodyheight-this.state.Hes)<=(bodyheight/2)) {

      if (this.state.tabindex == 1) {
        this.state.pageyj++;
        this.props.actions.getyjslistgd(this.state.userName, this.state.token, this.state.pagefw, this.state.fw, this.state.jtfw, this.state.fwport);//获取搜索条件 this.props.text.yjslists
        timeout = setTimeout(() => {
          this.setState({
            yjList: this.state.yjList.concat(this.props.text.yjslists)
          });
        }, 300);
        this.forceUpdate();
      }

      if (this.state.tabindex == 2) {
        this.state.pageyj++;
        this.props.actions.getyjslistgd(this.state.userName, this.state.token, this.state.pagefw, this.state.fw, this.state.jtfw, this.state.fwport);//获取搜索条件 this.props.text.yjslists
        timeout = setTimeout(() => {
          this.setState({
            tzList: this.state.tzList.concat(this.props.text.yjslists)
          });
        }, 300);
        this.forceUpdate();
      }

      if (this.state.tabindex == 3) {
        this.state.pagefw++;
        this.props.actions.getyjslistgd(this.state.userName, this.state.token, this.state.pagefw, this.state.fw, this.state.jtfw, this.state.fwport);//获取搜索条件 this.props.text.yjslists
        timeout = setTimeout(() => {
          this.setState({
            fwList: this.state.fwList.concat(this.props.text.yjslists)
          });
        }, 300);
        this.forceUpdate();
      }

      this.state.Hes=0;
    }
  }*/
  tabonSelect(index){
    if(index==3){
      //判断会员
      if(this.state.uvips==1){
        this.props.actions.getvips(this.state.userName,this.state.token,'','','','','');//获取会员数据
        this.setState({
          tabindex:index,
          wumaoqx:true,
          islbgsk:true
        });
      }else{
        message.error("贵公司还未认证，暂不能查看。请联系平台客服认证后查看 客服手机 13505741577！");
        this.setState({
          tabindex:0
        });
      }
    }else{
      this.setState({
        tabindex:index
      });
    }

  }
  render() {
    let logo=this.props.text.wumaoge.logo;
    let logos;
    if(logo!=null&&logo!=''&&logo!='null'){
      logos=<img className="infologo" src={HTTPED+logo.substring(1)}/>;
    }else{
      logos=undefined
    }
    const texts=(
      <div>
        {logos}
        <p className="infologop">授信是否通过：{this.props.text.wumaoge.depositEnab==1?'是':'否'}</p>
      </div>
    );
    const content = (
      <div>
        <p>
          {
            this.props.text.wumaoge.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
          }
          公司全称:{this.props.text.wumaoge.compName}
        </p>
        <p>公司简称:{this.props.text.wumaoge.compAlia}</p>
        <p>行业:{this.props.text.wumaoge.induName}</p>
        <p>口岸:{this.props.text.wumaoge.portName}</p>
        <p>职位:{this.props.text.wumaoge.posi}</p>
        <p>手机:{this.props.text.wumaoge.mobi}</p>
        <p>电话:{this.props.text.wumaoge.phon}</p>
        <p>QQ:{this.props.text.wumaoge.qq}</p>
        <p>邮箱:{this.props.text.wumaoge.mail}</p>
        <p>地址:{this.props.text.wumaoge.addr}</p>
      </div>
    );
    return (
      <div className="baidu">
        <Tabs className="searchp" selectedIndex = { this.state.tabindex } onSelect={this.tabonSelect}>
          <div className="baidu1">
            <h3 className="baidu2">物贸BAIDU</h3>
            <TabList  className="searchtabstab-list" >
              <Tab className="react-tabs__tab">普通运价</Tab>
              <Tab className="react-tabs__tab">特种货运价</Tab>
              <Tab className="react-tabs__tab">服务</Tab>
              <Tab className="react-tabs__tab">认证库</Tab>
            </TabList>
            <div className="baidu3">
              <div className="baidu4">
                <img className="baidu5" src={require('../../src/image/ptzs.png')} />
                <span>平台展示</span>
              </div>
              <div className="baidu4">
                <img className="baidu5" src={require('../../src/image/hyzs.png')} />
                <span>会员展示</span>
              </div>
            </div>
          </div>
          <TabPanel>
            <div className="tab-paneltop">
              <Select showSearch
                      value={this.state.yj}
                      style={{ width: 150 }}
                      className={this.state.strfw}
                      notFoundContent=""
                      filterOption={false}
                      placeholder="服务类型"
                      onChange={this.servyjonChang}
              >
                {
                  this.props.text.yjser.map(s => {
                    return <Option key={s.serv}>{s.servName}</Option>
                  })
                }
              </Select>
                <Select combobox
                        value={this.state.yjqyName}
                        style={{ width: 150 }}
                        className={this.state.strqyd}
                        notFoundContent=""
                        defaultActiveFirstOption={false}
                        filterOption={false}
                        placeholder="请输入起运地并选择"
                        onChange={this.YjqyonChang}
                        onSelect={this.YjqyonSelect}
                >
                <OptGroup key='0' label="所有">
                  {
                    this.props.text.yjportsn.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
                <OptGroup key='1' label="最近">
                  {
                    this.props.text.kanzs.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
              </Select>
                <Select combobox
                        value={this.state.yjmdName}
                        style={{ width: 150 }}
                        className={this.state.strmdd}
                        notFoundContent=""
                        defaultActiveFirstOption={false}
                        filterOption={false}
                        placeholder="请输入目的地并选择"
                        onChange={this.YjmdonChange}
                        onSelect={this.YjmdonSelect}
                >
                <OptGroup label="所有">
                  {
                    this.props.text.yjportsn.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
                <OptGroup label="最近">
                  {
                    this.props.text.kanzsm.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
              </Select>
              <Select showSearch
                      value={this.state.yjcarr}
                      style={{ width: 150 }}
                      className={this.state.strcys}
                      filterOption={this.handfilts}
                      notFoundContent="请选择服务或未找到"
                      placeholder="承运商"
                      onChange={this.YjcarronChange}
              >
                <OptGroup label="全部">
                  {
                    <Option key='-1'>全部</Option>
                  }
                </OptGroup>
                <OptGroup label="所有">
                  {
                    this.props.text.yjcarrs.map(s => <Option key={s.carr}>{s.carrName}</Option>)
                  }
                </OptGroup>
              </Select>

              <Select multiple
                      style={{ width: 270 }}
                      notFoundContent=""
                      placeholder="优势明细,可多选"
                      className="xseachop"
                      defaultValue={[]}
                      onChange={this.YjOtheronChange}
              >
                {this.state.yjOtherAll}
              </Select>
              <button className="sbutton" onClick={this.yjSearchonClick}>搜索</button>
              <button className="sbutton" onClick={this.yjResetonClick}>重置</button>
            </div>
            <div className="tilehead">
              <ul>
                <li className="tileElement3">联系人</li>
                <li className="tileElement">公司</li>
                <li className="tileElement">承运商</li>
                <li className="tileElement2">优势明细</li>
                <li className="tileElement">标注</li>
                <li className="tileElement5">承运商/优势 评论</li>
                <li className="tileElement4" onClick={this.handlb}>
                  <span>收起</span>
                  {
                    this.state.islb?<img src={require('../../src/image/zk.png')} />:<img src={require('../../src/image/sq.png')} />
                  }
                </li>
              </ul>
            </div>
            {
              this.state.islb?
                this.state.wumaoqx?
              <div className="record">
                {
                  this.props.text.yjlists.map((S) => {
                    return (
                      <ul key={S.user}>
                       <li className="recordElement3" title={S.contName}>
                         {
                           S.isPlat == 1?<img className="recordElement4" src={require('../../src/image/ptzs.png')} />:undefined
                         }
                         {
                           S.isVIP == 1?<img className="recordElement4" src={require('../../src/image/hyzs.png')} />:undefined
                         }
                          <Popover content={content} title={texts} trigger="hover">
                             <span className="recordElementmz" data={S.user} onMouseEnter={this.handover}>{S.contName}</span>
                          </Popover>
                         {
                           S.contQq?
                             <a target="_blank" className="qqqe"
                                href={"http://wpa.qq.com/msgrd?v=3&uin=" + S.contQq + "&site=qq&menu=yes"}>
                               <img src={require('../../src/image/qqqe.png')} alt="点击这里给我发消息"
                                    title="点击这里给我发消息"/>
                             </a>:undefined
                         }
                        </li>
                        <li className="recordElement" title={S.compAliaName}>{S.compAliaName}</li>
                        <li className="recordElement" title={S.carrName}>{S.carrName}</li>
                        <li className="recordElement2">{S.booking == 1 ? '直接订舱/' : ''}{S.freight == 1 ? '运价/' : ''}{S.qing == 1 ? 'DDP DDU/' : ''}{S.shipSpace == 1 ? '保障舱位' : ''}</li>
                        <li className="recordElement" title={S.labe}>{S.labe}</li>
                        <li className="recordElement6">
                          <button className="sbutton5" onClick={this.handptyjpl} value={S.adva}>查看评论</button>
                        </li>
                        <li className="recordElement5">
                          <button className="sbutton5" onClick={this.AddyjgysonClick} value={S.user}>加入供应商</button>
                        </li>
                        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                          {
                            this.state.addgysyj ?
                              <Addgys
                                value={S.user}
                                servtype="3"
                                actions={this.props.actions}
                                text={this.props.text}
                                handgysc={this.handgysc}
                              /> : undefined}
                        </VelocityTransitionGroup>
                      </ul>
                    );
                  })
                }
              </div>:
              <div className="record">
                <span className="wmbdqx">本次搜索共有{this.props.text.resultAll}条,您还没有搜索权限，请联系 张先生 手机(微信):13505741577 开通</span>
              </div>:undefined
            }
          </TabPanel>   {/*运价tab页面*/}
          <TabPanel>
            <div className="tab-paneltop">
              <Select showSearch
                      value={this.state.tz}
                      style={{ width: 150 }}
                      className={this.state.strfwt}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="服务类型"
                      onChange={this.servtzonChange}
              >
                {
                  this.props.text.ypser.map(s => {
                    return <Option key={s.serv}>{s.servName}</Option>
                  })
                }
              </Select>
                <Select combobox
                        value={this.state.tzportName}
                        style={{ width: 150 }}
                        className={this.state.strkan}
                        notFoundContent=""
                        defaultActiveFirstOption={false}
                        filterOption={false}
                        placeholder="请输入口岸并选择"
                        onChange={this.tzportonChange}
                        onSelect={this.tzportonSelect}
                >
                <OptGroup key='0' label="所有">
                  {
                    this.props.text.yjportsn.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
                <OptGroup key='1' label="最近">
                  {
                    this.props.text.kanzs.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
              </Select>
              <button className="sbutton" onClick={this.tzSearchonClick}>搜索</button>
              <button className="sbutton" onClick={this.tzResetonClick}>重置</button>
            </div>
            <div className="tilehead">
              <ul>
                <li className="tileElement3">联系人</li>
                <li className="tileElement">公司</li>
                <li className="tileElement">标注</li>
                <li className="tileElement5">承运商/优势 评论</li>
                <li className="tileElement4" onClick={this.handlbtz}>
                  <span>收起</span>
                  {
                    this.state.islbtz?<img src={require('../../src/image/zk.png')} />:<img src={require('../../src/image/sq.png')} />
                  }
                </li>
              </ul>
            </div>
            {
              this.state.islbtz?
                this.state.wumaoqx?
              <div className="record">
                {
                  this.props.text.yplists.map((S) => {
                    return (
                      <ul key={S.user}>
                        <li className="recordElement3" title={S.contName}>
                          {
                            S.isPlat == 1?<img className="recordElement4" src={require('../../src/image/ptzs.png')} />:undefined
                          }
                          {
                            S.isVip == 1?<img className="recordElement4" src={require('../../src/image/hyzs.png')} />:undefined
                          }
                          <Popover content={content} title={texts} trigger="hover">
                            <span className="recordElementmz" data={S.user} onMouseEnter={this.handover}>{S.contName}</span>
                          </Popover>
                          {
                            S.contQq?
                              <a target="_blank" className="qqqe"
                                 href={"http://wpa.qq.com/msgrd?v=3&uin=" + S.contQq + "&site=qq&menu=yes"}>
                                <img src={require('../../src/image/qqqe.png')} alt="点击这里给我发消息"
                                     title="点击这里给我发消息"/>
                              </a>:undefined
                          }
                        </li>
                        <li className="recordElement" title={S.compAliaName}>{S.compAliaName}</li>
                        <li className="recordElement" title={S.labe}>{S.labe}</li>
                        <li className="recordElement6">
                          <button className="sbutton5" onClick={this.handptyjpl} value={S.adva}>查看评论</button>
                        </li>
                        <li className="recordElement5">
                          <button className="sbutton5" onClick={this.AddtzgysonClick} value={S.user}>加入供应商</button>
                        </li>
                        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                          {
                            this.state.addgystz ?
                              <Addgys
                                value={S.user}
                                servtype="4"
                                actions={this.props.actions}
                                text={this.props.text}
                                handgysc={this.handgysc}
                              /> : undefined}
                        </VelocityTransitionGroup>
                      </ul>
                    );
                  })
                }
              </div>:
              <div className="record">
                <span className="wmbdqx">本次搜索共有{this.props.text.resultAll}条,您还没有搜索权限，请联系 张先生 手机(微信):13505741577 开通</span>
              </div>:undefined
            }
          </TabPanel>   {/*特种tab页面*/}
          <TabPanel>
            <div className="tab-paneltop">
                <Select showSearch
                        value={this.state.fw}
                        style={{ width: 150 }}
                        className={this.state.strfwf}
                        filterOption={false}
                        optionFilterProp="children"
                        notFoundContent="无法找到"
                        placeholder="服务类型"
                        onChange={this.servfwonChange}
                >
                {
                  this.props.text.yjsser.map(s => {
                    return <Option key={s.serv}>{s.servName}</Option>
                  })
                }
              </Select>
              <Select showSearch
                      value={this.state.jtfw}
                      style={{ width: 150 }}
                      className={this.state.strjtfwf}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      filterOption={false}
                      placeholder="具体服务"
                      onChange={this.fwjtfwonChange}
              >
                {
                  this.props.text.yjsjtfww.map(s => <Option key={s.servOpti}>{s.name}</Option>)
                }
              </Select>
                <Select combobox
                        value={this.state.fwportName}
                        style={{ width: 150 }}
                        className={this.state.strkanf}
                        notFoundContent=""
                        defaultActiveFirstOption={false}
                        showArrow={false}
                        filterOption={false}
                        placeholder="请输入口岸并选择"
                        onChange={this.fwportonChange}
                        onSelect={this.fwportonSelect}
                >
                <OptGroup key='0' label="所有">
                  {
                    this.props.text.yjportsn.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
                <OptGroup key='1' label="最近">
                  {
                    this.props.text.kanzs.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
              </Select>
              <button className="sbutton" onClick={this.fwSearchonClick}>搜索</button>
              <button className="sbutton" onClick={this.fwResetonClick}>重置</button>
            </div>
            <div className="tilehead">
              <ul>
                <li className="tileElement3">联系人</li>
                <li className="tileElement">公司</li>
                <li className="tileElement">标注</li>
                <li className="tileElement5">承运商/优势 评论</li>
                <li className="tileElement4" onClick={this.handlbfw}>
                  <span>收起</span>
                  {
                    this.state.islbfw?<img src={require('../../src/image/zk.png')} />:<img src={require('../../src/image/sq.png')} />
                  }
                </li>
              </ul>
            </div>
            {
              this.state.islbfw?
                this.state.wumaoqx?
              <div className="record">
                {
                  this.props.text.fwlists.map((S) => {
                    return (
                      <ul key={S.user}>
                        <li className="recordElement3" title={S.contName}>
                          {
                            S.isPlat == 1?<img className="recordElement4" src={require('../../src/image/ptzs.png')} />:undefined
                          }
                          {
                            S.isVip == 1?<img className="recordElement4" src={require('../../src/image/hyzs.png')} />:undefined
                          }
                          <Popover content={content} title={texts} trigger="hover">
                            <span className="recordElementmz" data={S.user} onMouseEnter={this.handover}>{S.contName}</span>
                          </Popover>
                          {
                            S.contQq?
                              <a target="_blank" className="qqqe"
                                 href={"http://wpa.qq.com/msgrd?v=3&uin=" + S.contQq + "&site=qq&menu=yes"}>
                                <img src={require('../../src/image/qqqe.png')} alt="点击这里给我发消息"
                                     title="点击这里给我发消息"/>
                              </a>:undefined
                          }
                        </li>
                        <li className="recordElement" title={S.compAliaName}>{S.compAliaName}</li>
                        <li className="recordElement" title={S.labe}>{S.labe}</li>
                        <li className="recordElement6">
                          <button className="sbutton5" onClick={this.handfwpj} value={S.cont}>查看评论</button>
                        </li>
                        <li className="recordElement5">
                          <button className="sbutton5" onClick={this.AddfwgysonClick} value={S.user}>加入供应商</button>
                        </li>
                        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                          {
                            this.state.addgysfw ?
                              <Addgys
                                value={S.user}
                                servtype="2"
                                actions={this.props.actions}
                                text={this.props.text}
                                handgysc={this.handgysc}
                              /> : undefined}
                        </VelocityTransitionGroup>
                      </ul>
                    );
                  })
                }
              </div>:
                <div className="record">
                  <span className="wmbdqx">本次搜索共有{this.props.text.resultAll}条,您还没有搜索权限，请联系 张先生 手机(微信):13505741577 开通</span>
                </div>:undefined
            }
          </TabPanel>   {/*服务tab页面*/}
          <TabPanel>
            <div className="tab-paneltop">
                <Select showSearch
                        value={this.state.gsindu}
                        style={{ width: 150 }}
                        className={this.state.strhy}
                        filterOption={false}
                        optionFilterProp="children"
                        notFoundContent="无法找到"
                        placeholder="行业"
                        onChange={this.gsinduonChange}
                >
                <OptGroup label="所有">
                  {
                    this.props.text.indus.map(s => <Option key={s.indu}>{s.induName}</Option>)
                  }
                </OptGroup>
              </Select>
              <Select combobox
                      value={this.state.gsportName}
                      style={{ width: 150 }}
                      className={this.state.strkangsk}
                      notFoundContent=""
                      defaultActiveFirstOption={false}
                      showArrow={false}
                      filterOption={false}
                      placeholder="请输入口岸并选择"
                      onChange={this.gsportonChange}
                      onSelect={this.gsportonSelect}
              >
                <OptGroup key='0' label="所有">
                  {
                    this.props.text.yjportsn.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
                <OptGroup key='1' label="最近">
                  {
                    this.props.text.kanzs.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                  }
                </OptGroup>
              </Select>
              <Input
                value={this.state.gscompAlia}
                placeholder="公司简称(非必填)"
                className="wmsinp"
                style={{ width: 150 }}
                onChange={(e)=>{return this.setState({gscompAlia:e.target.value})}}
              />
              <Input
                value={this.state.gsuserAcco}
                placeholder="账号(非必填)"
                className="wmsinp"
                style={{ width: 150 }}
                onChange={(e)=>{return this.setState({gsuserAcco:e.target.value})}}
              />
              <Input
                value={this.state.rzbh}
                placeholder="认证编号"
                className="wmsinp"
                style={{ width: 150 }}
                onChange={(e)=>{return this.setState({rzbh:e.target.value})}}
              />
              <button className="sbutton" onClick={this.gsSearchonClick}>搜索</button>
              <button className="sbutton" onClick={this.restgsk}>重置</button>
            </div>
            <div className="tilehead">
              <ul>
                <li className="tileElement">姓名</li>
                <li className="tileElement3">账号</li>
                <li className="tileElement">公司</li>
                <li className="tileElement">认证编号</li>
                <li className="tileElement">行业</li>
                <li className="tileElement">口岸</li>
                <li className="tileElement4" onClick={this.handlbgsk}>
                  <span>收起</span>
                  {
                    this.state.islbgsk?<img src={require('../../src/image/zk.png')} />:<img src={require('../../src/image/sq.png')} />
                  }
                </li>
              </ul>
            </div>
            {
              this.state.islbgsk?
                this.state.wumaoqx?
              <div className="record">
                {
                  this.props.text.vipl.length==0?
                    <div className="record">
                      <span className="wmbdqx">本次搜索未查到</span>
                    </div>:
                    this.props.text.vipl.map((S) => {
                      return (
                        <ul key={S.user}>
                          <li className="recordElement" title={S.name}>
                            <Popover content={content} title={texts} trigger="hover">
                              <span className="recordElementmz" data={S.user} onMouseEnter={this.handover}>{S.name}</span>
                            </Popover>
                          </li>
                          <li className="recordElement3" title={S.userAcco}>
                              <span className="recordElementmz">{S.userAcco}</span>
                            {
                              S.qq?
                                <a target="_blank" className="qqqe"
                                   href={"http://wpa.qq.com/msgrd?v=3&uin=" + S.qq + "&site=qq&menu=yes"}>
                                  <img src={require('../../src/image/qqqe.png')} alt="点击这里给我发消息"
                                       title="点击这里给我发消息"/>
                                </a>:undefined
                            }
                          </li>
                          <li className="recordElement" title={S.compAlia}>{S.compAlia}</li>
                          <li className="recordElement" title={S.certNo}>{S.certNo}</li>
                          <li className="recordElement" title={S.induName}>{S.induName}</li>
                          <li className="recordElement" title={S.portName}>{S.portName}</li>
                        </ul>
                      );
                    })
                }
              </div>:
                  <div className="record">
                    <span className="wmbdqx">本次搜索共有{this.props.text.resultAll}条,您还没有搜索权限，请联系 张先生 手机(微信):13505741577 开通</span>
                  </div>:undefined
            }
          </TabPanel>   {/*公司tab页面*/}
        </Tabs>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.state.isptyj ?
              <Ptyjpj
                advaid={this.state.advaid}
                actions={this.props.actions}
                text={this.props.text}
                handptyjplc={this.handptyjplc}
              /> : undefined}
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.state.isfwpj ?
              <Fwpj
                advaid={this.state.cont}
                actions={this.props.actions}
                text={this.props.text}
                handfwpjc={this.handfwpjc}
              /> : undefined}
        </VelocityTransitionGroup>
      </div>

    );
  }
}

