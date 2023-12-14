import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Report = () => {
    const { db } = useContext(AuthContext)
    const [paymentData, setPaymentData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "payments"));
                const data = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    data.push({ id: doc.id, ...doc.data() });
                });
                setPaymentData(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [db]);

    // console.log(paymentData);
    return (
        <div className="container mx-auto">

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>TransactionId</th>
                            <th>Amount</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}


                        {
                            paymentData?.map((payment, i) =>

                                <tr key={i}>
                                    <th>
                                        <label>
                                            {i + 1}
                                        </label>
                                    </th>


                                    <td>

                                        <div className="flex items-center gap-3">
                                            {/* <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div> */}
                                            <div>
                                                <div className="font-bold">{payment?.userName} </div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {payment?.mobileNumber}

                                    </td>
                                    <td>   {payment?.transactionId}</td>
                                    <td>    {payment?.amount}</td>
                                    <th>
                                        <Link to={`/event/${payment?.eventId}`}><button className="btn btn-xs mb-2">Details Event</button></Link>
                                    </th>
                                </tr>

                            )
                        }




                    </tbody>


                </table>
            </div>



        </div>
    );
};

export default Report;