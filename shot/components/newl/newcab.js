/**
 * Created by Chen on 2017/12/13.
 */
import React,{Component} from 'react';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import Getcwb from './getcwb';
import Cwbadfcl from './../cabMy/cwbadfcl';
import Cwbaddg from './../cabMy/cwbaddg';
import Cwbadhg from './../cabMy/cwbadhg';
import Cwbadfr from './../cabMy/cwbadfr';
import Cwbadot from './../cabMy/cwbadot';

export default class NewCab extends Component {
  constructor(props) {
    super(props);
    this.fonClick=this.fonClick.bind(this);       //显示新增界面
    this.fonClose=this.fonClose.bind(this);        //关闭新增界面
    this.linkcwb=this.linkcwb.bind(this);
    this.linkcwbc=this.linkcwbc.bind(this);
    this.ponMouseEnter=this.ponMouseEnter.bind(this); //鼠标移到
    this.ponMouseLeave=this.ponMouseLeave.bind(this); //鼠标离开

    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      fisshow:false,                                //新增窗口
      pisshow:false,
      lkcwb:false,
      stat:'',
      indexs:-1
    }
  }
  linkcwb(){
    this.setState({
      lkcwb:true
    })
  }
  linkcwbc(){
    this.setState({
      lkcwb:false
    })
  }
  fonClick(a,b){
    //获取余额
    this.props.actions.getcabyue(this.state.userName,this.state.token,this.state.userid);
    this.setState({
      fisshow:true,
      stat:b,
      indexs:a
    });
  }
  fonClose(v,s){
    this.setState({
      fisshow:v,
      stat:s
    });
  }
  ponMouseEnter(){
    this.setState({
      pisshow:true
    })
  }
  ponMouseLeave(){
    this.setState({
      pisshow:false
    })
  }

  render() {
    let xnewL=<a href="javascript:void(0);" onClick={this.linkcwb}>发起舱位宝</a>;

    return (
      <div>
        <li className='newl2' onMouseEnter={this.ponMouseEnter} onMouseLeave={this.ponMouseLeave}>
          <h4 className='newlh4'>发起舱位宝</h4>
          {
            this.state.pisshow?
              <div className='newl3'>
                <h5>舱位宝是一个由求供舱双方为确保履约完成自愿在平台上签订的舱位保函。</h5>
                <ul className='newl3-1'>
                  <li>1.供舱方对发布的舱位和价格，在求舱方购买成功后，要确保舱位并承诺价格不变。</li>
                  <li>2.求舱供舱方一旦确认保函有效，必须遵守平台的要求和规范。</li>
                </ul>
                {xnewL}
              </div>:undefined
          }
        </li>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
          {
            this.state.lkcwb?<Getcwb actions={this.props.actions}
                                     fonClick={this.fonClick}
                                     cabmynew={this.props.cabmynew}
                                     linkcwbc={this.linkcwbc}/>:undefined
          }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:700}} leave={{animation: "fadeOut"}}>
          {
            this.state.fisshow?
              this.state.stat=='FCL'?
              <Cwbadfcl
                 actions={this.props.actions}
                 text={this.props.text}
                 indexs={this.state.indexs}
                 stat={this.state.stat}
                 fonClose={this.fonClose}
                 cabmynew={this.props.cabmynew}
               />
              : this.state.stat=='DG'?
                <Cwbaddg
                  actions={this.props.actions}
                  text={this.props.text}
                  indexs={this.state.indexs}
                  stat={this.state.stat}
                  fonClose={this.fonClose}
                  cabmynew={this.props.cabmynew}
                />
                : this.state.stat=='HG'?
                  <Cwbadhg
                    actions={this.props.actions}
                    text={this.props.text}
                    indexs={this.state.indexs}
                    stat={this.state.stat}
                    fonClose={this.fonClose}
                    cabmynew={this.props.cabmynew}
                  />
                  : this.state.stat=='FR'?
                    <Cwbadfr
                      actions={this.props.actions}
                      text={this.props.text}
                      indexs={this.state.indexs}
                      stat={this.state.stat}
                      fonClose={this.fonClose}
                      cabmynew={this.props.cabmynew}
                    />
                    : this.state.stat=='OT'?
                      <Cwbadot
                        actions={this.props.actions}
                        text={this.props.text}
                        indexs={this.state.indexs}
                        stat={this.state.stat}
                        fonClose={this.fonClose}
                        cabmynew={this.props.cabmynew}
                      />:undefined
            :undefined
          }
        </VelocityTransitionGroup>
      </div>
    );
  }
}