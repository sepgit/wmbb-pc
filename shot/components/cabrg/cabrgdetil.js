/**
 * Created by Chen on 2017/12/19.
 */
import React,{Component} from 'react';
import moment from 'moment';
import HTTPED from '../../date/address';
import { message,Modal,Input } from 'antd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
const confirm = Modal.confirm;

export default class Cabpdetil extends Component {
  constructor(props) {
    super(props);
    this.saveLconClick=this.saveLconClick.bind(this);
    this.upLoadonClick=this.upLoadonClick.bind(this);
    this.reqPrefonChange=this.reqPrefonChange.bind(this);    
    
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      isbqr:false,
      isno:false,
      bz:''
    }
  }

  saveLconClick(){
    let userName = this.state.userName;
    let token = this.state.token;
    let cabDisp = this.props.cabrgnew.cabDispdetail.cabDisp;
    let bz = this.state.bz;
    this.props.actions.getgcbz(userName,token,cabDisp,bz);
  }

  reqPrefonChange(e){
    this.props.cabrgnew.cabDispdetail.resLabe=e.target.value;
    this.setState({bz:e.target.value})
  }
  upLoadonClick(v){
    var arr=v.target.value.split('\\');
    var fileName=arr[arr.length-1];
    //上传
    let cabDisp = this.props.cabrgnew.cabDispdetail.cabDisp;
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
        formdate.append("upFile", filelvzm);
        if(filelvzm.size>2097152){
          message.error("只能上传小于2M的文件！");
        }else{
          this.refs.qcup.innerHTML=fileName;//显示文件名
          //上传履约证明
          this.props.actions.putsclvzm(cabDisp,formdate);
        }
      }
    }
  }

  render() {
    let qcf=this.props.cabrgnew.cabDispdetail.reqFile;
    let gcf=this.props.cabrgnew.cabDispdetail.resFile;
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
    let EnquStat,zt;
    switch(this.props.cabrgnew.cabDispdetail.stat){
      case 10:
        EnquStat='正常';
        zt ='zt1';
        break;
      case 40:
        EnquStat='退关';
        zt ='zt4';
        break;
      case 30:
        EnquStat='履约';
        zt ='zt3';
        break;
      case 50:
        EnquStat='争议';
        zt ='zt5';
        break;
    case 20:
        EnquStat='过期';
        zt ='zt5';
        break;
    case 60:
        EnquStat='撤销';
        zt ='zt5';
        break;
      default:
        EnquStat='';
        zt ='';
        break;
    }
    console.log(this.props.cabrgnew.cabDispdetail);
    return (
        <div className="cabzzc">
            <div className="cab70">
                <div className="cab71">
                    <span>舱位保函详情-{this.props.cabrgnew.cabDispdetail.cabDisp}</span>
                    <a className="cab72" href="javascript:void(0);" onClick={this.props.fonClose}>关闭</a>
                </div>
                <div className="cab140">
                    <ul>
                        <li>
                            <h5>服务类型:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.servName}</span>
                        </li>
                        <li>
                            <h5>承运商:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.carrName}</span>
                        </li>
                        <li>
                            <h5>起运地:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.depaPortName}/{this.props.cabrgnew.cabDispdetail.depaChsName}</span>
                        </li>
                        <li>
                            <h5>目的地:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.destPortName}/{this.props.cabrgnew.cabDispdetail.destChsName}</span>
                        </li>
                        <li>
                            <h5>求舱指标:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.reqPref}</span>
                        </li>
                        <li>
                            <h5>供舱指标:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.resPref}</span>
                        </li>
                        <li>
                            <h5>求舱方:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.reqName}</span>
                        </li>
                        <li></li>
                        <li>
                            <h5>运输工具:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.trans}</span>
                        </li>
                        <li>
                            <h5>航次:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.voyage}</span>
                        </li>
                        {/*<li>
                            <h5>供舱公司:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.resCompAlia}</span>
                        </li>*/}
                         <li>
                            <h5>截关时间:</h5>
                            {
                                this.props.cabrgnew.cabDispdetail.closTime == null ? '' :
                                    <span>{moment(this.props.cabrgnew.cabDispdetail.closTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                            }
                        </li>
                        <li>
                            <h5>开航时间:</h5>
                            {
                                this.props.cabrgnew.cabDispdetail.sailTime == null ? '' :
                                    <span>{moment(this.props.cabrgnew.cabDispdetail.sailTime).format('YYYY-MM-DD')}</span>
                            }
                        </li>
                      
                        
                        <li>
                            <h5>内陆方式:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.inldType}</span>
                        </li>
                        <li>
                            <h5>内陆费用:</h5>                
                            {
                                this.props.cabrgnew.cabDispdetail.cabFee != null?
                                    this.props.cabrgnew.cabDispdetail.cabFee != 0?
                                    <span>{this.props.cabrgnew.cabDispdetail.curr == 1? '¥' : '$'}{this.props.cabrgnew.cabDispdetail.cabFee}</span>:undefined
                                :undefined
                            }
                        </li>
                        <li>
                            <h5>舱位状态:</h5>
                            <span className={zt}>{EnquStat}</span>
                        </li>
                        <li>
                            <h5>货物状态:</h5>
                            <span>{this.props.cabrgnew.cabDispdetail.goodsStat}</span>
                        </li>
                        <li>
                            <h5>最晚退关时间:</h5>
                            <span>{moment(this.props.cabrgnew.cabDispdetail.lastShutTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                            {/* <span>{this.props.cabrgnew.cabDispdetail.lastShutTime}</span> */}
                            {/* {
                                this.props.cabrgnew.cabDispdetail.lastShutTime == null ? '' :
                                    <span>{moment(this.props.cabrgnew.cabDispdetail.lastShutTime).format('YYYY-MM-DD')}</span>
                            } */}
                        </li>
                        <li>
                            <h5>运价有效期:</h5>
                            {
                                this.props.cabrgnew.cabDispdetail.lastShutTime == null ? '' :
                                    <span>{moment(this.props.cabrgnew.cabDispdetail.expiTime).format('YYYY-MM-DD')}</span>
                            }
                        </li>
                        <li>
                            <h5>退关免责:</h5><span>{this.props.cabrgnew.cabDispdetail.delayhours}小时内退关可免责</span>
                        </li>
                        {
                            this.props.cabrgnew.cabDispdetail.shutTime == null ? <li></li> :
                            <li>
                                <h5>实际退关时间:</h5>
                                <span>{moment(this.props.cabrgnew.cabDispdetail.shutTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                            </li>
                        }
                       
                        <li  className="cab140-label">
                            <h5>备注:</h5>
                            <span className="overflowH">{this.props.cabrgnew.cabDispdetail.label}</span>
                        </li>
                    </ul>
                </div>
                <div className="cab133">
                    <h5>运价和箱型:</h5>
                    <div className="cab134">
                        {
                            this.props.cabrgnew.cabDispdetail.GP20?
                                <div className="cab53">
                                    <div className="cab54">
                                        <span>20GP:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.GP20}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总运价:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.currCos==1?'¥':'$'} {parseFloat(this.props.cabrgnew.cabDispdetail.GP20Cos)*parseFloat(this.props.cabrgnew.cabDispdetail.GP20)}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总定金:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabrgnew.cabDispdetail.GP20Fee}</p>
                                    </div>
                                    
                                </div>:undefined
                        }
                        {
                            this.props.cabrgnew.cabDispdetail.GP40?
                                <div className="cab53">
                                    <div className="cab54">
                                        <span>40GP:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.GP40}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总运价:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.currCos==1?'¥':'$'} {parseFloat(this.props.cabrgnew.cabDispdetail.GP40Cos)*parseFloat(this.props.cabrgnew.cabDispdetail.GP40)}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总定金:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabrgnew.cabDispdetail.GP40Fee}</p>
                                    </div>
                                    
                                </div>:undefined
                        }
                        {
                            this.props.cabrgnew.cabDispdetail.NOR40?
                                <div className="cab53">
                                    <div className="cab54">
                                        <span>40NOR:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.NOR40}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总运价:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.currCos==1?'¥':'$'} {parseFloat(this.props.cabrgnew.cabDispdetail.NOR40Cos)*parseFloat(this.props.cabrgnew.cabDispdetail.NOR40)}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总定金:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabrgnew.cabDispdetail.NOR40Fee}</p>
                                    </div>
                                    
                                </div>:undefined
                        }
                        {
                            this.props.cabrgnew.cabDispdetail.HQ40?
                                <div className="cab53">
                                    <div className="cab54">
                                        <span>40HQ:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.HQ40}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总运价:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.currCos==1?'¥':'$'}{parseFloat(this.props.cabrgnew.cabDispdetail.HQ40Cos)*parseFloat(this.props.cabrgnew.cabDispdetail.HQ40)}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总定金:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabrgnew.cabDispdetail.HQ40Fee}</p>
                                    </div>
                                   
                                </div>:undefined
                        }
                        {
                            this.props.cabrgnew.cabDispdetail.HQ45?
                                <div className="cab53">
                                    <div className="cab54">
                                        <span>45HQ:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.HQ45}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总运价:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.currCos==1?'¥':'$'} {parseFloat(this.props.cabrgnew.cabDispdetail.HQ45Cos)*parseFloat(this.props.cabrgnew.cabDispdetail.HQ45)}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总定金:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabrgnew.cabDispdetail.HQ45Fee}</p>
                                    </div>
                                    
                                </div>:undefined
                        }
                        {
                            this.props.cabrgnew.cabDispdetail.FR20?
                                <div className="cab53">
                                    <div className="cab54">
                                        <span>20FR:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.FR20}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总运价:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.currCos==1?'¥':'$'}{parseFloat(this.props.cabrgnew.cabDispdetail.FR20Cos)*parseFloat(this.props.cabrgnew.cabDispdetail.FR20)}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总定金:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabrgnew.cabDispdetail.FR20Fee}</p>
                                    </div>
                                    
                                </div>:undefined
                        }
                        {
                            this.props.cabrgnew.cabDispdetail.FR40?
                                <div className="cab53">
                                    <div className="cab54">
                                        <span>40FR:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.FR40}</p>
                                    </div>
                                    
                                    <div className="cab54">
                                        <span>总运价:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.currCos==1?'¥':'$'} {parseFloat(this.props.cabrgnew.cabDispdetail.FR40Cos)*parseFloat(this.props.cabrgnew.cabDispdetail.FR40)}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总定金:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabrgnew.cabDispdetail.FR40Fee}</p>
                                    </div>
                                </div>:undefined
                        }
                        {
                            this.props.cabrgnew.cabDispdetail.RF20?
                                <div className="cab53">
                                    <div className="cab54">
                                        <span>20RF:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.RF20}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总运价:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.currCos==1?'¥':'$'}{parseFloat(this.props.cabrgnew.cabDispdetail.RF20Cos)*parseFloat(this.props.cabrgnew.cabDispdetail.RF20)}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总定金:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabrgnew.cabDispdetail.RF20Fee}</p>
                                    </div>
                                    
                                </div>:undefined
                        }
                        {
                            this.props.cabrgnew.cabDispdetail.RF40?
                                <div className="cab53">
                                    <div className="cab54">
                                        <span>40RF:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.RF40}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总运价:</span>s
                                        <p>{this.props.cabrgnew.cabDispdetail.currCos==1?'¥':'$'}{parseFloat(this.props.cabrgnew.cabDispdetail.RF40Cos)*parseFloat(this.props.cabrgnew.cabDispdetail.RF40)}</p>
                                    </div>
                                    <div className="cab54">
                                        <span>总定金:</span>
                                        <p>{this.props.cabrgnew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabrgnew.cabDispdetail.RF40Fee}</p>
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
                                value={this.props.cabrgnew.cabDispdetail.resLabe}
                                placeholder="仓库名或者车牌号，仓库联系人和联系方式或者司机联系人和联系方式"
                                style={{width:180,float:'left'}}
                                onChange={this.reqPrefonChange}
                            />
                            <a href='javascript:void(0);' onClick={this.saveLconClick} className="cab124">保存</a>
                        </div>
                        <div className="cab25">
                            <h5>求舱方对您的评价:</h5>
                            <span>
                            {
                                this.props.cabrgnew.cabDispdetail.reqFile==1?'已履约':
                                    this.props.cabrgnew.cabDispdetail.reqFile==2?'未履约':'未确认'
                            }
                            </span>
                        </div>
                        <div className="cab21">
                            {
                                this.props.cabrgnew.cabDispdetail.resFile!=null?
                                    <div className="cab21">
                                        <h5>供舱履约证明:</h5>
                                        <a href={qcfl} target="_blank" className="cab30">
                                            <img src={qcfl}/>
                                        </a>
                                        <span ref="qcup" className="cab130"></span>
                                        <a href='javascript:void(0);' className="cab26">
                                            <input type="file" onChange={this.upLoadonClick}  ref="qcup1" />
                                            上传</a>
                                    </div>
                                    :<div className="cab21">
                                        <h5>求舱履约证明:</h5>
                                        <span ref="qcup" className="cab30"></span>
                                        <a href='javascript:void(0);' className="cab26">
                                            <input type="file" onChange={this.upLoadonClick}  ref="qcup1" />
                                            上传</a>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="cab16">
                    <ul>
                        <li>
                            <div className="cab91">
                                <h5>求舱备注:</h5>
                                <span>{this.props.cabrgnew.cabDispdetail.reqLabe}</span>
                            </div>
                        </li>
                        <li>
                            {
                                this.props.cabrgnew.cabDispdetail.resFile==1?
                                    <div className="cab25">
                                        <div className="cab22">
                                            <h5>供舱方对您的评价:</h5>
                                            <h4>已确认</h4>
                                        </div>
                                    </div>:
                                    this.props.cabrgnew.cabDispdetail.resFile==2?
                                        <div className="cab25">
                                            <div className="cab22">
                                                <h5>您对供舱方评价:</h5>
                                                <a className="cab27" href="javascript:void(0);" onClick={this.handqrzj}>确认</a>
                                            </div>
                                        </div>:
                                        <div className="cab25">
                                            <div className="cab22">
                                                <h5>您对供舱方评价:</h5>
                                                <a className="cab27" href="javascript:void(0);" onClick={this.handqrzj}>确认</a>
                                                <a className="cab27" href="javascript:void(0);" onClick={this.handno}>不确认</a>
                                            </div>
                                        </div>
                            }
                        </li>
                        <li>
                            <h5 className="cab93">求舱履约证明:</h5>
                            <a className="cab92" href={this.props.cabrgnew.cabDispdetail.reqFile==null?require('../../src/image/kong.png'):gcfl}
                                target="_blank">
                                {
                                    this.props.cabrgnew.cabDispdetail.reqFile== null ?
                                        <img src={require('../../src/image/kong.png')}/> :
                                        <img src={gcfl}/>
                                }
                            </a>
                        </li>
                    </ul>
                </div>
                {/*  */}
                {/* <div className="cab122">
                    <div className="cab123">
                        <h5>求舱备注:</h5>
                        <Input
                            value={this.props.cabrgnew.cabDispdetail.reqLabe}
                            placeholder="仓库名或者车牌号，仓库联系人和联系方式或者司机联系人和联系方式"
                            style={{width:180,float:'left'}}
                            onChange={this.reqPrefonChange}
                        />
                        <a href='javascript:void(0);' onClick={this.saveLconClick} className="cab124">保存</a>
                    </div>
                    <div className="cab123">
                        {
                            this.props.cabrgnew.cabDispdetail.reqFile!=null?
                                <div className="cab125">
                                    <h5>求舱履约证明:</h5>
                                    <a href={qcfl} target="_blank" className="cab126">
                                        <img src={qcfl}/>
                                    </a>
                                    <span ref="qcup" className="cab130"></span>
                                    <a href='javascript:void(0);' className="cab127">
                                        <input type="file" onChange={this.upLoadonClick}  ref="qcup1" />
                                        上传</a>
                                </div>
                                :<div className="cab125">
                                    <h5>求舱履约证明:</h5>
                                    <span ref="qcup" className="cab130"></span>
                                    <a href='javascript:void(0);' className="cab127">
                                        <input type="file" onChange={this.upLoadonClick}  ref="qcup1" />
                                        上传</a>
                                </div>
                        }
                    </div>
                </div> */}
                {/* <div className="cab122">
                    <div className="cab123">
                        <h5>供舱备注:</h5>
                        <p>{this.props.cabrgnew.cabDispdetail.resLabe}</p>
                    </div>
                    <div className="cab123">
                        <h5>供舱履约证明:</h5>
                        <a className="cab128" href={this.props.cabrgnew.cabDispdetail.resFile==null?require('../../src/image/kong.png'):gcfl}
                           target="_blank">
                            {
                                this.props.cabrgnew.cabDispdetail.resFile == null ?
                                    <img src={require('../../src/image/kong.png')}/> :
                                    <img src={gcfl}/>
                            }
                        </a>
                    </div>
                </div> */}
                {/*  */}
            </div>
        </div>
    );
  }
}