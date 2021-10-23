const Display = ({value, result}) => {
    return(
        <div className="e-display">            
            <div className="e-value">{value}</div>
            <div className="e-result">{result}</div>
        </div>
    );
};
export default Display;