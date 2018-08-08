/*
 * @Author: sepgit 
 * @Date: 2018-07-18 10:10:13 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-06 09:28:34
 */

import React,{Component} from 'react';
import CabMysearch from './../cabMy/cabMysearch';
import { Link } from 'react-router';
import Qgclb from './../comment/qgclb';
import { message,Select } from 'antd';
import Owntktlists from './owntktList'
export default class Owntkt extends Component {
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
    // this.props.actions.gettktlists(userName,token)
    
  }
  
  render() {
   
    return (
      <div className="tkt-main">
          <ul className="clearfix tkt-topNav">
                <li>
                    <Link activeClassName="activad" to="tickets">待领取优惠卷</Link>
                </li>
                <li>
                    <Link activeClassName="activad" to="Towned" className="bg2db7f5">已拥有的优惠卷</Link>
                </li>
                <li>
                    <Link activeClassName="activad" to="Release">我发布的优惠卷</Link>
                </li>
          </ul>
          <div>
            <div className="ser-main-cntr">
              <ul className="ser-main-cntr-search clearfix">
                {/* <li className="ser-main-cntr-search-left" >
                  <span className="ser-main-cntr-search-tit" >会员企业:&nbsp; &nbsp;</span>
                  <Select 
                    style={{width:140}}
                  />
                </li>

                <li className="ser-main-cntr-search-right">
                  <span>筛选</span>
                  
                  <span>刷新</span>
                </li> */}
              </ul>
              <div className="ser-main-column">
                <Owntktlists actions={this.props.actions} text={this.props.text} tktnew={this.props.tktnew} owntkts={this.props.owntkts}></Owntktlists>
              </div>
            </div>
          </div>
      </div>
    );
  }
}