/**
 * Created by Zing on 2016/8/29.
 */

import React,{Component} from 'react';
import Navtwo from './Navtwo';
import { Link } from 'react-router';

export default class Hinfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="uinfo">
                <li><a href="javascript:void(0);" onClick={this.props.handgr}>个人信息</a></li>
                {
                  this.props.text.user.comp>0?
                    <li><a href="javascript:void(0);" onClick={this.props.handgs}>公司信息</a></li>:
                    <li><a href="javascript:void(0);" onClick={this.props.handgs}>升级为公司</a></li>
                }
                <li><a href="javascript:void(0);" onClick={this.props.handxx}>消息设置</a></li>
                <li><a href="javascript:void(0);" onClick={this.props.handmm}>修改密码</a></li>
                {
                    this.props.text.user.comp==0||this.props.text.user.comp==undefined?undefined:
                     this.props.text.priv.admi!=0?<Navtwo actions={this.props.actions} usercomps={this.props.text.user.comp} />:
                     undefined
                }
                <li><Link to="/dep">定金列表</Link></li>
                {
                    this.props.text.user.comp>0?
                        this.props.text.priv.admi!=0?<li><Link to="/regr">充值查询</Link></li>:undefined
                        :<li><Link to="/regr">充值查询</Link></li>
                }
                <li><a href="javascript:void(0);" onClick={this.props.handtc}>退出登录</a></li>
            </ul>
        );
    }
}