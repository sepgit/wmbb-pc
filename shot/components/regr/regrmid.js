/**
 * Created by Zing on 2017/6/2.
 */
import React,{Component} from 'react';
import Regrlist from './../regr/regrlist';
export default class Regrmid extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN")
        }
    }
    componentDidMount(){
        this.props.actions.getkyyec(this.state.userName,this.state.token);//可用余额
    }
    render() {
        return (
            <div className="depmid">
                <div className="dep1">
                    <ul>
                        <li>充值查询</li>
                        <li>CNY可用余额:{this.props.rregrl.residual}</li>
                        <li>USD可用余额:{this.props.rregrl.resiUsd}</li>
                    </ul>
                </div>
                <Regrlist actions={this.props.actions} text={this.props.text} rregrl={this.props.rregrl}/>
            </div>
        );
    }
}