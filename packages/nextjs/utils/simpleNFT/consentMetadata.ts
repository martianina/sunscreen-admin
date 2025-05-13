const consentMetadata = [
  {
    description: "Ginger Science Study Enrollment",
    external_url: "https://gingerscience.org", // <-- this can link to a page for the specific file too
    //     image: "https://tan-everyday-mite-419.mypinata.cloud/ipfs/bafybeigexxenxbilx23ouhdierwevb4pgoulup5w7mzxgmtwydpfai6ehe",
    name: "Ginger SPF",
    attributes: [
      {
        trait_type: "Consent",
        value: "Consent v.1",
      },
      
      
      {
        trait_type: "Survey",
        value: 0,
      },
      {
        trait_type: "Reviews",
        value: 0,
      },
      {
        trait_type: "Jurisdiction",
        value: "Ireland",
      },
      {
        trait_type: "Age Range",
        value: "35-44",
      },
      {
        trait_type: "Reuse",
        value: "yes",
      },
    ],
  },
  
];

export type consentMetaData = (typeof consentsMetadata)[number];

export default consentMetadata;
