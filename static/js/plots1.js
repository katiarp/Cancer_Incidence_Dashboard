
d3.json("static/data/ozone_df_01.json").then((importedData) => {
    // console.log(importedData);
    var data = importedData;
  
  
    var trace1 = [{
      x: data.map(row=>row.FIPS),
      y: data.map(row=>row.O3_med_pred),
      type: 'scatter',
      mode: 'markers',
      marker: {
        color: 'rgb(0, 180, 54)',
        size: 5,
        line: {
          color: 'rgb(0, 104, 31)',
          width: 1
        }
      }
    }];
  
    var layout ={
      title : "Ozone Median Prediction (ppb)",
      xaxis: {title: 'FIPS'},
      yaxis: {title: 'Median Prediction'}
    };
  
    var config = {responsive: true};
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot1", trace1, layout, config);
  });
  
  
  
   
  