/**
 * Created by Zing on 2016/8/2.
 */
import React,{Component} from 'react';
import moment from 'moment';

export default class Xphplistbzgc extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="xppx2">
                <div className="xppx22">
                    <h5>定金金额:</h5>
                    <span>{this.props.getdetil.cabReplrs.curr=='1'?'¥' : '$'} {this.props.getdetil.cabReplrs.depo}</span>
                </div>
                <div className="xppx22">
                    <h5>开航时间:</h5>
                  {
                    this.props.getdetil.cabReplrs.sailTime?
                    <span>{moment(this.props.getdetil.cabReplrs.sailTime).format('YYYY-MM-DD HH:mm')}</span>:undefined
                  }
                </div>
                <div className="xppx22">
                    <h5>运输工具:</h5>
                    <span>{this.props.getdetil.cabReplrs.trans}</span>
                </div>
                <div className="xppx22">
                    <h5>航次:</h5>
                    <span>{this.props.getdetil.cabReplrs.voyage}</span>
                </div>
                <div className="xppx22">
                    <h5>最晚退关时间:</h5>
                  {
                    this.props.getdetil.cabReplrs.lastShutTime?
                      <span>{moment(this.props.getdetil.cabReplrs.lastShutTime).format('YYYY-MM-DD HH:mm:ss')}</span>:undefined
                  }
                </div>
            </div>
        );
    }
}