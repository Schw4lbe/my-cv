import { data } from "./data";

export default {
  languageSelected:
    localStorage.getItem("languageSelected") === "de" ? "de" : "en",
  contentData: data,
};
