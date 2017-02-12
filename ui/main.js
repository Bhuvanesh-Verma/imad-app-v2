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
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('Submit');
submit.onclick=function(){
    
    
    
    var name=['name1','name2','name3'];
    var list='';
    for(var i=0;i<name.length;i++)
    {
        list += '<li>' + name[i] + '</li>';
    }
    var ul=document.getElementById('ti');
    ui.innerHTML=list;
};