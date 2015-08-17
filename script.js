/**
 *
 * Created by rain on 8/15/2015.
 */
var categories = [
  {'text': 'ANOMALY DETECTION', 'x': 0, 'y': 0, color: '#F44336', width: 300, height: 30},
  {'text': 'MULTICLASS CLASSIFICATION', 'x': 800, 'y': 0, color: '#E91E63', width: 300, height: 30},
  {'text': 'CLUSTERING', 'x': 400, 'y': 0, color: '#9C27B0', width: 300, height: 30},
  {'text': 'REGRESSION', 'x': 0, 'y': 300, color: '#673AB7', width: 300, height: 30},
  {'text': 'TWO-CLASS CLASSIFICATION', 'x': 500, 'y': 300, color: '#2F51B5', width: 700, height: 30}
];

var groups = [
  {'text': 'ANOMALY DETECTION', 'x': 0, 'y': 40, color: '#F44336', width: 300, height: 90},
  {'text': 'MULTICLASS CLASSIFICATION', 'x': 800, 'y': 40, color: '#E91E63', width: 300, height: 200},
  {'text': 'CLUSTERING', 'x': 400, 'y': 40, color: '#9C27B0', width: 300, height: 50},
  {'text': 'REGRESSION', 'x': 0, 'y': 340, color: '#673AB7', width: 300, height: 320},
  {'text': 'TWO-CLASS CLASSIFICATION', 'x': 500, 'y': 340, color: '#2F51B5', width: 700, height: 200}
];

var algorithms = [
  {text: 'One-Class SVM', 'x':0, 'y':40, url: 'https://en.wikipedia.org/wiki/Support_vector_machine'},
  {text: 'PCA-based anomaly detection', 'x':0, 'y':80, url: 'https://msdn.microsoft.com/en-us/library/azure/dn913102.aspx'},

  {text: 'Multiclass Logistic Regression', 'x': 800, y: 40, url: 'https://en.wikipedia.org/wiki/Multinomial_logistic_regression'},
  {text: 'Multiclass Neural Network', x:800, y:80, url: 'https://en.wikipedia.org/wiki/Artificial_neural_network'},
  {text: 'Multiclass Decision Forest', x:800, y:120, url: 'https://msdn.microsoft.com/en-us/library/azure/dn906015.aspx'},
  {text: 'Multiclass Decision Jungle', x:800, y: 160, url: 'https://msdn.microsoft.com/en-us/library/azure/dn905963.aspx'},
  {text: 'One-v-all multiclass', x:800, y:200, url: 'https://en.wikipedia.org/wiki/Multiclass_classification'},

  {text: 'K-Means', x:400, y:40, url: 'https://en.wikipedia.org/wiki/K-means_clustering'},

  {text: 'Ordinal Regression', 'x': 0, y: 340, url: 'https://en.wikipedia.org/wiki/Ordinal_regression'},
  {text: 'Poisson Regression', x:0, y:380, url: 'https://en.wikipedia.org/wiki/Poisson_regression'},
  {text: 'Fast Forest Quantile Regression', x:0, y:420, url: 'https://msdn.microsoft.com/en-us/library/azure/dn913093.aspx'},
  {text: 'Linear Regression', x:0, y: 460, url: 'https://en.wikipedia.org/wiki/Linear_regression'},
  {text: 'Bayesian Linear Regression', x:0, y:500, url: 'https://en.wikipedia.org/wiki/Bayesian_linear_regression'},
  {text: 'Neural Network Regression', x:0, y:540, url: 'https://en.wikipedia.org/wiki/Artificial_neural_network'},
  {text: 'Decision Forest Regression', x:0, y:580, url: 'https://en.wikipedia.org/wiki/Random_forest'},
  {text: 'Boosted Decision Tree Regression', x:0, y:620, url: 'https://msdn.microsoft.com/en-us/library/azure/dn905801.aspx'},

  {text: 'Two-class SVM', 'x': 500, y: 340, url: 'https://msdn.microsoft.com/en-us/library/azure/dn905835.aspx'},
  {text: 'Two-class average perceptron', x:500, y:380, url: 'https://msdn.microsoft.com/en-us/library/azure/dn906036.aspx'},
  {text: 'Two-class logistic regression', x:500, y:420, url: 'https://msdn.microsoft.com/en-us/library/azure/dn905994.aspx'},
  {text: 'Two-class Bayes point machine', x:500, y:460, url: 'https://msdn.microsoft.com/en-us/library/azure/dn905930.aspx'},

  {text: 'Two-class Decision Forest', 'x': 900, y: 340, url: 'https://msdn.microsoft.com/en-us/library/azure/dn906008.aspx'},
  {text: 'Two-class boosted Decision Tree', x:900, y:380, url: 'https://msdn.microsoft.com/en-us/library/azure/dn906025.aspx'},
  {text: 'Two-class Decision Jungle', x:900, y:420, url: 'https://msdn.microsoft.com/en-us/library/azure/dn905976.aspx'},
  {text: 'Two-class Locally deep SVM', x:900, y:460, url: 'https://msdn.microsoft.com/en-us/library/azure/dn913070.aspx'},
  {text: 'Two-class Neural Network', x:900, y:500, url: 'Two-Class Neural Network'}
];

var svgContainer = d3.select("body")
  .append("svg")
  .attr("width", 3000)
  .attr("height", 3000);

var categoryContainers = svgContainer.selectAll("cc")
  .data(categories)
  .enter().append("rect")
  .attr("x", function (d) { return d.x })
  .attr("y", function (d) { return d.y })
  .attr("width", function(d){ return d.width })
  .attr("height", function(d){ return d.height})
  .attr("fill", function(d){ return d.color });


var categoryTexts = svgContainer.selectAll("ct")
  .data(categories)
  .enter().append("text")
  .attr("x", function (d) { return d.x + 15; })
  .attr("y", function (d) { return d.y + 15; })
  .text(function (d) { return d.text; })
  .attr("fill", "white");

var groupContainer = svgContainer.selectAll("gc")
  .data(groups)
  .enter().append("rect")
  .attr("x", function (d) { return d.x })
  .attr("y", function (d) { return d.y })
  .attr("width", function(d){ return d.width })
  .attr("height", function(d){ return d.height})
  .attr("fill", function(d){ return "#424242" });

var algorithmContainers = svgContainer.selectAll("ac")
  .data(algorithms)
  .enter()
  .append("a")
  .append("rect")
  .attr("xlink:href", "http://google.com.vn")
  .attr("x", function (d) { return d.x })
  .attr("y", function (d) { return d.y })
  .attr("width", 300)
  .attr("height", 30)
  .attr("fill", "#757575")
  .style("cursor", "pointer");

var algorithmTexts = svgContainer.selectAll("at")
  .data(algorithms)
  .enter()
  .append("text")
  .attr("x", function (d) { return d.x + 15; })
  .attr("y", function (d) { return d.y + 20; })
  .style("pointer-events", "none")
  .text(function (d) { return d.text; })
  .attr("fill", "white");

algorithmContainers.on("click", function(d){
  window.open(d.url, "_blank").focus();
});

