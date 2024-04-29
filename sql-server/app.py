from flask import Flask, request, jsonify
import pymssql
import os

app = Flask(__name__)

# Get SQL Server connection details from environment variables
server = os.environ.get('SQL_SERVER', 'localhost')
user = os.environ.get('SQL_USER', 'root')
password = os.environ.get('SQL_PASSWORD', 'password')
database = os.environ.get('SQL_DATABASE', 'DiaryDB')

def get_db_connection():
    return pymssql.connect(server=server, user=user, password=password, database=database)

@app.route('/save_entry', methods=['POST'])
def save_entry():
    # Parse JSON data from request
    entry_data = request.json

    # Connect to SQL Server
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Insert entry into database
        cursor.execute("INSERT INTO diary_entries (title, content) VALUES (%s, %s)", (entry_data['title'], entry_data['content']))
        conn.commit()

        return jsonify({'message': 'Entry saved successfully'})
    except pymssql.Error as e:
        return jsonify({'error': str(e)}), 500
    finally:
        conn.close()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
