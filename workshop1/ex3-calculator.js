
const workshopRaw = 48;
const workshopFull = 60;
const workshopWeight = 20;

const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;


const workshopScore = (workshopRaw / workshopFull) * workshopWeight;

const totalScore = workshopScore + attendance + project + midterm + final;


const fullScore = 100;
const percentage = (totalScore / fullScore) * 100;


const targetScore = 80;
const remainingScore = targetScore - totalScore;


console.log(`===== สรุปคะแนน CE385 =====
Workshop      : ${workshopScore.toFixed(2)}
Attendance    : ${attendance}
Project       : ${project}
Midterm       : ${midterm}
Final         : ${final}
คะแนนรวม      : ${totalScore.toFixed(2)}
คิดเป็น       : ${percentage.toFixed(2)}%
ขาดอีก        : ${remainingScore.toFixed(2)} คะแนน
============================`);