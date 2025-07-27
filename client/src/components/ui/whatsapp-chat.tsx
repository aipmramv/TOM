import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919884411456"; // WhatsApp format without + or spaces
  const message = "Hello! I'm interested in your IT & BPO services. Can you help me?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* WhatsApp Chat Bubble */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 500 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isOpen ? {} : { y: [0, -10, 0] }}
          transition={isOpen ? {} : { duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.button>

        {/* Chat Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? -80 : 20,
            scale: isOpen ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          className={`absolute bottom-0 right-0 w-80 bg-white rounded-lg shadow-xl border ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div className="p-4 bg-green-500 text-white rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Total Outsource Management</h3>
                <p className="text-xs opacity-90">Typically replies instantly</p>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hi there! We're here to help with your IT & BPO needs.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                How can we assist you today?
              </p>
            </div>
            
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
              Start WhatsApp Chat
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}