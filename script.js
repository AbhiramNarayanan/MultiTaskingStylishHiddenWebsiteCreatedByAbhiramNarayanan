// Function to get the corresponding webpage URL based on the clicked button
function getPageURL(button) {
    const parentSection = button.parentNode;
    const sectionIndex = Array.from(parentSection.parentNode.children).indexOf(parentSection);
  
    if (sectionIndex === 0) {
      return 'https://hi.wikipedia.org/wiki/%E0%A4%B8%E0%A5%81%E0%A4%A8%E0%A5%80%E0%A4%B2_%E0%A4%9B%E0%A5%87%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80'; // Replace with the URL of the webpage for section 1
    } else if (sectionIndex === 1) {
      return 'https://en.wikipedia.org/wiki/Lionel_Messi'; // Replace with the URL of the webpage for section 2
    } else if (sectionIndex === 2) {
      return 'https://en.wikipedia.org/wiki/Cristiano_Ronaldo'; // Replace with the URL of the webpage for section 3
    } else if (sectionIndex === 3) {
      return 'https://www.example4.com'; // Replace with the URL of the webpage for section 4
    }
  }
  
  document.getElementById("main-btn").addEventListener("click", function() {
    document.querySelector(".hidden-content").style.display = "block";
    this.style.display = "none";
  
    const squares = document.querySelectorAll(".square");
    squares.forEach(function(square, index) {
      setTimeout(function() {
        square.classList.add("active");
      }, index * 500);
    });
  });
  
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("square-btn")) {
      event.preventDefault();
      const square = event.target.parentElement;
      const webpageURL = event.target.href;
  
      // Create an iframe with the webpage URL
      const iframe = document.createElement('iframe');
      iframe.src = webpageURL;
      iframe.frameBorder = '0';
  
      // Set the size of the iframe to match the mapped region
      iframe.style.width = square.offsetWidth + 'px';
      iframe.style.height = square.offsetHeight + 'px';
  
      // Replace the content of the square with the iframe
      square.innerHTML = '';
      square.appendChild(iframe);
    }
  });
  
  // Counter to track the number of mapped regions clicked
  let clickCount = 0;
  
  // Function to handle the click event for the mapped regions
  function handleClick() {
    clickCount++;
  
    if (clickCount === 4) {
      const middleButton = document.querySelector(".middle-button");
      middleButton.classList.remove("hidden");
    }
  }
  
  // Attach the handleClick function to the mapped region buttons
  const squareButtons = document.querySelectorAll(".square-btn");
  squareButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const squares = document.getElementsByClassName('square');
    let currentSquare = null;
    let initialX = 0;
    let initialY = 0;
    let initialWidth = 0;
    let initialHeight = 0;
  
    function resizeSquare(e) {
      const { clientX, clientY } = e;
      const newWidth = initialWidth + (clientX - initialX);
      const newHeight = initialHeight + (clientY - initialY);
      currentSquare.style.width = newWidth + 'px';
      currentSquare.style.height = newHeight + 'px';
    }
  
    function handleMouseDown(e) {
      currentSquare = e.currentTarget;
      initialX = e.clientX;
      initialY = e.clientY;
      initialWidth = currentSquare.clientWidth;
      initialHeight = currentSquare.clientHeight;
  
      window.addEventListener('mousemove', resizeSquare);
      window.addEventListener('mouseup', handleMouseUp);
    }
  
    function handleMouseUp() {
      currentSquare = null;
      initialX = 0;
      initialY = 0;
      initialWidth = 0;
      initialHeight = 0;
  
      window.removeEventListener('mousemove', resizeSquare);
      window.removeEventListener('mouseup', handleMouseUp);
    }
  
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('mousedown', handleMouseDown);
    }
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const middleButton = document.getElementById('middle-btn');
    const container = document.querySelector('.container');
    const mainVideo = document.getElementById('main-video');
  
    middleButton.addEventListener('click', () => {
      // Hide the initial 4 mapped regions
      const initialMappedRegions = document.querySelectorAll('.square');
      for (const region of initialMappedRegions) {
        region.style.display = 'none';
      }
  
      // Create the 3 equal portions with video backgrounds and click me buttons
      container.innerHTML = `
        <div class="middle-section">
          <div class="section">
            <video autoplay muted loop>
              <source src="background_-_33633 (Original) (1).mp4" type="video/mp4">
            </video>
            <button class="section-btn">Click me</button>
          </div>
          <div class="section">
            <video autoplay muted loop>
              <source src="firework_-_121793 (1080p) (1).mp4" type="video/mp4">
            </video>
            <button class="section-btn">Click me</button>
          </div>
          <div class="section">
            <video autoplay muted loop>
              <source src="night_sky_-_31569 (Original) (1).mp4" type="video/mp4">
            </video>
            <button id="third-button" onclick="handleClassSectionClick()" class="section-btn">Click me</button>
          </div>
        </div>
      `;
  
      // Play the main background video
      mainVideo.play();
  
      // Add event listeners to the click me buttons
      const sectionButtons = document.querySelectorAll('.section-btn');
      sectionButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          // Get the corresponding webpage URL based on the button index
          const pageURL = getPageURL(button);
  
          // Create an iframe with the webpage URL
          const iframe = document.createElement('iframe');
          iframe.src = pageURL;
          iframe.frameBorder = '0';
  
          // Set the size of the iframe to match the section
          iframe.style.width = button.parentNode.offsetWidth + 'px';
          iframe.style.height = button.parentNode.offsetHeight + 'px';
  
          // Replace the button with the iframe
          const section = button.parentNode;
          section.innerHTML = '';
          section.appendChild(iframe);
        });
      });
    });
  });
  
  // Counter to track the number of mapped regions clicked in class section
  let classSectionClickCount = 0;
  
  // Function to handle the click event for the class section buttons
  function handleClassSectionClick() {
    classSectionClickCount++;
  }
  
  // Attach the handleClassSectionClick function to the class section buttons
  document.getElementById("third-button").addEventListener("click", handleClassSectionClick);
  function handleClassSectionClick(){
    alert("Thank you... Visit Again ~");
   
  }
  

  
  