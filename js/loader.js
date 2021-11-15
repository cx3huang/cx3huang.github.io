(function(preloader) {
    window.addEventListener('beforeunload', function(e) {
        activateLoader();
      });

    window.addEventListener('load', function(e) {
      deactivateLoader();
    });
    
    function activateLoader() {
        preloader.style.display = 'flex';
        preloader.style.opacity = 1;
      }

    function deactivateLoader() {
      /**
       * ensures that the loading animation plays for at least a second to give the
       * appearance of seamless loading on pages that execute and load extremely
       * quickly (i.e., intranet pages)
       */
      setTimeout(function() {
        deactivate();
      }, 800);
  
      function deactivate() {
        preloader.style.opacity = 0;
        preloader.addEventListener('transitionend', function() {
          preloader.style.display = 'none';
        }, false);
      }
    }
  
  })(document.querySelector('.preloader'));