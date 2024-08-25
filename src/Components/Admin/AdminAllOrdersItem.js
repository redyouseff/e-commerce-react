import React from 'react'
import { Link } from 'react-router-dom'

const AdminAllOrdersItem = () => {
  return (
    <div>
    <Link to="/admin/orders/:id" style={{textDecoration:"none"}}>
      item
    </Link>
    </div>
  )
}

export default AdminAllOrdersItem
