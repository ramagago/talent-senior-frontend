import { Form, Input, Button, Checkbox, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import PropTypes from "prop-types";
import { createCompany } from "../../utils/fetchdata";

const CompanyForm = ({ setIsCompanyModalOpen }) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      await createCompany(values);

      setIsCompanyModalOpen(false);
      message.success("Se ha registrado con éxito");
    } catch (error) {
      message.error("Ocurrió un error al intentar crear la empresa");
    }
  };

  return (
    <>
      <h3 className="text-lg mb-6 font-semibold">Empresa</h3>
      <Form
        form={form}
        name="registerCompany"
        scrollToFirstError
        onFinish={onFinish}
        preserve
      >
        <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-2 items-center w-full">
          <div className="col-span-1 lg:col-span-2">
            <label htmlFor="name">
              Nombre de la empresa
              <span className="text-red-400 text-xs"> *</span>
            </label>
            <FormItem
              name="companyName"
              rules={[
                {
                  required: true,
                  message: "Este campo es requerido",
                },
              ]}
            >
              <Input id="companyName" />
            </FormItem>
          </div>
          <div>
            <label htmlFor="name">Nombre del contacto</label>
            <FormItem name="name">
              <Input id="name" />
            </FormItem>
          </div>
          <div>
            <label htmlFor="surname">Apellido del contacto</label>
            <FormItem name="surname">
              <Input id="surname" />
            </FormItem>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="companyEmail">Email de negocio</label>
            <FormItem name="companyEmail"               rules={[
                {
                  type: "email",
                  message: "Este campo debe ser un email válido",
                },
              ]}>
              <Input id="companyEmail" />
            </FormItem>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="companyPhone">
              Celular / Whatsapp<span className="text-red-400 text-xs"> *</span>
            </label>
            <FormItem
              name="companyPhone"
              rules={[
                {
                  required: true,
                  message: "Este campo es requerido",
                },
              ]}
            >
              <Input id="companyPhone" />
            </FormItem>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="companyWebsite">Website</label>
            <FormItem name="companyWebsite">
              <Input id="companyWebsite" />
            </FormItem>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="howCanWeHelp">
              ¿Cómo podemos ayudar?
              <span className="text-red-400 text-xs"> *</span>
            </label>
            <FormItem
              name="howCanWeHelp"
              rules={[
                {
                  required: true,
                  message: "Este campo es requerido",
                },
              ]}
            >
              <TextArea id="howCanWeHelp" rows={4} />
            </FormItem>
          </div>
          <div className="lg:col-span-2">
            <FormItem
              name="currentlyWorking"
              valuePropName="checked"
              className="text-gray-400"
            >
              <Checkbox name="termsAndConditions">
                <a rel="stylesheet" href="" className="text-gray-400" />
                Acepto la política de privacidad y los términos de servicio.
              </Checkbox>
            </FormItem>
          </div>
          <div className="grid grid-cols-subgrid col-span-2">
            <Button
              type="primary"
              htmlType="submit"
              className="ml-1 col-start-2"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

CompanyForm.propTypes = {
  setIsCompanyModalOpen: PropTypes.func.isRequired,
};

export default CompanyForm;
