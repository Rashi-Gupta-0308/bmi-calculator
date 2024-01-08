const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(e.target.height.value);
    const weight = parseInt(e.target.weight.value);
    const result = document.querySelector('.result p')

    if(height === '' || height<=0 || isNaN(height))
    {
        result.innerHTML = 'Please Enter a Valid Height'
    }
    else if(weight === '' || weight<=0 || isNaN(weight))
    {
        result.innerHTML = 'Please Enter a Valid Weight'
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.5) {
            result.innerHTML = `Your BMI score is: <b>${bmi}</b> and you are <b> Under Weight. </b>`;
        } else if (bmi < 24.90 && bmi > 18.50) {
            result.innerHTML = `Your BMI score is: <b>${bmi}</b> and your weight is <b> Normal. </b>`;
        } else {
            result.innerHTML = `Your BMI score is: <b>${bmi}</b> and you are <b> Over Weight. </b>`;
        }
      }
    e.target.reset();
});