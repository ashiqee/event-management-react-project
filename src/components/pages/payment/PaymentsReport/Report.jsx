import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { collection, getDocs } from "firebase/firestore";

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
        <div>

            {
                paymentData?.map((payment, i) => <ul key={i} > <li className="text-xl text-blue-600"> {i + 1}.  {payment?.mobileNumber}  : {payment?.transactionId}</li>

                </ul>)
            }

        </div>
    );
};

export default Report;