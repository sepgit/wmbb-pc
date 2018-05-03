/**
 * Created by Zing on 2016/12/27.
 */
import React,{Component} from 'react';
import { Checkbox } from 'antd';

export default class Adplxgsr extends Component {
    constructor(props) {
        super(props);
        this.handqd=this.handqd.bind(this);
        this.handcz=this.handcz.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            bz:'',
            nbz:''
        }
    }
    handqd(){
        let userName=this.state.userName;
        let token=this.state.token;
        let cont="["+this.props.plxgdate+"]";
        let labe=this.state.bz;
        let inLabe=this.state.nbz;
        this.props.actions.putplxgsr(userName,token,cont,labe,inLabe);
        this.props.handcz();//父组件重置
        this.props.handc();
    }
    handcz(){
        this.setState({
            bz:'',
            nbz:''
        })
    }
    render() {
        return (
            <div className="adplxg">
                <div className="adplxg1">
                    <div className="adplxg2">
                        <span>批量修改</span>
                        <ul>
                            <li><a className="bntact" href='javascript:void(0);' onClick={this.handqd}>确定</a></li>
                            <li><a className="bntact" href='javascript:void(0);' onClick={this.handcz}>重置</a></li>
                            <li><a className="bntact" href='javascript:void(0);' onClick={this.props.handc}>取消</a></li>
                        </ul>
                    </div>
                    <div className="adplxg4">
                        <span>外标注</span>
                        <textarea
                            value={this.state.bz}
                            maxLength="100"
                            placeholder="外标注"
                            onChange={(e)=>{return this.setState({bz:e.target.value})}}
                            ></textarea>
                    </div>
                    {
                        this.state.comp>0?
                            <div className="adplxg4">
                                <span>内标注</span>
                            <textarea
                                value={this.state.nbz}
                                maxLength="100"
                                placeholder="内标注"
                                onChange={(e)=>{return this.setState({nbz:e.target.value})}}
                                ></textarea>
                            </div>:undefined
                    }
                </div>
            </div>
        );
    }
}