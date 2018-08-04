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
  var max=8;
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
  html=html+"</ul><div class='text-center'><a href='.' class='btn btn-primary'>Retry</a></div>";
  document.getElementById("final").innerHTML=html;
  
  var canvaselem=document.createElement('canvas');
  canvaselem.setAttribute('id', 'confetti');
  canvaselem.setAttribute('height','1');
  canvaselem.setAttribute('width','1');

  document.body.appendChild(canvaselem);
  document.getElementById("confetti").onclick=function() {this.parentNode.removeChild(this);};
  conf();
}
