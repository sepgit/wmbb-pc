/**
 * Created by Zing on 2016/10/28.
 */
import React,{Component} from 'react';
import moment from 'moment';
import {Popover,message,Rate } from 'antd';

export default class Yspjcmid extends Component {
  constructor(props) {
    super(props);
    this.handpj=this.handpj.bind(this);
    this.handqpj=this.handqpj.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  handpj(){
    //获取承运商评价列表
    this.props.actions.gethpcyspjxq(this.state.userName,this.state.token,this.props.ishpid);
    this.props.handcyspj(this.props.iszbin,this.props.ishpid);//承运商评价页面
  }
  handqpj(){
    this.props.yspj();
  }
  render() {
    return (
      <div className="Cyspjmid">
        <div className="cpj1">
          <span onClick={this.handpj}>承运商评价</span>
          <h5>评分标准:</h5>
        </div>
        <div className="cpj2">
          优势评价
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
          <span className="ant-rate-text">{this.props.getdetil.scor} 星（满分5星）</span>
        </div>
        <div className="cpj12">
          <div className="cpj13">
            <h6>回复：</h6>
            <span>{this.props.getdetil.allRepl}次</span>
          </div>
          <div className="cpj13">
            <h6>中标：</h6>
            <span>{this.props.getdetil.winRepl}次</span>
          </div>
        </div>
        <div className="cpj5">
          <span className="cpj9">评论:</span>
          <ul className="cpj10">
            {
              this.props.getdetil.scors.map((s,i) => {
                return <li key={i}>
                  <div className="cpj11">{s.scorDet}</div>
                  <h6>{moment(s.scorTime).format('YYYY.MM.DD')}</h6>
                </li>
              })
            }
          </ul>
        </div>
        <div className="cpj6">
          {
            this.props.iszbin==30?
              this.props.getdetil.scors.length>0?undefined:
                <a className="cpj7" href="javascript:void(0);" onClick={this.handqpj}>立即评价</a>:undefined
          }
          <a className="cpj8" href="javascript:void(0);" onClick={this.props.handyspjc}>关闭</a>
        </div>
      </div>
    );
  }
}