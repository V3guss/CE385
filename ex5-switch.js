function getMenuPrice(menu) {
    switch (menu) {
        // เมนูที่ราคา 50 บาท ใช้ fall-through รวม case
        case "ข้าวผัด":
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            return 50;

        case "ผัดไทย":
            return 60;

        case "ต้มยำกุ้ง":
            return 120;

        // ถ้าไม่พบเมนูในรายการ ให้ราคาเป็น 0
        default:
            return 0;
    }
}


function getSizeMultiplier(size) {
    switch (size) {
        case "ธรรมดา":
            return 1;

        case "พิเศษ":
            return 1.5;

        case "จัมโบ้":
            return 2;

        // ขนาดอื่น ๆ ให้ใช้ราคาปกติ
        default:
            return 1;
    }
}


const orders = [
    { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
    { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
    { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
    { menu: "ข้าวหมูแดง", size: "พิเศษ", qty: 1 },
    { menu: "ส้มตำ", size: "ธรรมดา", qty: 1 }
];


let total = 0;

for (const order of orders) {
    const price = getMenuPrice(order.menu);
    const multiplier = getSizeMultiplier(order.size);
    const itemTotal = price * multiplier * order.qty;

    console.log(
        `${order.menu} (${order.size}) x ${order.qty} = ${itemTotal} บาท`
    );

    total += itemTotal;
}

console.log(`ราคารวมทั้งหมด = ${total} บาท`);