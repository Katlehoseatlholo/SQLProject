CREATE TABLE if not exists greetings

(
  id integer PRIMARY KEY AUTOINCREMENT,
  language text UNIQUE,
  greeting text

)