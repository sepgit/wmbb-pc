/**
 * Created by Zing on 2016/10/20.
 */
import React,{Component} from 'react';
import Splistall from './splistall';
import { Checkbox } from 'antd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Splists extends Component {
  constructor(props) {
    super(props);
    this.handcbc=this.handcbc.bind(this);
    this.handleScroll=this.handleScroll.bind(this);
    this.handqxlist=this.handqxlist.bind(this);
    this.handczqx=this.handczqx.bind(this);
    this.state={
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      Hes:0,
      page:1,
      hhs:[],
      qx:false
    }
  }
  handczqx(){
    let re=[];
    this.state.page==1?re=this.props.yssp.ysplists:re=this.state.hhs;
    //设置子组件状态
    let THIS=this;
    re.map((item,index) => {
      let detlc='detlc'+index;
      THIS.refs[detlc].setState({
        isck:false
      })
    })
  }
  handqxlist(e){
    let re=[];
    this.state.page==1?re=this.props.yssp.ysplists:re=this.state.hhs;
    this.props.handqx(e.target.checked,re);
    this.setState({
      qx:e.target.checked
    });
    //设置子组件状态
    let THIS=this;
    re.map((item,index) => {
      let detlc='detlc'+index;
      THIS.refs[detlc].setState({
        isck:e.target.checked
      })
    })
  }
  handcbc() {
    let re=[];
    this.state.page==1?re=this.props.yssp.ysplists:re=this.state.hhs;
    let THIS=this;
    re.map((item,index) => {
      let detlc='detlc'+index;
      THIS.refs[detlc].setState({
        iscb:false,
        zt:'',
        EnquStat:''
      })
    })
  }
  componentDidMount(){
    this.props.actions.getysplistc(this.state.userName,this.state.token);//初始化列表
  }
  renderList(){
    let re=[];
    this.state.page==1?re=this.props.yssp.ysplists:re=this.state.hhs;
    if(re.length==0){
      if(this.props.yts){
        return <li className="adl2one">暂无已自动推送优势，如有想自动推送的优势，请联系平台客服。</li>;
      }else{
        return <li className="adl2one">您的特种货运价优势列表暂无记录，请添加优势，以便让您的客户和潜在客户找到您的询价。</li>;
      }
    }else {
      return re.map((item, index) => {
        let detlc = 'detlc' + index;
        return <Splistall
          ref={detlc}
          key={index}
          keys={index}
          rows={item}
          handxg={this.props.handxg}
          shows={this.props.shows}
          actions={this.props.actions}
          yssp={this.props.yssp}
          text={this.props.text}
        />
      });
    }
  }
  handleScroll(v){
    let bodyheight = document.body.clientHeight;// 获取可见区域高
    let sohe=v.deltaY;//每次滚动高
    this.state.Hes+=sohe;//每次滚动叠加
    if((bodyheight-this.state.Hes)<=(bodyheight/2)){
      this.state.page++;
      this.props.actions.getysplistgd( this.state.userName, this.state.token, this.state.page, ...this.props.Fstate);//获取搜索条件
      this.setState({
        hhs:[
          ...this.state.hhs,
          ...this.props.yssp.ysplists
        ]
      });
      this.state.Hes=0;
    }
  }
  render() {
    return (
      <div className="adlists" onWheel={this.handleScroll}>
        <ul className="adlists1">
          <li className="adl1">
            <ul>
              <li className="adl6">
                <Checkbox checked={this.state.qx} onChange={this.handqxlist}>全选</Checkbox>
              </li>
              <li>服务类型</li>
              <li className="adl8">口岸</li>
              <li className="adl9">发布人</li>
              <li className="adl9">接收人</li>
              <li>状态</li>
              <li>详情</li>
            </ul>
          </li>
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