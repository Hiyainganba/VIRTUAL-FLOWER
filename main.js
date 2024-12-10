onload = () => {
    document.body.classList.remove("container");
  
    // Get the elements
    const flowerContainer = document.getElementById('flower-container');
    const yesRadio = document.getElementById('yes');
    const noRadio = document.getElementById('no');
  
    // Add event listeners to the radio buttons
    yesRadio.addEventListener('click', () => {
      flowerContainer.style.display = 'block';
    });
  
    noRadio.addEventListener('click', () => {
      flowerContainer.style.display = 'none';
    });
  };