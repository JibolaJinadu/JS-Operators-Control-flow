//3. Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts Student.
// All students have to take General subjects.

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';

let classGroup = 'Social-Science';

if (classGroup === 'Science') {
    console.log('Kindly note that the subjects for Science-class Students are; '+ generalSubjects + ' '+scienceSubjects);
} 
else if (classGroup === 'Social-Science'){
    console.log('Kindly note that the subjects for Social-science class Students are; '+ generalSubjects + ' '+socialScienceSubjects);
} 
else if (classGroup === 'Arts'){
    console.log('Kindly note that the subjects for Art-class Students are; '+ generalSubjects + ' '+artsSubjects);
}
 else {
    console.log('Kindly select your Class-Group in order to get other Subjects in addition to the general Subjects' + generalSubjects);
}



//4. What is the result when the following program is executed?
for (let i = 1; i < 20; i += 7){
    console.log(i);
}



//5 Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr.
function nearestPowerOf2(num) {
    let pwr = Math.pow(2, Math.round(Math.log2(num)));
    if (Math.abs(pwr - num) > Math.abs(pwr/2 - num)) {
      pwr = pwr/2;
    }
    console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
  }
nearestPowerOf2(40)
nearestPowerOf2(50)
