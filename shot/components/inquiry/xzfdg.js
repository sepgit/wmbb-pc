/**
 * Created by Zing on 2016/10/27.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Sjr from './sjr';
import Csr from './csr';
import Cys from './cys';
import Cabcw from './cabcw';
import {Checkbox,Input,DatePicker,Radio,Select,message,Modal} from 'antd';
import Zselectopzf from './../ccom/zselectopzf';
const RadioGroup = Radio.Group;
const Option = Select.Option;
const OptGroup = Select.OptGroup;
const confirm = Modal.confirm;

export default class Xzfdg extends Component {
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
        this.handqbcw=this.handqbcw.bind(this);
        this.hdjye=this.hdjye.bind(this);
        this.hqclv=this.hqclv.bind(this);
        this.hgclv=this.hgclv.bind(this);
        this.hptgys=this.hptgys.bind(this);
        this.hgys1=this.hgys1.bind(this);
        this.hgys2=this.hgys2.bind(this);
        this.hgys3=this.hgys3.bind(this);
        this.handbz=this.handbz.bind(this);
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
            bgport:this.props.getdetil.enqu.depaPortName,
            edport:this.props.getdetil.enqu.destPortName,
            sendTo:[],
            ccto:[],
            mngr:undefined,
            match:matchs,
            compDate:moment(this.props.getdetil.enqu.compDate).format('YYYY-MM-DD'),
            carrs:[],
            tranship:this.props.getdetil.enqu.tranship,
            GP20:this.props.getdetil.enqu.GP20,
            GP20Wate:this.props.getdetil.enqu.GP20Wate,
            GP40:this.props.getdetil.enqu.GP40,
            HQ40:this.props.getdetil.enqu.HQ40,
            clas:this.props.getdetil.enqu.clas,
            unno:this.props.getdetil.enqu.unno,
            itemName:this.props.getdetil.enqu.itemName,
            expiDate:moment(this.props.getdetil.enqu.expiDate).format('YYYY-MM-DD'),
            enquMemo:this.props.getdetil.enqu.enquMemo,
            userid:sessionStorage.getItem("SESSIONUSER"),
            admiAcco:admiAcco,
            isjs:false,
            icss:false,
            icys:false,
            djye:undefined,
            qclv:'',
            gclv:'',
            ptgys:'1',
            gys1:undefined,
            gys2:'',
            gys3:'',
            isbh:false,
            bz:'1'
        }
    }
    handbz(v){
        this.setState({
            bz:v
        })
    }
    hdjye(e){
        this.setState({
            djye:e.target.value
        })
    }
    hqclv(v){
        this.setState({
            qclv:v
        })
    }
    hgclv(v){
        this.setState({
            gclv:v
        })
    }
    hptgys(e){
        this.setState({
            ptgys:e.target.value
        })
    }
    hgys1(v){
        let depaPort = this.state.bgport==undefined?'':this.state.bgport;
        this.props.actions.getgysl(this.state.userName,this.state.token,v,this.props.sclss,depaPort);//平台供应商(列表)
        let curr=this.state.bz;
        this.props.actions.getckfy(this.state.userName,this.state.token,v,this.props.sclss,depaPort,curr);//仓库费用
        this.setState({
            gys1:v
        });
    }
    hgys2(v){
        this.setState({
            gys2:v
        })
    }
    hgys3(e){
        this.setState({
            gys3:e.target.value
        })
    }
    handqbcw(){
        let depaPort = this.state.bgport==undefined?'':this.state.bgport;
        if(depaPort==''){
            message.error('请填写起运地！');
        }else{
            if(this.state.isbh){
                let This=this;
                confirm({
                    title: '您是否确认要收起',
                    content: '收起舱位将清空数据！',
                    onOk() {
                        This.setState({
                            isbh:false,
                            djye:undefined,
                            qclv:'',
                            gclv:'',
                            gys1:'',
                            bz:'1'
                        })
                    },
                    onCancel() {}
                });
            }else{
                this.props.actions.getgyye(this.state.userName,this.state.token);//求仓信用金额（可用余额）
                this.props.actions.getgysfw(this.state.userName,this.state.token);//平台供应商（服务）
                this.setState({
                    isbh:!this.state.isbh,
                    djye:undefined,
                    qclv:'',
                    gclv:'',
                    gys1:'',
                    bz:'1'
                })
            }
        }
    }
    handq(v){
        this.setState({
            bgport:v,
            sendTo:[]
        });
        this.props.actions.getsendto(this.state.userName,this.state.token,this.props.sclss,v,this.state.edport);//获取收件人(对应服务供应商)
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
        this.props.actions.getsendto(this.state.userName,this.state.token,this.props.getdetil.enqu.serv,this.state.bgport,v);//获取收件人(对应服务供应商)
    }
    handlesend(){
        let userid=this.state.userid;
        let userName =this.state.userName;
        let token = this.state.token;
        let serv = this.props.sclss;
        let depaPort = this.state.bgport==this.props.getdetil.enqu.depaPortName?this.props.getdetil.enqu.depaPort:this.state.bgport;
        let destPort = this.state.edport==this.props.getdetil.enqu.destPortName?this.props.getdetil.enqu.destPort:this.state.edport;
        let sendTo = "["+this.state.sendTo+"]";
        let fg='',admininfo='';
        if(this.state.comp>0){
            fg=this.state.ccto==''?'':this.props.text.priv.admi!=0?'':',';
            admininfo=this.props.text.priv.admi!=0?'':this.props.getnewlist.adminlinfo;
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
        let GP20 = this.state.GP20==''?0:this.state.GP20;
        let GP20Wate = this.state.GP20Wate;
        let GP40 = this.state.GP40==''?0:this.state.GP40;
        let HQ40 = this.state.HQ40==''?0:this.state.HQ40;
        let unno = this.state.unno;
        let clas = this.state.clas;
        let itemName = this.state.itemName;
        let expiDate = moment(this.state.expiDate).format('YYYY-MM-DD');
        let enquMemo = this.state.enquMemo;
        //舱位保函
        let isbh=this.state.isbh;
        let depo=this.state.djye;
        let num=this.props.cabnew.cabFee;
        let cabFee=num["20GP"]*GP20+num["40GP"]*GP40+num["40HQ"]*HQ40;
        let enquTar=this.state.qclv;
        let replTar=this.state.gclv;
        let provType=this.state.ptgys;
        let cabServ=this.state.gys1;
        let cabProv=this.state.gys2;
        let cabEnqu=this.state.gys3;
        cabFee=cabFee>0?cabFee:0;
        let curr=this.state.bz;
        //发送
        if(depaPort==''||destPort==''){
            message.error('请填写完整在提交！');
        }else{
            if(isbh){
                if(depo==undefined||enquTar==''||replTar==''||cabServ==undefined){
                    message.error('请填写完整舱位在提交！');
                }else{
                    this.props.actions.getxadddg(userid,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,GP20,GP20Wate,GP40,HQ40,clas,unno,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr);
                    this.props.handisnewc(0);
                }
            }else{
                this.props.actions.getxadddg(userid,userName,token,serv,depaPort,destPort,sendTo,ccto,mngr,match,compDate,carrs,tranship,GP20,GP20Wate,GP40,HQ40,clas,unno,itemName,expiDate,enquMemo,isbh,depo,cabFee,enquTar,replTar,provType,cabServ,cabProv,cabEnqu,curr);
                this.props.handisnewc(0);
            }
        }
    }
    handleclose() {
        this.props.handisnewc(0);
    }
    handlerest(){
        let matchs=false;
        this.props.text.comps.matcEnqu==1?matchs=true:matchs=false;
        this.setState({
            bgport:this.props.getdetil.enqu.depaPortName,
            edport:this.props.getdetil.enqu.destPortName,
            sendTo:[],
            ccto:[],
            mngr:undefined,
            match:matchs,
            compDate:moment(this.props.getdetil.enqu.compDate).format('YYYY-MM-DD'),
            carrs:[],
            tranship:this.props.getdetil.enqu.tranship,
            GP20:this.props.getdetil.enqu.GP20,
            GP20Wate:this.props.getdetil.enqu.GP20Wate,
            GP40:this.props.getdetil.enqu.GP40,
            HQ40:this.props.getdetil.enqu.HQ40,
            clas:this.props.getdetil.enqu.clas,
            unno:this.props.getdetil.enqu.unno,
            itemName:this.props.getdetil.enqu.itemName,
            expiDate:moment(this.props.getdetil.enqu.expiDate).format('YYYY-MM-DD'),
            enquMemo:this.props.getdetil.enqu.enquMemo,
            djye:undefined,
            qclv:'',
            gclv:'',
            ptgys:'1',
            gys1:undefined,
            gys2:'',
            gys3:'',
            bz:'1'
        });
        this.refs.xpqydx.handcz();
        this.refs.xpmddx.handcz();
    }
    render() {
        let num=this.props.cabnew.cabFee;
        let cabFee=0;
        if(this.state.ptgys=='1'){
            cabFee=num["20GP"]*this.state.GP20+num["40GP"]*this.state.GP40+num["40HQ"]*this.state.HQ40;
        }else{
            cabFee=0;
        }
        return (
            <div className="xnewfcl">
                <div className="xnew1">
                    <a className="xclo" href='javascript:void(0);' onClick={this.handleclose}>X</a>
                    <div className="xnew2">
                        <div className="xnew3">
                            <h4>新增询盘-FCL</h4>
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
                                            vas={this.props.getdetil.enqu.depaPortName}
                                            handleChangev={this.handq}
                                            className="Z-select1"
                                            opizj={this.props.getdetil.portszj}
                                            opi={this.props.getdetil.xportsf}
                                            />
                                        <i className="xicolor">*</i>
                                    </div>
                                    <div className="xnew6">
                                        <span className="xspan5">目的地</span>
                                        <Zselectopzf
                                            ref='xpmddx'
                                            vas={this.props.getdetil.enqu.destPortName}
                                            handleChangev={this.handmdd}
                                            className="Z-select1"
                                            opizj={this.props.getdetil.portszjm}
                                            opi={this.props.getdetil.xportsf}
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
                                                        this.props.getnewlist.wtuo.map((item, index)=> {
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
                                    <span className="xspan5">20GP</span>
                                    <ul className="xnew10">
                                        <li>
                                            <Input
                                                value={this.state.GP20}
                                                placeholder="个数"
                                                className="xsmaills"
                                                onChange={(e)=>{return this.setState({GP20:e.target.value})}}
                                                />/
                                            <Input
                                                value={this.state.GP20Wate}
                                                placeholder="总重"
                                                className="xsmaills"
                                                onChange={(e)=>{return this.setState({GP20Wate:e.target.value})}}
                                                />T
                                        </li>
                                        <li>
                                            <span>40GP</span>
                                            <Input
                                                value={this.state.GP40}
                                                placeholder="个数"
                                                style={{width:115}}
                                                className="xmidls"
                                                onChange={(e)=>{return this.setState({GP40:e.target.value})}}
                                                />
                                        </li>
                                        <li>
                                            <span>40HQ</span>
                                            <Input
                                                value={this.state.HQ40}
                                                placeholder="个数"
                                                style={{width:110}}
                                                className="xmidls"
                                                onChange={(e)=>{return this.setState({HQ40:e.target.value})}}
                                                />
                                        </li>
                                    </ul>
                                </li>
                                <li className="xnew15">
                                    <span className="xspan5">40HQ</span>
                                    <div className="xnew11">
                                        <Input
                                            value={this.state.clas}
                                            style={{width:115}}
                                            onChange={(e)=>{return this.setState({clas:e.target.value})}}
                                            />类
                                    </div>
                                    <div className="xnew12">
                                        <span>UN NO:</span>
                                        <Input
                                            value={this.state.unno}
                                            style={{width:115}}
                                            className="xmidls"
                                            onChange={(e)=>{return this.setState({unno:e.target.value})}}
                                            />
                                    </div>
                                    <div className="xnew12">
                                        <span>品名</span>
                                        <Input
                                            value={this.state.itemName}
                                            style={{width:110}}
                                            placeholder="品名"
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
                        <div className="xnew30">
                            <h5>舱位保函申请</h5>
                            <a href="javascript:void(0);" onClick={this.handqbcw}>要求确保舱位</a>
                            <span>注：如查验引起的没上船，和船公司临时船不来，双方互不违约</span>
                        </div>
                        {
                            this.state.isbh?<Cabcw text={this.props.text}
                                                   cabnew={this.props.cabnew}
                                                   actions={this.props.actions}
                                                   djye={this.state.djye}
                                                   hdjye={this.hdjye}
                                                   qclv={this.state.qclv}
                                                   hqclv={this.hqclv}
                                                   gclv={this.state.gclv}
                                                   hgclv={this.hgclv}
                                                   ptgys={this.state.ptgys}
                                                   hptgys={this.hptgys}
                                                   gys1={this.state.gys1}
                                                   hgys1={this.hgys1}
                                                   gys2={this.state.gys2}
                                                   hgys2={this.hgys2}
                                                   gys3={this.state.gys3}
                                                   hgys3={this.hgys3}
                                                   cabFee={cabFee}
                                                   bz={this.state.bz}
                                                   handbz={this.handbz}
                            />:undefined
                        }
                    </div>
                    {
                        this.state.isjs?
                            <Sjr actions={this.props.actions}
                                 getdetil={this.props.getdetil}
                                 getnewlist={this.props.getnewlist}
                                 hsjrc={this.hsjrc}
                                 hsjrq={this.hsjrq}
                                 sendTo={this.state.sendTo}
                                 handsjrc={this.handsjrc}
                                />
                            :undefined
                    }
                    {
                        this.state.icss?
                            <Csr actions={this.props.actions}
                                 getdetil={this.props.getdetil}
                                 getnewlist={this.props.getnewlist}
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
                            <Cys actions={this.props.actions}
                                 getdetil={this.props.getdetil}
                                 getnewlist={this.props.getnewlist}
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