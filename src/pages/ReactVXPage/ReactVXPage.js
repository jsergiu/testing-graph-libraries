import React, { PureComponent } from 'react';
import { Group } from '@vx/group';
import { LinePath } from '@vx/shape';
import { curveMonotoneX } from '@vx/curve';
import { genDateValue } from '@vx/mock-data';
import { scaleTime, scaleLinear } from '@vx/scale';
import { extent, max } from 'd3-array';


export default class ReactVXPage extends PureComponent {
    genLines(num) {
        return new Array(num).fill(1).map(() => {
            return genDateValue(25);
        });
    }

    render() {
        const series = this.genLines(2);
        const data = series.reduce((rec, d) => {
            return rec.concat(d);
        }, []);
        const width = Math.min(window.innerWidth - 60, 1000)
        const height = 500

        // accessors
        const x = d => d.date;
        const y = d => d.value;

        // bounds
        const xMax = width;
        const yMax = height / 8;

        // scales
        const xScale = scaleTime({
            range: [0, xMax],
            domain: extent(data, x)
        });
        const yScale = scaleLinear({
            range: [yMax, 0],
            domain: [0, max(data, y)]
        });

        return (
            <div>
                <h2>React VX</h2>
                <svg width={width} height={height} >
                    {xMax > 8 &&
                        series.map((d, i) => {
                            return (
                                <Group key={`lines-${i}`} top={i * yMax / 2}>
                                    <LinePath
                                        data={d}
                                        x={d => xScale(x(d))}
                                        y={d => yScale(y(d))}
                                        stroke={'#fe4e1e'}
                                        strokeWidth={1}
                                        curve={i % 2 === 0 ? curveMonotoneX : undefined}
                                    />
                                </Group>
                            );
                        })}
                </svg >

                  <br />
                <p><strong>Notes:</strong></p>
                <ul>
                    <li><a href="https://github.com/jsergiu/testing-graph-libraries/blob/master/src/pages/ReactVXPage/ReactVXPage.js" target="_blank" rel="noopener noreferrer">Source code</a></li>
                    <li>Issue: Still in BETA!</li>
                    <li>Issue: Doesn't support interactions</li>
                    <li>Issue: Github project not very active. It's only one guy developing the project</li>
                    <li>Issue: Incomplete documentation</li>
                </ul>
                <br />
            </div>
        );

    }
}