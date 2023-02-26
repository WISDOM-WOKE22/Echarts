import EChartsReact from "echarts-for-react";
import { useEffect, useRef, useState } from "react";

export default function RacingBarChart() {
  const [ chartRef, setChartRef ] = useState(null)
  const [ options, setOptions ] = useState({})
  const [ singleData, setSingleData ] = useState('')

    const data = [];
    const Data = useRef(data).current
    for (let i = 0; i < 5; ++i) {
      data.push(Math.round(Math.random() * 200));
    }
    const run = () => {
      for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 2000);
        } else {
          data[i] += Math.round(Math.random() * 200);
        } 
    }}
    // setTimeout(function () {
    //   run();
    // }, 0);
      setInterval(function () {
        setSingleData(Data[0])
        run();
      }, 3000);
    // const getOptions = () => {
      // let number
      // const handleClick = () => {
      //   number = (Math.random() * 1000)
      //   console.log(number)
      // }
      useEffect(() => {

        setOptions( {
          xAxis: {
            max: 'dataMax'
          },
          yAxis: {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E'],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 3000,
            max: 2 // only the largest 3 bars will be displayed
          },
          series: [
            {
              realtimeSort: true,
              // name: 'X',
              type: 'bar',
              data: Data,
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
          animationDurationUpdate: 300,
          animationEasing: 'linear',
          animationEasingUpdate: 'linear'
        })
        // console.log(number)
      }, [Data, singleData])
    // return option
  // }
  // useEffect(() => {
  //   if(chartRef) {
  //     chartRef.current(options)
  //   }
  // }, [Data])
  // console.log(chartRef)
    return( 
      <>
        <EChartsReact ref={setChartRef} option={options}/>
        {/* <button onClick={() => handleClick()}>Click me</button> */}
      </>
    )
}

// import React, { useEffect, useState, useRef } from 'react';
// // import echarts from 'echarts';
// import EchartsReact from 'echarts-for-react';

// const RacingBarChart = () => {
//   const [options, setOptions] = useState({});
//   // const [ Data, setData ] = useState('')

//   let data = [];
//   const Data = useRef(data).current
//   const run = () => {
//     console.log(data)
//     for (var i = 0; i < data.length; ++i) {
//       if (Math.random() > 0.9) {
//         data[i] += Math.round(Math.random() * 2000);
//       } else {
//         data[i] += Math.round(Math.random() * 200);
//       } 
//     }}
//     useEffect(() => {
//     // const data = [
//     for (let i = 0; i < 5; ++i) {
//       data.push(Math.round(Math.random() * 200));
//     }
//     //   { name: 'A', value: 10 },
//     //   { name: 'B', value: 20 },
//     //   { name: 'C', value: 30 },
//     //   { name: 'D', value: 40 },
//     //   { name: 'E', value: 50 },
//     // ];

//     // setTimeout(function () {
//     //   run();
//     // }, 0);
//     //   setInterval(function () {
//     //     run();
//     //   }, 100000);

//     // const xData = data.map((item) => item.name);
//     // const yData = data.map((item) => item.value);

//     setOptions({
//       xAxis: {
//         max: 'dataMax'
//       },
//       yAxis: {
//         type: 'category',
//         data: ['A', 'B', 'C', 'D', 'E'],
//         inverse: true,
//         animationDuration: 300,
//         animationDurationUpdate: 300,
//         max: 2 // only the largest 3 bars willdisplayed
//       },
      
//       // series: [
//       //   {
//       //     type: 'bar',
//       //     data: data,
//       //     animation: true,
//       //     animationDuration: 1000,
//       //     animationEasing: 'cubicOut',
//       //     animationDelay: function (idx) {
//       //       return idx * 10;
//       //     },
//       //   },
//       // ],
//       series: [
//                  {
//                   realtimeSort: true,
//                  name: 'X',
//                   type: 'bar',
//                   data: data,
//                   label: {
//                     show: true,
//                     position: 'right',
//                     valueAnimation: true
//                   }
//                 }
//                ],
//                legend: {
//                         show: true
//                       },
//                       animationDuration: 0,
//                       animationDurationUpdate: 3000,
//                       animationEasing: 'linear',
//                       animationEasingUpdate: 'linear'
//     });
//     // setData(data[0])
//     console.log(Data)
//   }, []);

//   return (
//     <>
//       <EchartsReact option={options} />
//       <button onClick={() => run()}>click me</button>
//     </>
//   )
// };

// export default RacingBarChart;
