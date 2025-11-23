import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      {imageUrl && (
        <div className="p-4">
          <img
            src={imageUrl}
            alt={name}
            className="max-h-[65vh] w-auto object-contain rounded-md mx-auto"
          />
        </div>
      )}
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
