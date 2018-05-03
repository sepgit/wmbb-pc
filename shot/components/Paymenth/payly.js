/**
 * Created by Zing on 2016/12/5.
 */
import React,{Component} from 'react';
import { Radio,Input } from 'antd';
const RadioGroup = Radio.Group;

export default class Payly extends Component {
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
    hanqryi(){
        let guarid=this.props.paysh.bhxqh.guar;
        let yi=this.state.wxz=='其他'?this.state.wqt:this.state.wxz;
        this.props.actions.putqrlv(guarid,this.state.userName,this.state.token,2);//确认履约
        this.props.actions.putyih(guarid,this.state.userName,this.state.token,yi);//异议内容
        this.props.handyiyi(yi);
        this.props.paysh.bhxqh.certStat=2;
        this.props.handclc();
    }
    render() {
        return (
            <ul>
                <li className="payrop">
                    <RadioGroup onChange={(e)=>{this.setState({wxz:e.target.value})}} value={this.state.wxz} style={{marginLeft:20,width:150}}>
                        <Radio value='未进港未进堆场'>未进港未进堆场</Radio>
                        <Radio value='未送货'>未送货</Radio>
                        <Radio value='未还箱'>未还箱</Radio>
                        <Radio value='其他'>
                            其他
                            {
                                this.state.wxz=='其他'?
                                    <Input
                                        value={this.state.wqt}
                                        placeholder="其他"
                                        style={{width:80,marginLeft:10}}
                                        onChange={(e)=>{return this.setState({wqt:e.target.value})}}
                                        />:null
                            }
                        </Radio>
                    </RadioGroup>
                </li>
                <li>
                    <a href='javascript:void(0);' className="qrly2" onClick={this.hanqryi}>确认</a>
                    <a href='javascript:void(0);' className="qrly2" onClick={this.props.handclc}>取消</a>
                </li>
            </ul>
        );
    }
}