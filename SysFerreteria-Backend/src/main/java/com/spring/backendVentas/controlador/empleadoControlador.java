package com.spring.backendVentas.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.backendVentas.dominio.Empleado;
import com.spring.backendVentas.excepciones.ResourceNotFoundException;
import com.spring.backendVentas.repositorio.EmpleadoRepositorio;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/empleados")
public class empleadoControlador {
	@Autowired
    private EmpleadoRepositorio repositorio;
    
     @GetMapping("/empleados")
    public List<Empleado> listarTodosLosEmpleados(){
        return repositorio.findAll();
    }
    @PostMapping("/empleados")
    public Empleado guardarEmpleado(@RequestBody Empleado empleado){
        return repositorio.save(empleado);
    }
    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleado(@PathVariable String id){
        Empleado empleado=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El empleado no existe"+id));
        return ResponseEntity.ok(empleado);
    }
    
    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> ActualizarEmpleado(@PathVariable String id, @RequestBody Empleado empleadoEditar){
        Empleado empleado=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El empleado no existe"+id));
        empleado.setNombre(empleadoEditar.getNombre());
        empleado.setApePat(empleadoEditar.getApePat());
        empleado.setApeMat(empleadoEditar.getApeMat());
        empleado.setDireccion(empleadoEditar.getDireccion());
        empleado.setCelular(empleadoEditar.getCelular());
        Empleado empleadoActualizado=repositorio.save(empleado);
        return ResponseEntity.ok(empleadoActualizado);
    } 
    @DeleteMapping("/empleado/{id}")
     public ResponseEntity<Map<String,Boolean>> eliminarEmpleado(@PathVariable String id){
        Empleado empleado=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El empleado no existe"+id));
       
        repositorio.delete(empleado);
        Map<String,Boolean> respuesta=new HashMap<>();
        respuesta.put("eliminar", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    } 
}
