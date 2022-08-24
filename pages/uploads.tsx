import React from "react";
import { FiUpload } from "react-icons/fi";
import Link from "next/link";

function uploads() {
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
                <div className="upload__item">
                  <div className="upload__category">Upload Photo</div>
                  <div className="upload__note">Choose Your File To Upload</div>
                  <div className="upload__file">
                    <input className="upload__input" type="file" />
                    <div className="upload__icon">
                      <FiUpload />
                    </div>
                    <div className="upload__format">PNG / JPG. Max 500Mb.</div>
                  </div>
                </div>
                <div className="upload__item">
                  <div className="upload__category">Spot Details</div>
                  <div className="upload__fieldset">
                    <div className="field">
                      <div className="field__label">title</div>
                      <div className="field__wrap">
                        <input
                          className="field__input"
                          type="text"
                          name="title"
                        />
                      </div>
                    </div>


                    {/* <select class="select" style="display: none;">
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                </select> */}

                    <div className="upload__row">
                      <div className="upload__col upload__col_w33 half__col">
                        <div className="field">
                          <div className="field__label">Bust Level</div>
                          <div className="field__wrap">
                            <div className="nice-select select">
                              <span className="current">1</span>
                              <ul className="list">
                                <li data-value="1" className="option selected">
                                  1
                                </li>
                                <li data-value="2" className="option">
                                  2
                                </li>
                                <li data-value="3" className="option">
                                  3
                                </li>
                                <li data-value="4" className="option">
                                  4
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

                    <div className="upload__row">
                      <div className="upload__col upload__col_w33">
                        <div className="field">
                          <div className="field__label">category</div>
                          <div className="field__wrap">
                            <div className="nice-select select">
                              <span className="current">1</span>
                              <ul className="list">
                                <li data-value="1" className="option selected">
                                  1
                                </li>
                                <li data-value="2" className="option">
                                  2
                                </li>
                                <li data-value="3" className="option">
                                  3
                                </li>
                                <li data-value="4" className="option">
                                  4
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="upload__col upload__col_w33">
                        <div className="field">
                          <div className="field__label">neighbourhood</div>
                          <div className="field__wrap">
                            <div className="nice-select select">
                              <span className="current">1</span>
                              <ul className="list">
                                <li data-value="1" className="option selected">
                                  1
                                </li>
                                <li data-value="2" className="option">
                                  2
                                </li>
                                <li data-value="3" className="option">
                                  3
                                </li>
                                <li data-value="4" className="option">
                                  4
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="upload__col upload__col_w33">
                        <div className="field">
                          <div className="field__label">google maps</div>
                          <div className="field__wrap">
                            <div className="nice-select select">
                              <span className="current">1</span>
                              <ul className="list">
                                <li data-value="1" className="option selected">
                                  1
                                </li>
                                <li data-value="2" className="option">
                                  2
                                </li>
                                <li data-value="3" className="option">
                                  3
                                </li>
                                <li data-value="4" className="option">
                                  4
                                </li>
                              </ul>
                            </div>
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
                  <div className="category card__category">superhost</div>
                </div>
                <div className="card__body">
                  <div className="card__line">
                    <div className="card__title">
                      Entire serviced classy moutain house
                    </div>
                    <div className="card__price">
                      <div className="card__old">$356</div>
                      <div className="card__actual">$267</div>
                    </div>
                  </div>
                  <div className="card__options">
                    <div className="card__option">
                      {/* <svg className="icon icon-modem">
                            <use xlink:href="#icon-modem"></use>
                          </svg> */}
                      Free wifi
                    </div>
                    <div className="card__option">
                      {/* <svg className="icon icon-burger">
                            <use xlink:href="#icon-burger"></use>
                          </svg> */}
                      Breakfast included
                    </div>
                  </div>
                  <div className="card__foot">
                    <div className="card__flex">
                      <div className="card__cost">$200 total</div>
                      <div className="card__rating">
                        {/* <svg className="icon icon-star">
                              <use xlink:href="#icon-star"></use>
                            </svg> */}
                        <div className="card__number">4.8</div>
                        <div className="card__reviews">(12 reviews)</div>
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
  );
}

export default uploads;


