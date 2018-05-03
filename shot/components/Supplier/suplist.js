/**
 * Created by Administrator on 2016/8/15.
 */
import React,{Component} from 'react';
import Suplistall from './suplistall';

import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Suplists extends Component {
    constructor(props) {
        super(props);
        this.handcbc=this.handcbc.bind(this);
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
    handcbc() {
        let re=[];
        this.state.page==1?re=this.props.rsup.gyslist:re=this.state.hhs;
        let THIS=this;
        re.map((item,index) => {
            let detlc='detlc'+index;
            THIS.refs[detlc].setState({
                iscb:false,
                zt:'',
                EnquStat:''
            })
        })
    }
    componentDidMount(){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        this.props.actions.getgyslistc(userName,token);//初始化列表
    }
    renderList(){
        let re=[];
        this.state.page==1?re=this.props.rsup.gyslist:re=this.state.hhs;
        if(re.length==0){
            return <li className="suplsone">您的供应商列表暂无记录，请添加运价供应商、服务供应商加入，方便以后询价和咨询。</li>;
        }else {
            return re.map((item, index) => {
                let detlc = 'detlc' + index;
                return <Suplistall
                    ref={detlc}
                    key={index}
                    keys={index}
                    rows={item}
                    shows={this.props.shows}
                    actions={this.props.actions}
                    rsup={this.props.rsup}
                    />
            });
        }
    }
    handleScroll(v){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        let bodyheight = document.body.clientHeight;// 获取可见区域高
        let sohe=v.deltaY;//每次滚动高
        this.state.Hes+=sohe;//每次滚动叠加
        if((bodyheight-this.state.Hes)<=(bodyheight/2)){
            this.state.page++;
            this.props.actions.getgyslistgd(userName, token, this.state.page, ...this.props.Fstate);//获取搜索条件
            this.setState({
                hhs:[
                    ...this.state.hhs,
                    ...this.props.rsup.gyslist
                ]
            });
            this.state.Hes=0;
        }
    }
    render() {
        return (
            <div className="suplist" onWheel={this.handleScroll}>
                <ul className="suplistul">
                    <li className="supl1">
                        <ul>
                            <li>姓名</li>
                            <li>公司</li>
                            <li>服务类型</li>
                            <li>口岸</li>
                            <li>手机</li>
                            <li>状态</li>
                            <li>标注</li>
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