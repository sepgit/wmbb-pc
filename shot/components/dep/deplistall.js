/**
 * Created by Zing on 2017/5/16.
 */
import React,{Component} from 'react';
import moment from 'moment';

export default class Deplistall extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="dep5">
                <div className="dep6">
                    {this.props.rows.name}
                </div>
                <div className="dep6">
                    {this.props.rows.cabType=='1'?'求舱':this.props.rows.cabType=='2'?'供舱':this.props.rows.cabType=='3'?'充值':undefined}
                </div>
                <div className="dep6">
                    {this.props.rows.curr=='1'?'CNY':'USD'} {this.props.rows.amount}
                </div>
                <div className="dep6">
                    {moment(this.props.rows.creatTime).format('YYYY.MM.DD HH:mm:ss')}
                </div>
                <div className="dep6">
                    {this.props.rows.labe}
                </div>
                <div className="dep6">
                    {this.props.rows.cabType==1?"求舱编号:"+this.props.rows.cabEnqu:"供舱编号:"+this.props.rows.cabRepl}
                </div>
            </li>
        );
    }
}