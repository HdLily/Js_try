new Mongo()
new Mongo(<host>)
new Mongo(<host: 27017>)

conn = new Mongo();
db = conn.getDB("myDatabase");