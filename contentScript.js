//v1.3

const username = "n401696";
const password = "696969";

chrome.storage.sync.get('mytext', function(data) {
  console.log(data.mytext);
});

function check() {

  if (!document.title.startsWith("Aanmelden")) {
    return;
  }

  setTimeout(function() {
    if (document.readyState === "complete") {
      login();
      return;
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

  body {
    background-color: #333333;
  }

  .bg1_webp, .bg2_webp, .bg3_webp, .bg4_webp, .bg5_webp, .bg6_webp, .bg7_webp {
    background-image: url(https://snoworange420.github.io/assets/bob.png); !important
  }

  `)


  // searchAndGetElementsByClassName("splash-container", (elements) => {
  //   element = elements[0];

  //   console.log(element);

  //   console.log(element.style.background_image);
  //   element.style.background_image = `url(/images/login_7.webp)`
  // })

  // return;
  //
  // searchAndGetElementById('username', (element) => {
  //   submit(element, username);
  //   searchAndGetElementById('username_submit', (element) => {
  //     element.click()
  //     searchAndGetElementById('rswp_password', (element) => {
  //       submit(element, password);
  //       searchAndGetElementById('rswp_submit', (element) => {
  //         element.click();
  //         console.log("Finished login attempt.");
  //       })
  //     })
  //   })
  // })
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