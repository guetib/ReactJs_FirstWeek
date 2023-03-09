const Rect = ({ bgcolor }) => {

    return (
        <div style={{
            width: "100px",
            height: "200px",
            background: bgcolor
        }}
        >
            {bgcolor}
        </div>
    )
}
export default Rect