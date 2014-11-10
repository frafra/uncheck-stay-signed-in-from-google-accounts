var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "https://accounts.google.com/*",
  contentScript: 'document.getElementById("PersistentCookie").checked=false;'
});
