/**
 * Created by Zing on 2017/2/28.
 */
import React,{Component} from 'react';
import {Select} from 'antd';
import { Link } from 'react-router';
const Option = Select.Option;

export default class Getxp extends Component {
    constructor(props) {
        super(props);
        this.xpqr=this.xpqr.bind(this);
        this.xpgb=this.xpgb.bind(this);
        this.handce=this.handce.bind(this);
        this.handse=this.handse.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            userid : sessionStorage.getItem("SESSIONUSER"),
            comp : sessionStorage.getItem("SESSIONCOMP"),
            ser:'',
            servName:'',
            servType:''
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
            servName:vary[1],
            servType:vary[2]
        });
    }
    xpqr(){
        this.props.handqr(this.state.ser,this.state.servName,this.state.servType);
        this.props.linkxpc();
    }
    xpgb(){
        this.props.linkxpc();
    }
    componentDidMount(){
        this.props.actions.getser(this.state.userName,this.state.token,1);//获取服务
        this.props.actions.getxpeo(this.state.userName,this.state.token,this.state.userid,this.state.comp);//获取询盘人列表
        this.props.actions.getports(this.state.userName,this.state.token);//获取港口
        this.props.actions.getccto(this.state.userName,this.state.token,this.state.comp);//获取抄送
        this.props.actions.getwtuo(this.state.userName,this.state.token,this.state.comp);//获取委托人
    }
    render() {
        return (
            <div className="getxp">
                 <div className="getxp1">
                     <a className="getxp2" href='javascript:void(0);' onClick={this.props.linkxpc}>X</a>
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
                                     this.props.getdetil.xser.map((s)=> {
                                         let sr = s.serv + '-' + s.servName + '-' + s.servType;
                                         return <Option date={sr} key={s.serv}>{s.servName}</Option>
                                     })
                                 }
                             </Select>
                         </div>
                         <div className="getxp5">
                             <a className="getxp6" href='javascript:void(0);' onClick={this.xpqr}>确认</a>
                             <a className="getxp6" href='javascript:void(0);' onClick={this.xpgb}>关闭</a>
                         </div>
                     </div>
                 </div>
            </div>
        );
    }
}