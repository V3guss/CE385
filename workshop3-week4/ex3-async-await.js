const students = [
    {
        id: "001",
        name: "Tonkla",
        major: "Computer Engineering",
        score:  85
    },
    {
        id: "002",
        name: "Nicha",
        major: "Logistic",
        score: 72
    },
    {
        id: "003",
        name: "Hava",
        major: "Computer Engineering",
        score: 65
    },
    {
        id: "004",
        name: "Mali",
        major: "Computer Science",
        score: 48
    }
];


// ========================================
// แปลงคะแนนเป็นเกรด
// ========================================

function toGrade(score) {

    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}


// ========================================
// Promise จาก Ex2
// ========================================

function fetchStudentByIdAsync(id) {

    return new Promise((resolve, reject) => {

        if (typeof id !== "string" || id.trim() === "") {
            reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
            return;
        }

        setTimeout(() => {

            const student = students.find(s => s.id === id);

            if (!student) {
                reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
                return;
            }

            resolve({ ...student });

        }, 300);

    });
}


// ========================================
// ส่วนที่ 1
// Sequential
// ========================================

async function reportSequential() {

    const ids = ["001", "002", "003","004"];

    const start = Date.now();

    for (const id of ids) {

        const student = await fetchStudentByIdAsync(id);

        console.log(
            `${student.name} ได้เกรด ${toGrade(student.score)}`
        );
    }

    const end = Date.now();

    console.log(`Sequential ใช้เวลา ${end - start} ms`);
}


// ========================================
// ส่วนที่ 2
// Parallel
// ========================================

async function reportParallel() {

    const ids = ["001", "002", "003","004"];

    const start = Date.now();

    const students = await Promise.all(
        ids.map(id => fetchStudentByIdAsync(id))
    );

    students.forEach(student => {

        console.log(
            `${student.name} ได้เกรด ${toGrade(student.score)}`
        );

    });

    const end = Date.now();

    console.log(`Parallel ใช้เวลา ${end - start} ms`);
}


// ========================================
// ส่วนที่ 3
// safeReport
// ========================================

async function safeReport(id) {

    try {

        const student = await fetchStudentByIdAsync(id);

        console.log(
            `พบข้อมูล: ${student.name} (เกรด ${toGrade(student.score)})`
        );

    } catch (error) {

        console.log(
            `ตรวจไม่พบ: ${error.message}`
        );

    } finally {

        console.log(
            `ตรวจสอบ ${id} เสร็จสิ้น`
        );

    }
}


// ========================================
// ส่วนที่ 4
// อธิบาย try-catch กับ await
// ========================================

// try-catch สามารถจับ Error จาก Promise ที่ await แล้วเกิด reject ได้
// เพราะ await จะโยน Error ออกมาให้ catch จัดการ
//
// แต่ callback ธรรมดาที่ทำงานภายหลัง เช่น setTimeout
// จะไม่ได้ทำงานอยู่ภายใน try ตอนที่ callback ทำงาน
// ดังนั้น try-catch ภายนอกจึงจับ Error ที่เกิดใน callback ไม่ได้


// await หน้า Promise.all ไม่ได้ทำให้ Promise ทำงานทีละตัว
// เพราะ ids.map() สร้าง Promise ทั้งหมดก่อนแล้ว
// Promise.all จึงรอ Promise ทั้งหมดพร้อมกัน
// เวลาจึงใกล้เคียง 300ms ไม่ใช่ 900ms


// ========================================
// main
// ========================================

async function main() {

    console.log("===== ข้อ 1 Sequential =====");

    await reportSequential();


    console.log("\n===== ข้อ 2 Parallel =====");

    await reportParallel();


    console.log("\n===== ข้อ 3 safeReport =====");

    await safeReport("001");

    await safeReport("9999");

}


// เริ่มโปรแกรม
main();