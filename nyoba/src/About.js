import {useHistory} from "react-router-dom";

const About = () => {
    const history = useHistory();
    const data = history.location.state.data;
    
    return (
      <div>
        <h2>About</h2>
        <p>{JSON.stringify(data)}</p>
      </div>
    );
  }
  
  export default About;