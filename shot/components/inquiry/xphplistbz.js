/**
 * Created by Zing on 2016/8/2.
 */
import React,{Component} from 'react';

export default class Xphplistbz extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="xppx2">
                {this.props.rows.replMemo}
            </div>
        );
    }
}