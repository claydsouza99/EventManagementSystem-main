package com.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MediaDTO {
	private boolean photography;
	private boolean videography;
	private boolean album;
	private boolean drone;
	private boolean crane;
}
