import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Chart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 800)
      .attr('height', 400)
      .style('border', '1px solid black');

    svg.selectAll('*').remove();

    if (data.length === 0) return;

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([0, 800])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([400, 0]);

    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.name))
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => 400 - yScale(d.value))
      .attr('fill', 'steelblue');
  }, [data]);

  return (
    <svg ref={ref}></svg>
  );
};

export default Chart;
