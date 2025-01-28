import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import Video from "../../Assets/background-video.mp4";
import Logo from "../../Assets/milestonelogo.png";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // **Form Validation with Formik & Yup**
  const validation = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccessMsg("OTP sent successfully! Check your email.");
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
          <Col md={7} lg={5} xl={4} sm={9} xs={11} className="text-center">
            <img src={Logo} alt="Milestone Logo" className="img mb-2" style={{ height: "60px" }} />

            <Card className="shadow p-3" style={{ borderRadius: "20px" }}>
              <CardBody className="text-center">
                <h3 className="mb-2">Forgot Password?</h3>
                <p className="text-muted small">Enter your email to receive a confirmation OTP.</p>

                <Form onSubmit={validation.handleSubmit}>
                  <div className="mb-2 text-start">
                    <Label htmlFor="email" className="small">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={validation.values.email}
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      invalid={validation.touched.email && validation.errors.email}
                      style={{ height: "35px" }}
                    />
                    {validation.touched.email && validation.errors.email && <FormFeedback>{validation.errors.email}</FormFeedback>}
                  </div>

                  {errorMsg && <Alert color="danger" className="mt-2">{errorMsg}</Alert>}
                  {successMsg && <Alert color="success" className="mt-2">{successMsg}</Alert>}

                  <div className="d-grid mt-3">
                    <button type="submit" disabled={loading} className="btn btn-dark btn-sm" style={{ height: "40px", borderRadius: "20px" }}>
                      {loading ? <Spinner size="sm" className="me-2" /> : null} Send OTP
                    </button>
                  </div>

                  <p className="mt-2 small">
                    Don’t have an account? <Link to="/signup">Sign up</Link>
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

export default ForgotPassword;
