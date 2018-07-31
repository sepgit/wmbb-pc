/*
 * @Author: sepgit 
 * @Date: 2018-07-30 15:09:48 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-30 15:54:32
 */

import React,{Component} from 'react';
import moment from 'moment';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import Copydg from './copydg';
import Copydot from './copydot';
import Copyfcl from './copyfcl';
import Copyfr from './copyfr';
import Copyhg from './copyhg';
export default class CabMydetil extends Component {
  constructor(props) {
    super(props);
    this.fonCopy=this.fonCopy.bind(this);
    this.copyClose = this.copyClose.bind(this);
    this.state={
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      copyPage:false,
      dateilPage:true,
    }

  }
  fonCopy() {
    let  copyPage = this.state.copyPage;
    console.log(copyPage)
    this.setState({
      copyPage:true,
      dateilPage:false
    })
    // this.props.fonClose()
  }
  copyClose() {
    this.props.fonClose()
  }
  render() {
    let zt='';
    if(this.props.cabmynew.cabDispdetail.stat==10){
      zt='正常';
    }else if(this.props.cabmynew.cabDispdetail.stat==20){
      zt='过期';
    }else if(this.props.cabmynew.cabDispdetail.stat==30){
      zt='履约';
    }else if(this.props.cabmynew.cabDispdetail.stat==40){
      zt='退关';
    }else if(this.props.cabmynew.cabDispdetail.stat==50){
      zt='争议';
    }else{
      zt='撤销';
    }
    
    console.log(this.props.cabmynew.cabDispdetail);
    return (
      <div className="cabzzc">
      <div className="cab13">
        <div className="cab50">
          <div className="cab14">
            <span>舱位保函详情-{this.props.cabmynew.cabDispdetail.cabDisp}</span>
            <a className="cab19 bg56aaff" href="javascript:void(0);" onClick={this.fonCopy}>复制</a>
            <a className="cab19" href="javascript:void(0);" onClick={this.props.fonClose}>关闭</a>
          </div>
          <div className="cab15">
            <ul>
              <li>
                <h5>服务类型:</h5>
                <span>{this.props.cabmynew.cabDispdetail.servName}</span>
              </li>
              <li>
                <h5>承运商:</h5>
                <span>{this.props.cabmynew.cabDispdetail.carrName}</span>
              </li>
              <li>
                <h5>起运地:</h5>
                <span>{this.props.cabmynew.cabDispdetail.depaPortName}</span>
              </li>
              <li>
                <h5>目的地:</h5>
                <span>{this.props.cabmynew.cabDispdetail.destPortName}</span>
              </li>
              <li>
                <h5>求舱指标:</h5>
                <span>{this.props.cabmynew.cabDispdetail.reqPref}</span>
              </li>
              <li>
                <h5>供舱指标:</h5>
                <span>{this.props.cabmynew.cabDispdetail.resPref}</span>
              </li>
              <li>
                <h5>供舱方:</h5>
                <span>{this.props.cabmynew.cabDispdetail.resName}</span>
              </li>
              <li>
                <h5>舱位保函状态:</h5>
                <span>{zt}</span>
              </li>
              <li>
                <h5>截关时间:</h5>
                {
                  this.props.cabmynew.cabDispdetail.closTime==null?<span></span>:
                    <span>{moment(this.props.cabmynew.cabDispdetail.closTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                }
              </li>

              <li>
                <h5>开航时间:</h5>
                {
                  this.props.cabmynew.cabDispdetail.sailTime==null?<span></span>:
                    <span>{moment(this.props.cabmynew.cabDispdetail.sailTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                }
              </li>
              {/* <li>
                <h5>内陆方式:</h5>
                <span>{this.props.cabmynew.cabDispdetail.inldType}</span>
              </li> */}
              
              <li>
                <h5>最晚退关时间:</h5>
                {
                  this.props.cabmynew.cabDispdetail.lastShutTime == null ? '' :
                    <span>{moment(this.props.cabmynew.cabDispdetail.lastShutTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                }
              </li>
              <li>
                <h5>运价有效期:</h5>
                {
                  this.props.cabmynew.cabDispdetail.expiTime == null ? '' :
                    <span>{moment(this.props.cabmynew.cabDispdetail.expiTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                }
              </li>
              {/* <li>
                <h5>求舱履约:</h5>
                <span>{this.props.cabmynew.cabDispdetail.reqPref}</span>
              </li>
              <li>
                <h5>供舱履约:</h5>
                <span>{this.props.cabmynew.cabDispdetail.resPref}</span>
              </li> */}
              <li>
                <h5>运输工具:</h5>
                <span>{this.props.cabmynew.cabDispdetail.trans}</span>
              </li>
              <li>
                <h5>航次:</h5>
                <span>{this.props.cabmynew.cabDispdetail.voyage}</span>
              </li>
              <li>
                <h5>备注:</h5>
                <span>{this.props.cabmynew.cabDispdetail.label}</span>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="cab51">
            <h5>运价和箱型</h5>
            <div className="cab52">
              {
                this.props.cabmynew.cabDispdetail.GP20?
                  <div className="cab53">
                    <div className="cab54">
                      <span>20GP:</span>
                      <p>{this.props.cabmynew.cabDispdetail.GP20}</p>
                    </div>
                    <div className="cab54">
                      <span>总定金:</span>
                      <p>{this.props.cabmynew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.GP20Fee}</p>
                    </div>
                    <div className="cab54">
                      <span>总运价:</span>
                      <p>{this.props.cabmynew.cabDispdetail.currCos==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.GP20Cos}</p>
                    </div>
                  </div>:undefined
              }
              {
                this.props.cabmynew.cabDispdetail.GP40?
                  <div className="cab53">
                    <div className="cab54">
                      <span>40GP:</span>
                      <p>{this.props.cabmynew.cabDispdetail.GP40}</p>
                    </div>
                    <div className="cab54">
                      <span>总定金:</span>
                      <p>{this.props.cabmynew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.GP40Fee}</p>
                    </div>
                    <div className="cab54">
                      <span>总运价:</span>
                      <p>{this.props.cabmynew.cabDispdetail.currCos==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.GP40Cos}</p>
                    </div>
                  </div>:undefined
              }
              {
                this.props.cabmynew.cabDispdetail.NOR40?
                  <div className="cab53">
                    <div className="cab54">
                      <span>40NOR:</span>
                      <p>{this.props.cabmynew.cabDispdetail.NOR40}</p>
                    </div>
                    <div className="cab54">
                      <span>总定金:</span>
                      <p>{this.props.cabmynew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.NOR40Fee}</p>
                    </div>
                    <div className="cab54">
                      <span>总运价:</span>
                      <p>{this.props.cabmynew.cabDispdetail.currCos==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.NOR40Cos}</p>
                    </div>
                  </div>:undefined
              }
              {
                this.props.cabmynew.cabDispdetail.HQ40?
                  <div className="cab53">
                    <div className="cab54">
                      <span>40HQ:</span>
                      <p>{this.props.cabmynew.cabDispdetail.HQ40}</p>
                    </div>
                    <div className="cab54">
                      <span>总定金:</span>
                      <p>{this.props.cabmynew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.HQ40Fee}</p>
                    </div>
                    <div className="cab54">
                      <span>总运价:</span>
                      <p>{this.props.cabmynew.cabDispdetail.currCos==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.HQ40Cos}</p>
                    </div>
                  </div>:undefined
              }
              {
                this.props.cabmynew.cabDispdetail.HQ45?
                  <div className="cab53">
                    <div className="cab54">
                      <span>45HQ:</span>
                      <p>{this.props.cabmynew.cabDispdetail.HQ45}</p>
                    </div>
                    <div className="cab54">
                      <span>总定金:</span>
                      <p>{this.props.cabmynew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.HQ45Fee}</p>
                    </div>
                    <div className="cab54">
                      <span>总运价:</span>
                      <p>{this.props.cabmynew.cabDispdetail.currCos==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.HQ45Cos}</p>
                    </div>
                  </div>:undefined
              }
              {
                this.props.cabmynew.cabDispdetail.FR20?
                  <div className="cab53">
                    <div className="cab54">
                      <span>20FR:</span>
                      <p>{this.props.cabmynew.cabDispdetail.FR20}</p>
                    </div>
                    <div className="cab54">
                      <span>总定金:</span>
                      <p>{this.props.cabmynew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.FR20Fee}</p>
                    </div>
                    <div className="cab54">
                      <span>总运价:</span>
                      <p>{this.props.cabmynew.cabDispdetail.currCos==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.FR20Cos}</p>
                    </div>
                  </div>:undefined
              }
              {
                this.props.cabmynew.cabDispdetail.FR40?
                  <div className="cab53">
                    <div className="cab54">
                      <span>40FR:</span>
                      <p>{this.props.cabmynew.cabDispdetail.FR40}</p>
                    </div>
                    <div className="cab54">
                      <span>总定金:</span>
                      <p>{this.props.cabmynew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.FR40Fee}</p>
                    </div>
                    <div className="cab54">
                      <span>总运价:</span>
                      <p>{this.props.cabmynew.cabDispdetail.currCos==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.FR40Cos}</p>
                    </div>
                  </div>:undefined
              }
              {
                this.props.cabmynew.cabDispdetail.RF20?
                  <div className="cab53">
                    <div className="cab54">
                      <span>20RF:</span>
                      <p>{this.props.cabmynew.cabDispdetail.RF20}</p>
                    </div>
                    <div className="cab54">
                      <span>总定金:</span>
                      <p>{this.props.cabmynew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.RF20Fee}</p>
                    </div>
                    <div className="cab54">
                      <span>总运价:</span>
                      <p>{this.props.cabmynew.cabDispdetail.currCos==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.RF20Cos}</p>
                    </div>
                  </div>:undefined
              }
              {
                this.props.cabmynew.cabDispdetail.RF40?
                  <div className="cab53">
                    <div className="cab54">
                      <span>40RF:</span>
                      <p>{this.props.cabmynew.cabDispdetail.RF40}</p>
                    </div>
                    <div className="cab54">
                      <span>总定金:</span>
                      <p>{this.props.cabmynew.cabDispdetail.curr==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.RF40Fee}</p>
                    </div>
                    <div className="cab54">
                      <span>总运价:</span>
                      <p>{this.props.cabmynew.cabDispdetail.currCos==1?'¥':'$'} {this.props.cabmynew.cabDispdetail.RF40Cos}</p>
                    </div>
                  </div>:undefined
              }
            </div>
          </div>
        </div>
      </div>
      <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          { //fcl--1    hg--4   fr--17   ot--18   dg--19
            this.state.copyPage?
              this.props.cabmynew.cabDispdetail.servName == 'FCL' ?
              <Copyfcl
                actions={this.props.actions}
                cabmynew={this.props.cabmynew}
                fonClose={this.copyClose}
                stat='FCL'
                indexs={1}
                cabDisp={this.props.cabmynew.cabDispdetail.cabDisp}
              /> 
              :this.props.cabmynew.cabDispdetail.servName == 'DG' ?
                <Copydg 
                actions={this.props.actions}
                cabmynew={this.props.cabmynew}
                fonClose={this.copyClose}
                stat='DG'
                indexs={19}
                cabDisp={this.props.cabmynew.cabDispdetail.cabDisp}
                />
                :this.props.cabmynew.cabDispdetail.servName == 'HG' ?
                  <Copyhg
                  actions={this.props.actions}
                  cabmynew={this.props.cabmynew}
                  fonClose={this.copyClose}
                  stat='HG'
                  indexs={5}
                  cabDisp={this.props.cabmynew.cabDispdetail.cabDisp}
                  />
                  :this.props.cabmynew.cabDispdetail.servName == 'FR' ?
                    <Copyfr 
                    actions={this.props.actions}
                    cabmynew={this.props.cabmynew}
                    fonClose={this.copyClose}
                    stat='FR'
                    indexs={17}
                    cabDisp={this.props.cabmynew.cabDispdetail.cabDisp}
                    />
                    :this.props.cabmynew.cabDispdetail.servName == 'OT' ?
                    <Copydot 
                    actions={this.props.actions}
                    cabmynew={this.props.cabmynew}
                    fonClose={this.copyClose}
                    stat='OT'
                    indexs={18}
                    cabDisp={this.props.cabmynew.cabDispdetail.cabDisp}
                    />:undefined
            :undefined
          }
        </VelocityTransitionGroup>
    </div>
    )
    
  }
}