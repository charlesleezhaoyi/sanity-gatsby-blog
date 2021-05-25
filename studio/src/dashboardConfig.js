export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60acebcbf98c26ad2fc5ebeb",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-7vupozwj",
                  apiId: "0a81ab09-11d9-4ed6-91ec-020537c21704",
                },
                {
                  buildHookId: "60acebccdd4296bca3e3d05f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-hfmq2e3h",
                  apiId: "bb6a1956-f120-463c-b152-4f745253460f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/charlesleezhaoyi/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-hfmq2e3h.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
