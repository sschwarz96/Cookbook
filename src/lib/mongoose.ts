import mongoose from "mongoose";

const uri = process.env.MONGODB_URI!;
if (!uri) throw new Error("Please set MONGODB_URI in your environment");

type GlobalMongoose = typeof globalThis & {
  _mongooseConn?: typeof mongoose;
  _mongoosePromise?: Promise<typeof mongoose>;
};

const globalForMongoose = global as GlobalMongoose;

export async function dbConnect() {
  if (globalForMongoose._mongooseConn) return globalForMongoose._mongooseConn;

  if (!globalForMongoose._mongoosePromise) {
    globalForMongoose._mongoosePromise = mongoose.connect(uri, {
      // Optional: additional options
      // maxPoolSize: 10,
    }).then(m => m);
  }

  globalForMongoose._mongooseConn = await globalForMongoose._mongoosePromise;
  return globalForMongoose._mongooseConn;
}
