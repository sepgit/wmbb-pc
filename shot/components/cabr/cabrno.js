/**
 * Created by Zing on 2017/5/18.
 */
import React,{Component} from 'react';
import { Radio,Input } from 'antd';
const RadioGroup = Radio.Group;

export default class Cabrno extends Component {
    constructor(props) {
        super(props);
        this.hanqryi=this.hanqryi.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            wxz:'',
            wqt:''
        }
    }
    hanqryi() {
        let yi = this.state.wxz == '其他' ? this.state.wqt : this.state.wxz;
        //不确认自己履约
        this.props.actions.getqrzjlvr(this.state.userName,this.state.token,this.props.cabRepl,2,yi,this.props.cabEnqu);
        this.props.handnoc();
    }
    render() {
        return (
            <div className="cab31">
                <div className="cab32">不确认履约理由:</div>
                <ul>
                    <li className="cab33">
                        <RadioGroup onChange={(e)=>{this.setState({wxz:e.target.value})}} value={this.state.wxz} style={{marginLeft:30,width:300}}>
                            <Radio value='没箱子'>没箱子</Radio>
                            <Radio value='没上运输工具'>没上运输工具</Radio>
                            <Radio value='其他'>
                                其他
                                {
                                    this.state.wxz=='其他'?
                                        <Input
                                            value={this.state.wqt}
                                            placeholder="其他"
                                            style={{marginLeft:10,width:200}}
                                            className="qitaly"
                                            onChange={(e)=>{return this.setState({wqt:e.target.value})}}
                                        />:null
                                }
                            </Radio>
                        </RadioGroup>
                    </li>
                    <li className="cab34">
                        <a href='javascript:void(0);' className="cab35" onClick={this.hanqryi}>确认</a>
                        <a href='javascript:void(0);' className="cab36" onClick={this.props.handnoc}>取消</a>
                    </li>
                </ul>
            </div>
        );
    }
}