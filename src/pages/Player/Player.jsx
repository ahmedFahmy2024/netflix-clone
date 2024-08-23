import "./player.css";

import { Icon } from "@iconify/react";
import { fetchmoviedetails } from "../../api/movies";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Player = () => {
const {id} = useParams();

  const {data, isLoading, error} = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchmoviedetails(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No movie found</div>;
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(data.published_at));


  return (
    <div className="player">
      <Icon onClick={() => window.history.back()} icon="bi:arrow-left" width="24" height="24" />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${data.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{formattedDate}</p>
        <p>{data.name}</p>
        <p>{data.type}</p>
      </div>
    </div>
  );
};

export default Player;
