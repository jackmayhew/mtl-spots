import Head from "next/head";

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content="Find And Share Skate Spots In Montreal" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="language" content="Spanish" />
    </Head>
  );
}

Meta.defaultProps = {
  title: "MTL SPOTS",
  keywords: "Skateboarding",
  description: "Find And Share Skate Spots In Montreal",
};

export default Meta;
