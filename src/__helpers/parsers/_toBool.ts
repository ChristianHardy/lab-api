/**
 * Parse anything to a boolean
 *
 * @param value The value to parse
 * @param defaultVal The default value if value is undefined or null
 */
export function toBool(value: unknown, defaultVal = false): boolean {
	if (value === undefined || value === null) {
		return defaultVal;
	}

	if (value === true || value === "true" || value === 1 || value === "1") {
		return true;
	}

	return false;
}
