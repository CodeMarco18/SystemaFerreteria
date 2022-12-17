package com.spring.backendVentas.dominio;

import java.io.Serializable;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
@Data
@Table(name = "detalleVenta")
@Entity(name = "DetalleVenta")
public class DetalleVenta implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idDettalleVenta;

	@ManyToOne
	@JoinColumn(name = "idVentas")
	Ventas ventas;

	@ManyToOne
	@JoinColumn(name = "idProducto")
	Producto producto;

	int unidades;

	public DetalleVenta() {

	}

	public DetalleVenta(Integer idDettalleVenta, Ventas ventas, Producto producto, int unidades) {
		super();
		this.idDettalleVenta = idDettalleVenta;
		this.ventas = ventas;
		this.producto = producto;
		this.unidades = unidades;
	}

	public Integer getIdDettalleVenta() {
		return idDettalleVenta;
	}

	public void setIdDettalleVenta(Integer idDettalleVenta) {
		this.idDettalleVenta = idDettalleVenta;
	}

	public Ventas getVentas() {
		return ventas;
	}

	public void setVentas(Ventas ventas) {
		this.ventas = ventas;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public int getUnidades() {
		return unidades;
	}

	public void setUnidades(int unidades) {
		this.unidades = unidades;
	}

	

}
