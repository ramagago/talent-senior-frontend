import { useState } from "react";
import FormPersonalData from "./FormPersonalData";
import FormAbout from "./FormAbout";
import FormStudies from "./FormStudies";
import FormWorkExperience from "./FormWorkExperience";
import { Form, Button, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import FormLanguages from "./FormLanguages";
import FormReferences from "./FormReferences";
import PropTypes from "prop-types";
import { formSerializer } from "../../utils/formSerializer";
import { createPerson } from "../../utils/fetchdata";

const TalentForm = ({ setIsTalentModalOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);
  // const [formData, setFormData] = useState(null);

  const onFinish = async () => {
    
      form.validateFields().then(()=>{
        const values = form.getFieldsValue(true);
        console.log("form values", values)
        const personData = formSerializer(values)
        console.log("Form submit ", personData);
        createPerson(personData).then(()=>{ 
          setIsTalentModalOpen(false);
          message.success("Se ha registrado con éxito");})
          .catch((error)=>{
            message.error("Ocurrió un error al intentar crear la empresa")});
    }).catch((error)=>{
      message.error("Debe completar todos los campos obligatorios")
    }) };

  const [form] = Form.useForm();

  const onNext = async () => {
    try {
      await form.validateFields();
      setCurrentStep(currentStep + 1);
      const values = form.getFieldsValue(true);
      console.log("form values", values)
    } catch (err) {
      return;
    }
    // setFormData((prevFormData) => ({ ...prevFormData, ...values }));
  };

  const onPrevious = () => setCurrentStep(currentStep - 1);

  return (
    <>
      <Form
        form={form}
        name="registerTalent"
        scrollToFirstError
        //onFinish={onFinish}
      >
        {currentStep === 1 && <FormPersonalData />}
        {currentStep === 2 && <FormAbout />}
        {currentStep === 3 && <FormStudies />}
        {currentStep === 4 && <FormWorkExperience />}
        {currentStep === 5 && <FormLanguages />}
        {currentStep === 6 && <FormReferences />}
        <FormItem className="md:col-span-2 xl:col-span-4 flex justify-end">
          {currentStep > 1 && (
            <Button type="primary" onClick={onPrevious}>
              Back
            </Button>
          )}
          {currentStep < 6 && (
            <Button type="primary" onClick={onNext} className="ml-1">
              Next
            </Button>
          )}
          {currentStep === 6 && (
            <Button type="primary" className="ml-1" onClick={onFinish}>
              Submit
            </Button>
          )}
        </FormItem>
      </Form>
    </>
  );
};
TalentForm.propTypes = {
  setIsTalentModalOpen: PropTypes.func.isRequired, // Define prop types
};
export default TalentForm;
