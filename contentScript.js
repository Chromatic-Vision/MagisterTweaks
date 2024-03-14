//v1.3

console.log("bruh")

if (typeof browser === "undefined") {
  var browser = chrome;
}

const username = null;
const password = null;

function inject() {

  dark_bg = "#333333";
  lighter_bg = "#252525";

  primary_color = "#547a11";
  secondary_color = "#65960f";
  tertiair_color = "#79b314";

  light_font_color = "#d6caca";

  injectStyle(`
  
  h1 {
    padding-bottom: 10px;
    margin-bottom: 6px;
  }
  
  h2 {
    margin-top: 6px;
  }
  
  h1, h2 {

    background-image: linear-gradient(45deg, #f3ec78, #af4261);

    background-size: 100%;
    background-repeat: repeat;
  
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    
  }
  
  .dna-btn-primary {
    background: ${primary_color};
  }
  
  .dna-btn-primary:hover {
    background: ${secondary_color};
  }
  
  .dna-input-group, .dna-text-input {
    background: ${lighter_bg};
    color: #ffffff;
  }
  
  .dna-input-group:hover, .dna-text-input:hover, .dna-input-group-focused, .dna-input-group.cdk-focused, .dna-text-input:focus {
    border-color: ${secondary_color};
  }
  
  input:-internal-autofill-selected {
    background-color: ${lighter_bg} !important;
  }
  
  input:-webkit-autofill {
    box-shadow: 0 0 0 1000px ${lighter_bg} inset;
  }
  
  .dna-btn-icon-primary {
    color: ${secondary_color};
  }
  
  #injected-splash-container {
    display: block;
    float: right;
    width: 50%;
    left: 50%;
    position: fixed;
    top: 0;
  }
  
  body {
    background-color: ${lighter_bg};
    
    --dna-text-color-light: #ffffff;
    --dna-primary-text: var(--dna-text-color-light);
    
    --dna-primary-hue: 82;
    --dna-primary-sat: 67%;
    --dna-primary-lum: 27%;
    --dna-primary: ${primary_color};
    --dna-secondary: #b58cb8;
  }
  
  :root {
    --chrome-background: ${dark_bg} !important;
    --primary-background: ${primary_color};
    --secondary-background: ${secondary_color};
    --background-1: ${primary_color};
  }
   
  .block h3 {
    color: #c75536;
  }
   
  .menu-footer {
    background: ${primary_color};
  }
  
  .dialog .title, .dialog .content-pane, form .radio input[type=radio]~label, fieldset .radio input[type=radio]~label, input[type=checkbox]+label span, .block .content form, .k-dropdown .k-dropdown-wrap.k-state-default, dl.list-dl, .block, .form, div.content, .widget li, td, dt, dd, .k-input, input.k-textbox, textarea.k-textbox, input.k-textbox:hover, textarea.k-textbox:hover, .k-textbox>input, .k-multiselect-wrap, .endlink {
    background-color: ${lighter_bg} !important;
  }
  
  #bronnen-container .bronnen-quota-label, .column-container h3, .first-column, .rest-column, div.loading-overlay, th, h4.ng-binding, .k-scheduler-dayview .k-scheduler-header .k-scheduler-table th, .k-scheduler-weekview .k-scheduler-header .k-scheduler-table th, .k-scheduler-workWeekview .k-scheduler-header .k-scheduler-table th {
    background: ${lighter_bg} !important;
  }
  
  span, th, a, td, .k-scheduler .k-event {
    color: ${light_font_color} !important;
  }
  
  table.table-grid-layout>tbody>tr.selected::after, .sm-grid .k-state-selected .more:after, form .radio input[type=radio]:checked~label:before, fieldset .radio input[type=radio]:checked~label:before, .head-bar, input[type=checkbox]:checked+label span:after, .widget .agenda-list li.alert span.time:after, .widget .agenda-list li.alert span.time:before {
    color: ${secondary_color} !important;
  }
  
  .alert {
    border-left: 4px solid ${secondary_color} !important;
    background-color: ${lighter_bg} !important;
  }
  
  a, dt, dl, dt, dd, .ng-binding, li, form label, .block .content p, strong, .dialog .content p {
    color: ${light_font_color} !important;
  }
  
  #vandaag-container .grade-widget ul, .bericht-item, div.bericht-item.ng-star-inserted {
    background-color: ${lighter_bg};
    border-bottom: 1px solid ${lighter_bg};
  }
  
  table.table-grid-layout td {
    color: ${light_font_color};
  }
  
  div.header {
    color: ${lighter_bg};
  }
  
  .alert span.nrblock, span.nrblock, #cijfers-leerling .last-grade, .cijfers-k-grid.k-grid .grade.gemiddeldecolumn {
    background-color: ${secondary_color} !important;
  }
  
  .alert a:hover, .agenda-lesdashboard aside .agenda-list li a.current {
    background-color: ${tertiair_color} !important;
  }
  
  aside .tabs li.active {
    border-bottom: 2px solid ${secondary_color};
  }
  
  .k-scheduler .k-event {
    background: ${lighter_bg} 0 -257px none repeat-x;
  }
  
  .cijfers-k-grid.k-grid .grade.empty {
    background: #5b5b5b !important;
  }
  
  .cijfers-k-grid.k-grid .k-selectable .k-state-selected .grade {
    box-shadow: inset 0 0 0 1px ${secondary_color} !important;
  }
  
  .primary-button {
    background: ${primary_color};
    border: 1px solid ${primary_color};
  }
  
  .primary-button:hover, .collapsed-menu .popup-menu ul li a:hover {
    background: ${secondary_color};
  }
  
  .collapsed-menu .popup-menu {
    background: ${lighter_bg};
    border: 1px solid ${dark_bg};
  }
  
  .collapsed-menu .popup-menu::after {
    border-right: 6px solid ${dark_bg};
  }
  
  `)

  const bob_url = browser.runtime.getURL('assets/bob.png');

  searchAndGetElementsByClassName('splash-container', (elements) => {
    let parent;
    for (let e of elements) {
      parent = e.parentElement;
      e.remove();
    }
    parent.innerHTML = '<img id="injected-splash-container" src=' + bob_url + '></img>'
  })

  const loading_gif = browser.runtime.getURL('assets/loading.gif');

  searchAndGetElementsByClassName('loading-animation', (elements) => {
    let parent;
    for (let e of elements) {
      parent = e.parentElement;
      e.remove();
    }
    parent.innerHTML = '<img id="injected-loading-animation" src=' + loading_gif + '></img>'
  })

}

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

function injectStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

// if (username == null || password == null) {
//   console.error("Username or password not filled in yet! Please go to line 3 and 4 in contentScript.js and configure your username and password.");
// } else {
//   check();
// }

inject()