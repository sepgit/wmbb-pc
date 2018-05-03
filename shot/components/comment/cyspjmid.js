/**
 * Created by Zing on 2016/10/28.
 */
import React,{Component} from 'react';
import moment from 'moment';
import {Popover,message,Rate } from 'antd';

export default class Cyspjmid extends Component {
  constructor(props) {
    super(props);
    this.hanlkpj=this.hanlkpj.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handqyspj=this.handqyspj.bind(this);
    this.state={
      cyspj:'',
      cpj:0,
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handqyspj(){
    this.props.yspj();
  }
  handleChange(v) {
    this.setState({ cpj:v });
  }
  hanlkpj(){
    //立即评价并关闭
    let userName=this.state.userName;
    let token=this.state.token;
    let carrScor=this.state.cpj;
    let carrScorDet=this.state.cyspj;
    let repl=this.props.ishpid;
    this.props.actions.puthpcyspja(userName,token,carrScor,carrScorDet,repl);
  }
  render() {
    return (
      <div className="yspjmid">
        <div className="ypj1">
          <span onClick={this.handqyspj}>优势评价</span>
          <h5>评分标准:</h5>
        </div>
        <div className="ypj2">
          承运商评价
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
          <Rate value={this.state.cpj} onChange={this.handleChange}/>
          <span className="ant-rate-text">{this.state.cpj} 星（满分5星）</span>
        </div>
        <div className="ypj5">
          <span className="ypj9">评论:</span>
          <textarea
            value={this.state.cyspj}
            maxLength="60"
            placeholder="30个字以内"
            onChange={(e)=>{return this.setState({cyspj:e.target.value})}}
          ></textarea>
        </div>
        <div className="ypj6">
          <a className="ypj7" href="javascript:void(0);" onClick={this.hanlkpj}>立即评价</a>
          <a className="ypj8" href="javascript:void(0);" onClick={this.props.cyspjc}>关闭</a>
        </div>
      </div>
    );
  }
}