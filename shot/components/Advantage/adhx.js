/**
 * Created by Zing on 2016/12/19.
 */
import React,{Component} from 'react';

export default class Adhx extends Component {
    constructor(props) {
        super(props);
        this.handqr=this.handqr.bind(this);
        this.handc=this.handc.bind(this);
        this.handhx=this.handhx.bind(this);
        this.handhcx=this.handhcx.bind(this);
        this.state={
            hx:'',
            hxv:'',
            iscx:false
        }
    }
    handqr(){
        if(this.props.qm){
            this.props.handqydhx(this.state.hxv,this.state.hx);
        }else{
            this.props.handmddhx(this.state.hxv,this.state.hx);
        }
        this.props.handishxc();
    }
    handc(){
        this.props.handishxc();
    }
    handhx(v){
        let vlue = v.target.getAttribute('value');
        let htm = v.target.innerHTML;
        this.setState({
            hx:htm,
            hxv:vlue,
            iscx:true
        })
    }
    handhcx(){
        this.setState({
            hx:'',
            hxv:'',
            iscx:false
        })
    }
    render() {
        return (
            <div className="adhx">
               <div className="adhx1">
                   <span>航线</span>
                   <ul>
                       {/*<li><a className="adhx2" href='javascript:void(0);' onClick={this.handqr}>确认</a></li>*/}
                       <li><a className="adhx3" href='javascript:void(0);' onClick={this.handc}>X</a></li>
                   </ul>
               </div>
               <div className="adhx4">
                    <h5>已选:</h5>
                    <span>
                        {this.state.hx}
                        {
                            this.state.iscx?<a className="adhx7" href='javascript:void(0);' onClick={this.handhcx}>x</a>:undefined
                        }
                    </span>
               </div>
               <div className="adhx5">
                   <span>全部:</span>
                   <ul>
                       {
                           this.props.ysrdu.ysline.map(s => {
                               return <li key={s.line}><a className="adhx6" value={s.line} href='javascript:void(0);' onClick={this.handqr} onMouseOver={this.handhx}>{s.lineName}</a></li>
                           })
                       }
                   </ul>
               </div>
            </div>
        );
    }
}