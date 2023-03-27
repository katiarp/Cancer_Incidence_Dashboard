// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument



//https://storage.googleapis.com/kp-dashboard/PM15.json

// // ____________________________________________________________-

d3.json("static/data/pm_df_01.json").then((importedData) => {
  // console.log(importedData);
  var data = importedData;


  var trace1 = [{
    x: data.map(row=>row.FIPS),
    y: data.map(row=>row.PM25_med_pred),
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: 'rgb(134, 0, 215)',
      size: 5,
      line: {
        color: 'rgb(86, 0, 139)',
        width: 1
      }
    }
  }];

  var layout ={
    title : "Pollution Median Prediction",
    xaxis: {title: 'FIPS'},
    yaxis: {title: 'PM Median Pred'}
  };

  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", trace1, layout);
});



 
