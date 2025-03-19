
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { XCircle } from "lucide-react";

interface ErrorAlertProps {
  title: string;
  description: string;
  onClose?: () => void;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ title, description, onClose }) => {
  return (
    <Alert variant="destructive" className="mb-4">
      <XCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-destructive/10"
        >
          <span className="sr-only">Close</span>
          <XCircle className="h-4 w-4" />
        </button>
      )}
    </Alert>
  );
};

export default ErrorAlert;
