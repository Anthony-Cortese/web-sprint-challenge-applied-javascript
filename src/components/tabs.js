const topics = document.querySelector(".topics");
axios.get("https://lambda-times-api.herokuapp.com/topics")
  .then(res => {
    const tab = Tabs(res.data);
    topics.appendChild(tab)
  })


const Tabs = (topics) => {

  const tab = document.createElement("div");
  const tab1 = document.createElement("div");
  const tab2 = document.createElement("div");
  const tab3 = document.createElement("div");
  const tab4 = document.createElement("div");

tab.classList.add("tab");
tab1.classList.add("tab");
tab2.classList.add("tab");
tab3.classList.add("tab");
tab4.classList.add("tab");

tab.textContent = topics[0]
tab1.textContent = topics[1]
tab2.textContent = topics[2]
tab3.textContent = topics[3]
tab4.textContent = topics[4]

topics.appendChild(tab)
topics.appendChild(tab1)
topics.appendChild(tab2)
topics.appendChild(tab3)
topics.appendChild(tab4)

tab.addEventListener("click", () => {
    tab.classList.toggle("tab");
});
tab1.addEventListener("click", () => {
    tab1.classList.toggle("tab")
});   
tab2.addEventListener("click", () => {
    tab2.classList.toggle("tab")
});
tab3.addEventListener("click", () => {
    tab3.classList.toggle("tab")
});
tab4.addEventListener("click", () => {
    tab4.classList.toggle("tab")
});

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
