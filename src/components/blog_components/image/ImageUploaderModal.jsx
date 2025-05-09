// src/app/components/ImageUploaderModal.jsx
import React from "react";
import ImageUploader from "./ImageUploader"; // ImageUploader'ın doğru yolu
import { Button } from "@nextui-org/react";
import { useFeedback } from "../../../context/FeedbackContext";

const ImageUploaderModal = ({ onClose, onSuccess }) => {
  const { showAlert } = useFeedback();

  // Upload başarılı olursa gallery'deki görselleri yenile ve modalı kapat.
  const handleUploadSuccess = () => {
    // onSuccess prop'u varsa çağır
    if (onSuccess && typeof onSuccess === "function") {
      onSuccess();
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded max-w-2xl w-full relative">
        {/* NextUI Button ile kapatma butonu */}
        <Button
          auto
          color="error"
          onPress={onClose}
          className="absolute top-2 right-2"
        >
          Kapat
        </Button>
        <h2 className="text-2xl font-bold mb-4">Görsel Yükle</h2>
        {/* ImageUploader bileşenine onUploadSuccess callback'unu geçiriyoruz */}
        <ImageUploader onUploadSuccess={handleUploadSuccess} />
      </div>
    </div>
  );
};

export default ImageUploaderModal;
