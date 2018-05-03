/**
 * Created by Zing on 2016/8/12.
 */
import React,{Component} from 'react';
import Snewlist from './snew';
import Sseach from './sseach';

export default class Smid extends Component {
    constructor(props) {
        super(props);
        this.state={
            prov:sessionStorage.getItem("SESSIONPROV")
        }
    }
    render() {
        return (
            <div className="supmid">
                    {
                        /*this.state.prov==1?
                        <Snewlist actions={this.props.actions} rsup={this.props.rsup}/>:undefined*/
                    }
                <Sseach actions={this.props.actions} rsup={this.props.rsup} shows={this.props.shows} />
            </div>
        );
    }
}