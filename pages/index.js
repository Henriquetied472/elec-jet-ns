import '../defaltStyles.css'

//Start: Styles

const contador_text = {

    fontSize: "16pt"

}

const home_text = {

    fontSize: "29pt",
    fontFamily: ""

}

//End: Styles

function Home() {

    return <div>
            <h1 style={home_text}>Home</h1>
            <Contador />
    </div>

}

function  Contador() {

    return <div>
        <p id={"contedor-text"}></p>
        <input style={contador_text} type={"button"} value={"Adicionar"}></input>
    </div>

}

export default Home