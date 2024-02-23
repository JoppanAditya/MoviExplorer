const formatDate = (releaseDate) => {
  const date = new Date(releaseDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const formatRuntime = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}min`;
  } else {
    return `${minutes}min`;
  }
};

const year = (releaseDate) => {
  return new Date(releaseDate).getFullYear();
};

const formatRate = (rate) => {
  const voteAverage = parseFloat(rate);
  return voteAverage.toFixed(1);
};

export { formatDate, formatRuntime, year, formatRate };
