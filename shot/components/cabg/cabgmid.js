/**
 * Created by Chen on 2017/12/11.
 */
import React,{Component} from 'react';
import Cabgsearch from './../cabg/cabgsearch';
import { Link } from 'react-router';
import Qgclb from './../comment/qgclb';

export default class Cabgmid extends Component {
  constructor(props) {
    super(props);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  componentDidMount(){
    let userName = this.state.userName;
    let token = this.state.token;
    //获取服务列表
    this.props.actions.getfwlx(userName,token);
    //获取起运地目的地
    this.props.actions.getkouan(userName,token);
    this.props.actions.getcarrs(userName,token,0);
  }
  render() {
    return (
      <div className="camid">
        <Qgclb />
          <div className="cab131">
              当前列表：求舱列表（供舱方发起的求舱保函）
          </div>
        <Cabgsearch actions={this.props.actions} text={this.props.text} cabgnew={this.props.cabgnew}/>
      </div>
    );
  }
}