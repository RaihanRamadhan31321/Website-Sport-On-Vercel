"use client";

import { useEffect, useState } from "react";
import TransactionTable from "../../Components/transactions/transaction-table";
import TransactionModal from "../../Components/transactions/transaction-modal";
import { Transaction } from "@/app/types";
import { getAllTransactions, updateTransaction } from "@/app/services/transaction.service";
import { toast } from "react-toastify";

const TransactionManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    try {
      const data = await getAllTransactions();
      setTransactions(data)
    } catch(error) {
      console.error("Failed to fetch transactions", error)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const handleViewDetails = (transaction: Transaction) => {
    setIsModalOpen(true);
    setSelectedTransaction(transaction)
  };

  const handleStatusChange = async (id: string, status: "paid" | "rejected") => {
    try {
      const formData = new FormData();
      formData.append(`status`, status);
      await updateTransaction(id, formData);

      toast.success("Transaction Status Update");

      await fetchTransactions();
    } catch (error) {
      console.error("Failed to Update transaction Status", error)
      toast.error("Failed to Update transactions Status")
    } finally {
      setIsModalOpen(false);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Transaction Management</h1>
          <p className="opacity-50">
            Verify incoming payments and manage orders.
          </p>
        </div>
      </div>
      <TransactionTable transactions={transactions} onViewDetails={handleViewDetails} />
      <TransactionModal transaction={selectedTransaction} onStatusChange={handleStatusChange} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default TransactionManagement;