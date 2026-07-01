'use client';

import React from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function SimulatedButton({ 
  children, 
  className,
  actionName = 'Acción'
}: { 
  children: React.ReactNode; 
  className?: string;
  actionName?: string;
}) {

  const handleClick = () => {
    toast.success(`${actionName} simulada (Modo Demo)`, {
      description: "Esta acción no realiza cambios en la base de datos.",
    });
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }} 
      className={className} 
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
}
