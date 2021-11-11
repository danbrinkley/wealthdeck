import React from 'react'
import './debt.css'
import { ResponsiveBar } from '@nivo/bar'


const Debt = () => {

    const data = [
        {
          "country": "AD",
          "hot dog": 153,
          "hot dogColor": "hsl(93, 70%, 50%)",
          "burger": 9,
          "burgerColor": "hsl(36, 70%, 50%)",
          "sandwich": 3,
          "sandwichColor": "hsl(117, 70%, 50%)",
          "kebab": 88,
          "kebabColor": "hsl(57, 70%, 50%)",
          "fries": 146,
          "friesColor": "hsl(158, 70%, 50%)",
          "donut": 117,
          "donutColor": "hsl(161, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 97,
          "hot dogColor": "hsl(327, 70%, 50%)",
          "burger": 98,
          "burgerColor": "hsl(318, 70%, 50%)",
          "sandwich": 88,
          "sandwichColor": "hsl(220, 70%, 50%)",
          "kebab": 27,
          "kebabColor": "hsl(251, 70%, 50%)",
          "fries": 90,
          "friesColor": "hsl(105, 70%, 50%)",
          "donut": 3,
          "donutColor": "hsl(253, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 173,
          "hot dogColor": "hsl(295, 70%, 50%)",
          "burger": 181,
          "burgerColor": "hsl(337, 70%, 50%)",
          "sandwich": 101,
          "sandwichColor": "hsl(99, 70%, 50%)",
          "kebab": 35,
          "kebabColor": "hsl(343, 70%, 50%)",
          "fries": 22,
          "friesColor": "hsl(271, 70%, 50%)",
          "donut": 95,
          "donutColor": "hsl(189, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 125,
          "hot dogColor": "hsl(105, 70%, 50%)",
          "burger": 65,
          "burgerColor": "hsl(88, 70%, 50%)",
          "sandwich": 67,
          "sandwichColor": "hsl(199, 70%, 50%)",
          "kebab": 40,
          "kebabColor": "hsl(6, 70%, 50%)",
          "fries": 135,
          "friesColor": "hsl(311, 70%, 50%)",
          "donut": 109,
          "donutColor": "hsl(357, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 121,
          "hot dogColor": "hsl(226, 70%, 50%)",
          "burger": 109,
          "burgerColor": "hsl(163, 70%, 50%)",
          "sandwich": 172,
          "sandwichColor": "hsl(286, 70%, 50%)",
          "kebab": 22,
          "kebabColor": "hsl(188, 70%, 50%)",
          "fries": 176,
          "friesColor": "hsl(215, 70%, 50%)",
          "donut": 195,
          "donutColor": "hsl(226, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 49,
          "hot dogColor": "hsl(175, 70%, 50%)",
          "burger": 150,
          "burgerColor": "hsl(160, 70%, 50%)",
          "sandwich": 43,
          "sandwichColor": "hsl(276, 70%, 50%)",
          "kebab": 17,
          "kebabColor": "hsl(216, 70%, 50%)",
          "fries": 191,
          "friesColor": "hsl(184, 70%, 50%)",
          "donut": 12,
          "donutColor": "hsl(154, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 174,
          "hot dogColor": "hsl(130, 70%, 50%)",
          "burger": 171,
          "burgerColor": "hsl(162, 70%, 50%)",
          "sandwich": 68,
          "sandwichColor": "hsl(186, 70%, 50%)",
          "kebab": 155,
          "kebabColor": "hsl(99, 70%, 50%)",
          "fries": 111,
          "friesColor": "hsl(108, 70%, 50%)",
          "donut": 87,
          "donutColor": "hsl(7, 70%, 50%)"
        }
      ]


    return (
        <div className="debt-ctr">
            <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor="black"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
)
        </div>
    )
}

export default Debt
