
const { Pool } = require('pg');

const PG_URI = 'postgres://jqszhisb:2DN5CGtL8dnA4GeTxh5c9rdS4_8jH54e@drona.db.elephantsql.com/jqszhisb';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };

