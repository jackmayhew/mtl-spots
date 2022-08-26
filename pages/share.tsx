import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { server } from "../utils/domain";
import { FiUpload } from "react-icons/fi";
import listenForOutsideClick from "../utils/Listen";
import { useS3Upload } from "next-s3-upload";

export default function upload() {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  const menuRef2 = useRef(null);
  const [listening2, setListening2] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggle2 = () => setIsOpen2(!isOpen2);
  useEffect(
    listenForOutsideClick(listening2, setListening2, menuRef2, setIsOpen2)
  );

  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const [category, setCategory] = useState("");
  const [bust, setBust] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({} as any);

  let [imageUrl, setImageUrl] = useState("");
  let { uploadToS3 } = useS3Upload();
  let [file, setFile] = useState();

  const [form, setForm] = useState({
    check: false,
    image: "",
    title: "",
    category: "",
    location: "",
    bust: "",
    ig: "",
    description: "",
  });

  const createNote = async (url) => {
    try {
      const res = await fetch(`${server}/api/spots/share`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ form, url }),
      });
      console.log(url);
      // setIsSubmitting(false);
      // router.push("/share");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  let handleFile = async (event) => {
    setForm({
      ...form,
      image: event.target.files[0].name,
    });
    setFileName(event.target.files[0].name);
    setFilePreview(URL.createObjectURL(event.target.files[0]));

    setFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    if (!errs.check) {
      let { url } = await uploadToS3(file);
      setImageUrl(url);
      createNote(url);
      setIsSubmitting(true);
    }
  };

  const validate = () => {
    let err = {
      check: false,
      image: "",
      title: "",
      category: "",
      location: "",
      bust: "",
      ig: "",
      description: "",
    };

    if (!form.image) {
      err.image = "Image required";
      err.check = true;
    }

    if (!form.title) {
      err.title = "Title required";
      err.check = true;
    }

    if (!form.category) {
      err.category = "Category required";
      err.check = true;
    }

    if (!form.location) {
      err.location = "Location required";
      err.check = true;
    }

    if (!form.bust) {
      err.bust = "Bust level required";
      err.check = true;
    }

    if (form.ig.length > 30) {
      err.ig = "Must be less than 30 characters";
      err.check = true;
    }

    if (form.description.length > 500) {
      err.description = "Must be less than 500 characters";
      err.check = true;
    }

    return err;
  };



  return (
    <div className="section upload">
      {imageUrl && <img src={imageUrl} />}
      <div className="upload__center center">
        <div className="control">
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <Link href={`/`}>
                <a className="breadcrumbs__link">Home</a>
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link href={`/share`}>
                <a className="breadcrumbs__link">Share</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="upload__inner">
          <div className="upload__wrapper">
            <div className="upload__head">
              <h2 className="upload__title h2">Spot Upload</h2>
            </div>

            <div className="upload__form">
              <form onSubmit={handleSubmit}>
                <div className="upload__list">
                  <div className="upload__item">
                    <div className="upload__category">Upload Photo</div>
                    <div className="upload__note">
                      Choose Your File To Upload
                    </div>
                    <div className="upload__file">
                      <input
                        className="upload__input"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={handleFile}
                      />
                      <div className="upload__icon">
                        <FiUpload />
                      </div>

                      {fileName ? (
                        <div className="upload__format">{fileName}</div>
                      ) : (
                        <div className="upload__format">
                          {" "}
                          PNG / JPG. Max 500Mb.
                        </div>
                      )}
                    </div>
                    <div className="error">{errors.image}</div>
                  </div>

                  <div className="upload__item">
                    <div className="upload__category">Spot Details</div>
                    <div className="upload__fieldset">
                      <div className="field">
                        <div className="field__label">title *</div>
                        <div className="field__wrap">
                          <input
                            className="field__input"
                            type="text"
                            name="title"
                            onKeyUp={handleChange}
                          />
                          <div className="error">{errors.title}</div>
                        </div>
                      </div>

                      <div className="upload__row">
                        <div className="upload__col upload__col_w33 half__col">
                          <div className="field">
                            <div className="field__label">category *</div>
                            <div className="field__wrap">
                              <div
                                ref={menuRef2}
                                className={
                                  isOpen2
                                    ? "nice-select select open"
                                    : "nice-select select"
                                }
                                onClick={toggle2}
                              >
                                <span className="current">
                                  {category ? category : ""}
                                </span>

                                <ul className="list">
                                  <li
                                    onClick={() => {
                                      setCategory("Stairs");
                                      setForm({ ...form, category: "Stairs" });
                                    }}
                                    className={
                                      category === "Stairs"
                                        ? "option selected focus"
                                        : "option"
                                    }
                                  >
                                    <a>Stairs</a>
                                  </li>

                                  <li
                                    onClick={() => {
                                      setCategory("Rails");
                                      setForm({ ...form, category: "Rails" });
                                    }}
                                    className={
                                      category === "Rails"
                                        ? "option selected focus"
                                        : "option"
                                    }
                                  >
                                    <a>Rails</a>
                                  </li>

                                  <li
                                    onClick={() => {
                                      setCategory("Ledges");
                                      setForm({ ...form, category: "Ledges" });
                                    }}
                                    className={
                                      category === "Ledges"
                                        ? "option selected focus"
                                        : "option"
                                    }
                                  >
                                    <a>Ledges</a>
                                  </li>

                                  <li
                                    onClick={() => {
                                      setCategory("Gaps");
                                      setForm({ ...form, category: "Gaps" });
                                    }}
                                    className={
                                      category === "Gaps"
                                        ? "option selected focus"
                                        : "option"
                                    }
                                  >
                                    <a>Gaps</a>
                                  </li>

                                  <li
                                    onClick={() => {
                                      setCategory("Other");
                                      setForm({ ...form, category: "Other" });
                                    }}
                                    className={
                                      category === "Other"
                                        ? "option selected focus"
                                        : "option"
                                    }
                                  >
                                    <a>Other</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="error">{errors.category}</div>
                            </div>
                          </div>
                        </div>

                        <div className="upload__col upload__col_w33 half__col">
                          <div className="field">
                            <div className="field__label">Location *</div>
                            <div className="field__wrap">
                              <input
                                className="field__input"
                                type="text"
                                name="location"
                                onChange={handleChange}
                              />
                              <div className="error">{errors.location}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="upload__row">
                        <div className="upload__col upload__col_w33 half__col">
                          <div className="field">
                            <div className="field__label">Bust Level *</div>
                            <div className="field__wrap">
                              <div
                                ref={menuRef}
                                className={
                                  isOpen
                                    ? "nice-select select open"
                                    : "nice-select select"
                                }
                                onClick={toggle}
                              >
                                <span className="current">
                                  {bust ? bust : ""}
                                </span>
                                <ul className="list">
                                  <li
                                    onClick={() => {
                                      setBust("Low");
                                      setForm({ ...form, bust: "Low" });
                                    }}
                                    className={
                                      bust === "Low"
                                        ? "option selected focus"
                                        : "option"
                                    }
                                  >
                                    <a>Low</a>
                                  </li>

                                  <li
                                    onClick={() => {
                                      setBust("Medium");
                                      setForm({ ...form, bust: "Medium" });
                                    }}
                                    className={
                                      bust === "Medium"
                                        ? "option selected focus"
                                        : "option"
                                    }
                                  >
                                    <a>Medium</a>
                                  </li>

                                  <li
                                    onClick={() => {
                                      setBust("High");
                                      setForm({ ...form, bust: "High" });
                                    }}
                                    className={
                                      bust === "High"
                                        ? "option selected focus"
                                        : "option"
                                    }
                                  >
                                    <a>High</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="error">{errors.bust}</div>
                            </div>
                          </div>
                        </div>
                        <div className="upload__col upload__col_w33 half__col">
                          <div className="field">
                            <div className="field__label">Your IG</div>
                            <div className="field__wrap">
                              <input
                                className="field__input"
                                type="text"
                                name="ig"
                                onChange={handleChange}
                              />
                              <div className="error">{errors.ig}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <div className="field__label">description</div>
                        <div className="field__wrap">
                          <textarea
                            className="field__textarea"
                            name="description"
                            onChange={handleChange}
                          ></textarea>
                          <div className="error">{errors.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="upload__foot">
                  <button className="button-stroke upload__button js-upload-button">
                    Preview
                  </button>
                  <button className="button upload__button" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="upload__preview js-upload-preview">
            <div className="upload__wrap">
              <button className="upload__close js-upload-close">
                {/* <svg className="icon icon-close">
                      <use xlink:href="#icon-close"></use>
                    </svg> */}
              </button>
              <div className="upload__subtitle">Preview</div>
              <a className="card" href="stays-product.html">
                <div className="card__preview">
                  <img
                    src={filePreview ? `${filePreview}` : "defaultSpot.jpeg"}
                    alt="Entire serviced classy moutain house"
                  />
                </div>
                <div className="card__body">
                  <div className="card__line">
                    <div className="card__title">
                      {form.title ? form.title : "Title Preview"}
                    </div>
                    {/* <div className="card__price">
                      <div className="card__old">$356</div>
                      <div className="card__actual">$267</div>
                    </div> */}
                  </div>
                  <div className="card__options">
                    <div className="card__option">
                      {category ? category : "Category"}
                    </div>
                    {/* <div className="card__option">
                      Breakfast included
                    </div> */}
                  </div>
                  <div className="card__foot">
                    <div className="card__flex">
                      <div className="card__cost">Bust Level: {bust}</div>
                      {/* <div className="card__rating">
                        <div className="card__reviews">Map View</div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <h1>Create Note</h1>
    //   <div>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         name="title"
    //         placeholder="title"
    //         onChange={handleChange}
    //       />
    //       <input
    //         type="text"
    //         name="category"
    //         placeholder="category"
    //         onChange={handleChange}
    //       />
    //       <input
    //         type="text"
    //         name="location"
    //         placeholder="location"
    //         onChange={handleChange}
    //       />

    //       <input
    //         type="text"
    //         name="url"
    //         placeholder="url"
    //         onChange={handleChange}
    //       />

    //       <button type="submit">submit</button>
    //       {/* {isSubmitting ? (
    //         <Button
    //           type="submit"
    //           isLoading
    //           loadingText="Submitting"
    //           colorScheme="teal"
    //           variant="outline"
    //         >
    //           Submit
    //         </Button>
    //       ) : (
    //         <Button
    //           type="submit"
    //           loadingText="Submitting"
    //           colorScheme="teal"
    //           variant="outline"
    //         >
    //           Submit
    //         </Button>
    //       )} */}
    //     </form>
    //   </div>
    // </div>
  );
}

// export default upload;
