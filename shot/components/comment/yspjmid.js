/**
 * Created by Zing on 2016/10/28.
 */
import React,{Component} from 'react';
import moment from 'moment';
import {Popover,message,Rate } from 'antd';

export default class Yspjmid extends Component {
  constructor(props) {
    super(props);
    this.hanlkpj=this.hanlkpj.bind(this);
    this.handce=this.handce.bind(this);
    this.handqcyspj=this.handqcyspj.bind(this);
    this.state={
      yspj:'',
      pj:0,
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handqcyspj(){
    this.props.cyspj();
  }
  handce(v) {
    this.setState({
      pj:v
    });
  }
  hanlkpj(){
    //立即评价并关闭
    let userName=this.state.userName;
    let token=this.state.token;
    let scor=this.state.pj;
    let scorDet=this.state.yspj;
    let repl=this.props.ishpid;
    this.props.actions.putyspja(userName,token,scor,scorDet,repl);
  }
  render() {
    return (
      <div className="yspjmid">
        <div className="ypj1">
          <span onClick={this.handqcyspj}>承运商评价</span>
          <h5>评分标准:</h5>
        </div>
        <div className="ypj2">
          优势评价
        </div>
        <div className="ypj3">
          <ul>
            <li>价格合理</li>
            <li>舱位保障</li>
            <li>服务优质</li>
            <li>应急处理</li>
          </ul>
        </div>
        <div className="ypj4">
          <Rate value={this.state.pj} onChange={this.handce}/>
          <span className="ant-rate-text">{this.state.pj} 星（满分5星）</span>
        </div>
        <div className="ypj5">
          <span className="ypj9">评论:</span>
          <textarea
            value={this.state.yspj}
            maxLength="60"
            placeholder="30个字以内"
            onChange={(e)=>{return this.setState({yspj:e.target.value})}}
          ></textarea>
        </div>
        <div className="ypj6">
          <a className="ypj7" href="javascript:void(0);" onClick={this.hanlkpj}>立即评价</a>
          <a className="ypj8" href="javascript:void(0);" onClick={this.props.yspjc}>关闭</a>
        </div>
      </div>
    );
  }
}