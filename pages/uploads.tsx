import React from 'react'

function uploads() {
  return (
    <div className="section upload">
          <div className="upload__center center">
            <div className="control">
              <ul className="breadcrumbs">
                <li className="breadcrumbs__item"><a className="breadcrumbs__link" href="index.html">Home</a></li>
                <li className="breadcrumbs__item">Upload</li>
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
                      <div className="upload__category">Upload photos</div>
                      <div className="upload__note">Drag or choose your file to upload</div>
                      <div className="upload__file">
                        <input className="upload__input" type="file" />
                        <div className="upload__icon">
                          {/* <svg className="icon icon-upload-file">
                            <use xlink:href="#icon-upload-file"></use>
                          </svg> */}
                        </div>
                        <div className="upload__format">PNG, GIF, WEBP, MP4. Max 500Mb.</div>
                      </div>
                    </div>
                    <div className="upload__item">
                      <div className="upload__category">Property details</div>
                      <div className="upload__fieldset">
                        <div className="field">
                          <div className="field__label">title</div>
                          <div className="field__wrap">
                            <input className="field__input" type="text" name="title" placeholder="e. g. &quot;Spectacular views of Queenstown&quot;" />
                          </div>
                        </div>
                        <div className="upload__row">
                          <div className="upload__col upload__col_w70">
                            <div className="upload__label">price</div>
                            <div className="upload__line">
                              <div className="upload__cell">
                                <div className="field field_empty">
                                  <div className="field__wrap">
                                    <input className="field__input" type="text" name="price" placeholder="e. g. &quot;180&quot;" />
                                  </div>
                                </div>
                              </div>
                              <div className="upload__cell">
                                <div className="field field_empty">
                                  <div className="field__wrap">
                                    <div className="nice-select select" ><span className="current">$ USD</span><ul className="list"><li data-value="$ USD" className="option selected">$ USD</li><li data-value="€ EUR" className="option">€ EUR</li></ul></div>
                                  </div>
                                </div>
                              </div>
                              <div className="upload__cell">
                                <div className="field field_empty">
                                  <div className="field__wrap">
                                  <div className="nice-select select" ><span className="current">per Night</span><ul className="list"><li data-value="per Night" className="option selected">per Night</li><li data-value="per Day" className="option">per Day</li><li data-value="per Week" className="option">per Week</li></ul></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="upload__col upload__col_w30">
                            <div className="upload__label">Discount</div>
                            <div className="upload__line">
                              <div className="upload__cell">
                                <div className="field field_empty">
                                  <div className="field__wrap">
                                    <input className="field__input" type="text" name="discount" placeholder="e. g. &quot;10&quot;"  />
                                  </div>
                                </div>
                              </div>
                              <div className="upload__cell">
                                <div className="field field_empty">
                                  <div className="field__wrap">
                                    <div className="nice-select select" ><span className="current">%</span><ul className="list"><li data-value="%" className="option selected">%</li><li data-value="$" className="option">$</li><li data-value="€" className="option">€</li></ul></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="field field_map">
                          <div className="field__label">location</div>
                          <div className="field__wrap">
                            <input className="field__input" type="text" name="location" placeholder="e. g. “Queenstown, Otago, New Zealand”" />
                            <button className="field__map">Google map</button>
                          </div>
                        </div>
                        <div className="upload__row">
                          <div className="upload__col upload__col_w33">
                            <div className="field">
                              <div className="field__label">bed room</div>
                              <div className="field__wrap">
                                <div className="nice-select select" ><span className="current">1</span><ul className="list"><li data-value="1" className="option selected">1</li><li data-value="2" className="option">2</li><li data-value="3" className="option">3</li><li data-value="4" className="option">4</li></ul></div>
                              </div>
                            </div>
                          </div>
                          <div className="upload__col upload__col_w33">
                            <div className="field">
                              <div className="field__label">living room</div>
                              <div className="field__wrap">
                                <div className="nice-select select" ><span className="current">1</span><ul className="list"><li data-value="1" className="option selected">1</li><li data-value="2" className="option">2</li><li data-value="3" className="option">3</li><li data-value="4" className="option">4</li></ul></div>
                              </div>
                            </div>
                          </div>
                          <div className="upload__col upload__col_w33">
                            <div className="field">
                              <div className="field__label">kitchen</div>
                              <div className="field__wrap">
                                    <div className="nice-select select" ><span className="current">1</span><ul className="list"><li data-value="1" className="option selected">1</li><li data-value="2" className="option">2</li><li data-value="3" className="option">3</li><li data-value="4" className="option">4</li></ul></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <div className="field__label">description</div>
                          <div className="field__wrap">
                          <textarea className="field__textarea" name="description" placeholder="e. g. &quot;Spectacular views of Queenstown&quot;"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="upload__item">
                      <div className="upload__category">Amenities</div>
                      <div className="upload__fieldset">
                        <div className="upload__row">
                          <div className="upload__col upload__col_w50">
                            <div className="field">
                              <div className="field__wrap">
                                <input className="field__input" type="text" name="service1" placeholder="e. g. Wifi 24/7"  />
                              </div>
                            </div>
                          </div>
                          <div className="upload__col upload__col_w50">
                            <div className="field">
                              <div className="field__wrap">
                                <input className="field__input" type="text" name="service2" placeholder="e. g. Wifi 24/7" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="upload__row">
                          <div className="upload__col upload__col_w50">
                            <div className="field">
                              <div className="field__wrap">
                                <input className="field__input" type="text" name="service1" placeholder="e. g. Wifi 24/7" />
                              </div>
                            </div>
                          </div>
                          <div className="upload__col upload__col_w50">
                            <div className="field">
                              <div className="field__wrap">
                                <input className="field__input" type="text" name="service2" placeholder="e. g. Wifi 24/7" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="upload__item">
                      <div className="upload__category">Core features</div>
                      <div className="upload__fieldset">
                        <div className="upload__row">
                          <div className="upload__col upload__col_w50">
                            <div className="field">
                              <div className="field__wrap">
                                <input className="field__input" type="text" name="service5" placeholder="e. g. Wifi 24/7" />
                              </div>
                            </div>
                          </div>
                          <div className="upload__col upload__col_w50">
                            <div className="field">
                              <div className="field__wrap">
                                <input className="field__input" type="text" name="service6" placeholder="e. g. Wifi 24/7"  />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="button-stroke upload__button">
                          {/* <svg className="icon icon-plus">
                            <use xlink:href="#icon-plus"></use>
                          </svg> */}
                          <span>Add more feature</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="upload__foot">
                    <button className="button-stroke upload__button js-upload-button">Preview</button>
                    <div className="button upload__button"><span>Submit for review</span>
                      {/* <svg className="icon icon-arrow-next">
                        <use xlink:href="#icon-arrow-next"></use>
                      </svg> */}
                    </div>
                    <div className="upload__saving">Auto saving
                      <div className="loader"></div>
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
                  <div className="upload__subtitle">Preview</div><a className="card" href="stays-product.html">
                    <div className="card__preview"><img src="https://ui8-fleet-html.herokuapp.com/img/content/card-pic-5@2x.jpg" alt="Entire serviced classy moutain house" />
                      <div className="category card__category">superhost</div>
                    </div>
                    <div className="card__body">
                      <div className="card__line">
                        <div className="card__title">Entire serviced classy moutain house</div>
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
                            <div className="card__reviews">(12 reviews)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></a>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default uploads