const ImageUploader = () => {
  return (
    <div className="border-2 border-dashed border-[#ddd] rounded-[25px] p-10 text-center">

      <p className="text-[#7f6a52] mb-5">

        Upload Product Image

      </p>

      <input
        type="file"
        accept="image/*"
      />

    </div>
  );
};

export default ImageUploader;