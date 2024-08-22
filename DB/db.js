// import pkg from "pg";
import pg from "pg"

// const { Pool } = pkg;

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Forumdb',
    password: 'postgres',
    port: 5432,
});

export default pool;