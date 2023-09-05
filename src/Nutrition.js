import ingrImg from './ingr-img.jpg';

const Nutrition = ({nutrition}) => {
    return (
        <div className="main-container">
            <div>
                <img src={ingrImg} alt="ingredients" />
            </div>
            <div className="data-container">
                <h2 className="data-title">NUTRITION FACTS</h2>
                <p>{nutrition.calories} calories</p>
                <hr />
                {Object.values (nutrition.totalNutrients).slice(8)
                .map((element, index) => {
                    const {label, quantity, unit} = element;
                    return(
                        <div key={index} >
                            <ul>
                                <li>{label}: {quantity.toFixed(2)}{unit}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Nutrition;
