// t04-5-bars.js
// Define ONCE, via window.createBarChart to avoid "already declared" errors
window.createBarChart = function (data) {
  // Create an SVG inside the responsive container
  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1200 400")   // temporary; T04-6 will add scales/layout
    .style("border", "1px solid black"); // dev-only boundary

  // Bind rows -> rects (one rect per datum)
  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`) // e.g., "bar bar-859"
    .attr("width", d => d.count)              // use numeric value directly (no scale yet)
    .attr("height", 16)                       // constant bar height
    .attr("fill", "steelblue");
  // NOTE: no x/y yet, so bars overlap at (0,0) by design for T04-5
};
