/**
 * Created by Zing on 2016/6/22.
 */
import React,{Component} from 'react';
import Ltop from '../../components/login/ltop';
import Fmid from '../../components/login/fmid';
import {putwjmm,putczmm} from '../../action/login/asign';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Fogotma extends Component {
  constructor(props) {
    super(props);
    this.state={
      zh:''
    }
  }
  componentDidMount(){
    if(typeof(this.props.location.query.a) == 'undefined'){
      this.setState({
        zh:''
      })
    }else{
      this.setState({
        zh:this.props.location.query.a
      })
    }
  }
  render() {
    const { actions, login} = this.props;
    return (
      <div className="loginpage">
          <Ltop />
          <Fmid actions={actions} login={login} zh={this.state.zh} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    login:state.login
  }
}
function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators({
      putwjmm:putwjmm,
      putczmm:putczmm
    },dispatch)
  }
}
Fogotma=connect(mapStateToProps,mapDispatchToProps)(Fogotma);
module.exports = Fogotma;