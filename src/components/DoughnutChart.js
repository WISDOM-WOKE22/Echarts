import EChartsReact from "echarts-for-react"

export default function DoughnutChart() {
    const options = {
        title:{
          text: 'My Doughtnutchart',
          x: 'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)"
      },
        series: [{
          type: 'pie',
          data: [
            { name: 'Option 1', value: 15 },
            { name: 'Option 2', value: 25 },
            { name: 'Option 3', value: 20 },
            { name: 'Option 4', value: 50 }
          ],
          radius: ['50%', '70%'],
          center: ['50%', '50%'],
          label: {
            show: true,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        }]
      };
  return (
    <div>
      <EChartsReact option={options}/>
    </div>
  )
}
