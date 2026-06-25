import React from "react";

const BookCard = ({ book }) => {
  const { title, author, is_free, rating, img } = book;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`bi bi-star${
          i < Math.floor(rating) ? "-fill" : ""
        } text-warning`}
      ></i>
    ));
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body text-center">

        <div
  className="bg-light p-4 mb-3 rounded d-flex justify-content-center align-items-center"
  style={{ height: "220px" }}
    >
      {img ? (
        <img
          src={`/books/${img}`}
          alt={title}
          className="img-fluid"
          style={{
            maxHeight: "150px",
            width: "120px",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
      ) : (
        <i
          className="bi bi-book-half"
          style={{
            fontSize: "4rem",
            color: "#6c757d"
          }}
        ></i>
      )}
    </div>

        <h5 className="card-title fw-bold">
          {title}
        </h5>

        <p className="text-muted small mb-2">
          by {author}
        </p>

        <div className="mb-2">
          {renderStars(rating)}
          <span className="ms-2 text-muted small">
            ({rating})
          </span>
        </div>

        {is_free && (
          <span className="badge bg-success">
            Free
          </span>
        )}

      </div>
    </div>
  );
};

export default BookCard;