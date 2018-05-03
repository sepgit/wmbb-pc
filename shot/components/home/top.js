/**
 * Created by Zing on 2016/6/14.
 */
import React,{Component} from 'react';
import Logos from './logo';
import Nav from './nav';
import Name from './name';
import Ewmcode from './ewm';

export default class Top extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    let userName = sessionStorage.getItem("SESSIONUSERACC");
    let user = sessionStorage.getItem("SESSIONUSER");
    let token = sessionStorage.getItem("SESSIONTOKEN");
    this.props.actions.getyg(user,userName,token);
    this.props.actions.getqx(user,userName,token);
    this.props.actions.gethports(userName,token);
    this.props.actions.getindus(userName,token);
    this.props.actions.getprivxp(user,userName,token);
  }

  render() {
    return (
      <div className="toper">
        <Logos />
        <Nav actions={this.props.actions} text={this.props.text}/>
        <Name actions={this.props.actions} text={this.props.text}/>
        <Ewmcode />
      </div>
    );
  }
}