// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYvhj3a9N4A-nZaOvPFmYNK0R8qNkly48",
  authDomain: "form-test-c6d13.firebaseapp.com",
  databaseURL: "https://form-test-c6d13-default-rtdb.firebaseio.com",
  projectId: "form-test-c6d13",
  storageBucket: "form-test-c6d13.appspot.com",
  messagingSenderId: "492356823128",
  appId: "1:492356823128:web:315e6279076cdd3ead422d",
  measurementId: "G-5ERQZY8FBD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}