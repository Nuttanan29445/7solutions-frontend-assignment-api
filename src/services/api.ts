import axios from "axios";
import { GroupDataByDepartment } from "./groupData";

const apiURL = "https://dummyjson.com/users";

export const getTransformedData = async () => {
  try {
    const res = await axios.get(apiURL);
    return GroupDataByDepartment(res.data.users);
  } catch (error) {
    console.log(error);
  }
};
