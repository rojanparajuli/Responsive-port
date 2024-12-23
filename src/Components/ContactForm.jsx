import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2uynzhl",
        "template_wd6xt99",
        form.current,
        "K0Xo_l6xL5OMUJTji"
      )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
          console.log("success", result);
          alert("Thank you! I will get back to you as soon as possible! :)");
        },
        (error) => {
          console.error("Error:", error);
          setIsSent(false);
        }
      );
  };

  return (
    <div
      className="justify-center"
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
        width: "100%",
        height: "95%",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-7xl bg-primary-400 p-2 rounded-xl text-grayscale-200 text-center relative shadow-2xl"
        >
          <Typewriter words={["LET'S GET IN TOUCH!"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <form
        id="contact_form"
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col gap-4 px-4"
      >
        <div className="w-full flex flex-col">
          <label
            htmlFor="firstname"
            style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}
          >
            First Name
          </label>
          <input
            className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
            id="firstname"
            type="text"
            name="from_name"
            required
            style={{ color: "white" }}
          />
        </div>
        <div className="w-full flex flex-col">
          <label
            htmlFor="lastname"
            style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}
          >
            Last Name
          </label>
          <input
            className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
            id="lastname"
            type="text"
            name="from_last"
            required
            style={{ color: "white" }}
          />
        </div>
        <div className="w-full flex flex-col">
          <label
            htmlFor="email"
            style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}
          >
            E-mail
          </label>
          <input
            className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
            id="email"
            type="email"
            name="from_email"
            required
            style={{ color: "white" }}
          />
        </div>
        <div className="w-full flex flex-col">
          <label
            htmlFor="message"
            style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}
          >
            Message
          </label>
          <textarea
            className="p-[0.5em] rounded-xl text-grayscale-950 bg-primary-200"
            name="message"
            required
            style={{ color: "white" }}
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <input
            className="w-[100px] h-[50px] bg-primary-400 rounded-xl cursor-pointer hover:bg-primary-700 mb-5"
            type="submit"
            value={!isSent ? "Send" : "Done!"}
            style={{ color: "white" }}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
