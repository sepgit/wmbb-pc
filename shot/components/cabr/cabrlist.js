/**
 * Created by Zing on 2017/5/18.
 */
import React,{Component} from 'react';
import Cabrlistall from './cabrlistall';

import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Cabrlist extends Component {
    constructor(props) {
        super(props);
        this.handleScroll=this.handleScroll.bind(this);
        this.renderList=this.renderList.bind(this);
        this.state={
            userName : sessionStorage.getItem("SESSIONUSERACC"),
            token : sessionStorage.getItem("SESSIONTOKEN"),
            Hes:0,
            page:1,
            hhs:[]
        }
    }
    componentDidMount(){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        this.props.actions.getgclb(userName,token);//初始化列表
    }
    renderList(){
        let re=[];
        this.state.page==1?re=this.props.cabrnew.gcliL:re=this.state.hhs;
        return re.map((item, index) => {
            // console.log(item);
            return <Cabrlistall
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                cabrnew={this.props.cabrnew}
            />
        });

    }
    handleScroll(v){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        let bodyheight = document.body.clientHeight;// 获取可见区域高
        let sohe=v.deltaY;//每次滚动高
        this.state.Hes+=sohe;//每次滚动叠加
        if((bodyheight-this.state.Hes)<=(bodyheight/2)){
            this.state.page++;
            this.props.actions.getgcgd(userName, token, this.state.page, ...this.props.Fstate);//获取搜索条件
            this.setState({
                hhs:[
                    ...this.state.hhs,
                    ...this.props.cabrnew.gcliL
                ]
            });
            this.state.Hes=0;
        }
    }
    render() {
        return (
            <div className="cab7" onWheel={this.handleScroll}>
                <ul className="cab8">
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