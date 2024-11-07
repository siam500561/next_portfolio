import { sanityClient } from "./sanityClient";

export async function fetchProjects() {
  const query = `*[_type == "projects"]{
    _id,
    title,
    "imageUrl": image.asset->url,
    description,
    technologies
  }`;

  const projects = await sanityClient.fetch(
    query,
    {},
    {
      next: { revalidate: 30 }, // Revalidate every 30 seconds
    }
  );

  return projects;
}
