CREATE TABLE vendor (
  id SERIAL PRIMARY KEY NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone INTEGER
)