/**
 * Created by Chen on 2017/12/11.
 */
import React,{Component} from 'react';
import Cabglistall from './cabglistall';

import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Cabglist extends Component {
  constructor(props) {
    super(props);
    this.handleScroll=this.handleScroll.bind(this);
    this.renderList=this.renderList.bind(this);
    this.state={
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      Hes:0,
      page:1,
      hhs:[]
    }
  }
  componentDidMount(){
    let userName = sessionStorage.getItem("SESSIONUSERACC");
    let token = sessionStorage.getItem("SESSIONTOKEN");
    this.props.actions.getcabDisps(userName,token,1,0,0,0,0,'');//初始化列表  (userName,token,pageIndex,serv,depaPort,destPort,carr,resAcco)
  }
  renderList(){
    let re=[];
    this.state.page==1?re=this.props.cabgnew.cabDispsList:re=this.state.hhs;
    // console.log(re);
    return re.map((item, index) => {
      return <Cabglistall
        key={index}
        keys={index}
        rows={item}
        actions={this.props.actions}
        cabgnew={this.props.cabgnew}
      />
    });
  }
  handleScroll(v){
    let userName = sessionStorage.getItem("SESSIONUSERACC");
    let token = sessionStorage.getItem("SESSIONTOKEN");
    let bodyheight = document.body.clientHeight;// 获取可见区域高
    let sohe=v.deltaY;//每次滚动高
    this.state.Hes+=sohe;//每次滚动叠加
    if((bodyheight-this.state.Hes)<=(bodyheight/2)){
      this.state.page++;
      this.props.actions.getcabDisps(userName, token, this.state.page, ...this.props.Fstate);//获取搜索条件
      this.setState({
        hhs:[
          ...this.state.hhs,
          ...this.props.cabgnew.cabDispsList
        ]
      });
      this.state.Hes=0;
    }
  }
  render() {
    return (
      <div className="cab7" onWheel={this.handleScroll}>
        <ul className="cab8">
          <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
            {
              this.renderList()
            }
          </VelocityTransitionGroup>
        </ul>
      </div>
    );
  }
}