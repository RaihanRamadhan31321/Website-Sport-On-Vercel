import Button from "../ui/button-dashbord";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";

type TTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TransactionModal = ({ isOpen, onClose }: TTransactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="flex gap-6">
        <div>
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
          <Image
            src="/image/Rectangle 29.png"
            alt="payment proof"
            width={200}
            height={401}
          />
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>
          <div className="bg-gray-100 rounded-md flex flex-col gap-2.5 p-4  text-sm mb-5">
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Date</div>
              <div className="text-right">25/01/2026 00:00</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Customer</div>
              <div className="text-right">Wamgsff</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right">+85214563852</div>
            </div>
            <div className="flex justify-between gap-10 font-medium">
              <div className="opacity-50 whitespace-nowrap">
                Shipping Address
              </div>
              <div className="text-right">
                JL, Bogor, Indonesia, 445566
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
          <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2">
            <div className="bg-gray-100 rounded aspect-square w-8 h-8">
              <Image
                src="/image/products/product-3.png"
                width={40}
                height={40}
                alt="product image"
                className="items-center justify-center mt-1.5"
              />
            </div>
            <div className="font-medium text-sm">SportsOn Hyperfast Shoes</div>
            <div className="font-medium ml-auto text-sm">3 units</div>
          </div>
          <div className="flex justify-between  text-sm mt-6">
            <h4 className="font-semibold">Total </h4>
            <div className="text-primary font-semibold">
              {priceFormatter(1450000)}
            </div>
          </div>
          <div className=" flex justify-end gap-5 mt-12">
            <Button
              className="text-primary! bg-primary-light! rounded-md"
              size="small"
            >
              <FiX size={20} />
              Reject
            </Button>
            <Button
              className="text-white! bg-[#50C252]! rounded-md"
              size="small"
            >
              <FiCheck size={20} />
              Approve
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionModal;