DROP TABLE IF EXISTS stories;

CREATE TABLE stories (
    id serial PRIMARY KEY,
    title text NOT NULL,
    content text,
    published timestamp DEFAULT now()
);

ALTER SEQUENCE stories_id_seq RESTART WITH 1000;

INSERT INTO stories (title, content) VALUES
('Test Post 1', 'The quick brown fox jumped over the lazy dog...'),
('Test Post 2', 'The quick brown fox jumped over the lazy dog...'),
('Test Post 3', 'The quick brown fox jumped over the lazy dog...'),
('Test Post 4', 'The quick brown fox jumped over the lazy dog...'),
('Test Post 5', 'The quick brown fox jumped over the lazy dog...'),
('Test Post 6', 'The quick brown fox jumped over the lazy dog...'),
('Test Post 7', 'The quick brown fox jumped over the lazy dog...'),
('Test Post 8', 'The quick brown fox jumped over the lazy dog...'),
('Test Post 9', 'The quick brown fox jumped over the lazy dog...'),
('Test Post 10', 'The quick brown fox jumped over the lazy dog...');