import BaseUrl from "../Api/BaseUel";
const UseDeleteData=async(url,parmas)=>{
    
    const config={
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res=await BaseUrl.delete(url,config)
    return res.data;
}
export default UseDeleteData