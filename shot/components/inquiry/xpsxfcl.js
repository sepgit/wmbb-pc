/**
 * Created by Zing on 2016/8/4.
 */
import React,{Component} from 'react';

export default class Xpsxfcl extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                <li>20GP:{this.props.rows.GP20}</li>
                <li>40GP:{this.props.rows.GP40}</li>
                <li>40NOR:{this.props.rows.NOR40}</li>
                <li>40HQ:{this.props.rows.HQ40}</li>
                <li>45HQ:{this.props.rows.HQ45}</li>
            </ul>
        );
    }
}