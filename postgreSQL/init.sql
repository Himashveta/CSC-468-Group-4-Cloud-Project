-- Create table for user entries
CREATE TABLE user_entries (
    entry_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    entry_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
