/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import Books from "./modules/owesome.js";
import { AddNewBook, DisplayAllBooks, ShowContactDetails } from "./modules/singlepage.js";
import { DisplayDateTime } from "./modules/datetime.js";

const bk = new Books();
bk.AddNewBook();
AddNewBook();
DisplayAllBooks();
window.addEventListener("load", () => {
  });
ShowContactDetails();
DisplayDateTime(Date)
bk.RemoveBooks();