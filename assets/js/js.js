$(function(){
  let chart  = document.querySelector('canvas').chart;
  Chart.defaults.global.legend.display = false;
    chart.options = {
    scales: {
      xAxes:[{
          display: false
      }],
      yAxes:[{
          display: false,
          ticks:{
            beginAtZero: true
          }
        
      }]
    }
    }
  Chart.defaults.global.tooltips.enabled = false;
  chart.update()
})
$(".random").click(function(){
  let chart  = document.querySelector('canvas').chart;
  var a = chart.data.datasets[0].data.length;
  for(i = 0; i < a; i++){
    chart.data.datasets[0].data[i] = Math.random()*100;
  }
  chart.update();
})