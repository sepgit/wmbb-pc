/**
 * Created by Zing on 2016/10/20.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';
import Spnew from './spnew';
import Spseach from './spseach';

export default class Spmid extends Component {
    constructor(props) {
        super(props);
        this.state={
            adva:sessionStorage.getItem("SESSIONADVA"),
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            userid:sessionStorage.getItem("SESSIONUSER")
        }
    }
    componentDidMount(){
        this.props.actions.getyspfw(this.state.userName,this.state.token);//获取服务优势服务
        this.props.actions.getyspfbr(this.state.userName,this.state.token,this.state.userid,this.state.comp);//获取用户列表（发布人）
        this.props.actions.getyspusers(this.state.userName,this.state.token,this.state.userid);//获取用户详情
        this.props.actions.getyspportsa(this.state.userName,this.state.token);//获取所有口岸
        this.props.actions.getkannoqtz(this.state.userName,this.state.token);//获取最近口岸 不带服务
    }
    render() {
        return (
            <div className="tzhmid">
                <div className="adchange">
                    <ul>
                        <li>
                            <Link activeClassName="activad" to="/Advantage">普通运价优势</Link>
                        </li>
                        <li>
                            <Link activeClassName="activad" to="/Spfreight">特种货运价优势</Link>
                        </li>
                        <li>
                            <Link activeClassName="activad" to="/Adsertage">服务优势</Link>
                        </li>
                    </ul>
                </div>
                <div className="rseachlist">
                    {
                        /*this.state.adva==1?
                            <Spnew actions={this.props.actions} yssp={this.props.yssp} text={this.props.text}/>:undefined*/
                    }
                    <Spseach actions={this.props.actions} yssp={this.props.yssp} shows={this.props.shows} text={this.props.text}/>
                </div>
            </div>
        );
    }
}