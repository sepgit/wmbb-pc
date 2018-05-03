/**
 * Created by Zing on 2016/8/22.
 */
import React,{Component} from 'react';
import Enew from './enew';
import Eseach from './eseach';

export default class Emid extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="emmid">
                <div className="emlist">
                    <Enew actions={this.props.actions} ema={this.props.ema} text={this.props.text}/>
                    <Eseach shows={this.props.shows} actions={this.props.actions} ema={this.props.ema}/>
                </div>
            </div>
        );
    }
}