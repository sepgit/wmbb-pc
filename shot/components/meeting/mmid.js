/**
 * Created by Zing on 2017/3/22.
 */
import React,{Component} from 'react';
import Meetlist from './meetlist';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Meetmid extends Component {
    constructor(props) {
        super(props);
        this.state= {
            userName: sessionStorage.getItem("SESSIONUSERACC"),
            token: sessionStorage.getItem("SESSIONTOKEN")
        }
    }
    renderList(){
        let re=this.props.meets.meetslist;
        if(re.length==0){
            return <li className="emls2one">暂时无会议安排，请随时关注会议安排。</li>;
        }else {
            return re.map((item, index) => {
                return <Meetlist
                    key={index}
                    keys={index}
                    rows={item}
                    actions={this.props.actions}
                    meets={this.props.meets}
                    />
            })
        }
    }
    componentDidMount(){
        this.props.actions.getmeet(this.state.userName,this.state.token);//初始化列表
    }
    render() {
        return (
            <div className="meetmid">
                <div className="memid1">
                    <h2>会议列表</h2>
                </div>
                <div className="memid2">
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