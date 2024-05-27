import FormItem from "antd/es/form/FormItem";
import { Input, Select, DatePicker, Collapse } from "antd";
import dayjs from "dayjs";
import { useWatch } from "antd/es/form/Form";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import useFormInstance from "antd/es/form/hooks/useFormInstance";

const FormStudies = () => {
  const dateFormat = "DD-MM-YYYY";

  const form = useFormInstance();
  const { Panel } = Collapse;
  const studies = useWatch("studies", form) || [];
  const [showForm, setShowForm] = useState(
    !!form.getFieldValue("levelOfStudy") ||
      !!form.getFieldValue("institute") ||
      !!form.getFieldValue("fieldOfStudy") ||
      !!form.getFieldValue(" startStudyDate") ||
      !form.getFieldValue("studies")?.length
  );
  // const currentlyStudying = useWatch("currentlyStudying", form);

  const addNewStudy = async () => {
    try {
      await form.validateFields();
      const {
        levelOfStudy,
        title,
        institute,
        fieldOfStudy,
        startStudyDate,
        currentlyStudying,
        endStudyDate,
        countyStudy,
        cityStudy,
        studies = [],
        ...rest
      } = form.getFieldsValue(true);
      form.setFieldsValue({
        studies: [
          ...studies,
          {
            levelOfStudy,
            title,
            institute,
            fieldOfStudy,
            startStudyDate,
            currentlyStudying,
            endStudyDate,
            countyStudy,
            cityStudy,
          },
        ],
        levelOfStudy: undefined,
        title: undefined,
        institute: undefined,
        fieldOfStudy: undefined,
        startStudyDate: undefined,
        currentlyStudying: undefined,
        endStudyDate: undefined,
        countyStudy: undefined,
        cityStudy: undefined,
        ...rest,
      });
      setShowForm(false);
    } catch {
      console.log("error en el add");
    }
  };

  const deleteStudy = (studyIndex) => {
    form.setFieldValue("studies", studies.toSpliced(studyIndex, 1));
    if (studies.length < 2) {
      setShowForm(true);
    }
  };
  return (
    <>
      <h3 className="text-lg mb-6 font-semibold">Estudios Avanzados</h3>
      {!!studies.length && (
        <Collapse>
          {studies.map((study, index) => (
            <Panel
              header={study.title}
              key={index}
              extra={
                <button
                  className="outline-none text-lg text-gray-600 hover:text-gray-300 bg-transparent"
                  onClick={() => deleteStudy(index)}
                >
                  <FaTrash />
                </button>
              }
            >
              <p>Nivel: {study.levelOfStudy}</p>
              <p>Institución: {study.institute}</p>
              <p>Área de estudio: {study.fieldOfStudy}</p>
              <p>
                Fecha de inicio: {study.startStudyDate.format("DD-MM-YYYY")}
              </p>
              <p>Situación actual: {study.currentlyStudying}</p>
              <p>
                Fecha de egreso:
                {study.endStudyDate.format("DD-MM-YYYY")}
              </p>
              {study.currentlyWorking && (
                <p>Departamento: agregar departamento</p>
              )}
              {study.endWorkDate && <p>Ciudad: agregar cidudad</p>}
              <p>Conocimientos: {study.skills}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center w-full">
            <div>
              <label htmlFor="levelOfStudy">
                Nivel<span className="text-red-400 text-xs"> *</span>
              </label>
              <FormItem
                name="levelOfStudy"
                rules={[
                  {
                    required: true,
                    message: "Este campo es requerido",
                  },
                ]}
              >
                <Select
                  id="levelOfStudy"
                  options={[
                    {
                      value: "secundario",
                      label: "Secundario",
                    },
                    {
                      value: "gradoTerciario",
                      label: "Terciario",
                    },
                    {
                      value: "posgrado",
                      label: "Posgrado",
                    },
                  ]}
                />
              </FormItem>
            </div>
            <div>
              <label htmlFor="title">Título</label>
              <FormItem name="title">
                <Input id="title" />
              </FormItem>
            </div>
            <div>
              <label htmlFor="studySitutation">Situación</label>
              <FormItem name="studySitutation">
                <Select
                  id="studySitutation"
                  options={[
                    {
                      value: "completed",
                      label: "Completado",
                    },
                    {
                      value: "inCourse",
                      label: "En curso",
                    },
                    {
                      value: "incomplete",
                      label: "Incompleto",
                    },
                  ]}
                />
              </FormItem>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="institute">
                Institución<span className="text-red-400 text-xs"> *</span>
              </label>
              <FormItem
                name="institute"
                rules={[
                  {
                    required: true,
                    message: "Este campo es requerido",
                  },
                ]}
              >
                <Input id="institute" />
              </FormItem>
            </div>
            <div className="md:col-span-1">
              <label htmlFor="fieldOfStudy">
                Área de estudio/Bachillerato
                <span className="text-red-400 text-xs"> *</span>
              </label>
              <FormItem
                name="fieldOfStudy"
                rules={[
                  {
                    required: true,
                    message: "Este campo es requerido",
                  },
                ]}
              >
                <Input id="fieldOfStudy" />
              </FormItem>
            </div>
            <div>
              <label htmlFor="startStudyDate">
                Fecha de Incio<span className="text-red-400 text-xs"> *</span>
              </label>
              <FormItem
                name="startStudyDate"
                initialValue={dayjs("01-01-2024", dateFormat)}
                rules={[
                  {
                    required: true,
                    message: "Este campo es requerido",
                  },
                ]}
              >
                <DatePicker id="startStudyDate" />
              </FormItem>
            </div>
            <div>
              <label htmlFor="endStudyDate">
                Fecha de egreso<span className="text-red-400 text-xs"> *</span>
              </label>
              <FormItem
                name="endStudyDate"
                initialValue={dayjs("01-01-2024", dateFormat)}
                rules={[
                  {
                    required: true,
                    message: "Este campo es requerido",
                  },
                ]}
              >
                <DatePicker disabled={""} id="endStudyDate" />
              </FormItem>
            </div>
          </div>
          <button
            className="transition-all border border-white bg-celeste01 text-white rounded-md px-5 py-2 hover:border-celeste01 hover:bg-white hover:text-celeste01"
            onClick={addNewStudy}
          >
            Agregar Estudio
          </button>
        </>
      )}
      <div className="hidden">
        <FormItem name="studies">
          <Input />
        </FormItem>
      </div>
    </>
  );
};

export default FormStudies;
