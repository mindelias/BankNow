import app from "../app";
import request from "supertest";

describe("user Endpoints", () => {
  it("should signup users", async done => {
    const result = await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "aminat",
        email: "aminat@gmail.com",
        password: "123456",
        confirmPassword: "123456",
        phoneNumber: "086738932878"
      });
    expect(result.body).toHaveProperty("payload");
    // expect(result.body.data[0]).toHaveProperty("email");
    done();
  });

  it("should error if user fail to provide required data", async done => {
    const result = await request(app)
      .post("/api/v1/auth/signup")
      .send({});
    expect(result.body).toHaveProperty("errors");
    expect(result.body.errors).toHaveProperty("fullName");
    expect(result.body.errors).toHaveProperty("password");
    expect(result.body.errors).toHaveProperty("confirmPassword");
    expect(result.body.errors).toHaveProperty("email");
    expect(result.body.errors).toHaveProperty("phoneNumber");
    done();
  });

  it("should error if users already exist", async done => {
    const result = await request(app)
      .post("/api/v1/auth/signup")
      .send({
        fullName: "aminat",
        email: "aminat@gmail.com",
        password: "123456",
        confirmPassword: "123456",
        phoneNumber: "086738932878"
      });
    expect(result.body).toHaveProperty("errors");
    expect(result.body.errors).toHaveProperty("issue");
    expect(result.body.errors.issue).toEqual(
      "Email or Phone number already exists"
    );
    done();
  });

  it("should login users", async done => {
    const result = await request(app)
      .post("/api/v1/auth/signin")
      .send({
        email: "aminat@gmail.com",
        password: "123456"
      });
    expect(result.body).toHaveProperty("payload");
    expect(result.body.payload).toHaveProperty("userExist");
    expect(result.body.payload).toHaveProperty("token");
    done();
  });
  it("should error if users does not exist", async done => {
    const result = await request(app)
      .post("/api/v1/auth/signin")
      .send({
        email: "loryn@gmail.com",
        password: "123456"
      });
    expect(result.body).toHaveProperty("error");
    expect(result.body.error).toEqual("email or password is incorrect");
    done();
  });

  it("should error if users fails to provide email and password", async done => {
    const result = await request(app)
      .post("/api/v1/auth/signin")
      .send({});
    expect(result.body).toHaveProperty("errors");
    expect(result.body.errors).toHaveProperty("email");
    expect(result.body.errors).toHaveProperty("password");
    done();
  });

  it("should error if users fails to provide password", async done => {
    const result = await request(app)
      .post("/api/v1/auth/signin")
      .send({email: "aminat@gmail.com"});
    expect(result.body).toHaveProperty("errors");
    expect(result.body.errors).toHaveProperty("password");
    // expect(result.body.errors.password).toEqual("password is required");
    done();
  });

  it("should error if users fails to provide email", async done => {
    const result = await request(app)
      .post("/api/v1/auth/signin")
      .send({password:"123456"});
    expect(result.body).toHaveProperty("errors");
    expect(result.body.errors).toHaveProperty("email");
    // expect(result.body.errors.email).toEqual("email is required");
    done();
  });

});
