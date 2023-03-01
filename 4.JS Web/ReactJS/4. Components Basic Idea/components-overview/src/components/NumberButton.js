const Button = probs => {

    probs.setValue(value => value += probs.value);

    return (
        <input type="button" name=""
            value={probs.value} className={probs.className ? probs.className : "global"} />
    );
};

export default Button;