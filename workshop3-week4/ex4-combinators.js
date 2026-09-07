// ========================================
// Promise Combinators
// ========================================


// เครื่องมือจำลอง Promise
const wait = (ms, value, willFail = false) =>
    new Promise((resolve, reject) => {

        setTimeout(() => {

            if (willFail) {
                reject(new Error(`${value} ล้มเหลว`));
            } else {
                resolve(value);
            }

        }, ms);

    });


// ========================================
// สถานการณ์ที่ 1
// Promise.all()
// ========================================

async function scenario1() {

    try {

        const result = await Promise.all([
            wait(300, "โปรไฟล์"),
            wait(400, "ตารางเรียน"),
            wait(500, "ประกาศ")
        ]);

        console.log("เปิดหน้าแรก:", result);

    } catch (error) {

        console.log("หน้าแรกเปิดไม่ได้:", error.message);

    }

}


// ========================================
// ทดสอบ Promise.all() กรณีล้มเหลว
// ========================================

async function scenario1Fail() {

    try {

        const result = await Promise.all([
            wait(300, "โปรไฟล์"),
            wait(400, "ตารางเรียน", true),
            wait(500, "ประกาศ")
        ]);

        console.log("เปิดหน้าแรก:", result);

    } catch (error) {

        console.log("หน้าแรกเปิดไม่ได้:", error.message);

    }

}


// ========================================
// สถานการณ์ที่ 2
// Promise.allSettled()
// ========================================

async function scenario2() {

    const result = await Promise.allSettled([
        wait(300, "อีเมล"),
        wait(500, "SMS", true),
        wait(400, "แอป")
    ]);

    console.log("ผลการแจ้งเตือน:");

    result.forEach(item => {
        console.log(item);
    });

}


// ========================================
// สถานการณ์ที่ 3
// Promise.any()
// ========================================

async function scenario3() {

    try {

        const result = await Promise.any([
            wait(300, "mirror-A", true),
            wait(600, "mirror-B")
        ]);

        console.log("ใช้ข้อมูลจาก:", result);

    } catch (error) {

        console.log("ไม่มี server ใดสำเร็จ");

    }

}


// ========================================
// สถานการณ์ที่ 4
// Promise.race()
// ========================================

function timeoutPromise(ms) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject(new Error(`เกิน ${ms}ms`));
        }, ms);

    });

}


async function scenario4() {

    try {

        const result = await Promise.race([
            wait(1200, "ค้นหาฐานข้อมูล"),
            timeoutPromise(800)
        ]);

        console.log("ผลการค้นหา:", result);

    } catch (error) {

        console.log("เกินเวลา:", error.message);

    }

}


// ========================================
// main()
// ========================================

async function main() {

    console.log("===== สถานการณ์ที่ 1 =====");

    await scenario1();


    console.log("\n===== ทดสอบสถานการณ์ที่ 1 แบบ Error =====");

    await scenario1Fail();


    console.log("\n===== สถานการณ์ที่ 2 =====");

    await scenario2();


    console.log("\n===== สถานการณ์ที่ 3 =====");

    await scenario3();


    console.log("\n===== สถานการณ์ที่ 4 =====");

    await scenario4();

}


// เริ่มโปรแกรม
main();