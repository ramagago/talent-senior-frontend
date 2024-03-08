import FormItem from "antd/es/form/FormItem";
import { DatePicker, Input, Select, Checkbox } from "antd";
import dayjs from "dayjs";
import useFormInstance from "antd/es/form/hooks/useFormInstance";
import { useWatch } from "antd/es/form/Form";

const OPTIONS = [
  "Javascript",
  "Python",
  "Java",
  ".Net",
  "Genexus",
  "C#",
  "C++",
  "PHP",
  "AWS",
  "Firebase",
];

const FormWorkExperience = () => {
  const form = useFormInstance();

  const currentlyWorking = useWatch("currentlyWorking", form);
  const selectedSkills = useWatch("skills", form);

  const dateFormat = "DD-MM-YYYY";
  const { TextArea } = Input;
  const filteredOptions = OPTIONS.filter((o) => !selectedSkills?.includes(o));

  return (
    <>
      <h3 className="text-lg mb-6 font-semibold">Experiencia Laboral</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full ">
        <div className="xl:col-span-2">
          <label htmlFor="role">
            Cargo<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem
            name="role"
            rules={[
              {
                required: true,
                message: "Por favor debe completar este campo",
              },
            ]}
          >
            <Input id="role" />
          </FormItem>
        </div>
        <div className="xl:col-span-2">
          <label htmlFor="company">
            Empresa<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem
            name="company"
            rules={[
              {
                required: true,
                message: "Por favor debe completar este campo",
              },
            ]}
          >
            <Input id="company" />
          </FormItem>
        </div>
        <div></div>
        <div>
          <label htmlFor="workField">
            Rubro o área<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem name="workField">
            <Select
              id="workField"
              options={[
                {
                  value: "backend",
                  label: "Backend",
                },
                {
                  value: "frontend",
                  label: "Frontend",
                },
                {
                  value: "devops",
                  label: "Devops",
                },
              ]}
            />
          </FormItem>
        </div>
        <div>
          <label htmlFor="positionLevel">
            Nivel jerárquico<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem
            name="positionLevel"
            rules={[
              {
                required: true,
                message: "Por favor debe completar este campo",
              },
            ]}
          >
            <Select
              id="positionLevel"
              options={[
                {
                  value: "gerente",
                  label: "Gerente",
                },
                {
                  value: "Dueño",
                  label: "dueño",
                },
                {
                  value: "encargado",
                  label: "Encargado",
                },
              ]}
            />
          </FormItem>
        </div>
        <div>
          <label htmlFor="peopleInCharge">Personas a cargo</label>
          <FormItem name="peopleInCharge">
            <Input id="peopleInCharge" />
          </FormItem>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="task">Tareas</label>
          <FormItem name="task">
            <TextArea id="task" rows={4} />
          </FormItem>
        </div>
        <div>
          <label htmlFor="salary">Salario nominal (en pesos uruguayos)</label>
          <FormItem name="salary">
            <Input id="salary" />
          </FormItem>
        </div>
        <div className="flex items-end sm:col-span-2">
          <div>
            <label htmlFor="startWorkDate">Fecha de inicio</label>
            <FormItem
              name="startWorkDate"
              initialValue={dayjs("01-01-2024", dateFormat)}
              //pongo required pero tiene fecha por defecto. Revisar y redefinir logica.
              rules={[
                {
                  required: true,
                  message: "Por favor debe completar este campo",
                },
              ]}
            >
              <DatePicker id="startWorkDate" />
            </FormItem>
          </div>
          <div className="flex items-baseline ml-4">
            <FormItem name="currentlyWorking" valuePropName="checked">
              <Checkbox name="currentlyWorking1">
                Actualmetne trabajando
              </Checkbox>
            </FormItem>
          </div>
        </div>

        <div>
          <label htmlFor="endWorkDate">Fecha de finalización</label>
          <FormItem
            name="endWorkDate"
            initialValue={dayjs("01-01-2024", dateFormat)}
            //pongo required pero tiene fecha por defecto. Revisar y redefinir logica.
            rules={[
              {
                required: true,
                message: "Por favor debe completar este campo",
              },
            ]}
          >
            <DatePicker disabled={currentlyWorking} id="endWorkDate" />
          </FormItem>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="endWorkDate">
            Conociemientos
            <span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem
            name="skills"
            rules={[
              {
                required: true,
                message: "Por favor debe completar este campo",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Máximo 10"
              style={{
                width: "100%",
              }}
              maxCount={10}
              options={filteredOptions.map((item) => ({
                value: item,
                label: item,
              }))}
            />
          </FormItem>
        </div>
      </div>
    </>
  );
};

export default FormWorkExperience;
