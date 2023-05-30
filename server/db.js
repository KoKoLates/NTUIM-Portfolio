const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('sqlite');
db.serialize(() => {
  const sql = `
    CREATE TABLE IF NOT EXISTS comments
    (id integer primary key, contents TEXT)
  `;
  db.run(sql);
});

class Comments {
  static all(cb) {
    db.all('SELECT * FROM comments', cb);
  }

  static find(cb, id) {
    db.get('SELECT * FROM comments WHERE id = ?', id, cb);
  }

  static create(data, cb) {
    const sql = `
    INSERT INTO comments(contents)
    VALUES(?); SELECT last_insert_rowid();
    `
    db.run(sql, data.contents, cb);
  }

  static delete(cb, id) {
    if (!id) return new cb(new Error('no id'));
    db.run('DELETE FROM comments WHERE id = ?', id, cb);
  }

  static update(cb, data) {
    const sql = `
      UPDATE comments 
      SET contents = ? WHERE id = ?
    `;
    db.run(sql, data.contents, cb)
  }
}

module.exports.Comments = Comments;
