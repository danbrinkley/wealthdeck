import React from 'react'
import './performance.css'
import { ResponsiveLine } from '@nivo/line'

const Performance = () => {

    const data = [
        {
          "id": "2021",
          "color": "hsla(256, 91%, 30%, 1)",
          "data": [
            {
              "x": "Jan",
              "y": 22100
            },
            {
              "x": "Feb",
              "y": 19700
            },
            {
              "x": "Mar",
              "y": 6000
            },
            {
              "x": "Apr",
              "y": 9500
            },
            {
              "x": "May",
              "y": 29800
            },
            {
              "x": "June",
              "y": 21000
            },
            {
              "x": "Jul",
              "y": 19000
            },
            {
              "x": "Aug",
              "y": 11100
            },
            {
              "x":"Oct",
              "y": 15500
            },
            {
              "x": "Nov",
              "y": 19300
            },
          ]
        },
        {
          "id": "2020",
          "color":"blue",
          "data": [
            {
              "x": "Jan",
              "y": 17100
            },
            {
              "x": "Feb",
              "y": 18700
            },
            {
              "x": "Mar",
              "y": 9900
            },
            {
              "x": "Apr",
              "y": 11000
            },
            {
              "x": "May",
              "y": 19800
            },
            {
              "x": "June",
              "y": 18000
            },
            {
              "x": "Jul",
              "y": 17000
            },
            {
              "x": "Aug",
              "y": 10100
            },
            {
              "x":"Oct",
              "y": 12500
            },
            {
              "x": "Nov",
              "y": 15300
            },
          ]
        },
        {
          "id": "2019",
          "color": "hsla(256, 41%, 30%, 1)",
          "data": [
            {
              "x": "Jan",
              "y": 16100
            },
            {
              "x": "Feb",
              "y": 13700
            },
            {
              "x": "Mar",
              "y": 16000
            },
            {
              "x": "Apr",
              "y": 11500
            },
            {
              "x": "May",
              "y": 15800
            },
            {
              "x": "June",
              "y": 17000
            },
            {
              "x": "Jul",
              "y": 12000
            },
            {
              "x": "Aug",
              "y": 10100
            },
            {
              "x":"Oct",
              "y": 13500
            },
            {
              "x": "Nov",
              "y": 17300
            },
          ]
        },
      ]
    return (
        <div className="performance-ctr">
            <h3>Performance</h3>
            <ResponsiveLine
        data={data}
        margin={{ top: 40, right: 90, bottom: 70, left: 70 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto',  reverse: false }}
        yFormat=""
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Months',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '$ thousands',
            legendOffset: -50,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        />
    </div>
    )
}


export default Performance
