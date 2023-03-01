const TotalResult = (props) => {
    console.log(props);

    return (
        <div onClick={props.setValue(value => value + 1)} type="text" className="total-result">{props.value}</div>
    );
};

export default TotalResult;