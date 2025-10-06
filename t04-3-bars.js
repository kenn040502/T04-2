// T04-3: Simple D3 setup with test rectangle

// Create an SVG inside the responsive container
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")  // logical canvas size
  .style("border", "1px solid black"); // border for development

// Test shape: a thin blue bar at the top-left
svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 414)
  .attr("height", 16)
  .attr("fill", "blue");
