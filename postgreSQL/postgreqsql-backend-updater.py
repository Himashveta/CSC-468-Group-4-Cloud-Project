from flask import Flask, render_template, request, redirect, url_for
import psycopg2

app = Flask(__name__)

# Connect to PostgreSQL
conn = psycopg2.connect(
    dbname="writing_platform",  # Update with your database name
    user="writing_user",        # Update with your database username
    password="writing_password",# Update with your database password
    host="your_db_host"         # Update with your database host
)
cur = conn.cursor()

@app.route('/')
def index():
    # Fetch all documents
    cur.execute("SELECT * FROM documents")
    documents = cur.fetchall()
    return render_template('index.html', documents=documents)

@app.route('/document/<int:document_id>')
def view_document(document_id):
    # Fetch document by ID
    cur.execute("SELECT * FROM documents WHERE document_id = %s", (document_id,))
    document = cur.fetchone()
    # Fetch all versions of the document
    cur.execute("SELECT * FROM document_versions WHERE document_id = %s", (document_id,))
    versions = cur.fetchall()
    return render_template('document.html', document=document, versions=versions)

@app.route('/save_changes', methods=['POST'])
def save_changes():
    document_id = request.form['document_id']
    new_content = request.form['new_content']
    user_id = request.form['user_id']
    description = request.form['description']
    # Update document content
    cur.execute("UPDATE documents SET document_content = %s, updated_at = CURRENT_TIMESTAMP WHERE document_id = %s", (new_content, document_id))
    # Insert new version metadata
    cur.execute("INSERT INTO document_versions (document_id, user_id, description) VALUES (%s, %s, %s)", (document_id, user_id, description))
    conn.commit()
    return redirect(url_for('view_document', document_id=document_id))

if __name__ == '__main__':
    app.run(debug=True)
