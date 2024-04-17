import NavData from "./NavData.js";

NavData.loadCampusesDataAsync().then((r) => {
	console.log(r)
})