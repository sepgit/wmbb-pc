/*
 * @Author: sepgit 
 * @Date: 2018-07-18 10:10:13 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-08-06 09:43:18
 */

import React,{Component} from 'react';
import CabMysearch from './../cabMy/cabMysearch';
import { Link } from 'react-router';
import Qgclb from './../comment/qgclb';
import { message,Select } from 'antd';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
import GetMyreltkts from './myreltkts';
import Allmyrel from './allmyrel'
export default class Myrel extends Component {
  constructor(props) {
    super(props);
    this.getprebatch = this.getprebatch.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      user:sessionStorage.getItem("SESSIONUSER"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      Arrprebatch:[]
    }
  }
  componentDidMount(){
    let userName = this.state.userName;
    let token = this.state.token;
    // this.props.actions.gettktlists(userName,token)
    let user = this.state.user;
    let comp = this.state.comp;
    this.props.actions.getallmyrel(userName,token,comp)
    // let arr = this.props.myrls.allmyrel;
    // console.log(arr)
  }
  getprebatch() {
    let  allrel =this.props.myrls.allmyrel;

  }
  render() {
    // console.log(this.props.myrls.allmyrel);
    // let arr = []
    // if ( this.props.myrls.allmyrel >0) {
    //   arr=this.props.myrls.allmyrel;
    // }
    return (
      <div className="tkt-main">
          <ul className="clearfix tkt-topNav">
                <li>
                    <Link activeClassName="activad" to="tickets">待领取优惠卷</Link>
                </li>
                <li>
                    <Link activeClassName="activad" to="Towned">已拥有的优惠卷</Link>
                </li>
                <li>
                    <Link activeClassName="activad" to="Release"  className="bg2db7f5">我发布的优惠卷</Link>
                </li>
          </ul>
          <div>
            <div className="ser-main-cntr">
              <ul className="ser-main-cntr-search clearfix">
                <li className="ser-main-cntr-search-left" >
                  <span className="ser-main-cntr-search-tit" >批次:&nbsp; &nbsp;</span>
                  <Select 
                  style={{width:140}}
                  >
                   
                  </Select>
                </li>
                <li className="ser-main-cntr-search-left" >
                  <span className="ser-main-cntr-search-tit" >使用状态:&nbsp; &nbsp;</span>
                  <Select 
                  style={{width:140}}
                  >
                   
                  </Select>
                </li>
                <li className="ser-main-cntr-search-right">
                  <span>筛选</span>
                  
                  <span>刷新</span>
                </li>
              </ul>
              <div className="ser-main-column">
              {
                this.props.myrls.allmyrel.length>1 ?
                <Allmyrel 
                  actions={this.props.actions}
                  text={this.props.text} 
                  tktnew={this.props.tktnew} 
                  myrls={this.props.myrls}
                  owntkts={this.props.owntkts}>
                </Allmyrel>:undefined
              }
               {/* <GetMyreltkts actions={this.props.actions} text={this.props.text} tktnew={this.props.tktnew} owntkts={this.props.owntkts}></GetMyreltkts> */}
                {/* <Owntktlists actions={this.props.actions} text={this.props.text} tktnew={this.props.tktnew} owntkts={this.props.owntkts}></Owntktlists> */}
               
              </div>
            </div>
          </div>
      </div>
    );
  }
}