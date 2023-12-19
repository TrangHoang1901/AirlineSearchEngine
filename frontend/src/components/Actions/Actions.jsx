import Button from '../Button/Button';
import './Actions.scss';

const Actions = ({showClear = true, onQuery, onClear, onCancel}) => {
    return (
        <div className='actions'>
            <Button text={"Query"} isLong={false} onClick={onQuery}/>
            {showClear && <Button text={"Clear"} isLong={false} onClick={onClear} />}
            <Button text={"Cancel"} isLong={false} onClick={onCancel} />
        </div>
    );
}

export default Actions;