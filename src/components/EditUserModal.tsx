"use client";

import { X, User, Phone, Mail, Save } from "lucide-react";
import { useState } from "react";

interface EditUserModalProp {
  isOpen: boolean;
  onClose: () => void;
  currentUser: {
    name: string;
    email: string;
    phone: string;
  };
}

export default function EditUserModal({ isOpen, onClose, currentUser }: EditUserModalProp) {
  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    phone: currentUser?.phone || "",
    email: currentUser?.email || ""
  });

  const handleSave = () => {
    console.log("Saving Specimen Collector Data:", formData);
    // Logic for updating store goes here
    onClose();
  };

  if (!isOpen) return null;

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
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-black">System_Registry</span>
            <h2 className="text-3xl font-serif italic text-black">Edit Collector</h2>
          </div>
          <button onClick={onClose} className="text-black hover:cursor-pointer hover:rotate-90 transition-transform">
            <X size={30} strokeWidth={1.5} />
          </button>
        </div>

        {/* FORM FIELDS */}
        <div className="space-y-6">
          {[
            { label: "Full_Name", icon: User, key: "name" as const, type: "text" },
            { label: "Contact_Node", icon: Phone, key: "phone" as const, type: "tel" },
            { label: "Auth_Email", icon: Mail, key: "email" as const, type: "email" },
          ].map((field) => (
            <div key={field.key} className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-black flex items-center gap-2">
                <field.icon size={10} /> {field.label}
              </label>
              <input
                type={field.type}
                value={formData[field.key]}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                className="w-full bg-[#ffffff] border-b border-[#d1a400] p-3 text-sm font-mono text-black focus:border-[#ffc800] focus:outline-none transition-colors rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* SAVE ACTION */}
        <button
          onClick={handleSave}
          className="w-full mt-10 bg-black text-white py-4 font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-black/80 hover:cursor-pointer rounded-sm transition-all active:scale-95"
        >
          <Save size={16} />
          Update Registry
        </button>
      </div>
    </>
  );
}