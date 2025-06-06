export default function FilmCard({ films, serietv }) {
  return (
    <>
      <div>
        <h4>Films</h4>
        {films.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.original_title}</p>
            <p>{item.original_language}</p>
            <p>{item.vote_average}</p>
            <p>{item.type}</p>
          </div>
        ))}
      </div>
      <div>
        <h4>Serie Tv</h4>
        {serietv.map((itemtv) => (
          <div key={itemtv.id}>
            <h2>{itemtv.title}</h2>
            <p>{itemtv.original_title}</p>
            <p>{itemtv.original_language}</p>
            <p>{itemtv.vote_average}</p>
            <p>{itemtv.type}</p>
          </div>
        ))}
      </div>
    </>
  );
}
