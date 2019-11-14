const architecture = {
  label: "Cloud-Wave",
  nodes: [
    "index.js",
    {
      label: "env",
      nodes: [
        "dev.env",
        "test.env",
        "prod.env"
      ]
    },
    {
      label: "pages",
      nodes: [
        "notebook",
        "artical",
        "account"
      ]
    }
  ]
}

module.exports = architecture;