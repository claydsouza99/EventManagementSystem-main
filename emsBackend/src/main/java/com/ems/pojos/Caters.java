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
@Table(name = "caters")
public class Caters extends BaseEntity {
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	@Column(length = 20)
	@NotEmpty(message = "cannot be empty")
	private String name;

	@Column(length = 20, name = "contact_number")
	@Size(min = 10,max = 10)
	private String contactNumber;
	@Column(length = 30)
	@NotEmpty(message = "cannot be empty")
	private String speciality;
		
//	@OneToMany(mappedBy = "bookedCater",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
//	private List<Event> BookedEvents;
	
}
