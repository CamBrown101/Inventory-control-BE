CREATE TABLE storage_item (
  id SERIAL PRIMARY KEY NOT NULL,
  item_id INTEGER REFERENCES item(id)
  storage_id INTEGER REFRENCES storage_area(id),
  sort_order INTEGER DEFAULT 1,
)