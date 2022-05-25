import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2I3OTFhMmIxNjk5YzZlZGFjYjY5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzQ1OTk4MiwiZXhwIjoxNjUzNzE5MTgyfQ.uNrTVrC2M286-5brcQDaYP4oAR1Ex61mYazvkyF-wBg";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
