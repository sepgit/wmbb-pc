/**
 * Created by Zing on 2016/12/1.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';
import Paseachh from './paseachh';

export default class Pamidh extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName : sessionStorage.getItem("SESSIONUSERACC"),
            token : sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            userid:sessionStorage.getItem("SESSIONUSER")
        }
    }
    componentDidMount(){
        this.props.actions.getbhfwh(this.state.userName,this.state.token);//获取保函服务
        this.props.actions.getbhrh(this.state.userName,this.state.token,this.state.userid,this.state.comp);//获取付款列表付款人.
    }
    render() {
        return (
            <div className="mid">
                <div className="adchange">
                    <ul>
                        <li>
                            <Link activeClassName="activad" to="/Paymentg">收款列表</Link>
                        </li>
                        <li>
                            <Link activeClassName="activad" to="/Paymenth">付款列表</Link>
                        </li>
                        <li>
                            <Link activeClassName="activad" to="/Blacklist">黑名单列表</Link>
                        </li>
                    </ul>
                </div>
                <div className="rseachlist">
                    <Paseachh paysh={this.props.paysh} text={this.props.text} actions={this.props.actions} shows={this.props.shows} />
                </div>
            </div>
        );
    }
}