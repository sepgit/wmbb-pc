/**
 * Created by Zing on 2016/8/25.
 */
import React,{Component} from 'react';
import Emlist from './emlist';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Eseach extends Component {
    constructor(props) {
        super(props);
        this.handleScroll=this.handleScroll.bind(this);
        this.handsc=this.handsc.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP"),  
            Hes:0,
            page:1,
            hhs:[]
        }
    }
    componentDidMount(){
        this.props.actions.getemcs(this.state.userName,this.state.token,this.state.comp);//初始化列表
    }
    handsc(){
        this.props.actions.getemcs(this.state.userName,this.state.token,this.state.comp);//初始化列表
    }
    renderList(){
        let re=[];
        this.state.page==1?re=this.props.ema.uerlist:re=this.state.hhs;
        if(re.length==0){
            return <li className="emls2one">您可以添加公司所有员工。</li>;
        }else {
            return re.map((item, index) => {
                return <Emlist
                    key={index}
                    keys={index}
                    rows={item}
                    shows={this.props.shows}
                    actions={this.props.actions}
                    ema={this.props.ema}
                    />
            })
        }
    }
    handleScroll(v){
        let bodyheight = document.body.clientHeight;// 获取可见区域高
        let sohe=v.deltaY;//每次滚动高
        this.state.Hes+=sohe;//每次滚动叠加
        if((bodyheight-this.state.Hes)<=(bodyheight/2)){
            this.state.page++;
            this.props.actions.getemgd( this.state.userName, this.state.token, this.state.page,this.state.comp);
            this.setState({
                hhs:[
                    ...this.state.hhs,
                    ...this.props.ema.uerlist
                ]
            });
            this.state.Hes=0;
        }
    }
    render() {
        return (
            <div className="eseach" onWheel={this.handleScroll}>
                <ul className="emls">
                    <li className="emls1">
                        <ul>
                            <li>员工账号</li>
                            <li>姓名</li>
                            <li>手机号</li>
                            <li>委托</li>
                            <li>详情</li>
                            <li>状态</li>
                            <li className="newsx">
                                <a href="javascript:void(0);" onClick={this.handsc}>
                                    刷新
                                </a>
                            </li>
                        </ul>
                    </li>
                    <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                        {
                            this.renderList()
                        }
                    </VelocityTransitionGroup>
                </ul>
            </div>
        );
    }
}