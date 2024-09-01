import useEditorType from "~/hooks/useEditorType"
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import { useNavigate } from 'react-router-dom'; 


function Home() {
  const editorType = useEditorType()
  const { displayPreview, setDisplayPreview } = useDesignEditorContext()

  const navigate = useNavigate();

  const navigateToApp = () => {
    navigate('/editor'); // Redirect to the /editor route
  };

  return (
    <>
    <html
  key="1"
  dir="ltr"
  lang="en-GB"
>
  <head>
    <meta charSet="utf-8" />
    <title>
      Canva: Visual Suite for Everyone
    </title>
    <meta
      content="anon_home"
      name="app-name"
    />
    <meta
      content="width=device-width, initial-scale=1"
      name="viewport"
    />
    
    <style
      dangerouslySetInnerHTML={{
        __html: '        @font-face {            font-display: swap;            font-family: Canva Sans;            font-style: normal;            font-weight: 400 700;            src: url(fonts/a9b8e7902ec1ab885d382156f33738e5.woff2) format("woff2"), url(fonts/013277426f0d555d96c7a75503df5754.woff) format("woff");            unicode-range: u+00b1-00b3, u+00b9, u+00bc-00be, u+0394, u+03a9, u+03bc, u+03c0, u+2044, u+2070, u+2074-2089, u+2126, u+212e, u+2153-2154, u+215b-215e, u+2202, u+2206, u+220f, u+2211-2212, u+2215, u+2219, u+221a, u+221e, u+222b, u+2248, u+2260, u+2264-2265, u+25ca        }        @font-face {            font-display: swap;            font-family: Canva Sans;            font-style: normal;            font-weight: 400 700;            src: url(fonts/d97a6ffa507b670a5b1664f98fc1183d.woff2) format("woff2"), url(fonts/1de7434d86166b0614ff3d61cda11a54.woff) format("woff");            unicode-range: u+00a1, u+00aa-00ab, u+00af, u+00b8, u+00ba-00bb, u+00bf, u+00c0-00d6, u+00d8-00f6, u+00f8-0148, u+014a-017e, u+0192, u+01b5-01b6, u+01fc-01fd, u+0218-021b, u+0237, u+02c6-02c7, u+02c9, u+02d8-02dd, u+1e80-1e85, u+1e9e, u+1ef2-1ef3, u+2030, u+2039-203a, u+20ac, u+20ba, u+2113        }        @font-face {            font-display: swap;            font-family: Canva Sans;            font-style: normal;            font-weight: 400 700;            src: url(fonts/cff149ee1e9d2be50ac77bcd86769d05.woff2) format("woff2"), url(fonts/f93a5165fac252ecfd593929c4e6146f.woff) format("woff");            unicode-range: u+0020-007e, u+00a0, u+00a2-00a9, u+00ac-00ae, u+00b0, u+00b4-00b7, u+00d7, u+00f7, u+0300-0304, u+0306-0308, u+030a-030c, u+0312, u+0326-0328, u+2013-2014, u+2018-201a, u+201c-201e, u+2020-2022, u+2026, u+2117, u+2120, u+2122, u+2190-2199, u+fb01-fb02, u+feff, u+fffc-fffd        }    '
      }}
     />
    <meta
      content="strict-origin-when-cross-origin"
      name="referrer"
    />
    <meta
      content="525265914179580"
      property="fb:app_id"
    />
    <meta
      content="A028R8CCLNR"
      name="slack-app-id"
    />
    <meta
      content="Canva"
      property="og:site_name"
    />
    <meta
      content="Canva: Visual Suite for Everyone"
      property="og:title"
    />
    <meta
      content="images/og-image-1200x630.jpg"
      property="og:image"
    />
    <meta
      content="1200"
      property="og:image:width"
    />
    <meta
      content="630"
      property="og:image:height"
    />
    <meta
      content="https://www.canva.com"
      property="og:url"
    />
    <meta
      content="website"
      property="og:type"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: '{"@context":"https://schema.org","@type":"Organization","additionalType":"https://en.wikipedia.org/wiki/Graphics_software","name":"Canva","legalName":"Canva Pty Ltd","url":"https://www.canva.com","logo":"https://static.canva.com/anon_home/canva-logo.png","contactPoint":[{"@type":"ContactPoint","url":"https://www.canva.com/en_gb/help/contact-us","contactType":"Customer Support"}],"sameAs":["https://www.facebook.com/canva/","https://twitter.com/canva/","https://www.pinterest.com/canva/","https://instagram.com/canva/"]}'
      }}
      nonce=""
      type="application/ld+json"
    />
    <meta
      content="summary_large_image"
      name="twitter:card"
    />
    <meta
      content="@canva"
      name="twitter:site"
    />
    <meta
      content="@canva"
      name="twitter:creator"
    />
    <meta
      content="Canva: Visual Suite for Everyone"
      name="twitter:title"
    />
    <meta
      content="online design website,graphic design software,free online design software,free design media and templates,Canva"
      name="keywords"
    />
    <meta
      content="Canva is a free-to-use online graphic design tool. Use it to create social media posts, presentations, posters, videos, logos and more."
      name="description"
    />
    <meta
      content="Canva is a free-to-use online graphic design tool. Use it to create social media posts, presentations, posters, videos, logos and more."
      property="og:description"
    />
    <meta
      content="Canva is a free-to-use online graphic design tool. Use it to create social media posts, presentations, posters, videos, logos and more."
      name="twitter:description"
    />
    <link
      href="https://www.canva.com/en_in/"
      hrefLang="en-IN"
      rel="alternate"
    />
    <link
      href="https://www.canva.com/"
      hrefLang="x-default"
      rel="alternate"
    />
    <link
      href="favicon-1.ico"
      rel="shortcut icon"
    />
    <link
      href="images/android-192x192-2.png"
      rel="icon"
      sizes="192x192"
    />
    <link
      href="images/apple-touch-120x120-1.png"
      rel="apple-touch-icon"
    />
    <link
      href="images/apple-touch-152x152-1.png"
      rel="apple-touch-icon"
      sizes="152x152"
    />
    <link
      href="images/apple-touch-167x167-1.png"
      rel="apple-touch-icon"
      sizes="167x167"
    />
    <link
      href="images/apple-touch-180x180-1.png"
      rel="apple-touch-icon"
      sizes="180x180"
    />
  </head>
  <body className="theme light classic">
    <script
      dangerouslySetInnerHTML={{
        __html: 'document.body.classList.replace(\'adaptive\', window.matchMedia(\'(prefers-color-scheme: dark)\').matches ? \'dark\' : \'light\');'
      }}
      nonce=""
    />
    <div id="root">
      <div className="o9Kseg yIDCqA">
        <div className="FmtbLQ TfRV3Q _252raA ObBgBw">
          <p className="fFOiLQ _2xcaIA _5Ob_nQ fM_HdA">
            <span data-id="mainId" />
            <a
              className="ovm4pQ qN_0PQ"
              draggable="false"
              href=""
            >
              <span className="N00Reg">
                Skip to main content
              </span>
            </a>
          </p>
        </div>
        <div>
          <div className="FCEYbA" />
        </div>
        <div
          className="mzR8xw"
          style={{
            zIndex: '3'
          }}
        >
          <div
            className="_7ofBvA f4qJng fs-hide"
            id="google_one_tap_sign_up"
            style={{
              right: '24px',
              top: '72px',
              zIndex: 'inherit'
            }}
          />
        </div>
        <div
          className="M6yXdA hkW4sQ"
          style={{
            zIndex: '2'
          }}
        >
          <div className="_2pukyg">
            <div className="Ft_8Cg a6f7yQ N6xJaA e2L4zw" />
            <div className="IMy50w a6f7yQ">
              <div className="theme light">
                <header className="_VxbfQ _0ukAdA">
                  <div className="JRrpxg Y2kvUA">
                    <div className="_8VoL_g">
                      <button
                        aria-describedby=":Rijr:0"
                        aria-label="Main menu"
                        className="_1QoxDw Qkd66A tYI0Vw o4TrkA Eph8Hg cclg9A YPTJew Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ _3AH3gw _1QhF8A"
                        type="button"
                      >
                        <span className="TcNIhA">
                          <span
                            aria-hidden="true"
                            className="NA_Img dkWypw"
                          >
                            <svg
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.75 5.25h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5z"
                                fill="currentColor"
                                fillRule="evenodd"
                              >
                              </path>
                            </svg>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div className="theme light" />
                  </div>
                  <div className="_0TczQQ">
                    <div className="IDdBMg">
                      <a
                        className="ovm4pQ qN_0PQ"
                        draggable="false"
                        href="https://www.canva.com/en_gb/"
                      >
                        <div className="_pFsfA">
                          Canva home
                        </div>
                        <span className="_8aslVA">
                          <img
                            alt=""
                            role="presentation"
                            src="images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="B74wyQ DwB3TQ mRLVxw">
                    <nav
                      aria-label="Top level navigation"
                      className="XPqG4Q"
                    >
                      <ul
                        aria-label="Top level navigation"
                        className="an_NAA fFOiLQ"
                      >
                        <li
                          aria-hidden="false"
                          className="_0dchRA"
                        >
                          <div>
                            <div data-focus-guard="true" />
                            <button
                              aria-controls=":R2kjrH1:"
                              aria-expanded="false"
                              aria-haspopup="menu"
                              className="_1QoxDw Qkd66A tYI0Vw o4TrkA YPTJew Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ TKO9Uw"
                              id=":R2kjr:"
                              role="button"
                              type="button"
                            >
                              <span className="_38oWvQ">
                                <div className="Jc5apQ">
                                  <span className="k4UEew fFOiLQ">
                                    <span className="CMROvw">
                                      Design spotlight
                                    </span>
                                    <span
                                      aria-hidden="true"
                                      className="hdz69w"
                                    >
                                      Design                                                                        spotlight
                                    </span>
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className="wgsMSA uRWxVA dkWypw"
                                  >
                                    <svg
                                      height="16"
                                      viewBox="0 0 16 16"
                                      width="16"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="m11.71 6.47-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z"
                                        fill="currentColor"
                                      >
                                      </path>
                                    </svg>
                                  </span>
                                </div>
                              </span>
                            </button>
                            <div className="theme light">
                              <div
                                aria-labelledby=":R2kjr:"
                                className="_36HuxQ _93f70w"
                                id=":R2kjrH1:"
                                role="menu"
                              >
                                <div
                                  className="_23epYA So8yNA"
                                  style={{
                                    left: '-0px'
                                  }}
                                >
                                  <div className="_7jffaw BOORbA TfRV3Q PB0rzw">
                                    <div className="bb6R6Q VxhppQ">
                                      <div
                                        className="Vuyc0A"
                                        style={{
                                          '--maxListLength': '9'
                                        }as React.CSSProperties}
                                      >
                                        <ul
                                          className="mUF4mg _8i_uxQ _7g6uVg SxTWIQ fFOiLQ"
                                          role="none"
                                        >
                                          <li role="none">
                                            <div className="Chclsg DGyY7Q J6T2aw">
                                              <div className="gw6oIw">
                                                Visual                                                                                            documents
                                              </div>
                                            </div>
                                            <ul
                                              className="XlJIZw SxTWIQ fFOiLQ hd9s5Q"
                                              role="none"
                                            >
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/worksuite/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Visual Suite
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/docs/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Docs
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/presentations/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Presentations
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/online-whiteboard/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Whiteboards
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/pdf-editor/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    PDF editor
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/graphs/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Graphs and charts
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li role="none">
                                            <div className="Chclsg DGyY7Q J6T2aw">
                                              <div className="gw6oIw">
                                                Photos and                                                                                            videos
                                              </div>
                                            </div>
                                            <ul
                                              className="XlJIZw SxTWIQ fFOiLQ hd9s5Q"
                                              role="none"
                                            >
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/video-editor/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Video editor
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/video-editor/youtube/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    YouTube video editor
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/photo-editor/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Photo editor
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/photo-collages/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Photo collages
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li role="none">
                                            <div className="Chclsg DGyY7Q J6T2aw">
                                              <a
                                                className="gw6oIw oCRJNQ qN_0PQ"
                                                draggable="false"
                                                href="https://www.canva.com/print/"
                                              >
                                                Print
                                                <span
                                                  aria-hidden="true"
                                                  className="uRWxVA dkWypw lmfTqA"
                                                >
                                                  <svg
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    width="16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                      fill="currentColor"
                                                    >
                                                    </path>
                                                  </svg>
                                                </span>
                                              </a>
                                            </div>
                                            <ul
                                              className="XlJIZw SxTWIQ fFOiLQ hd9s5Q"
                                              role="none"
                                            >
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/business-cards/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Business cards
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/cards/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Cards
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/invitations/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Invitations
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/custom-mugs/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Mugs
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/t-shirts/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    T-Shirts
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/hoodies-sweatshirts/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Hoodies
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/calendars/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Calendars
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/labels/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Labels
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li role="none">
                                            <div className="Chclsg DGyY7Q J6T2aw">
                                              <div className="gw6oIw">
                                                Marketing
                                              </div>
                                            </div>
                                            <ul
                                              className="XlJIZw SxTWIQ fFOiLQ hd9s5Q"
                                              role="none"
                                            >
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/logos/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Logos
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/posters/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Posters
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/flyers/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Flyers
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/brochures/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Brochures
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/social-media/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Social media
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/website-builder/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Websites
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/stickers/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Stickers
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/yard-signs/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Yard signs
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/qr-code-generator/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    QR Code Generator
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="Vuyc0A">
                                        <ul
                                          className="mUF4mg FgpbpQ SxTWIQ fFOiLQ"
                                          role="none"
                                        >
                                          <li role="none">
                                            <a
                                              className="xC0ZZQ rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/templates/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/3e1745d1-543b-4bca-a0e5-e14f814debc6/HERO_DesignSpotlight1_2x.png"
                                                      srcSet="https://content-management-files.canva.com/ead085f1-8bfc-4bc1-829b-285219ce673d/53174cb2-7ba3-495e-a5bf-dcbe487d69c1.png 1x, https://content-management-files.canva.com/7bff7d4a-0c33-4ba9-a8c0-3e49f325cb92/8f390fcc-ae24-4ac1-8577-86eb75fd5410.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Browse                                                                                                        Canva                                                                                                        templates
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Choose                                                                                                from thousands of free,                                                                                                ready-to-use                                                                                                templates.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="xC0ZZQ rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/magic/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/cf7ed033-b379-45b6-b68e-1560f82f9f6e/EN-MagicStudioNavKeyVisualNav.png"
                                                      srcSet="https://content-management-files.canva.com/7dd354ac-6fb6-4627-b043-8e1f19fa945a/09182583-b019-40cf-8d38-aad8291fdbd3.png 1x, https://content-management-files.canva.com/85b8b250-b295-4fbe-85b3-a18c246e1f52/2e20c4f3-93da-44aa-876d-daa0b37bb106.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Magic                                                                                                        Studio
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  All                                                                                                the power of AI, all in                                                                                                one place.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-focus-guard="true" />
                          </div>
                        </li>
                        <li
                          aria-hidden="false"
                          className="_0dchRA"
                        >
                          <div>
                            <div data-focus-guard="true" />
                            <button
                              aria-controls=":R4kjrH1:"
                              aria-expanded="false"
                              aria-haspopup="menu"
                              className="_1QoxDw Qkd66A tYI0Vw o4TrkA YPTJew Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ TKO9Uw"
                              id=":R4kjr:"
                              role="button"
                              type="button"
                            >
                              <span className="_38oWvQ">
                                <div className="Jc5apQ">
                                  <span className="k4UEew fFOiLQ">
                                    <span className="CMROvw">
                                      Business
                                    </span>
                                    <span
                                      aria-hidden="true"
                                      className="hdz69w"
                                    >
                                      Business
                                    </span>
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className="wgsMSA uRWxVA dkWypw"
                                  >
                                    <svg
                                      height="16"
                                      viewBox="0 0 16 16"
                                      width="16"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="m11.71 6.47-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z"
                                        fill="currentColor"
                                      >
                                      </path>
                                    </svg>
                                  </span>
                                </div>
                              </span>
                            </button>
                            <div className="theme light">
                              <div
                                aria-labelledby=":R4kjr:"
                                className="_36HuxQ _93f70w"
                                id=":R4kjrH1:"
                                role="menu"
                              >
                                <div
                                  className="_23epYA So8yNA"
                                  style={{
                                    left: '-0px'
                                  }}
                                >
                                  <div className="_7jffaw BOORbA TfRV3Q PB0rzw">
                                    <div className="bb6R6Q VxhppQ">
                                      <div
                                        className="Vuyc0A"
                                        style={{
                                          '--maxListLength': '1'
                                        }as React.CSSProperties}
                                      >
                                        <ul
                                          className="mUF4mg _u0mlQ _7g6uVg SxTWIQ fFOiLQ"
                                          role="none"
                                        >
                                          <li role="none">
                                            <div className="Chclsg DGyY7Q J6T2aw">
                                              <a
                                                className="gw6oIw oCRJNQ qN_0PQ"
                                                draggable="false"
                                                href="https://www.canva.com/solutions/"
                                              >
                                                Canva for                                                                                            business
                                                <span
                                                  aria-hidden="true"
                                                  className="uRWxVA dkWypw lmfTqA"
                                                >
                                                  <svg
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    width="16"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                  >
                                                    <path
                                                      d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                      fill="currentColor"
                                                    >
                                                    </path>
                                                  </svg>
                                                </span>
                                              </a>
                                            </div>
                                            <ul
                                              className="XlJIZw SxTWIQ fFOiLQ hd9s5Q"
                                              role="none"
                                            >
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/for-teams/content-creation-tools/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Content creation
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/for-teams/visual-communication-tools/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Visual communication
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/for-teams/brand-management-tools/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Brand management
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/for-teams/team-collaboration-tools/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Team collaboration
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/for-teams/content-planning-scheduling/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Plan and schedule                                                                                                    content
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/for-teams/digital-asset-management-tools/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Asset management
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/for-teams/brainstorming-tools/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Brainstorms and                                                                                                    workshops
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/for-teams/team-templates/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Branded team                                                                                                    templates
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/for-teams/workplace-productivity-tools/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Productivity and                                                                                                    workflows
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li role="none">
                                            <div className="Chclsg DGyY7Q J6T2aw">
                                              <div className="gw6oIw">
                                                Solutions
                                              </div>
                                            </div>
                                            <ul
                                              className="XlJIZw SxTWIQ fFOiLQ hd9s5Q"
                                              role="none"
                                            >
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/solutions/marketing/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Marketing
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/solutions/creatives/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Creatives
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/solutions/agencies/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Agencies
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/solutions/sales/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Sales
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/solutions/internal-comms/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Communications
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/solutions/media-and-publishing/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Media and publishing
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/solutions/startups/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Startups
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/solutions/real-estate/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Real estate
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                          <li role="none">
                                            <div className="Chclsg DGyY7Q J6T2aw">
                                              <div className="gw6oIw">
                                                Resources
                                              </div>
                                            </div>
                                            <ul
                                              className="XlJIZw SxTWIQ fFOiLQ hd9s5Q"
                                              role="none"
                                            >
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/resources/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Business resources
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/for-teams/case-studies/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Case studies
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/for-teams/features/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Features
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/apps/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Integrations and                                                                                                    apps
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/contact-sales/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Contact Sales
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="Vuyc0A">
                                        <ul
                                          className="mUF4mg _4vOcBA SxTWIQ fFOiLQ"
                                          role="none"
                                        >
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/worksuite/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/32d9bcdc-d81c-44ee-9431-80382a5b3d88/THUMB_VisualSuite_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/9f24b50a-e0fb-4131-b78f-635fe51749e2.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/ecb37fb4-b2d7-41ad-a6e7-9cc0c35f3274.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Visual                                                                                                        Suite
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Reimagine                                                                                                the way you work.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/for-teams/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/ce4374d4-734f-4bd2-abad-07386b6bb982/THUMB_Canva-for-Teams_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/1f8a98b2-d57b-47d7-b469-71fb37533317.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/dfa341c7-371c-4adf-a8d4-d0f9bede4389.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Canva                                                                                                        for Teams
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  For                                                                                                teams of all sizes                                                                                                wanting to create                                                                                                together.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-focus-guard="true" />
                          </div>
                        </li>
                        <li
                          aria-hidden="false"
                          className="_0dchRA"
                        >
                          <div>
                            <div data-focus-guard="true" />
                            <button
                              aria-controls=":R6kjrH1:"
                              aria-expanded="false"
                              aria-haspopup="menu"
                              className="_1QoxDw Qkd66A tYI0Vw o4TrkA YPTJew Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ TKO9Uw"
                              id=":R6kjr:"
                              role="button"
                              type="button"
                            >
                              <span className="_38oWvQ">
                                <div className="Jc5apQ">
                                  <span className="k4UEew fFOiLQ">
                                    <span className="CMROvw">
                                      Education
                                    </span>
                                    <span
                                      aria-hidden="true"
                                      className="hdz69w"
                                    >
                                      Education
                                    </span>
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className="wgsMSA uRWxVA dkWypw"
                                  >
                                    <svg
                                      height="16"
                                      viewBox="0 0 16 16"
                                      width="16"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="m11.71 6.47-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z"
                                        fill="currentColor"
                                      >
                                      </path>
                                    </svg>
                                  </span>
                                </div>
                              </span>
                            </button>
                            <div className="theme light">
                              <div
                                aria-labelledby=":R6kjr:"
                                className="_36HuxQ _93f70w"
                                id=":R6kjrH1:"
                                role="menu"
                              >
                                <div
                                  className="_23epYA So8yNA"
                                  style={{
                                    left: '-0px'
                                  }}
                                >
                                  <div className="_7jffaw BOORbA TfRV3Q PB0rzw">
                                    <div className="bb6R6Q VxhppQ">
                                      <div
                                        className="Vuyc0A"
                                        style={{
                                          '--maxListLength': '3'
                                        }as React.CSSProperties}
                                      >
                                        <ul
                                          className="mUF4mg _8i_uxQ _u0mlQ _4vOcBA SxTWIQ fFOiLQ"
                                          role="none"
                                        >
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/education/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/ff2c48b1-eff3-468f-8da4-864fdde254bd/THUMB_Teachersandschools_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/f67a0051-c213-4cd6-87ef-f38549575b1d.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/b1a1a463-3681-436c-9194-abbb0947a5f1.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Teachers                                                                                                        and schools
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Create                                                                                                and collaborate visually                                                                                                in the classroom.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/education/students/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/bf349482-e3b2-4b3a-b03e-280ca046d648/THUMB_Students_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/c2526a68-3f70-4c5e-aabf-dfe8a033eca1.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/588f04a2-1317-4c47-8a35-134055bb5ec7.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Students
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Designs                                                                                                and documents to boost                                                                                                your learning.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/education/teaching-resources/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/2a15452a-832c-40c0-9ba2-5ee298f9cfac/THUMB_Freeresources_2x1.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/aee6e329-8f2d-41e7-8ab7-b0ffaff60a53.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/3a790df6-7330-4672-b3b8-3a3223203be9.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Teaching                                                                                                        resources
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Free                                                                                                lessons, worksheets and                                                                                                templates, just for                                                                                                educators.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/education/lms-integrations/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/ecd6fe4a-e5c4-4569-a4f0-cc8f1455117f/THUMB_LMS_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/b03cc412-b380-4b59-ba53-2a766376db2c.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/c6ab6657-9e26-4609-b104-166eb74c7126.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      LMS                                                                                                        integrations
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Integrate                                                                                                Canva with your learning                                                                                                management                                                                                                system.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/education/case-studies/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/900f47a8-7206-4cea-bb87-ce395fad12ca/THUMB_Casestudies_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/21ff73b5-3814-4a92-8ddb-d619d07cca07.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/2438dc95-60c5-40b9-b3f5-c0f0155a02bc.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Case                                                                                                        studies
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Hear                                                                                                how others deliver                                                                                                creative and                                                                                                collaborative                                                                                                learning.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/for-campus/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/ca236365-51f8-4095-85fe-45a358f6e526/THUMB_Highereducation_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/7c44a36b-2579-4ba7-afd9-9cd20be9d3f5.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/2bdb4f83-7278-4a2d-8af7-395366455bcb.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Higher                                                                                                        Education
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Inspire                                                                                                future generations with                                                                                                the power of                                                                                                design.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="Vuyc0A">
                                        <ul
                                          className="mUF4mg FgpbpQ SxTWIQ fFOiLQ"
                                          role="none"
                                        >
                                          <li role="none">
                                            <a
                                              className="xC0ZZQ rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/education/education-creator/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/679747db-8125-44b8-9153-f73b7573a184/HERO_Education_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/1717274c-1416-4d39-89b9-56e676a2e9b0.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/25c394b8-e19b-4899-b31f-2c017fe27c03.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Become                                                                                                        an education                                                                                                        creator
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Create                                                                                                and publish your own                                                                                                resources on Canva and                                                                                                earn by sharing.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-focus-guard="true" />
                          </div>
                        </li>
                        <li
                          aria-hidden="false"
                          className="_0dchRA"
                        >
                          <div>
                            <div data-focus-guard="true" />
                            <button
                              aria-controls=":R8kjrH1:"
                              aria-expanded="false"
                              aria-haspopup="menu"
                              className="_1QoxDw Qkd66A tYI0Vw o4TrkA YPTJew Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ TKO9Uw"
                              id=":R8kjr:"
                              role="button"
                              type="button"
                            >
                              <span className="_38oWvQ">
                                <div className="Jc5apQ">
                                  <span className="k4UEew fFOiLQ">
                                    <span className="CMROvw">
                                      Plans and pricing
                                    </span>
                                    <span
                                      aria-hidden="true"
                                      className="hdz69w"
                                    >
                                      Plans and                                                                        pricing
                                    </span>
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className="wgsMSA uRWxVA dkWypw"
                                  >
                                    <svg
                                      height="16"
                                      viewBox="0 0 16 16"
                                      width="16"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="m11.71 6.47-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z"
                                        fill="currentColor"
                                      >
                                      </path>
                                    </svg>
                                  </span>
                                </div>
                              </span>
                            </button>
                            <div className="theme light">
                              <div
                                aria-labelledby=":R8kjr:"
                                className="_36HuxQ _93f70w"
                                id=":R8kjrH1:"
                                role="menu"
                              >
                                <div
                                  className="_23epYA So8yNA"
                                  style={{
                                    left: '-0px'
                                  }}
                                >
                                  <div className="_7jffaw BOORbA TfRV3Q PB0rzw">
                                    <div className="bb6R6Q VxhppQ">
                                      <div
                                        className="Vuyc0A"
                                        style={{
                                          '--maxListLength': '1'
                                        }as React.CSSProperties}
                                      >
                                        <ul
                                          className="mUF4mg _8i_uxQ _u0mlQ FgpbpQ SxTWIQ fFOiLQ"
                                          role="none"
                                        >
                                          <li role="none">
                                            <a
                                              className="xC0ZZQ rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/free/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/3de90237-f190-47bf-a1da-74311fbb18fd/HERO_Plans_Free_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/fd553f3e-ac98-40ef-bffa-2e61bc1eebae.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/c9022685-27e0-4f46-af78-d35a7ede1802.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Free
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  For                                                                                                anyone to design                                                                                                anything, on their own                                                                                                or with family, friends,                                                                                                or others. No experience                                                                                                required.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="xC0ZZQ rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/pro/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/f64a3693-85c8-4173-8417-deed6223bf27/HERO_Plans_Pro_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/a09fe6e6-cff4-42cb-a74b-eff11ee2dfc1.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/697e77b6-0d4d-46c5-b0e8-23d5630888e7.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Pro
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  For                                                                                                individuals wanting                                                                                                unlimited access to                                                                                                premium content and                                                                                                design tools.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="xC0ZZQ rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/for-teams/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/644f3898-e277-45a5-a3dd-c6c6aff3c6af/HERO_Plans_Teams_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/be816605-af42-4631-ab06-fcd363537f5b.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/af112861-94de-4bdd-b44a-0a952b264f77.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Teams
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  For                                                                                                teams of all sizes                                                                                                wanting to create                                                                                                together, with premium                                                                                                workplace and brand                                                                                                tools.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                        <div className="V_7VTQ">
                                          <a
                                            className="oCRJNQ qN_0PQ"
                                            draggable="false"
                                            href="https://www.canva.com/pricing/"
                                          >
                                            <p className="tYI0Vw _5Ob_nQ fM_HdA">
                                              Compare pricing
                                              <span
                                                aria-hidden="true"
                                                className="uRWxVA dkWypw lmfTqA"
                                              >
                                                <svg
                                                  height="16"
                                                  viewBox="0 0 16 16"
                                                  width="16"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                    fill="currentColor"
                                                  >
                                                  </path>
                                                </svg>
                                              </span>
                                            </p>
                                          </a>
                                        </div>
                                      </div>
                                      <div className="Vuyc0A">
                                        <ul
                                          className="mUF4mg _4vOcBA SxTWIQ fFOiLQ"
                                          role="none"
                                        >
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/education/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/45da768b-fbf2-4561-82bf-024b280fb7a0/THUMB_Education_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/32fbbb9f-94ae-4237-b8af-d73b9e9e96e0.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/c4407dcf-82c7-4409-a9d7-30ec58f879e3.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Education
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  A                                                                                                powerful, free tool for                                                                                                classrooms, districts                                                                                                and students.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/canva-for-nonprofits/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/d7a5bcef-d8ae-4dc1-839a-306e8343de6a/THUMB_Not-for-profit_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/89c200c7-91ab-4a1a-af2e-e2cd668cf808.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/8c951a52-879a-4ea9-b2d5-0cbf00e095f1.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Not-for-profit
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Canva                                                                                                Pro is free for all                                                                                                registered nonprofits.                                                                                                Apply today.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-focus-guard="true" />
                          </div>
                        </li>
                        <li
                          aria-hidden="false"
                          className="_0dchRA"
                        >
                          <div>
                            <div data-focus-guard="true" />
                            <button
                              aria-controls=":RakjrH1:"
                              aria-expanded="false"
                              aria-haspopup="menu"
                              className="_1QoxDw Qkd66A tYI0Vw o4TrkA YPTJew Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ TKO9Uw"
                              id=":Rakjr:"
                              role="button"
                              type="button"
                            >
                              <span className="_38oWvQ">
                                <div className="Jc5apQ">
                                  <span className="k4UEew fFOiLQ">
                                    <span className="CMROvw">
                                      Learn
                                    </span>
                                    <span
                                      aria-hidden="true"
                                      className="hdz69w"
                                    >
                                      Learn
                                    </span>
                                  </span>
                                  <span
                                    aria-hidden="true"
                                    className="wgsMSA uRWxVA dkWypw"
                                  >
                                    <svg
                                      height="16"
                                      viewBox="0 0 16 16"
                                      width="16"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="m11.71 6.47-3.53 3.54c-.1.1-.26.1-.36 0L4.3 6.47a.75.75 0 1 0-1.06 1.06l3.53 3.54c.69.68 1.8.68 2.48 0l3.53-3.54a.75.75 0 0 0-1.06-1.06z"
                                        fill="currentColor"
                                      >
                                      </path>
                                    </svg>
                                  </span>
                                </div>
                              </span>
                            </button>
                            <div className="theme light">
                              <div
                                aria-labelledby=":Rakjr:"
                                className="_36HuxQ _93f70w"
                                id=":RakjrH1:"
                                role="menu"
                              >
                                <div
                                  className="_23epYA So8yNA"
                                  style={{
                                    left: '-0px'
                                  }}
                                >
                                  <div className="_7jffaw BOORbA TfRV3Q PB0rzw">
                                    <div className="bb6R6Q VxhppQ">
                                      <div className="Vuyc0A">
                                        <ul
                                          className="mUF4mg _7g6uVg SxTWIQ fFOiLQ"
                                          role="none"
                                        >
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/create/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/e03bc9e1-3326-4693-ad64-3ff742e80417/THUMB_Createtopdesigns_2x.png"
                                                      srcSet="https://content-management-files.canva.com/0005b43f-069f-4b26-8027-b99973278649/4c21a0b2-5a33-49fb-837f-de4280d67e25.png 1x, https://content-management-files.canva.com/2a76e630-25ae-4c93-9cd9-cddbce160d0d/326e3ccb-f459-4c97-845b-f2d055ef0d3a.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Create                                                                                                        top designs
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Access                                                                                                step-by-step guides and                                                                                                create unique                                                                                                designs.
                                                </span>
                                              </div>
                                            </a>
                                            <ul
                                              className="XlJIZw yiFfvw SxTWIQ fFOiLQ hd9s5Q"
                                              role="none"
                                            >
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/create/logos/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Logo maker
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/create/flyers/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Flyer maker
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/create/banners/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Banner maker
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/create/photo-collages/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Photo collage maker
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/create/posters/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Poster maker
                                                  </div>
                                                </a>
                                              </li>
                                              <li role="none">
                                                <a
                                                  className="sU9jOQ _2f_7cQ aiE6Dw qN_0PQ"
                                                  draggable="false"
                                                  href="https://www.canva.com/create/resumes/"
                                                  role="menuitem"
                                                >
                                                  <div className="ZU4_lw CP1jQw">
                                                    Resume maker
                                                  </div>
                                                </a>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </div>
                                      <div
                                        className="Vuyc0A"
                                        style={{
                                          '--maxListLength': '3' 
                                        } as React.CSSProperties }
                                      >
                                        <ul
                                          className="mUF4mg _8i_uxQ _u0mlQ _4vOcBA SxTWIQ fFOiLQ"
                                          role="none"
                                        >
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/learn/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/82a02e9e-e94f-4a86-a0c8-eb33b94ecc97/THUMB_Blog_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/8cb7759d-a14b-42dc-8c07-2cf87883cefa.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/d44408d1-d5a3-4abf-b16a-327b1504faa3.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Canva                                                                                                        Blog
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Explore                                                                                                articles and                                                                                                resources.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/designschool/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/55b3e8f7-a1bc-4bda-a3f0-0f625c01c9fe/THUMB_Designschool_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/1c1496c9-b403-4787-a454-9d154431a163.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/234ccfa4-f5dd-4577-9e41-e9e29b3bffdd.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Design                                                                                                        school
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Enjoy                                                                                                tutorials and                                                                                                courses.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/events/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/8f80c5fa-fcfe-4953-9100-c83a738306d6/THUMB_Events_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/6dcd85e7-dcb1-4dc7-90aa-7cf8447dcce3.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/51a232a9-c158-43e3-a9d6-15fc83fc723b.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Events
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Be                                                                                                inspired by experts and                                                                                                trends.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                          <li role="none">
                                            <a
                                              className="_3N_tLw rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/help/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/bdac10c9-257d-4bfb-9339-543bd2fd6eb3/THUMB_Helpcentre_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/f8c210d7-b3a6-4643-a3e2-a4fa13815385.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/8a630944-08ee-4ab2-a481-a353801b79b6.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Help                                                                                                        centre
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Get                                                                                                technical support and                                                                                                help.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="Vuyc0A">
                                        <ul
                                          className="mUF4mg FgpbpQ SxTWIQ fFOiLQ"
                                          role="none"
                                        >
                                          <li role="none">
                                            <a
                                              className="xC0ZZQ rL6obw aiE6Dw qN_0PQ"
                                              draggable="false"
                                              href="https://www.canva.com/designschool/tutorials/getting-started/"
                                              role="menuitem"
                                            >
                                              <div className="RR1BJw">
                                                <div className="A6r7zw _4WL2Sg">
                                                  <div className="f77EhQ">
                                                    <div className="n7vSfw UG13Dw">
                                                    </div>
                                                  </div>
                                                  <noscript>
                                                    <img
                                                      alt=""
                                                      className="YEVYBA"
                                                      src="https://content-management-files.canva.com/29bc0709-ad59-4922-af06-1d3ab86b00d7/HERO_Learn_2x.png"
                                                      srcSet="https://s3.amazonaws.com/content-management-files.canva.com/6f6edbb3-3de0-492f-876c-2ecb5093701c.png 1x, https://s3.amazonaws.com/content-management-files.canva.com/83c9f22e-90b7-4033-b7de-517cdccdc1df.png 2x"
                                                    />
                                                  </noscript>
                                                </div>
                                              </div>
                                              <div className="P6lZKw">
                                                <div className="vp7rhA">
                                                  <p
                                                    className="tYI0Vw _5Ob_nQ fM_HdA KZvVOQ Q_6xlA vp7rhA"
                                                    style={{
                                                      WebkitLineClamp: '3'
                                                    }}
                                                  >
                                                    <span className="fT3APQ _5Ob_nQ fM_HdA">
                                                      Getting                                                                                                        started
                                                      <span className="xe5OCQ">
                                                        <span className="wBCXaA">
                                                          � 
                                                        </span>
                                                        <span
                                                          aria-hidden="true"
                                                          className="zJQZNQ uRWxVA dkWypw lmfTqA"
                                                        >
                                                          <svg
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="m6.47 4.29 3.54 3.53c.1.1.1.26 0 .36L6.47 11.7a.75.75 0 1 0 1.06 1.06l3.54-3.53c.68-.69.68-1.8 0-2.48L7.53 3.23a.75.75 0 0 0-1.06 1.06z"
                                                              fill="currentColor"
                                                            >
                                                            </path>
                                                          </svg>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </p>
                                                </div>
                                                <span className="fFOiLQ _5Ob_nQ _bsk3w">
                                                  Try                                                                                                our quick intro tutorial                                                                                                and get designing on                                                                                                Canva, like a                                                                                                pro.
                                                </span>
                                              </div>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-focus-guard="true" />
                          </div>
                        </li>
                      </ul>
                      <div
                        aria-hidden="true"
                        className="vAyh0g fFOiLQ"
                        style={{
                          transform: 'translate(0px, -50%)'
                        }}
                      >
                        <div data-focus-guard="true" />
                        <button
                          aria-controls=":R14jrH1:"
                          aria-expanded="false"
                          aria-haspopup="menu"
                          aria-label="More items"
                          className="_1QoxDw Qkd66A tYI0Vw o4TrkA Eph8Hg cclg9A YPTJew Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ _3AH3gw ufgsJg"
                          id=":R14jr:"
                          role="menuitem"
                          type="button"
                        >
                          <span className="TcNIhA">
                            <span
                              aria-hidden="true"
                              className="NA_Img dkWypw"
                            >
                              <svg
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                >
                                </path>
                              </svg>
                            </span>
                          </span>
                        </button>
                        <div data-focus-guard="true" />
                      </div>
                    </nav>
                  </div>
                  <div className="X0Bbog">
                    <div className="theme light SGk7jg">
                      <div>
                        <div
                          className="Ypv_5w"
                          role="search"
                        >
                          <label>
                            <div
                              className="QnQnDA"
                              tabIndex={-1}
                            >
                              <div>
                                <div>
                                  <div className="_3GF_gA">
                                    <div className="Wrk03w c7zhBg _7r5TJw">
                                      <div className="rr8GjQ">
                                        <span
                                          aria-hidden="true"
                                          className="_3HkV_g NA_Img dkWypw RMcv3A"
                                        >
                                          <svg
                                            height="24"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M15.2 16.34a7.5 7.5 0 1 1 1.38-1.45l4.2 4.2a1 1 0 1 1-1.42 1.41l-4.16-4.16zm-4.7.16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                                              fill="currentColor"
                                            >
                                            </path>
                                          </svg>
                                        </span>
                                      </div>
                                      <input
                                        autoComplete="on"
                                        className="s_JGcg fFOiLQ yW_5QA tMP70Q"
                                        defaultValue=""
                                        dir="auto"
                                        placeholder="Try presentation, Instagram post, anything!"
                                        spellCheck="false"
                                        type="search"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="_pFsfA">
                              Try presentation, Instagram post, anything!
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pvf_dg DwB3TQ">
                    <div>
                      <div className="_8VoL_g">
                        <a
                          aria-label="Help centre"
                          className="_1QoxDw DNpAZA Qkd66A tYI0Vw o4TrkA Eph8Hg cclg9A YPTJew Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ _3AH3gw _JBdsg"
                          href="https://www.canva.com/en_gb/help/"
                        >
                          <span className="TcNIhA">
                            <span
                              aria-hidden="true"
                              className="NA_Img dkWypw"
                            >
                              <svg
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM8.75 9.85c.05-1.62 1.17-2.8 3.2-2.8 1.87 0 3.12 1.08 3.12 2.6 0 1.04-.52 1.77-1.45 2.33-.9.52-1.15.87-1.15 1.55v.39H10.9l-.01-.47c-.06-1.02.33-1.64 1.28-2.2.84-.5 1.13-.87 1.13-1.54 0-.71-.57-1.23-1.43-1.23-.89 0-1.45.54-1.5 1.37H8.74zm3 7.33c-.68 0-1.13-.43-1.13-1.09 0-.66.45-1.1 1.13-1.1.7 0 1.14.44 1.14 1.1 0 .66-.44 1.09-1.14 1.09z"
                                  fill="currentColor"
                                >
                                </path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="PYoGFg DwB3TQ">
                    <a
                      className="_1QoxDw DNpAZA Qkd66A tYI0Vw o4TrkA NT2yCg Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ"
                      href="/en_gb/login/"
                    >
                      <span className="_38oWvQ">
                        Log in
                      </span>
                    </a>
                    <a
                      className="_1QoxDw DNpAZA Qkd66A tYI0Vw o4TrkA zKTE_w Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ"
                      href="/en_gb/signup/"
                    >
                      <span className="_38oWvQ">
                        Sign up
                      </span>
                    </a>
                  </div>
                  <div className="Kfef0g mRLVxw Y2kvUA">
                    <a
                      className="_1QoxDw DNpAZA Qkd66A tYI0Vw o4TrkA zKTE_w Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ"
                      href="/en_gb/login/"
                    >
                      <span className="_38oWvQ">
                        Log in
                      </span>
                    </a>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>
        <main className="k4pGfw _2XCJMg">
          <div
            id="mainId"
            tabIndex={-1}
          />
          <div className="cUPK7A">
            <div className="uEQilg">
              <div className="OjXFww">
                <div className="e5CO3g">
                  <div className="Tnb7zQ">
                    <h1 className="_5b_6kw ZSdr0w fM_HdA">
                      What will you{' '}
                      <span className="zBWJ7A">
                        design
                      </span>
                      today?
                    </h1>
                    <p className="WjysGQ ZSdr0w _bsk3w">
                      Canva makes it easy to create professional designs                                        and to share or print them.
                    </p>
                  </div>
                  <div className="_3Xr_5Q">
                    <div className="jV0Xtw">
                      <button
                        className="_1QoxDw Qkd66A tYI0Vw o4TrkA zKTE_w Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ"
                        onClick={navigateToApp}
                        type="button"
                      >
                        <span className="_38oWvQ">
                          Continue
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="_8RKGUQ">
                  <div className="Sn2Zbw">
                    <div
                      id=":R8sb:"
                      tabIndex={-1}
                    >
                      <div className="_pFsfA">
                        Start of list: What will you design today?
                      </div>
                    </div>
                    <div className="FmtbLQ TfRV3Q _252raA Zjuzfg">
                      <p className="fFOiLQ _2xcaIA _5Ob_nQ fM_HdA">
                        <span data-id=":R8sbH1:" />
                        <a
                          className="ovm4pQ qN_0PQ"
                          draggable="false"
                          href=""
                        >
                          <span className="N00Reg">
                            Skip to end of "What will you design today?"                                                    list
                          </span>
                        </a>
                      </p>
                    </div>
                    <div
                      className="biBQjw _Ap_nw xSP9mQ _4o_g1A"
                      id=":R3osb:0"
                    >
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="Ptb8Og">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #F5B5AE 0%, #EF8D81 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/8e4c8fc1c9131aedee1176608db7b2d5.jpg"
                                          srcSet="images/8e4c8fc1c9131aedee1176608db7b2d5.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Photo editor
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    aria-label="Photo editor"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/design/play?locale=en-GB&ui=eyJFIjp7IkE_IjoiSCJ9LCJHIjp7IkIiOnRydWUsIkUiOnRydWV9fQ"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens in a new tab or                                                                        window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #D4B8FF 0%, #B685FF 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/fc97fa19d2f66f7d4ea882bc9eb7408b.jpg"
                                          srcSet="images/fc97fa19d2f66f7d4ea882bc9eb7408b.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Posters
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    aria-label="Posters"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/design/play?type=TAECj_HqKBU&category=tAFBBNL-eFc&locale=en-GB&ui=eyJHIjp7IkUiOnRydWV9fQ"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens in                                                                        a new tab or window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #BAECED 0%, #71D9DB 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/de8f4c428ed0f12d187407121929abf7.jpg"
                                          srcSet="images/de8f4c428ed0f12d187407121929abf7.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Resumes
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    aria-label="Resumes"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/design/play?type=TACQ-j4WGew&category=tACZCki4tbY&locale=en-GB&ui=eyJHIjp7IkUiOnRydWV9fQ"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens in                                                                        a new tab or window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #F5B5AE 0%, #EF8D81 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/ef5d750875ce5256c0467a5b1af7848d.jpg"
                                          srcSet="images/ef5d750875ce5256c0467a5b1af7848d.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Logos
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    aria-label="Logos"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/design/play?type=TAB7AVEOUWQ&category=tACZCvjI6mE&locale=en-GB&ui=eyJHIjp7IkUiOnRydWV9fQ"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens in a                                                                        new tab or window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #00C4CC 0%, #0B8C9D 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/5d85a01eef893b352ae26f29f48a1fdd.jpg"
                                          srcSet="images/5d85a01eef893b352ae26f29f48a1fdd.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Docs
                                      </span>
                                    </div>
                                  </div>
                                  <div className="UN_pPA" />
                                  <a
                                    aria-label="Docs"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/design/play?type=TAFJi5FXMSs&category=tAFK2fpTBVQ&locale=en-GB&ui=eyJHIjp7IkUiOnRydWV9fQ"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens in a                                                                        new tab or window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #71CB8C 0%, #348E4F 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/ec12999da1144aa1345e82a4e141f53b.png"
                                          srcSet="images/ec12999da1144aa1345e82a4e141f53b.png 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Whiteboards
                                      </span>
                                    </div>
                                  </div>
                                  <div className="UN_pPA" />
                                  <a
                                    aria-label="Whiteboards"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/design/play?type=TAEwJH6TtA8&category=tAEv8Hh5on0&locale=en-GB&ui=eyJHIjp7IkUiOnRydWV9fQ"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens                                                                        in a new tab or window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #FFDA92 0%, #FFB82E 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/5f9d0a043ec48e8cd4ebf53ec126c260.jpg"
                                          srcSet="images/5f9d0a043ec48e8cd4ebf53ec126c260.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Presentations
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    aria-label="Presentations"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/design/play?type=TACQ-gtv2Yk&category=tAExRLg81RI&locale=en-GB&ui=eyJHIjp7IkUiOnRydWV9fQ"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens in a new tab or                                                                        window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww Auc89w pEIITQ">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme dark ovbk_A XxigXQ">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div className="GHVc0Q yz9qlg">
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/a3135414a7f2cc585522158475185250.jpg"
                                          srcSet="images/a3135414a7f2cc585522158475185250.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ _8LkqtA">
                                        Magic Studio
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    aria-label="Magic Studio"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/magic/"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens in a new tab or                                                                        window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #FFFACD 0%, #F19E38 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/5494e307fd97ff2ba5853d35de6848b1.jpg"
                                          srcSet="images/5494e307fd97ff2ba5853d35de6848b1.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Brand
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    aria-label="Brand"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/for-teams/features/brand/"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens in a                                                                        new tab or window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme dark ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #FF5055 0%, #EB0007 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/b34374310f36cd5ad2b235fa7d0a8536.jpg"
                                          srcSet="images/b34374310f36cd5ad2b235fa7d0a8536.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ _8LkqtA">
                                        Social
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    aria-label="Social"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/design/play?type=TADyKgZrACU&category=tACFal755_E&locale=en-GB&ui=eyJHIjp7IkUiOnRydWV9fQ"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens in a                                                                        new tab or window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #F8B8FF 0%, #EF95E8 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/e92bc87784eed4ee4e675a4348f39b0a.jpg"
                                          srcSet="images/e92bc87784eed4ee4e675a4348f39b0a.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Videos
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    aria-label="Videos"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/design/play?type=TADUvCyAV_U&category=tADs1de8MlY&locale=en-GB&ui=eyJHIjp7IkUiOnRydWV9fQ"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens in a                                                                        new tab or window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #D4B8FF 0%, #9752FF 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/1ef73cb9e86702fb66ea788b1a9accda.jpg"
                                          srcSet="images/1ef73cb9e86702fb66ea788b1a9accda.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Prints
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    aria-label="Prints"
                                    className="e_NdpQ gwb2Ug _7YslCg"
                                    role="button"
                                    tabIndex={0}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme dark ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #271E9A 0%, #17125A 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/3f33e1044414e42de1b3284596724f34.jpg"
                                          srcSet="images/3f33e1044414e42de1b3284596724f34.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ _8LkqtA">
                                        Websites
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    aria-label="Websites"
                                    className="e_NdpQ gwb2Ug _7YslCg"
                                    role="button"
                                    tabIndex={0}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="yoO6Ww">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #F5B5AE 0%, #EF8D81 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/2854ded8fdeba11a39394e4c5feff34a.jpg"
                                          srcSet="images/2854ded8fdeba11a39394e4c5feff34a.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Instagram posts
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    aria-label="Instagram posts"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/design/play?type=TADol5GnHt0&category=tACFajEYUAM&locale=en-GB&ui=eyJHIjp7IkUiOnRydWV9fQ"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens in a new tab or                                                                        window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="qTWpbw oSwifg Q1eo8w wOTC_g _jC31Q">
                        <div className="T5RZWg">
                          <div>
                            <div role="none">
                              <div className="H1SQXA theme light ovbk_A">
                                <div className="mh2TGQ CAFSwg _6mbnHA wKiiLw">
                                  <div
                                    className="GHVc0Q"
                                    style={{
                                      background: 'linear-gradient(180deg, #D4B8FF 0%, #B685FF 100%)'
                                    }}
                                  >
                                    <div className="ZP8HvQ oDHgrA">
                                      <div className="oDHgrA">
                                        <img
                                          alt=""
                                          className="_9Al4OQ"
                                          draggable="false"
                                          src="images/172daa2c3afefcef19577439c081c52a.jpg"
                                          srcSet="images/172daa2c3afefcef19577439c081c52a.jpg 2x"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="VCbSng ovbk_A">
                                    <div className="fT3APQ ZSdr0w fM_HdA">
                                      <span className="LsmtpQ">
                                        Brochures
                                      </span>
                                    </div>
                                  </div>
                                  <a
                                    aria-label="Brochures"
                                    className="_1QoxDw DNpAZA o4TrkA CA2Rbg cwOZMg zQlusQ uRvRjQ gwb2Ug"
                                    href="https://www.canva.com/design/play?type=TABQqnM7Tvw&category=tACZCtsMxNo&locale=en-GB&ui=eyJHIjp7IkUiOnRydWV9fQ"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <span className="_pFsfA">
                                      (opens                                                                        in a new tab or window)
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="FmtbLQ TfRV3Q _252raA jAXz3w">
                      <p className="fFOiLQ _2xcaIA _5Ob_nQ fM_HdA">
                        <span data-id=":R8sb:" />
                        <a
                          className="ovm4pQ qN_0PQ"
                          draggable="false"
                          href=""
                        >
                          <span className="N00Reg">
                            Skip to start of "What will you design today?"                                                    list
                          </span>
                        </a>
                      </p>
                    </div>
                    <div
                      id="R8sbH1"
                      tabIndex={-1}
                    >
                      <div className="_pFsfA">
                        End of list: What will you design today?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nv6FFQ fnXn_Q">
            <div className="J0BMlA zpMpeQ">
              <div>
                <div className="qb0ZIw">
                  <div className="Yqwnkg">
                    <h2 className="_7jXbVQ ZSdr0w fM_HdA">
                      A perfect fit for everyone
                    </h2>
                  </div>
                  <ul className="O8yWKw">
                    <li className="_7AkXvg">
                      <div
                        className="_9Mb__A q85gIQ hrs7_w _U8fUQ"
                        style={{
                          '--PzLufg': 'column',
                          '--c5dMaQ': 'flex'
                        }as React.CSSProperties}
                      >
                        <div className="_oPMVg">
                          <div
                            className="JyB_vw"
                            style={{
                              '--75cQpg': '8px'
                            }as React.CSSProperties}
                          >
                            <div className="yYw_FA">
                              <h3 className="wp6_yg _5Ob_nQ fM_HdA nzADJw">
                                Canva Free
                              </h3>
                            </div>
                          </div>
                          <span
                            aria-hidden="true"
                            className="myA6QQ _7WVXhA"
                            style={{
                              '--9wKxyQ': '16px',
                              '--p1bKXQ': '8px'
                            }as React.CSSProperties}
                          />
                          <p className="fFOiLQ _5Ob_nQ KzArew OGJq6w">
                            <span className="dIH_FQ z2oZFw">
                              For                                                        anyone to design anything, on their own or with family, friends,                                                        or others. No experience required.
                            </span>
                          </p>
                          <span
                            aria-hidden="true"
                            className="myA6QQ _7WVXhA"
                            style={{
                              '--9wKxyQ': '24px',
                              '--p1bKXQ': '16px'
                            }as React.CSSProperties}
                          />
                        </div>
                        <div
                          className="x6XCCg"
                          style={{
                            '--zX6m4Q': '8px'
                          }as React.CSSProperties}
                        >
                          <button
                            className="_1QoxDw Qkd66A tYI0Vw o4TrkA zKTE_w Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ _4oqa3w"
                            type="button"
                          >
                            <span className="_38oWvQ">
                              Get Canva Free
                            </span>
                          </button>
                          <div className="Ms4pyA">
                            <div
                              aria-hidden="true"
                              className="_MF9bw"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="_7AkXvg">
                      <div
                        className="_9Mb__A q85gIQ hrs7_w _U8fUQ"
                        style={{
                          '--PzLufg': 'column',
                          '--c5dMaQ': 'flex'
                        }as React.CSSProperties}
                      >
                        <div className="_oPMVg">
                          <div
                            className="JyB_vw"
                            style={{
                              '--75cQpg': '8px'
                            }as React.CSSProperties}
                          >
                            <div className="yYw_FA Zxv8Qg">
                              <span
                                aria-hidden="true"
                                className="I1UKGw JRkz2A dkWypw"
                              >
                                <svg
                                  fill="none"
                                  height="32"
                                  viewBox="0 0 32 32"
                                  width="32"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    clipRule="evenodd"
                                    d="M18.546 6.545c0 .992-.568 1.851-1.395 2.272 1.304 3.493 2.67 5.21 3.871 5.344 1.35.152 2.586-.47 3.796-2.004a1.23 1.23 0 0 1 .512-.39A2.545 2.545 0 1 1 27 12.869c.002.112-.01.23-.04.353l-1.981 7.981A3.67 3.67 0 0 1 21.423 24H10.577a3.67 3.67 0 0 1-3.556-2.797l-1.98-7.981a1.329 1.329 0 0 1-.04-.353 2.545 2.545 0 1 1 1.67-1.102c.193.076.376.21.527.41 1.152 1.525 2.375 2.142 3.78 1.984 1.259-.14 2.618-1.852 3.872-5.344a2.545 2.545 0 1 1 3.696-2.272ZM7 27.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5H8.25c-.69 0-1.25-.56-1.25-1.25Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="yYw_FA">
                              <h3 className="wp6_yg _5Ob_nQ fM_HdA nzADJw">
                                Canva Pro
                              </h3>
                            </div>
                          </div>
                          <span
                            aria-hidden="true"
                            className="myA6QQ _7WVXhA"
                            style={{
                              '--9wKxyQ': '16px',
                              '--p1bKXQ': '8px'
                            }as React.CSSProperties}
                          />
                          <p className="fFOiLQ _5Ob_nQ KzArew OGJq6w">
                            <span className="dIH_FQ z2oZFw">
                              For                                                        individuals, solopreneurs and freelance designers who want                                                        unlimited access to premium content, to create professional                                                        designs with ease and scale their productivity.
                            </span>
                          </p>
                          <span
                            aria-hidden="true"
                            className="myA6QQ _7WVXhA"
                            style={{
                              '--9wKxyQ': '24px',
                              '--p1bKXQ': '16px'
                            }as React.CSSProperties}
                          />
                        </div>
                        <div
                          className="x6XCCg"
                          style={{
                            '--zX6m4Q': '8px'
                          }as React.CSSProperties}
                        >
                          <button
                            className="_1QoxDw Qkd66A tYI0Vw o4TrkA zKTE_w Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ _4oqa3w"
                            type="button"
                          >
                            <span className="_38oWvQ">
                              Start your free Pro                                                        trial
                            </span>
                          </button>
                          <div className="Ms4pyA">
                            <div
                              aria-hidden="true"
                              className="_MF9bw"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="_7AkXvg">
                      <div
                        className="_9Mb__A q85gIQ hrs7_w _U8fUQ"
                        style={{
                          '--PzLufg': 'column',
                          '--c5dMaQ': 'flex'
                        }as React.CSSProperties}
                      >
                        <div className="_oPMVg">
                          <div
                            className="JyB_vw"
                            style={{
                              '--75cQpg': '8px'
                            }as React.CSSProperties}
                          >
                            <div className="yYw_FA Zxv8Qg">
                              <span
                                aria-hidden="true"
                                className="I1UKGw JRkz2A dkWypw"
                              >
                                <svg
                                  fill="none"
                                  height="32"
                                  viewBox="0 0 32 32"
                                  width="32"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    clipRule="evenodd"
                                    d="M18.546 6.545c0 .992-.568 1.851-1.395 2.272 1.304 3.493 2.67 5.21 3.871 5.344 1.35.152 2.586-.47 3.796-2.004a1.23 1.23 0 0 1 .512-.39A2.545 2.545 0 1 1 27 12.869c.002.112-.01.23-.04.353l-1.981 7.981A3.67 3.67 0 0 1 21.423 24H10.577a3.67 3.67 0 0 1-3.556-2.797l-1.98-7.981a1.329 1.329 0 0 1-.04-.353 2.545 2.545 0 1 1 1.67-1.102c.193.076.376.21.527.41 1.152 1.525 2.375 2.142 3.78 1.984 1.259-.14 2.618-1.852 3.872-5.344a2.545 2.545 0 1 1 3.696-2.272ZM7 27.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5H8.25c-.69 0-1.25-.56-1.25-1.25Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="yYw_FA">
                              <h3 className="wp6_yg _5Ob_nQ fM_HdA nzADJw">
                                Canva for Teams
                              </h3>
                            </div>
                          </div>
                          <span
                            aria-hidden="true"
                            className="myA6QQ _7WVXhA"
                            style={{
                              '--9wKxyQ': '16px',
                              '--p1bKXQ': '8px'
                            }as React.CSSProperties}
                          />
                          <p className="fFOiLQ _5Ob_nQ KzArew OGJq6w">
                            <span className="dIH_FQ z2oZFw">
                              All                                                        the great features of Canva Pro, plus we think you'll love these                                                        features designed to allow teams of all sizes to collaborate                                                        with ease.
                            </span>
                          </p>
                          <span
                            aria-hidden="true"
                            className="myA6QQ _7WVXhA"
                            style={{
                              '--9wKxyQ': '24px',
                              '--p1bKXQ': '16px'
                            }as React.CSSProperties}
                          />
                        </div>
                        <div
                          className="x6XCCg"
                          style={{
                            '--zX6m4Q': '8px'
                          }as React.CSSProperties}
                        >
                          <button
                            className="_1QoxDw Qkd66A tYI0Vw o4TrkA zKTE_w Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ _4oqa3w"
                            type="button"
                          >
                            <span className="_38oWvQ">
                              Start your free Teams                                                        trial
                            </span>
                          </button>
                          <a
                            className="_1QoxDw DNpAZA Qkd66A tYI0Vw o4TrkA NT2yCg Qkd66A tYI0Vw lsXp_w cwOZMg zQlusQ uRvRjQ DwvmWA"
                            href="/contact-sales/"
                            rel="noopener"
                            target="_blank"
                          >
                            <span className="_38oWvQ">
                              Contact sales
                            </span>
                            <span className="_pFsfA">
                              (opens                                                        in a new tab or window)
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="z9XbBg">
                    <p className="fFOiLQ _2xcaIA ZSdr0w KzArew">
                      <span className="dIH_FQ z2oZFw">
                        <a
                          data-anchor-id="education"
                          href="/education/"
                          rel="noopener"
                          target="_blank"
                        >
                          Educational organisations
                        </a>
                        {' '}and{' '}
                        <a
                          data-anchor-id="nonprofits"
                          href="/canva-for-nonprofits/"
                          rel="noopener"
                          target="_blank"
                        >
                          nonprofits
                        </a>
                        {' '}can enjoy premium Canva                                            features for free
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <script
      dangerouslySetInnerHTML={{
        __html: '!function () { if (\'PerformanceLongTaskTiming\' in window) { var g = window.__tti = { e: [] }; g.o = new PerformanceObserver(function (l) { g.e = g.e.concat(l.getEntries()) }); g.o.observe({ entryTypes: [\'longtask\'] }) } }();'
      }}
      nonce=""
    />
    <script
      nonce=""
      src="src/styles/Canva-Clone/js/7.16.0.min.js.js"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: 'Sentry.init({ "dsn": "https:\u002F\u002F3e6b0deb414549c8901b5382885e478b@o13855.ingest.sentry.io\u002F5862012", "release": "20231004-21-b2e3100", "environment": "prod", "autoSessionTracking": true });'
      }}
      nonce=""
      type="application/javascript"
    />
    <script
      crossOrigin="anonymous"
      nonce=""
      src="src/styles/Canva-Clone/js/bd461dd9109a6336.strings.js"
    />
    <script
      crossOrigin="anonymous"
      nonce=""
      src="src/styles/Canva-Clone/js/bb9411c272ea330d.en-GB.js"
    />
    <script
      crossOrigin="anonymous"
      defer
      nonce=""
      src="src/styles/Canva-Clone/js/91bc86c51b5b0769.runtime.js"
    />
    <script
      crossOrigin="anonymous"
      defer
      nonce=""
      src="src/styles/Canva-Clone/js/02f2e9d3bdc90360.vendor.js"
    />
    <script
      crossOrigin="anonymous"
      defer
      nonce=""
      src="src/styles/Canva-Clone/js/8eee952243355752.vendor.js"
    />
    <script
      crossOrigin="anonymous"
      defer
      nonce=""
      src="src/styles/Canva-Clone/js/72352fd7901cd809.js"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: '(function () { var js = "window[\'__CF$cv$params\']={r:\'8127d65a6b61b8b2\',t:\'MTY5NjY5OTQ2Mi45NDEwMDA=\'};_cpo=document.createElement(\'script\');_cpo.nonce=\'uhFebRXsqccA2ClBhIG3Ew\',_cpo.src=\'/cdn-cgi/challenge-platform/scripts/jsd/main.js\',document.getElementsByTagName(\'head\')[0].appendChild(_cpo);"; var _0xh = document.createElement(\'iframe\'); _0xh.height = 1; _0xh.width = 1; _0xh.style.position = \'absolute\'; _0xh.style.top = 0; _0xh.style.left = 0; _0xh.style.border = \'none\'; _0xh.style.visibility = \'hidden\'; document.body.appendChild(_0xh); function handler() { var _0xi = _0xh.contentDocument || _0xh.contentWindow.document; if (_0xi) { var _0xj = _0xi.createElement(\'script\'); _0xj.nonce = \'uhFebRXsqccA2ClBhIG3Ew\'; _0xj.innerHTML = js; _0xi.getElementsByTagName(\'head\')[0].appendChild(_0xj); } } if (document.readyState !== \'loading\') { handler(); } else if (window.addEventListener) { document.addEventListener(\'DOMContentLoaded\', handler); } else { var prev = document.onreadystatechange || function () { }; document.onreadystatechange = function (e) { prev(e); if (document.readyState !== \'loading\') { document.onreadystatechange = prev; handler(); } }; } })();'
      }}
      nonce=""
    />
    <iframe
      height="1"
      style={{
        border: 'none',
        left: '0px',
        position: 'absolute',
        top: '0px',
        visibility: 'hidden'
      }}
      width="1"
    />
  </body>
</html>

</>
  )
}

export default Home
