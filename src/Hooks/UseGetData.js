import BaseUrl from "../Api/BaseUel";
const UseGetData=async(url,parmas)=>{
    const res=await BaseUrl.get(url,parmas)
    return res.data;
}

const UseGetDataToken=async(url,parmas)=>{
    const config={
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res=await BaseUrl.get(url,config)
    return res.data;
}
export  {UseGetDataToken,UseGetData}