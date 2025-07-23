const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  let info = ''; // Use let instead of const

  // Clear previous results
  results.innerHTML = "";

  if (height==='' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height: ${height}<br>`;
  }

  if (weight==='' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight: ${weight}<br>`;
  }

  else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);

    if (bmi < 18.5) {
      info = "You are underweight.";
    } else if (bmi < 24.9) {
      info = "You have a normal weight.";
    } else if (bmi < 29.9) {
      info = "You are overweight.";
    } else {
      info = "You are obese.";
    }

    results.innerHTML = `Your BMI is ${bmi} <br>${info}`;
    console.log(results);
  }
})
