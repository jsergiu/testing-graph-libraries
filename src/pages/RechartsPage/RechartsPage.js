import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, ComposedChart, Line, XAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import data from './data'

export default class RechartsPage extends PureComponent {

    render() {
        return (
            <div>
                <h2>Recharts</h2>
                <br />
                <div style={{ width: '100%', height: 500 }}>
                    <ResponsiveContainer>
                        <ComposedChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 20, right: 20, bottom: 20, left: 20,
                            }}
                        >
                            <CartesianGrid horizontal={ false } stroke="#f5f5f5" />
                            <XAxis
                                dataKey="name"
                                minTickGap={ 20 }
                                ticksCount={ 6 }  />
                            <Tooltip cursor={{ stroke: '#ccc', strokeWidth: 1 }}  />
                            <Legend />
                            <Line type="monotone" dataKey="2018" stroke="#fe4e1e" />
                            <Line type="monotone" dataKey="2019" stroke="#d2d2d2" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
                <br />
                <p><strong>Notes:</strong></p>
                <ul>
                    <li><a href="https://github.com/jsergiu/testing-graph-libraries/blob/master/src/pages/RechartsPage/RechartsPage.js" target="_blank">Source code</a></li>
                    <li>Nice that is composable. You can create a styled yAxis component and reuse it in multiple charts;</li>
                    <li>Issue: I set ticksCount=6 but it displays more than 6 ticks;</li>
                    <li>Issue: sometimes the vertical lines in the grid and the labels are missaligned</li>
                    <li>Works well on all browsers. Minor issues on android</li>
                </ul>
                <br/>
            </div>
        );
    }
}
