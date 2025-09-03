import { MongoClient, type Db } from "mongodb"

const uri = process.env.MONGODB_URI
if (!uri) {
  throw new Error("MONGODB_URI is not set. Add it in Project Settings -> Environment Variables.")
}

let client: MongoClient | undefined
let db: Db | undefined

export async function getDb() {
  if (db) return db
  if (!client) {
    //@ts-expect-error
    client = new MongoClient(uri)
  }
  //@ts-expect-error
  if (!client.topology?.isConnected()) {
    await client.connect()
  }
  db = client.db() // default database from URI
  return db
}
