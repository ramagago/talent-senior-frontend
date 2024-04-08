import { Input, Select, Collapse } from "antd";
import { useWatch } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import useFormInstance from "antd/es/form/hooks/useFormInstance";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const FormReferences = () => {
  const form = useFormInstance();
  const { Panel } = Collapse;
  const references = useWatch("references", form) || [];
<<<<<<< HEAD
  const [showForm, setShowForm] = useState(
    !!form.getFieldValue("referenceType") ||
      !!form.getFieldValue("referenceName") ||
      !!form.getFieldValue("referenceSurname") ||
      !form.getFieldValue("references")?.length
  );
=======
  const [showForm, setShowForm] = useState(true);
>>>>>>> main

  const addNewReference = async () => {
    try {
      await form.validateFields();
      const {
        referenceType,
        referenceName,
        referenceSurname,
        referencePhone,
        referenceCompany,
        referenceRole,
        references = [],
        ...rest
      } = form.getFieldsValue(true);
      form.setFieldsValue({
        references: [
          ...references,
          {
            referenceType,
            referenceName,
            referenceSurname,
            referencePhone,
            referenceCompany,
            referenceRole,
          },
        ],
        referenceType: undefined,
        referenceName: undefined,
        referenceSurname: undefined,
        referencePhone: undefined,
        referenceCompany: undefined,
        referenceRole: undefined,
        ...rest,
      });
      setShowForm(false);
    } catch {
      console.log("error en el add");
    }
  };

  const deleteReference = (referenceIndex) => {
    form.setFieldValue("references", references.toSpliced(referenceIndex, 1));
    if (references.length < 2) {
      setShowForm(true);
    }
  };

  return (
    <>
      <h3 className="text-lg mb-6 font-semibold">Referencias</h3>
      {!!references.length && (
        <Collapse accordion>
          {references.map((reference, index) => (
            <Panel
              header={
                reference.referenceName + " " + reference.referenceSurname
              }
              key={index}
              extra={
                <button
                  className="outline-none text-lg text-gray-600 hover:text-gray-300 bg-transparent"
                  onClick={() => deleteReference(index)}
                >
                  <FaTrash />
                </button>
              }
            >
              <p>Tipo de referencia: {reference.referenceType}</p>
              <p>Numero de teléfono: {reference.referencePhone}</p>
              <p>Empresa: {reference.referenceCompany}</p>
              <p>Cargo: {reference.referenceRole}</p>
            </Panel>
          ))}
        </Collapse>
      )}
      {!showForm && (
        <div className="flex justify-center m-6">
          <button
            className="text-4xl text-celeste01 bg-transparent hover:text-azul01 cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            <FaCirclePlus />
          </button>
        </div>
      )}
      {showForm && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center w-full">
            <div className="md:grid md:grid-cols-subgrid md:col-span-2">
              <div>
                <label htmlFor="referenceType">
                  Tipo de referencia
                  <span className="text-red-400 text-xs"> *</span>
                </label>
                <FormItem
                  name="referenceType"
                  rules={[
                    {
                      required: true,
                      message: "Este campo es requerido",
                    },
                  ]}
                >
                  <Select
                    id="referenceType"
                    options={[
                      {
                        value: "personal",
                        label: "Personal",
                      },
                      {
                        value: "laboral",
                        label: "laboral",
                      },
                    ]}
                  />
                </FormItem>
              </div>
            </div>
            <div>
              <label htmlFor="referenceName">
                Nombre<span className="text-red-400 text-xs"> *</span>
              </label>
              <FormItem
                name="referenceName"
                rules={[
                  {
                    required: true,
                    message: "Este campo es requerido",
                  },
                ]}
              >
                <Input id="referenceName" />
              </FormItem>
            </div>
            <div>
              <label htmlFor="referenceSurname">
                Apellido<span className="text-red-400 text-xs"> *</span>
              </label>
              <FormItem
                name="referenceSurname"
                rules={[
                  {
                    required: true,
                    message: "Este campo es requerido",
                  },
                ]}
              >
                <Input id="referenceSurname" />
              </FormItem>
            </div>
            <div className="xl:col-span-2">
              <label htmlFor="referenceCompany">Empresa</label>
              <FormItem name="referenceCompany">
                <Input id="referenceCompany" />
              </FormItem>
            </div>
            <div>
              <label htmlFor="referenceRole">Cargo</label>
              <FormItem name="referenceRole">
                <Input id="referenceRole" />
              </FormItem>
            </div>
            <div>
              <label htmlFor="referencePhone">
                Teléfono<span className="text-red-400 text-xs"> *</span>
              </label>
              <FormItem name="referencePhone">
                <Input id="referencePhone" />
              </FormItem>
            </div>
          </div>
          <button
            className="transition-all border border-white bg-celeste01 text-white rounded-md px-5 py-2 hover:border-celeste01 hover:bg-white hover:text-celeste01"
            onClick={addNewReference}
          >
<<<<<<< HEAD
            Agregar Referencia
=======
            Agregar Trabajo
>>>>>>> main
          </button>
        </>
      )}{" "}
      <div className="hidden">
        <FormItem name="references">
          {/* Evitar warning del buscador */}
          <Input />
        </FormItem>
      </div>
    </>
  );
};

export default FormReferences;
