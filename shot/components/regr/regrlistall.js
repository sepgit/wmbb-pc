/**
 * Created by Zing on 2017/5/16.
 */
import React,{Component} from 'react';
import moment from 'moment';

export default class Regrlistall extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="dep5">
                <div className="dep6">
                    {this.props.rows.curr=='1'?'人民币':'美元'}
                </div>
                <div className="dep6">
                    {this.props.rows.amount}
                </div>
                <div className="dep6">
                    {this.props.rows.billNo}
                </div>
                <div className="dep6">
                    {moment(this.props.rows.creatTime).format('YYYY.MM.DD HH:mm:ss')}
                </div>
            </li>
        );
    }
}