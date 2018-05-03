/**
 * Created by Zing on 2016/7/24.
 */
import React,{Component} from 'react';
import moment from 'moment';

export default class Cabscklistall extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName : sessionStorage.getItem("SESSIONUSERACC"),
            token : sessionStorage.getItem("SESSIONTOKEN")
        }
    }
    render() {
        return (
            <li className="black7">
                <div className="black8" title={this.props.rows.guar}>
                    {this.props.rows.guar}
                </div>
                <div className="black8" title={this.props.rows.userAcco}>
                    {this.props.rows.userAcco}
                </div>
                <div className="black8" title={this.props.rows.name}>
                    <span>{this.props.rows.name=='null'||this.props.rows.name==''?'':this.props.rows.name}</span>
                </div>
                <div className="black8" title={this.props.rows.compAlia}>
                    {this.props.rows.compAlia=='null'||this.props.rows.compAlia==''?'':this.props.rows.compAlia}
                </div>
                <div className="black8">
                    {this.props.rows.startTime=='null'||this.props.rows.startTime==''?'':moment(this.props.rows.startTime).format('YYYY.MM.DD')}
                </div>
                <div className="black8">
                    {this.props.rows.listType=='3'?'求舱未履约':'供舱未履约'}
                </div>
            </li>
        );
    }
}