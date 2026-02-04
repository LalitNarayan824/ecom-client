"use client";

import { X, Save, MapPin, Tag, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

interface AddressNode {
  id: string | number;
  title: string;
  address: string;
  message: string;
}

interface EditAddressModalProp {
  isOpen: boolean;
  onClose: () => void;
  addressNode: AddressNode | null; // The specific node being edited
}

export default function EditAddressModal({ isOpen, onClose, addressNode }: EditAddressModalProp) {
  const [formData, setFormData] = useState({
    title: addressNode?.title || "",
    address: addressNode?.address || "",
    message: addressNode?.message || ""
  });

  // Sync state when a different address node is selected for editing
  useEffect(() => {
    if (addressNode) {
      setFormData({
        title: addressNode.title,
        address: addressNode.address,
        message: addressNode.message
      });
    }
  }, [addressNode]);

  const handleUpdate = () => {
    console.log("Updating Registry for Node ID:", addressNode?.id, formData);
    // Logic: updateAddressInStore(addressNode.id, formData)
    onClose();
  };

  if (!isOpen || !addressNode) return null;

  return (
    <>
      {/* STATIC BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] cursor-crosshair"
      />

      {/* STATIC MODAL NODE */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[#ecec25] border-2 border-[#fdc500] z-[201] p-8 rounded-2xl shadow-2xl"
      >
        {/* HEADER */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-black">Update Node</span>
            <h2 className="text-3xl font-serif italic text-black">Edit Address</h2>
          </div>
          <button onClick={onClose} className="text-black hover:cursor-pointer hover:rotate-90 transition-transform">
            <X size={30} strokeWidth={1.5} />
          </button>
        </div>

        {/* FORM FIELDS */}
        <div className="space-y-6">
          {[
            { label: "Title", icon: Tag, key: "title" as const, type: "text" },
            { label: "Address", icon: MapPin, key: "address" as const, type: "text" },
            { label: "Message", icon: MessageSquare, key: "message" as const, type: "text" },
          ].map((field) => (
            <div key={field.key} className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-black flex items-center gap-2">
                <field.icon size={12} strokeWidth={2} /> {field.label}
              </label>
              <input
                type={field.type}
                value={formData[field.key]}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                className="w-full bg-[#ffffff] border-b border-[#d1a400] p-3 text-sm font-mono text-black focus:border-black focus:outline-none transition-colors rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* UPDATE ACTION */}
        <button
          onClick={handleUpdate}
          className="w-full mt-10 bg-black text-white py-4 font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-black/80 hover:cursor-pointer rounded-sm transition-all active:scale-95 shadow-lg"
        >
          <Save size={16} />
          Update Shipping Node
        </button>
      </div>
    </>
  );
}