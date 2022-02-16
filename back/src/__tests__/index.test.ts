import mongoose from "mongoose";
import request from "supertest";
import app from "@src/app";
import { configs } from "@utils/constants";
import { user } from "./test.config";

describe("GET /", () => {
  beforeAll(async () => {
    await mongoose.connect(configs.DB_URL).then(() => console.log("데이터베이스 연결 성공"));
  });

  it("1. 메인 페이지", async () => {
    const res = await request(app).get("/").send();

    expect(res.statusCode).toEqual(200);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoose.disconnect();
  });
});
