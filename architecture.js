const architecture = {
  label: "template",
  nodes: [
    {
      label: "pages", nodes: [
        "blog.js",
        "index.js",
      ]
    },
    {
      label: "static", nodes: [
        {
          label: "css", nodes: [
            "index.css"
          ]
        },
        {
          label: "images", nodes: [
            "logo.jpg"
          ]
        },
        {
          label: "js", nodes: [
            "animate.css"
          ]
        },
      ]
    },
    ".babelrc",
    ".gitignore",
    "next.config.js",
    "package.json",
    "server.js",
    "README.md",
    "routes.js",
    "server.js",
    "sitemap.js",
  ]
}

module.exports = architecture;