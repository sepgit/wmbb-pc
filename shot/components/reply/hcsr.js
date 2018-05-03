/**
 * Created by Zing on 2017/1/17.
 */
import React,{Component} from 'react';
import {Select,message} from 'antd';
const Option = Select.Option;

export default class Hcsr extends Component {
    constructor(props) {
        super(props);
        this.handqr=this.handqr.bind(this);
        this.handcheng=this.handcheng.bind(this);
        this.handyx=this.handyx.bind(this);
        this.handcz=this.handcz.bind(this);
        this.state={
            ccto:this.props.ccto
        }
    }
    handqr(){
        this.props.hcsrq(this.state.ccto);
        this.props.hcsrc();
    }
    handcheng(v){
        this.setState({
            ccto:v
        });
    }
    handyx(v){
        let val=v.target.getAttribute('value');
        let st=this.state.ccto;
        for(var i=0;i<st.length; i++){
            if (JSON.parse(st[i]).user == val){
                st.splice(i,1);
            }
        }
        this.setState({
            ccto:st
        });
    }
    handcz(){
        this.props.handcsrc();
        this.setState({
            ccto:[]
        })
    }
    render() {
        return (
            <div className="addsjr">
                <div className="addsjr1">
                    <span>抄送人-可多选</span>
                    <ul className="addsjrul">
                        <li><a className="addsjr2" href='javascript:void(0);' onClick={this.handqr}>确认</a></li>
                        <li><a className="addsjr3" href='javascript:void(0);' onClick={this.props.hcsrc}>X</a></li>
                    </ul>
                </div>
                <div className="addsjr4">
                    <h5>抄送人：</h5>
                    <Select
                        multiple
                        value={this.state.ccto}
                        style={{ width: 300 }}
                        className="Assjr"
                        placeholder="请选择公司同事抄送,选择后,点击右边确认键,完成操作."
                        optionFilterProp="children"
                        notFoundContent="请选完起运地目的地或无法找到"
                        onChange={this.handcheng}
                        >
                        {
                            this.props.replays.hfcctos.map((item, index)=> {
                                let strcctos = '{"user":"' + item.user + '","userAcco":"' + item.userAcco + '","name":"' + item.name + '"}';
                                if(item.user!=this.state.userid){
                                    if(item.userAcco!=this.props.admiAcco){
                                        return <Option key={strcctos} >{item.name}</Option>
                                    }else{
                                        return <Option key={strcctos} style={{display:'none'}}>{item.name}</Option>
                                    }
                                }else{
                                    return <Option key={strcctos} style={{display:'none'}}>{item.name}</Option>
                                }
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
                            this.state.ccto.map((s,index) =>
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