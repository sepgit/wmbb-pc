/**
 * Created by Zing on 2016/1/04.
 */
import React,{Component} from 'react';

export default class Fwdel extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            comp:sessionStorage.getItem("SESSIONCOMP")
        }
    }
    handleClick(){
        //改变详情动画
        this.props.handxqc();
    }
    render() {
        return (
            <div className="addet">
                <div className="addet1">
                    <a className="close" href='javascript:void(0);' onClick={this.handleClick}>X</a>
                    <div className="addet2">
                        <div className="addet3">
                            <span>服务优势详情</span>
                        </div>
                        <div className="addet4">
                            <ul>
                                <li>
                                    <span className="addsp">服务</span>
                                    <p>{this.props.zxinfo.fwdel.servName}</p>
                                </li>
                                <li>
                                    <span className="addsp">具体服务</span>
                                    <p>{this.props.zxinfo.fwdel.servOptiName}</p>
                                </li>
                                <li>
                                    <span className="addsp">口岸</span>
                                    <p>{this.props.zxinfo.fwdel.portName}</p>
                                </li>
                                <li>
                                    <span className="addsp">状态</span>
                                    <p className="addet5">
                                        {
                                            this.props.zxinfo.fwdel.enab==1?"启用":"禁用"
                                        }
                                    </p>
                                </li>
                                <li>
                                    <span className="addsp">发布人</span>
                                    <p>{this.props.zxinfo.fwdel.creator}</p>
                                </li>
                                <li>
                                    <span className="addsp">接收人</span>
                                    <p>
                                        {
                                            this.state.comp>0?this.props.zxinfo.fwdel.user:this.props.zxinfo.fwdel.creator
                                        }
                                    </p>
                                </li>
                                <li>

                                </li>
                            </ul>
                            <div className="addet6">
                                <span className="addsp">标注</span>
                                {
                                    this.props.zxinfo.fwdel.labe
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}