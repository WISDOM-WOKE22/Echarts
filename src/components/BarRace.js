import EChartsReact from "echarts-for-react";
import { useState } from "react";

export default function BarRace(){
    // const [ option, setOption ] = useState({})
    var data = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}

let data1 
let data2 
let data3 
let data4 
let data5 

 data1 = Math.floor(Math.random() * 1000)
 data2 = Math.floor(Math.random() * 1000)
 data3 = Math.floor(Math.random() * 1000)
 data4 = Math.floor(Math.random() * 1000)
 data5 = Math.floor(Math.random() * 1000)

const option = {
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 2 // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data: [ +data1, +data2, +data3, +data4, +data5 ],
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};
console.log(option)
function run() {
  var data = option.series[0].data;
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
//   setOption(option);
}

setTimeout(function() {
  run();
}, 0);
setInterval(function() {
  run();
  console.log(data1, data2,data3, data4, data5)
}, 3000);
    return (
        <>
          <EChartsReact option={option}/>
        </>
    )
}