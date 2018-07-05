/**
 * Created by Zing on 2017/5/17.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Cabrno from './cabrno';
import HTTPED from '../../date/address';
import { message,Modal,Input } from 'antd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
const confirm = Modal.confirm;

export default class Cabrdetil extends Component {
    constructor(props) {
        super(props);
        this.handbqr=this.handbqr.bind(this);
        this.handbqrc=this.handbqrc.bind(this);
        this.handc1=this.handc1.bind(this);
        this.handno=this.handno.bind(this);
        this.handnoc=this.handnoc.bind(this);
        this.handqrzj=this.handqrzj.bind(this);
        this.handbzbc=this.handbzbc.bind(this);
        this.handbzc=this.handbzc.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            isbqr:false,
            isno:false,
            bz:''
        }
    }
    handbzbc(){
        this.props.actions.getgcbz(this.state.userName,this.state.token,this.props.cabrnew.cabReplr.cabRepl,this.state.bz);
    }
    handbzc(e){
        this.props.cabrnew.cabReplr.replCLabe=e.target.value;
        this.setState({bz:e.target.value})
    }
    handqrzj(){
        let This=this;
        confirm({
            title: '您是否要确认',
            content: '确认完不可恢复',
            onOk() {
                //确认自己履约
                This.props.actions.getqrzjlvr(This.state.userName,This.state.token,This.props.cabrnew.cabReplr.cabRepl,1,'',This.props.cabEnqu);
            },
            onCancel() {}
        });
    }
    handno(){
        this.setState({
            isno:true
        })
    }
    handnoc(){
        this.setState({
            isno:false
        })
    }
    handbqr(){
        this.setState({
            isbqr:true
        })
    }
    handbqrc(){
        this.setState({
            isbqr:false
        })
    }
    handc1(v){
        var arr=v.target.value.split('\\');
        var fileName=arr[arr.length-1];
        //上传
        let cabRepl=this.props.cabrnew.cabReplr.cabRepl;
        let formdate=new FormData();
        let filelvzm=this.refs.qcup1.files[0];
        if(filelvzm==undefined){
            message.error("请上传文件！");
        }else{
            if(filelvzm.type!='image/jpeg'&&filelvzm.type!='image/png'){
                message.error("请上传jpg或者png格式图片！");
            }else{
                formdate.append("userName", this.state.userName);
                formdate.append("token", this.state.token);
                formdate.append("enquFile", filelvzm);
                formdate.append("upFile", true);
                if(filelvzm.size>2097152){
                    message.error("只能上传小于2M的文件！");
                }else{
                    this.refs.qcup.innerHTML=fileName;//显示文件名
                    //上传履约证明
                    this.props.actions.getsclvzmr(cabRepl,formdate);
                }
            }
        }
    }
    
    render() {
        let qcf=this.props.cabrnew.cabReplr.enquFile;
        let gcf=this.props.cabrnew.cabReplr.replFile;
        let gcfl,qcfl;
        if(qcf!=null&&qcf!=''){
            qcfl=HTTPED+qcf.substring(1);
        }else{
            qcfl='';
        }
        if(gcf!=null&&gcf!=''){
            gcfl=HTTPED+gcf.substring(1);
        }else{
            gcfl='';
        }

        // let EnquStat,zt;
        // switch(this.props.cabrnew.cabReplr.stat){
        // case 10:
        //     EnquStat='正常';
        //     zt ='zt1';
        //     break;
        // case 20:
        //     EnquStat='过期';
        //     zt ='zt5';
        //     break;
        // case 30:
        //     EnquStat='履约';
        //     zt ='zt3';
        //     break;
        // case 40:
        //     EnquStat='退关';
        //     zt ='zt4';
        //     break;
        // case 50:
        //     EnquStat='争议';
        //     zt ='zt5';
        //     break;
        // case 60:
        //     EnquStat='撤销';
        //     zt ='zt5';
        //     break;
        // default:
        //     EnquStat='';
        //     zt ='';
        //     break;
        // }
        let EnquStat,zt;
    switch(this.props.cabrnew.cabReplr.cabSt){
      case 1:
        EnquStat='正常';
        zt ='zt1';
        break;
      case 2:
        EnquStat='退关';
        zt ='zt4';
        break;
      case 3:
        EnquStat='履约';
        zt ='zt3';
        break;
      case 4:
        EnquStat='争议';
        zt ='zt5';
        break;
      default:
        EnquStat='';
        zt ='';
        break;
    }
        console.log(this.props.cabrnew.cabReplr);
        return (
            <div className="cabzzc">
                <div className="cab70">
                    <div className="cab71">
                        <span>舱位保函详情-{this.props.cabrnew.cabReplr.cabRepl}</span>
                        <a className="cab72" href="javascript:void(0);" onClick={this.props.handxqc}>关闭</a>
                    </div>
                    <div className="cab120">
                        <ul>
                            <li>
                                <h5>服务类型:</h5>
                                <span>{this.props.cabrnew.cabReplr.servName}</span>
                            </li>
                            <li>
                                <h5>承运商:</h5>
                                <span>{this.props.cabrnew.cabReplr.carrName}</span>
                            </li>
                            <li>
                                <h5>起运地:</h5>
                                <span>{this.props.cabrnew.cabReplr.depaPortName}</span>
                            </li>
                            <li>
                                <h5>目的地:</h5>
                                <span>{this.props.cabrnew.cabReplr.destPortName}</span>
                            </li>
                            <li>
                                <h5>求舱指标:</h5>
                                <span>{this.props.cabrnew.cabReplr.enquTar}</span>
                            </li>
                            <li>
                                <h5>供舱指标:</h5>
                                <span>{this.props.cabrnew.cabReplr.replTar}</span>
                            </li>
                            <li>
                                <h5>求舱方:</h5>
                                <span>{this.props.cabrnew.cabReplr.reqName}</span>
                            </li>
                            <li>
                            </li>
                            <li>
                                <h5>运输工具:</h5>
                                <span>{this.props.cabrnew.cabReplr.trans}</span>
                            </li>
                            <li>
                                <h5>航次:</h5>
                                <span>{this.props.cabrnew.cabReplr.voyage}</span>
                            </li>
                            <li>
                                <h5>截关时间:</h5>
                                {
                                    this.props.cabrnew.cabReplr.lastCabTime == null ? '' :
                                        <span>{moment(this.props.cabrnew.cabReplr.lastCabTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                                }
                            </li>
                            <li>
                                <h5>开航时间:</h5>
                                {
                                    this.props.cabrnew.cabReplr.sailTime==null?<span></span>:
                                        <span>{moment(this.props.cabrnew.cabReplr.sailTime).format('YYYY-MM-DD')}</span>
                                }
                            </li>
                            
                            <li>
                                <h5>内陆方式:</h5>
                                <span>{this.props.cabrnew.cabReplr.cabServName}</span>
                            </li>
                            <li>
                                <h5>内陆费用:</h5>
                                {/* <span>{this.props.cabrnew.cabReplr.curr== '1' ? '¥' : '$'} {this.props.cabrnew.cabReplr.cabFee}</span> */}
                                <span> {this.props.cabrnew.cabReplr.cabFee}</span>
                                
                            </li>
                            {/*<li>
                                <h5>定金金额:</h5>
                                <span>{this.props.cabrnew.cabReplr.curr== '1' ? '¥' : '$'} {this.props.cabrnew.cabReplr.depo}</span>
                            </li>*/}
                            <li>
                                <h5>舱位状态:</h5>
                                <span className={zt}>{EnquStat}</span>
                            </li>
                            <li>
                                <h5>货物状态:</h5>
                                <span>{this.props.cabrnew.cabReplr.goodsStat}</span>
                            </li>
                            <li>
                                <h5>最晚退关时间:</h5>
                                {
                                    this.props.cabrnew.cabReplr.lastShutTime == null ? '' :
                                        <span>{moment(this.props.cabrnew.cabReplr.lastShutTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                                }
                            </li>
                            <li>
                                <h5>运价有效期:</h5>
                                {
                                    this.props.cabrnew.cabReplr.expiDate == null ? '' :
                                    <span>{moment(this.props.cabrnew.cabReplr.expiDate).format('YYYY-MM-DD HH:mm:ss')}</span>
                                }
                            </li>
                            {/* <li>
                                <h5>实际退关时间:</h5>
                                {
                                    this.props.cabrnew.cabReplr.shutTime==null?'':
                                    <span>{moment(this.props.cabrnew.cabReplr.shutTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                                        
                                }
                            </li> */}
                            
                            {
                                this.props.cabrnew.cabReplr.shutTime==null? <li></li> :
                                <li>
                                    <h5>实际退关时间:</h5>
                                    <span>{moment(this.props.cabrnew.cabReplr.shutTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                                </li>
                            }
                            <li></li>
                            
                            {/* <li>
                                <h5>备注:</h5>
                                <span className="overflowH">{this.props.cabrnew.cabReplr.label}</span>
                            </li> */}
                        </ul>
                    </div>
                    <div className="cab133">
                        <h5>运价和箱型:</h5>
                        <div className="cab134">
                          {
                            this.props.cabrnew.cabReplr.GP20?
                              <div className="cab53">
                                  <div className="cab54">
                                      <span>20GP:</span>
                                      <p>{this.props.cabrnew.cabReplr.GP20}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总运价:</span>
                                      <p>{this.props.cabrnew.cabReplr.freiCurr==1?'¥':'$'} {parseFloat(this.props.cabrnew.cabReplr.GP20F)*parseFloat(this.props.cabrnew.cabReplr.GP20)}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总定金:</span>
                                      <p>{this.props.cabrnew.cabReplr.curr==1?'¥':'$'} </p>
                                  </div>
                                  
                              </div>:undefined
                          }
                          {
                            this.props.cabrnew.cabReplr.GP40?
                              <div className="cab53">
                                  <div className="cab54">
                                      <span>40GP:</span>
                                      <p>{this.props.cabrnew.cabReplr.GP40}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总运价:</span>
                                      <p>{this.props.cabrnew.cabReplr.freiCurr==1?'¥':'$'} {parseFloat(this.props.cabrnew.cabReplr.GP40F)*parseFloat(this.props.cabrnew.cabReplr.GP40)}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总定金:</span>
                                      <p>{this.props.cabrnew.cabReplr.curr==1?'¥':'$'} </p>
                                  </div>
                                 
                              </div>:undefined
                          }
                          {
                            this.props.cabrnew.cabReplr.NOR40?
                              <div className="cab53">
                                  <div className="cab54">
                                      <span>40NOR:</span>
                                      <p>{this.props.cabrnew.cabReplr.NOR40}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总运价:</span>
                                      <p>{this.props.cabrnew.cabReplr.freiCurr==1?'¥':'$'}{parseFloat(this.props.cabrnew.cabReplr.NOR40F)*parseFloat(this.props.cabrnew.cabReplr.NOR40)}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总定金:</span>
                                      <p>{this.props.cabrnew.cabReplr.curr==1?'¥':'$'} </p>
                                  </div>
                                  
                              </div>:undefined
                          }
                          {
                            this.props.cabrnew.cabReplr.HQ40?
                              <div className="cab53">
                                  <div className="cab54">
                                      <span>40HQ:</span>
                                      <p>{this.props.cabrnew.cabReplr.HQ40}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总运价:</span>
                                      <p>{this.props.cabrnew.cabReplr.freiCurr==1?'¥':'$'} {parseFloat(this.props.cabrnew.cabReplr.HQ40F)*parseFloat(this.props.cabrnew.cabReplr.HQ40)}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总定金:</span>
                                      <p>{this.props.cabrnew.cabReplr.curr==1?'¥':'$'} </p>
                                  </div>
                                  
                              </div>:undefined
                          }
                          {
                            this.props.cabrnew.cabReplr.HQ45?
                              <div className="cab53">
                                  <div className="cab54">
                                      <span>45HQ:</span>
                                      <p>{this.props.cabrnew.cabReplr.HQ45}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总运价:</span>
                                      <p>{this.props.cabrnew.cabReplr.freiCurr==1?'¥':'$'} {parseFloat(this.props.cabrnew.cabReplr.HQ45F)*parseFloat(this.props.cabrnew.cabReplr.HQ45)}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总定金:</span>
                                      <p>{this.props.cabrnew.cabReplr.curr==1?'¥':'$'} </p>
                                  </div>
                                  
                              </div>:undefined
                          }
                          {
                            this.props.cabrnew.cabReplr.FR20?
                              <div className="cab53">
                                  <div className="cab54">
                                      <span>20FR:</span>
                                      <p>{this.props.cabrnew.cabReplr.FR20}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总运价:</span>
                                      <p>{this.props.cabrnew.cabReplr.freiCurr==1?'¥':'$'}{parseFloat(this.props.cabrnew.cabReplr.FR20F)*parseFloat(this.props.cabrnew.cabReplr.FR20)}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总定金:</span>
                                      <p>{this.props.cabrnew.cabReplr.curr==1?'¥':'$'} </p>
                                  </div>
                                  
                              </div>:undefined
                          }
                          {
                            this.props.cabrnew.cabReplr.FR40?
                              <div className="cab53">
                                  <div className="cab54">
                                      <span>40FR:</span>
                                      <p>{this.props.cabrnew.cabReplr.FR40}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总运价:</span>
                                      <p>{this.props.cabrnew.cabReplr.freiCurr==1?'¥':'$'} {parseFloat(this.props.cabrnew.cabReplr.FR40F)*parseFloat(this.props.cabrnew.cabReplr.FR40)}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总定金:</span>
                                      <p>{this.props.cabrnew.cabReplr.curr==1?'¥':'$'} </p>
                                  </div>
                                  
                              </div>:undefined
                          }
                          {
                            this.props.cabrnew.cabReplr.RF20?
                              <div className="cab53">
                                  <div className="cab54">
                                      <span>20RF:</span>
                                      <p>{this.props.cabrnew.cabReplr.RF20}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总运价:</span>
                                      <p>{this.props.cabrnew.cabReplr.freiCurr==1?'¥':'$'} {parseFloat(this.props.cabrnew.cabReplr.RF20F)*parseFloat(this.props.cabrnew.cabReplr.RF20)}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总定金:</span>
                                      <p>{this.props.cabrnew.cabReplr.curr==1?'¥':'$'} {this.props.cabrnew.cabReplr.RF20Fee}</p>
                                  </div>
                                  
                              </div>:undefined
                          }
                          {
                            this.props.cabrnew.cabReplr.RF40?
                              <div className="cab53">
                                  <div className="cab54">
                                      <span>40RF:</span>
                                      <p>{this.props.cabrnew.cabReplr.RF40}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总运价:</span>
                                      <p>{this.props.cabrnew.cabReplr.freiCurr==1?'¥':'$'}  {parseFloat(this.props.cabrnew.cabReplr.RF40F)*parseFloat(this.props.cabrnew.cabReplr.RF40)}</p>
                                  </div>
                                  <div className="cab54">
                                      <span>总定金:</span>
                                      <p>{this.props.cabrnew.cabReplr.curr==1?'¥':'$'} {this.props.cabrnew.cabReplr.RF40Fee}</p>
                                  </div>
                                  
                              </div>:undefined
                          }
                        </div>
                    </div>
                    <div className="cab20">
                        <span>流程记录</span>
                    </div>
                    <div className="cab16">
                        <div className="cab17">
                            <div className="cab91">
                                <h5>供舱备注:</h5>
                                <Input
                                    value={this.props.cabrnew.cabReplr.replCLabe}
                                    placeholder="仓库名或者车牌号，仓库联系人和联系方式或者司机联系人和联系方式"
                                    style={{width:150,float:'left'}}
                                    onChange={this.handbzc}
                                />
                                <a href='javascript:void(0);' onClick={this.handbzbc}>保存</a>
                            </div>
                            <div className="cab25">
                                <h5>求舱方对您的评价:</h5>
                                <span>
                                    {
                                        this.props.cabrnew.cabReplr.enquChkFin==1?'已履约':
                                            this.props.cabrnew.cabReplr.enquChkFin==2?'未履约':'未确认'
                                    }
                                </span>
                            </div>
                            {
                                this.props.cabrnew.cabReplr.enquChkFin==2?
                                    <div className="cab25">
                                        <h5>不确认理由:</h5>
                                        <span>{this.props.cabrnew.cabReplr.enquChkFinDet}</span>
                                    </div>:undefined
                            }
                            {
                                this.props.cabrnew.cabReplr.replFile!=null?
                                    <div className="cab21">
                                        <h5>供舱履约证明:</h5>
                                        <a href={gcfl} target="_blank" className="cab30">
                                            <img src={gcfl}/>
                                        </a>
                                        <span ref="qcup"></span>
                                        <a href='javascript:void(0);' className="cab26">
                                            上传<input type="file" onChange={this.handc1} ref="qcup1"/>
                                        </a>
                                    </div>
                                    :<div className="cab21">
                                    <h5>供舱履约证明:</h5>
                                    <span ref="qcup"></span>
                                    <a href='javascript:void(0);' className="cab26">
                                        上传<input type="file" onChange={this.handc1} ref="qcup1"/>
                                    </a>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="cab16">
                        <div className="cab18">
                            <ul>
                                <li>
                                    <div className="cab91">
                                        <h5>求舱备注:</h5>
                                        <span>{this.props.cabrnew.cabReplr.enquCLabe}</span>
                                    </div>
                                </li>
                                <li>
                                    {
                                        this.props.cabrnew.cabReplr.replChkFin==1?
                                            <div className="cab25">
                                                <div className="cab22">
                                                    <h5>您对求舱方评价:</h5>
                                                    <h4>已确认</h4>
                                                </div>
                                            </div>:
                                            this.props.cabrnew.cabReplr.replChkFin==2?
                                                <div className="cab25">
                                                    <div className="cab22">
                                                        <h5>您对求舱方评价:</h5>
                                                        <a className="cab27" href="javascript:void(0);" onClick={this.handqrzj}>确认</a>
                                                    </div>
                                                </div>:
                                                <div className="cab25">
                                                    <div className="cab22">
                                                        <h5>您对求舱方评价:</h5>
                                                        <a className="cab27" href="javascript:void(0);" onClick={this.handqrzj}>确认</a>
                                                        <a className="cab27" href="javascript:void(0);" onClick={this.handno}>不确认</a>
                                                    </div>
                                                </div>
                                    }
                                </li>
                                <li>
                                    <h5 className="cab93">求舱履约证明:</h5>
                                    <a href={this.props.cabrnew.cabReplr.enquFile==null?require('../../src/image/kong.png'):qcfl}
                                       target="_blank">
                                        {
                                            this.props.cabrnew.cabReplr.enquFile == null ?
                                                <img src={require('../../src/image/kong.png')}/> :
                                                <img src={qcfl}/>
                                        }
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {
                        this.state.isno?
                            <Cabrno actions={this.props.actions}
                                    cabrnew={this.props.cabrnew}
                                    cabEnqu={this.props.cabEnqu}
                                    cabRepl={this.props.cabrnew.cabReplr.cabRepl}
                                    handnoc={this.handnoc}/>:undefined
                    }
                </div>
            </div>
        );
    }
}