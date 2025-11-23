import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-4 flex gap-4 items-start">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-28 h-28 object-cover rounded-md shrink-0"
          />
        )}

        <div className="space-y-3">
          {subtitle && <h3 className="text-base font-medium opacity-80">{subtitle}</h3>}
          {Array.isArray(description) && description.length > 0 && (
            <div className="space-y-2 leading-relaxed">
              {description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
