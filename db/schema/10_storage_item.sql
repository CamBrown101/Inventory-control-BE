CREATE TABLE storage_item (
  id SERIAL PRIMARY KEY NOT NULL,
  item_id INTEGER REFERENCES item(id),
  storage_id INTEGER REFERENCES storage_area(id) ON DELETE CASCADE,
  sort_order INTEGER DEFAULT 1
)