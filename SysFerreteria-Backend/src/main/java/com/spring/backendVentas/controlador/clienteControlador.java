
package com.spring.backendVentas.controlador;

import com.spring.backendVentas.dominio.Cliente;
import com.spring.backendVentas.excepciones.ResourceNotFoundException;
import com.spring.backendVentas.repositorio.ClienteRepositorio;
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

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/clientes")
public class clienteControlador {
    @Autowired
    private ClienteRepositorio repositorio;
    
     @GetMapping("/clientes")
    public List<Cliente> listarTodosLosClientes(){
        return repositorio.findAll();
    }
    @PostMapping("/clientes")
    public Cliente guardarCliente(@RequestBody Cliente cliente){
        return repositorio.save(cliente);
    }
    @GetMapping("/clientes/{id}")
    public ResponseEntity<Cliente> obtenerCliente(@PathVariable String id){
        Cliente cliente=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El cliente no existe"+id));
        return ResponseEntity.ok(cliente);
    }
    
    @PutMapping("/clientes/{id}")
    public ResponseEntity<Cliente> ActualizarCliente(@PathVariable String id, @RequestBody Cliente clienteEditar){
        Cliente cliente=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El cliente no existe"+id));
        cliente.setNombre(clienteEditar.getNombre());
        cliente.setApellido(clienteEditar.getApellido());
        cliente.setCelular(clienteEditar.getCelular());
        cliente.setDireccion(clienteEditar.getDireccion());
        cliente.setCorreoElectronico(clienteEditar.getCorreoElectronico());
        Cliente clienteActualizado=repositorio.save(cliente);
        return ResponseEntity.ok(clienteActualizado);
    } 
    @DeleteMapping("/clientes/{id}")
     public ResponseEntity<Map<String,Boolean>> eliminarCliente(@PathVariable String id){
        Cliente cliente=repositorio.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("El cliente no existe"+id));
       
        repositorio.delete(cliente);
        Map<String,Boolean> respuesta=new HashMap<>();
        respuesta.put("eliminar", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    } 
}
