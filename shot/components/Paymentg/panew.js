/**
 * Created by Zing on 2016/11/21.
 */
import React,{Component} from 'react';
import Panewadd from './panewadd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Panew extends Component {
    constructor(props) {
        super(props);
        this.showwin=this.showwin.bind(this);
        this.hnandclose=this.hnandclose.bind(this);
        this.handser=this.handser.bind(this);
        this.handright=this.handright.bind(this);
        this.handleft=this.handleft.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            isshow:false,
            nowLocal:0,
            cwith:9999,
            stat:'',
            indexs:-1
        }
    }
    hnandclose(v,s){
        this.setState({
            isshow:v,
            stat:s
        });
    }
    showwin(){
        return this.state.isshow?
                <Panewadd
                    pays={this.props.pays}
                    text={this.props.text}
                    indexs={this.state.indexs}
                    actions={this.props.actions}
                    hnandclose={this.hnandclose}
                />:false;
    }
    handser(e){
        let serv=e.target.getAttribute('value');
        let servName=e.target.innerHTML;
        this.setState({
            isshow:true,
            stat:servName,
            indexs:serv
        });
    }
    handleft(){
        let counts=Math.ceil(this.props.pays.bhfw.length/5);
        let allwith=610*counts;
        let n=this.state.nowLocal;
        if(n<0){
            n+=610;
            this.setState({
                nowLocal:n,
                cwith:allwith
            })
        }
    }
    handright(){
        let counts=Math.ceil(this.props.pays.bhfw.length/5);
        let allwith=610*counts;
        let _n=Math.abs(this.state.nowLocal)+610;
        let n=this.state.nowLocal;
        if(_n<allwith){
            n-=610;
            this.setState({
                nowLocal:n,
                cwith:allwith
            })
        }
    }
    render() {
        return (
            <div className="panew">
                <div className="panew1">
                    <a href="javascript:void(0);">新增收付款保函</a>
                </div>
                <div className="panew2">
                    <a className="tleft" href="javascript:void(0);" onClick={this.handleft}></a>
                    <div className="addx2">
                        <ul style={{left: this.state.nowLocal,transitionDuration: 1.5 + "s",width: this.state.cwith}}>
                            {
                                this.props.pays.bhfw.map((item, index)=> {
                                    return <li key={index}><a value={item.serv} href="javascript:void(0);" onClick={this.handser}>{item.servName}</a></li>
                                })
                            }
                        </ul>
                    </div>
                    <a className="tright" href="javascript:void(0);" onClick={this.handright}></a>
                </div>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.showwin()
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}