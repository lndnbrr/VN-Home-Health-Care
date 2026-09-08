const BASE_URL = "https://vnhhc.com";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/pages/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pages/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pages/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pages/insurance`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pages/skilledservices/homeHealthAide`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/pages/skilledservices/medicalSocialServices`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/pages/skilledservices/rehabilitation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/pages/skilledservices/skilledNursing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
