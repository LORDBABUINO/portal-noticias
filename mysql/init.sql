CREATE TABLE notices(
	id_notice int not null primary key auto_increment,
	title varchar(100),
	content text,
	creation_date timestamp default current_timestamp
);

INSERT INTO notices
(title, content)
VALUES('titulo da notícia', 'conteúdo da notícia');

INSERT INTO notices
(title, content)
VALUES('titulo da notícia', 'conteúdo da notícia');
