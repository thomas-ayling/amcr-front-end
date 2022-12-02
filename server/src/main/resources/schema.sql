create table feedback
(
    id            serial primary key,
    first_name    text,
    last_name     text,
    email_address text,
    feedback_body text,
    book_name     text,
    book_link     text
);

create table files
(
    id          serial primary key,
    file_name   text,
    data        bytea,
    feedback_id integer references feedback (id)
);

-- {"firstName":"A", "lastName": "B", "emailAddress": "C", "feedbackBody":"D", "bookName":"E", "bookLink": "F"}