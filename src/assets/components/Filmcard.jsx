export default function FilmCard({ films, serietv }) {
  const totalStars = 5;
  const renderStars = (rating) => {
    const filledStars = rating;
    return (
      <>
        {[...Array(totalStars)].map((_, index) => (
          <span key={index}>{index < filledStars ? "★" : "☆"}</span>
        ))}
      </>
    );
  };
  return (
    <>
      <div>
        <h4>Films</h4>
        {films.map((item) => (
          <div key={item.id}>
            <img src={item.image} />

            <h2>{item.title}</h2>
            <p>{item.original_title}</p>
            <img src={item.original_language} />
            <div>{renderStars(item.vote_average)}</div>
            <p>{item.type}</p>
          </div>
        ))}
      </div>
      <div>
        <h4>Serie Tv</h4>
        {serietv.map((itemtv) => (
          <div key={itemtv.id}>
            <img src={itemtv.image} />
            <h2>{itemtv.title}</h2>
            <p>{itemtv.original_title}</p>
            <img src={itemtv.original_language} />
            <div>{renderStars(itemtv.vote_average)}</div>
            <p>{itemtv.type}</p>
          </div>
        ))}
      </div>
    </>
  );
}
