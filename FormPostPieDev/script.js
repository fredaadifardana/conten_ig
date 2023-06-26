const form = document.getElementById("form");
const imge = document.getElementById("image");
const cbusername = document.getElementById("cobaUsername");
const loadingSubmit = document.getElementById("submit");
const output = document.getElementById("output");

// Change src image
document
  .getElementById("uploadFile")
  .addEventListener("change", function (event) {
    loadingSubmit.value = "Submit Data";
    var reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);

    if (image.src) {
      imge.style.display = "block";
    }
  });

// API post
async function sendToServer(image, username, password) {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("username", username);
  formData.append("password", password);
  const res = await fetch("https://pie.dev/post", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) return (loadingSubmit.value = "Failed");

  const result = await res.json();
  console.log(result);
  imge.src = result.files.image;

  if (result.form.image == "undefined") {
    loadingSubmit.value = "Failed";
  } else {
    loadingSubmit.value = "Success";
    output.innerHTML = `Username = ${result.form.username} & Password = ${result.form.password}`;
  }
}

// Klick Submit jangankan orang yang bisa memberikan 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadingSubmit.value = "Loading...";
  const image = form.querySelector('[name = "uploadFile"]').files[0];
  const username = form.querySelector('[name = "username"]').value;
  const password = form.querySelector('[name = "password"]').value;
  sendToServer(image, username, password);
});
