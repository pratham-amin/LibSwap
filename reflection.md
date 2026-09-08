SIT725 Docker Reflection
📘 What I Learned
Working on the Dockerisation of the LibSwap backend taught me how containers simplify development and deployment. I learned how Docker images act as blueprints, while containers are the running instances of those images. I also understood how Docker Compose helps orchestrate multiple services — in my case, the backend API and MongoDB — using a single configuration file.

Networking was a major learning point. I realised that containers communicate using service names instead of localhost, which is why the backend connects to MongoDB using mongodb://mongo:27017/libswap. I also learned how volumes allow MongoDB data to persist even when containers are rebuilt.

Environment variables were another key concept. Using .env and .env.example helped me separate sensitive configuration from public placeholders, which is important for security and version control.

⚠️ Challenges
The biggest challenge was understanding how MongoDB connects inside Docker. Initially, the server wouldn’t start because mongoose.connect() depends on a valid MONGODB_URI. I learned that the server only runs after MongoDB is reachable, and that using the service name mongo is required inside Docker networks.

Another challenge was structuring the Dockerfile and docker-compose.yml correctly. I had to ensure the backend built from the correct context, exposed the right port, and used environment variables properly. I also had to avoid committing real secrets by using .gitignore and .env.example.

Finally, I faced confusion about whether to use MongoDB Atlas or Docker MongoDB. I learned that Atlas should only be used in the real .env, never in .env.example, and that Docker MongoDB is simpler for HD requirements.

🟢 Outcome
The final outcome is a fully Dockerised backend that runs consistently across environments. Using docker-compose up --build, the backend and MongoDB start together, connect automatically, and expose the API on port 3000.

The /api/student endpoint works inside Docker, proving that the container setup is correct. The project now demonstrates containerisation, networking, environment variable handling, and multi‑service orchestration — all required for SIT725 HD.

🔮 Future Improvements
Once the full LibSwap project is complete, I would extend the Docker setup by adding:

A separate frontend container (React or Nginx)

A production‑ready multi‑stage Dockerfile

Health checks for backend and MongoDB

Automated builds using GitHub Actions

A reverse proxy (Nginx) to route frontend and backend traffic

Secrets management using Docker Secrets or Vault

These improvements would make the project more scalable and closer to real‑world deployment standards.