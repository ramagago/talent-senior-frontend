import FormItem from "antd/es/form/FormItem";
import { Input } from "antd";

const FormAbout = () => {
  const { TextArea } = Input;
  return (
    <div>
      <h3 className="text-lg mb-6 font-semibold">
        Resumen<span className="text-red-400 text-xs"> *</span>
      </h3>
      <label htmlFor="about"></label>
      <FormItem
        name="about"
        rules={[{ required: true, message: "Este campo es requerido" }]}
      >
        <TextArea id="about" rows={8} />
      </FormItem>
    </div>
  );
};

export default FormAbout;
