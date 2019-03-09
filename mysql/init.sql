CREATE TABLE news(
	id_news int not null primary key auto_increment,
	title varchar(100),
	content text,
	creation_date timestamp default current_timestamp
);

INSERT INTO news
(title, content)
VALUES('titulo da notícia', 'conteúdo da notícia');

INSERT INTO news
(title, content)
VALUES('titulo da notícia', 'conteúdo da notícia');
