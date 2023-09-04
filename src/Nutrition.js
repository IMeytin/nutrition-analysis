import ingrImg from './ingr-img.jpg';

const Nutrition = ({label, quantity, unit, calories}) => {
    return (
        <div className="main-container">
            <div>
                <img src={ingrImg} alt="ingredients" />
            </div>
            <div className="data-container">
                <h2 className="data-title">NUTRITION FACTS</h2>
                <p>{calories} calories</p>
                <hr />
                <ul>
                    <li>{label} {quantity}{unit}</li>
                </ul>
            </div>
        </div>
    );
};

export default Nutrition;
