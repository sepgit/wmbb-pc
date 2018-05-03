/**
 * Created by Zing on 2016/12/27.
 */
import React,{Component} from 'react';
import { Checkbox } from 'antd';

export default class Adplxg extends Component {
    constructor(props) {
        super(props);
        this.handqd=this.handqd.bind(this);
        this.handcz=this.handcz.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            bz:'',
            nbz:'',
            zjdc:false,
            yj:false,
            sq:false,
            cw:false
        }
    }
    handqd(){
        let userName=this.state.userName;
        let token=this.state.token;
        let advas="["+this.props.plxgdate+"]";
        let booking=this.state.zjdc?1:0;
        let freight=this.state.yj?1:0;
        let qing=this.state.sq?1:0;
        let shipSpace=this.state.cw?1:0;
        let labe=this.state.bz;
        let inLabe=this.state.nbz;
        this.props.actions.putplxg(userName,token,advas,labe,booking,freight,qing,shipSpace,inLabe);
        this.props.handcz();//父组件重置
        this.props.handc();
    }
    handcz(){
        this.setState({
            bz:'',
            nbz:'',
            zjdc:false,
            yj:false,
            sq:false,
            cw:false
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
                    <div className="adplxg3">
                        <Checkbox checked={this.state.zjdc} onChange={(e)=>{ this.setState({zjdc:e.target.checked})}}>直接订舱</Checkbox>
                        <Checkbox checked={this.state.yj} onChange={(e)=>{ this.setState({yj:e.target.checked})}}>运价</Checkbox>
                        <Checkbox checked={this.state.sq} onChange={(e)=>{ this.setState({sq:e.target.checked})}}>双清</Checkbox>
                        <Checkbox checked={this.state.cw} onChange={(e)=>{ this.setState({cw:e.target.checked})}}>舱位</Checkbox>
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