// src/components/blog_components/blog_dashboard/blog_post/ImportMarkdownPost.jsx
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { FiUpload, FiFile, FiImage, FiX } from "react-icons/fi";
import { useFeedback } from "../../../../context/FeedbackContext";
import { useNavigate } from "react-router-dom";
import { logError } from "../../../../utils/logger";
import CategorySelector from "../helpers/CategorySelector";
import api from "../../../../api";

const ImportMarkdownPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, error: showError } = useFeedback();
  const fileInputRef = useRef(null);
  const markdownInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [newPostId, setNewPostId] = useState(null);
  const [importResults, setImportResults] = useState(null);

  // Sadece markdown dosyası seçme
  const handleMarkdownSelect = (event) => {
    const files = Array.from(event.target.files);
    const markdownFiles = files.filter(
      (file) =>
        file.name.endsWith(".md") ||
        file.type === "text/markdown" ||
        file.type === "text/plain"
    );

    if (markdownFiles.length === 0) {
      showError("Lütfen bir markdown (.md) dosyası seçin.");
      return;
    }

    // Mevcut görselleri koru, sadece markdown'ı değiştir
    const existingImages = selectedFiles.filter(
      (file) =>
        file.type.startsWith("image/") ||
        /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(file.name)
    );

    setSelectedFiles([markdownFiles[0], ...existingImages]);
    success("Markdown dosyası seçildi!");
  };

  // Sadece görsel dosyaları seçme
  const handleImageSelect = (event) => {
    const files = Array.from(event.target.files);
    const imageFiles = files.filter(
      (file) =>
        file.type.startsWith("image/") ||
        /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(file.name)
    );

    if (imageFiles.length === 0) {
      showError("Lütfen en az bir görsel dosyası seçin.");
      return;
    }

    // Mevcut markdown'ı koru, görselleri ekle
    const existingMarkdown = selectedFiles.filter(
      (file) =>
        file.name.endsWith(".md") ||
        file.type === "text/markdown" ||
        file.type === "text/plain"
    );

    setSelectedFiles([...existingMarkdown, ...imageFiles]);
    success(`${imageFiles.length} görsel dosyası eklendi!`);
  };
  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);

    console.log(
      "Seçilen dosyalar:",
      files.map((f) => ({ name: f.name, type: f.type }))
    );

    // Dosya tiplerini kontrol et
    const markdownFiles = files.filter(
      (file) =>
        file.name.endsWith(".md") ||
        file.type === "text/markdown" ||
        file.type === "text/plain"
    );
    const imageFiles = files.filter(
      (file) =>
        file.type.startsWith("image/") ||
        /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(file.name)
    );

    console.log("Markdown dosyaları:", markdownFiles.length);
    console.log("Görsel dosyaları:", imageFiles.length);

    if (markdownFiles.length === 0) {
      showError("En az bir markdown (.md) dosyası seçmelisiniz.");
      return;
    }

    if (markdownFiles.length > 1) {
      showError("Aynı anda sadece bir markdown dosyası yükleyebilirsiniz.");
      return;
    }

    const allValidFiles = [...markdownFiles, ...imageFiles];
    const invalidFiles = files.filter(
      (file) => !markdownFiles.includes(file) && !imageFiles.includes(file)
    );

    if (invalidFiles.length > 0) {
      console.warn(
        "Geçersiz dosyalar:",
        invalidFiles.map((f) => f.name)
      );
      showError(
        `Bu dosya türleri desteklenmiyor: ${invalidFiles
          .map((f) => f.name)
          .join(", ")}`
      );
    }

    setSelectedFiles(allValidFiles);
  };

  // Dosya silme
  const removeFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Dosya boyutunu formatla
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // Upload işlemi
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      showError("Lütfen dosya seçin.");
      return;
    }

    if (!category) {
      showError("Lütfen kategori seçin.");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();

      // Dosyaları FormData'ya ekle
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });

      // Kategoriyi ekle
      formData.append("category", category);

      // Upload isteği gönder
      const response = await api.post("/posts/import-markdown", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });

      if (response.data.success) {
        setNewPostId(response.data.data._id || response.data.data.id);
        setImportResults(response.data.importDetails);
        setShowSuccessModal(true);
        success("Markdown projesi başarıyla import edildi!");

        // Dosyaları temizle
        setSelectedFiles([]);
        setCategory("");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        if (markdownInputRef.current) {
          markdownInputRef.current.value = "";
        }
        if (imageInputRef.current) {
          imageInputRef.current.value = "";
        }
      } else {
        showError(response.data.message || "Import işlemi başarısız.");
      }
    } catch (error) {
      logError("ImportMarkdownPost", "Upload hatası:", error);
      showError(
        error.response?.data?.message ||
          error.message ||
          "Import işlemi sırasında hata oluştu."
      );
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  // Post görüntüleme sayfasına yönlendir
  const viewPost = () => {
    if (newPostId) {
      navigate(`/blog/post/${newPostId}`);
    }
    setShowSuccessModal(false);
  };

  // Drag & Drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);

    console.log(
      "Sürüklenen dosyalar:",
      files.map((f) => ({ name: f.name, type: f.type }))
    );

    const markdownFiles = files.filter(
      (file) =>
        file.name.endsWith(".md") ||
        file.type === "text/markdown" ||
        file.type === "text/plain"
    );
    const imageFiles = files.filter(
      (file) =>
        file.type.startsWith("image/") ||
        /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(file.name)
    );

    if (markdownFiles.length === 0) {
      showError("En az bir markdown (.md) dosyası sürükleyin.");
      return;
    }

    if (markdownFiles.length > 1) {
      showError("Aynı anda sadece bir markdown dosyası yükleyebilirsiniz.");
      return;
    }

    const allValidFiles = [...markdownFiles, ...imageFiles];
    const invalidFiles = files.filter(
      (file) => !markdownFiles.includes(file) && !imageFiles.includes(file)
    );

    if (invalidFiles.length > 0) {
      console.warn(
        "Geçersiz dosyalar:",
        invalidFiles.map((f) => f.name)
      );
      showError(
        `Bu dosya türleri desteklenmiyor: ${invalidFiles
          .map((f) => f.name)
          .join(", ")}`
      );
    }

    setSelectedFiles(allValidFiles);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Markdown Projesi Import Et</h2>

      <div className="grid gap-6">
        {/* Upload Area */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Dosya Seçimi</h3>
          </CardHeader>
          <CardBody>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <FiUpload className="mx-auto text-4xl text-gray-400 mb-4" />
              <p className="text-lg mb-2">
                Markdown dosyasını ve görsellerini sürükleyin
              </p>
              <p className="text-sm text-gray-500 mb-4">
                veya aşağıdaki butonları kullanın
              </p>

              {/* Ayrı ayrı dosya seçim butonları */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  color="primary"
                  variant="bordered"
                  onClick={() => markdownInputRef.current?.click()}
                >
                  Markdown Seç (.md)
                </Button>
                <Button
                  color="secondary"
                  variant="bordered"
                  onClick={() => imageInputRef.current?.click()}
                >
                  Görseller Seç
                </Button>
                <Button
                  color="default"
                  variant="bordered"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Tümünü Seç
                </Button>
              </div>

              {/* Hidden file inputs */}
              <input
                ref={markdownInputRef}
                type="file"
                accept=".md,.markdown,text/markdown"
                onChange={handleMarkdownSelect}
                className="hidden"
              />
              <input
                ref={imageInputRef}
                type="file"
                multiple
                accept="image/*,.jpg,.jpeg,.png,.gif,.webp,.bmp,.svg"
                onChange={handleImageSelect}
                className="hidden"
              />
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </CardBody>
        </Card>

        {/* Seçilen Dosyalar */}
        {selectedFiles.length > 0 && (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">
                Seçilen Dosyalar ({selectedFiles.length})
              </h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      {file.name.endsWith(".md") ? (
                        <FiFile className="text-blue-500 text-xl" />
                      ) : (
                        <FiImage className="text-green-500 text-xl" />
                      )}
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <Button
                      isIconOnly
                      size="sm"
                      variant="light"
                      color="danger"
                      onClick={() => removeFile(index)}
                    >
                      <FiX />
                    </Button>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        )}

        {/* Kategori Seçimi */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Post Ayarları</h3>
          </CardHeader>
          <CardBody>
            <CategorySelector
              selectedCategory={category}
              onChange={setCategory}
              required
              className="w-full max-w-xs"
            />
          </CardBody>
        </Card>

        {/* Upload Progress */}
        {isUploading && (
          <Card>
            <CardBody>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Yükleniyor...</span>
                  <span className="text-sm text-gray-500">
                    {uploadProgress}%
                  </span>
                </div>
                <Progress value={uploadProgress} color="primary" />
              </div>
            </CardBody>
          </Card>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            color="primary"
            size="lg"
            onClick={handleUpload}
            isLoading={isUploading}
            isDisabled={selectedFiles.length === 0 || !category}
            className="min-w-32"
          >
            {isUploading ? "İmport Ediliyor..." : "Import Et"}
          </Button>
        </div>
      </div>

      {/* Başarı Modalı */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        size="lg"
      >
        <ModalContent>
          <ModalHeader>
            <h3 className="text-xl font-bold text-green-600">
              Import Başarılı! 🎉
            </h3>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <p>Markdown projeniz başarıyla blog post'a dönüştürüldü!</p>

              {importResults && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Import Detayları:</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      ✅ {importResults.stats.successfulImages} görsel başarıyla
                      yüklendi
                    </li>
                    {importResults.stats.failedImages > 0 && (
                      <li className="text-red-600">
                        ❌ {importResults.stats.failedImages} görsel yüklenemedi
                      </li>
                    )}
                    <li>
                      📝 {importResults.stats.foundReferences} görsel referansı
                      bulundu
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={() => setShowSuccessModal(false)}>
              Kapat
            </Button>
            <Button color="primary" onPress={viewPost}>
              Post'u Görüntüle
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ImportMarkdownPost;
