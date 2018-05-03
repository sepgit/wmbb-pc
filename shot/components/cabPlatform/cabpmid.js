/**
 * Created by Chen on 2017/12/05.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';
import Cabpseach from './../cabPlatform/cabpsearch';
import Qgclb from './../comment/qgclb';

export default class Cabpmid extends Component {
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
    this.props.actions.getcarrsp(userName,token,0);
    this.props.actions.getcabDepos(userName,token,0);   //获取所有运价类型
  }

  render() {
    return (
      <div className="camid">
        <Qgclb />
        <Cabpseach actions={this.props.actions} text={this.props.text} cabnewr={this.props.cabnewr}/>
      </div>
    );
  }
}