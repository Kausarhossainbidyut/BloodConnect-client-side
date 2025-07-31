import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import Lottie from "lottie-react";
import Money_Donation from "../assets/Money_Donation.json";
import { loadStripe } from "@stripe/stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";

const stripePromise = loadStripe(
  "pk_test_51RobSGRxFfvWaT9jvK4AwJbknBViRxYroTRmWA0kpzLU15YK2oeh9CPzkE742OnnZ9bhUg79wXKnBQAE44QW9ykr00m8JfPz8m"
);

const CheckoutForm = ({ amount, handleRequest }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const axios = useAxiosPublic();

  useEffect(() => {
    if (amount > 0) {
      axios
        .post(
          "https://mission-scic11-server-template.vercel.app/create-payment-intent",
          {
            amount,
            user: { name: user.displayName, email: user.email },
          }
        )
        .then(({ data }) => setClientSecret(data.clientSecret));
    }
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      Swal.fire("Payment failed!", result.error.message, "error");
    } else if (result.paymentIntent.status === "succeeded") {
      handleRequest();
      Swal.fire("Thank you!", "Your donation was successful ❤️", "success");

      await axios.post(
        "https://mission-scic11-server-template.vercel.app/api/funding",
        {
          name: user.displayName,
          email: user.email,
          amount: parseFloat(amount),
        }
      );
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white border border-red-100 shadow-lg rounded-2xl px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 space-y-6 transition-all duration-300"
    >
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600 leading-snug">
          ❤️ Make a Kind Donation
          <br className="hidden sm:inline" />
          and Help Save Lives
        </h2>
        <p className="text-sm sm:text-base text-gray-600 italic">
          Your kindness brings hope to someone in need.
        </p>
        <p className="text-lg font-bold text-red-700 tracking-wide">
          Donation Amount: ${amount}
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-300 rounded-md p-4 sm:p-5">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#1a202c",
                "::placeholder": {
                  color: "#a0aec0",
                },
              },
              invalid: {
                color: "#e53e3e",
              },
            },
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full flex justify-center items-center py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          "Donate Now"
        )}
      </button>
    </form>
  );
};

const StripeWrapper = ({ amount, handleRequest }) => (
  <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 bg-gray-100 px-4 py-12 sm:py-16 md:py-20">
    <div className="w-full md:w-1/2 lg:w-[45%]">
      <Elements stripe={stripePromise}>
        <CheckoutForm handleRequest={handleRequest} amount={amount} />
      </Elements>
    </div>
    <div className="w-full md:w-1/2 lg:w-[45%] max-w-xs sm:max-w-sm md:max-w-md">
      <Lottie animationData={Money_Donation} loop className="w-full" />
    </div>
  </div>
);

export default StripeWrapper;
