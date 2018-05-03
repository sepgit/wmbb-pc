/**
 * Created by Chen on 2017/4/25.
 */
import React,{Component} from 'react';
import CabMysearch from './../cabMy/cabMysearch';
import { Link } from 'react-router';
import Qgclb from './../comment/qgclb';

export default class CabMymid extends Component {
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
    this.props.actions.getfwlxcwb(userName,token);
    //获取承运商
    this.props.actions.getcarrscwba(userName,token);
  }
  render() {
    return (
      <div className="camid">
        <Qgclb />
        <CabMysearch actions={this.props.actions} text={this.props.text} cabmynew={this.props.cabmynew}/>
      </div>
    );
  }
}