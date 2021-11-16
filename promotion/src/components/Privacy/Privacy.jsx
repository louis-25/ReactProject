import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import style from './Privacy.module.css'
import { useTranslation } from 'react-i18next'

function Terms(props) {
  const { t, i18n } = useTranslation()
  const changelanguageToKo = () => i18n.changeLanguage('ko')
  const changelanguageToEn = () => i18n.changeLanguage('en')

  return (
    <>
      <Header></Header>
      <div className={`${style.content} ${style.privacy} ${style.body}`}>
        <section>
        <div className={style.inner}>
            <h2>{t("privacy_title")}</h2>
            <p>(Last updated on November 12, 2021)</p>
            <ul>
              <li>
                <h3>{t("privacy_sub_title1")}</h3>
                <p>{t("privacy_sub_title1_content1")}</p>
                <p>{t("privacy_sub_title1_content2")}</p>
                <p>{t("privacy_sub_title1_content3")}</p>
                { 
                  i18n.language == 'ko' &&
                  <p>{t("privacy_sub_title1_content4")}</p>
                }
                <p>{t("privacy_sub_title1_content5")}</p>
              </li>
              <li>
                <h3>{t("privacy_sub_title2")}</h3>
                <p>{t("privacy_sub_title2_content1")}</p>
                <ul>
                  <li>
                    <h4>{t("privacy_sub_title2_content2-1")}</h4>
                    <table>
                      <colgroup>
                        <col style={{width:"50%"}} />
                        <col style={{width:"50%"}} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>{t("privacy_sub_title2_content2-2")}</th>
                          <th>{t("privacy_sub_title2_content2-3")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t("privacy_sub_title2_content3")}</td>
                          <td>{t("privacy_sub_title2_content4-1")}<br/>
                              {t("privacy_sub_title2_content4-2")}<br/>
                              {t("privacy_sub_title2_content4-3")}
                          </td>
                          </tr>
                          </tbody>
                        </table>
                      </li>
                      <li>
                        <h4>{t("privacy_sub_title2_content5-1")}</h4>
                        <p>{t("privacy_sub_title2_content5-2")}</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("privacy_sub_title3")}</h3>
                    <p>{t("privacy_sub_title3_content1")}</p>
                  </li>
                  <li>
                    <h3>{t("privacy_sub_title4")}</h3>
                    <p>{t("privacy_sub_title4_content1")}</p>
                    <table>
                      <colgroup>
                        <col style={{width:"45%"}} />
                        <col style={{width:"45%"}} />
                        <col style={{width:"10%"}} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>{t("privacy_sub_title4_content2-1")}</th>
                          <th>{t("privacy_sub_title4_content2-2")}</th>
                          <th>{t("privacy_sub_title4_content2-3")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t("privacy_sub_title4_content3-1")}</td>
                          <td>{t("privacy_sub_title4_content3-2")}</td>
                          <td>{t("privacy_sub_title4_content3-3")}</td>
                        </tr>
                        <tr>
                          <td>{t("privacy_sub_title4_content4-1")}</td>
                          <td>{t("privacy_sub_title4_content4-2")}</td>
                          <td>{t("privacy_sub_title4_content4-3")}</td>
                        </tr>
                        <tr>
                          <td>{t("privacy_sub_title4_content5-1")}</td>
                          <td>{t("privacy_sub_title4_content5-2")}</td>
                          <td>{t("privacy_sub_title4_content5-3")}</td>
                        </tr>
                        <tr>
                          <td>{t("privacy_sub_title4_content6-1")}</td>
                          <td>{t("privacy_sub_title4_content6-2")}</td>
                          <td>{t("privacy_sub_title4_content6-3")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <h3>{t("privacy_sub_title5")}</h3>
                    <ul>
                      <li>
                        <h4>{t("privacy_sub_title5_content1")}</h4>
                        <p>{t("privacy_sub_title5_content2")}</p>
                      </li>
                      <li>
                        <h4>{t("privacy_sub_title5_content3")}</h4>
                        <p>{t("privacy_sub_title5_content4")}.</p>
                        {
                          i18n.language == 'en' &&
                          <p>{t("privacy_sub_title5_content5")}.</p>
                        }
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("privacy_sub_title6")}</h3>
                    <p>{t("privacy_sub_title6_content1")}</p>
                    <p>{t("privacy_sub_title6_content2")}</p>
                    <p>{t("privacy_sub_title6_content3")}</p>
                    <p>{t("privacy_sub_title6_content4")}</p>
                    <p>{t("privacy_sub_title6_content5")}</p>
                    <p>{t("privacy_sub_title6_content6")}</p>
                  </li>
                  <li>
                    <h3>{t("privacy_sub_title7")}</h3>
                    <ul>
                      <li>
                        <h4>{t("privacy_sub_title7_content1")}</h4>
                        <p>{t("privacy_sub_title7_content2")}</p>
                        <ul>
                          <li>
                            <p>{t("privacy_sub_title7_content3")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content4")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content5")}</p>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h4>{t("privacy_sub_title7_content6")}</h4>
                        <ul>
                          <li>
                            <p>{t("privacy_sub_title7_content7")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content8")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content9")}</p>
                            <ul>
                              <li>
                                <p>{t("privacy_sub_title7_content10")}</p>
                              </li>
                              <li>
                                <p>{t("privacy_sub_title7_content11")}</p>
                              </li>
                              <li>
                                <p>{t("privacy_sub_title7_content12")}</p>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content13")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content14")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content15")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content16")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content17")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content18")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content19")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content20")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content21")}</p>
                          </li>
                          <li>
                            <p>{t("privacy_sub_title7_content22")}</p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3>{t("privacy_sub_title8")}</h3>
                    <p>{t("privacy_sub_title8_content1")}</p>
                    <p>{t("privacy_sub_title8_content2")}</p>
                    <table>
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">{t("privacy_sub_title8_content3")}</th>
                          <th scope="col">{t("privacy_sub_title8_content4")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{t("privacy_sub_title8_content5")}</th>
                          <td>{t("privacy_sub_title8_content6")}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">{t("privacy_sub_title8_content7")}</th>
                          <td>{t("privacy_sub_title8_content8")}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">{t("privacy_sub_title8_content9")}</th>
                          <td colspan="2">{t("privacy_sub_title8_content10")}</td>
                        </tr>
                        <tr>
                          <th scope="row">{t("privacy_sub_title8_content11")}</th>
                          <td colspan="2">{t("privacy_sub_title8_content12")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <h3>{t("privacy_sub_title9")}</h3>
                    <p>{t("privacy_sub_title9_content1")}</p>
                    <p>{t("privacy_sub_title9_content2")}</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <Footer></Footer>
        </>
        );
}

        export default Terms;