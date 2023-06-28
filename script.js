function gradePassword() {
    var password = document.getElementById("password").value;
    var strength = calculateStrength(password);
    var grade = getGrade(strength);
    document.getElementById("gradeResult").textContent = "Password strength: " + grade;
  }
  
  function calculateStrength(password) {
    var lengthScore = password.length * 4; 
    var complexityScore = calculateComplexityScore(password);
    var strength = lengthScore + complexityScore;
    return strength;
  }
  
  function calculateComplexityScore(password) {
    var complexityScore = 0;
    if (/[a-z]/.test(password)) complexityScore += 1; 
    if (/[A-Z]/.test(password)) complexityScore += 2;
    if (/[0-9]/.test(password)) complexityScore += 2; 
    if (/[!@#$%^&*()\-_=+[{\]};:'",<.>/?\\|~`]/.test(password)) complexityScore += 3; 
    return complexityScore;
  }
  
  function getGrade(strength) {
    if (strength <= 20) {
      return "Weak";
    } else if (strength <= 40) {
      return "Medium";
    } else {
      return "Strong";
    }
  }
  