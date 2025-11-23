import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import { Download } from "lucide-react";

const Resume = () => {
  const filePath = "/files/CV.pdf"; // served from public/files
  // Hide built-in PDF toolbar/controls while keeping our own download button
  const iframeSrc = `${filePath}#toolbar=0&navpanes=0&scrollbar=0`;
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>CV.pdf</h2>

        <a href={filePath} download className="cursor-pointer" title="Pobierz CV">
          <Download className="icon" />
        </a>
      </div>

      <div className="p-0 h-[70vh]">
        <iframe
          src={iframeSrc}
          title="CV.pdf"
          className="w-full h-full block border-0 bg-transparent"
        />
        <div className="sr-only">
          Jeśli plik PDF nie wyświetla się, pobierz go tutaj: <a href={filePath}>CV.pdf</a>
        </div>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;