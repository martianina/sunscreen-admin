const surveyMetadata = [
  {
    description: "Ginger Science SPF Survey",
    external_url: "https://gingerscience.org", // <-- this can link to a page for the specific file too
    //image: "https://tan-everyday-mite-419.mypinata.cloud/ipfs/bafybeigexxenxbilx23ouhdierwevb4pgoulup5w7mzxgmtwydpfai6ehe",
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
      
    ],
  },
  
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default surveyMetadata;
