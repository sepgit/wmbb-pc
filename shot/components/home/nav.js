/**
 * Created by Zing on 2016/6/13.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';
import Hother from './hother';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.handshow=this.handshow.bind(this);
        this.handhclose=this.handhclose.bind(this);
        this.state={
            isqt:false
        }
    }
    handshow(){
        this.setState({
            isqt:true
        });
    }
    handhclose(){
        this.setState({
            isqt:false
        })
    }
    render() {
        let prov=sessionStorage.getItem("SESSIONPROV");
        return (
            <div className="nav">
                <ul>
                    <li className="navli1"><Link activeClassName="active" to="/Home">首页</Link></li>
                    <li><Link activeClassName="active" to="/Inquiry">我的询盘/回盘</Link></li>
                    <li><Link activeClassName="active" to="/Advisory">我的咨询/回复</Link></li>
                    {
                        prov == 1 ?
                            <li className="navli2"><Link activeClassName="active" to="/Supplier">我的供应商</Link></li>:undefined
                    }
                    <li className="navli2"><Link activeClassName="active" to="/Advantage">我的优势</Link></li>
                    <li className="navli2"><Link activeClassName="active" to="/Paymentg">我的收付款</Link></li>
                    <li className="navli2"><Link activeClassName="active" to="/cabMy">我的舱位</Link></li>
                    <li className="navli2"><Link activeClassName="active" to="/tickets">我的卡券</Link></li>
                    <li className="navli2"><Link activeClassName="active" to="/service">我的服务</Link></li>
                    <li className="navli2"><Link activeClassName="active" to="/meeting">我的会议</Link></li>
                    {/*<li className="navli2"><Link activeClassName="active" to="/Showhome">物流BAIDU</Link></li>*/}
                </ul>
            </div>
        );
    }
}