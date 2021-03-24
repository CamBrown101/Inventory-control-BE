CREATE TABLE count_info (
    id SERIAL PRIMARY KEY NOT NULL,
    venue INTEGER REFRENCES venue(id),
    date_started TIMESTAMPTZ DEFAULT CLOCK_TIMESTAMP(),
    date_last_updated TIMESTAMPTZ DEFAULT CLOCK_TIMESTAMP(),
    started_by INTEGER REFRENCES user(id) NOT NULL,
    last_updated_by INTEGER REFRENCES user(id) NOT NULL,
)