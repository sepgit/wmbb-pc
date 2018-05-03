/**
 * Created by Zing on 2017/1/17.
 */
import React,{Component} from 'react';
import {Select,message} from 'antd';
const Option = Select.Option;
const OptGroup = Select.OptGroup;

export default class Cys extends Component {
    constructor(props) {
        super(props);
        this.handqr=this.handqr.bind(this);
        this.handcheng=this.handcheng.bind(this);
        this.handfilts=this.handfilts.bind(this);
        this.handyx=this.handyx.bind(this);
        this.handcz=this.handcz.bind(this);
        this.state={
            carrs:this.props.carrs
        }
    }
    handfilts(inputValue,option){
        if(typeof(option.props.children)=='object'){
            let str='';
            for(let v of option.props.children) {
                str+=v;
            }
            if(str.indexOf(inputValue.toLocaleUpperCase())<0){
                return false;
            }else{
                return true;
            }
        }else{
            if(option.props.children.indexOf(inputValue.toLocaleUpperCase())<0){
                return false;
            }else{
                return true;
            }
        }
    }
    handqr(){
        this.props.hcysq(this.state.carrs);
        this.props.hcysc();
    }
    handcheng(v){
        let alls='{"carr":"0","carrName":"全部"}';
        for(let i=0;i<v.length; i++){
            if (JSON.parse(v[i]).carr == 0){
                v.splice(0,v.length,alls);
            }
        }
        this.setState({
            carrs:v
        });
    }
    handyx(v){
        let val=v.target.getAttribute('value');
        let st=this.state.carrs;
        for(let i=0;i<st.length; i++){
            if (JSON.parse(st[i]).carr == val){
                st.splice(i,1);
            }
        }
        this.setState({
            carrs:st
        });
    }
    handcz(){
        this.props.handcysc();
        this.setState({
            carrs:[]
        })
    }
    render() {
        return (
            <div className="addsjr">
                <div className="addsjr1">
                    <span>承运商-可多选</span>
                    <ul className="addsjrul">
                        <li><a className="addsjr2" href='javascript:void(0);' onClick={this.handqr}>确认</a></li>
                        <li><a className="addsjr3" href='javascript:void(0);' onClick={this.props.hcysc}>X</a></li>
                    </ul>
                </div>
                <div className="addsjr4">
                    <h5>承运商：</h5>
                    <Select
                        multiple
                        value={this.state.carrs}
                        style={{ width: 300 }}
                        className="Assjr"
                        placeholder="承运商,可多选,请选择后,点击右边确认键,完成操作."
                        filterOption={this.handfilts}
                        onChange={this.handcheng}
                        >
                        <OptGroup key='0' label="全部">
                                <Option key='0' value='{"carr":"0","carrName":"全部"}'>全部</Option>
                        </OptGroup>
                        <OptGroup key='1' label="热门">
                            {
                                this.props.getnewlist.carrscy.map((item,index)=>{
                                    let strcarrs='{"carr":"'+item.carr+'","carrName":"'+item.carrName+'"}';
                                    return <Option key={index} value={strcarrs} >{item.carrName}</Option>
                                })
                            }
                        </OptGroup>
                        <OptGroup key='2' label="所有">
                            {
                                this.props.getnewlist.carrs.map((item,index)=>{
                                    let strcarrs='{"carr":"'+item.carr+'","carrName":"'+item.carrName+'"}';
                                    return <Option key={index} value={strcarrs} >{item.carrName}</Option>
                                })
                            }
                        </OptGroup>
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
                            this.state.carrs.map((s,index) =>
                                    <li key={JSON.parse(s).carr} title={JSON.parse(s).carrName}>
                                        <span>{JSON.parse(s).carrName}</span>
                                        <a value={JSON.parse(s).carr} className="addsjr6" href='javascript:void(0);' onClick={this.handyx}>x</a>
                                    </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}