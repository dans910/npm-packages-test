export class ConvertService {

    /**
     * Converts a partial date to a formatted date string using dashes for missing values
     * If the entire date is missing then defaultValue (default = empty string).
     * 
     * 
     */
    datePartialToString (month: string, day: string, year: string, addPadding: boolean = false, defaultValue: string = "") : string {
		var monthNumber = this.toNumber(month);
		var dayNumber = this.toNumber(day);
		var yearNumber = this.toNumber(year);

		if (monthNumber <= 0 && dayNumber <= 0 && yearNumber <= 0) {
			return defaultValue != null ? defaultValue : "";
		};

		var month = (monthNumber > 0) ? monthNumber.toString() : "--";
		var day = (dayNumber > 0) ? dayNumber.toString() : "--";
		var year = (yearNumber > 0) ? yearNumber.toString() : "----";

        var delimiter = addPadding ? " / " : "/";
        if (month.length == 1) month = '0' + month;
        if (day.length == 1) day = '0' + day;

		return month + delimiter + day + delimiter + year;
	};

    /**
     * Converts an object to a number. If the object is null or undefined then returns defaultValue (default = 0).
     * 
     * 
     */    
    toNumber (value: any, defaultValue: number = 0) : number{ 
		if (value != null)
			return Number(value);

		return Number(defaultValue);
	};
};