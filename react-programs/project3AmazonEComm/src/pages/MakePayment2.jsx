import React, { useContext, useState } from 'react'
import './MakePayment.css' 
import { useLocation, useNavigate } from 'react-router-dom'
import ProductContext from '../contexts/ProductContext'
const MakePayment2 = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const billingDetails = location.state

     const { emptyTheCart } = useContext(ProductContext)
    const[paymentmode, setPaymentmode]=useState("credit-card")
    const[carddetails, setCarddetails]=useState({
      cardNumber:"",
      expiryDate:"",
      cvv:""
    })
    function handlePaymentChange(event)
    {
      setPaymentmode(event.target.value)
    }

    function populateCardDetails(event)
    {
      const{name,value}=event.target
      setCarddetails(prev=>(
        {...prev, [name]:value}
      ))
    }

    function proceedToPayment()
    {
        if((paymentmode==="credit-card" || paymentmode==="debit-card"))
        {
          if(carddetails.cardNumber==="" || carddetails.expiryDate==="" || carddetails.cvv==="")
          {
            alert('Please ente valid data')
            return
          }
        }
        emptyTheCart()
        navigate("/proceed", {
          state:{
            billingDetails,
            paymentmode
          }
        })
    }
  return (

   
    <>
        <div className='payment-container'>
            <div className='input-methods'>
              <h2>Select Payment Methods</h2>
                <div>
                    <label htmlFor='credit-method'>Credit Card</label>
                    <input
                    type='radio'
                    name='payment-method'
                    id='credit-method'
                    value='credit-card'
                    onChange={handlePaymentChange}
                    checked={paymentmode === "credit-card"}
                    />

                </div>

                <div>
                    <label htmlFor='debit-method'>Debit Card</label>
                    <input
                    type='radio'
                    name='payment-method'
                    id='debit-method'
                    value='debit-card'
                    onChange={handlePaymentChange}
                    checked={paymentmode === "debit-card"}
                    />

                </div>

                <div>
                    <label htmlFor='cod'>Cash On Delivery</label>
                    <input
                    type='radio'
                    name='payment-method'
                    id='cod'
                    value='cod'
                    onChange={handlePaymentChange}
                    checked={paymentmode === "cod"}
                    />

                </div>

              {
              (paymentmode==="credit-card" || paymentmode==="debit-card") && (
                <div>
                  <h4>Card Details</h4>
                  <div>
                    <label htmlFor='card-number'>Card Number</label>
                    <input
                    type="text"
                    id="card-number"
                    name="cardNumber"
                    value={carddetails.cardNumber}
                    onChange={populateCardDetails}
                    placeholder='1234 5678 9898'
                    />
                  </div>

                   <div>
                    <label htmlFor="expiry-date">Expiry Date</label>
                    <input
                    type="text"
                    id="expiry-date"
                    name="expiryDate"
                    value={carddetails.expiryDate}
                    onChange={populateCardDetails}
                    placeholder='MM/YY'
                    />
                  </div>

                  <div>
                    <label htmlFor="cvv-number">CVV Number</label>
                    <input
                    type="text"
                    id="cvv-number"
                    name="cvv"
                    value={carddetails.cvv}
                    onChange={populateCardDetails}
                    placeholder='enter cvv number'
                    />
                  </div>
                </div>
              )
              
              }

            </div>

            <div>
              <button onClick={proceedToPayment} className="btn btn-primary w-100 mt-3">
                        Proceed To Payment
              </button>
            </div>
        </div>
    </>
  )
}

export default MakePayment2