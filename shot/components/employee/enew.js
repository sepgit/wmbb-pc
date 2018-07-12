/**
 * Created by Zing on 2016/8/25.
 */
import React,{Component} from 'react';
import Emadd from './emadd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import { message } from 'antd';

export default class Enew extends Component {
  constructor(props) {
    super(props);
    this.handnew=this.handnew.bind(this);
    this.handnewc=this.handnewc.bind(this);
    this.handts=this.handts.bind(this);
    this.handtsc=this.handtsc.bind(this);
    this.state={
      isnew:false,
      isygtx:false
    }
  }
  handnew(){
    if(this.props.ema.staffNum >= this.props.text.comps.membNum){
      message.error('员工数量上限！');
    }else {
      this.setState({
        isnew:true
      })
    }
  }
  handnewc(v){
    this.setState({
      isnew:v
    })
  }
  handts(){
    this.setState({
      isygtx:true
    })
  }
  handtsc(v){
    this.setState({
      isygtx:false
    })
  }
  render() {
    return (
      <div className="emp">
        <div className="emp6">
          员工账号：{this.props.ema.staffNum}/{this.props.text.comps.membNum}
        </div>
        <div className="emp1" onClick={this.handnew}>
          新增员工
        </div>
        {
          this.props.text.priv.admi != 0?
            < div className="emp2">
              <img className="emp4" src={require('../../src/image/ygts.png')} onClick={this.handts}/>
            </div>:undefined
        }
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
          {
            this.state.isnew?<Emadd text={this.props.text} handnewc={this.handnewc} actions={this.props.actions} ema={this.props.ema}/>:undefined
          }
        </VelocityTransitionGroup>
        {
          this.state.isygtx?
            < div className="emp3">
              <p>
                请公司管理员添加员工后，对需要赋予权限的员工，点击“详情”后操作完成。
                发布运价优势是让该员工可以进入导航“优势”，在“运价优势”和“特种货运价优势”里可以“新增优势”。
                发布服务优势是让该员工可以进入导航“优势”，在“服务优势”里可以“新增优势”。
                录入供应商是让该员工可以进入导航“供应商”，对公司的供应商进行登记。
                委托是该员工可以作为公司员工每个询盘、咨询时，“委托”一栏里面的委托人。
                同时能收到该询盘和咨询。
                注：新增的员工账号需要在登录前激活,再重置密码
              </p>
              <a href="javascript:void(0);" className="emp5" onClick={this.handtsc}>知道了</a>
            </div>:undefined
        }
      </div>
    );
  }
}