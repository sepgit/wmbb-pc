/**
 * Created by Zing on 2016/8/31.
 */
import React,{Component} from 'react';
import Bseach from './../../components/backplate/bseach';
import { Link } from 'react-router';

export default class Bmid extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            userid:sessionStorage.getItem("SESSIONUSER")
        }
    }
    componentDidMount(){
        this.props.actions.gethpser(this.state.userName,this.state.token);//获取运价服务
        this.props.actions.gethpka(this.state.userName,this.state.token);//获取口岸
        this.props.actions.gethppeos(this.state.userName,this.state.token,this.state.userid,this.state.comp);//获取回盘人
        this.props.actions.gethpccto(this.state.userName,this.state.token,this.state.comp);//获取抄送人
        this.props.actions.gethpdj(this.state.userName,this.state.token);//获取登录用户的余额
    }
    render() {
        return (
            <div className="hpmid">
                <div className="adchange">
                    <ul>
                        <li>
                            <Link activeClassName="activad" to="/Inquiry">我发出的询盘及对应的回盘</Link>
                        </li>
                        <li>
                            <Link activeClassName="activad" to="/Backplate">我客人的询盘</Link>
                        </li>
                    </ul>
                </div>
                <Bseach cabnew={this.props.cabnew}
                        cabrnew={this.props.cabrnew}
                        text={this.props.text}
                        actions={this.props.actions}
                        bck={this.props.bck}
                        shows={this.props.shows}/>
            </div>
        );
    }
}