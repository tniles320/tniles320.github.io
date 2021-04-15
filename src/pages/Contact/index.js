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
      case "phone":
        window.open("tel:+19092300325");
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
          "https://docs.google.com/document/d/1o3z0H592QeVFBCJdsyDakAH0NhoqDuOPa8a0nrbu8Hc/edit?usp=sharing",
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
