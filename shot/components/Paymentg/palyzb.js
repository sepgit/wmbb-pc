/**
 * Created by Zing on 2016/1/13.
 */
import React,{Component} from 'react';
import { Radio,Input } from 'antd';
const RadioGroup = Radio.Group;

export default class Paylyzb extends Component {
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
    componentDidMount(){
        let zb='';
        switch(this.props.lvzb){
            case '货物上运输工具':
                zb='货物上运输工具';
                this.setState({
                    wxz:zb
                });
                break;
            case '货物进仓':
                zb='货物进仓';
                this.setState({
                    wxz:zb
                });
                break;
            case '货物进港':
                zb='货物进港';
                this.setState({
                    wxz:zb
                });
                break;
            default:
                zb=this.props.lvzb;
                this.setState({
                    wxz:'其他',
                    wqt:zb
                });
                break;
        }

    }
    hanqryi(){
        let yi=this.state.wxz=='其他'?this.state.wqt:this.state.wxz;
        this.props.handlvzb(yi);
        this.props.handzbc();
    }
    render() {
        return (
            <ul className="paylvzb">
                <li className="paylvzb1">
                    <RadioGroup onChange={(e)=>{this.setState({wxz:e.target.value})}} value={this.state.wxz} style={{marginLeft:20,width:150}}>
                        <Radio value='货物上运输工具'>货物上运输工具</Radio>
                        <Radio value='货物进仓'>货物进仓</Radio>
                        <Radio value='货物进港'>货物进港</Radio>
                        <Radio value='其他'>
                            其他
                            {
                                this.state.wxz=='其他'?
                                    <Input
                                        value={this.state.wqt}
                                        placeholder="其他"
                                        className="qitaly"
                                        onChange={(e)=>{return this.setState({wqt:e.target.value})}}
                                        />:null
                            }
                        </Radio>
                    </RadioGroup>
                </li>
                <li className="paylvzb2">
                    <a href='javascript:void(0);' className="qrly2" onClick={this.hanqryi}>确认</a>
                    <a href='javascript:void(0);' className="qrly2" onClick={this.props.handzbc}>取消</a>
                </li>
            </ul>
        );
    }
}