DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS reactions_to_comments CASCADE;
DROP TABLE IF EXISTS reactions CASCADE;
DROP TABLE IF EXISTS reactions_to_video CASCADE;
DROP TABLE IF EXISTS list CASCADE;
DROP TABLE IF EXISTS video_to_list CASCADE;
DROP TABLE IF EXISTS video CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  "name" VARCHAR(30) NOT NULL CHECK("name" != ''),
  nickname VARCHAR(30) NOT NULL CHECK(nickname != ''),
  email VARCHAR(40) NOT NULL CHECK(email != ''),
  "password" VARCHAR(30) NOT NULL,
  birth_date DATE NOT NULL CHECK(birth_date > '1930-01-01' AND birth_date <= current_date )
);

CREATE TABLE video (
  id SERIAL PRIMARY KEY,
  creator_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED,
  "name" VARCHAR(30) NOT NULL CHECK("name" != ''),
  "description" VARCHAR(300) NOT NULL DEFAULT 'No description',
  upload_date DATE NOT NULL DEFAULT current_date
  -- likes NUMERIC(7) NOT NULL DEFAULT 0 CHECK (likes >= 0),
  -- dislikes NUMERIC(7) NOT NULL DEFAULT 0 CHECK (dislikes >= 0),
);

CREATE TABLE list (
  id SERIAL PRIMARY KEY,
  creator_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED,
  isPublic BOOLEAN NOT NULL,
  "circle" VARCHAR(30) NOT NULL,
  "description" VARCHAR(300) NOT NULL DEFAULT 'No description'
);

CREATE TABLE reactions(
  id SERIAL PRIMARY KEY,
  creator_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED,
  isLike BOOLEAN NOT NULL
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  creator_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED,
  video_id INT NOT NULL REFERENCES video (id) ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED,
  "text" VARCHAR(800) NOT NULL CHECK("text" != '')
  -- likes NUMERIC(7) NOT NULL DEFAULT 0 CHECK (likes >= 0),
  -- dislikes NUMERIC(7) NOT NULL DEFAULT 0 CHECK (dislikes >= 0),
);

CREATE TABLE video_to_list (
  video_id INT NOT NULL REFERENCES video (id),
  list_id INT NOT NULL REFERENCES list (id),
  PRIMARY KEY (video_id, list_id)
);

CREATE TABLE reactions_to_video (
  video_id INT NOT NULL REFERENCES video (id),
  reactions_id INT NOT NULL REFERENCES reactions (id),
  PRIMARY KEY (video_id, reactions_id)
);

CREATE TABLE reactions_to_comments (
  reactions_id INT NOT NULL REFERENCES reactions (id),
  comments_id INT NOT NULL REFERENCES comments (id),
  PRIMARY KEY (reactions_id, comments_id)
);