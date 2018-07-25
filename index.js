document.getElementById("result").onclick = function(){
  var data=document.getElementById("data").value.trim();
  data = data.split(":").pop().split("\n");
  for(var i=0;i<data.length;i++){
    // if(data[i]==""){
    //   data.splice(i,1);
    // }
    data = data.filter(Boolean)
    data[i]=data[i].split(".").pop().trim();
  }
  console.log(data);
  var result=[];
  var max=3;
  while(result.length<max){
    var x = Math.floor((Math.random() * data.length));
    if(result.indexOf(x)<0){
      result.push(x);
    }
  }
  console.log(result);
  var html="<h3 style='text-align:center'>The Winners are:</h3><br><ul style='text-align:justify'>";
  for(var i=0;i<result.length;i++){
    html=html+"<li>"+data[result[i]]+"</li>";
  }
  html=html+"</ul>";
  document.getElementById("final").innerHTML=html;
}