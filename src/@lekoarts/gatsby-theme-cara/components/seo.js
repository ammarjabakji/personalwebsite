import React from "react";
import Helmet from "react-helmet";
import Thumbnail from "./banner.jpg";
import logo from "./favicon-32x32.png";

// import {
// 	url,
// 	defaultDescription,
// 	social,
// 	defaultTitle,
// 	socialLinks,
// 	address,
// 	contact,
// 	legalName,
// 	foundingDate,
// 	logo,
// } from 'Data'

export const SEO = ({
  title = "Ammar Jabakji Website",
  description = "Full Stack Javascript Developer, React Developer, Gatsby Developer, GraphQl Developer, WordPress Developer.",
  location = "Istanbul, Turky"
}) => {
  const structuredDataOrganization = `{ 
		"@context": "https://ammar.rokkey.com",
		"@type": "Freelancer",
		"legalName": "Ammar Jabakji",
		"url": "https://ammar.rokkey.com"",
		"logo": "${logo}",
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "ammarjabakji@gmail.com",
			"contactType": "customer service"
		}],
  	}`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={`https://ammar.rokkey.com`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />
      <meta
        property="fb:app_id"
        content="https://www.facebook.com/ammar.jabakji"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="https://twitter.com/ammarjabakji" />
      <meta name="twitter:site" content="https://twitter.com/ammarjabakji" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={Thumbnail} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      {/* <link rel="publisher" href={socialLinks.google} /> */}
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};
export default SEO;
