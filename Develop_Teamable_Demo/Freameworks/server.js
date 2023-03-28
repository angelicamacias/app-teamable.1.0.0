const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')


const url = 'mongodb://127.0.0.1:27017/mydbname'
const client = new MongoClient(url)
const dbName = 'company_db'
const collName = 'employees'


app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/dist'))


app.get('/get-profile', async function(req, res){
    
    await client.connect()
    console.log('Connected successfuly to server')

    const db = client.db(dbName)
    const collection = db.collection(collName)

    const result = await collection.findOne({id: 1})
    console.log(result)
    client.close()

    const response = {}

    if (result !== null) {
        response = {
            name: result.name,
            email: result.email,
            interests: result.interests    
        }
    }
    res.send(response)
       

}) 
app.post('/update-profile', async function(req, res) {
    const payload = req.body
    console.log(payload)


    if (Object.keys(payload).length === 0) {
        res.send({error: "empty payload. Couldn't update user"})

    } else {

        await client.connect()
        console.log('Connected successfuly to server')
    
        const db = client.db(dbName)
        const collection = db.collection(collName)

        payload['id'] = 1
        const updateValues = { $set: payload}
        await collection.updateOne( {id: 1}, updateValues, {upsert: true})
        client.close()
         

        res.send({info: "user profile data updated successfuly"})
    }


})
app.listen(3000, function () {
    console.log("app listening on port 3000")
})


