import { useState, FC } from "react";
import { useForm } from "react-hook-form";
import Cards, { Focused } from "react-credit-cards-2";
import "../../node_modules/react-credit-cards-2/dist/es/styles-compiled.css";

interface FormData {
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvc: string;
}

const CreditCardForm: FC = () => {
  const [focus, setFocus] = useState<Focused | undefined>(undefined);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setSubmitted(true);
  };

  const cardNumber = watch("cardNumber") || "";
  const cardName = watch("cardName") || "";
  const expiry = watch("expiry") || "";
  const cvc = watch("cvc") || "";

  return (
<div>
  {!submitted ? (
    <form className="payment-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="card-container">
        <Cards
          number={cardNumber}
          name={cardName}
          expiry={expiry}
          cvc={cvc}
          focused={focus} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          id="cardNumber"
          type="text"
          {...register("cardNumber", {
            required: "Card number is required",
            minLength: {
              value: 16,
              message: "Card number must be 16 digits",
            },
            maxLength: {
              value: 16,
              message: "Card number must be 16 digits",
            },
            pattern: {
              value: /^[0-9]{16}$/,
              message: "Card number is invalid",
            },
          })}
          onFocus={() => setFocus("number")}
          className="form-input"
        />
        {errors.cardNumber && <p className="error-message">{errors.cardNumber.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="cardName">Card Name</label>
        <input
          id="cardName"
          type="text"
          {...register("cardName", { required: "Card name is required" })}
          onFocus={() => setFocus("name")}
          className="form-input"
        />
        {errors.cardName && <p className="error-message">{errors.cardName.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="expiry">Expiry Date</label>
        <input
          id="expiry"
          type="text"
          {...register("expiry", {
            required: "Expiry date is required",
            pattern: {
              value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
              message: "Invalid expiry date",
            },
          })}
          placeholder="MM/YY"
          onFocus={() => setFocus("expiry")}
          className="form-input"
        />
        {errors.expiry && <p className="error-message">{errors.expiry.message}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="cvc">CVC</label>
        <input
          id="cvc"
          type="text"
          {...register("cvc", {
            required: "CVC is required",
            minLength: {
              value: 3,
              message: "CVC must be 3 digits",
            },
            maxLength: {
              value: 3,
              message: "CVC must be 3 digits",
            },
            pattern: {
              value: /^[0-9]{3}$/,
              message: "CVC is invalid",
            },
          })}
          onFocus={() => setFocus("cvc")}
          className="form-input"
        />
        {errors.cvc && <p className="error-message">{errors.cvc.message}</p>}
      </div>
      <button type="submit" className="submit-button">Submit Payment</button>
    </form>
  ) : (
    <div className="success-message">
      <h2>Payment Successful!</h2>
      <p>Your payment has been processed successfully.</p>
    </div>
  )}
</div>

  );
};

export default CreditCardForm;
