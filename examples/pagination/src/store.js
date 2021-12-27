import { initializeApp } from "firebase/app";
import { initFirestorter, Collection } from "firestorter";

initializeApp({
	apiKey: "AIzaSyDgDX7GD9b8h8JxEB-ANs9LjlRkXpYpS3U",
	authDomain: "firestorter-tests.firebaseapp.com",
	databaseURL: "https://firestorter-tests.firebaseio.com",
	projectId: "firestorter-tests",
	storageBucket: "firestorter-tests.appspot.com",
	messagingSenderId: "667453207099"
});

initFirestorter();

const chocolateBars = new Collection("chocolateBars");
chocolateBars.limit = 5;

export { chocolateBars };
