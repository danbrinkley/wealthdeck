import React from 'react'
import './assets.css'
import { ResponsiveLine } from '@nivo/line'


const Assets = () => {

    const data = [
        {
          "id": "japan",
          "color": "hsl(264, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 205
            },
            {
              "x": "helicopter",
              "y": 228
            },
            {
              "x": "boat",
              "y": 89
            },
            {
              "x": "train",
              "y": 114
            },
            {
              "x": "subway",
              "y": 255
            },
            {
              "x": "bus",
              "y": 268
            },
            {
              "x": "car",
              "y": 131
            },
            {
              "x": "moto",
              "y": 48
            },
            {
              "x": "bicycle",
              "y": 197
            },
            {
              "x": "horse",
              "y": 50
            },
            {
              "x": "skateboard",
              "y": 269
            },
            {
              "x": "others",
              "y": 39
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(47, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 105
            },
            {
              "x": "helicopter",
              "y": 136
            },
            {
              "x": "boat",
              "y": 16
            },
            {
              "x": "train",
              "y": 284
            },
            {
              "x": "subway",
              "y": 73
            },
            {
              "x": "bus",
              "y": 284
            },
            {
              "x": "car",
              "y": 60
            },
            {
              "x": "moto",
              "y": 259
            },
            {
              "x": "bicycle",
              "y": 20
            },
            {
              "x": "horse",
              "y": 173
            },
            {
              "x": "skateboard",
              "y": 257
            },
            {
              "x": "others",
              "y": 125
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(248, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 66
            },
            {
              "x": "helicopter",
              "y": 54
            },
            {
              "x": "boat",
              "y": 193
            },
            {
              "x": "train",
              "y": 95
            },
            {
              "x": "subway",
              "y": 185
            },
            {
              "x": "bus",
              "y": 257
            },
            {
              "x": "car",
              "y": 126
            },
            {
              "x": "moto",
              "y": 111
            },
            {
              "x": "bicycle",
              "y": 291
            },
            {
              "x": "horse",
              "y": 40
            },
            {
              "x": "skateboard",
              "y": 71
            },
            {
              "x": "others",
              "y": 190
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(270, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 255
            },
            {
              "x": "helicopter",
              "y": 24
            },
            {
              "x": "boat",
              "y": 229
            },
            {
              "x": "train",
              "y": 201
            },
            {
              "x": "subway",
              "y": 166
            },
            {
              "x": "bus",
              "y": 83
            },
            {
              "x": "car",
              "y": 268
            },
            {
              "x": "moto",
              "y": 240
            },
            {
              "x": "bicycle",
              "y": 42
            },
            {
              "x": "horse",
              "y": 221
            },
            {
              "x": "skateboard",
              "y": 179
            },
            {
              "x": "others",
              "y": 2
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(190, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 158
            },
            {
              "x": "helicopter",
              "y": 275
            },
            {
              "x": "boat",
              "y": 154
            },
            {
              "x": "train",
              "y": 61
            },
            {
              "x": "subway",
              "y": 45
            },
            {
              "x": "bus",
              "y": 171
            },
            {
              "x": "car",
              "y": 260
            },
            {
              "x": "moto",
              "y": 33
            },
            {
              "x": "bicycle",
              "y": 296
            },
            {
              "x": "horse",
              "y": 191
            },
            {
              "x": "skateboard",
              "y": 129
            },
            {
              "x": "others",
              "y": 200
            }
          ]
        }
      ]

    return (
        <div className="assets-ctr">
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
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaBlendMode="darken"
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
)
        </div>
    )
}

export default Assets
