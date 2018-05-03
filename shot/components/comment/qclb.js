/**
 * Created by Zing on 2017/4/25.
 */
import React,{Component} from 'react';
import { Link } from 'react-router';

export default class Qclb extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="gclb">
                <div className="gclb1">
                    <Link activeClassName="cwbhactc" className="cwbhactc1" to="/cab">求舱方发起求舱列表</Link>
                </div>
                <div className="gclb1">
                    <Link activeClassName="cwbhactc" className="cwbhactc1"  to="/cabg">供舱方发起求舱列表</Link>
                </div>
            </div>
        );
    }
}