/**
 * Created by Zing on 2016/6/21.
 */
import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    <DockMonitor defaultIsVisible={true} toggleVisibilityKey="ctrl-alt-v"
                 changePositionKey="ctrl-alt-p">
        <LogMonitor theme='tomorrow' preserveScrollTop={false}/>
    </DockMonitor>
);

export default DevTools;
