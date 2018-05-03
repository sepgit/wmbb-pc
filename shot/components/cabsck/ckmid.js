/**
 * Created by Zing on 2017/7/21.
 */
import React,{Component} from 'react';
import Cabsckseach from './../cabsck/cabsckseach';
import { Link } from 'react-router';
import Qgclb from './../comment/qgclb';

export default class Ckmid extends Component {
    constructor(props) {
        super(props);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN")
        }
    }
    render() {
        return (
            <div className="camid">
                <Qgclb />
                <Cabsckseach actions={this.props.actions} text={this.props.text} cabsck={this.props.cabsck}/>
            </div>
        );
    }
}