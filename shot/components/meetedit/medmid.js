/**
 * Created by Zing on 2017/4/1.
 */
import React,{Component} from 'react';
import Medlist from './medlist';
import Medlistt from './medlistt';
import Medlistz from './medlistz';
import Medyjadd from './medyjadd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Medmid extends Component {
    constructor(props) {
        super(props);
        this.handxz=this.handxz.bind(this);
        this.handc=this.handc.bind(this);
        this.state= {
            userName: sessionStorage.getItem("SESSIONUSERACC"),
            token: sessionStorage.getItem("SESSIONTOKEN"),
            isxz:0,
            xztr:false
        }
    }
    handc(){
        this.setState({
            isxz:0,
            xztr:false
        })
    }
    componentDidMount(){
        let userName=this.state.userName;
        let token=this.state.token;
        let meetChat=this.props.Aary;
        this.props.actions.getmbtxq(userName,token,meetChat);
        this.props.actions.getmbtxqz(userName,token,meetChat);
        this.props.actions.getmbtxqt(userName,token,meetChat);
    }
    renderList(){
        let re=this.props.mbdit.mbtxq;
        return re.map((item, index) => {
            return <Medlist
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                mbdit={this.props.mbdit}
                />
        })

    }
    renderListt(){
        let ret=this.props.mbdit.mbtxqt;
        return ret.map((item, index) => {
            return <Medlistt
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                mbdit={this.props.mbdit}
                />
        })

    }
    renderListz(){
        let rez=this.props.mbdit.mbtxqz;
        return rez.map((item, index) => {
            return <Medlistz
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                mbdit={this.props.mbdit}
                />
        })

    }
    handxz(e){
        let index=e.target.getAttribute('data');
        this.setState({
            isxz:index,
            xztr:true
        });
        //根据索引获取服务
        this.props.actions.getmyjfw(this.state.userName,this.state.token,index);

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
                        <span data='3' onClick={this.handxz}>新增</span>
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
                        <span data='4' onClick={this.handxz}>新增</span>
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
                        <span data='2' onClick={this.handxz}>新增</span>
                    </div>
                    <ul>
                        {
                            this.renderListz()
                        }
                    </ul>
                </div>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.xztr?
                            <Medyjadd handc={this.handc}
                                      actions={this.props.actions}
                                      text={this.props.text}
                                      isxz={this.state.isxz}
                                      Aary={this.props.Aary}
                                      mbdit={this.props.mbdit} />:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}