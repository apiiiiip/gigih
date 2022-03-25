
function Gif(props) {
    return(
        <div>
            <img src={props.url}/>
            <p>{props.title}</p>
        </div>
    );
}

export default Gif;
