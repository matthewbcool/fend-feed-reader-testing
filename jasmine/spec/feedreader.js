/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


    });
    //get all the url's from allFeeds
    var allUrls = [];

    for (feed of allFeeds) {
        allUrls.push(feed.url)
    };
    describe('Url Feeds', function() {

        it('are defined', function() {
            expect(allUrls).toBeDefined();
            expect(allUrls.length).not.toBe(0);
        });


    });
    //get all the names from allFeeds
    var allNames = [];

    for (feed of allFeeds) {
        allNames.push(feed.name)
    };

    describe('Name Feeds', function() {

        it('are defined', function() {
            expect(allNames).toBeDefined();
            expect(allNames.length).not.toBe(0);
        });


    });
    
    describe('The menu', function() {
        //get the body and save it to 'theBody'
        var menuHidden;
        var theBody = document.getElementsByTagName('body');
        theBody = theBody[0];
        menuHidden = theBody.className === 'menu-hidden';
        
        it('is hidden by default', function(){
            expect(menuHidden).toBe(true);
        });

        $('body').toggleClass('menu-hidden');
        it('changes visibility when menu is clicked off', function(){
            expect(menuHidden).not.toBe();
        });
        $('body').toggleClass('menu-hidden');
        it('changes visibility when menu is clicked back on', function(){
            expect(menuHidden).toBe(true);
        });
    });

    describe('Initial Entries', function() {
       var theEntry;
       var theContainer;
        beforeEach(function(done) {

         done();
        });
        it('loadFeed function completes work when called', function(done){
            expect()
            done();
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
