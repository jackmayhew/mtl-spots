import Head from "next/head";

function Meta({ keywords, description, titles, img, metaTitle }) {
  return (
    <Head>
      <title>MTLSPOTS - {titles}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="language" content="English" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      {/* <link rel="icon" type="image/png" href={img} /> */}
      {/* <link rel="apple-touch-icon" href={img} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://www.mtlspots.ca/" />
      <meta property="og:site_name" content={metaTitle} />
      {/* <meta property="og:image" content={img} />
      <meta property="og:image:url" content={img} /> */}
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}

Meta.defaultProps = {
  keywords: "skateboarding, montreal, quebec",
  description: "find and share skate spots in montreal",
  img: "https://i.ibb.co/Jy9srLm/n590yq77mplvhduf6fpz937taf3mc6rz.jpg",
  metaTitle: "mtlspots",
};

export default Meta;
