/**
 * Created by Zing on 2016/10/28.
 */
import React,{Component} from 'react';
import moment from 'moment';
import {Popover,message,Rate } from 'antd';

export default class Cyspjcmid extends Component {
  constructor(props) {
    super(props);
    this.handpj=this.handpj.bind(this);
    this.handqpj=this.handqpj.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handqpj(){
    this.props.cyspj();
  }
  handpj(){
    //回盘评价详情
    this.props.actions.gethppjxq(this.state.userName,this.state.token,this.props.ishpid);
    this.props.handyspj(this.props.iszbin,this.props.ishpid);//优势评价页面
  }
  render() {
    return (
      <div className="Cyspjmid">
        <div className="cpj1">
          <span onClick={this.handpj}>优势评价</span>
          <h5>评分标准:</h5>
        </div>
        <div className="cpj2">
          承运商评价
        </div>
        <div className="cpj3">
          <ul>
            <li>价格合理</li>
            <li>舱位保障</li>
            <li>服务优质</li>
            <li>应急处理</li>
          </ul>
        </div>
        <div className="cpj4">
          <span className="ant-rate-text">{this.props.getdetil.cysscor} 星（满分5星）</span>
        </div>
        <div className="cpj12">
          <div className="cpj13">
            <h6>回复：</h6>
            <span>{this.props.getdetil.callRepl}次</span>
          </div>
          <div className="cpj13">
            <h6>中标：</h6>
            <span>{this.props.getdetil.cwinRepl}次</span>
          </div>
        </div>
        <div className="cpj5">
          <span className="cpj9">评论:</span>
          <ul className="cpj10">
            {
              this.props.getdetil.cysscors.map((s,i) => {
                return <li key={i}>
                  <div className="cpj11">{s.carrScorDet}</div>
                  <h6>{moment(s.carrScorTime).format('YYYY.MM.DD')}</h6>
                </li>
              })
            }
          </ul>
        </div>
        <div className="cpj6">
          {
            this.props.iszbin==30?
              this.props.getdetil.cysscors.length>0?undefined:
                <a className="cpj7" href="javascript:void(0);" onClick={this.handqpj}>立即评价</a>:undefined
          }
          <a className="cpj8" href="javascript:void(0);" onClick={this.props.handcyspjc}>关闭</a>
        </div>
      </div>
    );
  }
}