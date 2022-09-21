import client from "@sanity/client"

export default client({
  projectId: "wzu06sd5",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-09-21",
});
