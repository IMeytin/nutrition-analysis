import ingrImg from './ingr-img.jpg';

const Nutrition = () => {
  return (
    <div className="main-container">
      <div>
        <img src={ingrImg} alt="ingredients" />
      </div>
      <div className="data-container">
        <h2 className="data-title">NUTRITION FACTS</h2>
        <p>calories</p>
        <hr />
        {/* {
              nutrition && Object.values(nutrition.totalDaily)
              .map ((label) => (
                <p>{label}</p>
              ))
            } */}
      </div>
    </div>
  );
};

export default Nutrition
