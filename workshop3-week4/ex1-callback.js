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

function fetchStudentById(id,  callback) {

    if (typeof id !== "string" || id.trim() === ""){
        callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
        return;
    }

    setTimeout(() => {
        const student = students.find(s => s.id === id);

        if (!student) {
            callback(new Error('ไม่พบรหัสนักศึกษา  ${id}'));
            return;
        }

        callback(null,{...student});

    }, 300);
}

fetchStudentById("001", (error, student) => {
    if (error) {
        console.error(error.message);
        return;
    }

    console.log(student);
});