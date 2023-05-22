function Card(props) {
    console.log(props);
    return (
    <div className=" bg-orange-500  h-5/6 md:w-2/3 w-3/4">
       {props.creatorId}
    </div>);
  }
  
  
export default Card