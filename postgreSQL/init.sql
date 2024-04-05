-- Create table for documents
CREATE TABLE documents (
    document_id SERIAL PRIMARY KEY,
    document_content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create table for document versions
CREATE TABLE document_versions (
    version_id SERIAL PRIMARY KEY,
    document_id INT REFERENCES documents(document_id),
    user_id INT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    description TEXT
);
