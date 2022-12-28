import React from "react";

export const Footer = () => {
  return (
    <footer className="text-center text-white">
      <div className="container pt-4">
        <section className="mb-4">
          <p
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/pina089"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </p>

          <p
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/alexpinabraojos/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </p>

          <p
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/AlexPinaBr"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </p>
        </section>
      </div>

      <div className="text-center text-dark p-3">
        © Designed in 2022
        <p className="text-dark" href="https://pina089.com/">
          Álex Pina
        </p>
      </div>
    </footer>
  );
};