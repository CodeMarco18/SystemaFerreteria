package com.spring.backendVentas.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.backendVentas.dominio.Producto;

@Repository
public interface ProductoRepositorio extends JpaRepository<Producto, String>{

}
