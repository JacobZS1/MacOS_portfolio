import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants/index.js";
import {WindowControls} from "#components/index.js";

const Contact = () => {
    return (
    <>
        <div id="window-header">
            <WindowControls target="contact" />
            <h2>Skontaktuj się ze mną</h2>
        </div>

        <div className="p-5 space-y-5">
            <img src={`${import.meta.env.BASE_URL}images/kuba.jpg`} alt="Contact" className="w-20 rounded-full" />

            <h3>Porozmawiajmy</h3>
            <p>Masz pomysł? Potrzebujesz pomocy? Wchodzę w to.</p>
            <p>jak.zow@wp.pl</p>

            <ul>
                {socials.map(({ id, bg, link, icon, text }) => (
                    <li key={id} style={{ backgroundColor: bg }}>
                        <a href={link} target="_blank" rel="noopener noreferrer" title={{text}}>
                            <img src={icon} alt={text} className="size-5" />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;