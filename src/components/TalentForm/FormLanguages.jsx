import FormItem from "antd/es/form/FormItem";
import { Select, Slider } from "antd";

const FormLanguages = () => {
  // hidden xsm:block
  const languageLevelSlider = {
    0: <div className="text-2xs">Básico</div>,
    33: <div className="text-2xs">Intermedio</div>,
    66: <div className="text-2xs">Avanzado</div>,
    100: <div className="text-2xs">Nativo</div>,
  };

  return (
    <>
      <h3 className="text-lg mb-6 font-semibold">Idionas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center w-full">
        <div className="md:col-span-1">
          <label htmlFor="level">
            Idioma<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem name="languageLevel">
            <Select
              id="languageLevel"
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
              rules={[
                {
                  required: true,
                  message: "Por favor debe completar este campo",
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
    </>
  );
};

export default FormLanguages;
