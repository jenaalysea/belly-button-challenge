d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {

    // Get metadata for the selected sample
    var metadata = data.metadata.find(entry => entry.id == sample);
    // Get sample data for the selected sample
    var otuCounts = data.samples.find(entry => entry.id == sample);
    // Get the first 10 results from the sorted otu_values array
    x``
    var result = otuCounts.otu_values.slice(0, 10);
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
      title: `Top 10 OTUs for Sample ${sample}`,
      xaxis: { title: "OTU Count" },
      yaxis: { title: "OTU ID" }
    };
    // Render the bar chart to the div tag with id "bar"
    Plotly.newPlot("bar", barData, barLayout);
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
      title: "Bacteria Cultures Per Sample",
      margin: { t: 0 },
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      margin: { t: 30}
    };
    // Render the bubble chart to the div tag with id "bubble"
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });

  function init() {
    // Grab a reference to the dropdown select element
    let selector = d3.select("#selDataset");
    // Use the list of sample names to populate the select options
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      let sampleNames = data.names;
      for (let i = 0; i < sampleNames.length; i++){
        selector
          .append("option")
          .text(sampleNames[i])
          .property("value", sampleNames[i]);
      };
      // Use the first sample from the list to build the initial plots
      let firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }

  function buildMetadata(sample) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      let metadata = data.metadata;
      // Filter the data for the object with the desired sample number
       // Use d3 to select the panel with id of #sample-metadata
          // Use `.html("") to clear any existing metadata
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
    });
  }


// function buildCharts(sample) {
//   d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {


// // step 1, get metadata from data
// var metadata = data.metadata.find(entry => entry.id == sample);

// // step 2, filter
// var otuCounts = data.samples.find(entry => entry.id == sample);

// // step 3, get the first result from the results array
// var result = otuCounts.otu_values.slice(0, 10);

// //******************************creating the vertical bar chart***********************************************

// let sortedById = searchResults.sort((a, b) => {
//   if (a.ID > b.ID){
//     return -1} 
//     else{
//       return 0
//     }

//   }); 


//   // Trace1 for the OTU Data
//   var trace1 = {
//     x: result,
//     y: otuCounts.otu_ids.slice(0, 10).map(id => `OTU ${id}`),
//        type: "bar",
//     orientation: "h"
//   };
  
//   // Data array
//   var barData = [trace1];
  
//   // Apply a title to the layout
//   var barLayout = {
//     title: `Top 10 OTUs for Sample ${sample}`,
//     xaxis: { title: "OTU Count" },
//     yaxis: { title: "OTU ID" }
//   };
  
//   // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("bar", barData, barLayout);
//   });
// }

// // ******************************create a bubble data chart***********************************************



// // ***********************create the gauge chart**************************************
// /* <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

// // Function to generate the gauge chart
// function updateGaugeChart(wfreq) {
//   // Gauge chart configuration
//   const gaugeData = [
//     {
//       domain: { x: [0, 1], y: [0, 1] },
//       value: wfreq,
//       title: { text: 'Weekly Washing Frequency' },
//       type: 'indicator',
//       mode: 'gauge+number',
//       gauge: {
//         axis: { range: [null, 9] },
//         steps: [
//           { range: [0, 3], color: 'lightgreen' },
//           { range: [3, 6], color: 'yellow' },
//           { range: [6, 9], color: 'red' },
//         ],
//       },
//     },
//   ];

//   // Layout for the gauge chart
//   const gaugeLayout = { margin: { t: 0, b: 0 } };

//   // Render the gauge chart
//   Plotly.newPlot('gauge', gaugeData, gaugeLayout);
// }

// function optionChanged(selectedId) {
//   d3.json("your_data_url").then((data) => {
//     const metadata = data.metadata.find((entry) => entry.id == selectedId);

//     // Update demographic information
//     updateDemographicInfo(metadata);

//     // Update gauge chart
//     function updateGaugeChart(wfreq) {
//       console.log('Updating Gauge Chart with wfreq:', wfreq);    
//   });
// } */
