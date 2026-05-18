import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import {jsPDF} from 'jspdf'
import ProductContext from '../contexts/ProductContext'
const OrderConfirmation4 = () => {
  const {billingDetails,paymentMode} = useContext(ProductContext)
 
  const {
    carttotal,
    shippingFee,
    discount,
    totalPayable,
    promocode ,
    address
  }= billingDetails

  const orderId= Math.floor(Math.random()*100000000)


  function downloadBill()
  {
     const doc = new jsPDF()
     doc.setFontSize(20)
     doc.text("Order Confirmed", 20, 20)
     doc.text(` Order ID  : ${orderId}`, 20,40)
     doc.text(` Cart Total  : ${carttotal}`,20,60)
     doc.text(` Shipping Fee  : ${shippingFee.toFixed(2)}`,20,80)
     doc.save('Invoice')
  }

  return (
   <>
   <div>
   <h2>Order Confirmed</h2>
   <p> your order has been placed successfully <strong>Order ID : {orderId}</strong></p>
   <p> Cart Total : <strong>{carttotal}</strong> </p>
   <p> Shipping Fee : <strong>{shippingFee.toFixed(2)}</strong> </p>
   <p> Discount : <strong>{discount.toFixed(2)}</strong> </p>
   <p> Promocode : <strong>{promocode}</strong> </p>
   <p> Total Payable : <strong>{totalPayable.toFixed(2)}</strong> </p>
   <p> Payment Mode : <strong>{paymentMode}</strong> </p>
   <p> Shipping Address : <strong>{address}</strong> </p>
   </div>
   <div>
   <button onClick={downloadBill}>Download Bill</button>
   </div>
   </>
  )
}

export default OrderConfirmation4