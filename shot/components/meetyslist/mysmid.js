/**
 * Created by Zing on 2017/4/1.
 */
import React,{Component} from 'react';
import Myslist from './myslist';
import Myslistt from './myslistt';
import Myslistf from './myslistf';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Mysmid extends Component {
    constructor(props) {
        super(props);
        this.state= {
            userName: sessionStorage.getItem("SESSIONUSERACC"),
            token: sessionStorage.getItem("SESSIONTOKEN")
        }
    }
    componentDidMount(){
        let userName=this.state.userName;
        let token=this.state.token;
        let user=this.props.Aary;
        this.props.actions.getmeetys(userName,token,user);
        this.props.actions.getmeetyst(userName,token,user);
        this.props.actions.getmeetysf(userName,token,user);
    }
    renderList(){
        let re=this.props.meetysr.meetys;
        return re.map((item, index) => {
            return <Myslist
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                meetysr={this.props.meetysr}
                />
        })

    }
    renderListt(){
        let ret=this.props.meetysr.meetyst;
        return ret.map((item, index) => {
            return <Myslistt
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                meetysr={this.props.meetysr}
                />
        })

    }
    renderListf(){
        let ref=this.props.meetysr.meetysf;
        return ref.map((item, index) => {
            return <Myslistf
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                meetysr={this.props.meetysr}
                />
        })

    }
    render() {
        return (
            <div className="mxmid">
                <div className="mmexq1">
                    <h3>{this.props.Cary}</h3>
                </div>
                <div className="mmexq2">
                    <h5>{this.props.Bary}的需求详情</h5>
                    <a href="javascript:window.history.back();" >返回</a>
                </div>
                <div className="mmexq3">
                    <div className="mmexq4">
                        <h4>运价优势</h4>
                        <a href="javascript:void(0);">︾</a>
                    </div>
                    <ul>
                        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                            {
                                this.renderList()
                            }
                        </VelocityTransitionGroup>
                    </ul>
                </div>
                <div className="mmexq3">
                    <div className="mmexq4">
                        <h4>特种货运价优势</h4>
                        <a href="javascript:void(0);">︾</a>
                    </div>
                    <ul>
                        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                            {
                                this.renderListt()
                            }
                        </VelocityTransitionGroup>
                    </ul>
                </div>
                <div className="mmexq3">
                    <div className="mmexq4">
                        <h4>服务优势</h4>
                        <a href="javascript:void(0);">︾</a>
                    </div>
                    <ul>
                        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                            {
                                this.renderListf()
                            }
                        </VelocityTransitionGroup>
                    </ul>
                </div>
            </div>
        );
    }
}