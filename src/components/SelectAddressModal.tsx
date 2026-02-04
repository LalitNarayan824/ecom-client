"use client";

import { X, MapPin, Plus, CheckCircle2, Navigation } from "lucide-react";
import { useState } from "react";

export interface AddressNode {
  id: string | number;
  title: string;
  address: string;
  message: string;
}

interface AddressSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  // savedNodes: AddressNode[]; // From your Zustand Collector Store , wehen we save the user , we also save all the addresses of the user in zustand
  onSelect: (address: AddressNode) => void;
}

const savedNodes : AddressNode[] = [
  {id:1 , title:"home", address:"temp address 1", message : "some message 1"},
  {id:2 , title:"office", address:"temp address 2", message : "some message 2"},
  {id:3 , title:"college", address:"temp address 3", message : "some message 3"},
]

export default function AddressSelectionModal({ 
  isOpen, 
  onClose, 
  
  onSelect 
}: AddressSelectionModalProps) {
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const [showCustom, setShowCustom] = useState(false);
  const [customAddress, setCustomAddress] = useState({
    title: "Custom Node",
    address: "",
    message: ""
  });

  if (!isOpen) return null;

  const handleFinalize = () => {
    if (showCustom) {
      onSelect({ ...customAddress, id: "temp-node" });
    } else {
      const selected = savedNodes.find(n => n.id === selectedId);
      if (selected) onSelect(selected);
    }
    onClose();
  };

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] cursor-crosshair" />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-[#780000] border-2 border-[#fd2600] z-[201] p-8 md:p-12 rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] max-h-[90vh] overflow-y-auto">
        
        {/* HEADER */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/50">Logistics_Protocol</span>
            <h2 className="text-4xl font-serif italic text-white">Target Node</h2>
          </div>
          <button onClick={onClose} className="text-white hover:rotate-90 transition-transform cursor-pointer">
            <X size={32} strokeWidth={4} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LEFT: SAVED NODES */}
          <div className="space-y-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white">Saved_Registry</span>
            {savedNodes.map((node) => (
              <div 
                key={node.id}
                onClick={() => { setSelectedId(node.id); setShowCustom(false); }}
                className={`p-4 border-2 cursor-pointer transition-all ${
                  selectedId === node.id && !showCustom 
                    ? "border-black bg-black text-white" 
                    : "border-black/10 bg-red-200 text-black hover:border-black/30"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm uppercase font-bold tracking-tighter">{node.title}</span>
                  {selectedId === node.id && !showCustom && <CheckCircle2 size={14} className="text-[#ffc800]" />}
                </div>
                <p className="text-[12px] leading-relaxed opacity-80 italic font-serif">{node.address}</p>
              </div>
            ))}

            <button 
              onClick={() => { setShowCustom(true); setSelectedId(null); }}
              className={`w-full p-4 border-2 border-dashed flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-widest transition-all ${
                showCustom ? "border-black bg-white text-black" : "border-white/70 text-white/70 hover:cursor-pointer"
              }`}
            >
              <Plus size={14} /> New Manual Node
            </button>
          </div>

          {/* RIGHT: CUSTOM INPUT (Conditional) */}
          <div className={`space-y-6 transition-opacity ${showCustom ? "opacity-100" : "opacity-20 pointer-events-none"}`}>
            <span className="font-mono text-[9px] uppercase tracking-widest text-white">Custom_Coordinates</span>
            <div className="space-y-4">
              <input 
                placeholder="ADDRESS_LINE" 
                className="w-full bg-white/80 border-b border-black/20 p-3 font-mono text-xs focus:outline-none focus:border-black"
                onChange={(e) => setCustomAddress({...customAddress, address: e.target.value})}
              />
              <textarea 
                placeholder="LOGISTICS_MESSAGE (Gate Codes, Notes)" 
                className="w-full bg-white/80 border-b border-black/20 p-3 font-mono text-xs focus:outline-none focus:border-black h-24 resize-none"
                onChange={(e) => setCustomAddress({...customAddress, message: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* FOOTER ACTION */}
        <button
          onClick={handleFinalize}
          disabled={!selectedId && !customAddress.address}
          className="mt-4 flex items-center gap-4 justify-center w-full bg-[#fdf0d5] py-3 border border-black text-[10px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all hover:cursor-pointer  disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <Navigation size={18} strokeWidth={1} />
          Confirm Delivery Node
        </button>
      </div>
    </>
  );
}