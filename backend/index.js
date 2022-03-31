import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import normalizePort from './modules/normalizePort';
import db from './db/index';

const PORT = normalizePort(process.env.PORT || '8090');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(cors());

const { database } = db;

app.get('/', (req, res) => {
  res.json('Wazzzzzzuuuuuuuuuuuuuuuuuuuuuuuup!!!!');
});

app.get('/api/notes', (req, res) => {
  database.all('SELECT * FROM notes', (err, rows) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(rows);
    }
  });
});

app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;
  const sql = 'INSERT INTO notes (title, content) VALUES (?, ?)';

  database.run(sql, [title, content], (err) => {
    if (err) {
      res.send(err.message);
    } else {
      database.all('SELECT * FROM notes', (selectAllErr, rows) => {
        if (selectAllErr) {
          res.send(selectAllErr.message);
        } else {
          res.json(rows);
        }
      });
    }
  });
});

app.get('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM notes WHERE id = ? LIMIT 1';

  database.run(sql, [id], (err) => {
    if (err) {
      res.send(err.message);
    } else {
      db.all('sql', (selectAllErr, rows) => {
        if (selectAllErr) {
          res.send(selectAllErr.message);
        } else {
          res.json(rows);
        }
      });
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const sql = 'UPDATE notes SET title = ?, content = ? WHERE id = ?';

  database.run(sql, [title, content, id], (err) => {
    if (err) {
      res.send(err.message);
    } else {
      database.all('SELECT * FROM notes', (selectAllErr, rows) => {
        if (selectAllErr) {
          res.send(selectAllErr.message);
        } else {
          res.json(rows);
        }
      });
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM notes WHERE id = ?';

  database.run(sql, [id], (err) => {
    if (err) {
      res.send(err.message);
    } else {
      database.all('SELECT * FROM notes', (selectAllErr, rows) => {
        if (selectAllErr) {
          res.send(selectAllErr.message);
        } else {
          res.json(rows);
        }
      });
    }
  });
});

app.listen(PORT, 'localhost', () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${PORT}/`);
});
