const students = [
    {
        id: "67001",
        name: "สมชาย",
        major: "CE",
        score: 75,
        contact: {
            email: "somchai@gmail.com",
            phone: "0811111111"
        }
    },
    {
        id: "67002",
        name: "สมหญิง",
        major: "IT",
        score: 82,
        contact: {
            email: "somying@gmail.com",
            phone: "0822222222"
        }
    },
    {
        id: "67003",
        name: "มานะ",
        major: "CE",
        score: 45,
        contact: {
            email: "mana@gmail.com",
            phone: "0833333333"
        }
    },
    {
        id: "67004",
        name: "มานี",
        major: "IT",
        score: 68,
        contact: {
            email: "manee@gmail.com",
            phone: "0844444444"
        }
    },
    {
        id: "67005",
        name: "ปิติ",
        major: "CE",
        score: 55,
        contact: {
            email: "piti@gmail.com",
            phone: "0855555555"
        }
    },
    {
        id: "67006",
        name: "วิภา",
        major: "IT",
        score: 90,
        contact: {
            email: "wipa@gmail.com",
            phone: "0866666666"
        }
    }
];
// ======================================
// Workshop 2 : ข้อที่ 3
// สรุปผลการเรียน
// ======================================


// 1. ดึงชื่อของนักศึกษาทุกคน
const getNames = (students) => {
    return students.map(student => student.name);
};


// 2. ดึงนักศึกษาที่คะแนนมากกว่า 50
const getPassedStudents = (students) => {
    return students.filter(student => student.score > 50);
};


// 3. หาผลรวมคะแนนทั้งหมด
const getTotalScore = (students) => {
    return students.reduce((total, student) => {
        return total + student.score;
    }, 0);
};


// 4. หาคะแนนเฉลี่ย
// ถ้าไม่มีข้อมูล ให้คืนค่า 0
const getAverageScore = (students) => {

    if (students.length === 0) {
        return 0;
    }

    const total = getTotalScore(students);

    return Number((total / students.length).toFixed(2));
};

const toGrade = (score) => {
    if (score >= 80) return "A";
    if (score >= 75) return "B+";
    if (score >= 70) return "B";
    if (score >= 65) return "C+";
    if (score >= 60) return "C";
    if (score >= 55) return "D+";
    if (score >= 50) return "D";
    return "F";
};

// 5. นับจำนวนนักศึกษาแยกตามเกรด
const countByGrade = (students) => {

    return students.reduce((result, student) => {

        const grade = toGrade(student.score);

        result[grade] = (result[grade] || 0) + 1;

        return result;

    }, {});
};


// 6. หานักศึกษาที่ได้คะแนนสูงสุด
const getTopStudent = (students) => {

    if (students.length === 0) {
        return undefined;
    }

    return students.reduce((top, student) => {

        return student.score > top.score
            ? student
            : top;

    });
};


// ======================================
// ทดสอบฟังก์ชัน
// ======================================

console.log("รายชื่อนักศึกษา:");
console.log(getNames(students));

console.log("นักศึกษาที่สอบผ่าน:");
console.log(getPassedStudents(students));

console.log("คะแนนรวม:");
console.log(getTotalScore(students));

console.log("คะแนนเฉลี่ย:");
console.log(getAverageScore(students));

console.log("จำนวนตามเกรด:");
console.log(countByGrade(students));

console.log("นักศึกษาคะแนนสูงสุด:");
console.log(getTopStudent(students));


// ======================================
// ส่วนที่ 2
// คะแนนเฉลี่ยของนักศึกษาสาขา CE ที่สอบผ่าน
// filter → map → reduce
// ======================================

const cePassedAverage = students
    .filter(student => student.major === "CE")
    .filter(student => student.score > 50)
    .map(student => student.score)
    .reduce((total, score, index, scores) => {

        if (index === scores.length - 1) {
            return (total + score) / scores.length;
        }

        return total + score;

    }, 0);

console.log("คะแนนเฉลี่ย CE ที่สอบผ่าน:");
console.log(cePassedAverage);


// ======================================
// ทดสอบ Array ว่าง
// ======================================

const emptyStudents = [];

console.log("ทดสอบ Array ว่าง:");
console.log(getNames(emptyStudents));
console.log(getPassedStudents(emptyStudents));
console.log(getTotalScore(emptyStudents));
console.log(getAverageScore(emptyStudents));
console.log(countByGrade(emptyStudents));
console.log(getTopStudent(emptyStudents));
const cePassedStudents = students
    .filter(student => student.major === "CE")
    .filter(student => student.score > 50);

const ceScores = cePassedStudents
    .map(student => student.score);

const ceTotal = ceScores
    .reduce((total, score) => total + score, 0);

const ceAverage = ceScores.length === 0
    ? 0
    : Number((ceTotal / ceScores.length).toFixed(2));

console.log("คะแนนเฉลี่ย CE ที่สอบผ่าน:", ceAverage);