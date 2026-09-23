const path = require("path");
const Database = require("better-sqlite3");

const dbPath =
  process.env.DB_PATH || path.join(process.cwd(), "data", "jobs.db");
const db = new Database(dbPath);

db.exec(`
    CREATE TABLE IF NOT EXISTS saved_jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    jobId INTEGER UNIQUE ,
    jobRole TEXT ,
    company TEXT ,
    location TEXT,
    salary TEXT,
    url TEXT ,
    status TEXT DEFAULT 'Saved',
    source TEXT DEFAULT 'Adzuna',
    notes TEXT DEFAULT '',
    createdAt TEXT
    )
    `);

module.exports = db;
