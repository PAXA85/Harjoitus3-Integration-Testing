import request from "supertest";
import { expect } from "chai";
import { app } from "../../src/app.js";

describe("hex-to-rgb route (integration)", function () {
  it("GET /api/hex-to-rgb/:hex returns rgb", async function () {
    const res = await request(app).get("/api/hex-to-rgb/ff00aa");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({
      hex: "#FF00AA",
      rgb: { r: 255, g: 0, b: 170 }
    });
  });

  it("GET invalid hex returns 400", async function () {
    const res = await request(app).get("/api/hex-to-rgb/not-a-hex");
    expect(res.status).to.equal(400);
    expect(res.body).to.have.property("error", "InvalidHex");
  });

});
