	function setValue(valueName, value) {
		window.localStorage.setItem(name, parseInt(value));
	}

	function getValue(valueName) {
		return parseInt(window.localStorage.getItem(valueName));
	}