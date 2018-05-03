/**
 * Created by Zing on 2017/2/28.
 */
import React,{Component} from 'react';
import Getys from './getys';
import Adnewadd from './../Advantage/adnewadd';
import Adsnewadd from './../Adsertage/adsnewadd';
import Spnewadd from './../Spfreight/spnewadd';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class NewysL extends Component {
    constructor(props) {
        super(props);
        this.handys=this.handys.bind(this);
        this.handysc=this.handysc.bind(this);
        this.linkys=this.linkys.bind(this);
        this.linkysc=this.linkysc.bind(this);
        this.handqr=this.handqr.bind(this);
        this.handnewc=this.handnewc.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            isys:false,
            lkys:false,
            isnew:false,
            newys:-1
        }
    }
    handqr(a){
        this.setState({
            newys:a,
            isnew:true
        });
    }
    handnewc(){
        this.setState({
            isnew:false
        });
    }
    linkys(){
        this.setState({
            lkys:true
        })
    }
    linkysc(){
        this.setState({
            lkys:false
        })
    }
    handys(){
        this.setState({
            isys:true
        })
    }
    handysc(){
        this.setState({
            isys:false
        })
    }
    render() {
        return (
            <div>
                <li className='newl2' onMouseEnter={this.handys} onMouseLeave={this.handysc}>
                    <h4 className='newlh4'>免费添加我的优势</h4>
                    {
                        this.state.isys?
                            <div className='newl3'>
                                <h3>完善我的优势,方便接收到询盘、咨询</h3>
                                <ul>
                                    <li>1.分类登记优势,方便整理、查询、统计优势</li>
                                    <li>2.优势中的接收人,是平台上的联系人</li>
                                    <li>3.优势将在帮帮展示厅查询显示</li>
                                    <li>4.优势可进行编辑,方便需要的人查询</li>
                                </ul>
                                <a href="javascript:void(0);" onClick={this.linkys}>立即添加我的优势</a>
                            </div>:undefined
                    }
                </li>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.lkys?<Getys actions={this.props.actions}
                                               handqr={this.handqr}
                                               linkysc={this.linkysc}/>:undefined
                    }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:600}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.newys==0&&this.state.isnew?
                            <Adnewadd
                                handnewc={this.handnewc}
                                actions={this.props.actions}
                                ysrdu={this.props.ysrdu}
                                text={this.props.text}
                                />:
                            this.state.newys==1&&this.state.isnew?
                                <Adsnewadd actions={this.props.actions}
                                   yssfw={this.props.yssfw}
                                   handnewc={this.handnewc}
                                   text={this.props.text}
                                    />
                                :
                                this.state.newys==2&&this.state.isnew?
                                    <Spnewadd
                                        handnewc={this.handnewc}
                                        actions={this.props.actions}
                                        yssp={this.props.yssp}
                                        text={this.props.text}
                                        />:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}