const character = ({ character }) => {
  return (
    <section className="text-center p-5 ">
      <h2>{character.name}</h2>
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
    </section>
  );
};
export default character;
