import { useState } from 'react';
import { RiUpload2Line, RiDeleteBinLine } from 'react-icons/ri';
import { trackEvent } from '../services/questSdk';

export function Media() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(prev => [...prev, ...files]);
    trackEvent('media_upload', { count: files.length });
  };

  const handleDelete = (index) => {
    trackEvent('media_delete', { index });
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Media Library</h2>
        <label className="px-4 py-2 bg-primary text-white rounded-lg cursor-pointer flex items-center">
          <RiUpload2Line className="mr-2" />
          Upload Files
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleFileSelect}
            accept="image/*,video/*"
          />
        </label>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {selectedFiles.map((file, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                <button
                  onClick={() => handleDelete(index)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <RiDeleteBinLine />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600 truncate">{file.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}