/**
 * Created by Zing on 2017/6/9.
 */
import React,{Component} from 'react';
import {Input} from 'antd';

export default class Xpbzallk extends Component {
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
        let enqu=this.props.enquid;
        this.props.actions.postxjbz(userName,token,enqu,bz);
    }
    handbzc(){
        this.setState({
            bz:''
        })
    }
    handbz(e){
        this.setState({
            bz:e.target.value
        })
    }
    render() {
        return (
            <li>
                <Input
                    value={this.state.bz}
                    className="xpah1"
                    placeholder="标注"
                    onChange={this.handbz}
                    onBlur={this.handxj}
                />
                <span className="xpah2" onClick={this.handbzc}>×</span>
                <div className="xpah3">
                    <h5>标注人:</h5>
                    <span></span>
                </div>
                <div className="xpah4">
                    <h4></h4>
                </div>
            </li>
        );
    }
}