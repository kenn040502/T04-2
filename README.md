# COS30045 – T03 Communicating Data Insights

A small site that communicates insights from a TV energy consumption dataset for a general audience of **Australian households** comparing new TVs.

## Data Story

**Audience**  
Budget- and bill-conscious households choosing a TV. They care about:  
- Which **screen technologies** are most common  
- For **55″**, which tech **uses less/more energy** (kWh/year)  
- Context from **spot power prices** when thinking about bills

**Questions answered**  
1. What TV screen technologies are available and most common?  
2. For 55″ TVs, which technologies consume less/more energy?  
3. What is the high-level trend in spot power prices?

**Guidelines**  
- Keep visuals simple with short takeaways.  
- Emphasise comparisons over raw values.  
- Avoid misleading scales; annotate units clearly.

---

## About the data

**Data source**  
- TV energy dataset: Australian Government Energy Rating database (via data.gov.au).  
- Spot power prices (1998–2024): summary provided in COS30045 practicals.

**Processing**  
- Cleaned in **KNIME**: removed duplicates and non-available models; standardised brand labels; transformed screen size cm → inches and grouped into categories; aggregated technology shares and 55″ average kWh/year.  
- Aggregation nodes: GroupBy / Row Aggregator (KNIME).

**Privacy**  
- No personal data — only product characteristics and aggregates.

**Accuracy & limitations**  
- Averages hide brand/model variance and do not capture HDR, refresh rate, or usage patterns.  
- Data may lag the newest models; always check the actual energy label.  
- 55″ slice is a subset; other sizes may differ.

**Ethics**  
- Clear labelling and no exaggerated axes.  
- Aim: informed decision-making, not brand promotion.

---

## Displaying visualisations

This site uses **Chart.js** (CDN) for a donut, bar, and line chart on the Televisions page.  
To plug in real values, edit `charts.js` arrays:
- `techShare` (technology shares)
- `avgKWh55` (55″ average kWh/year by technology)
- `spotAvg` (average price series per year)

---

## How to run

Just open `index.html` locally, or deploy with GitHub Pages / Vercel.

---

## AI Declaration

GenAI helped draft text and code (HTML/CSS/JS). All outputs were reviewed and adapted by the student to ensure correctness and alignment with unit requirements and data ethics.
