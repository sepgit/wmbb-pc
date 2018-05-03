/**
 * Created by Zing on 2017/6/9.
 */
import React,{Component} from 'react';
import Xpbzall from './Xpbzall';
import Xpbzallk from './Xpbzallk';

export default class Xpbzlist extends Component {
    constructor(props) {
        super(props);
    }
    renderList(){
        let re=this.props.getdetil.bzlist;
        return re.map((item, index) => {
            return <Xpbzall key={index}
                            keys={index}
                            rows={item}
                            enquid={this.props.rows.enqu}
                            actions={this.props.actions}
                            getdetil={this.props.getdetil}
                            getnewlist={this.props.getnewlist}
            />
        });
    }
    render() {
        let re=this.props.getdetil.bzlist;
        return (
            <ul className="xpah">
                {
                    this.renderList()
                }
                {
                    re.length==0?
                     <Xpbzallk enquid={this.props.rows.enqu}
                        actions={this.props.actions}
                        getdetil={this.props.getdetil}
                        getnewlist={this.props.getnewlist}
                    />:undefined
                }
            </ul>
        );
    }
}