// t04-4-load.js

// Helper to coerce and validate rows (adjust keys to match your CSV headers)
function rowAccessor(d, i) {
  const brand = d.brand?.trim?.() ?? d.brand;
  const count = +d.count; // convert string -> number
  if (!brand || Number.isNaN(count)) {
    console.warn("Skipping bad row at index", i, d);
    return null;
  }
  return { brand, count };
}

// Load CSV, filter bad rows, quick checks, then call createBarChart(data)
d3.csv("data/tvBrandCount.csv", rowAccessor)
  .then(raw => {
    const data = raw.filter(Boolean);

    // quick diagnostics
    console.log("data:", data);
    console.log("rows:", data.length);
    console.log("max:", d3.max(data, d => d.count));
    console.log("min:", d3.min(data, d => d.count));
    console.log("extent:", d3.extent(data, d => d.count));
    console.log("sum:", d3.sum(data, d => d.count));
    console.log("unique brands:", new Set(data.map(d => d.brand)).size);

    // sort descending for readability
    data.sort((a, b) => d3.descending(a.count, b.count));

    // CALL the chart builder (defined in t04-5-bars.js)
    if (typeof window.createBarChart === "function") {
      window.createBarChart(data);
    } else {
      console.error("createBarChart is not defined. Did you include t04-5-bars.js?");
    }
  })
  .catch(err => {
    console.error("Failed to load CSV. Check path and file name.", err);
  });

// IMPORTANT: Do NOT define any stub for createBarChart here.
