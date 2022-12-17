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

import com.spring.backendVentas.dominio.Ventas;
import com.spring.backendVentas.excepciones.ResourceNotFoundException;
import com.spring.backendVentas.repositorio.VentasRepositorio;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/ventas")
public class VentasControlador {
	@Autowired
    private VentasRepositorio repositorio;
    
     @GetMapping("/ventas")
    public List<Ventas> listarTodosLosVentas(){
        return repositorio.findAll();
    }
    @PostMapping("/ventas")
    public Ventas guardarVentas(@RequestBody Ventas ventas){
        return repositorio.save(ventas);
    }
    @GetMapping("/ventas/{id}")
    public ResponseEntity<Ventas> obtenerVentas(@PathVariable String id){
    	Ventas ventas=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El Ventas no existe"+id));
        return ResponseEntity.ok(ventas);
    }
    
    @PutMapping("/ventas/{id}")
    public ResponseEntity<Ventas> ActualizarVentas(@PathVariable String id, @RequestBody Ventas ventasEditar){
        Ventas ventas=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El Ventas no existe"+id));
        ventas.setNumeroDeComprobante(ventasEditar.getNumeroDeComprobante());
        ventas.setTotalVentas(ventasEditar.getTotalVentas());
        ventas.setFecha(ventasEditar.getFecha());
        ventas.setPrecio(ventasEditar.getPrecio());
        ventas.setCantidad(ventasEditar.getCantidad());
        Ventas ventasActualizado=repositorio.save(ventas);
        return ResponseEntity.ok(ventasActualizado);
    } 
    @DeleteMapping("/ventas/{id}")
     public ResponseEntity<Map<String,Boolean>> eliminarVentas(@PathVariable String id){
        Ventas ventas=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El Ventas no existe"+id));
       
        repositorio.delete(ventas);
        Map<String,Boolean> respuesta=new HashMap<>();
        respuesta.put("eliminar", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
