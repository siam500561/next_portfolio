import { MetadataRoute } from "next";

// Replace with your actual domain
const siteUrl = "https://iamsiam.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Add static routes here
  const staticRoutes = [
    "/",
    // Add other static paths like '/about', '/contact' if they exist
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8, // Homepage usually has highest priority
  }));

  // --- Example: Add dynamic routes (e.g., projects) ---
  // const projects = await fetchProjects(); // Fetch your project data
  // const projectUrls = projects.map((project) => ({
  //   url: `${siteUrl}/projects/${project.slug}`,
  //   lastModified: new Date(project.updatedAt), // Use actual update date if available
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }));
  // ----------------------------------------------------

  return [
    ...staticUrls,
    // ...projectUrls, // Uncomment and adapt if you have dynamic routes
  ];
}
