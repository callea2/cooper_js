function CPRCalculator(){
};

CPRCalculator.prototype.VO2_max = function(obj) {
  if (obj.distance > 0) {
    var finalVO2 = (obj.distance - 504.9) / 44.73;
    obj.VO2Value = parseFloat(finalVO2.toFixed(2));
    if (obj.gender == 'male') {
      setVO2MessageMale(obj);
    }
    else {
      setVO2MessageFemale(obj);
    }
  }
};

CPRCalculator.prototype.Assesment = function(obj) {
  if (obj.distance > 0) {
    if (obj.gender == 'male') {
      setAssMessageMale(obj);
    }
    else {
      setAssMessageFemale(obj);
    }
  }
};

function setVO2MessageMale (obj, value){
  if (obj.age >= 18 && obj.age <= 25) {
    if (obj.VO2Value < 30) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 30 && obj.VO2Value <= 36) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 37 && obj.VO2Value <= 41) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 42 && obj.VO2Value <= 46) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 47 && obj.VO2Value <= 51) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 52 && obj.VO2Value <= 60) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 60) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.age >= 26 && obj.age <= 35) {
    if (obj.VO2Value < 30) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 30 && obj.VO2Value <= 34) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 35 && obj.VO2Value <= 39) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 40 && obj.VO2Value <= 42) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 43 && obj.VO2Value <= 48) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 49 && obj.VO2Value <= 56) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 56) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.age >= 36 && obj.age <= 45) {
    if (obj.VO2Value < 26) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 26 && obj.VO2Value <= 30) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 31 && obj.VO2Value <= 34) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 35 && obj.VO2Value <= 38) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 39 && obj.VO2Value <= 42) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 43 && obj.VO2Value <= 51) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 51) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.age >= 46 && obj.age <= 55) {
    if (obj.VO2Value < 25) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 25 && obj.VO2Value <= 28) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 29 && obj.VO2Value <= 31) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 32 && obj.VO2Value <= 35) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 36 && obj.VO2Value <= 38) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 39 && obj.VO2Value <= 45) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 45) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.age >= 56 && obj.age <= 65) {
    if (obj.VO2Value < 22) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 22 && obj.VO2Value <= 25) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 26 && obj.VO2Value <= 29) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 30 && obj.VO2Value <= 31) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 32 && obj.VO2Value <= 35) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 36 && obj.VO2Value <= 41) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 41) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.age > 65) {
    if (obj.VO2Value < 20) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 20 && obj.VO2Value <= 21) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 22 && obj.VO2Value <= 25) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 26 && obj.VO2Value <= 28) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 29 && obj.VO2Value <= 32) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 33 && obj.VO2Value <= 37) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 37) {
      obj.VO2Message = "Excellent"
    }
  }
};

function setVO2MessageFemale (obj, value){
  if (obj.age >= 18 && obj.age <= 25) {
    if (obj.VO2Value < 28) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 28 && obj.VO2Value <= 32) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 33 && obj.VO2Value <= 37) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 38 && obj.VO2Value <= 41) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 42 && obj.VO2Value <= 46) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 47 && obj.VO2Value <= 56) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 56) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.age >= 26 && obj.age <= 35) {
    if (obj.VO2Value < 26) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 26 && obj.VO2Value <= 30) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 31 && obj.VO2Value <= 34) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 35 && obj.VO2Value <= 38) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 39 && obj.VO2Value <= 44) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 45 && obj.VO2Value <= 52) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 52) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.age >= 36 && obj.age <= 45) {
    if (obj.VO2Value < 22) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 22 && obj.VO2Value <= 26) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 27 && obj.VO2Value <= 30) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 31 && obj.VO2Value <= 33) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 34 && obj.VO2Value <= 37) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 38 && obj.VO2Value <= 45) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 45) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.age >= 46 && obj.age <= 55) {
    if (obj.VO2Value < 20) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 20 && obj.VO2Value <= 24) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 25 && obj.VO2Value <= 27) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 28 && obj.VO2Value <= 30) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 31 && obj.VO2Value <= 33) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 34 && obj.VO2Value <= 40) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 40) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.age >= 56 && obj.age <= 65) {
    if (obj.VO2Value < 18) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 18 && obj.VO2Value <= 21) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 22 && obj.VO2Value <= 24) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 25 && obj.VO2Value <= 27) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 28 && obj.VO2Value <= 31) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 32 && obj.VO2Value <= 37) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 37) {
      obj.VO2Message = "Excellent"
    }
  }

  else if (obj.age > 65) {
    if (obj.VO2Value < 17) {
      obj.VO2Message = "Very poor"
    }
    else if (obj.VO2Value >= 17 && obj.VO2Value <= 18) {
      obj.VO2Message = "Poor"
    }
    else if (obj.VO2Value >= 19 && obj.VO2Value <= 21) {
      obj.VO2Message = "Below average"
    }
    else if (obj.VO2Value >= 22 && obj.VO2Value <= 24) {
      obj.VO2Message = "Average"
    }
    else if (obj.VO2Value >= 25 && obj.VO2Value <= 27) {
      obj.VO2Message = "Above average"
    }
    else if (obj.VO2Value >= 28 && obj.VO2Value <= 32) {
      obj.VO2Message = "Very good"
    }
    else if (obj.VO2Value > 32) {
      obj.VO2Message = "Excellent"
    }
  }
};

function setAssMessageMale (obj, value){
  if (obj.age >= 20 && obj.age <= 29) {
    if (obj.distance < 1600) {
      obj.AssMessage = "Poor"
    }
    else if (obj.distance >= 1600 && obj.distance <= 2199) {
      obj.AssMessage = "Below average"
    }
    else if (obj.distance >= 2200 && obj.distance <= 2399) {
      obj.AssMessage = "Average"
    }
    else if (obj.distance >= 2400 && obj.distance <= 2800) {
      obj.AssMessage = "Above average"
    }
    else if (obj.distance > 2800) {
      obj.AssMessage = "Excellent"
    }
  }

  else if (obj.age >= 30 && obj.age <= 39) {
    if (obj.distance < 1500) {
      obj.AssMessage = "Poor"
    }
    else if (obj.distance >= 1500 && obj.distance <= 1999) {
      obj.AssMessage = "Below average"
    }
    else if (obj.distance >= 1900 && obj.distance <= 2299) {
      obj.AssMessage = "Average"
    }
    else if (obj.distance >= 2300 && obj.distance <= 2700) {
      obj.AssMessage = "Above average"
    }
    else if (obj.distance > 2700) {
      obj.AssMessage = "Excellent"
    }
  }

  else if (obj.age >= 40 && obj.age <= 49) {
    if (obj.distance < 1400) {
      obj.AssMessage = "Poor"
    }
    else if (obj.distance >= 1400 && obj.distance <= 1699) {
      obj.AssMessage = "Below average"
    }
    else if (obj.distance >= 1700 && obj.distance <= 2099) {
      obj.AssMessage = "Average"
    }
    else if (obj.distance >= 2100 && obj.distance <= 2500) {
      obj.AssMessage = "Above average"
    }
    else if (obj.distance > 2500) {
      obj.AssMessage = "Excellent"
    }
  }

  else if (obj.age > 50) {
    if (obj.distance < 1300) {
      obj.AssMessage = "Poor"
    }
    else if (obj.distance >= 1300 && obj.distance <= 1599) {
      obj.AssMessage = "Below average"
    }
    else if (obj.distance >= 1600 && obj.distance <= 1999) {
      obj.AssMessage = "Average"
    }
    else if (obj.distance >= 2000 && obj.distance <= 2400) {
      obj.AssMessage = "Above average"
    }
    else if (obj.distance > 2400) {
      obj.AssMessage = "Excellent"
    }
  }
};

function setAssMessageFemale (obj, value){
  if (obj.age >= 20 && obj.age <= 29) {
    if (obj.distance < 1500) {
      obj.AssMessage = "Poor"
    }
    else if (obj.distance >= 1500 && obj.distance <= 1799) {
      obj.AssMessage = "Below average"
    }
    else if (obj.distance >= 1800 && obj.distance <= 2199) {
      obj.AssMessage = "Average"
    }
    else if (obj.distance >= 2200 && obj.distance <= 2700) {
      obj.AssMessage = "Above average"
    }
    else if (obj.distance > 2700) {
      obj.AssMessage = "Excellent"
    }
  }

  else if (obj.age >= 30 && obj.age <= 39) {
    if (obj.distance < 1400) {
      obj.AssMessage = "Poor"
    }
    else if (obj.distance >= 1400 && obj.distance <= 1699) {
      obj.AssMessage = "Below average"
    }
    else if (obj.distance >= 1700 && obj.distance <= 1999) {
      obj.AssMessage = "Average"
    }
    else if (obj.distance >= 2000 && obj.distance <= 2500) {
      obj.AssMessage = "Above average"
    }
    else if (obj.distance > 2500) {
      obj.AssMessage = "Excellent"
    }
  }

  else if (obj.age >= 40 && obj.age <= 49) {
    if (obj.distance < 1200) {
      obj.AssMessage = "Poor"
    }
    else if (obj.distance >= 1200 && obj.distance <= 1499) {
      obj.AssMessage = "Below average"
    }
    else if (obj.distance >= 1500 && obj.distance <= 1899) {
      obj.AssMessage = "Average"
    }
    else if (obj.distance >= 1900 && obj.distance <= 2300) {
      obj.AssMessage = "Above average"
    }
    else if (obj.distance > 2300) {
      obj.AssMessage = "Excellent"
    }
  }

  else if (obj.age > 50) {
    if (obj.distance < 1100) {
      obj.AssMessage = "Poor"
    }
    else if (obj.distance >= 1100 && obj.distance <= 1399) {
      obj.AssMessage = "Below average"
    }
    else if (obj.distance >= 1400 && obj.distance <= 1699) {
      obj.AssMessage = "Average"
    }
    else if (obj.distance >= 1700 && obj.distance <= 2200) {
      obj.AssMessage = "Above average"
    }
    else if (obj.distance > 2200) {
      obj.AssMessage = "Excellent"
    }
  }
};
