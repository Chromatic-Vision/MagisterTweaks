//v1.3

if (typeof browser === "undefined") {
  var browser = chrome;
}

const username = "null";
const password = "null";

function check() {

  if (!document.title.startsWith("Aanmelden")) {
    return;
  }

  setTimeout(function() {
    if (document.readyState === "complete") {
      login();
    } else {
      check();
    }
  }, 100)
}

function login() {

  console.log("Logging in...");

  addStyle(`

  h1, h2 {

    background-image: linear-gradient(45deg, #f3ec78, #af4261);

    background-size: 100%;
    background-repeat: repeat;
  
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  
  h1 {
    margin: 0 0 0.5rem;
    padding: 0 0 0.5rem;
  }
  
  h2 {
    margin: 0.5rem 0 1rem;
  }

  body {
    background-color: #333333;
  }
  
  #injected-splash-container {
    display: block;
    float: right;
    width: 50%;
    left: 50%;
    position: fixed;
    top: 0;
}

  `)

  // searchAndGetElementsByClassName("splash-container", (elements) => {
  //   element = elements[0];

  //   console.log(element);

  //   console.log(element.style.background_image);
  //   element.style.background_image = `url(/images/login_7.webp)`
  // })

  const bob_url = browser.runtime.getURL('assets/bob.png');

  searchAndGetElementsByClassName('splash-container', (elements) => {
    let parent;
    for (let e of elements) {
      parent = e.parentElement;
      e.remove();
    }
    parent.innerHTML = '<img id="injected-splash-container" src=' + bob_url + '></img>'
    console.log(elements);
  })

  return;

  searchAndGetElementById('username', (element) => {
    submit(element, username);
    searchAndGetElementById('username_submit', (element) => {
      element.click()
      searchAndGetElementById('rswp_password', (element) => {
        submit(element, password);
        searchAndGetElementById('rswp_submit', (element) => {
          element.click();
          console.log("Finished login attempt.");
        })
      })
    })
  })
}

function searchAndGetElementById(element_id, callback) {
  setTimeout(function() {
    if ((element = document.getElementById(element_id)) === null) {
      searchAndGetElementById(element_id, callback);
    } else {
      callback(element);
      return;
    }
  }, 50)
}

function searchAndGetElementsByClassName(element_class, callback) {
  setTimeout(function() {
    if ((elements = document.getElementsByClassName(element_class)).length <= 0) {
      searchAndGetElementsByClassName(element_class, callback);
    } else {
      callback(elements);
      return;
    }
  }, 50)
}

function searchAndGetElementsByTagName(element_tagname, callback) {
  setTimeout(function() {
    if ((elements = document.getElementsByTagName(element_tagname)).length <= 0) {
      searchAndGetElementsByTagName(element_tagname, callback);
    } else {
      callback(elements);
      return;
    }
  }, 50)
}



function submit(element, value) {
  element.value = value;
  const event = new InputEvent('input');
  element.dispatchEvent(event);
}

function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

if (username == null || password == null) {
  console.error("Username or password not filled in yet! Please go to line 3 and 4 in contentScript.js and configure your username and password.");
} else {
  check();
}