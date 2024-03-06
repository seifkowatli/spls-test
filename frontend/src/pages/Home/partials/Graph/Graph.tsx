import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface ExponentialChartProps {
  a: number;
  width?: number;
  height?: number;
}

const ExponentialChart: React.FC<ExponentialChartProps> = ({ a, width = 500, height = 300 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (a <= 1) return; // Ensure a > 1

    // Setup the SVG canvas
    const svg = d3.select(ref.current)
                  .attr("width", width)
                  .attr("height", height)
                  .style("border", "1px solid black");

    // Clear the SVG canvas
    svg.selectAll("*").remove();

    // Define scales
    const xScale = d3.scaleLinear()
                     .domain([0, 10]) // Adjust domain to fit your data
                     .range([0, width]);

    const yScale = d3.scaleLinear()
                     .domain([0, Math.pow(a, 10)]) // Adjust domain based on 'a'
                     .range([height, 0]);

    // Generate the line
    const line = d3.line()
                   .x((d, i) => xScale(i))
                   .y(d => yScale(Math.pow(a, d)));

    // Create a data set
    const data = d3.range(11); // Generate an array [0, 1, 2, ..., 10]

    // Draw the line
    svg.append("path")
       .datum(data)
       .attr("fill", "none")
       .attr("stroke", "blue")
       .attr("stroke-width", 2)
       .attr("d", line);

    // Add the X Axis
    svg.append("g")
       .attr("transform", `translate(0,${height})`)
       .call(d3.axisBottom(xScale));

    // Add the Y Axis
    svg.append("g")
       .call(d3.axisLeft(yScale));

  }, [a, width, height]);

  return <svg ref={ref}></svg>;
};

export default ExponentialChart;
