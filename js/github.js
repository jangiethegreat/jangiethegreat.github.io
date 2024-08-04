GitHubCalendar(".github-contributions", "jangiethegreat", {
    responsive: true
});

   // Use MutationObserver to ensure elements are fully loaded before hiding
   const targetNode = document.querySelector('.github-contributions');
   const config = { childList: true, subtree: true };

   const callback = (mutationsList, observer) => {
       for (const mutation of mutationsList) {
           if (mutation.type === 'childList') {
               const footer = document.querySelector(".contrib-footer");
               const details = document.querySelector(".js-calendar-graph .position-relative");
               if (footer) footer.style.display = 'none';
               if (details) details.style.display = 'none';
               // Stop observing once we've done the job
               observer.disconnect();
           }
       }
   };

   const observer = new MutationObserver(callback);
   observer.observe(targetNode, config);