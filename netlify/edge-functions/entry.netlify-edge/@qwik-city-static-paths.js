const staticPaths = new Set(["/_headers","/favicon.svg","/images/activities.png","/images/education.png","/images/experience.png","/images/gh.png","/images/lang.png","/images/mikkel.jpg","/images/mikkel.webp","/images/skills.png","/images/summary.png","/images/up.png","/profile.service.json","/q-manifest.json","/service-worker.js"]);
function isStaticPath(p) {
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  return false;
}
export { isStaticPath };