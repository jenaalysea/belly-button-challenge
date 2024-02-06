function buildCharts(sample) {
  // Grab a reference to the dropdown select "ID" from the sample data

d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {

    // Get metadata description for the selected sample
    var metadata = data.metadata.find(entry => entry.id == sample);
    // Get sample data numbers for the selected sample
    var otuCounts = data.samples.find(entry => entry.id == sample);
    // Get the first 10 results from the sorted otu_values array
    var result = otuCounts.otu_values.slice(0, 10);

    //*********************************create bar chart*************************************************
    
    // Create trace for the bar chart
    var trace1 = {
      x: result,
      y: otuCounts.otu_ids.slice(0, 10).map(id => `OTU ${id}`),
      type: "bar",
      orientation: "h"
    };
    // Data array for the bar chart
    var barData = [trace1];
    // Layout for the bar chart
    var barLayout = {
      title: "Top 10 OTU Cultures",
      xaxis: { title: "OTU Count" },
      yaxis: { title: "OTU ID" }
    };

    // Render the bar chart to the div tag with id "bar"
    Plotly.newPlot("bar", barData, barLayout);

    //*********************************create bubble chart*************************************************

    // Create trace for the bubble chart
    var bubbleTrace = {
      x: otuCounts.otu_ids,
      y: otuCounts.sample_values,
      text: otuCounts.otu_labels,
      mode: "markers",
      marker: {
        size: otuCounts.sample_values,
        color: otuCounts.otu_ids,
        colorscale: "Earth"
      }
    };
    
    // Data array for the bubble chart
    var bubbleData = [bubbleTrace];
    // Layout for the bubble chart
    var bubbleLayout = {
      title: "Cultures",
      margin: { t: 0 },
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      margin: { t: 30}
    };
    // Render the bubble chart to the div tag with id "bubble"
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
}

//*******************************************create drop down*************************************************
  