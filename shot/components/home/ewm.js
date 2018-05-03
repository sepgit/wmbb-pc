/**
 * Created by Zing on 2017/10/24.
 */
import React,{Component} from 'react';

export default class Ewmcode extends Component {
  constructor(props) {
    super(props);
    this.handewm= this.handewm.bind(this);
    this.handewmc= this.handewmc.bind(this);
    this.state={
      isewm:false
    }
  }
  handewm(){
    this.setState({
      isewm:true
    })
  }
  handewmc(){
    this.setState({
      isewm:false
    })
  }
  render() {
    return (
      <div className="ewmcode" onMouseEnter={this.handewm} onMouseLeave={this.handewmc}>
        <span className="ewmcode1">关注公众号:WMB</span>
        {
          this.state.isewm?
            <div className="ewmcode2">
              <img src={require('../../src/image/ewm.png')} className="ewmcode3"/>
            </div>:undefined
        }
      </div>
    );
  }
}