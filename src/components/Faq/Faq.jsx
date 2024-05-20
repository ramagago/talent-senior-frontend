import { Collapse } from "antd";


const items = [
    {
      key: '1',
      label: 'Pregunta 1',
      children: <p>Respuesta 1</p>,
    },
    {
      key: '2',
      label: 'Pregunta 2',
      children: <p>Respuesta 2</p>,
    },
    {
      key: '3',
      label: 'Pregunta 3',
      children: <p>Respuesta 3</p>,
    },    {
        key: '4',
        label: 'Pregunta 4',
        children: <p>Respuesta 4</p>,
      },
    ];

const Faq = () => {
  return (
    <div className="w-screen bg-white flex flex-col items-center relative p-6 max-w-3xl" >
    <h2 className="text-2xl xsm:text-3xl lg:text5xl mx-4 font-bold text-azul01 mb-6">Preguntas Frecuentes</h2>
    <Collapse accordion items={items} className="min-w-96"/>
</div>
  )
}

export default Faq