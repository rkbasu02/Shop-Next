import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "bg9c5ip7",
  dataset: "production",
  useCdn: true,
});
