/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btt").addEventListener("click", () => {
    domainNameGenerator().forEach((element, index) => {
      const el = (sel, par) => (par || document).querySelector(sel);
      const elNew = (tag, prop) =>
        Object.assign(document.createElement(tag), prop);
      const elParent = el("#newDomain");
      elParent.append(elNew("p", { textContent: index + 1 + "   " + element }));
      // elParent.append(elNew("p", { textContent: "Item Last (New)" }));
    });
  });
};

let result = [];

let domainNameGenerator = () => {
  let pronoun = ["A", "The", "Our"];
  let adjective = ["great", "amazing", "wild", "big", "rabbit"];
  let noun = ["jogger", "cat", "services", "car", "keys"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adjective[j] + noun[k] + ".com");
        result.push(pronoun[i] + adjective[j] + noun[k] + ".com");
      }
    }
  }

  // pronoun.forEach(pro) => {
  //   adjective.forEach(adj) => {
  //     noun.forEach(nou) => {
  //       console.log(pro + adj + nou + ".com");
  //       result.push(pro + adj + nou + ".com");
  //     }
  //   }

  // }

  return result;
};

// };
