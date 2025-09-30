// Style the existing H1 (the one we added above)
d3.select("h1")
  .style("color", "green");

// Append a paragraph into the first <div> (our #content)
d3.select("div")
  .append("p")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

// Append an empty <rect> (visible in the DOM, not rendered because no size)
d3.select("svg")
  .append("rect");

// Append a visible rectangle with position, size, and fill
d3.select("svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 100)
  .attr("height", 30)
  .style("fill", "green");
