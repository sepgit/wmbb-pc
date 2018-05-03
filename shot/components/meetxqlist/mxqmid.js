/**
 * Created by Zing on 2017/3/31.
 */
import React,{Component} from 'react';
import Mxqlist from './mxqlist';
import Mxqlistt from './mxqlistt';
import Mxqlistz from './mxqlistz';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Mqmid extends Component {
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
        let meetChat=this.props.Aary;
        this.props.actions.getmeetlxq(userName,token,meetChat);
        this.props.actions.getmeetlxqz(userName,token,meetChat);
        this.props.actions.getmeetlxqt(userName,token,meetChat);
    }
    renderList(){
        let re=this.props.meetlxq.meetxqlist;
        return re.map((item, index) => {
            return <Mxqlist
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                meetlxq={this.props.meetlxq}
                />
        })

    }
    renderListt(){
        let ret=this.props.meetlxq.meetxqlistt;
        return ret.map((item, index) => {
            return <Mxqlistt
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                meetlxq={this.props.meetlxq}
                />
        })

    }
    renderListz(){
        let rez=this.props.meetlxq.meetxqlistz;
        return rez.map((item, index) => {
            return <Mxqlistz
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                meetlxq={this.props.meetlxq}
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
                        <h4>运价需求</h4>
                        <a href="javascript:void(0);">︾</a>
                    </div>
                    <ul>
                        {
                            this.renderList()
                        }
                    </ul>
                </div>
                <div className="mmexq3">
                    <div className="mmexq4">
                        <h4>特种货运价需求</h4>
                        <a href="javascript:void(0);">︾</a>
                    </div>
                    <ul>
                        {
                            this.renderListt()
                        }
                    </ul>
                </div>
                <div className="mmexq3">
                    <div className="mmexq4">
                        <h4>服务需求</h4>
                        <a href="javascript:void(0);">︾</a>
                    </div>
                    <ul>
                        {
                            this.renderListz()
                        }
                    </ul>
                </div>
            </div>
        );
    }
}