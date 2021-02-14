package io.tomdixon.cryptocoins.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@EqualsAndHashCode
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class WatchlistEntry {

	public String id;

	// maps to {id} in the coinCap Urls:
	// 'api.coincap.io/v2/assets/bitcoin', here 'bitcoin'
	public String symbol;

}
