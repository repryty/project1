const express = require('express');
const app = express();
var path = require('path');

var sort = function(input){
  var answer, tmp, j=0;
  answer = input.split(" ");
  var how=answer.length;
  while(true){
    for(var i=1; i<how; i++){
      answer[i-1] = Number(answer[i-1]);
        answer[i] = Number(answer[i]);
      if(answer[i-1]>answer[i]){
        
        tmp=answer[i-1];
        answer[i-1]=answer[i];
        answer[i]=tmp;
      }
    }
    for(var i=1; i<how; i++){
      if(answer[i-1]>answer[i]) j++;
    }
    if(j==0) break;
    else j=0;
    console.log("Done!");
    if(j>10000) break;
  }
  return answer;
}

var lunch = function(input){
  //배열로 입력
  //이진탐색트리가 좋을듯함

  

}

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
})

app.get('/sort', (req, res) => {
  res.sendFile(__dirname + "/html/sort.html");
})

app.get('/get', (req, res) => {
  var q1 = req.query.q;
  res.send(q1);
})

app.get('/lunch', (req, res) => {
  res.sendFile(__dirname+"/html/lunch.html")
})

app.get('/result', (req, res) =>{
  var input = req.query.q.replace("%20", 0);
  var answer;
  if(req.query.t="sort") answer = sort(input);

  res.send(`{"result":"${answer}"}`)
})

app.listen(process.env.PORT || 3000, ()=>{
  console.log("서버 시작");
})