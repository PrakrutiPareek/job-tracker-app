const Database = require("better-sqlite3");
const db = new Database("jobs.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS saved_jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    jobId TEXT UNIQUE,
    jobRole TEXT ,
    company TEXT ,
    location TEXT,
    salary TEXT,
    url TEXT ,
    source TEXT DEFAULT 'Adzuna',
    note TEXT DEFAULT ''
    )
    `);

module.exports = db;
