import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ pacientes,setPacientes,paciente,setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);


useEffect(() => {
  if(Object.keys(paciente).length>0){

    setNombre(paciente.nombre)
    setPropietario(paciente.propietario);
    setEmail(paciente.email);
    setFecha(paciente.fecha);
    setSintomas(paciente.sintomas);
  }
 
  
 
}, [paciente])



  const handleSubmit = (e) => {
    e.preventDefault();
    // validando el formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("hay almenos uno vacio");
      setError(true);
    } else {
      setError(false);
      
      // objeto de paciente
      const objetoPaciente={
        nombre,propietario,email,fecha,sintomas
        

      }
      // editanod nuevo registro o agregando uno nuevo
      if(paciente.id ){
        
        objetoPaciente.id=paciente.id;
        const pacientesActualizados=pacientes.map((pacienteState)=>pacienteState.id===paciente.id ? objetoPaciente : pacienteState)
     
        setPacientes(pacientesActualizados)
        setPaciente({})
       
      }
      else{
     
        objetoPaciente.id=uuidv4();
        console.log( objetoPaciente)
        setPacientes([...pacientes,objetoPaciente]);
        setPaciente({})
       
      }
     
    
      // setPacientes(nombre);
      // reiniciando el formulario
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mx-5"
      >
        {error && <Error/> }
        <div className="mb-5 ">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="textarea"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="textarea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
            placeholder="Describa los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-green-800 mb-10"
          value={paciente.id?'Editar paciente':'Agregar paciente'}
        />
      </form>
    </div>
  );
};

export default Formulario;
