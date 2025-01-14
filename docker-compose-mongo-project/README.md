# FILE: /docker-compose-mongo-project/docker-compose-mongo-project/README.md
# MongoDB and Mongo Express Docker Compose Project

This project sets up a MongoDB database along with a Mongo Express web interface using Docker Compose.

## Project Structure

```
docker-compose-mongo-project
├── docker-compose.yml
└── README.md
```

## Services

- **mongodb**: This service runs the latest MongoDB image. It is configured with environment variables for the root username and password.
- **mongo-express**: This service runs the latest Mongo Express image, which provides a web-based interface for interacting with the MongoDB database. It connects to the MongoDB service and requires authentication.

## Ports

- MongoDB is exposed on port **27017**.
- Mongo Express is exposed on port **8081**.

## Getting Started

1. Ensure you have Docker and Docker Compose installed on your machine.
2. Clone this repository or download the project files.
3. Navigate to the project directory:
   ```
   cd docker-compose-mongo-project
   ```
4. Create a `.env` file in the project root with the following content:
   ```
   MONGODB_URI=mongodb://<username>:<password>@mongodb:27017/<database>
   ```
   Replace `<username>`, `<password>`, and `<database>` with your desired values.

5. Start the services using Docker Compose:
   ```
   docker-compose up
   ```

6. Access Mongo Express by navigating to `http://localhost:8081` in your web browser.

## Stopping the Services

To stop the services, press `CTRL+C` in the terminal where Docker Compose is running, or run:
```
docker-compose down
```

## License

This project is licensed under the MIT License.