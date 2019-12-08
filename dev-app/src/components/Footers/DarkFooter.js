import React from "react";
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="#"
              >
                TeamB2
              </a>
            </li>
            <li>
              <a
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}
          . Coded by{" "}
          <a
            href="#"
          >
            TeamB2
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
