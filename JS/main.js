'use strict'
// Auto resize input
function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);


console.clear();
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function(){

  var textareas = document.querySelectorAll('.expanding'),

      resize = function(t) {
        t.style.height = 'auto';
        t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
        t.style.height = (t.scrollHeight + t.offset ) + 'px';
        t.style.overflow = '';
      },

      attachResize = function(t) {
        if ( t ) {
          console.log('t.className',t.className);
          t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

          resize(t);

          if ( t.addEventListener ) {
            t.addEventListener('input', function() { resize(t); });
            t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
          }

          t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
        }
      };

  // IE7 support
  if ( !document.querySelectorAll ) {

    function getElementsByClass(searchClass,node,tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || '*';
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }

    textareas = getElementsByClass('expanding');
  }

  for (var i = 0; i < textareas.length; i++ ) {
    attachResize(textareas[i]);
  }

})();


let boxes  = document.getElementsByClassName('box');
let hidden = document.getElementsByClassName('hidden');

function HOVER() {
  let box  = this.getElementsByClassName('hidden')
  let text = this.getElementsByClassName('text')


  box[0].classList.remove('hidden')
  text[0].classList.add('hidden')
}

function unHOVER() {
  let box = this.getElementsByTagName('ul')
  let text = this.getElementsByClassName('text')


  box[0].classList.add('hidden')
  text[0].classList.remove('hidden')

}


boxes[0].addEventListener('mouseover', HOVER);
boxes[1].addEventListener('mouseover', HOVER);
boxes[2].addEventListener('mouseover', HOVER);
boxes[3].addEventListener('mouseover', HOVER);



boxes[0].addEventListener('mouseleave', unHOVER);
boxes[1].addEventListener('mouseleave', unHOVER);
boxes[2].addEventListener('mouseleave', unHOVER);
boxes[3].addEventListener('mouseleave', unHOVER);
