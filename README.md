# SearchDemoJS

Application performs search request to a selected search engine(google or yahoo). When application starts, it suggests a user to input query string. After user have entered a query, application asks user to enter search engine name (google or yahoo). 
At the end app will make request to a selected search engine and display title and url of the first result.


# Realization

I implemented search functionality using abstract factory. This will allow us to easily add other search engines in the future.
  ```searcher``` - object which contains common methods to fetch data.
  
  ```googleSearcher```, ```yahooSearcher``` - objects that extend ```searcher``` and contain specific parameters such as ```baseUrl``` and ```parseHtml```.
  
  In order to parse html I used cheerio library (https://github.com/cheeriojs/cheerio).
  
  ```SearcheFactory``` - constructor function that creates and returns required searcher object
  
 
In order to communicate with user I created ```io``` object which will communicate with user using console. This allows us to separate functionality and keep code clean.


# Tools
- node.js
- cheerio - library to parse html
- node-fetch - brings window.fetch to node.js
  
# How to run

Within terminal:
- navigare to the root directory
- install node
- install required dependencies (npm install)
- run application: npm start
