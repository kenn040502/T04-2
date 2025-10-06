// t04-5-bars.js — T04-6: scaling with linear (x) + band (y)
window.createBarChart = function (data) {
  // 1) Logical canvas (viewBox) vs physical display size
  const viewW = 500;   // narrow on purpose—forces x scaling
  const viewH = 1600;  // tall logical space for many bars
  const displayW = 640; // actual rendered size (tweak 480–800)
  const displayH = 420; // actual rendered size (tweak 360–500)

  // 2) Create SVG (new each call; remove .style('border',...) when done)
  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", `0 0 ${viewW} ${viewH}`) // logical coords
    .attr("width", displayW)                   // pixels on page
    .attr("height", displayH)
    .style("border", "1px solid black");       // dev-only

  // 3) Scales
  // X: numeric scale (counts → width in logical coords)
  const xMax = d3.max(data, d => d.count);
  const xScale = d3.scaleLinear()
    .domain([0, xMax])     // data space
    .range([0, viewW]);    // logical pixels across width

  // Y: band (categorical) to space bars vertically
  // Change d.brand if your category field differs
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, viewH])
    .paddingInner(0.2)
    .paddingOuter(0.1);

  // 4) Draw bars (now positioned + scaled)
  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => `bar bar-${d.count}`)
    .attr("x", 0)
    .attr("y", d => yScale(d.brand))
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "steelblue");
};
