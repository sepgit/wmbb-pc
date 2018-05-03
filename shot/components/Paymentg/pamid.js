/**
 * Created by Zing on 2016/11/18.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';
import Panew from './panew';
import Paseach from './paseach';

export default class Pamid extends Component {
    constructor(props) {
        super(props);
        this.state={
             userName : sessionStorage.getItem("SESSIONUSERACC"),
             token : sessionStorage.getItem("SESSIONTOKEN"),
             comp:sessionStorage.getItem("SESSIONCOMP"),
             userid:sessionStorage.getItem("SESSIONUSER"),
             sk:sessionStorage.getItem("SESSIONCASH")
        }
    }
    componentDidMount(){
        this.props.actions.getbhfw(this.state.userName,this.state.token);//获取保函服务
        this.props.actions.getbhr(this.state.userName,this.state.token,this.state.userid,this.state.comp);//获取收款列表收款人.
    }
    render() {
        let xnew=<Panew pays={this.props.pays} text={this.props.text} actions={this.props.actions}/>;
        let xnewL;
        if(this.state.comp>0){
            if(this.props.text.user.guarPriv==1){
                if(this.state.sk==1){
                    xnewL = xnew;
                }else{
                    xnewL = undefined;
                }
            }else{
                xnewL = undefined;
            }
        }
        else{
            if(this.props.text.user.guarPriv==1){
                xnewL = xnew;
            }else{
                xnewL = undefined;
            }
        }
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
                    {/*xnewL*/}
                    <Paseach pays={this.props.pays} text={this.props.text} actions={this.props.actions} shows={this.props.shows}/>
                </div>
            </div>
        );
    }
}