// ================================
// Workshop 2 : ข้อที่ 2
// ทะเบียนนักศึกษา
// ================================

// ส่วนที่ 1 : ข้อมูลนักศึกษาอย่างน้อย 6 คน
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


// ================================
// ส่วนที่ 2 : ฟังก์ชันค้นหา
// ================================

// 1. ค้นหานักศึกษาจาก ID
const findById = (students, id) => {
    return students.find(s => s.id === id);
};


// 2. ค้นหานักศึกษาตามสาขา
const findByMajor = (students, major) => {
    return students.filter(s => s.major === major);
};


// 3. ตรวจสอบว่ามีนักศึกษาที่สอบตกหรือไม่
// คะแนนต่ำกว่า 50 = สอบตก
const hasFailingStudent = (students) => {
    return students.some(s => s.score < 50);
};


// 4. ค้นหา Email จาก ID
const getEmail = (students, id) => {
    const student = findById(students, id);

    // ?. ป้องกัน Error กรณีไม่มีนักศึกษา
    // ?? กำหนดข้อความเมื่อไม่มี email
    return student?.contact?.email ?? "ไม่พบข้อมูลติดต่อ";
};


// ================================
// ส่วนที่ 3 : ทดสอบ
// ================================

// ค้นหา ID ที่ไม่มีอยู่
console.log("ค้นหา 9999:");
console.log(findById(students, "9999"));

console.log("Email ของ 9999:");
console.log(getEmail(students, "9999"));


// ตรวจสอบว่ามีนักศึกษาสอบตกหรือไม่
console.log("มีนักศึกษาสอบตกหรือไม่:");
console.log(hasFailingStudent(students));


// ================================
// เพิ่มนักศึกษาที่ไม่มี contact
// ห้ามใช้ push กับ array ต้นฉบับ
// ใช้ spread สร้าง array ใหม่
// ================================

const newStudent = {
    id: "67007",
    name: "กิตติ",
    major: "CE",
    score: 72
};

const updatedStudents = [
    ...students,
    newStudent
];


// ทดสอบ getEmail กับนักศึกษาที่ไม่มี contact
console.log("Email ของ 67007:");
console.log(getEmail(updatedStudents, "67007"));