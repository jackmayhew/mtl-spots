import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { server } from "../utils/domain";
import { FiUpload } from "react-icons/fi";
import listenForOutsideClick from "../utils/Listen";

function upload() {
  const [form, setForm] = useState({ title: "", category: "", location: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorss, setErrorss] = useState(false);

  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));


  const menuRef2 = useRef(null);
  const [listening2, setListening2] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggle2 = () => setIsOpen2(!isOpen2);
  useEffect(listenForOutsideClick(listening2, setListening2, menuRef2, setIsOpen2));

  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("Title Preview");
  const [bust, setBust] = useState("");
  const [category, setCategory] = useState("");
  const [googleMaps, setGoogleMaps] = useState("");


  const handleTitle = (e) => {
    setTitle(e.target.value)
    e.target.value === "" ? setTitle("Title Preview") : setTitle(e.target.value)
  }


  // useEffect(() => {
  //   if (isSubmitting) {
  //     if (Object.keys(errors).length === 0) {
  //       createNote();
  //     } else {
  //       setIsSubmitting(false);
  //     }
  //   }
  // }, [errors]);

  const createNote = async () => {
    try {
      const res = await fetch(`${server}/api/spots/share`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      setIsSubmitting(false);
      // router.push("/share");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let errs = validate();
  //   setErrors(errs);
  //   createNote();
  //   setIsSubmitting(true);
  // };

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const validate = () => {
  //   let err = {};

  //   if (!form.title) {
  //     err.title = "Title is required";
  //   }
  //   if (!form.description) {
  //     err.description = "Description is required";
  //   }

  //   return err;
  // };

  function handleChange(event) {
    setFileName(`${event.target.files[0].name}`);


    console.log(`${event.target.files[0].size}`)
  }

  return (
    <div className="section upload">
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
              <div className="upload__list">
                  <form action="">
                <div className="upload__item">
                  <div className="upload__category">Upload Photo</div>
                  <div className="upload__note">Choose Your File To Upload</div>
                  <div className="upload__file">
                    <input className="upload__input" type="file" accept="image/png, image/jpeg" onChange={handleChange} />
                    <div className="upload__icon"><FiUpload /></div>

                    {fileName
                      ? <div className="upload__format">{fileName}</div>
                      : <div className="upload__format"> PNG / JPG. Max 500Mb.</div>
                      }


                      
                      
                  </div>
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
                          onKeyUp={handleTitle}
                        />
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
                                <li onClick={() => setCategory("Stairs")}
                                  className={ category === "Stairs" ? "option selected focus" : "option"}>
                                  <a>Stairs</a>
                                </li>

                                <li onClick={() => setCategory("Rails")}
                                  className={ category === "Rails" ? "option selected focus" : "option"}>
                                  <a>Rails</a>
                                </li>

                                <li onClick={() => setCategory("Ledges")}
                                  className={ category === "Ledges" ? "option selected focus" : "option"}>
                                  <a>Ledges</a>
                                </li>

                                <li onClick={() => setCategory("Gaps")}
                                  className={ category === "Gaps" ? "option selected focus" : "option"}>
                                  <a>Gaps</a>
                                </li>

                                <li onClick={() => setCategory("Other")}
                                  className={ category === "Other" ? "option selected focus" : "option"}>
                                  <a>Other</a>
                                </li>
                              </ul>

                            </div>
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
                              name="title"
                            />
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

                                <li onClick={() =>setBust("Low")}
                                  className={ bust === "Low" ? "option selected focus" : "option"}>
                                  <a>Low</a>
                                </li>

                                <li onClick={() => setBust("Medium")}
                                  className={ bust === "Medium" ? "option selected focus" : "option"}>
                                  <a>Medium</a>
                                </li>

                                <li onClick={() => setBust("High")}
                                  className={ bust === "High" ? "option selected focus" : "option"}>
                                  <a>High</a>
                                </li>


                              </ul>
                            </div>
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
                              name="title"
                            />
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
                        ></textarea>
                      </div>
                    </div>
                    
                  </div>
                </div>
                </form>
              </div>
              <div className="upload__foot">
                <button className="button-stroke upload__button js-upload-button">
                  Preview
                </button>
                <div className="button upload__button">
                  <span>Submit</span>
                </div>
              </div>
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
                    src="https://ui8-fleet-html.herokuapp.com/img/content/card-pic-5@2x.jpg"
                    alt="Entire serviced classy moutain house"
                  />
                </div>
                <div className="card__body">
                  <div className="card__line">
                    <div className="card__title">
                      {title}
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
                      <div className="card__rating">                    
                        <div className="card__reviews">Map View</div>
                      </div>
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

    //       {isSubmitting ? (
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
    //       )}
    //     </form>
    //   </div>
    // </div>
  );
}

export default upload;
