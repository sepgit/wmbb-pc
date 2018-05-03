/**
 * Created by Zing on 2017/6/9.
 */
import React,{Component} from 'react';
import {Input} from 'antd';
import moment from 'moment';

export default class Hpbzall extends Component {
    constructor(props) {
        super(props);
        this.handbz=this.handbz.bind(this);
        this.handbzc=this.handbzc.bind(this);
        this.handxj=this.handxj.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token : sessionStorage.getItem("SESSIONTOKEN"),
            userid:sessionStorage.getItem("SESSIONUSER"),
            bz:''
        }
    }
    handxj(){
        let bz=this.state.bz;
        let userName=this.state.userName;
        let token=this.state.token;
        let repl=this.props.replid;
        this.props.actions.postxjbzh(userName,token,repl,bz);
    }
    handbzc(){
        this.setState({
            bz:''
        })
    }
    handbz(e){
        this.props.rows.comm=e.target.value;
        this.setState({
            bz:e.target.value
        })
    }
    render() {
        return (
            <li>
                {
                    this.props.rows.user==this.state.userid?
                        <Input
                            value={this.props.rows.comm}
                            className="xpah1"
                            placeholder="标注"
                            onChange={this.handbz}
                            onBlur={this.handxj}
                        />:
                        <div className="xpah5">{this.props.rows.comm}</div>
                }
                {
                    this.props.rows.user == this.state.userid ?
                        <span className="xpah2" onClick={this.handbzc}>×</span>:undefined
                }
                <div className="xpah3" title={this.props.rows.name}>
                    <h5>标注人:</h5>
                    <span>{this.props.rows.name}</span>
                </div>
                <div className="xpah4">
                    <h4>{moment(this.props.rows.commTime).format('YYYY.MM.DD')}</h4>
                </div>
            </li>
        );
    }
}