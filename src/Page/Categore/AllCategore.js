import React from 'react'
import CategoreContainer from '../../Components/Categore/CategoreContainer'
import Pagination from '../../Components/uitilty/Pagination'
import AllCategoryHook from '../../Hoock/category/AllCategoryHook'



const AllCategore = () => {
  
  const [data,loading,pageCount,page] = AllCategoryHook()



  return (
    <div>
        <CategoreContainer data={data} loading={loading}></CategoreContainer>

      {pageCount>1?(  <Pagination pageCount={pageCount}  page={page}></Pagination>):null}
    </div>
  )
}

export default AllCategore
