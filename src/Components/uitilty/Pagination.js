import React from 'react'
import ReactPaginate from "react-paginate"
const Pagination = ({pageCount,onpress}) => {

   const  handlePageChange=(data)=>{
    onpress(data.selected +1)
      
   }
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالى"
    onPageChange={handlePageChange}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    previousLabel="السابق"
    containerClassName={"pagination justify-content-center p-3"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    nextClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
/>
  )
}

export default Pagination
