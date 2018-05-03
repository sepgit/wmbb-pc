/**
 * Created by Zing on 2017/2/28.
 */
import React,{Component} from 'react';
import Snewadd from './../Supplier/snewadd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class NewgysL extends Component {
    constructor(props) {
        super(props);
        this.handgys=this.handgys.bind(this);
        this.handgysc=this.handgysc.bind(this);
        this.handnew=this.handnew.bind(this);
        this.handnewc=this.handnewc.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            prov:sessionStorage.getItem("SESSIONPROV"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            isgys:false,
            isnew:false
        }
    }
    handgys(){
        this.setState({
            isgys:true
        })
    }
    handgysc(){
        this.setState({
            isgys:false
        })
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
        let xnew=<a href="javascript:void(0);" onClick={this.handnew}>立即添加我的供应商</a>;
        let xnew1=<span className="newlsp">您没有权限！</span>;
        let xnewL;
        if(this.state.comp>0){
            if(this.state.prov==1) {
                xnewL = xnew;
            }else{
                xnewL = xnew1;
            }
        }else{
            xnewL = xnew;
        }
        return (
            <div>
                <li className='newl2' onMouseEnter={this.handgys} onMouseLeave={this.handgysc}>
                    <h4 className='newlh4'>免费添加我的供应商</h4>
                    {
                        this.state.isgys?
                            <div className='newl3'>
                                <h3>完善我的供应商体系,方便询价咨询</h3>
                                <ul>
                                    <li>1.一次添加,永久可用</li>
                                    <li>2.一次添加、整个公司员工可用</li>
                                    <li>3.有效管理所有供应商</li>
                                    <li>4.可为所有供应商进行分类,并进行标注</li>
                                    <li>5.在询盘、咨询时,会自动匹配对应的供应商</li>
                                </ul>
                                {xnewL}
                            </div>:undefined
                    }
                </li>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
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