/*
 * @Author: sepgit 
 * @Date: 2018-07-03 13:21:47 
 * @Last Modified by: sepgit
 * @Last Modified time: 2018-07-18 12:53:43
 */
import React,{Component} from 'react';
import { Link } from 'react-router';
import SeekserList from './seekserList'

export default class Myserver extends Component {
    constructor(props) {
        super(props);
        this.state={
            adva:sessionStorage.getItem("SESSIONADVA"),
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            userid:sessionStorage.getItem("SESSIONUSER"),
            comp:sessionStorage.getItem("SESSIONCOMP")
        }
    }
    componentDidMount(){
        let userName = this.state.userName;
        let token = this.state.token;
        let userid = this.state.userid;
        let comp = this.state.comp;
        this.props.actions.getysusers(userName,token,userid);//获取用户详情
        // console.log('admin');
    }
    render() {
        return (
            <div className="yjysmid">
                <div className="serLists">
                    <ul className="serLists-ul">
                        <li className="serLists-li">
                            <Link activeClassName="activad" to="/service">求服务列表</Link>
                            {/* SeekserList */}
                        </li>
                        <li className="serLists-li">
                            <Link activeClassName="activad" to="/SerList">服务列表</Link>
                        </li>
                        <li className="serLists-li">
                            <Link activeClassName="activad" to="/Platformser">平台服务展示</Link>
                        </li>
                        <li className="serLists-li">
                            <Link activeClassName="activad" to="/Myserrel">我的服务发布</Link>
                        </li>
                    </ul>
                    
                    <SeekserList actions={this.props.actions}  text={this.props.text} myservernew={this.props.myservernew}/>
                </div>
            </div>
        );
    }
}