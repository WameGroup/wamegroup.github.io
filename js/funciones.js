
//--------------Documento de funciones javascript para la interaccion------------//
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
  var indice = 0;
  //Get all panel-navs elements
  const $panel_navs = Array.prototype.slice.call(document.querySelectorAll('.panel-nav'), 0);

  //Check if have panel-navs
  if ($panel_navs.length > 0) {

    //add a click event for each of them
    $panel_navs.forEach((el) => {
      el.addEventListener('click', (e) => {

        //prevent default usage
        e.preventDefault()

        //get the target from 'data-target' attribute
        const target = el.dataset.target;
        indice = target;

        //get all panel-informacion elements
        let $others = Array.prototype.slice.call(document.querySelectorAll('.panel-informacion'), 0);

        //hide all of them that not match whit the current element
        $others.forEach(el => {
          if (el.itemId != indice) {
            el.classList.add('ocultar');
          }
        })
        //show the element
        const $target = document.getElementById(target);
        $target.classList.remove('ocultar');

      })
    })

  }

  let send = document.getElementById('send');
  send.addEventListener('click', function (e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let asunto = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let sub = nombre + " " + asunto;
    let data = {subject:sub,text:message,access_token: 'l032gfkqnb8rvr1j4ib3cpvs'};
    let params = toParams(data);
    var request = new XMLHttpRequest();
    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params);
    alert('Mensaje enviado')
    document.getElementById('nombre').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  });

});
var index = 0;
setInterval(function () {
  if (index == 0) {
    let panel = document.getElementById('primer-panel');
    panel.classList.add('ocultar');
    let panel1 = document.getElementById('segundo-panel');
    panel1.classList.remove('ocultar');
    index = 1;
  } else if (index == 1) {
    let panel = document.getElementById('primer-panel');
    panel.classList.remove('ocultar');
    let panel1 = document.getElementById('segundo-panel');
    panel1.classList.add('ocultar');
    index = 0;
  }

}, 5000);
function toParams(data_js) {
  var form_data = [];
  for ( var key in data_js ) {
      form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
  }

  return form_data.join("&");
}
