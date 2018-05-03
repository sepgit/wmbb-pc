/**
 * Created by Zing on 2016/10/20.
 */
import React,{Component} from 'react';
import Spdetil from './spdetil';
import { Checkbox,Modal } from 'antd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
const confirm = Modal.confirm;

export default class Splistall extends Component {
  constructor(props) {
    super(props);
    this.handxqs=this.handxqs.bind(this);
    this.handcb=this.handcb.bind(this);
    this.handck=this.handck.bind(this);
    this.handvip=this.handvip.bind(this);
    this.handhoxq=this.handhoxq.bind(this);
    this.state={
      iscb:false,
      EnquStat:'',
      zt:'',
      comp:sessionStorage.getItem("SESSIONCOMP"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      isck:false
    }
  }
  handvip(e){
    let This=this;
    confirm({
      title: '是否确认会员展示',
      content: '会员展示会比普通展示靠前展示',
      onOk() {
        //确认会员展示
        This.props.actions.putvipzss(This.state.userName,This.state.token,This.props.rows.adva);
      },
      onCancel() {}
    });
  }
  handck(e){
    this.props.handxg(e.target.checked,this.props.rows.adva);
    this.setState({
      isck:e.target.checked
    })
  }
  handcb(v,c){
    this.setState({
      iscb:true,
      zt:v,
      EnquStat:c
    })
  }
  handhoxq(){
    let userName = this.state.userName;
    let token = this.state.token;
    let advaid=this.props.rows.adva;
    this.props.actions.getyspxq(userName,token,advaid);
  }
  handxqs(){
    //改变详情动画
    this.props.actions.tzhshow(true,this.props.keys);
    let userName = this.state.userName;
    let token = this.state.token;
    let advaid=this.props.rows.adva;
    this.props.actions.getyspxq(userName,token,advaid);
  }
  render() {
    let EnquStat,zt;
    switch(this.props.rows.enab){
      case 1:
        EnquStat='启用';
        zt ='zt1';
        break;
      case 0:
        EnquStat='禁用';
        zt ='zt5';
        break;
      default:
        EnquStat='';
        zt ='';
        break;
    }
    return (
      <li className="adl2">
        <div className="adl7">
          {
            this.props.rows.isPlat==1?<img className="adl14" src={require('../../src/image/ptzs.png')} />:undefined
          }
          {
            this.props.rows.isVip==1?<img className="adl14" src={require('../../src/image/hyzs.png')} />:undefined
          }
          {
            this.props.rows.isPush==1?<img className="adl14" src={require('../../src/image/zdts.png')} />:undefined
          }
          <div className="adl15">
            {
              (this.state.userid==this.props.rows.user||this.state.userid==this.props.rows.creator)?
                <Checkbox checked={this.state.isck} onChange={this.handck}></Checkbox>:undefined
            }
          </div>
        </div>
        <div className="adl3">
          {this.props.rows.servName}
        </div>
        <div className="adl11">
          {this.props.rows.depaPortName}
        </div>
        <div className="adl10">
          {this.props.rows.creatName}
        </div>
        <div className="adl10">
          {
            this.state.comp>0?this.props.rows.userName:this.props.rows.creatName
          }
        </div>
        <div className="adl3">
          <p className="adl5">
            <span className={this.state.iscb?this.state.zt:zt}>{this.state.iscb?this.state.EnquStat:EnquStat}</span>
          </p>
        </div>
        <div className="adl3">
          <img className="adl4" src={require('../../src/image/ygxq.png')} onClick={this.handxqs} onMouseOver={this.handhoxq} />
        </div>
        {
          this.state.comp>0?
            this.props.text.priv.admi!=0?
              <div className="adl10">
                {
                  this.props.rows.isVip == 1 ? <span className="adl13">会员展示中</span> :
                    <span className="adl12" onClick={this.handvip}>会员展示</span>
                }
              </div>:undefined:
            <div className="adl10">
              {
                this.props.rows.isVip == 1 ? <span className="adl13">会员展示中</span> :
                  <span className="adl12" onClick={this.handvip}>会员展示</span>
              }
            </div>
        }
        <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
          {
            this.props.shows.text&&this.props.shows.keys==this.props.keys?
              <Spdetil shows={this.props.shows}
                       actions={this.props.actions}
                       yssp={this.props.yssp}
                       rows={this.props.rows}
                       text={this.props.text}
                       handcb={this.handcb}/>:
              undefined
          }
        </VelocityTransitionGroup>
      </li>
    );
  }
}