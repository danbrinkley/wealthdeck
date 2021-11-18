import * as React from 'react';
import { ResponsivePie } from '@nivo/pie'
import './debtratio.css'



const DebtIncome = () => {

const pieData = [
  {
    id: "java",
    label: "java",
    value: 195,
    color: "hsl(90, 70%, 50%)"
  },
  {
    id: "erlang",
    label: "erlang",
    value: 419,
    color: "hsl(56, 70%, 50%)"
  },
];

return (
  <div className="debtincome-ctr">
    <h3>Debt-to-Income</h3>
    <ResponsivePie
      data={pieData}
      margin={{ top: 40, right: 100, bottom: 100, left: 100 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    />
  </div>
  );
};
export default DebtIncome;
