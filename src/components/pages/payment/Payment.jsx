import { collection, addDoc } from "firebase/firestore";
import { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Payment = ({ event }) => {
  const navigate = useNavigate()
  const { db, user } = useContext(AuthContext)

  // console.log(event);
  const notify = () =>
    toast.success(
      `${event.name}:
        Booked Successfully
       `
    );

  const mobileNotify = () => toast.error("Please give mobile number");
  const transNotify = () => toast.error("Please give Transaction Id");

  const handleBooking = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const mobileNumber = form.get("number");
    const transactionId = form.get("transaction");
    const paymentData = {
      userName: user?.displayName,
      mobileNumber: mobileNumber,
      transactionId: transactionId,
      amount: event?.price,
      eventId: event?.id,

    }

    if (mobileNumber && transactionId) {

      try {
        const docRef = await addDoc(collection(db, "payments"), paymentData);
        console.log("Payment Details:", docRef.id);


      } catch (error) {
        console.error("Error adding documnet", error);
      }
      navigate('/paymentsReport')
      notify();
    } else {
      if (mobileNumber === "") {
        mobileNotify();
        return;
      }
      transNotify();
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="text-center ">
        <h2 className="text-3xl font-medium">Give your payment information</h2>
        <img
          className="w-48 mx-auto p-4"
          src="https://cdn.mypanel.link/l54p5v/42zr1n12uy0uy0zm.png"
          alt=""
        />
        <form className="grid grid-cols-1 mx-10 gap-3" onSubmit={handleBooking}>
          <input
            className="border p-2 rounded-lg "
            type="text"
            name="number"
            placeholder="Mobile Number"
          />
          <input
            className="border p-2 rounded-lg"
            type="text"
            name="transaction"
            placeholder="Transaction id"
          />
          <button
            type="submit"
            className="text-white mt-6 w-[20vh] bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
