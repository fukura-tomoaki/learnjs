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
