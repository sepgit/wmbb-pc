/**
 * Created by Zing on 2017/4/1.
 */
import React,{Component} from 'react';

export default class Myslistt extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <div className="mmexq5">
                    服务:{this.props.rows.servName}
                </div>
                <div className="mmexq5">
                    口岸:{this.props.rows.depaPortName}
                </div>
            </li>
        );
    }
}