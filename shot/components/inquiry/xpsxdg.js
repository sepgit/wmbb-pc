/**
 * Created by Zing on 2016/10/27.
 */
import React,{Component} from 'react';

export default class Xpsxdg extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                <li>20GP:{this.props.rows.GP20}</li>
                <li>40GP:{this.props.rows.GP40}</li>
                <li>40HQ:{this.props.rows.HQ40}</li>
            </ul>
        );
    }
}