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

## Deployment on Render
1. Push your code to GitHub.
2. Create a new **Web Service** on Render.
3. Link your GitHub repository.
4. Set the \`Start Command\` as:
   \`\`\`
   node server.js
   \`\`\`
5. Deploy and access your chat app using the provided URL.

## Project Structure
\`\`\`
/project-folder
│── /public           # Contains static frontend files (HTML, CSS, JS)
│── server.js         # Main server file with WebSocket functionality
│── package.json      # Project dependencies and scripts
│── README.md         # Documentation
\`\`\`

## WebSocket Events

### Client to Server
| Event        | Data Format                    | Description                 |
|-------------|--------------------------------|-----------------------------|
| \`new_user\`  | \`{ name: "User Name" }\`        | User joins the chat.        |
| \`message_user\` | \`{ name, message, time }\` | User sends a chat message.  |

### Server to Client
| Event             | Data Format                        | Description                  |
|------------------|----------------------------------|------------------------------|
| \`user_connected\`  | \`{ name, users: ["User1", ...] }\` | A new user joined.           |
| \`message\`        | \`{ name, message, time }\`        | Broadcast a chat message.   |
| \`user_disconnected\` | \`{ name, users: ["User1", ...] }\` | A user left the chat.        |

## License
This project is open-source and can be modified and distributed freely.

## Author
Developed by **Saurav Agrawal**.
