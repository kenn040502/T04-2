// t04-4-load.js

// ---- Stub for T04-5 (will render bars later)
function createBarChart(data) {
  console.log("createBarChart received", data.length, "rows");
  // (No drawing yet — implemented in T04-5)
}

// ---- Helper: optional “strict” row validation (edit to match YOUR headers)
function rowAccessor(d, i) {
  // Adjust keys if your CSV headers differ
  // e.g., if your CSV has BrandName,TotalModels — change to: d.BrandName, +d.TotalModels
  const brand = d.brand?.trim?.() ?? d.brand;
  const count = +d.count;

  // Skip rows with missing or non-numeric count
  if (!brand || Number.isNaN(count)) {
    console.warn("Skipping bad row at index", i, d);
    return null;
  }
  return { brand, count };
}

// ---- Load, type, and quick-check
d3.csv("data/tvBrandCount.csv", rowAccessor)
  .then(raw => {
    // Filter out nulls (bad rows)
    const data = raw.filter(Boolean);

    // Quick diagnostics
    console.log("data:", data);
    console.log("rows:", data.length);
    console.log("max:", d3.max(data, d => d.count));
    console.log("min:", d3.min(data, d => d.count));
    console.log("extent:", d3.extent(data, d => d.count)); // [min, max]
    console.log("sum:", d3.sum(data, d => d.count));
    console.log("unique brands:", new Set(data.map(d => d.brand)).size);

    // Sort for easier reading (descending by count)
    data.sort((a, b) => d3.descending(a.count, b.count));

    // Hand off to chart builder (T04-5)
    createBarChart(data);
  })
  .catch(err => {
    console.error("Failed to load CSV. Check path and file name.", err);
  });
