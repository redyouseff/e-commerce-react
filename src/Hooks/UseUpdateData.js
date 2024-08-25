import BaseUrl from "../Api/BaseUel";
const useUpdateDataWithImage=async(url,parmas)=>{
    const config={
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization:`Bearer ${localStorage.getItem("token")}`
          }
    }
    const res=await BaseUrl.put(url,parmas,config)
  
    return res;
}
const useUdpateData=async(url,parmas)=>{
    const config={
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res=await BaseUrl.put(url,parmas,config)
    return res
}
export  {useUpdateDataWithImage,useUdpateData}

