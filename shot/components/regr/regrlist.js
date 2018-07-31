/**
 * Created by Zing on 2016/8/25.
 */
import React,{Component} from 'react';
import Regrlistall from './regrlistall';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Regrlist extends Component {
    constructor(props) {
        super(props);
        this.handleScroll=this.handleScroll.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            Hes:0,
            page:1,
            hhs:[]
        }
    }
    componentDidMount(){
        this.props.actions.getczl(this.state.userName,this.state.token);//初始化列表
    }
    renderList(){
        let re=[];
        this.state.page==1?re=this.props.rregrl.czlist:re=this.state.hhs;
        console.log(re)
        return re.map((item, index) => {
            return <Regrlistall
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                rregrl={this.props.rregrl}
            />
        })

    }
    handleScroll(v){
        let bodyheight = document.body.clientHeight;// 获取可见区域高
        let sohe=v.deltaY;//每次滚动高
        this.state.Hes+=sohe;//每次滚动叠加
        if((bodyheight-this.state.Hes)<=(bodyheight/2)){
            this.state.page++;
            this.props.actions.getczgd( this.state.userName, this.state.token, this.state.page);
            this.setState({
                hhs:[
                    ...this.state.hhs,
                    ...this.props.rregrl.czlist
                ]
            });
            this.state.Hes=0;
        }
    }
    render() {
        return (
            <div className="dep2" onWheel={this.handleScroll}>
                <ul className="dep3">
                    <li className="dep4">
                        <div className="dep6">
                            币种
                        </div>
                        <div className="dep6">
                            充值金额
                        </div>
                        <div className="dep6">
                            发票编号
                        </div>
                        <div className="dep6">
                            充值时间
                        </div>
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