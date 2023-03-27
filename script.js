              // Define the initial state
              window.history.replaceState({ page: 'profile' }, 'profile', '#profile');

              // Update the page content
              function updateContent(pageName) {
                  // hide all pages
                  const pages = document.getElementsByClassName('page');
                  for (let p of pages) {
                      p.classList.add('hidden');
                  }
        
                  // show current page
                  const currentPage = document.getElementById(pageName);
                  currentPage.classList.remove('hidden');
        
              }
        
              // Handle navigation using the History API
              function navigate(pageName) {
                  // Push the new state onto the history stack
                  window.history.pushState({ page: pageName }, pageName, `#${pageName}`);
        
                  updateContent(pageName);
              }
        
              // Handle the popstate event to update the content when the back/forward buttons are clicked
              window.addEventListener('popstate', function(e) {
                  if (e.state) {
                      updateContent(e.state.page);
                  }
              });
        
              function doubleBack() {
                  window.history.go(-2);
              }