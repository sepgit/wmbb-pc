/*
 * @Author: sepgit 
 * @Date: 2018-07-20 10:58:05 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-20 13:19:29
 */
import React, { Component } from 'react';
import { Input, DatePicker, Select, message, Checkbox } from 'antd';
import moment from 'moment';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout, timeoutm;

export default class NewSerBG extends Component {
    constructor(props) {
      super(props);
      // this.skbqr=this.skbqr.bind(this);

      this.state={
        userName:sessionStorage.getItem("SESSIONUSERACC"),
        token:sessionStorage.getItem("SESSIONTOKEN"),
        userid:sessionStorage.getItem("SESSIONUSER"),
        comp:sessionStorage.getItem("SESSIONCOMP"),
        serID:this.props.serID,
      }
    }
    
    componentDidMount(){
      console.log(this.state.serID)
    }
    render() {

      return (
         <div className="bh-main">
             <div className="bh-contant">
                <ul className="bh-contant-tit clearfix">
                  <li className="bh-contant-tit-left">发布服务保函 </li>                  
                  <li className="bh-contant-tit-right close">关闭</li>
                  <li className="bh-contant-tit-right release">立即发布</li>
                </ul>
                <ul>
                  <li>
                    <div></div>
                    <div></div>
                  </li>
                  <li>
                    <div></div>
                    <div></div>
                  </li>
                  <li>
                    <div></div>
                    <div></div>
                  </li>
                  <li>
                    <div></div>
                    <div></div>
                  </li>
                  <li>
                    <div></div>
                    <div></div>
                  </li>
                  <li>
                    <div></div>
                    <div></div>
                  </li>
                  <li>
                    <div></div>
                    <div></div>
                  </li>
                  <li>
                    <div></div>
                    <div></div>
                  </li>
                </ul>
             </div>
         </div>
      )
    }
  }
  