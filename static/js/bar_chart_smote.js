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
    Plotly.newPlot("plot_bar", data, layout, config);
  }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
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
      y = [2048, 2048, 2048];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot_bar", "x", [x]);
    Plotly.restyle("plot_bar", "y", [y]);
  }
  
  init();
  