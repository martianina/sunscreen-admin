const surveyMetadata = [
  {
    description: "Ginger Science SPF Survey",
    external_url: "https://gingerscience.org", // <-- this can link to a page for the specific file too
    image: "https://tan-everyday-mite-419.mypinata.cloud/ipfs/bafkreie2sicty457eg7zll4xlrkphcepbujp7nhr5wwd2hiihsrrob47iy",
    name: "Ginger SPF",
    attributes: [
      {
        trait_type: "Survey",
        value: "Sunscreen v.1",
      },
      {
        trait_type: "Jurisdiction",
        value: "Ireland",
      },
      {
        trait_type: "Age",
        value: "35-44",
      },
      {
        trait_type: "Reuse",
        value: "yes",
      },
    ],
  },
  
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default surveyMetadata;
