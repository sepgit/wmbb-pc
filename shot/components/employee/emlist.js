/**
 * Created by Zing on 2016/8/25.
 */
import React,{Component} from 'react';
import Emdel from './emdel';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Emlist extends Component {
  constructor(props) {
    super(props);
    this.handxq=this.handxq.bind(this);
    this.handjy=this.handjy.bind(this);
    this.handxqxx=this.handxqxx.bind(this);
    let EnquStat,zt;
    switch(this.props.rows.leav) {
      case 0:
        EnquStat = '启用';
        zt = 'zt1';
        break;
      case 1:
        EnquStat = '禁用';
        zt = 'zt5';
        break;
      default:
        EnquStat = '启用';
        zt = 'zt1';
        break;
    }
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      EnquStat:EnquStat,
      zt:zt
    }
  }
  handxqxx(){
    //加载详情
    this.props.actions.getemdel(this.state.userName,this.state.token,this.props.rows.user);
    //加载权限
    this.props.actions.getemqx(this.state.userName,this.state.token,this.props.rows.user);
  }
  handxq(){
    //改变详情
    this.props.actions.emshow(true,this.props.keys);
  }
  handjy(){
    this.setState({
      EnquStat :' 禁用',
      zt :'zt5'
    })
  }
  render() {
    return (
      <li className="emls2">
        <div className="emls3" title={this.props.rows.userAcco}>
          {this.props.rows.userAcco}
        </div>
        <div className="emls3" title={this.props.rows.name}>
          {this.props.rows.name}
        </div>
        <div className="emls3" title={this.props.rows.mobi}>
          {this.props.rows.mobi}
        </div>
        <div className="emls3">
          {this.props.rows.freiMngr==1?'√':'×'}
        </div>
        <div className="emls3">
          <a href="javascript:void(0);" className="emlxq" onMouseOver={this.handxqxx} onClick={this.handxq}>详情</a>
        </div>
        <div className="emls3">
          <span className={this.state.zt}>{this.state.EnquStat}</span>
        </div>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
          {
            this.props.shows.text&&this.props.shows.keys==this.props.keys?
              <Emdel shows={this.props.shows}
                     actions={this.props.actions}
                     ema={this.props.ema}
                     handqy={this.handqy}
                     handjy={this.handjy}
              />:undefined
          }
        </VelocityTransitionGroup>
      </li>
    );
  }
}