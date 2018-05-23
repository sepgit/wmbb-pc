/**
 * Created by Zing on 2016/6/22.
 */
import React,{Component} from 'react';
import Cxtop from '../../components/login/cxtop';
import Lmid from '../../components/login/lmid';
import {putlogin,postjhyj,putjh,putloginurl,getdlxp,getdlzx,getdlyj,getdlfw,getdlcw} from '../../action/login/asign';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Login extends Component {
  render() {
    const { actions, user} = this.props;
    console.log(user);
    return (
      <div className="loginpage">
        <Cxtop />
        <Lmid actions={actions} user={user} Lacco={this.props.location.query.acco} Lrkey={this.props.location.query.rkey}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user:state.login
  }
}
function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators({
      putlogin:putlogin,
      postjhyj:postjhyj,
      putjh:putjh,
      putloginurl:putloginurl,
      getdlxp:getdlxp,
      getdlzx:getdlzx,
      getdlyj:getdlyj,
      getdlfw:getdlfw,
      getdlcw:getdlcw
    },dispatch)
  }
}
Login=connect(mapStateToProps,mapDispatchToProps)(Login);
module.exports = Login;