export default function FilmCard({ films, serietv }) {
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
            <p>{item.vote_average}</p>
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
            <p>{itemtv.vote_average}</p>
            <p>{itemtv.type}</p>
          </div>
        ))}
      </div>
    </>
  );
}
