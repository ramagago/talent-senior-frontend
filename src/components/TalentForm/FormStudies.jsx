import FormItem from "antd/es/form/FormItem";
import { Input, Select, DatePicker } from "antd";
import CityPicker from "./CityPicker";
import dayjs from "dayjs";

const FormStudies = () => {
  const dateFormat = "DD-MM-YYYY";
  return (
    <>
      <h3 className="text-lg mb-6 font-semibold">Estudios Avanzados</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center w-full">
        <div className="md:col-span-1">
          <label htmlFor="level">
            Nivel<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem name="level">
            <Select
              id="level"
              options={[
                {
                  value: "gradoTerciario",
                  label: "Grado Terciario",
                },
                {
                  value: "postGrado",
                  label: "Post Grado",
                },
                {
                  value: "master",
                  label: "Master Grado",
                },
              ]}
              rules={[
                {
                  required: true,
                  message: "Este campo es requerido",
                },
              ]}
            />
          </FormItem>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="title">Título</label>
          <FormItem name="title">
            <Input id="title" />
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
            Área de estudio<span className="text-red-400 text-xs"> *</span>
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
            //pongo required pero tiene fecha por defecto. Revisar y redefinir logica.
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
          <label htmlFor="situation">
            Situación<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem
            name="situation"
            rules={[
              {
                required: true,
                message: "Este campo es requerido",
              },
            ]}
          >
            <Select
              id="situation"
              options={[
                {
                  value: "completo",
                  label: "Completo",
                },
                {
                  value: "enCurso",
                  label: "En curso",
                },
              ]}
            />
          </FormItem>
        </div>
        <div>
          <label htmlFor="endStudyDate">
            Fecha de egreso<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem
            name="endStudyDate"
            initialValue={dayjs("01-01-2024", dateFormat)}
            //pongo required pero tiene fecha por defecto. Revisar y redefinir logica.
            rules={[
              {
                required: true,
                message: "Este campo es requerido",
              },
            ]}
          >
            <DatePicker id="endStudyDate" />
          </FormItem>
        </div>
        <CityPicker />
      </div>
    </>
  );
};

export default FormStudies;
