// ========================================
// 13 — DATE METHODS IN JAVASCRIPT
// ========================================
// Date object in JS is used to work with:
// - current date/time
// - timestamps
// - date comparisons
// - formatting
// - schedule calculations
//
// Date stores time internally in milliseconds.
// ========================================


// ========================================
// 1. CREATE DATE OBJECTS
// ========================================

// Current date and time
let now = new Date();

// Specific date (YYYY, MM, DD)
let d1 = new Date(2025, 10, 25); 
// NOTE: Month is 0-indexed → 10 = November

// Specific date and time
let d2 = new Date(2025, 10, 25, 14, 30, 45);

// Using string (not recommended: unreliable)
let d3 = new Date("2025-11-25");


// ========================================
// 2. GET METHODS (READ VALUES)
// ========================================

let d = new Date();

/*
getFullYear()     → 2025
getMonth()        → 0–11
getDate()         → 1–31
getDay()          → 0–6 (0 = Sunday)
getHours()        → 0–23
getMinutes()      → 0–59
getSeconds()      → 0–59
getMilliseconds() → 0–999
getTime()         → milliseconds since 1970
*/

d.getFullYear();
d.getMonth();
d.getDate();
d.getDay();
d.getHours();
d.getMinutes();
d.getSeconds();
d.getMilliseconds();
d.getTime();      // UNIX timestamp in ms


// ========================================
// 3. SET METHODS (MODIFY DATE)
// ========================================

let date = new Date();

// Setters
date.setFullYear(2030);
date.setMonth(5);          // June
date.setDate(15);          // 15th day
date.setHours(10);
date.setMinutes(45);
date.setSeconds(59);
date.setMilliseconds(200);

// Set timestamp
date.setTime(1700000000000);


// ========================================
// 4. TIMESTAMPS (VERY IMPORTANT)
// ========================================

// Current timestamp (ms)
Date.now();

// Convert date → timestamp
new Date("2025-11-19").getTime();

// Convert timestamp → date
new Date(1700000000000);


// ========================================
// 5. DATE DIFFERENCE (DAYS, HOURS, ETC.)
// ========================================

// Days difference
function daysBetween(d1, d2) {
  let diff = Math.abs(d2 - d1);        // timestamp diff
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

let A = new Date("2025-01-01");
let B = new Date("2025-01-10");

daysBetween(A, B);
// 9


// ========================================
// 6. FORMATTING DATES (Readable Output)
// ========================================

let today = new Date();

// Default
today.toString();           
// "Wed Nov 19 2025 13:45:22 GMT+0530"

today.toDateString();       
// "Wed Nov 19 2025"

today.toTimeString();       
// "13:45:22 GMT+0530"

today.toLocaleDateString("en-IN");
// "19/11/2025"

today.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});
// "Wednesday, November 19, 2025"


// ========================================
// 7. GETTING INDIVIDUAL PARTS (HANDY SNIPPETS)
// ========================================

// Day → Monday, Tuesday, ...
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
days[today.getDay()];

// Month → Jan, Feb, ...
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
months[today.getMonth()];


// ========================================
// 8. AUTO-CORRECTION FEATURE (special)
// ========================================
// JS automatically fixes invalid dates

new Date(2025, 0, 32); 
// Feb 1, 2025

new Date(2025, 13, 10);
// Jan 10, 2026


// ========================================
// 9. TIMEZONES (IMPORTANT FOR REAL PROJECTS)
// ========================================

today.getTimezoneOffset();  
// minutes difference from UTC

// Example: +05:30 → returns -330

today.toLocaleString("en-US", { timeZone: "UTC" });
// formatted in UTC


// ========================================
// 10. COMMON PITFALLS
// ========================================

// (A) Months are 0-indexed!
new Date(2025, 0, 1);   // January 1, NOT February

// (B) Strings are unreliable
new Date("2025/11/19");
// Browser-dependent → avoid

// (C) Always use timestamps for calculations
let t1 = new Date("2025-01-01").getTime();
let t2 = new Date("2025-01-05").getTime();
(t2 - t1) / (1000 * 60 * 60 * 24); // 4 days


// ========================================
// 11. BUILDING CUSTOM DATE FORMATS
// ========================================

function formatDate(date) {
  let d = date.getDate().toString().padStart(2, "0");
  let m = (date.getMonth() + 1).toString().padStart(2, "0");
  let y = date.getFullYear();

  return `${d}-${m}-${y}`;
}

formatDate(new Date());
// "19-11-2025"


// ========================================
// END OF DATE METHODS SHEET
// ========================================
