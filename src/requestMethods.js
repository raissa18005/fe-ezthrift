import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser === null
        ? ""
        : JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
              .currentUser.accessToken;
// const TOKEN =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjdkNWZkMDM0MjMyM2ZmODlhZDFjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDc1MjYyNCwiZXhwIjoxNjM1MDExODI0fQ.j1kdTMdi1CGvKL32LDJaLE8ir-rM7lzuxAvY3oFckXU";

console.log(
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser
);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
