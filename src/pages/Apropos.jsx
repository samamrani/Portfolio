import { useSelector } from "react-redux";

function Apropos(){

const info = useSelector((state)=>(state.sam.apropos))

    return (
        <section className="container info" id='apropos'>  
          <h1>À propos de ce Portfolio</h1>
            <p>{info}</p>
        </section>
    );
};

export default Apropos;