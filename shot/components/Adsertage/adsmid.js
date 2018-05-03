/**
 * Created by Zing on 2016/8/16.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';
import Adsnew from './adsnew';
import Adsseach from './Adsseach';

export default class Adsmid extends Component {
    constructor(props) {
        super(props);
        this.state={
            cont:sessionStorage.getItem("SESSIONCONT")
        }
    }
    componentDidMount(){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        let comp = sessionStorage.getItem("SESSIONCOMP");
        let userid = sessionStorage.getItem("SESSIONUSER");
        this.props.actions.getyssfw(userName,token);//获取服务优势服务
        this.props.actions.getyssfbr(userName,token,userid,comp);//获取用户列表（发布人）
        this.props.actions.getyssusers(userName,token,userid);//获取用户详情
        this.props.actions.getyssjtfww(userName,token);//获取具体服务无条件
        this.props.actions.getportsfwys(userName,token);//获取口岸
        this.props.actions.getkanfu(userName,token);//获取口岸最近
    }
    render() {
        return (
            <div className="fwysmid">
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
                        /*this.state.cont==1?
                        <Adsnew actions={this.props.actions} yssfw={this.props.yssfw} text={this.props.text}/>:undefined*/
                    }
                    <Adsseach actions={this.props.actions} yssfw={this.props.yssfw} shows={this.props.shows} text={this.props.text}/>
                </div>
            </div>
        );
    }
}