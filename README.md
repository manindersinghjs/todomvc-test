[ ![Codeship Status for manindersinghjs/todomvc-test](https://codeship.com/projects/7073feb0-ed7d-0132-ce46-1224ac592aa6/status?branch=master)](https://codeship.com/projects/84012)

Link to Test Results 
https://tt-mvc.herokuapp.com/

#node-express
#node v0.12.0
#gulp 3.8.11
#selenium-server 2.45.0
#selenium-webdriver 2.45.1
#webdriverio 2.4.5
#cucumber 0.4.8

#e2e Testing Setup 

Install all dependencies
#$: todomvc-test     npm install 

#Start Selenium Server 
#$: todomvc-test	java -jar jars/selenium-server-standalone-2.45.0.jar

#Run e2e test
#Currently Chrome, Firefox and Safari is supported
#$: todomvc-test    gulp e2e -<browser_name>

#run app
#$: todomvc-test node app.js

#Error running selenium server
# Error - "java.net.BindException: Selenium is already running on port 4444
#http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer# web-app
#127.0.0.1

# ERROR HANDLING
#if any error while building  
#delete folder  node_modules
#cd node-express     npm install
#cd ~  pkill -f node
