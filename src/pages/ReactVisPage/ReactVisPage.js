import React from 'react'
import {
    XYPlot,
    XAxis,
    VerticalGridLines,
    Crosshair,
    LineSeries
} from 'react-vis'


import DATA from './data'

export default class ReactVisPage extends React.Component {

    state = {
        crosshairValues: [],
    }

    // For tooltips on hover
    onMouseLeave = () => this.setState({ crosshairValues: [] });
    onNearestX = (value, { index }) => {
        console.log(index)
        this.setState({
            crosshairValues: DATA.map(d => d[index].y !== null && d[index])
        });
    }

    
    
    render() {
        const width = Math.min(window.innerWidth - 60, 1000)
        const xAxisTotalTicks = 8
        
        return (
            <div>
                <h2>React vis</h2>
                <XYPlot width={width} height={500}>
                    <VerticalGridLines tickTotal={ xAxisTotalTicks } style={{ stroke: '#ccc' }} />
                    <XAxis
                        title="X Axis"
                        tickTotal={ xAxisTotalTicks }
                        tickFormat={v => `Week ${v}`}
                        style={{
                            line: { stroke: '#555' },
                            ticks: { stroke: '#555' },
                            text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600 }
                        }}
                    />
                    <LineSeries
                        className="first-series"
                        data={[{ x: 1, y: 3 }, { x: 2, y: 5 }, { x: 3, y: 15 }, { x: 4, y: 12 }]}
                        onNearestX={this.onNearestX}
                        style={{
                            strokeLinejoin: 'round',
                            strokeWidth: 2
                        }}
                        color="#fe4e1e"
                    />
                    <LineSeries
                        className="third-series"
                        curve={'curveMonotoneX'}
                        data={[{ x: 1, y: 10 }, { x: 2, y: 4 }, { x: 3, y: 2 }, { x: 4, y: 15 }]}
                        color="#d2d2d2"
                        style={{
                            strokeLinejoin: 'round',
                            strokeWidth: 2
                        }}
                    />
                    <Crosshair values={this.state.crosshairValues} />
                </XYPlot>
                <br />
                <p><strong>Notes:</strong></p>
                <ul>
                    <li><a href="https://github.com/jsergiu/testing-graph-libraries/blob/master/src/pages/ReactVisPage/ReactVisPage.js" target="_blank" rel="noopener noreferrer">Source code</a></li>
                    <li>Nice that is composable. You can create a styled yAxis component and reuse it in multiple charts;</li>
                    <li>Issue: Sometimes doesn't draw what you expect</li>
                    <li>Issue: You have to specify exact width and hight on XYPlot. Doesn't support relative values</li>
                    <li>Issue: Doesn't render x axis as expected</li>
                    <li>Works well on all browsers.</li>
                </ul>
                <br />
            </div>
        );
    }

}
