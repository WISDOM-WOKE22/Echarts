
import EChartsReact from "echarts-for-react";


const options = {
    title:{
        text: 'my Line Chart',
        x: 'center'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [520, 932, 401, 904, 1290, 330, 1320,500,739,1200,300],
        type: 'line',
        areaStyle: {}
      }
    ]
  };

export default function LineChart() {
    return (
      <EChartsReact option={options}/>
    )
};