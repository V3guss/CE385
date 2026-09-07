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

// ฟังก์ชันแปลงคะแนนเป็นเกรด
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
// ส่วนที่ 1
// สร้าง fetchStudentByIdAsync(id) ที่คืน Promise
// ห้ามใช้ async
// ========================================

function fetchStudentByIdAsync(id) {

    return new Promise((resolve, reject) => {

        // ตรวจสอบ id
        if (typeof id !== "string" || id.trim() === "") {
            reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
            return;
        }

        // จำลองฐานข้อมูลตอบช้า 300ms
        setTimeout(() => {

            // ค้นหานักศึกษา
            const student = students.find(s => s.id === id);

            // ไม่พบ
            if (!student) {
                reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
                return;
            }

            // พบข้อมูล
            resolve({ ...student });

        }, 300);

    });
}


// ========================================
// ส่วนที่ 2
// เรียกใช้ครบ 3 กรณี
// ========================================


// กรณีที่ 1 : ID มีจริง
fetchStudentByIdAsync("001")
    .then(student => {
        console.log("กรณีที่ 1 พบข้อมูล:", student);
    })
    .catch(error => {
        console.error("กรณีที่ 1:", error.message);
    })
    .finally(() => {
        console.log("กรณีที่ 1 เสร็จสิ้น");
    });


// กรณีที่ 2 : ID ไม่มี
fetchStudentByIdAsync("9999")
    .then(student => {
        console.log("กรณีที่ 2 พบข้อมูล:", student);
    })
    .catch(error => {
        console.error("กรณีที่ 2:", error.message);
    })
    .finally(() => {
        console.log("กรณีที่ 2 เสร็จสิ้น");
    });


// กรณีที่ 3 : ID ผิดรูปแบบ
fetchStudentByIdAsync(12)
    .then(student => {
        console.log("กรณีที่ 3 พบข้อมูล:", student);
    })
    .catch(error => {
        console.error("กรณีที่ 3:", error.message);
    })
    .finally(() => {
        console.log("กรณีที่ 3 เสร็จสิ้น");
    });


// ========================================
// ส่วนที่ 3
// Promise Chain 3 ขั้น
// ========================================

fetchStudentByIdAsync("001")

    // ขั้นที่ 1
    // แปลง student เป็น { name, grade }
    .then(student => {
        return {
            name: student.name,
            grade: toGrade(student.score)
        };
    })

    // ขั้นที่ 2
    // แปลงเป็นข้อความรายงาน 1 บรรทัด
    .then(result => {
        return `${result.name} ได้เกรด ${result.grade}`;
    })

    // ขั้นที่ 3
    // พิมพ์ออกทาง console
    .then(message => {
        console.log("รายงาน:", message);
        return message;
    })

    .catch(error => {
        console.error("เกิดข้อผิดพลาด:", error.message);
    })

    .finally(() => {
        console.log("จบ Promise Chain");
    });


// ========================================
// ส่วนที่ 4 BONUS
// promisify(fn)
// ========================================

function promisify(fn) {

    return (...args) => {

        return new Promise((resolve, reject) => {

            fn(...args, (err, result) => {

                if (err) {
                    reject(err);
                    return;
                }

                resolve(result);
            });

        });

    };
}