type HeaderParams = {
    text: string;
    description?: string; // optional param
}
  
function Header(props: HeaderParams) {
    return (
      <h2 style={{color: "red" , backgroundColor: "black"}}>{props.text} Head</h2>
    )
}

export default Header;