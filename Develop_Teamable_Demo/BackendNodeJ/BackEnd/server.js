const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/'))

app.post('/save-task', function(req, res){
    const taskObj = req.body
    console.log("saved task:", taskObj)
    res.send({savedTask: taskObj.task})

})

app.get('/get-tasks', function(req, res){
    const tasks = [
        "Write JS code",
        "Go to the gym", 
        "Read 4000 pages"
    ]
    
    res.send({tasks: tasks})
})

app.listen(3000, function () {
    console.log("app listening on port 3000")
})