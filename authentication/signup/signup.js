import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Input,
  Label,
  FormFeedback,
  Alert,
  Spinner,
} from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../../Assets/milestonelogo.png";
import Video from "../../Assets/background-video.mp4";

const Signup = () => {
  const navigate = useNavigate();
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const validation = useFormik({
    initialValues: {
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Email is required"),
      phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "At least one uppercase letter")
        .matches(/\d/, "At least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "At least one special character"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        console.log("Signup Success:", values);
        navigate("/dashboard");
      }, 2000);
    },
  });

  return (
    <div id="body">
      <video loop muted autoPlay playsInline className="background-video">
        <source src={Video} type="video/mp4" />
      </video>

      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100 justify-content-center">
          <Col md={7} lg={5} xl={5} sm={9} xs={11} className="text-center">
            <img src={Logo} alt="Milestone Logo" className="img mb-2" style={{ height: "60px" }} />

            <Card className="shadow p-3" style={{ borderRadius: "20px" }}>
              <CardBody className="text-center">
                <h3 className="mb-2">Create an account</h3>
                <p className="text-muted small">Create an account to manage your business efficiently.</p>

                <Form onSubmit={validation.handleSubmit}>
                  <div className="mb-2 text-start">
                    <Label htmlFor="email" className="small">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      value={validation.values.email}
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      invalid={validation.touched.email && validation.errors.email}
                      style={{ height: "35px" }}
                    />
                    {validation.touched.email && validation.errors.email && <FormFeedback>{validation.errors.email}</FormFeedback>}
                  </div>

                  <div className="mb-2 text-start">
                    <Label htmlFor="phone" className="small">Phone</Label>
                    <Input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter phone number"
                      value={validation.values.phone}
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      invalid={validation.touched.phone && validation.errors.phone}
                      style={{ height: "35px" }}
                    />
                    {validation.touched.phone && validation.errors.phone && <FormFeedback>{validation.errors.phone}</FormFeedback>}
                  </div>

                  <div className="mb-2 text-start position-relative">
                    <Label htmlFor="password" className="small">Password</Label>
                    <Input
                      type={passwordShow ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      value={validation.values.password}
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      invalid={validation.touched.password && validation.errors.password}
                      style={{ height: "35px" }}
                    />
                    {validation.touched.password && validation.errors.password && <FormFeedback>{validation.errors.password}</FormFeedback>}
                    <span
                      className="position-absolute"
                      style={{ right: "10px", top: "30%", transform: "translateY(-58%)", cursor: "pointer" }}
                      onClick={() => setPasswordShow(!passwordShow)}
                    >
                      {passwordShow ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>

                  <div className="mb-2 text-start position-relative">
                    <Label htmlFor="confirmPassword" className="small">Confirm Password</Label>
                    <Input
                      type={confirmPasswordShow ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Re-enter password"
                      value={validation.values.confirmPassword}
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      invalid={validation.touched.confirmPassword && validation.errors.confirmPassword}
                      style={{ height: "35px" }}
                    />
                    {validation.touched.confirmPassword && validation.errors.confirmPassword && <FormFeedback>{validation.errors.confirmPassword}</FormFeedback>}
                    <span
                      className="position-absolute"
                      style={{ right: "10px", top: "30%", transform: "translateY(-58%)", cursor: "pointer" }}
                      onClick={() => setConfirmPasswordShow(!confirmPasswordShow)}
                    >
                      {confirmPasswordShow ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>

                  <p className="small text-start">
                    By signing up, you agree to our{" "}
                    <Link to="/terms" className="link">Terms</Link> and{" "}
                    <Link to="/privacy" className="link">Privacy Policy</Link>.
                  </p>

                  {errorMsg && <Alert color="danger" className="mt-2">{errorMsg}</Alert>}

                  <div className="d-grid mt-3">
                    <button type="submit" disabled={loading} className="btn btn-dark btn-sm" style={{ height: "40px", borderRadius: "20px" }}>
                      {loading ? <Spinner size="sm" className="me-2" /> : null} Sign Up
                    </button>
                  </div>

                  <p className="mt-2 small">
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
