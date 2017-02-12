//counter
var button=document.getElementById('counter');

button.onclick=function(){
    
    var req = new XMLHttpRequest();
    
    req.onreadystatechange=function(){
        
        if(req.readyState===XMLHttpRequest.DONE)
        {
            if(req.status===200)
            {
                var counter=req.responseText;
                 var span=document.getElementById('count');
                 span.innerHTML=counter.toString();
            }
        }
        
    };
    
 
   req.open('GET','http://bhuvanesh-verma.imad.hasura-app.io/counter',true);
   req.send(null);
   
};

//Submit

var submit=document.getElementById('Submit');
submit.onclick=function(){
    
    
      var req = new XMLHttpRequest();
    
    req.onreadystatechange=function(){
        
        if(req.readyState===XMLHttpRequest.DONE)
        {
            if(req.status===200)
            {
               var names=req.responseText;
               names=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++)
                {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul=document.getElementById('ti');
                ul.innerHTML=list;
            }
        }
        
    };
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
 
   req.open('GET','http://bhuvanesh-verma.imad.hasura-app.io/getname?name='+name,true);
   req.send(null);
    
 
};

var send=document.getElementById('Send');
send.onClick=function(){
    
    
     var req = new XMLHttpRequest();
    
    req.onreadystatechange=function(){
        
        if(req.readyState===XMLHttpRequest.DONE)
        {
            if(req.status===200)
            {
               var ch=req.responseText;
               ch=JSON.parse(ch);
                var list='';
                for(var i=0;i<ch.length;i++)
                {
                    list += '<li>' + ch[i] + '</li>';
                }
                var ol=document.getElementById('tu');
                ol.innerHTML=list;
            }
        }
        
    };
    var commentInput=document.getElementById('comments');
var comm=commentInput.value;
 
   req.open('GET','http://bhuvanesh-verma.imad.hasura-app.io/getcomm?com='+comm,true);
   req.send(null);
    
};