/**
 * Created by Zing on 2016/10/28.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Bgcdel from './bgcdel';
import { Select, Checkbox, message } from 'antd';
export default class Bdelot extends Component {
    constructor(props) {
        super(props);
        this.handclo=this.handclo.bind(this);
        this.handch=this.handch.bind(this);
        this.handhl=this.handhl.bind(this);
        this.handzf=this.handzf.bind(this);
        this.handhf=this.handhf.bind(this);
        this.lvcl = this.lvcl.bind(this);
        this.lvclc = this.lvclc.bind(this);
        this.lvChange = this.lvChange.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            userid:sessionStorage.getItem("SESSIONUSER"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            repl:sessionStorage.getItem("SESSIONSYSREPL"),
            checked:true,
            islv: false
        }
    }
    lvcl() {
        this.setState({
            islv: true
        })
    }
    lvclc() {
        this.setState({
            islv: false
        })
    }
    lvChange(e) {
        this.setState({
          checked: e.target.checked
        })
      }
    handzf(){
        this.props.actions.gethpcarrs(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取该服务承运商
        this.props.actions.getportshf(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取该服务的港口
        this.props.actions.gethpwtuo(this.state.userName,this.state.token,this.state.comp);//获取委托人
        this.props.actions.gethpcarrscy(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取常用承运商
        this.props.actions.gethpportszj(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取最近起运港港口
        this.props.actions.gethpportszjm(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取最近港口目的地
        this.props.actions.gethpsendto(this.state.userName,this.state.token,this.props.bck.enqudx.serv,this.props.bck.enqudx.depaPort,this.props.bck.enqudx.destPort);//获取收件人(对应服务供应商)
        this.props.handzfshow(this.props.keysd,this.props.bck.enqudx.serv);
    }
    handch(){
        this.props.handchshow(this.props.keysd);
        this.props.actions.gethpcarrs(this.state.userName,this.state.token,this.props.bck.enqudx.serv);//获取该服务承运商
        //获取回盘人信用余额
        this.props.actions.getgyyer(this.state.userName,this.state.token);
    }
    handhl(){
        this.props.actions.gethphl(this.state.userName,this.state.token,this.props.bck.repldx.repl);//忽略
        this.props.actions.hpshow(false);
    }
    handhf(){
        this.props.actions.gethphf(this.state.userName,this.state.token,this.props.bck.repldx.repl);//恢复
        this.props.actions.hpshow(false);
    }
    handclo(){
        this.props.actions.hpshow(false);
    }
    render() {
        let strch=<li><a className="bntact" href='javascript:void(0);' onClick={this.handch}>重回</a></li>;
        let strhp=<li><a className="bntact" href='javascript:void(0);' onClick={this.handch}>回盘</a></li>;
        let strhl=<li><a className="bntact" href='javascript:void(0);' onClick={this.handhl}>忽略</a></li>;
        let strhf=<li><a className="bntact" href='javascript:void(0);' onClick={this.handhf}>恢复</a></li>;
        let strxz=<li><a className="bntactB" href={this.props.bck.filename} title={this.props.bck.enqudx.file} download={this.props.bck.enqudx.file}>托单下载</a></li>;
        let strzf=<li><a className="bntact" href='javascript:void(0);' onClick={this.handzf}>转发</a></li>;
        let ch,hp,hl,hf,xz,zf;
        if(this.state.repl!=1){
            ch=undefined;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=undefined;
        }else{
            if(this.props.bck.iscz){
                ch=undefined;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=strzf;
            }else {
                if(this.props.hl){
                    ch=undefined;hp=undefined;hl=undefined;hf=strhf;xz=undefined;zf=undefined;
                }else{
                    switch(this.props.bck.repldx.enquStat){
                        case 10:
                            if(this.props.bck.repldx.repler>0){
                                ch=strch;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=strzf;
                            }else{
                                ch=undefined;hp=strhp;hl=strhl;hf=undefined;xz=undefined;zf=strzf;
                            }
                            break;
                        case 20:
                            ch=undefined;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=strzf;
                            break;
                        case 30:
                            ch=undefined;hp=undefined;hl=undefined;hf=undefined;zf=strzf;
                            if(this.props.bck.repldx.replStat==30){
                                this.props.bck.enqudx.file!=null?xz=strxz:xz=undefined;
                            }else{
                                xz=undefined;
                            }
                            break;
                        case 40:
                            ch=undefined;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=strzf;
                            break;
                        case 50:
                            ch=undefined;hp=undefined;hl=undefined;hf=undefined;xz=undefined;zf=strzf;
                            break;
                        default:
                            ch=strch;hp=strhp;hl=strhl;hf=strhf;xz=strxz;zf=strzf;
                            break;
                    }
                }
            }
        }
        let sfile=this.props.bck.enqudx.file;
        let sary;
        if(sfile!=null){
            sfile=sfile.split('/');
            sary=sfile[sfile.length-1];
        }else{
            sary='无';
        }
        return (
            <div className="bdeldiv">
                <div className="bdel1">
                    <a className="close" href='javascript:void(0);' onClick={this.handclo}>X</a>
                    <div className="bdel2">
                        <div className="bdel3">
                            <span>回盘-{this.props.bck.repldx.repl}</span>
                            <ul>
                                {ch}
                                {hp}
                                {hl}
                                {hf}
                                {xz}
                                {zf}
                            </ul>
                        </div>
                        <div className="bdel4">
                            <div className="bdel6">
                                {
                                    this.props.bck.repldx.replStat==30?
                                        <img src={require('../../src/image/zb.png')}/>:undefined
                                }
                                <span>抄送</span>
                                <p>{this.props.bck.cctoary}</p>
                            </div>
                            <div className="bdel20">
                                <h5>O/F</h5>
                                <ul>
                                    {
                                        this.props.bck.repldx.FR20 != null &&this.props.bck.repldx.FR20!=0?
                                            <li>
                                                <span className="bdel20sp">20OT</span>
                                                <p>{this.props.bck.repldx.freiCurr}:{this.props.bck.repldx.FR20}</p>
                                            </li>:undefined
                                    }
                                    {
                                        this.props.bck.repldx.FR40 != null &&this.props.bck.repldx.FR40!=0 ?
                                            <li>
                                                <span className="bdel20sp">40OT</span>
                                                <p>{this.props.bck.repldx.freiCurr}:{this.props.bck.repldx.FR40}</p>
                                            </li>:undefined
                                    }
                                </ul>
                            </div>
                            <div className="bdel8">
                                <ul>
                                    <li>
                                        <span className="bdel8sp">运价有效期</span>
                                        <p>
                                            {this.props.bck.repldx.expiDate!=null?
                                                moment(this.props.bck.repldx.expiDate).format('YYYY.MM.DD'):''}
                                        </p>
                                    </li>
                                    <li>
                                        <span className="bdel8sp">承运商</span>
                                        <p>{this.props.bck.repldx.carrName}</p>
                                    </li>
                                    <li>
                                        <span className="bdel8sp">中转地</span>
                                        <p>{this.props.bck.repldx.tranPortName==null?'无':this.props.bck.repldx.tranPortName}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bdel9">
                                <ul>
                                    <li>
                                        <span className="bdel9sp">T/T</span>
                                        {
                                            this.props.bck.repldx.sailDays==null?undefined:
                                                <p>{this.props.bck.repldx.sailDays}天</p>
                                        }
                                    </li>
                                    <li>
                                        <span className="bdel9sp">CLS</span>
                                        <p>{
                                            this.props.bck.repldx.closTime==0?'未指定':
                                                this.props.bck.repldx.closTime==1?'周一':
                                                    this.props.bck.repldx.closTime==2?'周二':
                                                        this.props.bck.repldx.closTime==3?'周三':
                                                            this.props.bck.repldx.closTime==4?'周四':
                                                                this.props.bck.repldx.closTime==5?'周五':
                                                                    this.props.bck.repldx.closTime==6?'周六':
                                                                        this.props.bck.repldx.closTime==7?'周日':''
                                        }
                                        </p>
                                    </li>
                                    <li>
                                        <span className="bdel9sp">ETD</span>
                                        <p>
                                            {
                                                this.props.bck.repldx.sailTime==0?'未指定':
                                                    this.props.bck.repldx.sailTime==1?'周一':
                                                        this.props.bck.repldx.sailTime==2?'周二':
                                                            this.props.bck.repldx.sailTime==3?'周三':
                                                                this.props.bck.repldx.sailTime==4?'周四':
                                                                    this.props.bck.repldx.sailTime==5?'周五':
                                                                        this.props.bck.repldx.sailTime==6?'周六':
                                                                            this.props.bck.repldx.sailTime==7?'周日':''
                                            }
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bdel10">
                                <span>回盘备注</span>
                                <p>{this.props.bck.repldx.replMemo}</p>
                            </div>
                            {
                                typeof(this.props.bck.cabReplb.trans) == 'undefined' ? undefined :
                                    <Bgcdel actions={this.props.actions}
                                            bck={this.props.bck}/>
                            }
                            <div className="getxp7ss">
                                <div className="getxp8">
                                    <a href="javascript:void(0);" onClick={this.lvcl}>请先浏览《供舱方协议》</a>
                                </div>
                                <div className="getxp9">
                                    <Checkbox checked={this.state.checked}
                                        onChange={this.lvChange}
                                    >
                                        我已阅读，并接受。
                            </Checkbox>
                                </div>
                            </div>
                        </div>
                        <div className="bdel5">
                            <div className="bdel11">
                                <ul>
                                    <li>
                                        <span>询盘号</span>
                                        <p>{this.props.bck.enqudx.enqu}</p>
                                    </li>
                                    <li>
                                        <span>询盘人</span>
                                        <p className="bdel11p">
                                            {this.props.bck.enqudx.mngrName!=''&&this.props.bck.enqudx.mngrName!=null?this.props.bck.enqudx.mngrName:this.props.bck.enqudx.enquerName}
                                        </p>
                                    </li>
                                    <li>
                                        <span>起运地</span>
                                        <p>{this.props.bck.enqudx.depaPortName}</p>
                                    </li>
                                    <li>
                                        <span>目的地</span>
                                        <p>{this.props.bck.enqudx.destPortName}</p>
                                    </li>
                                    <li>
                                        <span>运输要求</span>
                                        <p>{
                                            this.props.bck.enqudx.tranship==1?'直达':
                                                this.props.bck.enqudx.tranship==2?'中转':
                                                    this.props.bck.enqudx.tranship==3?'不限':''
                                        }
                                        </p>
                                    </li>
                                    <li>
                                        <span>完货日期</span>
                                        <p>{moment(this.props.bck.enqudx.compDate).format('YYYY-MM-DD')}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bdel12">
                                <span>承运商</span>
                                <p>{this.props.bck.carrsary}</p>
                            </div>
                            <div className="bdel12">
                                <span>询盘时间</span>
                                <p>{moment(this.props.bck.enqudx.enquTime).format('YYYY-MM-DD HH:mm')}</p>
                            </div>
                            <div className="bdel21">
                                <ul>
                                    <li>
                                        <span>品名</span>
                                        <p>{this.props.bck.enqudx.itemName}</p>
                                    </li>
                                    <li>
                                        <span className="fjfile">附件</span>
                                        {

                                            this.props.bck.enqudx.file!=null?
                                                <img title={sary} src={require('../../src/image/hxz.png')}/>:<p>无</p>
                                        }
                                    </li>
                                </ul>
                            </div>
                            <div className="bdel22">
                                <span>货物信息</span>
                                <ul>
                                    {
                                        this.props.bck.enqudx.FR20 != 0 ?
                                            <li>
                                                20OT*{this.props.bck.enqudx.FR20} GW {this.props.bck.enqudx.FR20Wate}t
                                            </li>:undefined
                                    }
                                    {
                                        this.props.bck.enqudx.FR40 != 0 ?
                                            <li>
                                                40OT*{this.props.bck.enqudx.FR40} GW {this.props.bck.enqudx.FR40Wate}t
                                            </li>:undefined
                                    }
                                </ul>
                            </div>
                            <div className="bdel30">
                                <ul>
                                    <li>
                                        <span>长</span>
                                        <p>{this.props.bck.enqudx.leng}m</p>
                                    </li>
                                    <li>
                                        <span>宽</span>
                                        <p>{this.props.bck.enqudx.widt}m</p>
                                    </li>
                                    <li>
                                        <span>高</span>
                                        <p>{this.props.bck.enqudx.high}m</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="bdel14">
                                <span>更多要求</span>
                                <p>{this.props.bck.enqudx.enquMemo}</p>
                            </div>
                            {
                                typeof(this.props.cabrnew.cabEnqu.enquTar) == 'undefined' ? undefined :
                                    <div className="bdel43">
                                        <h4>求舱保函详情</h4>
                                        <ul className="bdel44">
                                            <li>
                                                <h5>定金金额:</h5>
                                                <span>{this.props.cabrnew.cabEnqu.curr == '1' ? '¥' : '$'} {this.props.cabrnew.cabEnqu.depo}</span>
                                            </li>
                                            <li>
                                                <h5>内陆费用:</h5>
                                                {
                                                    this.props.cabrnew.cabEnqu.cabFee == '0' ? <span></span> :
                                                        <span>{this.props.cabrnew.cabEnqu.curr == '1' ? '¥' : '$'} {this.props.cabrnew.cabEnqu.cabFee}</span>
                                                }
                                            </li>
                                            <li>
                                                <h5>求舱履约指标:</h5>
                                                <span>{this.props.cabrnew.cabEnqu.enquTar}</span>
                                            </li>
                                            <li>
                                                <h5>供舱履约指标:</h5>
                                                <span>{this.props.cabrnew.cabEnqu.replTar}</span>
                                            </li>
                                            <li>
                                                <h5>内陆方式:</h5>
                                                <span>{this.props.cabrnew.cabEnqu.cabServName};{this.props.cabrnew.cabEnqu.cabProvAlia}</span>
                                            </li>
                                        </ul>
                                    </div>
                            }
                        </div>
                    </div>
                    {
                        this.state.islv ?
                        <div className="getxp10bg">
                            <div className="getxp10s">
                                <div className="getxp11">
                                    <h2>为解决货运舱位的不确定，完善行业内信用体制。 请遵守以下协议：</h2>
                                    &nbsp;&nbsp;&nbsp;&nbsp;1.贵方所有帐号在物贸帮帮网站上的所有动作均代表贵方企业意愿并承担相应法律责任。贵方公司管理员账号是与贵方签订的书面协议里的账号，如有变更公司管理员，以新的公司管理员为准。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;2.贵方需提供一定金额的押金给平台，用于与贵方求舱方的舱位保函的定金，每次的定金数额由求舱方来定。贵方可以接受也可以拒绝，接受就可以押上同等定金报价，如拒绝可以不回复价格。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;3.贵方收到到贵方求舱方的求舱保函时，可以回复价格，在有效期内如被贵方求舱方中标，则求供舱双方形成了有效的舱位保函协议，双方必须按照各自的要求履约。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;4.如贵方求舱方在选择内陆运输为“求舱方安排车队”后，则贵方求舱方需要录入准确的车牌号和司机手机号，否则日后如有纠纷，对求舱方不利。车队提不到空箱的认定条件为：如提不到空箱，贵方求舱方需立即与贵方发送手机短信、EMAIL、微信等书面信息，并打电话确认是否无空箱，如贵方确认无空箱，则贵方求舱方未违约。如求舱方有提箱需求的书面信息给贵方，贵方未回复的。由甲方进行调查，确定是否违约。贵方如有不服，可向平台所在地仲裁。（供舱方履约条件为“货物上运输工具”的除外）<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;5.如贵方求舱方在选择内陆运输为“供舱方安排车队”后，贵方需要录入准确的车牌号和司机手机号，否则日后如有纠纷，对贵方不利。车队提不到空箱的认定条件为：如提不到空箱，需立即与贵方求舱方发送手机短信、EMAIL、微信等书面信息，并打电话确认是否无空箱，如求舱方确认无空箱，则贵方未违约。如贵方有提箱需求的书面信息给求舱方，求舱方未回复的。由甲方进行调查，确定是否违约。贵方如有不服，可向平台所在地仲裁。（供舱方履约条件为“货物上运输工具”的除外）<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;6.贵方求舱方在保函成立之时，两个小时内，可无责点击“退关”，无违约费用。如超过两小时之后，在最晚退关时间之前点击“退关”，贵方求舱方将产生平台服务费。当超过最晚退关时间点击“退关”或者违约时，贵方求舱方视为违约，则贵方求舱方的定金罚没。平台将贵方求舱方的80%的定金补偿给贵方。。如贵方违约，贵方的定金将被罚没，20%交于平台作为平台费用。80%补偿给贵方求舱方。当双方都违约，或者遇到第三方等非人为所控的因素造成违约，平台也视为求供舱双方不违约。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;7.当求供舱双方顺利完成交易，确认对方都已履约后，则系统自动退回所押定金。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;8.8.当贵方多次出现违约情况，平台将予以警告，并酌情考虑其是否继续使用该产品。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;9.9.贵方求舱方选择“货物进仓”所做的舱位保函时，贵方或者贵方求舱方必须使用平台指定的仓库。费用由贵方或者贵方求舱方与平台结算。<br /><br />
                                    <h2>特别说明：</h2>
                                    &nbsp;&nbsp;&nbsp;&nbsp;1.选择“货物进仓”的内陆方式：如遇货物查验或者运输工具临时取消时，以及仓库提不到空箱，则视为特殊情况，求供舱双方互不违约。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;2.选择“求舱方安排车队”的内陆方式：如遇货物查验或者运输工具临时取消时，以及车队提不到空箱，则视为特殊情况，求供舱双方互不违约。如求舱方选择贵方的履约条件为“货物上运输工具”，车队提不到空箱不能视为特殊情况，属于贵方违约。但贵方求舱方必须在提不到箱子时候第一时间联系贵方，如两个小时内贵方不能解决空箱提取，则视为贵方违约。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;3.选择“供舱方安排车队”的内陆方式：如遇货物查验或者运输工具临时取消时，以及车队提不到空箱，则视为特殊情况，求供舱双方互不违约。如贵方求舱方选择贵方的履约条件为“货物上运输工具”，车队提不到空箱不能视为特殊情况，属于贵方违约。<br /><br />

                                    &nbsp;&nbsp;&nbsp;&nbsp;4.履约条件是“货物上运输工具”，即意味着供舱方必须保证箱子和舱位，任意一项违约即为供舱方违约。除非在免责条款里说明的事项。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;5.货物查验或者运输工具临时取消发生的违约，属于求供舱双方互不违约。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;6.平台对违约以及各项条款有最终解释权。<br /><br />
                                </div>
                                <a className="getxp12" href='javascript:void(0);' onClick={this.lvclc}>关闭</a>
                            </div>
                            </div> : undefined
                    }
                </div>
            </div>
        );
    }
}