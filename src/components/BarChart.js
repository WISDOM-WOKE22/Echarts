import EChartsReact from "echarts-for-react"

export default function BarChart() {
    const options = {
        title:{
          text:'My bar chart',
          x:'center'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'bar'
        }]
      };
    return(
        <EChartsReact option={options}/>
    )
}