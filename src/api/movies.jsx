export const fetchNowPlaying = async (page = 1) => {
  const url =
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg2ZGQxYjE1ZWRjNzk3YWE4MGRlMmM5Zjg1MDhkNiIsIm5iZiI6MTcyNDM0NDUwMy4yMDcwMDksInN1YiI6IjY2Yzc2N2RiZTVlMDBkMjJmNWNhOGJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CfwEUEj97YlI9Csb9FLU8eOa0u9Vrk4__JYsSMDqTDQ",
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTopRated = async (page = 1) => {
  const url =
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg2ZGQxYjE1ZWRjNzk3YWE4MGRlMmM5Zjg1MDhkNiIsIm5iZiI6MTcyNDM0NDUwMy4yMDcwMDksInN1YiI6IjY2Yzc2N2RiZTVlMDBkMjJmNWNhOGJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CfwEUEj97YlI9Csb9FLU8eOa0u9Vrk4__JYsSMDqTDQ",
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPopular = async (page = 1) => {
  const url =
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg2ZGQxYjE1ZWRjNzk3YWE4MGRlMmM5Zjg1MDhkNiIsIm5iZiI6MTcyNDM0NDUwMy4yMDcwMDksInN1YiI6IjY2Yzc2N2RiZTVlMDBkMjJmNWNhOGJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CfwEUEj97YlI9Csb9FLU8eOa0u9Vrk4__JYsSMDqTDQ",
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUpcoming = async (page = 1) => {
  const url =
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg2ZGQxYjE1ZWRjNzk3YWE4MGRlMmM5Zjg1MDhkNiIsIm5iZiI6MTcyNDM0NDUwMy4yMDcwMDksInN1YiI6IjY2Yzc2N2RiZTVlMDBkMjJmNWNhOGJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CfwEUEj97YlI9Csb9FLU8eOa0u9Vrk4__JYsSMDqTDQ",
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchmoviedetails = async (id) => {
  const url =
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg2ZGQxYjE1ZWRjNzk3YWE4MGRlMmM5Zjg1MDhkNiIsIm5iZiI6MTcyNDM0NDUwMy4yMDcwMDksInN1YiI6IjY2Yzc2N2RiZTVlMDBkMjJmNWNhOGJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CfwEUEj97YlI9Csb9FLU8eOa0u9Vrk4__JYsSMDqTDQ'
      }
    };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    console.log(json.results[0]);
    return json.results[0];
  } catch (error) {
    console.log(error);
  }
};



