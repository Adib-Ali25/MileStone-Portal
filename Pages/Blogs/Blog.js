import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Blog.css";

const BlogPost = () => {
  return (
    <>
      {/* Main Blog Content */}
      <Container fluid className="mt-4">
        {/* Blog Title */}
        <Row className="text-center">
          <Col>
            <h2 className="fw-bold">Blogs</h2>
            <h6>
              <span className="text-orange fw-bold">Thoughts and words</span>{' '}
              <span>about us and our products</span>
            </h6>
          </Col>
        </Row>

        {/* Blog Header */}
        <Row className="mt-4">
          <Col>
            <h5>
              <span className="text-orange fw-bold">Soffit Walls Unveiled:</span>{' '}
              <span>The Modern Elegance Redefining Interiors</span>
            </h5>
          </Col>
        </Row>

        {/* Image with Frames */}
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={10} lg={8} className="position-relative">
            <img
              src={require('../../assets/pic.png')}
              alt="Soffit Walls"
              className="img-fluid rounded"
            />
            {/* Top-right frame */}
            <div className="corner-frame top-right"></div>
            {/* Bottom-left frame */}
            <div className="corner-frame bottom-left"></div>
          </Col>
        </Row>

        {/* Blog Content */}
        <Row className="mt-4">
          <Col>
            <p className="text-justify">
              Unveil the epitome of sophistication with our Soffit Walls, where form seamlessly intertwines with function. These architectural marvels redefine the aesthetic appeal of interiors, presenting a harmonious fusion of elegance and practicality. Crafted with meticulous attention to detail, Soffit Walls serve as a canvas for modern design, allowing you to infuse your spaces with a contemporary edge.
            </p>
            <p className="text-justify">
              Whether enhancing the ambiance of residential sanctuaries or elevating corporate environments, these versatile elements are a testament to the transformative power of architectural design. Radiating modern sophistication, Soffit Walls become a focal point, effortlessly blending into the existing décor while leaving a lasting impression.
            </p>
          </Col>
        </Row>

        {/* Wooden Herringbone Section */}
        <Row className="mt-5 text-center">
          <Col>
            <h5>
              <span className="text-orange">Wooden Herringbone Magic:</span>{' '}
              <span>Timeless Designs for Every Space</span>
            </h5>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col xs={12} md={10} lg={8} className="position-relative">
            <img
              src={require('../../assets/img.png')}
              alt="Wooden Herringbone Design"
              className="img-fluid rounded"
            />
            {/* Top-right frame */}
            <div className="corner-frame top-right"></div>
            {/* Bottom-left frame */}
            <div className="corner-frame bottom-left"></div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <p className="text-justify">
              Step into a world where timeless design meets natural beauty with our exquisite Wooden Herringbone patterns. These captivating designs effortlessly weave together tradition and contemporary style, creating a foundation of elegance for every space.
            </p>
            <p className="text-justify">
              Explore the magic of Wooden Herringbone as it transforms your interiors into timeless masterpieces, bringing a sense of history and craftsmanship to every corner of your space.
            </p>
          </Col>
        </Row>

        {/* HPL Wonders Section */}
        <Row className="mt-5 text-center">
          <Col>
            <h5>
              <span className="text-orange">HPL Wonders:</span>{' '}
              <span>Durable Style for Modern Interior Surfaces</span>
            </h5>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col xs={12} md={10} lg={8} className="position-relative">
            <img
              src={require('../../assets/pic3.png')}
              alt="HPL Wonders"
              className="img-fluid rounded"
            />
            {/* Top-right frame */}
            <div className="corner-frame top-right"></div>
            {/* Bottom-left frame */}
            <div className="corner-frame bottom-left"></div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <p className="text-justify">
              Experience the magic of timeless designs with HPL surfaces, where elegance meets durability in modern interiors. Whether in residential or commercial spaces, HPL adds a refined touch that redefines modern aesthetics.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPost;
