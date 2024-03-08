import { Input, Select, DatePicker } from "antd";
import FormItem from "antd/es/form/FormItem";
import dayjs from "dayjs";
import CityPicker from "./CityPicker";

const FormPersonalData = () => {
  const dateFormat = "DD-MM-YYYY";

  return (
    <>
      <h3 className="text-lg mb-6 font-semibold">Datos personales</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 items-center w-full">
        <div className="xl:col-span-2">
          <label htmlFor="name">
            Nombre<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem
            name="name"
            rules={[
              {
                required: true,
                message: "Por favor debe completar este campo",
              },
            ]}
          >
            <Input id="name" />
          </FormItem>
        </div>
        <div className="xl:col-span-2">
          <label htmlFor="surname">
            Apellido<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem
            name="surname"
            rules={[
              {
                required: true,
                message: "Por favor debe completar este campo",
              },
            ]}
          >
            <Input id="surname" />
          </FormItem>
        </div>
        <div>
          <label htmlFor="dni">Documento de Identidad</label>
          <FormItem name="dni" initialValue="cedulaDeIdentidad">
            <Select
              options={[
                {
                  value: "cedulaDeIdentidad",
                  label: "Cedula de Identidad",
                },
                {
                  value: "pasaporte",
                  label: "Pasaporte",
                },
              ]}
              //

              initialvalue="cedulaDeIdentidad"
              id="dni"
            />
          </FormItem>
        </div>
        <div>
          <label htmlFor="surname">CI sin puntos ni guiones</label>
          <FormItem name="dniNumber">
            <Input name="surname" id="surname" />
          </FormItem>
        </div>
        <div>
          <label htmlFor="birthday">Fecha de Nacimiento</label>
          <FormItem
            name="birthday"
            initialValue={dayjs("01-01-2024", dateFormat)}
          >
            <DatePicker id="birthday" />
          </FormItem>
        </div>
        <div>
          <label htmlFor="genero">Género</label>
          <FormItem name="genero">
            <Select
              options={[
                {
                  value: "masculino",
                  label: "Masculino",
                },
                {
                  value: "femenino",
                  label: "Femenino",
                },
                {
                  value: "noGenero",
                  label: "Prefiero no responder",
                },
              ]}
              id="genero"
            />
          </FormItem>
        </div>
        <div className="xl:col-span-2">
          <label htmlFor="adress">
            Dirección<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem
            name="adress"
            rules={[
              {
                required: true,
                message: "Por favor debe completar este campo",
              },
            ]}
          >
            <Input id="adress" />
          </FormItem>
        </div>
        <div>
          <label htmlFor="cp">CP</label>
          <FormItem name="cp">
            <Input id="cp" />
          </FormItem>
        </div>
        <div>
          <label htmlFor="phone">
            Teléfono<span className="text-red-400 text-xs"> *</span>
          </label>
          <FormItem
            name="phone"
            rules={[
              {
                required: true,
                message: "Por favor debe completar este campo",
              },
            ]}
          >
            <Input id="phone" />
          </FormItem>
        </div>
        <div className="xl:col-span-4">
          <label htmlFor="email">E-mail</label>
          <FormItem
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input id="email" />
          </FormItem>
        </div>
        <CityPicker className="xl:col-span-2" />
      </div>
    </>
  );
};

export default FormPersonalData;
