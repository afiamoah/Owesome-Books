/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import { DateTime } from "./luxon.js";

export const DisplayDateTime = (Date) => {
  Date = DateTime.now();
  document.querySelector('.date').innerHTML = Date.toLocaleString(DateTime.DATETIME_MED);
};
