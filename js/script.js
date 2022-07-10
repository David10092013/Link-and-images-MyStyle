const panels = document.querySelectorAll('.panel'  );
   

  
  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeEventClass()
      panel.classList.add('active');
    });
  });
  
  
  function removeEventClass(){
      panels.forEach(panel =>{
          panel.classList.remove("active")
      })
  }
  