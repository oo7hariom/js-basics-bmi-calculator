const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('#results');

  if(height===' ' || height < 0 || isNaN(height)){
      result.innerHTML = `please give valid height ${height}`;
  }
  else if(weight===' ' || weight < 0 || isNaN(weight)){
      result.innerHTML = `please give valid height ${weight}`;

      if (weight < 18.6) {
          result.innerHTML = 'kuch khaoo bhaii';
      }
      else if (weight > 18.6 && weight < 24.9) {
          result.innerHTML = 'good bhaii carry on';
      }
      else {
          result.innerHTML = 'kam khaoooo ';
      }
  }

  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
      result.innerHTML = `<span>${bmi} </span>`;
  }

});