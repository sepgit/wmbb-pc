/**
 * Created by Zing on 2016/6/24.
 */
import React,{Component} from 'react';
//import '../src/css/APP.css';
import '../src/css/APP.styl';

class APP extends Component {
    render() {
        return (
            <div className="Hindex">
                {this.props.children}
            </div>
        );
    }
}
module.exports = APP;