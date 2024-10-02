document.addEventListener("DOMContentLoaded", function () {
  // Initialize Bootstrap tabs
  var triggerTabList = [].slice.call(
    document.querySelectorAll("#courseTabs a")
  );
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl);
    triggerEl.addEventListener("click", function (event) {
      event.preventDefault();
      tabTrigger.show();
    });
  });
});
