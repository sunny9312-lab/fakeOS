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


    
