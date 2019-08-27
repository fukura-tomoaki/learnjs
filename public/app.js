'use strict'
var learnjs = {};
learnjs.problemView = function(hash){
    var problemView = $('<div class = "problem-view">').text('Coming soon!');
    $('.view-container').empty().append(problemView);
}

learnjs.showView = function (hash) {
    var routes ={
        '#problem': learnjs.problemView
    };
    var hashParts = hash.split('-');
    var viewFn = routes[hashParts[0]];
    if (viewFn) {
        $('.view-container').empty().append(viewFn(hashParts[1]));
    }   
}


learnjs.problemView = function(problemNumber){
    var title = 'Problem #' + problemNumber + ' Coming soon!';
    return $('<div class="problem-view">').text(title);
}