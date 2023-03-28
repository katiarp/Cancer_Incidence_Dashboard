// Initializes the page with a default plot
function init() {
    data = [{
      x: ["Stable", "Falling", "Rising"],
      y: [2048, 168, 37],
      marker:{
        color: ['rgb(128, 0, 118)', 'rgb(	116, 214, 0)', 'rgb(253, 164, 0)']
      },
      type: "bar" }];
      var layout = {  title : "Cancer Incidence",
      xaxis: {title: 'Cancer Recent Trend'},
      yaxis: {title: 'Count'}};
      var config = {responsive: true};
    Plotly.newPlot("plot_cc", data, layout, config);
  }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset1").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset1");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    var x = [];
    var y = [];
  
    if (dataset === 'dataset1') {
      x = ["Stable", "Falling", "Rising"];
      y = [2048, 168, 37];
    }
  
    else if (dataset === 'dataset2') {
      x = ["Stable", "Falling", "Rising"];
      y = [37, 37, 37];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot_cc", "x", [x]);
    Plotly.restyle("plot_cc", "y", [y]);
  }
  
  init();
  