import React from 'react'

import Script from 'dangerous-html/react'

import './googlechartcomponent.css'

const Googlechartcomponent = (props) => {
  return (
    <div className="googlechartcomponent-container">
      <div>
        <div className="googlechartcomponent-container2">
          <Script
            html={`<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>


<style>

#chartBox{
    display:block;
    width:100%;
    height:100%;
    padding:2px;
    border:
}
</style>

<div id="chartBox">


</div>






<script>

function drawChart(barchart_data, chartBox, chartTitle) {

        // Set Data
        const data = google.visualization.arrayToDataTable(barchart_data);

        // Set Options
        const options = {
            title: chartTitle
        };

        // Draw
        const chart = new google.visualization.ColumnChart(chartBox);
        chart.draw(data, options);
    }


</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Googlechartcomponent
