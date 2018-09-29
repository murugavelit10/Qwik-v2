window.onload = function() {
	console.log('background script called!! ', new Date())
	chrome.storage.onChanged.addListener((changes, namespace) => {
		for (key in changes) {
			var storageChange = changes[key];
			console.log('Storage key "%s" in namespace "%s" changed. ' +
						'Old value was "%s", new value is "%s".',
						key,
						namespace,
						storageChange.oldValue,
						storageChange.newValue);
		}
	})
}
