package com.ems.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

//@Getter
//@Setter
@Entity
@Table(name = "studio")
public class Studio extends BaseEntity {
	@Column(length = 20)
	@NotEmpty(message = "cannot be empty")
	private String name;
	@Column(length = 10)
	@Size(min = 10,max = 10)
	private String Contact;
//	@Positive
//	private double cost;
	private double photographycost;
	private double videographycost;
	private double albumcost;
	private double dronecost;
	private double cranecost;
//
//	@OneToMany(mappedBy = "studio", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
//	List<Event> bookedByEvent = new ArrayList<>();
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContact() {
		return Contact;
	}
	public void setContact(String contact) {
		Contact = contact;
	}
	public double getPhotographycost() {
		return photographycost;
	}
	public void setPhotographycost(double photographycost) {
		this.photographycost = photographycost;
	}
	public double getVideographycost() {
		return videographycost;
	}
	public void setVideographycost(double videographycost) {
		this.videographycost = videographycost;
	}
	public double getAlbumcost() {
		return albumcost;
	}
	public void setAlbumcost(double albumcost) {
		this.albumcost = albumcost;
	}
	public double getDronecost() {
		return dronecost;
	}
	public void setDronecost(double dronecost) {
		this.dronecost = dronecost;
	}
	public double getCranecost() {
		return cranecost;
	}
	public void setCranecost(double cranecost) {
		this.cranecost = cranecost;
	}
	
}
