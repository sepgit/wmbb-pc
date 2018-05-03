/**
 * Created by Zing on 2017/4/1.
 */
import React,{Component} from 'react';
import {Modal,message} from 'antd';
const confirm = Modal.confirm;

export default class Medlistt extends Component {
    constructor(props) {
        super(props);
        this.handdel=this.handdel.bind(this);
        this.state= {
            userName: sessionStorage.getItem("SESSIONUSERACC"),
            token: sessionStorage.getItem("SESSIONTOKEN")
        }
    }
    handdel(){
        let This=this;
        confirm({
            title: '您是否确认要删除',
            content: '删除完不可恢复,如有问题请联系管理员',
            onOk() {
                let meetRequ=This.props.rows.meetRequ;
                This.props.actions.delmdel(This.state.userName,This.state.token,meetRequ);
            },
            onCancel() {}
        });
    }
    render() {
        return (
            <li>
                <div className="mmexq5">
                    服务:{this.props.rows.servName}
                </div>
                <div className="mmexq5">
                    口岸:{this.props.rows.portName}
                </div>
                <div className="mmexq6">
                    <a href="javascript:void(0);" onClick={this.handdel}>x</a>
                </div>
            </li>
        );
    }
}