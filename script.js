
/* Make the miles chart under statistics section */
function milesChart() {
    // d3.select("#stats").style("color", "red");
}

/* Make the garbage dumped chart under statistics seciton */
function garbageChart () {

}

function ticketPileAnimation () {
	const container = d3.select(DOM.svg(1200, 900));
	  const imageLink = 'https://image.flaticon.com/icons/svg/708/708944.svg';
	  const imageHeight = 21
	 
	  
	  const Group1 = container
	        .append("g")
	        .attr("transform", () =>  "translate(" + 40 + "," + 20 + ")")
	        .attr("id", "pinkGroup")
	        .attr('fill', '#a6c72e')
	    
	  const Group2 = container
	        .append("g")
	        .attr("transform", () =>  "translate(" + 240 + "," + 20 + ")")
	        .attr("id", "greenGroup")
	        .attr("fill","dimgrey")
	  
	  const Group3 = container
	        .append("g")
	        .attr("transform", () =>  "translate(" + 440 + "," + 20 + ")")
	        .attr("id", "greenGroup")
	        .attr("fill","dimgrey")
	  
	  const Group4 = container
	        .append("g")
	        .attr("transform", () =>  "translate(" + 640 + "," + 20 + ")")
	        .attr("id", "greenGroup")
	        .attr("fill","dimgrey")
	  
	  const Group5 = container
	        .append("g")
	        .attr("transform", () =>  "translate(" + 840 + "," + 20 + ")")
	        .attr("id", "greenGroup")
	        .attr("fill","dimgrey")
	  
	   function init(svg, value, startX, startY, category, price) {
	    svg.attr("value", value);
	    
	    svg.append("text")
	       .attr("dy", startY - 30 - parseInt(value/5) * (imageHeight + 2))
	       .attr("dx", 50)
	       .attr("font-size", "25px")
	       .attr("font-family", "sans-serif")
	       .attr("text-anchor", "middle")
	       .attr("font-weight", "bold")
	       .text(value + ",000")
	     
	     svg.append("text")
	       .attr("dy", startY - 15 - parseInt(value/5) * (imageHeight + 2))
	       .attr("dx", 50)
	       .attr("font-size", "10px")
	       .attr("font-family", "sans-serif")
	       .attr("text-anchor", "middle")
	       .attr("font-weight", "bold")
	       .text("tickets")
	     
	     svg.append("text")
	         .attr("x", 50)
	         .attr("y", startY + 40)
	       .attr("font-size", "14px")
	       .attr("font-family", "sans-serif")
	       .attr("text-anchor", "middle")
	       .attr("font-weight", "bold")
	       .text(category.split(" ").slice(0, 3).join(" "))
	     
	     svg.append("text")
	         .attr("x", 50)
	         .attr("y", startY + 58)
	       .attr("font-size", "14px")
	       .attr("font-family", "sans-serif")
	       .attr("text-anchor", "middle")
	       .attr("font-weight", "bold")
	       .text(category.split(" ").slice(3, ).join(" "))
	     
	     svg.append("text")
	       .attr("dy", startY + 83)
	       .attr("dx", 50)
	       .attr("font-size", "10px")
	       .attr("font-family", "sans-serif")
	       .attr("text-anchor", "middle")
	       .attr("font-weight", "bold")
	       .attr("opacity", 0.7)
	       .text(price + "/ticket")
	     
	    // this is code to initialize the sequence of ticket in each pile
	    // we need a dataset of values to bind the tickets to, from 0 to value - 1
	    const arrayOfInts = d3.range(0,value);
	     
	    // this creates the ticket image pile
	    svg.selectAll("image")
	     .data(arrayOfInts)
	     .enter().append("image")
	     .attr('xlink:href', imageLink)
	     .attr("width", imageHeight)
	     .attr("height", imageHeight)
	     .attr("x", startX + 100 ) 
	     .attr("y", 50)
	     .attr("opacity", 0)
	     .transition()
	     .duration((d,i) => i*50)
	     .attr("x", d => 22 * (d % 5) ) 
	     .attr("y",  d => startY - parseInt(d/5) * (imageHeight + 2))
	     .attr("opacity", 1)
	     .attr("id", d => svg.attr("id") + "image" + d);
	   }
	  
	  
	 // call the initialization functions   
	 init(Group1, 158, 40, 750, "Parking during street sweeping hours", "$66");
	 init(Group2, 28, 240, 750, "Expired Meter", "$58");
	 init(Group3, 23, 440, 750, "Failure to display parking receipt", "$58");
	 init(Group4, 19, 640, 750, "Parking in Red Zone", "$83");
	 init(Group5, 8, 840, 750, "Parking in Residential Parking Permit Zone", "$83");
	 
	  
	  return container.node();
}

$(document).ready(function () {
    // D3 charts generation sequences go here
    milesChart();
    garbageChart();
    ticketPileAnimation();
});