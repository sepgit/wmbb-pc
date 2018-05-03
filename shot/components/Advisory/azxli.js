/**
 * Created by Zing on 2016/8/10.
 */
import React,{Component} from 'react';

export default class AzxList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="add2li">
                <a href="javascript:void(0);" value={this.props.rows.serv} onClick={this.props.handadd} title={this.props.rows.servName}>
                    {this.props.rows.servName}
                </a>
            </li>
        );
    }
}
