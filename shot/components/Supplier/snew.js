/**
 * Created by Zing on 2016/8/15.
 */
import React,{Component} from 'react';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import Snewadd from './snewadd';

export default class Snewlist extends Component {
    constructor(props) {
        super(props);
        this.handnew=this.handnew.bind(this);
        this.handnewc=this.handnewc.bind(this);
        this.state={
            isnew:false
        }
    }
    handnew(){
        this.setState({
            isnew:true
        });
    }
    handnewc(v){
        this.setState({
            isnew:v
        })
    }
    render() {
        return (
            <div className="supp">
                <div className="supp1">
                    <a href="javascript:void(0);" onClick={this.handnew}>新&nbsp;&nbsp;&nbsp;增供应商</a>
                </div>
                <div className="supp2">
                    注：点击”新增供应商”，请录入供应商帐号，并按服务类别进行登记、标注。方便所有公司员工询盘、咨询时查看并选择。
                </div>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.isnew?<Snewadd
                            ref='Nadd'
                            handnewc={this.handnewc}
                            actions={this.props.actions}
                            rsup={this.props.rsup}
                            />:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}