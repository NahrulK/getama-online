import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2I3OTFhMmIxNjk5YzZlZGFjYjY5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzUzMzI3NCwiZXhwIjoxNjUzNzkyNDc0fQ.0V2EoduLW5UB4j0tQPL-4Wfutkrnf_SSx_9iC_eyO2Y";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
