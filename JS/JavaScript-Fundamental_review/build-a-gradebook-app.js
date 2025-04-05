
function getAverage(testScores) {
    let sum = 0;
    for (let i = 0; i < testScores.length; i++) {
      sum += testScores[i];
    }
    let averageScore = sum / testScores.length;
    return averageScore;
  }
  
  function getGrade(studentScore) {
    if (studentScore === 100) {
      return "A+";
    } else if (studentScore >= 90 && studentScore <= 99) {
      return "A";
    } else if (studentScore >= 80 && studentScore <= 89) {
      return "B";
    } else if (studentScore >= 70 && studentScore <= 79) {
      return "C";
    } else if (studentScore >= 60 && studentScore <= 69) {
      return "D";
    } else if (studentScore >= 0 && studentScore <= 59) {
      return "F";
    } else {
      return "Invalid score";
    }
  }
  
  function hasPassingGrade(grade) {
    return (getGrade(grade) !== "F");
  }
  
  // Note: I believe there are errors from FCC's side in this part, and thus code doesn't pass
  function studentMsg(scores, studentScore) {
    let averageScore = getAverage(scores);
    let grade = getGrade(studentScore);
    
    if (hasPassingGrade(grade)) {
      return `Class average: ${averageScore}. Your grade: {grade}. You passed the course.`;
    } else {
      return `Class average: ${averageScore}. Your grade: ${grade}. You failed the course.`;
    }
  }