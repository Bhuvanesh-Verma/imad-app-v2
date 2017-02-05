var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var art1={
    title:`Article One:Ready to use.`,
    heading:`Article One`,
    date:`Feb 5 2017`,
    content:`	<p class="p1">
   				Article One is the first webpage of my server side website.
   				There are two more web pages. Coming soon!!!!
   			</p>
   			<p>
   				The Math Explorers' Club is an NSF supported project that develops materials and activites to give middle school and high school students an experience of more advanced topics in mathematics. These materials are directed towards teachers, who are welcome to adapt and copy the materials in any way they see fit, as well as towards more advanced students, who may wish to learn independently.
   			</p>`
};
function createTemp(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemp=`<!doctype html>
<html>
  
  <head>
        <link href="/ui/style.css" rel="stylesheet" />
       <title>${title}</title>
    </head>
 
   <body>
       <div class="hu">
      <div class="st">
      	<a href="/">Home</a>
      	 <a href="/article-one">Article One</a>
                <a href="/article-two">Article Two</a>
                <a href="/article3">Article Three</a>
   		</div>
   		<hr/>
   		<h3>${heading}</h3>
   		<div class="date">
   			${date}
   		</div>
   		<div class="div1">
   		${content}
   		</div>
</div>
 </body>

</html>
`;
return htmlTemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article3',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
