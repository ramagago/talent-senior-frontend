import { Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";

const FormReferences = () => {
  return (
    <>
      <h3 className="text-lg mb-6 font-semibold">Referencias</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center w-full">
        <div className="md:grid md:grid-cols-subgrid md:col-span-2">
          <div>
            <label htmlFor="level">
              Idioma<span className="text-red-400 text-xs"> *</span>
            </label>
            <FormItem name="languageLevel">
              <Select
                id="languageLevel"
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
                rules={[
                  {
                    required: true,
                    message: "Por favor debe completar este campo",
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
                message: "Por favor debe completar este campo",
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
                message: "Por favor debe completar este campo",
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
    </>
  );
};

export default FormReferences;
