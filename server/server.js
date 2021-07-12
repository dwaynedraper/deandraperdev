const express = require('express');
const path = require('path');
const cors = require('cors');
const { auth, requiresAuth } = require('express-openid-connect');
const dotenv = require('dotenv').config();

// define the app
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_SECRET,
  baseURL: 'http://localhost:3789',
  clientID: 'OpqJDK4z6eVVe3wyw4GlJIMSFxJGrr4l',
  issuerBaseURL: 'https://deandraper.us.auth0.com'
};

const app = express();

app.use(auth(config));
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/resume.pdf'));
})

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

const port = process.env.PORT || 3789;
app.listen(port, () => {
  console.log(`deandraper.dev is running on http://localhost:${port}`);
})