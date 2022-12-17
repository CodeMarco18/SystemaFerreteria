package com.spring.backendVentas.dominio;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Table(name = "empleado")
@Entity (name = "Empleado")
public class Empleado implements Serializable{

	@Id
	@Column(length = 8)
	private String dniEmpleado;
	@Column(length = 45)
	private String nombre;
	@Column(length = 45)
	private String apePat;
	@Column(length = 45)
	private String apeMat;
	@Column(length = 100)
	private String direccion;
	@Column(length = 9)
	private String celular;

	public Empleado() {

	}

	public Empleado(String dniEmpleado, String nombre, String apePat, String apeMat, String direccion,
			String celular) {
		super();
		this.dniEmpleado = dniEmpleado;
		this.nombre = nombre;
		this.apePat = apePat;
		this.apeMat = apeMat;
		this.direccion = direccion;
		this.celular = celular;
	}

	public String getDniEmpleado() {
		return dniEmpleado;
	}

	public void setDniEmpleado(String dniEmpleado) {
		this.dniEmpleado = dniEmpleado;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApePat() {
		return apePat;
	}

	public void setApePat(String apePat) {
		this.apePat = apePat;
	}

	public String getApeMat() {
		return apeMat;
	}

	public void setApeMat(String apeMat) {
		this.apeMat = apeMat;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

}
