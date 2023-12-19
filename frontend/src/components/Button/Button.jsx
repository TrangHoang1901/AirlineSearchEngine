import './Button.scss';

const Button = ({text, isLong = true, isActive = false, onClick}) => {
    return (
        <div className={`my-btn ${isActive ? 'btn-active' : ''} ${isLong ? 'long-btn' : ''}`}
        onClick={onClick}>
            {text}
        </div>
    );
}

export default Button