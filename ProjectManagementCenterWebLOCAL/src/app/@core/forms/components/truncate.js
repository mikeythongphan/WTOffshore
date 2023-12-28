export const Truncate = props => {

  const {text} = props;

  return <div style={{ overflow: "hidden", textOverflow: "ellipsis", width: 100, height: 20, whiteSpace: 'nowrap' }}>
    {text}
  </div>
  

}