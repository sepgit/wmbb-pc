/**
 * Created by Zing on 2016/8/30.
 */

import React,{Component} from 'react';
import {Checkbox} from 'antd';

export default class Hxxtx extends Component {
    constructor(props) {
        super(props);
        this.handqr=this.handqr.bind(this);
        this.handqx=this.handqx.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            user:sessionStorage.getItem("SESSIONUSER"),
            xxp:false,
            xxpw:false,
            xxpc:false,
            xhp:false,
            xhpw:false,
            xhpc:false,
            xzx:false,
            xzxw:false,
            xzxc:false,
            xhf:false,
            xhfw:false,
            xhfc:false,
            xzb:false
        }
    }
    handqr(){
        let nenq,nenf,nenc,nrpl,nrpf,nrpc,ncon,ncof,ncoc,nrsp,nrsf,nrsc,nawa;
        if(this.props.text.user.nenq==null||this.props.text.user.nenq=='null'||this.props.text.user.nenq==false){
            nenq=0;
        }else{
            nenq=1;
        }
        if(this.props.text.user.nenf==null||this.props.text.user.nenf=='null'||this.props.text.user.nenf==false){
            nenf=0;
        }else{
            nenf=1;
        }
        if(this.props.text.user.nenc==null||this.props.text.user.nenc=='null'||this.props.text.user.nenc==false){
            nenc=0;
        }else{
            nenc=1;
        }
        if(this.props.text.user.nrpl==null||this.props.text.user.nrpl=='null'||this.props.text.user.nrpl==false){
            nrpl=0;
        }else{
            nrpl=1;
        }
        if(this.props.text.user.nrpf==null||this.props.text.user.nrpf=='null'||this.props.text.user.nrpf==false){
            nrpf=0;
        }else{
            nrpf=1;
        }
        if(this.props.text.user.nrpc==null||this.props.text.user.nrpc=='null'||this.props.text.user.nrpc==false){
            nrpc=0;
        }else{
            nrpc=1;
        }
        if(this.props.text.user.ncon==null||this.props.text.user.ncon=='null'||this.props.text.user.ncon==false){
            ncon=0;
        }else{
            ncon=1;
        }
        if(this.props.text.user.ncof==null||this.props.text.user.ncof=='null'||this.props.text.user.ncof==false){
            ncof=0;
        }else{
            ncof=1;
        }
        if(this.props.text.user.ncoc==null||this.props.text.user.ncoc=='null'||this.props.text.user.ncoc==false){
            ncoc=0;
        }else{
            ncoc=1;
        }
        if(this.props.text.user.nrsp==null||this.props.text.user.nrsp=='null'||this.props.text.user.nrsp==false){
            nrsp=0;
        }else{
            nrsp=1;
        }
        if(this.props.text.user.nrsf==null||this.props.text.user.nrsf=='null'||this.props.text.user.nrsf==false){
            nrsf=0;
        }else{
            nrsf=1;
        }
        if(this.props.text.user.nrsc==null||this.props.text.user.nrsc=='null'||this.props.text.user.nrsc==false){
            nrsc=0;
        }else{
            nrsc=1;
        }
        if(this.props.text.user.nawa==null||this.props.text.user.nawa=='null'||this.props.text.user.nawa==false){
            nawa=0;
        }else{
            nawa=1;
        }
        let userName=this.state.userName;
        let token=this.state.token;
        let user=this.state.user;
        this.props.actions.getxxtxxg(userName,token,user,nenq,nenf,nenc,nrpl,nrpf,nrpc,ncon,ncof,ncoc,nrsp,nrsf,nrsc,nawa);
        this.props.hnandclose(false,0);
    }
    handqx(){
        this.props.hnandclose(false,0);
    }
    render() {
        let nenq,nenf,nenc,nrpl,nrpf,nrpc,ncon,ncof,ncoc,nrsp,nrsf,nrsc,nawa;
        if(this.props.text.user.nenq==null||this.props.text.user.nenq==0){
            nenq=false;
        }else{
            nenq=true;
        }
        if(this.props.text.user.nenf==null||this.props.text.user.nenf==0){
            nenf=false;
        }else{
            nenf=true;
        }
        if(this.props.text.user.nenc==null||this.props.text.user.nenc==0){
            nenc=false;
        }else{
            nenc=true;
        }
        if(this.props.text.user.nrpl==null||this.props.text.user.nrpl==0){
            nrpl=false;
        }else{
            nrpl=true;
        }
        if(this.props.text.user.nrpf==null||this.props.text.user.nrpf==0){
            nrpf=false;
        }else{
            nrpf=true;
        }
        if(this.props.text.user.nrpc==null||this.props.text.user.nrpc==0){
            nrpc=false;
        }else{
            nrpc=true;
        }
        if(this.props.text.user.ncon==null||this.props.text.user.ncon==0){
            ncon=false;
        }else{
            ncon=true;
        }
        if(this.props.text.user.ncof==null||this.props.text.user.ncof==0){
            ncof=false;
        }else{
            ncof=true;
        }
        if(this.props.text.user.ncoc==null||this.props.text.user.ncoc==0){
            ncoc=false;
        }else{
            ncoc=true;
        }
        if(this.props.text.user.nrsp==null||this.props.text.user.nrsp==0){
            nrsp=false;
        }else{
            nrsp=true;
        }
        if(this.props.text.user.nrsf==null||this.props.text.user.nrsf==0){
            nrsf=false;
        }else{
            nrsf=true;
        }
        if(this.props.text.user.nrsc==null||this.props.text.user.nrsc==0){
            nrsc=false;
        }else{
            nrsc=true;
        }
        if(this.props.text.user.nawa==null||this.props.text.user.nawa==0){
            nawa=false;
        }else{
            nawa=true;
        }
        return (
            <div className="hxxtx">
                <div className="xxtx">
                    <div className="xxtx1">
                        <h5>消息提示设置</h5>
                        <span onClick={this.handqx}>x</span>
                    </div>
                    <div className="xxtx2">
                        <ul>
                            <li>
                                <h5>新询盘</h5>
                                <Checkbox
                                    checked={nenq}
                                    onChange={(e)=>{this.setState({xxp:e.target.checked});this.props.text.user.nenq=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>新询盘(委托)</h5>
                                <Checkbox
                                    checked={nenf}
                                    onChange={(e)=>{this.setState({xxpw:e.target.checked});this.props.text.user.nenf=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>新询盘(抄送)</h5>
                                <Checkbox
                                    checked={nenc}
                                    onChange={(e)=>{this.setState({xxpc:e.target.checked});this.props.text.user.nenc=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>新回盘</h5>
                                <Checkbox
                                    checked={nrpl}
                                    onChange={(e)=>{this.setState({xhp:e.target.checked});this.props.text.user.nrpl=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>新回盘(委托)</h5>
                                <Checkbox
                                    checked={nrpf}
                                    onChange={(e)=>{this.setState({xhpw:e.target.checked});this.props.text.user.nrpf=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>新回盘(抄送)</h5>
                                <Checkbox
                                    checked={nrpc}
                                    onChange={(e)=>{this.setState({xhpc:e.target.checked});this.props.text.user.nrpc=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>新咨询</h5>
                                <Checkbox
                                    checked={ncon}
                                    onChange={(e)=>{this.setState({xzx:e.target.checked});this.props.text.user.ncon=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>新咨询(委托)</h5>
                                <Checkbox
                                    checked={ncof}
                                    onChange={(e)=>{this.setState({xzxw:e.target.checked});this.props.text.user.ncof=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>新咨询(抄送)</h5>
                                <Checkbox
                                    checked={ncoc}
                                    onChange={(e)=>{this.setState({xzxc:e.target.checked});this.props.text.user.ncoc=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>新回复</h5>
                                <Checkbox
                                    checked={nrsp}
                                    onChange={(e)=>{this.setState({xhf:e.target.checked});this.props.text.user.nrsp=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>新回复(委托)</h5>
                                <Checkbox
                                    checked={nrsf}
                                    onChange={(e)=>{this.setState({xhfw:e.target.checked});this.props.text.user.nrsf=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>新回复(抄送)</h5>
                                <Checkbox
                                    checked={nrsc}
                                    onChange={(e)=>{this.setState({xhfc:e.target.checked});this.props.text.user.nrsc=e.target.checked;}}>
                                </Checkbox>
                            </li>
                            <li>
                                <h5>中标</h5>
                                <Checkbox
                                    checked={nawa}
                                    onChange={(e)=>{this.setState({xzb:e.target.checked});this.props.text.user.nawa=e.target.checked;}}>
                                </Checkbox>
                            </li>
                        </ul>
                    </div>
                    <div className="xxtx3">
                        <a href="javascript:void(0);" onClick={this.handqr}>确认</a>
                        <a href="javascript:void(0);" onClick={this.handqx}>取消</a>
                    </div>
                </div>
            </div>
        );
    }
}