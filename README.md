# Chat Application

This is a real-time chat application using **Node.js**, **Express.js**, and **Socket.io**. It allows users to join a chat, send messages, and view active participants. The app can be deployed on **Render** or run locally.

## Features
- Users can join with a name and see a list of active users.
- Real-time messaging with timestamps.
- Users receive notifications when someone joins or leaves the chat.
- WebSockets are used for instant communication.

## Installation and Setup

### Prerequisites
- **Node.js** installed on your system.

### Steps to Run Locally

1. **Clone the Repository**
   \`\`\`sh
   git clone <repository-url>
   cd <project-folder>
   \`\`\`

2. **Install Dependencies**
   \`\`\`sh
   npm install
   \`\`\`

3. **Run the Server**
   \`\`\`sh
   node server.js
   \`\`\`
   The server will start on **port 9000** by default.

4. **Access the Chat App**
   Open your browser and go to:
   \`\`\`
   http://localhost:9000
   \`\`\`



## Project Structure
\`\`\`
/project-folder
│── /public           # Contains static frontend files (HTML, CSS, JS)
│── server.js         # Main server file with WebSocket functionality
│── package.json      # Project dependencies and scripts
│── README.md         # Documentation
\`\`\`

![image](https://github.com/user-attachments/assets/7b2bf4ba-2bad-44d5-b137-182c9d27cbf6)
    |

## License
This project is open-source and can be modified and distributed freely.

## Author
Developed by **Saurav Agrawal**.
