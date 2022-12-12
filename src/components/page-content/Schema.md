CREATE TABLE markdown(
    id SERIAL PRIMARY KEY,
    content TEXT
)

CREATE TABLE diagram(
    id SERIAL PRIMARY KEY,
    node_id SMALLINT,
    title VARCHAR(100),
    body TEXT
)