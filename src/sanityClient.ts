import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "v1",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);

export function imgUrlBuilder(source: any) {
  return builder.image(source).width(800).quality(80);
}

export const fileUrlFor = (source) => {
  const { projectId, dataset } = sanityClient.config();
  const [, fileId, extension] = source.split("-");
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${fileId}.${extension}`;
};

export default sanityClient;
