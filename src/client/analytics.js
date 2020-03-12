// Analytics utilizes the segment node of sapper to watch for page changes

let previousEvent = null;
const hasAnalytics = window.firebase && window.firebase.analytics;
const isDebug = false;
let analytics = null;
if (hasAnalytics) {
  analytics = firebase.analytics();
}

const logEvent = (eventName, ...params) => {
  if (isDebug) {
    console.log("ANALYTICS:", eventName, ...params);
  }
  if (hasAnalytics) {
    analytics.logEvent(eventName, ...params);
  }
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