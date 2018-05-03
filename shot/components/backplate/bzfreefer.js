/**
 * Created by Zing on 2016/7/27.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Bsjr from './bsjr';
import Bcsr from './bcsr';
import Bcys from './bcys';
import {Checkbox,Input,DatePicker,Radio,Select,message} from 'antd';
import Zselectopzf from './../ccom/zselectopzf';
const RadioGroup = Radio.Group;
const Option = Select.Option;
const OptGroup = Select.OptGroup;

export default class Bzfreefer extends Component {
    constructor(props) {
        super(props);
        this.handlesend=this.handlesend.bind(this);
        this.handlerest=this.handlerest.bind(this);
        this.handleclose=this.handleclose.bind(this);
        this.handmdd=this.handmdd.bind(this);
        this.handfilts=this.handfilts.bind(this);
        this.handsjrc=this.handsjrc.bind(this);
        this.handcsrc=this.handcsrc.bind(this);
        this.handcysc=this.handcysc.bind(this);
        this.hsjr=this.hsjr.bind(this);
        this.hsjrc=this.hsjrc.bind(this);
        this.hsjrq=this.hsjrq.bind(this);
        this.hcsr=this.hcsr.bind(this);
        this.hcsrc=this.hcsrc.bind(this);
        this.hcsrq=this.hcsrq.bind(this);
        this.hcys=this.hcys.bind(this);
        this.hcysc=this.hcysc.bind(this);
        this.hcysq=this.hcysq.bind(this);
        this.handq=this.handq.bind(this);
        let matchs=false;
        this.props.text.comps.matcEnqu==1?matchs=true:matchs=false;
        let admiAcco='';
        let comp=sessionStorage.getItem("SESSIONCOMP");
        if(comp!=0) {
            admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
        }
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:comp,
            bgport:this.props.bck.enqudx.depaPortName,
            edport:this.props.bck.enqudx.destPortName,
            sendTo:[],
            ccto:[],
            mngr:undefined,
            match:matchs,
            compDate:moment(this.props.bck.enqudx.compDate).format('YYYY-MM-DD'),
            carrs:[],
            tranship:this.props.bck.enqudx.tranship,
            RF20:this.props.bck.enqudx.RF20,
            RF20Wate:this.props.bck.enqudx.RF20Wate,
            RF40:this.props.bck.enqudx.RF40,
            RF40Wate:this.props.bck.enqudx.RF40Wate,
            shpr:this.props.bck.enqudx.shpr,
            temp:this.props.bck.enqudx.temp,
            itemName:this.props.bck.enqudx.itemName,
            expiDate:moment(this.props.bck.enqudx.expiDate).format('YYYY-MM-DD'),
            enquMemo:this.props.bck.enqudx.enquMemo,
            userid:sessionStorage.getItem("SESSIONUSER"),
            admiAcco:admiAcco,
            isjs:false,
            icss:false,
            icys:false
        }
    }
    handq(v){
        this.setState({
            bgport:v,
            sendTo:[]
        });
        this.props.actions.gethpsendto(this.state.userName,this.state.token,this.props.bck.enqudx.serv,v,this.state.edport);//获取收件人(对应服务供应商)
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
    handcysc(){
        this.setState({
            carrs:[]
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
    hcys(){
        this.setState({
            icys:true
        })
    }
    hcysc(){
        this.setState({
            icys:false
        })
    }
    hcysq(v){
        this.setState({
            carrs:v
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
    handmdd(v){
        this.setState({
            edport:v,
            sendTo:[]
        });
        this.props.actions.gethpsendto(this.state.userName,this.state.token,this.props.bck.enqudx.serv,this.state.bgport,v);//获取收件人(对应服务供应商)
    }
    handlesend(){
        let userid=this.state.userid;
        let userName =this.state.userName;
        let token = this.state.token;
        let serv = this.props.sclss;
        let depaPort = this.state.bgport==this.props.bck.enqudx.depaPortName?this.props.bck.enqudx.depaPort:this.state.bgport;
        let destPort = this.state.edport==this.props.bck.enqudx.destPortName?this.props.bck.enqudx.destPort:this.state.edport;
        let sendTo = "["+this.state.sendTo+"]";
        let fg='',admininfo='';
        if(this.state.comp>0){
            fg=this.state.ccto==''?'':this.props.text.priv.admi!=0?'':',';
            admininfo=this.props.text.priv.admi!=0?'':this.props.bck.adminlinfohp;
        }
        let ccto = "["+this.state.ccto+fg+admininfo+"]";
        let mngr = this.state.mngr==undefined?'':this.state.mngr;
        let match = this.state.match?1:0;
        let compDate = moment(this.state.compDate).format('YYYY-MM-DD');
        let carrs='';
        if(this.state.carrs.length>0){
            if(JSON.parse(this.state.carrs[0]).carr == 0){
                carrs='';
            }else{
                carrs = "["+this.state.carrs+"]";
            }
        }
        let tranship = this.state.tranship;
        let RF20 = this.state.RF20;
        let RF20Wate = this.state.RF20Wate;
        let RF40 = this.state.RF40;
        let RF40Wate = this.state.RF40Wate;
        let shpr = this.state.shpr;
        let temp = this.state.temp;
        let itemName = this.state.itemName;
        let expiDate = moment(this.state.expiDate).format('YYYY-MM-DD');
        let enquMemo = this.state.enquMemo;
        if(depaPort==''||destPort==''){
            message.error('请填写完整在提交！')
        }else{
            this.props.actions.gethpxaddreefer(userid,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,RF20,RF20Wate,RF40,RF40Wate,shpr,temp,itemName,expiDate,enquMemo);
            this.props.handzfclose();
        }
    }
    handleclose() {
        this.props.handzfclose();
    }
    handlerest(){
        let matchs=false;
        this.props.text.comps.matcEnqu==1?matchs=true:matchs=false;
        this.setState({
            bgport:this.props.bck.enqudx.depaPortName,
            edport:this.props.bck.enqudx.destPortName,
            sendTo:[],
            ccto:[],
            mngr:undefined,
            match:matchs,
            compDate:moment(this.props.bck.enqudx.compDate).format('YYYY-MM-DD'),
            carrs:[],
            tranship:this.props.bck.enqudx.tranship,
            RF20:this.props.bck.enqudx.RF20,
            RF20Wate:this.props.bck.enqudx.RF20Wate,
            RF40:this.props.bck.enqudx.RF40,
            RF40Wate:this.props.bck.enqudx.RF40Wate,
            shpr:this.props.bck.enqudx.shpr,
            temp:this.props.bck.enqudx.temp,
            itemName:this.props.bck.enqudx.itemName,
            expiDate:moment(this.props.bck.enqudx.expiDate).format('YYYY-MM-DD'),
            enquMemo:this.props.bck.enqudx.enquMemo
        });
        this.refs.xpqydx.handcz();
        this.refs.xpmddx.handcz();
    }
    render() {
        return (
            <div className="xnewfcl">
                <div className="xnew1">
                    <a className="xclo" href='javascript:void(0);' onClick={this.handleclose}>X</a>
                    <div className="xnew2">
                        <div className="xnew3">
                            <h4>新增询盘-RF</h4>
                            <ul>
                                <li><a href='javascript:void(0);' onClick={this.handlesend}>发送</a></li>
                                <li><a href='javascript:void(0);' onClick={this.handlerest}>重置</a></li>
                            </ul>
                        </div>
                        <div className="xnew4">
                            <ul>
                                <li className="xnew15">
                                    <div className="xnew5">
                                        <span className="xspan5">起运地</span>
                                        <Zselectopzf
                                            ref='xpqydx'
                                            vas={this.props.bck.enqudx.depaPortName}
                                            handleChangev={this.handq}
                                            className="Z-select1"
                                            opizj={this.props.bck.hpportszj}
                                            opi={this.props.bck.hportsf}
                                            />
                                        <i className="xicolor">*</i>
                                    </div>
                                    <div className="xnew6">
                                        <span className="xspan5">目的地</span>
                                        <Zselectopzf
                                            ref='xpmddx'
                                            vas={this.props.bck.enqudx.destPortName}
                                            handleChangev={this.handmdd}
                                            className="Z-select1"
                                            opizj={this.props.bck.hpportszjm}
                                            opi={this.props.bck.hportsf}
                                            />
                                        <i className="xicolor">*</i>
                                    </div>
                                </li>
                                <li className="xnew15">
                                    <span className="xspan5">收件人</span>
                                    <div className="xnew16">
                                        <a className="xpsjr" href="javascript:void(0);" onClick={this.hsjr}>
                                            {this.state.sendTo.length==0?'填写收件人':'已填写'}
                                        </a>
                                        <span>收件人为已录入的供应商，可请公司有权限的人录入.</span>
                                    </div>
                                </li>
                                {
                                    this.state.comp!=0?
                                        <li className="xnew15">
                                            <span className="xspan5">抄送</span>
                                            <div className="xnew16">
                                                <a className="xpsjr" href="javascript:void(0);" onClick={this.hcsr}>
                                                    {this.state.ccto.length==0?'填写抄送人':'已填写'}
                                                </a>
                                                <span>请选择公司同事抄送,可多选.</span>
                                            </div>
                                        </li>:undefined
                                }
                                <li className="xnew15">
                                    {
                                        this.state.comp != 0 ?
                                            <div className="xnew7">
                                                <span className="xspan5">委托</span>
                                                <Select showSearch
                                                        value={this.state.mngr}
                                                        className="xaddmngr"
                                                        style={{ width: 150}}
                                                        optionFilterProp="children"
                                                        notFoundContent="无法找到"
                                                        placeholder="请选择委托的人"
                                                        onChange={(v)=>{return this.setState({mngr:v})}}
                                                    >
                                                    {
                                                        this.props.bck.hpwtuo.map((item, index)=> {
                                                            return <Option key={item.user}>{item.name}</Option>
                                                        })
                                                    }
                                                </Select>
                                                {
                                                    this.props.text.comps.matcEnqu == 1 ?
                                                        <span className="xspan5">平台供应商</span> : undefined
                                                }
                                                {
                                                    this.props.text.comps.matcEnqu == 1 ?
                                                        <Checkbox
                                                            value={this.state.match}
                                                            checked={this.state.match}
                                                            onChange={(e)=>{return this.setState({match:e.target.checked})}}
                                                            >
                                                        </Checkbox> : undefined
                                                }
                                            </div>:undefined
                                    }
                                    <div className="xnew8">
                                        <span className="xspan5">完货日期</span>
                                        <div>
                                            <DatePicker
                                                value={this.state.compDate}
                                                format="yyyy-MM-dd"
                                                placeholder="完货日期"
                                                style={{ width: 125,marginLeft:5 }}
                                                onChange={(v)=>{return this.setState({compDate:v})}}
                                                />
                                        </div>
                                    </div>
                                </li>
                                <li className="xnew15">
                                    <span className="xspan5">承运商</span>
                                    <div className="xnew16">
                                        <a className="xpsjr" href="javascript:void(0);" onClick={this.hcys}>
                                            {this.state.carrs.length==0?'填写承运商':'已填写'}
                                        </a>
                                        <span>承运商,可多选.</span>
                                    </div>
                                </li>
                                <li className="xnew15">
                                    <span className="xspan5">运输要求</span>
                                    <div className="xnew9">
                                        <RadioGroup
                                            value={this.state.tranship}
                                            defaultValue={3}
                                            onChange={(e)=>{return this.setState({tranship:e.target.value})}}
                                            >
                                            <Radio key="a" value={3}>不限</Radio>
                                            <Radio key="b" value={1}>直达</Radio>
                                            <Radio key="c" value={2}>转运</Radio>
                                        </RadioGroup>
                                    </div>
                                </li>
                                <li className="xnew15">
                                    <span className="xspan5">20RF</span>
                                    <ul className="xnew10">
                                        <li>
                                            <Input
                                                value={this.state.RF20}
                                                placeholder="个数"
                                                className="xsmaills"
                                                onChange={(e)=>{return this.setState({RF20:e.target.value})}}
                                                />/
                                            <Input
                                                value={this.state.RF20Wate}
                                                placeholder="总重"
                                                className="xsmaills"
                                                onChange={(e)=>{return this.setState({RF20Wate:e.target.value})}}
                                                />T
                                        </li>
                                        <li>
                                            <span>40RF</span>
                                            <Input
                                                value={this.state.RF40}
                                                placeholder="个数"
                                                className="xsmaills"
                                                onChange={(e)=>{return this.setState({RF40:e.target.value})}}
                                                />/
                                            <Input
                                                value={this.state.RF40Wate}
                                                placeholder="总重"
                                                className="xsmaills"
                                                onChange={(e)=>{return this.setState({RF40Wate:e.target.value})}}
                                                />T
                                        </li>
                                        <li>
                                            <span>发货人</span>
                                            <Input
                                                value={this.state.shpr}
                                                placeholder="发货人"
                                                style={{width:110}}
                                                className="xmidls"
                                                onChange={(e)=>{return this.setState({shpr:e.target.value})}}
                                                />
                                        </li>
                                    </ul>
                                </li>
                                <li className="xnew15">
                                    <span className="xspan5">温度</span>
                                    <div className="xnew11">
                                        <Input
                                            value={this.state.temp}
                                            placeholder="温度"
                                            style={{width:115}}
                                            onChange={(e)=>{return this.setState({temp:e.target.value})}}
                                            />℃
                                    </div>
                                    <div className="xnew12">
                                        <span>品名</span>
                                        <Input
                                            value={this.state.itemName}
                                            placeholder="品名"
                                            style={{width:115}}
                                            className="xmidls"
                                            onChange={(e)=>{return this.setState({itemName:e.target.value})}}
                                            />
                                    </div>
                                </li>
                                <li className="xnew15">
                                    <span className="xspan5">询盘有效期</span>
                                    <div className="xnew13">
                                        <DatePicker
                                            value={this.state.expiDate}
                                            format="yyyy-MM-dd"
                                            placeholder="询盘有效期"
                                            style={{ width: 140 }}
                                            onChange={(v)=>{return this.setState({expiDate:v})}}
                                            />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="xnew14">
                            <span className="xspan5">更多要求</span>
                            <textarea
                                value={this.state.enquMemo}
                                maxLength="155"
                                placeholder="(字数上限100)"
                                onChange={(e)=>{return this.setState({enquMemo:e.target.value})}}
                                ></textarea>
                        </div>
                    </div>
                    {
                        this.state.isjs?
                            <Bsjr actions={this.props.actions}
                                  bck={this.props.bck}
                                  hsjrc={this.hsjrc}
                                  hsjrq={this.hsjrq}
                                  sendTo={this.state.sendTo}
                                  handsjrc={this.handsjrc}
                                />
                            :undefined
                    }
                    {
                        this.state.icss?
                            <Bcsr actions={this.props.actions}
                                  bck={this.props.bck}
                                  hcsrc={this.hcsrc}
                                  hcsrq={this.hcsrq}
                                  admiAcco={this.state.admiAcco}
                                  ccto={this.state.ccto}
                                  handcsrc={this.handcsrc}
                                />
                            :undefined
                    }
                    {
                        this.state.icys?
                            <Bcys actions={this.props.actions}
                                  bck={this.props.bck}
                                  hcysc={this.hcysc}
                                  hcysq={this.hcysq}
                                  carrs={this.state.carrs}
                                  handcysc={this.handcysc}
                                />
                            :undefined
                    }
                </div>
            </div>
        );
    }
}