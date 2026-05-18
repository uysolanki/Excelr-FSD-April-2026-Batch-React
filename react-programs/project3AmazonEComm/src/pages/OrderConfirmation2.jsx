import React from 'react'
import { useLocation } from 'react-router-dom'

const OrderConfirmation2 = () => {
  const location = useLocation()
  const {billingDetails,paymentmode} = location.state

  const {
    carttotal,
    shippingFee,
    discount,
    totalPayable,
    promocode ,
    address
  }= billingDetails

  const orderId= Math.floor(Math.random()*100000000)

  return (
   <>
   <h2>Order Confirmed</h2>
   <p> your order has been placed successfully <strong>Order ID : {orderId}</strong></p>
   <p> Cart Total : <strong>{carttotal}</strong> </p>
   <p> Shipping Fee : <strong>{shippingFee.toFixed(2)}</strong> </p>
   <p> Discount : <strong>{discount.toFixed(2)}</strong> </p>
   <p> Promocode : <strong>{promocode}</strong> </p>
   <p> Total Payable : <strong>{totalPayable.toFixed(2)}</strong> </p>
   <p> Payment Mode : <strong>{paymentmode}</strong> </p>
   <p> Shipping Address : <strong>{address}</strong> </p>
   </>
  )
}

export default OrderConfirmation2