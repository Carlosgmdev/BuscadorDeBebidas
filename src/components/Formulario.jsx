import { Button, Form, Row, Col, Alert } from "react-bootstrap"
import useCategorias from "../hooks/useCategorias"
import useBebidas from "../hooks/useBebidas"
import { useState } from "react"

const Formulario = () => {

    const {categorias} = useCategorias()
    const [alerta, setAlerta] = useState('')
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const {bebidas, consultarBebidas} = useBebidas()

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarBebidas(busqueda)
        console.log(bebidas);
    }

    return (
        <Form onSubmit={handleSubmit}>
            {alerta && <Alert variant='danger'>{alerta}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
                        <Form.Control 
                            type="text" 
                            id="nombre" 
                            placeholder="Ej: Tequila, Vodka..." 
                            name="nombre"
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        ></Form.Control>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="categoria">Categoria</Form.Label>
                        <Form.Select 
                            id="categoria" 
                            name="categoria"
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        >
                            <option value="">Selecciona Categoria</option>
                            {categorias.map(categoria => (
                                <option 
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-end">
                <Col md={3}>
                    <Button
                        variant='danger'
                        className="text-uppercase w-100"
                        type="submit"
                    >
                        Buscar Bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario