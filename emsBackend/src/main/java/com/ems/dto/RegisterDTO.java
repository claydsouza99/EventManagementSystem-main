package com.ems.dto;

import java.time.LocalDate;
import java.util.Objects;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Getter
//@Setter
//@AllArgsConstructor

@Data
public class RegisterDTO {
	public RegisterDTO(int id, String name, LocalDate dob, String contactNumber, String adharNumber, String email,
			String password, String accountNumber, String role, int point, int priorityStatus, double salary) {
		super();
		this.id = id;
		this.name = name;
		this.dob = dob;
		this.contactNumber = contactNumber;
		this.adharNumber = adharNumber;
		this.email = email;
		this.password = password;
		this.accountNumber = accountNumber;
		this.role = role;
		this.point = point;
		this.priorityStatus = priorityStatus;
		this.salary = salary;
	}
	private int id;
	private String name;
	private LocalDate dob;
	private String contactNumber;
	private String adharNumber;
	private String email;
	private String password;
	private String accountNumber;
	private String role;
	private int point;
	private int priorityStatus;
	private double salary;
	public RegisterDTO(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	
	
	public RegisterDTO() {
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getAdharNumber() {
		return adharNumber;
	}
	public void setAdharNumber(String adharNumber) {
		this.adharNumber = adharNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getPoint() {
		return point;
	}
	public void setPoint(int point) {
		this.point = point;
	}
	public int getPriorityStatus() {
		return priorityStatus;
	}
	public void setPriorityStatus(int priorityStatus) {
		this.priorityStatus = priorityStatus;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}


	@Override
	public String toString() {
		return "RegisterDTO [id=" + id + ", name=" + name + ", dob=" + dob + ", contactNumber=" + contactNumber
				+ ", adharNumber=" + adharNumber + ", email=" + email + ", password=" + password + ", accountNumber="
				+ accountNumber + ", role=" + role + ", point=" + point + ", priorityStatus=" + priorityStatus
				+ ", salary=" + salary + "]";
	}


	@Override
	public int hashCode() {
		return Objects.hash(accountNumber, adharNumber, contactNumber, dob, email, id, name, password, point,
				priorityStatus, role, salary);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RegisterDTO other = (RegisterDTO) obj;
		return Objects.equals(accountNumber, other.accountNumber) && Objects.equals(adharNumber, other.adharNumber)
				&& Objects.equals(contactNumber, other.contactNumber) && Objects.equals(dob, other.dob)
				&& Objects.equals(email, other.email) && id == other.id && Objects.equals(name, other.name)
				&& Objects.equals(password, other.password) && point == other.point
				&& priorityStatus == other.priorityStatus && Objects.equals(role, other.role)
				&& Double.doubleToLongBits(salary) == Double.doubleToLongBits(other.salary);
	}
	
	
}
