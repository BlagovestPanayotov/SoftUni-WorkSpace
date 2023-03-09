export function firstName(value) {
    if (value.length < 3) {
        return (
            <p className="form-error">
                First name should be at least 3 characters long!
            </p>
        );
    } else {
        return null;
    }
}

export function lastName(value) {
    if (value.length < 3) {
        return (
            <p className="form-error">
                Last name should be at least 3 characters long!
            </p>
        );
    } else {
        return null;
    }
}

export function email(value) {
    if (!value?.match(/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/)) {
        return (
            <p className="form-error">Email is not valid!</p>
        );
    } else {
        return null;
    }
}

export function phoneNumber(value) {
    if (!value?.match(/^0[1-9]{1}[0-9]{8}$/)) {
        return (
            <p className="form-error">Phone number is not valid!</p>
        );
    } else {
        return null;
    }
}

export function imageUrl(value) {
    if (!value?.match(/^https?:\/\/.+/)) {
        return (
            <p className="form-error">ImageUrl is not valid!</p>
        );
    } else {
        return null;
    }
}

export function country(value) {
    if (value.length < 2) {
        return (
            <p className="form-error">
                Country should be at least 2 characters long!
            </p>
        );
    } else {
        return null;
    }
}

export function city(value) {
    if (value.length < 3) {
        return (
            <p className="form-error">
                City should be at least 3 characters long!
            </p>
        );
    } else {
        return null;
    }
}

export function street(value) {
    if (value < 3) {
        return (
            <p className="form-error">
                Street should be at least 3 characters long!
            </p>
        );
    } else {
        return null;
    }
}

export function streetNumber(value) {
    const currentValue = Number(value);
    if (Number.isNaN(currentValue) || currentValue < 1 || currentValue % 1 > 0) {
        return (
            <p className="form-error">
                Street number should be a positive number!
            </p>
        );
    } else {
        return null;
    }
}
