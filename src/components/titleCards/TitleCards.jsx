import "./titlecards.css";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Loading from "../loading/Loading";

import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const TitleCards = ({ title, fetchFunction, queryKey }) => {
  const [page, setPage] = useState(1);
  const {
    data: movies,
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: [queryKey, page],
    queryFn: () => fetchFunction(page),
    keepPreviousData: true,
  });

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // ======================== make the category scrollable ==============================
  const cardList = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  const handleScroll = (event) => {
    event.preventDefault();
    cardList.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const currentCardList = cardList.current;
    if (currentCardList && movies && movies.length > 0) {
      setIsScrollable(true);
      currentCardList.addEventListener("wheel", handleScroll);

      return () => {
        currentCardList.removeEventListener("wheel", handleScroll);
      };
    }
  }, [movies]);
  // ===================== make the category scrollable ===================================

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className="titlecards">
      <h2>{title}</h2>
      <div className="card-list" ref={cardList}>
        {movies &&
          movies.map((card) => (
            <NavLink to={`/player/${card.id}`} className="card" key={card.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </NavLink>
          ))}
      </div>
      {!isLoading && !error && (
        <button className="load-more" onClick={loadMore} disabled={isFetching}>
          {isFetching ? "Loading more..." : "Load More"}
        </button>
      )}
    </div>
  );
};

TitleCards.propTypes = {
  title: PropTypes.string.isRequired,
  fetchFunction: PropTypes.func.isRequired,
  queryKey: PropTypes.string.isRequired,
};

export default TitleCards;
