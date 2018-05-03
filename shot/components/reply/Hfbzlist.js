/**
 * Created by Zing on 2017/6/9.
 */
import React,{Component} from 'react';
import Hfbzall from './Hfbzall';
import Hfbzallk from './Hfbzallk';

export default class Hfbzlist extends Component {
    constructor(props) {
        super(props);
    }
    renderList(){
        let re=this.props.replays.bzlistf;
        return re.map((item, index) => {
            return <Hfbzall key={index}
                            keys={index}
                            rows={item}
                            respid={this.props.rows.resp}
                            actions={this.props.actions}
                            replays={this.props.replays}
            />
        });
    }
    render() {
        let re=this.props.replays.bzlistf;
        return (
            <ul className="xpah">
                {
                    this.renderList()
                }
                {
                    re.length==0?
                        <Hfbzallk respid={this.props.rows.resp}
                                  actions={this.props.actions}
                                  replays={this.props.replays}
                        />:undefined
                }
            </ul>
        );
    }
}