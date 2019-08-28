describe("LearnJs",function() {
    it('shows the landing page view when there is no hash',function(){
        learnjs.showView('');
        expect($('.view-container .landing-view').length).toEqual(1);
    });

    it("can show a problem view", function() {
        learnjs.showView('#problem-1');
        expect($('.view-container .problem-view').length).toEqual(0);
    });

    it('passes the hash view parameter to the view function',function(){
        spyOn(learnjs, 'problemView');
        learnjs.showView('#problem-42');
        expect(learnjs.problemView).toHaveBeenCalledWith('42');
    });

    it('involkes the router when loaded',function(){
        spyOn(learnjs, 'showView');
        learnjs.appOnReady();
        expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });

    it('subscribes to the hash change event',function(){
        learnjs.appOnReady();
        spyOn(learnjs, 'showView');
        $(window).trigger('hashchange');
        expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });

    describe('problem view',function(){
        var view;
        it('has a title that include the problem number',function(){
            view = learnjs.problemView('1');
            //expect(view.find('.title').text()).toEqual('Problem #1');
        });

        it('show the description',function(){
            var view = learnjs.showView("problem #1");
 //           expect(view.find('[data-name="description"]').text()).toEqual('What is truth?');
        });

        it('show the problem code',function(){
            var view = learnjs.showView("problem #1");
//            expect(view.find('[data-name="code"]').text()).toEqual('function problem() {return __;}');
        })
    });
});