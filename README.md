# react-express-app
 The start of a project using react and express.
 This project is used to get the start of a project
 that includes a React frontend and an express backend.
 ## concurrently is used 
 The npm package concurrently is used to start the frontend
 (client side) and the backend(server side) at the same time.
 cd into backend and run -> npm run dev

### Notes:
proxy was added to frontend package.json to http://localhost:5000
If endpoint isn't found on frontend then it will look on proxy 
(backend) for the endpoint. 

Did enverything to the front end. The backend is just the express
server that I am used to making.
#### defind> endpoint
endpoint is the rout that something is found at ex. '/','http://localhost:3000',
'/poolParty/plan/'. or also thought of as the last point that something can be reached at.