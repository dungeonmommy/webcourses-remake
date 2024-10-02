document.addEventListener("DOMContentLoaded", () => {
	const settingContent = document.querySelector("#settingContent");
	const settingsTitle = document.querySelector("#settingsTitle");
	const navItems = document.querySelectorAll(".nav-link");
	
	function updateContent(title, content) {
		settingsTitle.textContent = title;
		settingContent.innerHTML = content;
	}
	
	function setActiveNavItem(clickedItem) {
		navItems.forEach(item => item.classList.remove('active'));
		clickedItem.classList.add('active');
	}
	
	navItems.forEach(item => {
		item.addEventListener("click", (e) => {
			e.preventDefault();
			setActiveNavItem(e.currentTarget);
			const sectionId = e.currentTarget.id;
			switch (sectionId) {
				case "generalButton":
					updateContent("General Settings", `
						<div class="mb-3">
							<label for="language" class="form-label">Language</label>
							<select class="form-select" id="language">
								<option selected>English</option>
								<option>Spanish</option>
								<option>French</option>
								<option>German</option>
							</select>
						</div>
						<div class="mb-3">
							<label for="timezone" class="form-label">Time Zone</label>
							<select class="form-select" id="timezone">
								<option selected>Eastern Time (ET)</option>
								<option>Central Time (CT)</option>
								<option>Mountain Time (MT)</option>
								<option>Pacific Time (PT)</option>
							</select>
						</div>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="darkMode">
							<label class="form-check-label" for="darkMode">Enable Dark Mode</label>
						</div>
					`);
					break;
				case "accountButton":
					updateContent("Account Settings", `
						<div class="mb-3">
							<label for="email" class="form-label">Email</label>
							<input type="email" class="form-control" id="email" value="user@example.com">
						</div>
						<div class="mb-3">
							<label for="password" class="form-label">Password</label>
							<input type="password" class="form-control" id="password" value="********">
						</div>
						<button class="btn btn-primary">Change Password</button>
					`);
					break;
				case "notificationButton":
					updateContent("Notification Settings", `
						<h5>Email Notifications</h5>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="notifyCourseAnnouncements">
							<label class="form-check-label" for="notifyCourseAnnouncements">Course Announcements</label>
						</div>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="notifyAssignmentDue">
							<label class="form-check-label" for="notifyAssignmentDue">Assignment Due Dates</label>
						</div>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="notifyGrades">
							<label class="form-check-label" for="notifyGrades">Grade Postings</label>
						</div>
						<h5>Push Notifications</h5>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="pushNotifications">
							<label class="form-check-label" for="pushNotifications">Enable Push Notifications</label>
						</div>
					`);
					break;
				case "privacyButton":
					updateContent("Privacy Settings", `
						<div class="mb-3">
							<label for="profileVisibility" class="form-label">Profile Visibility</label>
							<select class="form-select" id="profileVisibility">
								<option selected>Public</option>
								<option>Friends Only</option>
								<option>Private</option>
							</select>
						</div>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="showOnlineStatus">
							<label class="form-check-label" for="showOnlineStatus">Show Online Status</label>
						</div>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="allowMessageRequests">
							<label class="form-check-label" for="allowMessageRequests">Allow Message Requests</label>
						</div>
					`);
					break;
				case "accessibilityButton":
					updateContent("Accessibility Settings", `
						<div class="mb-3">
							<label for="fontSize" class="form-label">Font Size</label>
							<select class="form-select" id="fontSize">
								<option>Small</option>
								<option selected>Medium</option>
								<option>Large</option>
								<option>Extra Large</option>
							</select>
						</div>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="highContrast">
							<label class="form-check-label" for="highContrast">High Contrast Mode</label>
						</div>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="screenReader">
							<label class="form-check-label" for="screenReader">Screen Reader Support</label>
						</div>
						<div class="mb-3">
							<label for="colorblindMode" class="form-label">Color Blind Mode</label>
							<select class="form-select" id="colorblindMode">
								<option selected>Off</option>
								<option>Protanopia</option>
								<option>Deuteranopia</option>
								<option>Tritanopia</option>
							</select>
						</div>
					`);
					break;
			}
		});
	});
	
	
	// Trigger click on General Settings by default
	document.querySelector("#generalButton").click();
});