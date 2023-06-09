import { Link } from "react-router-dom";

function Explore() {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2 className="section__title">
            Explore more <span className="text__color">Books</span>
          </h2>
          <Link to="/books">
            <button className="btn">Explore Books</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Explore;
