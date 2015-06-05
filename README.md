# node-express
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
#$: todomvc-test    gulp sel  
#		OR 
#$: todomvc-test	java -jar jars/selenium-server-standalone-2.45.0.jar


#Run e2e test

#$: todomvc-test    gulp e2e


# ERROR HANDLING

#if any error while building  
#delete folder  node_modules
#cd node-express     npm install
#cd ~  pkill -f node



#runing selenium server
# Error - "java.net.BindException: Selenium is already running on port 4444
#http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer# web-app
#127.0.0.1

