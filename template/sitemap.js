const path = require("path");
const glob = require("glob");
const fs = require("fs");
const fetch = require('isomorphic-unfetch');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const SITE_ROOT = "http://YOUR_WEBSITE";
const SOURCE = path.join(resolveApp("pages"), "/**/!(_*).js");
const API_SOURCE = "http://YOUR_API";
const DESTINATION = path.join(resolveApp(".next/static"), "sitemap.xml");
const createSitemap = async () => {

  let diskPages = glob.sync(SOURCE);
  let xml = "";
  xml += `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  try {
    let response = await fetch(API_SOURCE);
    let data = await response.json();
    let { result } = data;
    if (Array.isArray(result)) {
      result.forEach((artical, index) => {
        xml += "<url><loc>";
        xml += `${SITE_ROOT}/artical/${artical.id}`;
        xml +=
          "</loc><changefreq>never</changefreq><priority>1</priority></url>";
      });
    }
  } catch (e) {
    console.error(e.toString())
  }
  xml += "</urlset>"
  return xml;
};

module.exports = { DESTINATION, createSitemap };