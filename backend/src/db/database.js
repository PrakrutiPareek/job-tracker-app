const Database = require("better-sqlite3");
const db = new Database("jobs.db");

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
