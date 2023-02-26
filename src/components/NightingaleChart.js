import EChartsReact from "echarts-for-react"

export default function NightingaleChart() {
    const options = {
    title: {
      text: 'Nightingale Chart',
      // x:'center'
    },
    legend: {
      data: ['Data']
    },
    tooltip: {},
    angleAxis: {
      type: 'category',
      data: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E', 'Category F']
    },
    radiusAxis: {},
    polar: {},
    series: [{
      name: 'Data',
      type: 'bar',
      data: [80, 60, 50, 60, 70, 40],
      coordinateSystem: 'polar',
      stack: 'a'
    }, {
      name: 'Data',
      type: 'bar',
      data: [40, 60, 40, 60, 30, 50],
      coordinateSystem: 'polar',
      stack: 'a'
    }, {
      name: 'Data',
      type: 'bar',
      data: [40, 20, 30, 40, 50, 20],
      coordinateSystem: 'polar',
      stack: 'a'
    }]
  };
  return (
    <div>
      <EChartsReact
       option={options}
       style={{ height: '500px', width: '100%' }}
      className='nightingale-chart'
      // echarts={echarts}
       />
    </div>
  )
}
