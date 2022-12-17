package com.spring.backendVentas.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.backendVentas.dominio.Ventas;

@Repository
public interface VentasRepositorio extends JpaRepository<Ventas, String>{

}
