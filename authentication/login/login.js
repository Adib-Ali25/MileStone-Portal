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

const Login = () => {
  const navigate = useNavigate();
  const [passwordShow, setPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // **Form Validation with Formik & Yup**
  const validation = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Password must contain at least one special character"
        ),
    }),
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        console.log("Login Success:", values);
        navigate("/dashboard"); // Redirect after login
      }, 2000);
    },
  });

  return (
    <div id="body">
      {/* Background Video */}
      <video loop muted autoPlay playsInline className="background-video">
        <source src={Video} type="video/mp4" />
      </video>

      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100 justify-content-center">
                <Col md={8} lg={6} xl={5} sm={10} xs={12} className="text-center">
                <img src={Logo} alt="Milestone Logo" className="img mb-3" style={{ height: "70px"}} />

            <Card className="shadow p-4" style={{ borderRadius: "30px" }}>
              <CardBody className="text-center">
                
                <h2 className="mb-3">Welcome</h2>
                <p className="text-muted">We’re so excited to see you again!</p>

                <Form onSubmit={validation.handleSubmit}>
                  <div className="mb-3 text-start">
                    <Label htmlFor="email">Email or Phone</Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter email or phone number"
                      value={validation.values.email}
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      invalid={validation.touched.email && validation.errors.email}
                    />
                    {validation.touched.email && validation.errors.email && (
                      <FormFeedback>{validation.errors.email}</FormFeedback>
                    )}
                  </div>

                  <div className="mb-3 text-start">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type={passwordShow ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      value={validation.values.password}
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      invalid={validation.touched.password && validation.errors.password}
                    />
                    {validation.touched.password && validation.errors.password && (
                      <FormFeedback>{validation.errors.password}</FormFeedback>
                    )}
                    <span
                      className="position-absolute"
                      style={{ right: "50px", cursor: "pointer", top: "42%", transform: "translateY(58%)" }}
                      onClick={() => setPasswordShow(!passwordShow)}
                    >
                      {passwordShow ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>

                  <div className="text-start">
                    <Link to="/forgot" className="text-muted">
                      Forgot your password?
                    </Link>
                  </div>

                  {errorMsg && <Alert color="danger" className="mt-2">{errorMsg}</Alert>}

                  <div className="d-grid mt-4">
                    <button type="submit" disabled={loading} className="btn btn-dark" style= {{height: "50px", borderRadius:"30px"}}>
                      {loading ? <Spinner size="sm" className="me-2" /> : null}
                      Login
                    </button>
                  </div>

                  <p className="mt-3">
                    Don’t have an account? <Link to="/signup">Sign up</Link>
                  </p>
                </Form>
              </CardBody>
            </Card>

            {/* Footer */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
