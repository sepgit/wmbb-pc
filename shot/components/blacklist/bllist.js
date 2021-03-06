/**
 * Created by Zing on 2016/1/11.
 */
import React,{Component} from 'react';
import Bllistall from './bllistall';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Bllist extends Component {
    constructor(props) {
        super(props);
        this.handleScroll=this.handleScroll.bind(this);
        this.state={
            userName : sessionStorage.getItem("SESSIONUSERACC"),
            token : sessionStorage.getItem("SESSIONTOKEN"),
            Hes:0,
            page:1,
            hhs:[]
        }
    }
    componentDidMount(){
        this.props.actions.getbll(this.state.userName,this.state.token);//初始化
    }
    renderList(re){
        return re.map((item,index) => {
            return <Bllistall
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                blck={this.props.blck}
                />
        })
    }
    handleScroll(v){
        let bodyheight = document.body.clientHeight;// 获取可见区域高
        let sohe=v.deltaY;//每次滚动高
        this.state.Hes+=sohe;//每次滚动叠加
        if((bodyheight-this.state.Hes)<=(bodyheight/2)){
            this.state.page++;
            this.props.actions.getbllg( this.state.userName, this.state.token, this.state.page, ...this.props.Fstate);//获取搜索条件
            this.setState({
                hhs:[
                    ...this.state.hhs,
                    ...this.props.blck.bll
                ]
            });
            this.state.Hes=0;
        }
    }
    render() {
        let re=[];
        this.state.page==1?re=this.props.blck.bll:re=this.state.hhs;
        return (
            <div className="black4" onWheel={this.handleScroll}>
                <ul className="black5">
                    <li className="black6">
                        <ul>
                            <li>保函号</li>
                            <li>用户账号</li>
                            <li>姓名</li>
                            <li>公司简称</li>
                            <li>公布时间</li>
                            <li>类型</li>
                        </ul>
                    </li>
                    <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                        {
                            this.renderList(re)
                        }
                    </VelocityTransitionGroup>
                </ul>
            </div>
        );
    }
}