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

import com.spring.backendVentas.dominio.Producto;
import com.spring.backendVentas.excepciones.ResourceNotFoundException;
import com.spring.backendVentas.repositorio.ProductoRepositorio;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/productos")
public class productoControlador {

	@Autowired
    private ProductoRepositorio repositorio;
    
     @GetMapping("/productos")
    public List<Producto> listarTodosLosProductos(){
        return repositorio.findAll();
    }
    @PostMapping("/productos")
    public Producto guardarProducto(@RequestBody Producto producto){
        return repositorio.save(producto);
    }
    @GetMapping("/productos/{id}")
    public ResponseEntity<Producto> obtenerProducto(@PathVariable String id){
    	Producto producto=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El Producto no existe"+id));
        return ResponseEntity.ok(producto);
    }
    
    @PutMapping("/productos/{id}")
    public ResponseEntity<Producto> ActualizarProducto(@PathVariable String id, @RequestBody Producto productoEditar){
        Producto producto=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El producto no existe"+id));
        producto.setNomProducto(productoEditar.getNomProducto());
        producto.setDescripcion(productoEditar.getDescripcion());
        producto.setPrecio(productoEditar.getPrecio());
        producto.setStock(productoEditar.getStock());
        producto.setMarca(productoEditar.getMarca());
        Producto productoActualizado=repositorio.save(producto);
        return ResponseEntity.ok(productoActualizado);
    } 
    @DeleteMapping("/productos/{id}")
     public ResponseEntity<Map<String,Boolean>> eliminarProducto(@PathVariable String id){
        Producto producto=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El Producto no existe"+id));
       
        repositorio.delete(producto);
        Map<String,Boolean> respuesta=new HashMap<>();
        respuesta.put("eliminar", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
