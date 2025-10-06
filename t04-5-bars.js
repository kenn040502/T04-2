// t04-5-bars.js — T04-7: grouped bars with category + value labels (white text)
// t04-4-load.js will call window.createBarChart(data) after CSV loads.

window.createBarChart = function (data) {
  // --- Sizes (logical viewBox vs physical on-screen size) ---
  const viewW = 500;                             // logical width for scales
  const viewH = Math.max(220, data.length * 28); // logical height by rows
  const displayW = 640;                          // actual rendered width
  const displayH = Math.min(480, data.length * 24 + 40);

  const labelX = 100;  // left gutter where labels end and bars begin

  // --- SVG root ---
  const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", `0 0 ${viewW} ${viewH}`)
    .attr("width", displayW)
    .attr("height", displayH)
    .style("background", "#0b1120"); // dark background so white labels pop (Tailwind slate-950-ish)

  // Optional: a darker left strip behind category labels (same height as chart)
  svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", labelX)
    .attr("height", viewH)
    .attr("fill", "#0f172a"); // dark slate strip

  // --- Scales ---
  const xMax = d3.max(data, d => d.count);
  const xScale = d3.scaleLinear()
    .domain([0, xMax])
    .range([0, viewW]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, viewH])
    .paddingInner(0.2)
    .paddingOuter(0.1);

  // --- T04-6 rects (kept commented for reference) ---
  // svg.selectAll("rect.bar")
  //   .data(data)
  //   .join("rect")
  //   .attr("class", d => `bar bar-${d.count}`)
  //   .attr("x", 0)
  //   .attr("y", d => yScale(d.brand))
  //   .attr("width", d => xScale(d.count))
  //   .attr("height", yScale.bandwidth())
  //   .attr("fill", "steelblue");

  // --- T04-7: group per row so bar + labels move together ---
  const rows = svg.selectAll("g.row")
    .data(data)
    .join("g")
    .attr("class", "row")
    .attr("transform", d => `translate(0, ${yScale(d.brand)})`);

  // Bar rectangle (y=0; group handles vertical position)
  rows.append("rect")
    .attr("x", labelX)
    .attr("y", 0)
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "#2563eb"); // blue-600

  // Category label (white, right-aligned at labelX)
  rows.append("text")
    .text(d => d.brand)
    .attr("x", labelX)
    .attr("y", Math.max(12, yScale.bandwidth() * 0.7))
    .attr("text-anchor", "end")
    .attr("aria-hidden", "true")
    .style("font-family", "sans-serif")
    .style("font-size", "13px")
    .style("fill", "white"); // ← make category label white

  // Value label (white, just past bar end)
  rows.append("text")
    .text(d => d.count)
    .attr("x", d => labelX + xScale(d.count) + 4)
    .attr("y", Math.max(12, yScale.bandwidth() * 0.6))
    .attr("aria-hidden", "true")
    .style("font-family", "sans-serif")
    .style("font-size", "13px")
    .style("fill", "white"); // ← make value label white
};
