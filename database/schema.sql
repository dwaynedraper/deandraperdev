-- schema for Postrgres database
-- one table for users
CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  username varchar(255) NOT NULL,
  -- Will I need a password field when using oauth?
  -- password varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

-- table for posts
CREATE TABLE IF NOT EXISTS posts (
  id serial PRIMARY KEY,
  user_id integer NOT NULL,
  category varchar(255) NOT NULL,
  subcategory varchar(255) NOT NULL,
  topic varchar(255) NOT NULL,
  postType varchar(255) NOT NULL,
  upvotes integer NOT NULL DEFAULT 0,
  downvotes integer NOT NULL DEFAULT 0,
  errors integer NOT NULL DEFAULT 0,
  comments varchar(255) NOT NULL,
  -- how do I create a field that can be a foreign key from one of three tables?
  -- Do I need to create three tables? null allowed?
  -- And then only one of the three tables will have a value?
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

-- table for bugfixes
CREATE TABLE IF NOT EXISTS bugfixes (
  id serial PRIMARY KEY,
);

-- table for little things 
CREATE TABLE IF NOT EXISTS little_things (
  id serial PRIMARY KEY,
);

-- table for mini tutorials
CREATE TABLE IF NOT EXISTS mini_tutorials (
  id serial PRIMARY KEY,
);

--table for comments
CREATE TABLE IF NOT EXISTS comments (
  id serial PRIMARY KEY,
  user_id integer NOT NULL,
  post_id integer NOT NULL,
  comment varchar(255) NOT NULL,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);