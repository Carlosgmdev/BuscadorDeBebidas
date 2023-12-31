import { Row } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"
import Bebida from "./Bebida"

Row

const ListadoBebidas = () => {

  const {bebidas} = useBebidas()

  return (
    <Row className="mt-5">
      {bebidas.map(bebida =>(
        <Bebida bebida={bebida} key={bebida.idDrink} />
      ))}
    </Row>
  )
}

export default ListadoBebidas