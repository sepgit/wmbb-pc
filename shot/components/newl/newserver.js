/*
 * @Author: sepgit 
 * @Date: 2018-07-02 10:01:16 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-05 13:45:15
 */
import React,{Component} from 'react';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Newserver extends Component{
    constructor(props) {
        super(props);
        this.ponMouseEnter=this.ponMouseEnter.bind(this); //鼠标移到
        this.ponMouseLeave=this.ponMouseLeave.bind(this); //鼠标离开
        this.state={
          userName:sessionStorage.getItem("SESSIONUSERACC"),
          token:sessionStorage.getItem("SESSIONTOKEN"),
          userid:sessionStorage.getItem("SESSIONUSER"),

          pisshow:false,
        }
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
          return <div>
          <li className='newl2' onMouseEnter={this.ponMouseEnter} onMouseLeave={this.ponMouseLeave}>
            <h4 className='newlh4'>发起服务宝</h4>
            {
              this.state.pisshow?
                <div className='newl3'>
                  <h5>服务宝是一个由求供服务双方为确保履约完成自愿在平台上签订的服务保函。</h5>
                  <ul className='newl3-1'>
                    <li>1.供服务方发布服务和价格及其他相关信息，在求服务方购买服务成功后，要确保服务完成并承诺价格不变。</li>
                    <li>2.求供服务双方一旦确认保函有效，双方均承诺接受和遵守平台的要求和规范。</li>
                  </ul>
                  <a href="javascript:void(0);" onClick={this.linkcwb}>发起服务宝</a>
                </div>:undefined
            }
          </li>
          {/* <VelocityTransitionGroup enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
            {
              this.state.lkskb?<Getskb pays={this.props.pays}
                                       actions={this.props.actions}
                                       handqr={this.handqr}
                                       text={this.props.text}
                                       linkskbc={this.linkskbc}/>:undefined
            }
          </VelocityTransitionGroup> */}
          <VelocityTransitionGroup enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
            {
              this.state.lkskb?<div>123123</div>:undefined
            }
          </VelocityTransitionGroup>
         {/*  <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
            {
              this.state.isshow?
                <Panewadd
                  pays={this.props.pays}
                  text={this.props.text}
                  indexs={this.state.indexs}
                  actions={this.props.actions}
                  hnandclose={this.hnandclose}
                />:undefined
            }
          </VelocityTransitionGroup> */}
        </div>
      }
}