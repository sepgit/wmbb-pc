/**
 * Created by Zing on 2016/8/31.
 */
import React,{Component} from 'react';
import moment from 'moment';

export default class Bgcdel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bdel70">
                <h4>供舱保函详情</h4>
                <ul className="bdel71">
                    <li>
                        <h5>定金金额:</h5>
                        <span>{this.props.bck.cabReplb.curr== '1' ? '¥' : '$'} {this.props.bck.cabReplb.depo}</span>
                    </li>
                    <li>
                        <h5>运输工具:</h5>
                        <span>{this.props.bck.cabReplb.trans}</span>
                    </li>
                    <li>
                        <h5>航次:</h5>
                        <span>{this.props.bck.cabReplb.voyage}</span>
                    </li>
                    <li>
                        <h5>开航时间:</h5>
                        <span>{moment(this.props.bck.cabReplb.sailTime).format('YYYY.MM.DD HH:mm')}</span>
                    </li>
                    <li>
                        <h5>最晚退关时间:</h5>
                        <span>{moment(this.props.bck.cabReplb.lastShutTime).format('YYYY.MM.DD HH:mm')}</span>
                    </li>
                    <li>
                        <h5>最晚进舱时间:</h5>
                        <span>{moment(this.props.bck.cabReplb.lastCabTime).format('YYYY.MM.DD HH:mm')}</span>
                    </li>
                </ul>
                <div className="bdel72">
                    <h5>进仓仓库地址:</h5>
                    <span>{this.props.bck.cabReplb.cabAddr}</span>
                </div>
            </div>
        );
    }
}