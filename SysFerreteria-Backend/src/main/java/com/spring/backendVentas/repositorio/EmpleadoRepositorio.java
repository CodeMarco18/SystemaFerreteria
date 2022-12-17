package com.spring.backendVentas.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.backendVentas.dominio.Empleado;

@Repository
public interface EmpleadoRepositorio extends JpaRepository<Empleado, String>{

}
