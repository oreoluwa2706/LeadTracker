let myLeads = [];
let bdEl = document.getElementById("bd");
let inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (i in myLeads) {
    listItems += `<li>
    <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i]}
    </a>
    <li>`;
  }
  ulEl.innerHTML = listItems;
}
