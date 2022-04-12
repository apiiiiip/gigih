import {useHistory} from "react-router-dom";

const Home = () => {
    const history = useHistory();
    
    const clickMe = (data) => {
      history.push("/about", {data: data});  
    }
    return (
      <div>
        <h2>Home</h2>
        <button onClick={() => clickMe({name: "test"})} className="ViewDetailsBtnLink">View Details</button>
      </div>
    );
  }
  
  export default Home;