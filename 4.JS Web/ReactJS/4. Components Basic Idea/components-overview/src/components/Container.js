import { useState } from 'react';

import CurrentResult from './CurrentResult';
import Button from './NumberButton';
import TotalResult from './TotalResult';

const Contauiner = (probs) => {

    const [value, setValue] = useState(0);

    return (
        <div className="container">
            <div className="header">Calculator</div>
            <CurrentResult />
            <TotalResult value={value} setValue={setValue} />
            <div className="first-row">
                <Button value="&radic;" setValue={setValue} />
                <Button value="(" setValue={setValue} />
                <Button value=")" setValue={setValue} />
                <Button value="%" setValue={setValue} />
            </div>
            <div className="second-row">
                <Button value="7" setValue={setValue} />
                <Button value="8" setValue={setValue} />
                <Button value="9" setValue={setValue} />
                <Button value="/" setValue={setValue} />
            </div>
            <div className="third-row">
                <Button value="4" setValue={setValue} />
                <Button value="5" setValue={setValue} />
                <Button value="6" setValue={setValue} />
                <Button value="X" setValue={setValue} />
            </div>
            <div className="fourth-row">
                <Button value="1" setValue={setValue} />
                <Button value="2" setValue={setValue} />
                <Button value="3" setValue={setValue} />
                <Button value="-" setValue={setValue} />
            </div>
            <div className="conflict">
                <div className="left">
                    <Button value="0" setValue={setValue} />
                    <Button value="." setValue={setValue} />
                    <Button value="Del" setValue={setValue} />
                    <Button value="=" setValue={setValue} />
                </div>
                <div className="right">
                    <Button value="+" className="global grey plus" setValue={setValue} />
                </div>
            </div>
        </div>
    );
};

export default Contauiner;