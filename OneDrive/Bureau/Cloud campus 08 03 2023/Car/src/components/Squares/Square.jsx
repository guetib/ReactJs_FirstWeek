
const Square = ({ color }) => {

    return (
        < div className="div"
            style={{
                width: "100px",
                height: "100px",
                // background: "bleu"
                background: color
            }}
        >
            Square
        </div >
    );
};

export default Square;

