/** Provides services for working with arrays. */
export default class ArrayService {

    /**
     * Appends the source array to the target array.
     * @param target
     *   The array to be appended to.
     * @param source
     *   The array to copy.
     */
    append(target: any[], source: any[]): void {
        if (source) {
            for (let element of source) {
                target.push(element);
            };
        };
    };

    /**
     * Clears an array.
     * @param source
     *    The array to clear.
     */
    clear(source: any[]): void {
        source.length = 0;
    };

    /**
     * Copies the contents of one array to the other. The existing array elements are removed.
     * @param target
     *   The array to replace.
     * @param source
     *   The array to copy.
     */
    copy(target: any[], source: any[]): void {
        this.clear(target);
        this.append(target, source);
    };

    /**
     * Gets the first element in an array or the default if the array is undefined, null or empty.
     * @param value
     *   The array 
     */
    firstOrDefault<T>(value: T[]): T | null {
        if (value && value.length > 0) {
            return value[0];
        };

        return null;
    };

    /**
     * Determines if an array is null, undefined or empty.
     * @param value
     *   The array to check.
     */
    isNullOrEmpty(value: any[]): boolean {
        if (value) {
            return value.length == 0;
        };

        return true;
    };
}    
