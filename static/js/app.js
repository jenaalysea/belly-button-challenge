function buildCharts(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {


// step 1, get metadata from data
let samp = data.Id.filter(ID => ID.id == otuId)[0];;
// step 2, filter
let otuCount = data.otuCounts.filter(otuId => otuId.id == otuId)[0];
// step 3, get the first result from the results array
let result = otuCount.otuId_values.slice(0, 10);

//******************************creating the vertical bar chart***********************************************
 
  // Trace1 for the OTU Data
  let trace1 = {
    x: result.map(object => object.ID),
    y: result.map(object => object.otuId),
    textposition: 'auto',
    name: "OTU Top Ten",
    type: "bar",
    hoverinfo: 'otu_labels',
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

// ******************************create a bubble data chart***********************************************

function buildCharts(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {

    // step 1, get metadata from data
    var samp = data.Id.filter(ID => ID.id == otuId)[0];
    // step 2, filter
    var otuCount = data.otuCounts.filter(otuId => otuId.id == otuId)[0];
    

    // Trace1 for the OTU Data (Bubble Chart)
    let trace1 = {
      x: result.map(object => object.ID),
      y: result.map(object => object.otuId),
      text: result.map(object => object.otu_labels),
      mode: 'markers',
      marker: {
        size: result.map(object => object.sample_values),
        color: result.map(object => object.otuId),
        colorscale: 'Viridis'
      },
    };

    // Data array
    let plotlyData = [trace1];

    // Apply a title to the layout
    let layout = {
      title: "OTU Bubble Chart",
      xaxis: {
        title: 'OTU ID'
      },
      yaxis: {
        title: 'Sample Values'
      }
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", plotlyData, layout);
  });
}

// ***********************create a view of sample data**************************************

// Function to fetch data and initialize the page
function init() {
  // Fetch the JSON data
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    // Populate the dropdown with Test Subject IDs
    const dropdown = d3.select("#selDataset");

    data.names.forEach((id) => {
      dropdown.append("option").text(id).property("value", id);
    });

    // Initialize the page with the first ID
    const initialId = data.names[0];
    optionChanged(initialId);
  });
}

// Do dropdown changes
function optionChanged(selectedId) {
  // Fetch the data again (for more details or additional data if needed)
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    // Update demographic information based on the selected ID
    const metadata = data.metadata.find((entry) => entry.id == selectedId);
    updateDemographicInfo(metadata);
  });
}

// Update demographic information
function updateDemographicInfo(metadata) {
  // Select the panel body where demographic info will be displayed
  const panelBody = d3.select("#sample-metadata");

  // Clear content
  panelBody.html("");

  // Shwo info
  Object.entries(metadata).forEach(([key, value]) => {
    panelBody.append("p").text(`${key}: ${value}`);
  });
}

// Initialize the page
init();

// ***********************create a view of sample data**************************************

