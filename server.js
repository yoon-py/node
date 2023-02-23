const express = require('express')
const app = express()
const bodyParser= require('body-parser')
app.use(express.urlencoded({ extended: true }));
const MongoClient = require('mongodb').MongoClient

var db;
MongoClient.connect('mongodb+srv://yoonhwan:02iseoulyou@cluster0.mlm6cii.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (에러, client) {
	if (에러) return console.log(에러)
	db = client.db('todoapp');

	});
	app.listen(8080, function () {
		console.log('listening on 8080')
	});
;

app.get('/write', function(요청, 응답) { 
    응답.sendFile(__dirname +'/write.html')
});

app.post('/add', function(요청, 응답){
    응답.send('전송완료');
    db.collection('post').insertOne( { 제목 : 요청.body.title, 날짜 : 요청.body.date } , function(){
      console.log('저장완료')
    });
  });