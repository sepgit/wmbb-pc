/**
 * Created by Zing on 2016/6/13.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';

export default class Navtwo extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP")
        }
    }
    componentDidMount(){
        this.props.actions.gethcomps(this.state.userName,this.state.token,this.state.comp);//获取企业信息
    }
    render() {
        return (
            <div>
                <li><Link to="/Employee">员工管理</Link></li>
            </div>
        );
    }
}