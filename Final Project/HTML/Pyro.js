
function changeContent() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById("myDropdown").value;

    // Define content for each page
    var pageContent = {
        'Dehya': '<img src="Dehya.png" alt="Image of Deyha" width="200" height="200">',
        'HuTao': '<img src="Hu Tao.png" alt="Image of Hu Tao" width="200" height="200">',
        'Klee': '<img src="Klee.png" alt="Image of Klee" width="200" height="200">',
        'Lyney': '<img src="Lyney.png" alt="Image of Lyney" width="200" height="200">',
        'Yoimiya': '<img src="Yoimiya.png" alt="Image of Yoimiya" width="200" height="200">'
    };

    // Update the content based on the selected page
    document.getElementById("content").innerHTML = pageContent[selectedValue];
}
// // Sample data (replace this with your own data)
// const data = [
//     { label: 'Category 1', count: 10 },
//     { label: 'Category 2', count: 20 },
//     { label: 'Category 3', count: 15 }
//   ];
  
//   // Create SVG
//   const svgWidth = 600;
//   const svgHeight = 400;
  
//   const svg = d3.select('#chart')
//     .attr('width', svgWidth)
//     .attr('height', svgHeight);
  
//   // Create scales
//   const xScale = d3.scaleBand()
//     .domain(data.map(d => d.label))
//     .range([0, svgWidth])
//     .padding(0.2);
  
//   const yScale = d3.scaleLinear()
//     .domain([0, d3.max(data, d => d.count)])
//     .range([svgHeight, 0]);
  
//   // Create bars
//   svg.selectAll('.bar')
//     .data(data)
//     .enter()
//     .append('rect')
//     .attr('class', 'bar')
//     .attr('x', d => xScale(d.label))
//     .attr('y', svgHeight)
//     .attr('width', xScale.bandwidth())
//     .attr('height', 0)
//     .transition()
//     .duration(1000)
//     .delay((d, i) => i * 200)
//     .attr('y', d => yScale(d.count))
//     .attr('height', d => svgHeight - yScale(d.count));
  
//   // Add count labels
//   svg.selectAll('.bar-text')
//     .data(data)
//     .enter()
//     .append('text')
//     .attr('class', 'bar-text')
//     .text(d => d.count)
//     .attr('x', d => xScale(d.label) + xScale.bandwidth() / 2)
//     .attr('y', d => yScale(d.count) + 15)
//     .attr('opacity', 0)
//     .transition()
//     .duration(1000)
//     .delay((d, i) => i * 200)
//     .attr('opacity', 1);
  
//   // Add hover functionality
//   svg.selectAll('.bar')
//     .on('mouseover', function() {
//       d3.select(this).attr('fill', 'orange');
//     })
//     .on('mouseout', function() {
//       d3.select(this).attr('fill', 'steelblue');
//     });
  
// // Create x-axis
// const xAxis = d3.axisBottom(xScale);
// svg.append('g')
//     .attr('transform', `translate(0, ${svgHeight})`)
//     .call(xAxis);

// // Create y-axis with numbered ticks
// const yAxis = d3.axisLeft(yScale);
// svg.append('g')
//     .call(yAxis);

// // Style for the ticks on both axes
// svg.selectAll('.tick line')
//     .attr('stroke', '#e1d4c6') // Change tick color
//     .attr('stroke-width', '2px'); // Adjust tick width

// svg.selectAll('.tick text')
//     .attr('fill', '#e1d4c6') // Change text color
//     .attr('font-size', '12px'); // Adjust text size 