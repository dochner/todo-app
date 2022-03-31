import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();
const dbName = 'notes.db';

// eslint-disable-next-line no-bitwise
const initDatabase = (name) => new sqlite3.Database(`./db/${name}`, sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE);

const database = initDatabase(dbName);

database.serialize(() => {
  const sqlNotes = `
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      content TEXT);
  `;

  database.run(sqlNotes, [], (err) => {
    if (err) {
      throw err;
    }
  });

  database.run('DROP TABLE IF EXISTS language', [], (err) => {
    if (err) {
      throw err;
    }
  });

  /**
   * Language table creation
   */
  const sqlLang = `CREATE TABLE IF NOT EXISTS language (
    id TEXT PRIMARY KEY,
    interface TEXT);
  `;

  database.run(sqlLang, [], (err) => {
    if (err) {
      throw err;
    }
  });

  /**
   * Insertion of translations for the interface
   */
  const statement = database.prepare('INSERT INTO language (id, interface) VALUES (?, ?)');
  const interfaceEN = `{
    "del": "Delete",
    "edit": "Edit",
   }`;

  const interfacePT = `{
    "del": "Deletar",
    "edit": "Editar",
   }`;

  statement.run('EN', interfaceEN);
  statement.run('PT', interfacePT);
  statement.finalize();
});

/**
 * Search for the translation interface JSON Object in the database
 * @param {string} lang
 * @returns Returns the interface text translated
 */
export const localize = (lang) => {
  const sql = 'SELECT interface FROM language WHERE id = ?';
  const statement = database.prepare(sql);
  const result = statement.get(lang);
  statement.finalize();
  return result;
};

export default {
  database,
  localize,
};
