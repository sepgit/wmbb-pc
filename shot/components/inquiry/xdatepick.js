/**
 * Created by Zing on 2016/7/21.
 */
import { DatePicker } from 'antd';
import React,{Component} from 'react';

const DateRange = React.createClass({
    getInitialState() {
        return {
            startValue: null,
            endValue: null,
            endOpen: false
        };
    },
    disabledStartDate(startValue) {
        if (!startValue || !this.state.endValue) {
            return false;
        }
        return startValue.getTime() >= this.state.endValue.getTime();
    },
    disabledEndDate(endValue) {
        if (!endValue || !this.state.startValue) {
            return false;
        }
        return endValue.getTime() <= this.state.startValue.getTime();
    },
   onChange(field, value) {
        this.setState({
            [field]: value
        });
    },
    onStartChange(value) {
        this.onChange('startValue', value);
        this.props.onStartChange(value);
    },
    onEndChange(value) {
        this.onChange('endValue', value);
        this.props.onEndChange(value);
    },
    handleStartToggle({ open }) {
        if (!open) {
            this.setState({ endOpen: true });
        }
    },
    handleEndToggle({ open }) {
        this.setState({ endOpen: open });
    },
    render() {
        return (
            <div className="datepicks">
                <ul>
                    <li>
                        <p>询盘日期</p>
                        <DatePicker
                            disabledDate={this.disabledStartDate}
                            format="yyyy-MM-dd"
                            value={this.state.startValue}
                            placeholder="开始日期"
                            onChange={this.onStartChange}
                            toggleOpen={this.handleStartToggle}
                            style={{ width: 120 }}
                            />
                    </li>
                    <li>
                        <p>至</p>
                        <DatePicker
                            disabledDate={this.disabledEndDate}
                            format="yyyy-MM-dd"
                            value={this.state.endValue}
                            placeholder="结束日期"
                            onChange={this.onEndChange}
                            open={this.state.endOpen}
                            toggleOpen={this.handleEndToggle}
                            style={{ width: 120 }}
                            />
                    </li>
                </ul>
            </div>
        );
    }
});
export default DateRange;