import EChartsReact from "echarts-for-react";

export default function PieChart() {

    const option = {
        title : {
            text: 'Pie Chart Example',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Option 1', 'Option 2', 'Option 3']
        },
        series : [
            {
                name: 'Pie Chart',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'Option 1'},
                    {value:310, name:'Option 2'},
                    {value:234, name:'Option 3'},
                    {value:634, name:'Option 4'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    

    return(
        <EChartsReact
         option={option}
         style={{height: '300px', width: '100%'}}
        />
    )
}