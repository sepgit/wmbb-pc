/**
 * Created by Zing on 2017/4/1.
 */
import React,{Component} from 'react';

export default class Mxqlist extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <div className="mmexq5">
                    服务类型:{this.props.rows.servName}
                </div>
                <div className="mmexq5">
                    承运商:{this.props.rows.carrName}
                </div>
                <div className="mmexq5">
                    起:{this.props.rows.depaPortName}
                </div>
                <div className="mmexq5">
                    目:{this.props.rows.destPortName}
                </div>
            </li>
        );
    }
}