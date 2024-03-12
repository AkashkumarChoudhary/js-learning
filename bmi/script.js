/*document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get the input values
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    // Calculate BMI
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  
    // Display the result
    document.getElementById('bmiResult').innerHTML = `Your BMI is: <strong>${bmi}</strong>`;
  
    // Show the result container
    document.getElementById('resultContainer').style.display = 'block';
  });*/
  document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get the input values
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    // Calculate BMI
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  
    // Display the result
    document.getElementById('bmiResult').innerHTML = `Your BMI is: <strong>${bmi}</strong>`;
  
    // Show the result container
    document.getElementById('resultContainer').style.display = 'block';
  
    // Determine weight category
    let weightCategory;
    if (bmi < 18.5) {
      weightCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      weightCategory = 'Normal weight';
    } else {
      weightCategory = 'Overweight';
    }
  
    // Display weight category
    document.getElementById('weightCategory').innerHTML = `Weight category: <strong>${weightCategory}</strong>`;
  });
  
  