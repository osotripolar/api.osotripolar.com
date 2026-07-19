DROP TABLE IF EXISTS cash_sessions_sources;
DROP TABLE IF EXISTS movements;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS cash_sessions;
DROP TABLE IF EXISTS money_sources;

-- ejemplo: salud, comida, transporte, musica, diseño, gastos mensuales, destroy, etc
CREATE TABLE categories(
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

--ejemplo: yape, plin, efectivo, etc, caja chica
CREATE TABLE money_sources (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0, 1))
);

--esta es la asesion, solo se crea
CREATE TABLE cash_sessions(
  id INTEGER PRIMARY KEY,
  description TEXT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cash_sessions_sources(
  id INTEGER PRIMARY KEY,
  cash_session_id INTEGER NOT NULL,
  mony_source_id INTEGER NOT NULL,
  starting_balance INTEGER DEFAULT 0,

  FOREIGN KEY (cash_session_id) REFERENCES cash_sessions(id) ON DELETE CASCADE,
  FOREIGN KEY (mony_source_id) REFERENCES money_sources(id) ON DELETE CASCADE
);

CREATE TABLE movements(
  id INTEGER PRIMARY KEY,
  cash_session_id INTEGER NOT NULL,

  amount_cents INTEGER NOT NULL CHECK (amount_cents > 0),

  from_mony_source_id INTEGER NULL,
  to_mony_source_id INTEGER NULL,

  category_id INTEGER NULL,

  description TEXT NULL,

  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (cash_session_id) REFERENCES cash_sessions(id) ON DELETE CASCADE,
  FOREIGN KEY (from_mony_source_id) REFERENCES money_sources(id) ON DELETE CASCADE,
  FOREIGN KEY (to_mony_source_id) REFERENCES money_sources(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);