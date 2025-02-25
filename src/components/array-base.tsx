"use client";

import { useEffect, FC, useRef } from "react";
import * as d3 from "d3";

interface ArrayBaseProps {
    array: number[]; // specify the type of the array (e.g., array of numbers)
}

const ArrayBase: FC<ArrayBaseProps> = ({array}) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const width = 700,
        height = 200;
        const boxSize = 60,
        spacing = 10;

        // Set SVG dimensions
        svg.attr("width", width).attr("height", height);

        // Draw array boxes
        svg
        .selectAll(".array-box")
        .data(array)
        .enter()
        .append("rect")
        .attr("class", "array-box")
        .attr("x", (d, i) => i * (boxSize + spacing) + 50)
        .attr("y", 50)
        .attr("width", boxSize)
        .attr("height", boxSize)
        .attr("stroke", "black")
        .attr("fill", "white")
        .attr("rx", 10);

        // Draw array values inside boxes
        svg
        .selectAll(".array-value")
        .data(array)
        .enter()
        .append("text")
        .attr("class", "array-value")
        .attr("x", (d, i) => i * (boxSize + spacing) + 50 + boxSize / 2)
        .attr("y", 50 + boxSize / 2 + 5)
        .attr("text-anchor", "middle")
        .attr("font-size", "18px")
        .attr("font-weight", "bold")
        .text(d => d);
    }, [array]); // Re-run if the array changes

    return <svg ref={svgRef}></svg>;
};

export default ArrayBase;