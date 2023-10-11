import axios from "axios";

const createUser = async (body, token) => {
  await axios({
    url: "http://localhost:8080/user/create_user",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    data: body,
  });
};

export default createUser;
