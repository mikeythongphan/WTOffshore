export const NoWrapText = props => {

  const {text} = props;

  return <div style={{ whiteSpace: 'nowrap' }}>
    {text}
  </div>
  

}