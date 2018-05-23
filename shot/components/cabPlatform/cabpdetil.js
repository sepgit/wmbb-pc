/**
 * Created by Chen on 2017/12/19.
 */
import React,{Component} from 'react';
import moment from 'moment';

export default class Cabpdetil extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      let zt='';
      if(this.props.cabnewr.cabDispdetail.stat==10){
        zt='正常';
      }else if(this.props.cabnewr.cabDispdetail.stat==20){
        zt='过期';
      }else if(this.props.cabnewr.cabDispdetail.stat==30){
        zt='履约';
      }else if(this.props.cabnewr.cabDispdetail.stat==40){
        zt='退关';
      }else if(this.props.cabnewr.cabDispdetail.stat==50){
        zt='争议';
      }else{
        zt='撤销';
      }
      return (
        <div className="cabzzc">
          <div className="cab13">
            <div className="cab50">
              <div className="cab14">
                <span>舱位保函详情-{this.props.cabnewr.cabDispdetail.cabDisp}</span>
                <a className="cab19" href="javascript:void(0);" onClick={this.props.fonClose}>关闭</a>
              </div>
              <div className="cab15">
                <ul>
                  <li>
                    <h5>服务类型:</h5>
                    <span>{this.props.cabnewr.cabDispdetail.servName}</span>
                  </li>
                  <li>
                    <h5>承运商:</h5>
                    <span>{this.props.cabnewr.cabDispdetail.carrName}</span>
                  </li>
                  <li>
                    <h5>起运地:</h5>
                    <span>{this.props.cabnewr.cabDispdetail.depaPortName}</span>
                  </li>
                  <li>
                    <h5>目的地:</h5>
                    <span>{this.props.cabnewr.cabDispdetail.destPortName}</span>
                  </li>
                  <li>
                    <h5>求舱指标:</h5>
                    <span>{this.props.cabnewr.cabDispdetail.reqPref}</span>
                  </li>
                  <li>
                    <h5>供舱指标:</h5>
                    <span>{this.props.cabnewr.cabDispdetail.resPref}</span>
                  </li>
                  <li>
                    <h5>供舱方:</h5>
                    <span>{this.props.cabnewr.cabDispdetail.showname==0?"（求购成功后显示）":this.props.cabnewr.cabDispdetail.resName}</span>
                    {/* <span>{this.props.cabnewr.cabDispdetail.resName}</span> */}
                  </li>
                  <li>
                    <h5>开航时间:</h5>
                    {
                      this.props.cabnewr.cabDispdetail.sailTime==null?<span></span>:
                        <span>{moment(this.props.cabnewr.cabDispdetail.sailTime).format('YYYY-MM-DD')}</span>
                    }
                  </li>
                  <li>
                    <h5>内陆运输方式:</h5>
                    <span>{this.props.cabnewr.cabDispdetail.inldType}</span>
                  </li>
                  {/* <li>
                    <h5>舱位保函状态:</h5>
                    <span>{zt}</span>
                  </li> */}
                  <li>
                    <h5>最晚退关时间:</h5>
                    {
                      this.props.cabnewr.cabDispdetail.lastShutTime == null ? '' :
                        <span>{moment(this.props.cabnewr.cabDispdetail.lastShutTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                    }
                  </li>
                  <li>
                    <h5>运价有效期:</h5>
                    {
                      this.props.cabnewr.cabDispdetail.expiTime == null ? '' :
                        <span>{moment(this.props.cabnewr.cabDispdetail.expiTime).format('YYYY-MM-DD')}</span>
                    }
                  </li>
                </ul>
              </div>
              <div className="cab51">
                <h5>运价和箱型</h5>
                <div className="cab52">
                  {
                    this.props.cabnewr.cabDispdetail.GP20?
                      <div className="cab53">
                        <div className="cab54">
                          <span>20GP:</span>
                          <p>{this.props.cabnewr.cabDispdetail.GP20}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.GP20Fee}</p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.GP20Cos}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnewr.cabDispdetail.GP40?
                      <div className="cab53">
                        <div className="cab54">
                          <span>40GP:</span>
                          <p>{this.props.cabnewr.cabDispdetail.GP40}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.GP40Fee}</p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.GP40Cos}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnewr.cabDispdetail.NOR40?
                      <div className="cab53">
                        <div className="cab54">
                          <span>40NOR:</span>
                          <p>{this.props.cabnewr.cabDispdetail.NOR40}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.NOR40Fee}</p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.NOR40Cos}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnewr.cabDispdetail.HQ40?
                      <div className="cab53">
                        <div className="cab54">
                          <span>40HQ:</span>
                          <p>{this.props.cabnewr.cabDispdetail.HQ40}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.HQ40Fee}</p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.HQ40Cos}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnewr.cabDispdetail.HQ45?
                      <div className="cab53">
                        <div className="cab54">
                          <span>45HQ:</span>
                          <p>{this.props.cabnewr.cabDispdetail.HQ45}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.HQ45Fee}</p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.HQ45Cos}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnewr.cabDispdetail.FR20?
                      <div className="cab53">
                        <div className="cab54">
                          <span>20FR:</span>
                          <p>{this.props.cabnewr.cabDispdetail.FR20}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.FR20Fee}</p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.FR20Cos}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnewr.cabDispdetail.FR40?
                      <div className="cab53">
                        <div className="cab54">
                          <span>40FR:</span>
                          <p>{this.props.cabnewr.cabDispdetail.FR40}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.FR40Fee}</p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.FR40Cos}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnewr.cabDispdetail.RF20?
                      <div className="cab53">
                        <div className="cab54">
                          <span>20RF:</span>
                          <p>{this.props.cabnewr.cabDispdetail.RF20}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.RF20Fee}</p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.RF20Cos}</p>
                        </div>
                      </div>:undefined
                  }
                  {
                    this.props.cabnewr.cabDispdetail.RF40?
                      <div className="cab53">
                        <div className="cab54">
                          <span>40RF:</span>
                          <p>{this.props.cabnewr.cabDispdetail.RF40}</p>
                        </div>
                        <div className="cab54">
                          <span>总定金:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.RF40Fee}</p>
                        </div>
                        <div className="cab54">
                          <span>总运价:</span>
                          <p>{this.props.cabnewr.cabDispdetail.curr==1?'¥':'$'} {this.props.cabnewr.cabDispdetail.RF40Cos}</p>
                        </div>
                      </div>:undefined
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}