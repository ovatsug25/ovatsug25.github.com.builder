var margin = {
    top: 20,
    right: 80,
    bottom: 30,
    left: 50
};

var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var svg = d3.select("#linegraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var countries;
var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d) {
        return x(d[2005]);
    })
    .y(function(d) {
        return y(d[2005]);
    });
var color = d3.scale.category10();


d3.csv("gdpPerCapita.csv", function(errors, data) {
    data.forEach(function(uncollected) {
        var collected = [];
        for (var i = 1960; i < 2014; i++) {
            collected.push(uncollected[i]);
        }
        uncollected.collected = collected;
    });
    countries = data;

    x.domain(1960, 2013);
    y.domain([
        d3.min(countries, function(c) { return c[1960]; }),
        d3.max(countries, function(c) { return c[2012]; })
    ]);

});


var country = svg.selectAll(".country")
    .data(countries)
    .enter().append("g")
    .attr("class", "country");

country.append("path")
    .attr("class", "line")
    .attr("d", function(d) {
        return line(d.collected);
    })
    .style("stroke", function(d) {
        return color(d.name);
    });




// function calllback(error, data){
//  dataset = data;
//  generateVis();
//  hideLoadingMsg();
// });
