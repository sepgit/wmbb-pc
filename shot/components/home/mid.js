/**
 * Created by Zing on 2016/6/14.
 */
import React,{Component} from 'react';
import Wmlxr from './wmlxr';
import Tabwmbaidu from './wmsearch';

export default class Mid extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="homemid">
        <Tabwmbaidu actions={this.props.actions} text={this.props.text} handwm={this.handwm} handwmc={this.handwmc}/>
        <Wmlxr />
      </div>
    );
  }
}