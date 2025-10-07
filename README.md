## Data Story (T03)

### Audience
Australian households considering a new TV for living rooms/bedrooms. They want a good picture, reasonable price, and to avoid high electricity bills. They’re time-poor, so clarity and direct recommendations matter.

### Questions we answer
1) Which **screen technologies** are most common?  
2) Which **screen sizes** are most frequent?  
3) Which **brands** offer the most **models**?  
4) Which **technology** tends to use the **least power**?  
5) What’s the **relationship** between **screen size** and **power use**?  
6) How do **star ratings** relate to **screen size**?

### Story principles (guidelines)
- Use plain language and short takeaways under each chart.  
- Prioritise comparisons with **bars**, relationships with **scatter**, distributions with **histograms/box**.  
- Show **units** (W, kWh/year) and note **limitations**.  
- End with clear, actionable **recommendations**.

---

## About the Data

**Source:** Australian Government Energy Rating database (unit practical snapshot).  
**Processing:** Cleaned and summarised (e.g., counts by brand/tech; means by tech; binning of sizes). KNIME used to export `data/tvBrandCount.csv` and other summaries for static charts.  
**Privacy:** No personal data.  
**Accuracy & limitations:**  
- Aggregates hide per-model differences (brightness/HDR/refresh rate).  
- Snapshot may lag newest models; verify with current store labels.  
- Star ratings and annual energy depend on defined test conditions.  
**Ethics:** Visuals avoid misleading scales; units labelled; assumptions stated.

---

## AI Declaration
Generative AI assisted with copy editing, structuring the README, and templating chart captions. All code/content was reviewed and tested by me. During demonstrations I will explain the process in my own words without reading comments verbatim.

---

## Displaying the Visualisation (where to look)
- **Story:** `televisions.html` (Q1–Q6 with answers + conclusion).  
- **Interactive (D3 bar chart):** `index.html` (T04-7).  
- **Storyboard:** linked in submission (Miro).
