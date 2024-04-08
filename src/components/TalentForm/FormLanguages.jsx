import FormItem from "antd/es/form/FormItem";
import { Collapse, Input, Select, Slider } from "antd";
import { useWatch } from "antd/es/form/Form";
import { useState } from "react";
import useFormInstance from "antd/es/form/hooks/useFormInstance";
import { FaTrash } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const FormLanguages = () => {
  const languageLevelSlider = {
    0: <div className="text-2xs">Básico</div>,
    33: <div className="text-2xs">Intermedio</div>,
    66: <div className="text-2xs">Avanzado</div>,
    100: <div className="text-2xs">Nativo</div>,
  };
  const form = useFormInstance();
  const { Panel } = Collapse;
  const languages = useWatch("languages", form) || [];

  const [showForm, setShowForm] = useState(
    !!form.getFieldValue("languageName") ||
      !form.getFieldValue("languages")?.length
  );

  const addNewLanguage = async () => {
    try {
      await form.validateFields();
      const {
        languageName,
        spokenLevel,
        readLevel,
        writtenLevel,
        languages = [],
        ...rest
      } = form.getFieldsValue(true);

      const newLanguage = {
        spokenLevel: spokenLevel || 0,
        languageName,
        readLevel: readLevel || 0,
        writtenLevel: writtenLevel || 0,
      };

      form.setFieldsValue({
        languages: [...languages, newLanguage],
        languageName: undefined,
        spokenLevel: 0,
        readLevel: 0,
        writtenLevel: 0,
        ...rest,
      });
      setShowForm(false);
    } catch {
      console.log("error en el add");
    }
  };

  const deleteLanguage = (languageIndex) => {
    form.setFieldValue("languages", languages.toSpliced(languageIndex, 1));
    if (languages.length < 2) {
      setShowForm(true);
    }
  };

  return (
    <>
      <h3 className="text-lg mb-6 font-semibold">Idiomas</h3>
      {!!languages.length && (
        <Collapse>
          {languages.map((language, index) => (
            <Panel
              header={language.languageName}
              key={index}
              extra={
                <button
                  className="outline-none text-lg text-gray-600 hover:text-gray-300 bg-transparent"
                  onClick={() => deleteLanguage(index)}
                >
                  <FaTrash />
                </button>
              }
            >
              <p>Nivel hablado: {language.spokenLevel}</p>
              <p>Nivel escrito: {language.writtenLevel}</p>
              <p>Nivel lectura: {language.readLevel}</p>
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
            <div className="md:col-span-1">
              <label htmlFor="languageName">Idioma</label>
              <FormItem
                name="languageName"
                rules={[
                  {
                    required: true,
                    message: "Este campo es requerido",
                  },
                ]}
              >
                <Select
                  id="languageName"
                  options={[
                    {
                      value: "english",
                      label: "Inglés",
                    },
                    {
                      value: "portuges",
                      label: "Portugés",
                    },
                    {
                      value: "italian",
                      label: "Italiano",
                    },
                    {
                      value: "german",
                      label: "Aleman",
                    },
                  ]}
                />
              </FormItem>
            </div>
            <div className="col-span-2 xsm:mx-5 sm:mx-10">
              <label htmlFor="spokenLevel">
                Nivel hablado<span className="text-red-400 text-xs"> *</span>
              </label>
              <FormItem name="spokenLevel">
                <Slider
                  marks={languageLevelSlider}
                  step={null}
                  initialValue={0}
                  name="spokenLevel"
                />
              </FormItem>
            </div>
            <div className="col-span-2 xsm:mx-5 sm:mx-10 ">
              <label htmlFor="readLevel">
                Nivel lectura<span className="text-red-400 text-xs"> *</span>
              </label>
              <FormItem name="readLevel">
                <Slider
                  marks={languageLevelSlider}
                  step={null}
                  initialValue={0}
                  name="readLevel"
                />
              </FormItem>
            </div>
            <div className="col-span-2 xsm:mx-5 sm:mx-10">
              <label htmlFor="writtenLevel">
                Nivel escrito<span className="text-red-400 text-xs"> *</span>
              </label>
              <FormItem name="writtenLevel">
                <Slider
                  marks={languageLevelSlider}
                  step={null}
                  initialValue={0}
                  name="writtenLevel"
                />
              </FormItem>
            </div>
          </div>
          <button
            className="transition-all border border-white bg-celeste01 text-white rounded-md px-5 py-2 hover:border-celeste01 hover:bg-white hover:text-celeste01"
            onClick={addNewLanguage}
          >
            Agregar Idioma
          </button>
        </>
      )}
      <div className="hidden">
        <FormItem name="languages">
          {/* Evitar warning del buscador */}
          <Input />
        </FormItem>
      </div>
    </>
  );
};

export default FormLanguages;
