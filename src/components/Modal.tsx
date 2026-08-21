"use client";

import { useRef, type ReactNode } from "react";
import { useFocusTrap } from "@/hooks/useFocusTrap";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
};

export function Modal({ isOpen, onClose, labelledBy, children }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(panelRef, isOpen);

  // nothing in the dom at all when closed, simpler than hiding with css
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-[22px] max-md:p-0">
      <div
        onClick={onClose}
        aria-hidden="true"
        className="animate-fade absolute inset-0 bg-[rgba(8,8,10,0.74)] backdrop-blur-[4px]"
      />

      <div
        ref={panelRef}
        role="dialog"
        // tells screen readers everything outside is inert
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={[
          "bg-paper text-ink border-line animate-modal-pop relative z-10",
          "max-h-[88vh] w-[min(880px,100%)] overflow-auto rounded border",
          "max-md:h-full max-md:max-h-screen max-md:rounded-none max-md:border-0",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
}
