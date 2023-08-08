import { useDropzone } from 'react-dropzone';
import { FiUploadCloud, FiX } from 'react-icons/fi';

const FileUpload = ({ config, handleReset, imagePreview }: FileUpload) => {
  const { getRootProps, getInputProps } = useDropzone(config);

  return (
    <div className="mb-4 relative">
      <h3 className="text-md font-bold mb-2">Cover</h3>
      {imagePreview ? (
        <div>
          <button
            className="absolute -right-2 top-6 text-white focus:outline-none rounded-full bg-red-500 p-1"
            onClick={handleReset}
          >
            <FiX />
          </button>
          <img src={imagePreview} alt="Uploaded" style={previewStyle} />
        </div>
      ) : (
        <div {...getRootProps()} style={dropzoneStyle as any}>
          <input {...getInputProps()} />
          <FiUploadCloud className="text-indigo-600 h-20 w-20" />
          <p className="text-lg font-bold text-slate-700">
            Drop your image here, or
            <span className="text-indigo-500"> browse</span>
          </p>
          <p className="text-sm text-slate-400">
            PNG, JPG, and GIF files are allowed - 5mb
          </p>
        </div>
      )}
    </div>
  );
};

const dropzoneStyle = {
  width: '100%',
  height: '200px',
  border: '2px dashed #ddd',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  cursor: 'pointer',
};

const previewStyle = {
  maxWidth: '100%',
  maxHeight: '200px',
  margin: '10px 0',
};

export default FileUpload;
