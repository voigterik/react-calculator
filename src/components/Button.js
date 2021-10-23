const Button = ({symbol, onClick, className}) => {
    return(
        <button onClick={() => onClick(symbol)} className={className}>{symbol}</button>
    );
};
export default Button;