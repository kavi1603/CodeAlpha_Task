from flask import Flask, render_template, request, redirect, url_for
from flask_mail import Mail, Message
import sqlite3
import os
print("Current Working Directory:", os.getcwd())

app = Flask(__name__)

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'
app.config['MAIL_PASSWORD'] = 'your-password'
mail = Mail(app)

# Home route
@app.route('/')
def index():
    return render_template('index.html')

# Form submission
@app.route('/register', methods=['POST'])
def register():
    name = request.form['name']
    email = request.form['email']
    phone = request.form['phone']
    event = request.form['event']

    # Save to database
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO registrations (name, email, phone, event) VALUES (?, ?, ?, ?)",
                   (name, email, phone, event))
    conn.commit()
    conn.close()

    # Send confirmation email
    msg = Message('Registration Confirmation',
                  sender='your-email@gmail.com',
                  recipients=[email])
    msg.body = f"Hi {name},\n\nYou have successfully registered for {event}!"
    mail.send(msg)

    return redirect(url_for('success'))

@app.route('/success')
def success():
    return render_template('success.html')

if __name__ == '__main__':
    app.run(debug=True)
