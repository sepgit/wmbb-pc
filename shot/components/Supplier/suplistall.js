/**
 * Created by Zing on 2016/8/15.
 */
import React,{Component} from 'react';
import Supdetil from './supdetil';
import {Modal} from 'antd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
const confirm = Modal.confirm;

export default class Suplistall extends Component {
    constructor(props) {
        super(props);
        this.handdel=this.handdel.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.handegysbz=this.handegysbz.bind(this);
        this.handcb=this.handcb.bind(this);
        this.state={
            isxxq:false,
            iscb:false,
            EnquStat:'',
            zt:'',
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN")
        }
    }
    handcb(v,c){
        this.setState({
            iscb:true,
            zt:v,
            EnquStat:c
        })
    }
    handleClick(){
        //改变详情动画
        this.props.actions.gysshow(true,this.props.keys);
        this.props.actions.getgysdet(this.state.userName,this.state.token,this.props.rows.prov);//获取供应商详情
    }
    handdel(){
        let This=this;
        confirm({
            title: '您是否确认要删除',
            content: '删除完不可恢复,需要重新添加',
            onOk() {
                This.props.actions.delgysdel(This.state.userName,This.state.token,This.props.rows.prov);//删除
                This.refs.delli.remove();
                This.props.actions.gysshow(This.props.rsup.deisshow);
            },
            onCancel() {}
        });
    }
    handegysbz(v){
        this.refs.gysbz.innerHTML=v;
    }
    render() {
        let EnquStat,zt;
        switch(this.props.rows.enab) {
            case 0:
                EnquStat = '禁用';
                zt = 'zt5';
                break;
            case 1:
                EnquStat = '启用';
                zt = 'zt1';
                break;
            default:
                EnquStat = '';
                zt = '';
                break;
        }
        return (
            <li className="supls" ref="delli">
                <div className="supl2">
                    {this.props.rows.name}
                </div>
                <div className="supl2">
                    {
                        this.props.rows.userVip==1?<img src={require('../../src/image/vip.png')}/>:undefined
                    }
                    {this.props.rows.compAliaName}
                </div>
                <div className="supl2">
                    {this.props.rows.servName}
                </div>
                <div className="supl2">
                    {this.props.rows.portName}
                </div>
                <div className="supl2">
                    {this.props.rows.mobi}
                </div>
                <div className="supl2">
                    <span className={this.state.iscb?this.state.zt:zt}>{this.state.iscb?this.state.EnquStat:EnquStat}</span>
                </div>
                <div className="supl2" ref="gysbz">
                    {this.props.rows.labe}
                </div>
                <a href="javascript:void(0);" className="supl3" onClick={this.handleClick}>》</a>
                <span className="supl4"></span>
                <a href="javascript:void(0);" className="supl5" onClick={this.handdel}></a>
                <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                    {
                        this.props.shows.text&&this.props.shows.keys==this.props.keys?
                            <Supdetil
                                shows={this.props.shows}
                                actions={this.props.actions}
                                rsup={this.props.rsup}
                                handcb={this.handcb}
                                handegysbz={this.handegysbz}
                                handdel={this.handdel}
                                /> :
                            undefined
                    }
                </VelocityTransitionGroup>
            </li>
        );
    }
}