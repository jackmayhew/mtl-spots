import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import smoothscroll from "smoothscroll-polyfill";
contact.title = 'Contact';

function contact() {
  const formRef = useRef();

  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({} as any);

  const emailCheck = new RegExp(/^\S+@\S+\.\S+$/);

  const [form, setForm] = useState({
    check: false,
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_1lzfkk3",
        "template_9yhvt85",
        formRef.current,
        "u2f9hQvBSXULc9jBL"
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          window.scroll({ top: 0, left: 0, behavior: "smooth" });
        },
        (error) => {
          setEmailError(true);
        }
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    if (!errs.check) {
      setIsSubmitting(true);
      sendEmail();
      setForm({
        check: false,
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const validate = () => {
    let err = {
      check: false,
      name: "",
      email: "",
      message: "",
    };

    if (form.name.length > 100) {
      err.name = `Name Must Be Less Than 100 Characters. Currently: ${form.name.length}`;
      err.check = true;
    }

    if (!form.email) {
      err.email = "Email Required";
      err.check = true;
    }

    if (!emailCheck.test(form.email) && form.email) {
      err.email = "Invalid Email";
      err.check = true;
    }

    if (!form.message) {
      err.message = "Message Required";
      err.check = true;
    }

    if (form.message.length > 500) {
      err.message = `Message Must Be Less Than 500 Characters. Currently: ${form.message.length}`;
      err.check = true;
    }

    return err;
  };

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <div className="outer__inner">
      <div className="section-mb80 main main_cars-category">
        <div className="section catalog">
          <div className="sorting">
            <div className="sorting__center center">
              <div className="control">
                <ul className="breadcrumbs">
                  <li className="breadcrumbs__item">
                    <Link href={`/`}>
                      <a className="breadcrumbs__link">Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <Link href={`/saved`}>
                      <a className="breadcrumbs__link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section faq">
            <div className="faq__center center">
              <div className="faq__top">
                <div className="faq__stage">
                  {isSubmitted
                          ? <div className="email__result">Email Sent. We'll Be In Touch Shortly!</div>
                          : emailError
                          ?  <div className="email__result">something went wrong. please try again or email us at bonjour@mtlspots.ca</div>
                          : "reach out with questions or for support"}
                </div>
                <h1 className="faq__title h2">Contact MTL SPOTS</h1>
                <div className="faq__info">
                  <FiMail size={22} /> bonjour@mtlspots.ca
                </div>
              </div>
              <div className="faq__row js-tabs">
                <div className="faq__col">
                  <div className="faq__box js-tabs-item">
                    <div className="upload__item">
                      <div className="upload__category contact__form faq__stage">
                          Contact Form
                      </div>
                      <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="upload__fieldset">
                          <div className="field">
                            <div className="field__label">first name</div>
                            <div className="field__wrap">
                              <input
                                className="field__input"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                              />
                              <div className="error">{errors.name}</div>
                            </div>
                          </div>

                          <div className="field">
                            <div className="field__label">email *</div>
                            <div className="field__wrap">
                              <input
                                className="field__input"
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                              />
                              <div className="error">{errors.email}</div>
                            </div>
                          </div>

                          <div className="field">
                            <div className="field__label">message *</div>
                            <div className="field__wrap">
                              <textarea
                                className="field__textarea"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                              ></textarea>
                              <div className="error">{errors.message}</div>
                            </div>
                          </div>

                          <div className="upload__foot">
                            <button
                              className="button upload__button live__button contact__button"
                              type="submit"
                            >
                              {isSubmitting && !emailError ? (
                                <div className="loader"></div>
                              ) : null}

                              {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
