document.getElementById("btn-en").addEventListener("click", function () {
  fetch("/set-lang", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lang: "en" }),
  }).then((response) => {
    if (response.ok) {
      console.log("Language set to English");
      window.location.reload();
    } else {
      console.log("Failed to set language");
    }
  });
});

document.getElementById("btn-pt").addEventListener("click", function () {
  fetch("/set-lang", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lang: "pt" }),
  }).then((response) => {
    if (response.ok) {
      console.log("Language set to Portuguese");
      window.location.reload();
    } else {
      console.log("Failed to set language");
    }
  });
});
