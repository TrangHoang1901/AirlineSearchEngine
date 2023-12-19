import './TextInput.scss';

const TextInput= ({field, initVal, placeholder, onChange}) => {
    return (
        <div className='text-input'>
            <span>{field}</span>
            <input className="my-input" placeholder={placeholder}
            defaultValue={initVal}
            onChange={(evt) => onChange(evt.target.value)} />
        </div>
    );
}

export default TextInput;