package com.spring.backendVentas.dominio;


import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;




@Data
@Table(name = "producto")
@Entity(name = "Producto")
public class Producto implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idProducto;
	@Column(length = 80)
	private String nomProducto;
	@Column(length = 100)
	private String descripcion;
	private Double precio;
	private Integer stock;
	@Column(length = 45)
	private String marca;

	@OneToMany(mappedBy = "producto")
	List<DetalleVenta> detalleVentas;

	public Producto() {
	}

	public Producto(String idProducto, String nomProducto, String descripcion, Double precio, Integer stock,
			String marca, List<DetalleVenta> detalleVentas) {

		this.idProducto = idProducto;
		this.nomProducto = nomProducto;
		this.descripcion = descripcion;
		this.precio = precio;
		this.stock = stock;
		this.marca = marca;
		this.detalleVentas = detalleVentas;
	}

	public String getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(String idProducto) {
		this.idProducto = idProducto;
	}

	public String getNomProducto() {
		return nomProducto;
	}

	public void setNomProducto(String nomProducto) {
		this.nomProducto = nomProducto;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public Integer getStock() {
		return stock;
	}

	public void setStock(Integer stock) {
		this.stock = stock;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public List<DetalleVenta> getDetalleVentas() {
		return detalleVentas;
	}

	public void setDetalleVentas(List<DetalleVenta> detalleVentas) {
		this.detalleVentas = detalleVentas;
	}

}
