const nickname = "ข้าวเหนียว";
const studentId = "67111671";
const age = 21;
const major = "วิศวกรรมคอมพิวเตอร์";
const registeredSubjects = 6;

const remainingYears = 2;
const currentYear = 2569;
const graduationYear = currentYear + remainingYears;

// แสดงผลด้วย Template Literal
console.log(`===== บัตรแนะนำตัว =====
ชื่อเล่น       : ${nickname}
รหัสนักศึกษา  : ${studentId}
อายุ           : ${age} ปี
สาขาวิชา       : ${major}
ลงทะเบียน      : ${registeredSubjects} วิชา
ปีที่จะจบ      : ${graduationYear}
========================`);