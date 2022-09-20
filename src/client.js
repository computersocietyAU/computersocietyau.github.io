import client from "@sanity/client"

export default client({
  projectId: "8c2dnw4h",
  dataset: "csau-content",
  useCdn: true,
  apiVersion: "2022-09-20",
})
