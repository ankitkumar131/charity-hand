"use client";

import { useEffect, useState } from "react";

interface Payment {
  _id: string;
  name: string;
  mobileNumber: string;
  amount: number;
  paymentId: string;
  orderId: string;
  createdAt: string;
  status: string;
}

export default function PaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await fetch("/api/get-payments");
        const data = await res.json();
        if (data.success) {
          setPayments(data.payments);
        }
      } catch (error) {
        console.error("Failed to load payments", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-4">All Paid Payments</h1>

      {loading ? (
        <p>Loading...</p>
      ) : payments.length === 0 ? (
        <p>No paid payments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Mobile</th>
                <th className="p-3 border">Amount</th>
                <th className="p-3 border">Payment ID</th>
                <th className="p-3 border">Order ID</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment._id} className="border-t">
                  <td className="p-3 border">{payment.name}</td>
                  <td className="p-3 border">{payment.mobileNumber}</td>
                  <td className="p-3 border">₹{payment.amount / 100}</td>
                  <td className="p-3 border">{payment.paymentId}</td>
                  <td className="p-3 border">{payment.orderId}</td>
                  <td className="p-3 border capitalize text-green-600 font-medium">
                    {payment.status}
                  </td>
                  <td className="p-3 border">
                    {new Date(payment.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
