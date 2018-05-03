/**
 * Created by Zing on 2017/4/25.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';
import Gclb from './gclb';
import Qclb from './qclb';

export default class Qgclb extends Component {
    constructor(props) {
        super(props);
        this.handisqc=this.handisqc.bind(this);
        this.handisqcc=this.handisqcc.bind(this);
        this.handisgc=this.handisgc.bind(this);
        this.handisgcc=this.handisgcc.bind(this);
        this.state={
            isqc:false,
            isgc:false
        }
    }
    handisqc(){
        this.setState({
            isqc:true
        })
    }
    handisqcc(){
        this.setState({
            isqc:false
        })
    }
    handisgc(){
        this.setState({
            isgc:true
        })
    }
    handisgcc(){
        this.setState({
            isgc:false
        })
    }
    render() {
        return (
            <div className="cab1">
                <ul>
                    <li onMouseEnter={this.handisqc} onMouseLeave={this.handisqcc}>
                        <Link activeClassName="cab2" className="cab2a" to="/cab">求舱列表</Link>
                        {
                            this.state.isqc?<Qclb />:undefined
                        }
                    </li>
                    <li onMouseEnter={this.handisgc} onMouseLeave={this.handisgcc}>
                        <Link activeClassName="cab2" className="cab2a" to="/cabr">供舱列表</Link>
                        {
                            this.state.isgc?<Gclb />:undefined
                        }
                    </li>
                    <li><Link activeClassName="cab2" className="cab2a" to="/cabPlatform">平台舱位展示</Link></li>
                    <li><Link activeClassName="cab2" className="cab2a" to="/cabMy">我的舱位发布</Link></li>
                    <li><Link activeClassName="cab2" className="cab2a" to="/cabsck">黑名单列表</Link></li>
                </ul>
            </div>
        );
    }
}