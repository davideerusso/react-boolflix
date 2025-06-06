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
      <div className="container container-flex">
        {films.map((item) => (
          <div key={item.id} className="card-container">
            <div className="card">
              <img className="hover-card image-absolute" src={item.image} />

              <div className="overlay">
                <h2>{item.title}</h2>
                <p>{item.original_title}</p>
                <img src={item.original_language} />
                <div>{renderStars(item.vote_average)}</div>
                <p>{item.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container container-flex">
        {serietv.map((itemtv) => (
          <div key={itemtv.id} className="card-container">
            <div className="card">
              <img className="hover-card image-absolute" src={itemtv.image} />

              <div className="overlay">
                <h2>{itemtv.title}</h2>
                <p>{itemtv.original_title}</p>
                <img src={itemtv.original_language} />
                <div>{renderStars(itemtv.vote_average)}</div>
                <p>{itemtv.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
