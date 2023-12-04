package com.ems.dto;

import java.time.LocalDate;
import java.util.List;

import com.ems.pojos.Caters;
import com.ems.pojos.EventType;
import com.ems.pojos.Menu;
import com.ems.pojos.Studio;
import com.ems.pojos.Venue;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
//{name: 'dfg', type: 'dfha', date: '2022-02-16', guestCount: '100'}
//@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
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
	public EventType getType() {
		return type;
	}
	public void setType(EventType type) {
		this.type = type;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public int getGuestCount() {
		return guestCount;
	}
	public void setGuestCount(int guestCount) {
		this.guestCount = guestCount;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Studio getStudio() {
		return studio;
	}
	public void setStudio(Studio studio) {
		this.studio = studio;
	}
	public boolean isPhotography() {
		return photography;
	}
	public void setPhotography(boolean photography) {
		this.photography = photography;
	}
	public boolean isVideography() {
		return videography;
	}
	public void setVideography(boolean videography) {
		this.videography = videography;
	}
	public boolean isAlbum() {
		return album;
	}
	public void setAlbum(boolean album) {
		this.album = album;
	}
	public boolean isDrone() {
		return drone;
	}
	public void setDrone(boolean drone) {
		this.drone = drone;
	}
	public boolean isCrane() {
		return crane;
	}
	public void setCrane(boolean crane) {
		this.crane = crane;
	}
	public List<Menu> getMenus() {
		return menus;
	}
	public void setMenus(List<Menu> menus) {
		this.menus = menus;
	}
	public Venue getBookedVenue() {
		return bookedVenue;
	}
	public void setBookedVenue(Venue bookedVenue) {
		this.bookedVenue = bookedVenue;
	}
	public Caters getBookedCater() {
		return bookedCater;
	}
	public void setBookedCater(Caters bookedCater) {
		this.bookedCater = bookedCater;
	}
	public double getTotalCost() {
		return totalCost;
	}
	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}
	public String getCustomerEmail() {
		return customerEmail;
	}
	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}
private int id;
private String name;
private EventType type;
private LocalDate date;
private int guestCount;
private String status;
private Studio studio;
private boolean photography;
private boolean videography;
private boolean album;
private boolean drone;
private boolean crane;
private List<Menu> menus;
private Venue bookedVenue;
private Caters bookedCater;
private double totalCost;
private String customerEmail;

}
