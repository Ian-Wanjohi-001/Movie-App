CREATE DATABASE MovieApp2;

USE MovieApp2;

CREATE TABLE Users (
  user_id INT PRIMARY KEY IDENTITY(1,1),
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  preferences VARCHAR(255),
);

INSERT INTO Users (username, email, password)
VALUES
  ('john_doe', 'johndoe@example.com', 'password123'),
  ('jane_smith', 'janesmith@example.com', 'secret456'),
  ('mike_wilson', 'mikewilson@example.com', 'qwerty789');

 SELECT * FROM Movies;
 CREATE TABLE Movies; (
  movie_id INT PRIMARY KEY IDENTITY(1,1),
  title VARCHAR(255) NOT NULL,
  synopsis TEXT,
  cast VARCHAR(255),
  crew VARCHAR(255),
  release_date DATE,
  runtime INT,
);

INSERT INTO Movies (title, synopsis, cast, crew, release_date, runtime)
VALUES
  ('Inception', 'A thief who steals corporate secrets by using dream-sharing technology.', 'Leonardo DiCaprio, Joseph Gordon-Levitt', 'Christopher Nolan', '2010-07-16', 148),
  ('The Dark Knight', 'Batman sets out to dismantle the remaining criminal organizations.', 'Christian Bale, Heath Ledger', 'Christopher Nolan', '2008-07-18', 152),
  ('Pulp Fiction', 'The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine.', 'John Travolta, Uma Thurman', 'Quentin Tarantino', '1994-10-14', 154),
  ('Fight Club', 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club.', 'Brad Pitt, Edward Norton', 'David Fincher', '1999-10-15', 139),
  ('The Shawshank Redemption', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption.', 'Tim Robbins, Morgan Freeman', 'Frank Darabont', '1994-09-23', 142),
  ('The Godfather', 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.', 'Marlon Brando, Al Pacino', 'Francis Ford Coppola', '1972-03-24', 175),
  ('The Matrix', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 'Keanu Reeves, Laurence Fishburne', 'Lana Wachowski, Lilly Wachowski', '1999-03-31', 136),
  ('Forrest Gump', 'The story of Forrest Gump, a simple man who unwittingly becomes part of key events in 20th-century America.', 'Tom Hanks, Robin Wright', 'Robert Zemeckis', '1994-07-06', 142),
  ('Goodfellas', 'The story of Henry Hill and his life in the mob, covering his relationship with his wife and his mob partners.', 'Robert De Niro, Ray Liotta', 'Martin Scorsese', '1990-09-19', 146),
  ('The Lord of the Rings: The Fellowship of the Ring', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring.', 'Elijah Wood, Ian McKellen', 'Peter Jackson', '2001-12-19', 178),
  ('The Lion King', 'A young lion prince flees his kingdom after the murder of his father.', 'Matthew Broderick, James Earl Jones', 'Roger Allers, Rob Minkoff', '1994-06-15', 88),
  ('Titanic', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 'Leonardo DiCaprio, Kate Winslet', 'James Cameron', '1997-12-19', 194),
  ('Star Wars: Episode IV - A New Hope', 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire.', 'Mark Hamill, Harrison Ford', 'George Lucas', '1977-05-25', 121),
  ('The Avengers', 'Earths mightiest heroes must come together and learn to fight as a team.', 'Robert Downey Jr., Chris Evans', 'Joss Whedon', '2012-05-04', 143),
  ('Jurassic Park', 'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the parks cloned dinosaurs to run loose.', 'Sam Neill, Laura Dern', 'Steven Spielberg', '1993-06-11', 127),
  ('The Godfather: Part II', 'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.', 'Al Pacino, Robert De Niro', 'Francis Ford Coppola', '1974-12-20', 200),
  ('The Shawshank Redemption', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption.', 'Tim Robbins, Morgan Freeman', 'Frank Darabont', '1994-09-23', 142),
  ('Schindlers List', 'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', 'Liam Neeson, Ralph Fiennes', 'Steven Spielberg', '1993-12-15', 195),
  ('The Dark Knight', 'Batman sets out to dismantle the remaining criminal organizations.', 'Christian Bale, Heath Ledger', 'Christopher Nolan', '2008-07-18', 152),
  ('Pulp Fiction', 'The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine.', 'John Travolta, Uma Thurman', 'Quentin Tarantino', '1994-10-14', 154),
  ('Fight Club', 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club.', 'Brad Pitt, Edward Norton', 'David Fincher', '1999-10-15', 139),
  ('Forrest Gump', 'The story of Forrest Gump, a simple man who unwittingly becomes part of key events in 20th-century America.', 'Tom Hanks, Robin Wright', 'Robert Zemeckis', '1994-07-06', 142),
  ('The Matrix', 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 'Keanu Reeves, Laurence Fishburne', 'Lana Wachowski, Lilly Wachowski', '1999-03-31', 136),
  ('Goodfellas', 'The story of Henry Hill and his life in the mob, covering his relationship with his wife and his mob partners.', 'Robert De Niro, Ray Liotta', 'Martin Scorsese', '1990-09-19', 146),
  ('The Lord of the Rings: The Fellowship of the Ring', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring.', 'Elijah Wood, Ian McKellen', 'Peter Jackson', '2001-12-19', 178),
  ('The Lion King', 'A young lion prince flees his kingdom after the murder of his father.', 'Matthew Broderick, James Earl Jones', 'Roger Allers, Rob Minkoff', '1994-06-15', 88),
  ('Titanic', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 'Leonardo DiCaprio, Kate Winslet', 'James Cameron', '1997-12-19', 194),
  ('Star Wars: Episode IV - A New Hope', 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire.', 'Mark Hamill, Harrison Ford', 'George Lucas', '1977-05-25', 121),
  ('The Avengers', 'Earths mightiest heroes must come together and learn to fight as a team.', 'Robert Downey Jr., Chris Evans', 'Joss Whedon', '2012-05-04', 143),
  ('Jurassic Park', 'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the parks cloned dinosaurs to run loose.', 'Sam Neill, Laura Dern', 'Steven Spielberg', '1993-06-11', 127),
  ('Inception', 'A thief who steals corporate secrets by using dream-sharing technology.', 'Leonardo DiCaprio, Joseph Gordon-Levitt', 'Christopher Nolan', '2010-07-16', 148),
  ('The Godfather', 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.', 'Marlon Brando, Al Pacino', 'Francis Ford Coppola', '1972-03-24', 175),
  ('Interstellar', 'A team of explorers travels through a wormhole in space to ensure humanity survival.', 'Matthew McConaughey, Anne Hathaway', 'Christopher Nolan', '2014-11-07', 169),
  ('The Social Network', 'The story of the creation of Facebook and the legal battles that followed.', 'Jesse Eisenberg, Andrew Garfield', 'David Fincher', '2010-10-01', 120),
  ('Gladiator', 'A former Roman General seeks vengeance for the murder of his family.', 'Russell Crowe, Joaquin Phoenix', 'Ridley Scott', '2000-05-05', 155),
  ('The Departed', 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.', 'Leonardo DiCaprio, Matt Damon', 'Martin Scorsese', '2006-10-06', 151),
  ('Inglourious Basterds', 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner vengeful plans.', 'Brad Pitt, Christoph Waltz', 'Quentin Tarantino', '2009-08-21', 153),
  ('Inception', 'A thief who steals corporate secrets by using dream-sharing technology.', 'Leonardo DiCaprio, Joseph Gordon-Levitt', 'Christopher Nolan', '2010-07-16', 148),
  ('The Dark Knight', 'Batman sets out to dismantle the remaining criminal organizations.', 'Christian Bale, Heath Ledger', 'Christopher Nolan', '2008-07-18', 152),
  ('Pulp Fiction', 'The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine.', 'John Travolta, Uma Thurman', 'Quentin Tarantino', '1994-10-14', 154);


CREATE TABLE Genres (
  genre_id INT PRIMARY KEY IDENTITY(1,1),
  genre_name VARCHAR(255) NOT NULL
);

INSERT INTO Genres (genre_name)
VALUES
  ('Action'),
  ('Thriller'),
  ('Drama');


CREATE TABLE Movie_Genres (
  movie_id INT,
  genre_id INT,
  PRIMARY KEY (movie_id, genre_id),
  FOREIGN KEY (movie_id) REFERENCES Movies(movie_id),
  FOREIGN KEY (genre_id) REFERENCES Genres(genre_id)
);

INSERT INTO Movie_Genres (movie_id, genre_id)
VALUES
  (1, 1),
  (2, 1),
  (2, 2),
  (3, 3);


CREATE TABLE Reviews (
  review_id INT PRIMARY KEY IDENTITY(1,1),
  movie_id INT,
  user_id INT,
  review_content TEXT,
  rating DECIMAL(3,2),
  FOREIGN KEY (movie_id) REFERENCES Movies(movie_id),
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

INSERT INTO Reviews (movie_id, user_id, review_content, rating)
VALUES
  (1, 1, 'Great movie!', 5),
  (1, 2, 'One of my favorites.', 4),
  (2, 3, 'Amazing performance by Heath Ledger.', 5);


CREATE TABLE Ratings (
  rating_id INT PRIMARY KEY IDENTITY(1,1),
  movie_id INT,
  user_id INT,
  rating_value DECIMAL(3,2),
  FOREIGN KEY (movie_id) REFERENCES Movies(movie_id),
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

INSERT INTO Ratings (movie_id, user_id, rating_value)
VALUES
  (1, 1, 4),
  (1, 2, 5),
  (2, 3, 4);

CREATE TABLE RecentlyViewed (
  record_id INT PRIMARY KEY IDENTITY(1,1),
  user_id INT,
  movie_id INT,
  view_date DATE,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  FOREIGN KEY (movie_id) REFERENCES Movies(movie_id)
);

INSERT INTO RecentlyViewed (user_id, movie_id, view_date)
VALUES
  (1, 1, '2023-06-19'),
  (1, 2, '2023-06-20'),
  (2, 3, '2023-06-18'),
  (2, 4, '2023-06-20'),
  (3, 5, '2023-06-19'),
  (3, 6, '2023-06-21');

  SELECT * FROM Users;
  