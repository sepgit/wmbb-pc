/**
 * Created by Chen on 2017/12/13.
 */
import React,{Component} from 'react';
import Cabrgsearch from './cabrgsearch';
import { Link } from 'react-router';
import Qgclb from './../comment/qgclb';

export default class Cabrgmid extends Component {
  constructor(props) {
    super(props);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN")
    }
  }
  componentDidMount() {
    let userName = this.state.userName;
    let token = this.state.token;
    //获取服务列表
    this.props.actions.getfwlxr(userName,token);
    //获取起运地目的地
    this.props.actions.getkouanr(userName,token);
    this.props.actions.getcarrs(userName,token,0);
  }
  render() {
    return (
      <div className="camid">
        <Qgclb />
          <div className="cab131">
              当前列表：供舱列表（供舱方发起的供舱保函）
          </div>
        <Cabrgsearch actions={this.props.actions} text={this.props.text} cabrgnew={this.props.cabrgnew}/>
      </div>
    );
  }
}