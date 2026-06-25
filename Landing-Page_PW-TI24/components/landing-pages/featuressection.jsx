import React from "react";
import ListBooks from "../data/ListBook";
import BookCard from "../cards/BookCard";

export default function FeaturedBooksSection() {
  return (
    <section id="books" className="py-5">
      <div className="container">

        <div className="row mb-5">
          <div className="col">
            <h2 className="fw-bold text-center">
              Featured Books
            </h2>

            <p className="text-center text-muted">
              Handpicked selections just for you
            </p>
          </div>
        </div>

        <div className="row g-4">
          {ListBooks.map((book) => (
            <div
              key={book.id}
              className="col-md-6 col-lg-4 align-items-center"
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}