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
        var theBody = document.getElementsByTagName('body');
        theBody = theBody[0];
        it('is hidden by default', function(){
            expect(theBody.className === 'menu-hidden').toBe(true);
        });
    })
    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

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
