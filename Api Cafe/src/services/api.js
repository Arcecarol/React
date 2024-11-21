import axios from "axios";

export const getCoffes = async () => {
    const response = await axios.get("https://api.sampleapis.com/coffee/hot");
    return response.data;
}