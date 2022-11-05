import React from "react";
import Paciente from "./Paciente";
import { useEffect } from "react";


const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {



    // useEffect(()=>{
    //   if(pacientes.length>0){

    //     console.log('se ha  agregado un nuevo paciente')
    //   }
      
    // },[pacientes])
  

  // const ArrayPacientes= pacientes.map()
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center"> ListadoPacientes</h2>
          <p className="text-xl mt-2 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
          <div className="md:h-screen overflow-y-scroll">
            {pacientes.map((paciente) => (
              <Paciente key={paciente.id}
               paciente={paciente}
               setPaciente={setPaciente}
               eliminarPaciente={eliminarPaciente} />
               
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center"> No hay pacientes</h2>
          <p className="text-xl mt-2 mb-10 text-center">
            Comienza agregando paciente {""}
            <span className="text-indigo-600 font-bold">y apareceran este lugar</span>
          </p>
        
        </>
      )
      }
    </div>
  );
};

export default ListadoPacientes;
