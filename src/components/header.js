const Header = (title, date, temp) => {
  const newHeader = document.createElement("div");
  const newDate = document.createElement("span");
  const header1 = document.createElement("h1");
  const temp1 = document.createElement("span");

  newHeader.classList.add("header");
  newDate.classList.add("date");
  temp1.classList.add("temp");

  newDate.textContent = `${date}`
  header1.textContent = `${title}`
  temp.textContent = `${temp}`

  newHeader.appendChild(newDate);
  newHeader.appendChild(header1);
  newHeader.appendChild(temp1);

  return newHeader

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  headerAppender.document.querySelector("header-container");
  headerAppender.appendChild(Header());

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
