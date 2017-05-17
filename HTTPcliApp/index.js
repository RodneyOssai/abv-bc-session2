const http =require('http'); //Imported require to be able to send http requests via node.js

const options = { 
	host:'newsapi.org',
	port: 80,
	path: '/v1/articles?source=techradar&sortBy=top&apiKey=be276a92933b438f87ddeca2fc8b9350',
	method: 'GET',
};

http.request(options,function(res){ // Make http requests with options constant as request and function(res) as response.
	let body = '';

	res.on('data',function(chunk){ // the res.on is called to recieve a chunk of data as response and the data is put into the body variable.
		body+= chunk;
	});
  res.on('end', function(){ // At the end of connection we parse the data in body using json parse and put it into newsContent variable
      	let newsContent = JSON.parse(body); 
      	let newsSource =newsContent.source;
      	let newsTitle = newsContent.articles[0].title;
      	let newsDescription = newsContent.articles[0].description;  // I pick up only important data in the whole chunk of Json data and put them into variables
      	let newsTitle1 = newsContent.articles[1].title;
      	let newsDescription1 = newsContent.articles[1].description;
      	let newsTitle2 = newsContent.articles[2].title;
      	let newsDescription2 = newsContent.articles[2].description; 

      	console.log("News Source =>" + newsSource +".");
      	console.log("");
      	console.log("First News Title =>" + newsTitle + ".");     // I print the content of those variables using console.log()
      	console.log("Description =>" + newsDescription + ".");
      	console.log("");
      	console.log("Second News Title =>" + newsTitle1 + ".");
      	console.log("Description =>" + newsDescription1 + ".");
      	console.log("");
      	console.log("3rd News Title =>" + newsTitle2 + ".");
      	console.log("Description =>" + newsDescription2 + ".");
    })

	}).end();

// resource - http://forum.espruino.com/conversations/1364/