/**
 * Created by Zing on 2017/6/9.
 */
import React,{Component} from 'react';
import Hpbzall from './Hpbzall';
import Hpbzallk from './Hpbzallk';

export default class Hpbzlist extends Component {
    constructor(props) {
        super(props);
    }
    renderList(){
        let re=this.props.bck.bzlisth;
        return re.map((item, index) => {
            return <Hpbzall key={index}
                            keys={index}
                            rows={item}
                            replid={this.props.rows.repl}
                            actions={this.props.actions}
                            bck={this.props.bck}
            />
        });
    }
    render() {
        let re=this.props.bck.bzlisth;
        return (
            <ul className="xpah">
                {
                    this.renderList()
                }
                {
                    re.length==0?
                        <Hpbzallk replid={this.props.rows.repl}
                                 actions={this.props.actions}
                                 bck={this.props.bck}
                        />:undefined
                }
            </ul>
        );
    }
}