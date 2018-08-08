/*
 * @Author: sepgit 
 * @Date: 2018-07-10 14:23:46 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-18 13:17:24
 */
import React,{Component} from 'react';
import { message,Select } from 'antd';
import Footinfo from './../login/footinfo';
import SerLists from './serLists'
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout,timeoutm;

export default class SeekserList extends Component {
  constructor(props) {
    super(props);
    // this.handseach=this.handseach.bind(this);
      this.showList=this.showList.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
    }
  }
  componentDidMount(){
    // console.log(this.props.actions);
    this.showList()
  }
  showList() {
    let userName=this.state.userName;
    let token=this.state.token;
    this.props.actions.getserlists(userName,token,1)
  }
  render() {
    console.log(this.props.myservernew);
    return (
        <div className="ser-main-cntr">
            <ul className="ser-main-cntr-search clearfix">
              <li className="ser-main-cntr-search-left" >
                <span className="ser-main-cntr-search-tit" >服务列表:&nbsp; &nbsp;</span>
                <Select 
                  style={{width:140}}
                />
              </li>
              <li className="ser-main-cntr-search-left" >
                <span className="ser-main-cntr-search-tit" >口岸:&nbsp; &nbsp;</span>
                <Select 
                  style={{width:140}}
                />
              </li>
              <li className="ser-main-cntr-search-right">
                <span>搜索</span>
                <span>充值</span>
                <span>刷新</span>
              </li>
            </ul>
            <div className="ser-main-column">
              
            </div>
        </div>
    )
  }
}
