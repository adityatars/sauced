import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface GoogleCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoogleCalendarModal = ({ isOpen, onClose }: GoogleCalendarModalProps) => {
  const googleCalendarUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3jAXE9Z4Mubi8gqPL84TGc1DqcJ1CJ5-E7GnhoPqYqKFxdpTboErevi5s0FiYVuH6nC1_yujGi?gv=true";

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full-screen backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[50]"
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
          />

          {/* Modal - Perfectly centered using Framer Motion transforms */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            transition={{ 
              duration: 0.4, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="bg-quartz rounded-xl md:rounded-2xl z-[60] flex flex-col shadow-2xl w-[95vw] md:w-[90vw]"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              maxWidth: '900px',
              maxHeight: '90vh',
              height: 'auto',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate/20 bg-quartz/50 backdrop-blur-sm flex-shrink-0">
              <h3 className="text-lg md:text-xl font-semibold text-carbon">
                Book Your Discovery Call
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-slate/10 transition-colors duration-200 group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-carbon/70 group-hover:text-carbon transition-colors" />
              </button>
            </div>

            {/* Google Calendar Embed - Inline with proper container and scrolling */}
            <div 
              className="w-full bg-quartz"
              style={{
                overflowY: 'auto',
                maxHeight: 'calc(90vh - 73px)',
                minHeight: '500px',
              }}
            >
              <iframe
                src={googleCalendarUrl}
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                title="Book Your Discovery Call"
                loading="eager"
                allow="calendar"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Hook to manage modal state
export const useGoogleCalendarModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  return { isOpen, openModal, closeModal };
};

export default GoogleCalendarModal;
