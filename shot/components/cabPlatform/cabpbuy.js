/**
 * Created by Chen on 2017/12/19.
 */
import React,{Component} from 'react';
import { Select,message } from 'antd';
const Option = Select.Option;

export default class Cabpbuy extends Component {
  constructor(props) {
    super(props);
    this.buyonClick=this.buyonClick.bind(this);				//货币事件
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      nlfs:''
    }
  }
  componentDidMount (){
    let userName = this.state.userName;
    let token = this.state.token;
    this.props.actions.getcabDepos(userName,token,0);   //获取余额
    this.props.actions.getnlfwlx(userName,token);
  }
  buyonClick() {
    let userName = this.state.userName;
    let token = this.state.token;
    let inldType = this.state.nlfs;
    let cabDisp = this.props.rows.cabDisp;
    let dj=this.props.rows.allDepo;
    let rye=this.props.cabnewr.residual;
    let mye=this.props.cabnewr.resiUsd;
    if(this.props.rows.curr==1){
      if(dj>rye){//人民币定金大于余额
        message.error("余额不足请去平台充值后购买!");
      }else{
        this.props.actions.putcabDispsbuy(userName, token, cabDisp, inldType);   //购买舱位
        this.props.buyonClose();
      }
    }else{
      if(dj>mye){//美元定金大于余额
        message.error("余额不足请去平台充值后购买!");
      }else{
        this.props.actions.putcabDispsbuy(userName, token, cabDisp, inldType);   //购买舱位
        this.props.buyonClose();
      }
    }
  }
  render() {
    return (
      <div className="cabzzc">
        <div className="cabbuy">
          <div className="cabtile">
            <span>购买供舱舱位-{this.props.rows.cabDisp}</span>
            <a href="javascript:void(0);" className="cabbuy1" onClick={this.props.buyonClose}>取消</a>
            <a href="javascript:void(0);" className="cabbuy2" onClick={this.buyonClick}>确认购买</a>
          </div>
          <div className="cabbuy3">
            <h4>内陆运输方式</h4>
            <Select showSearch
                    value={this.state.nlfs}
                    className="cabbuy4"
                    optionFilterProp="children"
                    notFoundContent="无法找到"
                    placeholder="请选择内陆方式"
                    onChange={(v)=>{return this.setState({nlfs:v})}}
            >
              {
                this.props.cabnewr.nlfw.map(s => <Option key={s.serv}>{s.servName}</Option>)
              }
            </Select>
          </div>
          <div className="cabbuy3">
            <h4>定金</h4>
            <p>{this.props.rows.curr==1?'¥':'$'} {this.props.rows.allDepo}</p>
          </div>
          <div className="cabbuy3">
            <h4>账户余额:</h4>
            <div className="cabbuy6">
              <div className="cabbuy7">
                ¥{this.props.cabnewr.residual}
              </div>
              <div className="cabbuy7">
                ${this.props.cabnewr.resiUsd}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}