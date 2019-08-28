'use strict'
var learnjs = {};


//問題データモデル{
learnjs.ploblems = [
    {
        description: "What is truth?",
        code: "function problem() {return __;}"
    },
    {
        description: "Simple Math?",
        code: "function problem() {return 42 === 6 * __;}"
    }
];
//}
    
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

learnjs.appOnReady = function(){
    window.onhashchange = function() {
        learnjs.showView(window.location.hash);
    };
    learnjs.showView(window.location.hash);
}

learnjs.problemView = function(problemNumber){
    var view = $('.templates .problem-view').clone();
    view.find('.title').text('Problem #' + problemNumber + ' Comming Soon!')
    return view;
}

// 問題データをバインド
learnjs.applyObject = function(obj, elem){
    for(var key in obj) {
        elem.find('[data-name="'+ key +'"]').text(obj[key]);
    }
};


learnjs.problemView = function(data){
    var problemNumber = parseInt(data, 10);
    var view = $('.templates .problem-view').clone();
    var problemData = learnjs.ploblems[problemNumber-1];
    var resultFlash = view.find('.result');

    // 解答のチェック
    function checkAnswer() {
        var answer = view.find('.answer').val();
        var test = problemData.code.replace('__',answer) + '; problem();';
        return eval(test);
    }

    function checkAnswerClick() {
        if(checkAnswer()) {
            resultFlash.test('Correct!');
        } else {
            resultFlash.test('Incorrect!');
        }
        return false;
    }

    view.find('.check-btn').click(checkAnswerClick);
    view.find('.title').text('Problem #' + problemNumber);
    learnjs.applyObject(learnjs.ploblems[problemNumber-1], view);
    return view;
}
