import React from "react";
import Layout from "../Layout/Layout";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Layout>
        <Container style={{ margin: "5rem" }} className="text-center">
          <h1>Welcome to Admin Dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            expedita pariatur in ipsam sunt! Possimus aliquid sed exercitationem
            corrupti libero. Consequatur tempore officia libero et ipsa? Cumque
            illum porro esse. Accusantium dolore rem, eaque consequatur officia
            voluptates ipsam, voluptatibus officiis veritatis magnam aperiam
            asperiores provident optio suscipit modi sit totam maxime ab ducimus
            vitae? Excepturi fugiat nihil voluptate nisi debitis.
          </p>
        </Container>
      </Layout>
    </div>
  );
}

export default Home;
