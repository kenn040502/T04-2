// energy-d3.js

// 1) Style existing element
d3.select("h1")
  .style("color", "green");

// 2) Append new HTML into the existing div
d3.select("div")
  .append("p")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

// 3) Append an empty rect (visible in DOM, not on screen without attributes)
d3.select("svg")
  .append("rect");

// 4) Append a visible rectangle with position/size/fill
d3.select("svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 100)
  .attr("height", 30)
  .style("fill", "green");
