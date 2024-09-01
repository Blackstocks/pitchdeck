import ReactDOM from "react-dom/client"
import Provider from "./Provider"
import Router from "./Router"
import Container from "./Container"
import "./styles/styles.css"
import "./styles/Canva-Clone/css/d861da3dda96ff07.ltr.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <Container>
      <Router />
    </Container>
  </Provider>
)
