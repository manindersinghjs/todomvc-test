# node-express
#node v0.12.0
#gulp 3.8.11
#selenium-server 2.45.0
#selenium-webdriver 2.45.1
#webdriverio 2.4.5
    

#e2e Testing
#cucumber 0.4.8
#headless browser
#zombie 4.0.8 
#selenium-webdriver 2.45.1

#cd web-test     npm install ---> to install all dependencies

## Run e2e test

#Start Selenium Server 
#cd web-test    gulp sel  

#	OR 

#cd web-test	java -jar jars/selenium-server-standalone-2.45.0.jar


#Start e2e test
#cd web-test    gulp e2e

#cd web-test    gulp test



# ERROR HANDLING

#if any error while building  
#delete folder  node_modules
#cd node-express     npm install
#cd ~  pkill -f node



#runing selenium server
# Error - "java.net.BindException: Selenium is already running on port 4444
#http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer# web-app
#127.0.0.1

