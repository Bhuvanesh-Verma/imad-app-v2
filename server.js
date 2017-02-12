var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
         'article-one':{
     
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
},
        'article-two':{
     title:`Article Two:Ready to use.`,
    heading:`Article Two`,
    date:`Feb 5 2017`,
    content:`	<div class="p1">
   			<p>
   				Article Two is the second webpage of my server side website.
   				There are two more web pages. Coming soon!!!!
   			</p>
   			<p>
   				At the age of 19, Musk was accepted into Queen's University in Kingston, Ontario, for undergraduate study. In 1992, after spending two years at Queen's University, Musk transferred to the University of Pennsylvania, where, at the age of 24, he received a Bachelor of Science degree in physics from its College of Arts and Sciences, and a Bachelor of Science degree in economics from its Wharton School of Business. Musk extended his studies for one year to finish the second bachelor's degree.[42] While at the University of Pennsylvania, Musk and fellow Penn student Adeo Ressi rented a 10-bedroom fraternity house, using it as an unofficial nightclub.
   			</p>
   			<p>
   				In 1995, at age 24, Musk moved to California to begin a PhD in applied physics and materials science at Stanford University, but left the program after two days to pursue his entrepreneurial aspirations in the areas of the Internet, renewable energy and outer space.[36][43] In 2002, he became a U.S. citizen.
   			</p>`
},
           'article3':{
     title:`Article Two:Ready to use.`,
    heading:`Article Two`,
    date:`Feb 5 2017`,
    content:`		<p>
       			Main article: PayPal
    In March 1999, Musk co-founded X.com, an online financial services and e-mail payment company, with US$10 million from the sale of Zip2.[39][46][48] One year later, the company merged with Confinity,[47][50] which had a money transfer service called PayPal. The merged company focused on the PayPal service and was renamed PayPal in 2001. PayPal's early growth was driven mainly by a viral marketing campaign where new customers were recruited when they received money through the service.[51] Musk was ousted in October 2000 from his role as CEO (although he remained on the board) due to disagreements with other company leadership, notably over his desire to move PayPal's Unix-based infrastructure to Microsoft Windows.[52] In October 2002, PayPal was acquired by eBay for US$1.5 billion in stock, of which Musk received US$165 million.[53] Before its sale, Musk, who was the company's largest shareholder, owned 11.7% of PayPal's shares.
       			</p>`
}
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

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
res.send(createTemp(articles[articleName]));
});
var counter=0;
app.get('/counter',function(req,res)
{
    counter=counter+1;
    res.send(counter.toString());
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
