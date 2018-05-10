/**
 * Created by Zing on 2017/5/17.
 */
import React,{Component} from 'react';
import moment from 'moment';
import Cabno from './cabno';
import HTTPED from '../../date/address';
import { message,Modal,Input } from 'antd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
const confirm = Modal.confirm;

export default class Cabdetil extends Component {
  constructor(props) {
    super(props);
    this.handbqr=this.handbqr.bind(this);
    this.handbqrc=this.handbqrc.bind(this);
    this.handc1=this.handc1.bind(this);
    this.handno=this.handno.bind(this);
    this.handnoc=this.handnoc.bind(this);
    this.handqrzj=this.handqrzj.bind(this);
    this.handtg=this.handtg.bind(this);
    this.handbzbc=this.handbzbc.bind(this);
    this.handbzc=this.handbzc.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      isbqr:false,
      isno:false,
      bz:''
    }
  }
  handbzbc(){
    this.props.actions.getqcbz(this.state.userName,this.state.token,this.props.cabnew.cabEnquL.cabEnqu,this.state.bz);
  }
  handbzc(e){
    this.props.cabnew.cabEnquL.enquCLabe=e.target.value;
    this.setState({bz:e.target.value})
  }
  handtg(){
    //退关
    this.props.actions.getxgztq(this.state.userName,this.state.token,this.props.cabnew.cabEnquL.cabEnqu,this.props.cabRepl);
  }
  handqrzj(){
    let This=this;
    confirm({
      title: '您是否要确认',
      content: '确认完不可恢复',
      onOk() {
        //确认自己履约
        This.props.actions.getqrzjlv(This.state.userName,This.state.token,This.props.cabnew.cabEnquL.cabEnqu,1,'',This.props.cabRepl);
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
    let cabEnqu=this.props.cabnew.cabEnquL.cabEnqu;
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
          this.props.actions.getsclvzm(cabEnqu,formdate);
        }
      }
    }
  }
  render() {
    let qcf=this.props.cabnew.cabEnquL.enquFile;
    let gcf=this.props.cabnew.cabEnquL.replFile;
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
    let tg=<a className="cab90" href="javascript:void(0);" onClick={this.handtg}>退关</a>;
    let tgstr;
    if(this.props.cabnew.cabEnquL.shutTime!=null){
      tgstr=undefined;
    }else{
      if(this.props.cabnew.cabEnquL.enquer==this.state.userid || this.props.cabnew.cabEnquL.mngr==this.state.userid ){
        tgstr=tg;
      }else {
        tgstr=undefined;
      }
    }
    return (
      <div className="cabzzc">
        <div className="cab70">
          <div className="cab71">
            <span>舱位保函详情-{this.props.cabnew.cabEnquL.cabEnqu}</span>
            {tgstr}
            <a className="cab72" href="javascript:void(0);" onClick={this.props.handxqc}>关闭</a>
          </div>
          <div className="cab120">
            <ul>
              <li>
                <h5>服务类型:</h5>
                <span>{this.props.cabnew.cabEnquL.servName}</span>
              </li>
              <li>
                <h5>承运商:</h5>
                <span>{this.props.cabnew.cabEnquL.carrName}</span>
              </li>
              <li>
                <h5>起运地:</h5>
                <span>{this.props.cabnew.cabEnquL.depaPortName}</span>
              </li>
              <li>
                <h5>目的地:</h5>
                <span>{this.props.cabnew.cabEnquL.destPortName}</span>
              </li>
              <li>
                <h5>求舱指标:</h5>
                <span>{this.props.cabnew.cabEnquL.enquTar}</span>
              </li>
              <li>
                <h5>供舱指标:</h5>
                <span>{this.props.cabnew.cabEnquL.replTar}</span>
              </li>
              <li>
                  <h5>供舱方:</h5>
                  <span>{this.props.cabnew.cabEnquL.provName}</span>
              </li>
              <li>
                <h5>运输工具:</h5>
                <span>{this.props.cabnew.cabEnquL.trans}</span>
              </li>
              <li>
                  <h5>航次:</h5>
                  <span>{this.props.cabnew.cabEnquL.voyage}</span>
              </li>
              <li>
                <h5>开航时间:</h5>
                {
                  this.props.cabnew.cabEnquL.sailTime==null?<span></span>:
                    <span>{moment(this.props.cabnew.cabEnquL.sailTime).format('YYYY-MM-DD')}</span>
                }
              </li>
                <li>
                    <h5>内陆方式:</h5>
                    <span>{this.props.cabnew.cabEnquL.cabServName}</span>
                </li>
                <li>
                    <h5>内陆费用:</h5>
                    <span>{this.props.cabnew.cabEnquL.curr== '1' ? '¥' : '$'} {this.props.cabnew.cabEnquL.cabFee}</span>
                </li>
              {/*<li>
                <h5>定金金额:</h5>
                <span>{this.props.cabnew.cabEnquL.curr== '1' ? '¥' : '$'} {this.props.cabnew.cabEnquL.depo}</span>
              </li>*/}
              <li>
                  <h5>舱位状态:</h5>
                  <span></span>
              </li>
              <li>
                <h5>货物状态:</h5>
                <span>{this.props.cabnew.cabEnquL.goodsStat}</span>
              </li>
              {
                /*this.props.cabnew.cabEnquL.shutTime==null?<li></li>:
                  <li>
                    <h5>实际退关时间:</h5>
                    <span>{moment(this.props.cabnew.cabEnquL.shutTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                  </li>*/
              }
              <li>
                <h5>最晚退关时间:</h5>
                {
                  this.props.cabnew.cabEnquL.lastShutTime == null ? '' :
                    <span>{moment(this.props.cabnew.cabEnquL.lastShutTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                }
              </li>
                <li>
                    <h5>运价有效期:</h5>
                    <span></span>
                </li>
            </ul>
          </div>
          <div className="cab133">
                <h5>运价和箱型:</h5>
                <div className="cab134">
                  {
                    this.props.cabnew.cabEnquL.GP20?
                      <div className="cab53">
                        <div className="cab54">
                          <span>20GP:</span>
                          <p>{this.props.cabnew.cabEnquL.GP20}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnew.cabEnquL.curr==1?'¥':'$'} </p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnew.cabEnquL.freiCurr==1?'¥':'$'} {this.props.cabnew.cabEnquL.GP20F}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnew.cabEnquL.GP40?
                      <div className="cab53">
                        <div className="cab54">
                          <span>40GP:</span>
                          <p>{this.props.cabnew.cabEnquL.GP40}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnew.cabEnquL.curr==1?'¥':'$'} </p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnew.cabEnquL.freiCurr==1?'¥':'$'} {this.props.cabnew.cabEnquL.GP40F}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnew.cabEnquL.NOR40?
                      <div className="cab53">
                        <div className="cab54">
                          <span>40NOR:</span>
                          <p>{this.props.cabnew.cabEnquL.NOR40}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnew.cabEnquL.curr==1?'¥':'$'} </p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnew.cabEnquL.freiCurr==1?'¥':'$'} {this.props.cabnew.cabEnquL.NOR40F}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnew.cabEnquL.HQ40?
                      <div className="cab53">
                        <div className="cab54">
                          <span>40HQ:</span>
                          <p>{this.props.cabnew.cabEnquL.HQ40}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnew.cabEnquL.curr==1?'¥':'$'} </p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnew.cabEnquL.freiCurr==1?'¥':'$'} {this.props.cabnew.cabEnquL.HQ40F}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnew.cabEnquL.HQ45?
                      <div className="cab53">
                        <div className="cab54">
                          <span>45HQ:</span>
                          <p>{this.props.cabnew.cabEnquL.HQ45}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnew.cabEnquL.curr==1?'¥':'$'} </p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnew.cabEnquL.freiCurr==1?'¥':'$'} {this.props.cabnew.cabEnquL.HQ45F}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnew.cabEnquL.FR20?
                      <div className="cab53">
                        <div className="cab54">
                          <span>20FR:</span>
                          <p>{this.props.cabnew.cabEnquL.FR20}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnew.cabEnquL.curr==1?'¥':'$'} </p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnew.cabEnquL.freiCurr==1?'¥':'$'} {this.props.cabnew.cabEnquL.FR20F}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnew.cabEnquL.FR40?
                      <div className="cab53">
                        <div className="cab54">
                          <span>40FR:</span>
                          <p>{this.props.cabnew.cabEnquL.FR40}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnew.cabEnquL.curr==1?'¥':'$'} </p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnew.cabEnquL.freiCurr==1?'¥':'$'} {this.props.cabnew.cabEnquL.FR40F}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnew.cabEnquL.RF20?
                      <div className="cab53">
                        <div className="cab54">
                          <span>20RF:</span>
                          <p>{this.props.cabnew.cabEnquL.RF20}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnew.cabEnquL.curr==1?'¥':'$'} </p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnew.cabEnquL.freiCurr==1?'¥':'$'} {this.props.cabnew.cabEnquL.RF20Cos}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnew.cabEnquL.RF40?
                      <div className="cab53">
                        <div className="cab54">
                          <span>40RF:</span>
                          <p>{this.props.cabnew.cabEnquL.RF40}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnew.cabEnquL.curr==1?'¥':'$'} </p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnew.cabEnquL.freiCurr==1?'¥':'$'} {this.props.cabnew.cabEnquL.RF40Cos}</p>
                        </div>
                      </div>:undefined
                  }
                </div>
            </div>
          <div className="cab20">
            <span>流程记录1</span>
          </div>
          <div className="cab16">
            <div className="cab17">
              <div className="cab91">
                <h5>求舱备注:</h5>
                <Input
                  value={this.props.cabnew.cabEnquL.enquCLabe}
                  placeholder="仓库名或者车牌号，仓库联系人和联系方式或者司机联系人和联系方式"
                  style={{width:150,float:'left'}}
                  onChange={this.handbzc}
                />
                <a href='javascript:void(0);' onClick={this.handbzbc}>保存</a>
              </div>
              <div className="cab25">
                  <h5>供舱方对您的评价:</h5>
                  <span>
                  {
                      this.props.cabnew.cabEnquL.replChkFin==1?'已履约':
                          this.props.cabnew.cabEnquL.replChkFin==2?'未履约':'未确认'
                  }
                  </span>
              </div>
              {
                  this.props.cabnew.cabEnquL.replChkFin==2?
                      <div className="cab25">
                          <h5>不确认理由:</h5>
                          <span>{this.props.cabnew.cabEnquL.replChkFinDet}</span>
                      </div>:undefined
              }
              {
                this.props.cabnew.cabEnquL.enquFile!=null?
                  <div className="cab21">
                    <h5>求舱履约证明:</h5>
                    <a href={qcfl} target="_blank" className="cab30">
                      <img src={qcfl}/>
                    </a>
                    <span ref="qcup"></span>
                    <a href='javascript:void(0);' className="cab26">
                      上传<input type="file" onChange={this.handc1} ref="qcup1"/>
                    </a>
                  </div>
                  :<div className="cab21">
                  <h5>求舱履约证明:</h5>
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
                              <h5>供舱备注:</h5>
                              <span>{this.props.cabnew.cabEnquL.replCLabe}</span>
                          </div>
                      </li>
                      <li>
                          {
                              this.props.cabnew.cabEnquL.enquChkFin==1?
                                  <div className="cab25">
                                      <div className="cab22">
                                          <h5>您对供舱方评价:</h5>
                                          <h4>已确认</h4>
                                      </div>
                                  </div>:
                                  this.props.cabnew.cabEnquL.enquChkFin==2?
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
                          <h5 className="cab93">供舱履约证明:</h5>
                          <a className="cab92" href={this.props.cabnew.cabEnquL.replFile==null?require('../../src/image/kong.png'):gcfl}
                             target="_blank">
                              {
                                  this.props.cabnew.cabEnquL.replFile == null ?
                                      <img src={require('../../src/image/kong.png')}/> :
                                      <img src={gcfl}/>
                              }
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          {
            this.state.isno?
              <Cabno actions={this.props.actions}
                     cabnew={this.props.cabnew}
                     cabEnqu={this.props.cabnew.cabEnquL.cabEnqu}
                     cabRepl={this.props.cabRepl}
                     handnoc={this.handnoc}/>:undefined
          }
        </div>
      </div>
    );
  }
}