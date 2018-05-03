/**
 * Created by Zing on 2016/6/30.
 */
import React,{Component} from 'react';
import Ltop from '../../components/login/ltop';
import Rmid from '../../components/login/rmid';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getCode,postzc,postjhyj,putjh} from '../../action/login/asign';

class Regist extends Component {
    render() {
        const {login,actions}=this.props;
        return (
            <div className="loginpage">
                <Ltop />
                <Rmid login={login} actions={actions}/>
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
            getCode:getCode,
            postzc:postzc,
            postjhyj:postjhyj,
            putjh:putjh
        },dispatch)
    }
}
Regist=connect(mapStateToProps,mapDispatchToProps)(Regist);
module.exports = Regist;
