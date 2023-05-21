const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('sqlite');

db.serialize(() => {
  const sql = `
    CREATE TABLE IF NOT EXISTs shelves
    (id integer primary key, image, title TEXT, year TEXT, tag TEXT)
  `;
  db.run(sql);
});

class Images {
  static all(cb) {
    db.all('SELECT * FROM shelves', cb);
  }

  static find(cb, id) {
    db.get('SELECT * FROM shelves WHERE id = ?', id, cb);
  }

  static create(cb, data) {
    const sql = `
      INSERT INFO
      shelves(image, title, year, tag)
      VALUES(?, ?, ?, ?);
      select last_insert_rowid();
    `;
    db.run(sql, data.image, data.title, data.year, data.tag);
  }

  static delete(cb, id) {
    if (!id) return cb(new Error('less the query id'));
    db.run('DELETE FROM shelves WHERE id = ?', id, cb);
  }

  static update(cb, data) {
    const sql = `
      UPDATE shelves
      SET image=?, title=?, year=?, tag=?
      WHERE id=?
    `;
    db.run(sql, data.image, data.title, data.year, data.tag, data.id, cb);
  }
}
module.exports.Images = Images;
