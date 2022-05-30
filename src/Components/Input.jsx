export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className="inputContainer">
      
      <input data-testid="InputTag" variant={variant} onChange={onChange}  type={type} className={`input`}  />
      <img width={20} height={20} src={rightLogo} alt="" onClick={rightLogoOnClick}/>
    </div>
  );
};
