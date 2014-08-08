var margin = {
    roof: 20,
    right: 80,
    bottom: 30,
    left: 70
};

// var width = window.innerWidth;
var width = screen.width;
var xAxisTicks = 5;
width = width - margin.left - margin.right;
var height = width/1.92;

var svg = d3.select("#linegraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.roof + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.roof + ")");

var countries;
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickFormat(d3.format("04d"))
    .ticks(xAxisTicks);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(6);

var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) {
        return x(d[0]);
    })
    .y(function(d) {
        return y(d[1]);
    });



d3.csv("/data/gdpPerCapitaNoNull.csv", function(errors, data) {
    data.forEach(function(uncollected) {
        var collected = [];
        for (var i = 1960; i < 2013; i++) {
            collected.push([i, parseFloat(uncollected[i])]);
        }
        uncollected.collected = collected;
        array = d3.extent(
            collected.map(function(c) {
                c[1];
            })
        );
        uncollected.small = 0;
        uncollected.large = 10000;
    });
    countries = data;

    x.domain([1960, 2013]);
    y.domain([100, 50000]);

    var country = svg.selectAll(".country")
        .data(countries)
        .enter()
    .append("g")
        .attr("class", "country")
        .attr("id", function(d) {
            return d["Country Code"]
        })
    .append("path").attr("class", "line")
        .attr("d", function(d) { return line(d.collected) })
        .style("stroke", "black");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    var yAxisLabel = svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("GDP per Capita");
    if (xAxisTicks > 3){
      yAxisLabel.attr("transform", "rotate(-90)");
    } else {
      yAxisLabel.attr("x", "120");
    }
});
