DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS reactions_to_comments CASCADE;
DROP TABLE IF EXISTS reactions CASCADE;
DROP TABLE IF EXISTS reactions_to_video CASCADE;
DROP TABLE IF EXISTS list CASCADE;
DROP TABLE IF EXISTS video_to_list CASCADE;
DROP TABLE IF EXISTS video CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS access_list CASCADE;
DROP TABLE IF EXISTS access_list_to_users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  "name" VARCHAR(30) NOT NULL CHECK("name" != ''),
  nickname VARCHAR(30) NOT NULL CHECK(nickname != ''),
  email VARCHAR(40) NOT NULL CHECK(email != ''),
  "password" VARCHAR(30) NOT NULL CHECK("password" != ''),
  birth_date DATE NOT NULL CHECK(birth_date > '1930-01-01' AND birth_date <= current_date )
);

CREATE TABLE video (
  id SERIAL PRIMARY KEY,
  creator_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED,
  "name" VARCHAR(30) NOT NULL CHECK("name" != ''),
  "description" VARCHAR(300) NOT NULL DEFAULT 'No description',
  upload_date DATE NOT NULL DEFAULT current_date,
  likes NUMERIC(7) NOT NULL DEFAULT 0 CHECK (likes >= 0),
  dislikes NUMERIC(7) NOT NULL DEFAULT 0 CHECK (dislikes >= 0)
);

CREATE TABLE access_list (
  id SERIAL PRIMARY KEY,
  creator_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED,
  "name" VARCHAR(30) NOT NULL DEFAULT 'List #'
);

CREATE TABLE list (
  id SERIAL PRIMARY KEY,
  creator_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED,
  access_type VARCHAR(30) NOT NULL,
  access_list_id INT DEFAULT NULL REFERENCES access_list (id) ON DELETE CASCADE ON UPDATE CASCADE DEFERRABLE INITIALLY DEFERRED,
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
  "text" VARCHAR(800) NOT NULL CHECK("text" != ''),
  likes NUMERIC(7) NOT NULL DEFAULT 0 CHECK (likes >= 0),
  dislikes NUMERIC(7) NOT NULL DEFAULT 0 CHECK (dislikes >= 0)
);



CREATE TABLE access_list_to_users (
  access_list_id INT NOT NULL REFERENCES access_list (id),
  "user_id" INT NOT NULL REFERENCES users (id),
  PRIMARY KEY (access_list_id, "user_id")
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






INSERT INTO users (name,nickname,email,password,birth_date)
VALUES
  ('Ramona Mcpherson','Cameron Coleman','sed.est@google.couk',7205,'23-03-79'),
  ('Charles Parsons','Howard Sherman','sed.nulla@google.org',7908,'02-03-81'),
  ('Nicole Warner','Bernard Shepard','sagittis.lobortis@icloud.net',5336,'05-07-70'),
  ('Zane Stuart','Knox Coffey','mollis.non@google.org',7142,'06-08-79'),
  ('Rowan Hart','Craig Bush','dictum.ultricies@yahoo.net',7721,'26-01-74');



INSERT INTO video (creator_id,name,description,upload_date)
VALUES
  (3,'in molestie tortor','eget, ipsum.','Oct 6, 2024'),
  (3,'vel lectus. Cum','eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna.','Dec 28, 2023'),
  (1,'posuere cubilia Curae','arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras','Aug 18, 2023'),
  (4,'Proin dolor. Nulla','sed turpis nec mauris blandit mattis. Cras eget nisi','Mar 1, 2025'),
  (2,'ultrices a, auctor','cursus luctus, ipsum leo elementum','Aug 30, 2024');


INSERT INTO access_list (creator_id,name)
VALUES
  (1,'in molestie tortor'),
  (2,'vel lectus. Cum'),
  (1,'posuere cubilia Curae'),
  (3,'Proin dolor. Nulla'),
  (1,'ultrices a, auctor');


INSERT INTO list (creator_id,access_type,access_list_id,description)
VALUES
  (1,'aptent',3,'non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,'),
  (3,'enim.',4,'lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet,'),
  (1,'commodo',4,'aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris'),
  (3,'Mauris',3,'arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque'),
  (1,'Vivamus',4,'Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem');

INSERT INTO reactions (creator_id,isLike)
VALUES
  (5,'True'),
  (5,'True'),
  (5,'True'),
  (2,'False'),
  (2,'True');


INSERT INTO comments (creator_id,video_id,text)
VALUES
  (2,3,'mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate,'),
  (4,2,'felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec'),
  (3,3,'ligula. Nullam enim. Sed nulla ante, iaculis nec,'),
  (2,3,'vitae mauris'),
  (2,4,'mollis non, cursus non, egestas a,');



INSERT INTO access_list_to_users (user_id,access_list_id)
VALUES
  (5,1),
  (2,2),
  (1,2),
  (3,3),
  (3,2);


INSERT INTO video_to_list (video_id,list_id)
VALUES
  (3,5),
  (4,4),
  (5,2),
  (5,3),
  (3,3);


INSERT INTO reactions_to_video (video_id,reactions_id)
VALUES
  (4,4),
  (3,3),
  (2,1),
  (4,1),
  (2,2);


INSERT INTO reactions_to_comments (reactions_id,comments_id)
VALUES
  (5,3),
  (5,4),
  (2,5),
  (4,1),
  (4,4);
