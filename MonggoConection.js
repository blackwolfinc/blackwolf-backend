
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    console.log("datab base connect ")
//   if (err) throw err

  const db = client.db('db_latihan')

  db.collection('users').find().toArray((err, result) => {
    if (err) throw err

    console.log(result)
  })
})