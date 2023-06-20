// Function to open an app modal
function openApp(appName) {
  const modal = document.getElementById('app-modal');
  const appContent = document.getElementById('app-content');

  // Clear previous content
  appContent.innerHTML = '';

  // Add content based on the selected app
  switch (appName) {
    case 'app1':
      appContent.innerHTML = '<h2>App 1 Content</h2>';
      break;
    case 'app2':
      appContent.innerHTML = '<h2>App 2 Content</h2>';
      break;
    case 'app3':
      appContent.innerHTML = '<h2>App 3 Content</h2>';
      break;
  }
    // Display the modal
    modal.style.display = 'block';
  }

  // Function to close the app modal
  function closeApp() {
    const modal = document.getElementById('app-modal');
    modal.style.display = 'none';
  }

  function updateTime() {
    var now = new Date();
    var timeElement = document.getElementById('current-time');
    timeElement.textContent = now.toLocaleTimeString();
  }

  
  setInterval(updateTime, 1000);

  //without seconds
  // function updateTime() {
  //   var now = new Date();
  //   var hours = now.getHours();
  //   var minutes = now.getMinutes();

  //   var timeElement = document.getElementById('current-time');
  //   timeElement.textContent = hours + ":" + (minutes < 10 ? "0" : "") + minutes;
  // }

  // // Call updateTime function every second (1000 milliseconds)
  // setInterval(updateTime, 1000);
