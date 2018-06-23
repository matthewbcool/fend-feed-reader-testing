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
    /* This suite is all about the RSS
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
    /* Test that loops through each feed
        * in the allFeeds object and ensures it has a URL defined
        * and that the URL is not empty.
    */

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

    /* Write a test that ensures the menu element is
    * hidden by default. You'll have to analyze the HTML and
    * the CSS to determine how we're performing the
    *  hiding/showing of the menu element.
    * test that ensures the menu changes
    * visibility when the menu icon is clicked. This test
    * should have two expectations: does the menu display when
    * clicked and does it hide when clicked again.
    */
    
    describe('The menu', function() {
        //get the body to test className.
        var menuHidden;
        var theBody = $('body');
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
    
    /* Test that ensures when the loadFeed
    * function is called and completes its work, there is at least
    * a single .entry element within the .feed container 
    */

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            })
        });

        it('loadFeed function completes work and has at least one entry', function(){
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });

    /* Test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    * Remember, loadFeed() is asynchronous.
    */

    describe('New Feed Selection', function(){
        var initialFeed;
        var newFeed;

        beforeEach(function(done){
            loadFeed(0, function(){
                initialFeed = $('feed').html();
                loadFeed(1, function(){
                    newFeed = $('.feed').html();
                    done();
                })
            });
        });
        it('content changes when new feed is loaded', function(){
            expect(newFeed).not.toEqual(initialFeed);
 
        });
    })
}());
