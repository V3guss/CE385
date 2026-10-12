import type { RequestHandler } from "express";

export const logger: RequestHandler = (req, res, next) => {
  const startedAt = Date.now();

  // ทำงานเมื่อ Express ส่ง response เสร็จแล้ว
  res.on("finish", () => {
    const ms = Date.now() - startedAt;

    console.log(
      `${req.method} ${req.originalUrl} → ${res.statusCode} (${ms} ms)`,
    );
  });

  next();
};