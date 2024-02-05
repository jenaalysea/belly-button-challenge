function buildCharts(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {


// step 1, get metadata from data
var metadata = data.metadata.find(entry => entry.id == sample);

// step 2, filter
var otuCounts = data.samples.find(entry => entry.id == sample);

// step 3, get the first result from the results array
var result = otuCounts.otu_values.slice(0, 10);

//******************************creating the vertical bar chart***********************************************
 
  // Trace1 for the OTU Data
  var trace1 = {
    x: result,
    y: otuCounts.otu_ids.slice(0, 10).map(id => `OTU ${id}`),
    text: otuCounts.otu_labels.slice(0, 10),
    type: "bar",
    orientation: "h"
  };
  
  // Data array
  var barData = [trace1];
  
  // Apply a title to the layout
  var barLayout = {
    title: `Top 10 OTUs for Sample ${sample}`,
    xaxis: { title: "OTU Count" },
    yaxis: { title: "OTU ID" }
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("bar", barData, barLayout);
  });
}

// ******************************create a bubble data chart***********************************************

function buildCharts(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {

// step 1, get metadata from data
var sample_values = data.metadata.find(entry => entry.id == sample);
// step 2, filter
var otuCounts = data.samples.find(entry => entry.id == sample);
    

    // Trace1 for the OTU Data (Bubble Chart)
    var trace1 = {
      x: result.map(object => object.ID),
      y: result.map(object => object.otuId),
      mode: 'markers',
      marker: {
        color: 'Viridis',
        opacity: [1, 0.8, 0.6, 0.4],
        size: result.map(object => object.sample_values),
      },
    };  

    // Data array
    var data = [trace1];

    // Apply a title to the layout
    var layout = {
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

// ***********************create the gauge chart**************************************
/* <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

// Function to generate the gauge chart
function updateGaugeChart(wfreq) {
  // Gauge chart configuration
  const gaugeData = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: wfreq,
      title: { text: 'Weekly Washing Frequency' },
      type: 'indicator',
      mode: 'gauge+number',
      gauge: {
        axis: { range: [null, 9] },
        steps: [
          { range: [0, 3], color: 'lightgreen' },
          { range: [3, 6], color: 'yellow' },
          { range: [6, 9], color: 'red' },
        ],
      },
    },
  ];

  // Layout for the gauge chart
  const gaugeLayout = { margin: { t: 0, b: 0 } };

  // Render the gauge chart
  Plotly.newPlot('gauge', gaugeData, gaugeLayout);
}

function optionChanged(selectedId) {
  d3.json("your_data_url").then((data) => {
    const metadata = data.metadata.find((entry) => entry.id == selectedId);

    // Update demographic information
    updateDemographicInfo(metadata);

    // Update gauge chart
    function updateGaugeChart(wfreq) {
      console.log('Updating Gauge Chart with wfreq:', wfreq);    
  });
} */
