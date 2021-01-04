import React from "react";
import Contacts from "../../components/Contacts";

function Contact() {
  function handleBtn(event) {
    event.preventDefault();
    const id = event.target.id;
    switch (id) {
      case "email":
        window.open("mailto:tniles320@gmail.com");
        break;
      case "linkedin":
        window.open("https://linkedin.com/in/taylorniles117", "_blank");
        break;
      case "github":
        window.open("https://github.com/tniles320", "_blank");
        break;
      case "twitter":
        window.open("https://twitter.com/tniles320", "_blank");
        break;
      case "resume":
        window.open(
          "https://docs.google.com/document/d/1IMkKFe_mVEZZgKiZ6yojyeOlU78mSkzcQ3b-O7RSP28/edit?usp=sharing",
          "_blank"
        );
        break;
      default:
        return;
    }
  }

  return (
    <div>
      <Contacts handleBtn={handleBtn} />
    </div>
  );
}

export default Contact;
