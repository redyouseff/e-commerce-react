import axios from "axios";
const BaseUrl=axios.create({baseURL:"http://localhost:3000"})
export default BaseUrl;