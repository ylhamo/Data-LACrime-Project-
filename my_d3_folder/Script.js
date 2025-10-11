import { csv } from 'https://esm.sh/d3-fetch';
import { select } from 'https://esm.sh/d3-selection';
import { max } from 'https://esm.sh/d3-array';
import { hierarchy, pack } from 'https://esm.sh/d3-hierarchy';
import { scaleOrdinal } from 'https://esm.sh/d3-scale';
import { schemeCategory10 } from 'https://esm.sh/d3-scale-chromatic';
import { transition } from 'https://esm.sh/d3-transition';

// Load CSV from GitHub
const data = await csv("https://media.githubusercontent.com/media/ylhamo/Data-LACrime-Project-/refs/heads/main/crime_category.csv");
console.log(data.slice(0, 5));
data.forEach(d => d.Count = +d.Count);

const width = 900;
const height = 600;
const svg = select("svg")
    .attr("width", width)
    .attr("height", height);


const categories = [...new Set(data.map(d => d.Category))];
const categoryColor = scaleOrdinal()
    .domain(categories)
    .range(schemeCategory10);


const root = hierarchy({ children: data })
    .sum(d => d.Count);

const packLayout = pack()
    .size([width - 2, height - 2])
    .padding(5);

packLayout(root);


svg.selectAll("circle")
    .data(root.leaves())
    .enter()
    .append("circle")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", d => d.r)
    .attr("fill", d => categoryColor(d.data.Category))
    .attr("stroke", "black")
    .attr("stroke-width", 1);

// Tooltip div
const tooltip = select("body")
    .append("div")
    .style("position", "absolute")
    .style("background-color", "white")
    .style("border", "1px solid #999")
    .style("padding", "8px")
    .style("border-radius", "4px")
    .style("pointer-events", "none")
    .style("opacity", 0)
    .style("font-size", "13px");

// Add tooltip behavior
svg.selectAll("circle")
    .on("mouseover", (event, d) => {
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip.html(
            `<strong>${d.data.Crime}</strong><br/>
             Count: ${d.data.Count}<br/>
             Category: ${d.data.Category}`
        )
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    .on("mousemove", (event) => {
        tooltip.style("left", (event.pageX + 10) + "px")
               .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", () => {
        tooltip.transition().duration(200).style("opacity", 0);
    });


