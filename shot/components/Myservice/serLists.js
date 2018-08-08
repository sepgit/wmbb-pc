/*
 * @Author: sepgit 
 * @Date: 2018-07-10 14:23:46 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-18 12:56:12
 */
import React,{Component} from 'react';
import { message,Select } from 'antd';
import Footinfo from './../login/footinfo';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout,timeoutm;

export default class SerLists extends Component {
  constructor(props) {
    super(props);
    // this.handseach=this.handseach.bind(this);
        
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
    }
  }
  componentDidMount(){
    // console.log(this.props.actions);
  }
  render() {
    return (
        <div className="ser-main-lists">
            sdfasdasd
        </div>
    )
  }
}
