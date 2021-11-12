import React from 'react'
import './performance.css'
import { ResponsiveLine } from '@nivo/line'

const Performance = () => {

    const data = [
        {
          "id": "japan",
          "color": "hsl(194, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 271
            },
            {
              "x": "helicopter",
              "y": 197
            },
            {
              "x": "boat",
              "y": 60
            },
            {
              "x": "train",
              "y": 95
            },
            {
              "x": "subway",
              "y": 298
            },
            {
              "x": "bus",
              "y": 210
            },
            {
              "x": "car",
              "y": 19
            },
            {
              "x": "moto",
              "y": 111
            },
            {
              "x": "bicycle",
              "y": 155
            },
            {
              "x": "horse",
              "y": 193
            },
            {
              "x": "skateboard",
              "y": 108
            },
            {
              "x": "others",
              "y": 16
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(319, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 173
            },
            {
              "x": "helicopter",
              "y": 65
            },
            {
              "x": "boat",
              "y": 35
            },
            {
              "x": "train",
              "y": 193
            },
            {
              "x": "subway",
              "y": 163
            },
            {
              "x": "bus",
              "y": 74
            },
            {
              "x": "car",
              "y": 178
            },
            {
              "x": "moto",
              "y": 51
            },
            {
              "x": "bicycle",
              "y": 116
            },
            {
              "x": "horse",
              "y": 85
            },
            {
              "x": "skateboard",
              "y": 249
            },
            {
              "x": "others",
              "y": 162
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(337, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 167
            },
            {
              "x": "helicopter",
              "y": 108
            },
            {
              "x": "boat",
              "y": 25
            },
            {
              "x": "train",
              "y": 62
            },
            {
              "x": "subway",
              "y": 132
            },
            {
              "x": "bus",
              "y": 13
            },
            {
              "x": "car",
              "y": 132
            },
            {
              "x": "moto",
              "y": 93
            },
            {
              "x": "bicycle",
              "y": 237
            },
            {
              "x": "horse",
              "y": 161
            },
            {
              "x": "skateboard",
              "y": 275
            },
            {
              "x": "others",
              "y": 251
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(259, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 203
            },
            {
              "x": "helicopter",
              "y": 240
            },
            {
              "x": "boat",
              "y": 210
            },
            {
              "x": "train",
              "y": 232
            },
            {
              "x": "subway",
              "y": 224
            },
            {
              "x": "bus",
              "y": 41
            },
            {
              "x": "car",
              "y": 150
            },
            {
              "x": "moto",
              "y": 82
            },
            {
              "x": "bicycle",
              "y": 79
            },
            {
              "x": "horse",
              "y": 48
            },
            {
              "x": "skateboard",
              "y": 22
            },
            {
              "x": "others",
              "y": 171
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(210, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 260
            },
            {
              "x": "helicopter",
              "y": 183
            },
            {
              "x": "boat",
              "y": 206
            },
            {
              "x": "train",
              "y": 205
            },
            {
              "x": "subway",
              "y": 131
            },
            {
              "x": "bus",
              "y": 89
            },
            {
              "x": "car",
              "y": 260
            },
            {
              "x": "moto",
              "y": 281
            },
            {
              "x": "bicycle",
              "y": 216
            },
            {
              "x": "horse",
              "y": 129
            },
            {
              "x": "skateboard",
              "y": 274
            },
            {
              "x": "others",
              "y": 112
            }
          ]
        }
      ]
    return (
        <div className="performance-ctr">
            <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
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
