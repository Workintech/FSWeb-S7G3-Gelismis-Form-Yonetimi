import React from "react";
export default function Form(props) {
  const { formDatası, handleChange, handleSubmit, butonDisabled } = props;
  return (
    <form onSubmit={(olay) => handleSubmit(olay)}>
      <p>
        <label htmlFor="isimAlani">İsim-Soyisim:</label>
        <input
          id="isimAlani"
          name="isim"
          type="text"
          value={formDatası.isim}
          onChange={(event) => handleChange(event)}
        />
      </p>
      <p>
        <label htmlFor="emailAlani">E-mail:</label>
        <input
          id="emailAlani"
          name="email"
          type="email"
          value={formDatası.email}
          onChange={(event) => handleChange(event)}
        />
      </p>
      <p>
        <label htmlFor="sifreAlani">Şifre</label>
        <input
          id="sifreAlani"
          name="sifre"
          type="password"
          value={formDatası.sifre}
          onChange={(event) => handleChange(event)}
        />
      </p>
      <p>
        <input
          id="kosulAlani"
          name="kosul"
          type="checkbox"
          checked={formDatası.kosul}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="kosulAlani">Koşulları Kabul Ediyorum</label>
      </p>
      <p>
        <button type="submit" disabled={butonDisabled}>
          Gönder
        </button>
      </p>
    </form>
  );
}
