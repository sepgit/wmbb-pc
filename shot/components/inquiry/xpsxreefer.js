/**
 * Created by Zing on 2016/8/4.
 */
import React,{Component} from 'react';

export default class Xpsxreefer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="servsdetil">
                <ul>
                    <li>
                        20RF:{this.props.rows.RF20}/{this.props.rows.RF20Wate}T
                    </li>
                    <li>
                        40RF:{this.props.rows.RF40}/{this.props.rows.RF40Wate}T
                    </li>
                </ul>
            </div>
        );
    }
}