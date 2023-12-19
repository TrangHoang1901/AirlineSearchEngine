import { useEffect, useState } from 'react';
import './RadioBtns.scss';

const RadioBtns = ({field, initVal, onChange}) => {
    const [opt, setOpt] = useState('');

    useEffect(() => {
        setOpt(initVal);
    }, [initVal]);

    return (
        <div className='radio-div'>
            <span>{field}</span>
            <form>
                <label><input type='radio' value={'y'} checked={opt === 'y'}
                onChange={() => {
                    setOpt('y');
                    onChange('y');
                }} /> 
                    Yes
                </label>
                <label><input type='radio' value={'n'} checked={opt === 'n'}
                onChange={() => {
                    setOpt('n');
                    onChange('n');
                }} />
                    No
                </label>
            </form>
        </div>
    );
}

export default RadioBtns;