import React from 'react'
import { Chart } from 'react-google-charts'

const GoogleChartsContainer = props => {
  return (
    <div>
      <div className='google-chart'>
        <Chart
          chartType="BarChart"
          data={props.activityData}
          options={{
            title: "Activity Digest",
            titleTextStyle: {
              bold: true,
              fontSize: 20,
              fontName: 'Nunito'
            },
            legend: "none",
            colors: ["#66CEC8"],
            chartArea: {'left': "80"}
          }}
          graph_id="BarChart"
          width="270px"
          height="270px"
        />
      </div>
    </div>
  )
}

export default GoogleChartsContainer
