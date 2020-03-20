// Analytics utilizes the segment node of sapper to watch for page changes

let previousEvent = null;
let hasAnalytics = false;
const isDebug = false;
let analytics = null;

const logEvent = (eventName, ...params) => {
  if (isDebug) {
    console.log("ANALYTICS:", eventName, ...params);
  }
  if (hasAnalytics) {
    analytics.logEvent(eventName, ...params);
  }
}

export const loadFirebase = async () => {

  if (window.location.hostname !== "localhost") {
    const firebaseApp = import("/__/firebase/7.10.0/firebase-app.js");
    const firebaseAnalytics = import("/__/firebase/7.10.0/firebase-analytics.js");
    const firebaseInit = import("/__/firebase/init.js");
  
    await Promise.all([firebaseApp, firebaseAnalytics, firebaseInit])
      .then(r => analytics = window.firebase.analytics())
      .catch( err => console.error(err));
  }
  else {
    console.log("Skipping firebase analytics");
  }

  hasAnalytics = analytics !== null;

  return hasAnalytics;
}

export const logPageView = (segment) => {
  // case: previousEvent is null - a new page view.
  // case: segment !== previousEvent - a new page was loaded into view
  const isPageView = previousEvent === null || segment !== previousEvent;
  const pageName = typeof segment === "undefined" ? "index" : segment;
  if (isPageView) {
    logEvent("page_view", { page: pageName });
  }
}

export const logPurchaseOption = (option) => {
  logEvent("select_content", {
    content_id: option.toLowerCase(),
    content_type: "store_link"
  });
}