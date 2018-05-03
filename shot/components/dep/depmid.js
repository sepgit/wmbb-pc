/**
 * Created by Zing on 2017/6/2.
 */
import React,{Component} from 'react';
import Deplist from './../dep/deplist';
export default class Camid extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN")
        }
    }
    componentDidMount(){
        this.props.actions.getkyyed(this.state.userName,this.state.token);//可用余额
    }
    render() {
        return (
            <div className="depmid">
                <div className="dep1">
                    <ul>
                        <li>定金管理</li>
                        <li>CNY可用余额:{this.props.depl.residual}</li>
                        <li>USD可用余额:{this.props.depl.resiUsd}</li>
                    </ul>
                </div>
                <Deplist actions={this.props.actions} text={this.props.text} depl={this.props.depl}/>
            </div>
        );
    }
}