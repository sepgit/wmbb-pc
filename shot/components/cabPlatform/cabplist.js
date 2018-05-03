/**
 * Created by Chen on 2017/12/6.
 */
import React,{Component} from 'react';
import Cabplistall from './cabplistall';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Cabplist extends Component {
  constructor(props) {
    super(props);
    this.renderList=this.renderList.bind(this);
    this.onScroll=this.onScroll.bind(this);
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
    //re=this.props.cabnew.cabDispsList;
    this.state.page==1?re=this.props.cabnewr.cabDispsList:re=this.state.hhs;
    return re.map((item, index) => {
      return <Cabplistall
        key={index}
        keys={index}
        rows={item}
        actions={this.props.actions}
        cabnewr={this.props.cabnewr}
      />
    });
  }

  onScroll(v){
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
          ...this.props.cabnewr.cabDispsList
        ]
      });
      this.state.Hes=0;
    }
  }

  render() {
    return (
      <div className="cab7" onWheel={this.onScroll}>
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