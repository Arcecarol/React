import axios from "axios";

export const getNotice = async () => {
    const response = await axios.get("https://www.elmundotoday.com/wp-json/wp/v2/posts");
    console.log(response.data)
    return response.data;
};
