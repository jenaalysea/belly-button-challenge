const bellyButtonData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(bellyButtonData).then(function(data) {
  // Sort the data in descending order based on idSearchResults
  console.log(data);
  });

  //   // Get the top ten results
  // const topTen = data.filter(topten).slice(0, 10);

  // Sort searchResults by OtuId in descending order
  let sortedById = searchResults.sort((a, b) => b.ID - a.ID);
  
  console.log(sortedById)
  let slicedData = sortedById.slice(0, 10);

  // Reverse the array to accommodate Plotly's defaults
  slicedData.reverse();
  
  // Trace1 for the OTU Data
  let trace1 = {
    x: slicedData.map(object => object.IdSearchResults),
    y: slicedData.map(object => object.OtuId),
    textposition: 'auto',
    name: "OTU Data",
    type: "bar",
    hoverinfo:'none',
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
  Plotly.newPlot("plot", data, layout);

