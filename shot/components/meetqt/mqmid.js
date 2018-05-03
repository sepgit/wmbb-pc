/**
 * Created by Zing on 2017/3/22.
 */
import React,{Component} from 'react';
import Mqlist from './mqlist';
import moment from 'moment';
import { Link } from 'react-router';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Mqmid extends Component {
    constructor(props) {
        super(props);
    }
    renderList(){
        let re=this.props.meetq.meetqtlist;
        return re.map((item, index) => {
            return <Mqlist
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                meetq={this.props.meetq}
                meetid={this.props.metary.meet}
                meetnames={this.props.metary.name}
                />
        })

    }
    render() {
        return (
            <div className="mqmid">
                <div className="mmetqt1">
                    <h3>{this.props.metary.name}</h3>
                    <span>{moment(this.props.metary.tifr).format('YYYY.MM.DD HH:mm')} ~ {moment(this.props.metary.tito).format('HH:mm')}</span>
                </div>
                <div className="mmetqt2">
                    <h5>{this.props.metary.addr}</h5>
                    <Link to="/meeting" >返回</Link>
                </div>
                <div className="mmetqt3">
                    <ul>
                        <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                            {
                                this.renderList()
                            }
                        </VelocityTransitionGroup>
                    </ul>
                </div>
            </div>
        );
    }
}