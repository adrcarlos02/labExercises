//get the image
    document.getElementById('show-ice-photo').addEventListener('click', function() {
        const container = document.getElementById('image-container1');
        container.innerHTML = ''; 
        
        const img = document.createElement('img');
        img.src = 'iceandfire/Ice5.jpg'; // will replace with your image path
        img.alt = 'Ice Photo';
        img.style.maxWidth = '100%'; 
        container.appendChild(img);

        const column1 = document.getElementById('column1');
        column1.style.backgroundColor = 'rgb(52, 78, 111)';
        
        const changetext1 =  document.getElementById('heading1');
         changetext1.innerText = 'ICE';
        
    });

    

    function changetext1() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16); // 
         document.body.style.backgroundColor = 'rgb(88, 121, 141)';

         


    }



    document.getElementById('show-fire-photo').addEventListener('click', function() {
      const container = document.getElementById('image-container2');
      container.innerHTML = ''; 
    

      const img = document.createElement('img');
      img.src = 'iceandfire/Fire4.jpg'; // will replace with your image path
      img.alt = 'Fire Photo';
      img.style.maxWidth = '100%'; // 
      container.appendChild(img);

      const column2 = document.getElementById('column2')
      column2.style.backgroundColor = 'rgb(210, 85, 17)'
     
      const changetext1 =  document.getElementById('heading2');
      changetext1.innerText = 'FIRE';
  });

    function changetext2() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16); 
         document.body.style.backgroundColor = 'rgb(180, 69, 65)';

      
    }