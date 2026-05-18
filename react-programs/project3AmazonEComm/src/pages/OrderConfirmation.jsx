import React from 'react'

const OrderConfirmation = () => {

  const orderId= Math.floor(Math.random()*100000000)

  return (
   <>
   <h2>Order Confirmed</h2>
   <p> your order has been placed successfully <strong>Order ID : {orderId}</strong></p>
   </>
  )
}

export default OrderConfirmation