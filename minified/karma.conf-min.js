module.exports=function(e){e.set({basePath:"",frameworks:["mocha","chai"],files:["public/csv.js","public/csv_test.js","public/vendor/chai.js","public/vendor/mocha.css","public/vendor/mocha.js","public/vendor/sinon-1.17.3.js","public/vendor/blanket.min.js","public/vendor/mocha-blanket.js","public/vendor/sinon-1.7.1.js"],client:{mocha:{ui:"bdd"}},exclude:["gulpfile.js"],preprocessors:{"public/test.html":["html2js"]},plugins:["karma-mocha","karma-chai","karma-chrome-launcher","karma-firefox-launcher","karma-html2js-preprocessor","karma-phantomjs-launcher","karma-safari-launcher"],customLaunchers:{Chrome_travis_ci:{base:"Chrome",flags:["--no-sandbox"]}},reporters:["progress"],port:9876,colors:!0,logLevel:e.LOG_INFO,autoWatch:!0,browsers:["PhantomJS","Chrome_travis_ci","Firefox"],captureTimeout:6e4,singleRun:!1})};