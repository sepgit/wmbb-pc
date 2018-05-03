/**
 * Created by Zing on 2017/1/11.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';
import Blseach from './blseach';

export default class Blmid extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN")
        }
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
                <Blseach actions={this.props.actions} text={this.props.text} blck={this.props.blck} />
            </div>
        );
    }
}