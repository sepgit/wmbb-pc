/**
 * Created by Zing on 2016/10/26.
 */
import React,{Component} from 'react';

export default class Xpsxfr extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="servsdetil">
                <ul>
                    <li>
                        20FR:{this.props.rows.FR20}/{this.props.rows.FR20Wate}T
                    </li>
                    <li>
                        40FR:{this.props.rows.FR40}/{this.props.rows.FR40Wate}T
                    </li>
                </ul>
            </div>
        );
    }
}