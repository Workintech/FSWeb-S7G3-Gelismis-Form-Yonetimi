import logo from "./logo.svg";
import "./App.css";
import * as yup from "yup";
import axios from "axios";
import Form from "./components/Form";
import { useState, useEffect } from "react";

const formSchema = yup.object().shape({
  isim: yup
    .string("Lütfen harf giriniz")
    .required("İsim-Soyisim alanını doldurmanız zorunlu"),
  email: yup
    .string("E-mail adresinizi kontrol edin.")
    .required("E-mail alanını doldurmanız zorunlu"),
  sifre: yup
    .string("")
    .required("Şifre alanını doldurmanız zorunlu")
    .max(8, "Şifreniz maksimum 8 karekter olmalı"),
  kosul: yup.boolean().oneOf([true], "Kullanım koşulları kabul etmelisiniz"),
});

function App() {
  const [formDatası, setFormDatası] = useState({
    isim: "",
    email: "",
    sifre: "",
    kosul: false,
  });
  const [formHataları, setFormHataları] = useState({
    isim: "",
    email: "",
    sifre: "",
    kosul: "",
  }); //hataları kontrol etmek için state tanımladık.

  const [newUser, setNewUser] = useState(null);
  const [butonDisabled, setButonDisabled] = useState(true);

  function hataKontrolü(name, value) {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormHataları({
          ...formHataları,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormHataları({
          ...formHataları,
          [name]: err.formHataları[0],
        });
      });
  } //fonksiyon 2 parametre alıyor.hangi fieldin hatasını hangi değerle kontrol edecek.(bunun için name ve value aldık.)

  function handleChange(event) {
    const { name, value } = event.target;
    let deger = value;
    if (event.target.type === "checkbox") {
      deger = event.target.checked;
    }
    hataKontrolü(name, deger);
    setFormDatası({
      ...formDatası,
      [name]: deger,
    });
  }
  useEffect(() => {
    formSchema.isValid(formDatası).then((sonuc) => setButonDisabled(!sonuc));
  }, [formDatası]);
  function handleSubmit(olay) {
    olay.preventDefault();
    axios
      .post("https://reqres.in/api/users", formDatası)
      .then((response) => {
        console.log(response.data);
        setNewUser(response.data);
        setFormDatası({
          isim: "",
          email: "",
          sifre: "",
          kosul: false,
        });
      })
      .catch((err) => console.log(err));
  }

  // let butonDisabled = true;
  // if (
  //   formDatası.isim !== "" &&
  //   formDatası.email !== "" &&
  //   formDatası.sifre !== "" &&
  //   formDatası.kosul !== false
  // ) {
  //   butonDisabled = false;
  // }
  return (
    <div className="App">
      <Form
        formDatası={formDatası}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        butonDisabled={butonDisabled}
      />
      <p>{formHataları.isim}</p>
      <p>{formHataları.email}</p>
      <p>{formHataları.sifre}</p>
      <p>{formHataları.kosul}</p>
      {newUser && (
        <p>
          {newUser.isim} ismine sahip kullanıcı {newUser.id} idsi kayıt edildi.
        </p>
      )}
    </div>
  );
}

export default App;
