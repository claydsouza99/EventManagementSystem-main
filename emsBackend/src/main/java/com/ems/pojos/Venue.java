package com.ems.pojos;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;


//@Setter
//@Getter
@Entity
@Table(name = "venue")
public class Venue extends BaseEntity{
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getMaxCapacity() {
		return maxCapacity;
	}

	public void setMaxCapacity(int maxCapacity) {
		this.maxCapacity = maxCapacity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	@Column(length = 20)
	@NotEmpty(message = "name required")
	private String name;

	@NotEmpty(message = "location required")
	@Column(length = 20)
	private String location;

	@NotEmpty(message = "address required")
	@Column(length = 200)
	private String address;

	@Column(name = "max_capacity")
	@Positive
	@NotNull(message = "max capacity required")
	private int maxCapacity;
	
	@Column(length = 200)
	private String description;
	
	@Column(length = 20)
	@NotEmpty(message = "category required")
	private String category;
	
	@Column(length = 20)
	@Size(min = 10,max = 10)
	private String contact;
	
	@Positive
	private double cost;
	
//	@OneToMany(mappedBy = "bookedVenue",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//	private List<Event> BookedVenueByEvent= new ArrayList<Event>();
//	
	
}
