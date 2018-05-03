/**
 * Created by Zing on 2017/1/17.
 */
import React,{Component} from 'react';
import {Select,message} from 'antd';
const Option = Select.Option;

export default class Bsjr extends Component {
    constructor(props) {
        super(props);
        this.handqr=this.handqr.bind(this);
        this.handcheng=this.handcheng.bind(this);
        this.handyx=this.handyx.bind(this);
        this.handcz=this.handcz.bind(this);
        this.state={
            sendTo:this.props.sendTo
        }
    }
    handqr(){
        this.props.hsjrq(this.state.sendTo);
        this.props.hsjrc();
    }
    handcheng(v){
        this.setState({
            sendTo:v
        });
    }
    handyx(v){
        let val=v.target.getAttribute('value');
        let st=this.state.sendTo;
        for(var i=0;i<st.length; i++){
            if (JSON.parse(st[i]).user == val){
                st.splice(i,1);
            }
        }
        this.setState({
            sendTo:st
        });
    }
    handcz(){
        this.props.handsjrc();
        this.setState({
            sendTo:[]
        })
    }
    render() {
        return (
            <div className="addsjr">
                <div className="addsjr1">
                    <span>收件人-可多选</span>
                    <ul className="addsjrul">
                        <li><a className="addsjr2" href='javascript:void(0);' onClick={this.handqr}>确认</a></li>
                        <li><a className="addsjr3" href='javascript:void(0);' onClick={this.props.hsjrc}>X</a></li>
                    </ul>
                </div>
                <div className="addsjr4">
                    <h5>供应商：</h5>
                    <Select
                        multiple
                        value={this.state.sendTo}
                        style={{ width: 300 }}
                        placeholder="收件人为已录入供应商,选择后,点右边确认键,完成操作."
                        optionFilterProp="children"
                        className="Assjr"
                        notFoundContent="请选完起运地目的地或无法找到"
                        onChange={this.handcheng}
                        >
                        {
                            this.props.bck.hpprovs.map((item,index)=>{
                                let labe=item.compAliaName+'-'+item.name+'-'+item.labe;
                                let strprovs='{"user":"'+item.cont+'","userAcco":"'+item.userAcco+'","name":"'+labe+'"}';
                                return <Option key={strprovs} >{labe}</Option>
                            })
                        }
                    </Select>
                    <div className="sjrqrcz">
                        <a className="sjrqrcz1" href='javascript:void(0);'>√</a>
                        <a className="sjrqrcz2" href='javascript:void(0);' onClick={this.handcz}>×</a>
                    </div>
                </div>
                <div className="addsjr5">
                    <h5>已选：</h5>
                    <ul>
                        {
                            this.state.sendTo.map((s,index)=>
                                    <li key={JSON.parse(s).user} title={JSON.parse(s).name}>
                                        <span>{JSON.parse(s).name}</span>
                                        <a value={JSON.parse(s).user} className="addsjr6" href='javascript:void(0);' onClick={this.handyx}>x</a>
                                    </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}