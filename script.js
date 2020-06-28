
    var note=document.getElementById('note')

    function bmi() {

 var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var result = document.getElementById('result')

    
      var ans = weight / (height * height);
      ans = Math.round(ans);
      if (ans < 18) {
        var display = "your bmi is " + ans + " you are underweight";
      note.innerHTML = display;
       result.innerHTML = ans;
      }
      else if (ans > 18 && ans <= 25) {
        var display = "your bmi is " + ans + " your weight is normal";
        note.innerHTML = display;
         result.innerHTML = ans;
      }
      else {
        var display = "your bmi is " + ans + " you are overweight";
        note.innerHTML = display;
         result.innerHTML = ans;
      }



     
    


    }