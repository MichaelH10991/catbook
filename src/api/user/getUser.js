import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const getUser = async () => {
  const response = await axios({
    url: "http://localhost:8080/user/get_user",
    headers: {
      Authorization: cookies.get("idToken"),
    },
  });

  return response.data;
};

export default getUser;
