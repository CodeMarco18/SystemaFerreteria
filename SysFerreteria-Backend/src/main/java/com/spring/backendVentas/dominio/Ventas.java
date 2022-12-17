package com.spring.backendVentas.dominio;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;



@Data
@Table(name = "ventas")
@Entity(name = "Ventas")
public class Ventas implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idVentas;
	private String numeroDeComprobante;
	private double totalVentas;
	private Date fecha;
	private double precio;
	private int cantidad;
	


	@ManyToOne
	private Cliente idCliente;

	@ManyToOne
	private Empleado dniEmpleado;
	
	
	@OneToMany(mappedBy = "ventas")
	List<DetalleVenta> detalleVentas;

	public Ventas() {
	}

	public Ventas(String idVentas, String numeroDeComprobante, double totalVentas, Date fecha, double precio,
			int cantidad, Cliente idCliente, Empleado dniEmpleado,
			List<DetalleVenta> detalleVentas) {
		this.idVentas = idVentas;
		this.numeroDeComprobante = numeroDeComprobante;
		this.totalVentas = totalVentas;
		this.fecha = fecha;
		this.precio = precio;
		this.cantidad = cantidad;
		this.idCliente = idCliente;
		this.dniEmpleado = dniEmpleado;
		this.detalleVentas = detalleVentas;
	}

	public String getIdVentas() {
		return idVentas;
	}

	public void setIdVentas(String idVentas) {
		this.idVentas = idVentas;
	}

	public String getNumeroDeComprobante() {
		return numeroDeComprobante;
	}

	public void setNumeroDeComprobante(String numeroDeComprobante) {
		this.numeroDeComprobante = numeroDeComprobante;
	}

	public double getTotalVentas() {
		return totalVentas;
	}

	public void setTotalVentas(double totalVentas) {
		this.totalVentas = totalVentas;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public Cliente getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(Cliente idCliente) {
		this.idCliente = idCliente;
	}

	public Empleado getDniEmpleado() {
		return dniEmpleado;
	}

	public void setDniEmpleado(Empleado dniEmpleado) {
		this.dniEmpleado = dniEmpleado;
	}


	public List<DetalleVenta> getDetalleVentas() {
		return detalleVentas;
	}

	public void setDetalleVentas(List<DetalleVenta> detalleVentas) {
		this.detalleVentas = detalleVentas;
	}
	
	
}
