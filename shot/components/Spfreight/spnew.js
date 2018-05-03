/**
 * Created by Zing on 2016/10/20.
 */
import React,{Component} from 'react';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import Spnewadd from './spnewadd';

export default class Spnew extends Component {
    constructor(props) {
        super(props);
        this.handnew=this.handnew.bind(this);
        this.handnewc=this.handnewc.bind(this);
        this.state={
            isnew:false
        }
    }
    handnew(){
        this.setState({
            isnew:true
        })
    }
    handnewc(){
        this.setState({
            isnew:false
        })
    }
    render() {
        return (
            <div className="adnew">
                <div className="adnew1">
                    <a href="javascript:void(0);" onClick={this.handnew}>新增优势</a>
                </div>
                <div className="adnew0">
                    注：请填写贵司的优势，已按运价优势，特种货运价优势和服务优势细分。请注意新增优势时，接收人是贵司在平台展示的联系人。铁路优势为FCL里，承运商是RAILWAY/铁路。如贵司优势在里面无法找到，或者对应的起运地，目的地，承运商无法找到。请联系客服 张先生  手机（微信）13505741577
                </div>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.isnew?<Spnewadd
                            handnewc={this.handnewc}
                            actions={this.props.actions}
                            yssp={this.props.yssp}
                            text={this.props.text}
                            />:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}