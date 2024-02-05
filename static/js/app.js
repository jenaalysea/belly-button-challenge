function buildCharts(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {


// step 1, get metadata from data
let samp = data.Id.filter(ID => ID.id == otuId)[0];;
// step 2, filter
let otuCount = data.otuCounts.filter(otuId => otuId.id == otuId)[0];
// step 3, get the first result from the results array
let result = otuCount.otuId_values.slice(0, 10);


 
  // Trace1 for the OTU Data
  let trace1 = {
    x: result.map(object => object.IdSearchResults),
    y: result.map(object => object.otuId),
    text: result.map(object => `${object.otuId}, ${object.IdSearchResults}`),
    textposition: 'auto',
    name: "OTU Data",
    type: "bar",
    hoverinfo: 'none',
    orientation: "h"
  };
  
  // Data array
  let plotlyData = [trace1];
  
  // Apply a title to the layout
  let layout = {
    title: "OTU Top 10",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", plotlyData, layout);
  });
}
