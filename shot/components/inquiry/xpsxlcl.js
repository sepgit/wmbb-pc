/**
 * Created by Zing on 2016/8/4.
 */
import React,{Component} from 'react';

export default class Xpsxlcl extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="servsdetil">
                <ul>
                    <li>
                        重量:
                        {
                            this.props.rows.wate==0?'未填写':this.props.rows.wate+'KG'
                        }
                    </li>
                    <li>
                        体积:
                        {
                            this.props.rows.bulk==0?'未填写':this.props.rows.bulk+'CBM'
                        }
                    </li>
                </ul>
            </div>
        );
    }
}