const WORKSHOP_FULL_SCORE = 60;
const WORKSHOP_WEIGHT = 20;


// 1. ตรวจสอบว่าคะแนนอยู่ในช่วง 0 - 100 หรือไม่
const isValidScore = (score) => {
    return typeof score === "number" &&
        score >= 0 &&
        score <= 100;
};


// 2. แปลงคะแนนเป็นเกรด
const toGrade = (score) => {

    // ตรวจสอบคะแนนก่อน
    if (!isValidScore(score)) {
        return "Invalid";
    }

    // ตารางเกรด
    const grades = [
        { min: 80, grade: "A" },
        { min: 75, grade: "B+" },
        { min: 70, grade: "B" },
        { min: 65, grade: "C+" },
        { min: 60, grade: "C" },
        { min: 55, grade: "D+" },
        { min: 50, grade: "D" },
        { min: 0, grade: "F" }
    ];

    const result = grades.find(item => score >= item.min);

    return result.grade;
};


// 3. คำนวณคะแนน Workshop
const calculateWorkshopScore = (
    raw,
    full = WORKSHOP_FULL_SCORE,
    weight = WORKSHOP_WEIGHT
) => {

    // ต้องตรวจสอบคะแนนก่อนคำนวณ
    if (!isValidScore(raw)) {
        return 0;
    }

    // (คะแนนที่ได้ / คะแนนเต็ม) × น้ำหนัก
    return (raw / full) * weight;
};


// 4. คำนวณคะแนนรวม 5 ส่วน
const calculateTotal = (
    workshop,
    attendance,
    project,
    midterm,
    final
) => {

    // ตรวจสอบคะแนนทุกส่วนก่อน
    const scores = [
        workshop,
        attendance,
        project,
        midterm,
        final
    ];

    const allValid = scores.every(score => isValidScore(score));

    if (!allValid) {
        return 0;
    }

    // รวมคะแนนทั้ง 5 ส่วน
    return workshop +
        attendance +
        project +
        midterm +
        final;
};
const students = [
    {
        name: "สมชาย",
        workshop: 18,
        attendance: 10,
        project: 20,
        midterm: 18,
        final: 25
    },
    {
        name: "สมหญิง",
        workshop: 16,
        attendance: 9,
        project: 18,
        midterm: 20,
        final: 28
    },
    {
        name: "มานะ",
        workshop: 20,
        attendance: 10,
        project: 19,
        midterm: 15,
        final: 30
    }
];


// แสดงผลเป็นตาราง
const result = students.map(student => {

    const total = calculateTotal(
        student.workshop,
        student.attendance,
        student.project,
        student.midterm,
        student.final
    );

    const grade = toGrade(total);

    return {
        ชื่อ: student.name,
        Workshop: student.workshop,
        เข้าเรียน: student.attendance,
        Project: student.project,
        Midterm: student.midterm,
        Final: student.final,
        คะแนนรวม: total,
        เกรด: grade
    };
});

console.table(result);
// กรณีไม่ส่ง full และ weight
const score1 = calculateWorkshopScore(48);

// กรณีส่ง full และ weight เอง
const score2 = calculateWorkshopScore(48, 60, 20);

console.log(score1);
console.log(score2);

// ผลลัพธ์เท่ากัน เพราะค่า default คือ
// full = 60
// weight = 20
//
// ดังนั้น
// calculateWorkshopScore(48)
// จะทำงานเหมือน
// calculateWorkshopScore(48, 60, 20)