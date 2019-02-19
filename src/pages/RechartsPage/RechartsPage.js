import React, { PureComponent } from 'react';
import {
    ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import data from './data'

export default class RechartsPage extends PureComponent {

    render() {
        return (
            <div>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <ComposedChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 20, right: 20, bottom: 20, left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="2018" stroke="#fe4e1e" />
                            <Line type="monotone" dataKey="2019" stroke="#d2d2d2" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
}
