document.addEventListener("DOMContentLoaded", () => {
const generalButton = document.querySelector("#generalButton");
const accountButton = document.querySelector("#accountButton");
const themeButton = document.querySelector("#themeButton");
const notificationButton = document.querySelector("#notificationButton");
const performanceButton = document.querySelector("#performanceButton");
const settingContent = document.querySelector("#settingContent");
  generalButton.addEventListener("click", () => {
    settingContent.innerHTML =`
	<h2>General Settings</h2>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 1</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>General Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 2</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>General Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 3</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>General Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 4</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>General Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	`;
  });
  accountButton.addEventListener("click", () => {
    settingContent.innerHTML =`
	<h2>Account Settings</h2>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 1</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Account Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 2</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Account Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 3</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Account Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 4</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Account Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	`;
  });
  notificationButton.addEventListener("click", () => {
    settingContent.innerHTML =`
	<h2>Notification Settings</h2>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 1</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Notification Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 2</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Notification Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 3</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Notification Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 4</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Notification Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	`;
  });
  themeButton.addEventListener("click", () => {
    settingContent.innerHTML =`
	<h2>Theme Settings</h2>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 1</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Theme Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 2</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Theme Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 3</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Theme Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 4</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Theme Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	`;
  });
  performanceButton.addEventListener("click", () => {
    settingContent.innerHTML =`
	<h2>Performance Settings</h2>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 1</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Performance Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 2</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Performance Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 3</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Performance Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	<div class="container-fluid row">
		<div class="col">
		<h3>Setting 4</h3>
		</div>
		<div class"col">
		<select class="col item2 form-select" aria-label="Default select example">
			<option selected>Performance Default</option>
			<option value="Alt Option 1">Unread</option>
			<option value="Alt Option 2">Starred</option>
			<option value="Alt Option 3">Sent</option>
		</select>
		</div>
	</div>
	`;
  });
});

