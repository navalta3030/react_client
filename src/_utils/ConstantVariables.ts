/* eslint-disable no-undef */
const API_SERVER = process.env.SERVER_URL || "http://localhost:8020"; // :8080 if running in kubernetes
const GOOGLE_CLIENT_ID =
  "866451246367-25unilrhdui0pi1s9clnba697e9c89ud.apps.googleusercontent.com";
const LOCAL_STORAGE_AUTH_NAME = "jwt";
const ALLOWED_IMAGE_EXTENSIONS = [".jpg", ".gif", ".png", ".gif"];

export {
  API_SERVER,
  GOOGLE_CLIENT_ID,
  LOCAL_STORAGE_AUTH_NAME,
  ALLOWED_IMAGE_EXTENSIONS
};