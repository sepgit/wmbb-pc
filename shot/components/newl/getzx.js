/**
 * Created by Zing on 2017/2/28.
 */
import React,{Component} from 'react';
import {Select} from 'antd';
import { Link } from 'react-router';
const Option = Select.Option;

export default class Getzx extends Component {
    constructor(props) {
        super(props);
        this.zxqr=this.zxqr.bind(this);
        this.zxgb=this.zxgb.bind(this);
        this.handce=this.handce.bind(this);
        this.handse=this.handse.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            ser:'',
            servName:''
        }
    }
    handce(v){
        this.setState({
            ser:v
        });
    }
    handse(v,e){
        let vary;
        vary=e.props.date.split('-');
        this.setState({
            ser:vary[0],
            servName:vary[1]
        });
    }
    zxqr(){
        this.props.handqr(this.state.ser,this.state.servName);
        this.props.linkzxc();
    }
    zxgb(){
        this.props.linkzxc();
    }
    componentDidMount(){
        this.props.actions.getzxfw(this.state.userName,this.state.token,2);//获取服务
        this.props.actions.getzxka(this.state.userName,this.state.token);//获取口岸
        this.props.actions.getzxjtfw(this.state.userName,this.state.token);//获取具体服务
        this.props.actions.getzxccto(this.state.userName,this.state.token,this.state.comp);//获取抄送人
        this.props.actions.getzxwtuo(this.state.userName,this.state.token,this.state.comp);//获取委托人
    }
    render() {
        return (
            <div className="getxp">
                <div className="getxp1">
                    <a className="getxp2" href='javascript:void(0);' onClick={this.props.linkzxc}>X</a>
                    <div className="getxp3">
                        <div className="getxp4">
                            <h4>请选择服务种类</h4>
                            <Select showSearch
                                    value={this.state.ser}
                                    style={{ width: 200 }}
                                    className="getxp4-s"
                                    optionFilterProp="children"
                                    notFoundContent="无法找到"
                                    onChange={this.handce}
                                    onSelect={this.handse}
                                >
                                {
                                    this.props.zxinfo.zxlist.map((s)=> {
                                        let sr = s.serv + '-' + s.servName;
                                        return <Option date={sr} key={s.serv}>{s.servName}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="getxp5">
                            <a className="getxp6" href='javascript:void(0);' onClick={this.zxqr}>确认</a>
                            <a className="getxp6" href='javascript:void(0);' onClick={this.zxgb}>关闭</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}