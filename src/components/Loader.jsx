import HashLoader from "react-spinners/HashLoader";
function Loader() {
  return (
    <div className="z-50 h-screen bg-white flex items-center justify-center absolute w-screen">
          <HashLoader color="#36d7b7" />
    </div>
  
  )
}

export default Loader