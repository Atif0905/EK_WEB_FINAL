const fs = require("fs");
const { routes } = require("./routes");

const BASE_URL = "https://ekaksharbuildtech.com"; // Replace with your actual website URL

const dynamicRoutes = {
  // Example: Replace :id with the actual leader IDs (add as many IDs as you need)
  "leader/:id": [1, 2, 3], // You can add more IDs here
};

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(({ path }) => {
      // Handle dynamic routes
      if (path.includes(":id")) {
        // Generate a URL for each dynamic ID (e.g., /leader/1, /leader/2, etc.)
        return dynamicRoutes["leader/:id"]
          .map((id) => {
            const fullPath = path.replace(":id", id); // Replace :id with actual values
            return `
    <url>
      <loc>${BASE_URL}${fullPath}</loc>
    </url>`;
          })
          .join("\n");
      } else {
        // For static routes, simply add the URL
        const fullPath = path === "/" ? "" : path; // Avoid double slashes for the home route
        return `
    <url>
      <loc>${BASE_URL}${fullPath}</loc>
    </url>`;
      }
    })
    .join("\n")}
</urlset>`;

  // Write the sitemap to a file
  fs.writeFileSync("sitemap.xml", sitemap);
  console.log("Sitemap generated successfully!");
};

generateSitemap();
