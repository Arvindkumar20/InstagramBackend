Cybersecurity Project: Instagram Login Page Clone for Phishing Awareness

🚀 Project Overview

This project is a phishing attack demonstration designed for educational and cybersecurity awareness purposes only. It replicates an Instagram login page to show how phishing attacks work, helping users and cybersecurity professionals understand and prevent such threats.

⚠️ Disclaimer: This project is strictly for ethical use and educational purposes. It should not be used for malicious activities. Unauthorized use of phishing techniques is illegal and punishable by law.

🛠️ Technologies Used

This project is built using the following technologies:

Frontend:

React.js

Tailwind CSS

React Router DOM

React Icons

Axios

Backend:

Node.js

Express.js

Mongoose (MongoDB)

Nodemailer

CORS

Body-parser

dotenv

📌 Features

Clone of Instagram Login Page for phishing awareness.

Form Submission Handling to demonstrate how attackers collect credentials.

Database Storage (MongoDB) for logging phishing attempts (for educational analysis only).

Email Notification using Nodemailer to alert users about phishing.

Real-time API Requests using Axios.

🔧 Installation and Setup

Frontend Setup:

1️⃣ Clone the Repository

git clone https://github.com/Arvindkumar20/Instagram.git
cd frontend

2️⃣ Install Dependencies


cd frontend
npm create vite@latest .
select framework or library like react and click Enter
select JavaScript and click Enter
npm install
npm install react-router-dom axios react-icons
npm install tailwindcss @tailwindcss/vite
write code into index.css
@import "tailwindcss"; 
write code into vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

npm run dev
1️⃣ Clone the Repository

git clone https://github.com/Arvindkumar20/InstagramBackend.git
Backend Setup:

cd backend
npm init 
npm install express mongoose nodemailer body-parser cors dotenv
npm start

3️⃣ Configure Environment Variables

Create a .env file in the backend directory:

MONGO_URI=your_mongodb_connection_string
PORT=5000
ORGANIZATION_EMAIL=your_email@gmail.com
ORGANIZATION_EMAIL_PASSWORD=your_email_password


🔍 How Phishing Works (Educational Explanation)

1️⃣ Attackers Create Fake Login Pages

Cybercriminals create websites that look identical to real platforms like Instagram, Facebook, or Gmail.

2️⃣ Victims Enter Credentials

When a user unknowingly enters their credentials, the attacker captures and stores the data.

3️⃣ Data is Stolen & Misused

The attacker uses the stolen data to hack accounts, perform identity theft, or sell information on the dark web.

🛡️ Preventing Phishing Attacks

✅ Check URLs Carefully: Always verify the website URL before entering credentials.
✅ Use Multi-Factor Authentication (MFA): Adds an extra layer of security.
✅ Avoid Clicking on Suspicious Links: Be cautious of emails and messages asking for login details.
✅ Enable Browser Security Features: Many browsers detect and warn about phishing websites.
✅ Educate Yourself & Others: Awareness is the best defense against phishing attacks.

⚠️ Ethical & Legal Disclaimer

This project is strictly for educational and ethical cybersecurity research.

Unauthorized use of phishing techniques is illegal.

The author is not responsible for any misuse of this project.

📌 Conclusion

This project demonstrates the dangers of phishing and highlights the importance of cybersecurity awareness. By understanding how attackers operate, we can better protect ourselves and others online.

If you have any questions or suggestions, feel free to contribute! 🚀

