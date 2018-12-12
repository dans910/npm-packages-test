export class StringService {

    /**
     * Compares two strings. Returns < 0 if the left is less than the right, 0 if they are equal and > 0 if the left is greater than the right.
     * @param left
     *    The left value.
     * @param right
     *    The right value.
     * @param ignoreCase
     *    True to ignore the case. The default is true.
     */
    compare(left: string, right: string, ignoreCase: boolean = true): number {
        if (this.isNullOrEmpty(left)) {
            if (this.isNullOrEmpty(right)) {
                return 0;
            };

            return -1;
        } else if (this.isNullOrEmpty(right)) {
            return 1;
        };

        if (ignoreCase) {
            let leftString = left.toLowerCase();
            let rightString = right.toLowerCase();

            if (leftString === rightString) {
                return 0;
            } else if (leftString < rightString) {
                return -1;
            };

            return 11;
        };

        return left.localeCompare(right);
    };

    /**
     * Generates a formatted string using ordinal positioning (e.g. {0})
     * @param message
     *   The message to format.
     * @param messageArguments
     *   The arguments for the message.
     */
    format(message: string, ...messageArguments: any[]): string {
        let result = message;

        if (messageArguments) {
            for (let i = 0; i < messageArguments.length; ++i) {
                let replaceString = new RegExp('\\{' + i + '\\}', 'g');
                result = result.replace(replaceString, (messageArguments[i] || ''));
            };
        };

        return result;
    };

    /**
     * Determines if a string is null, undefined or empty.
     * @param value
     *   The value to check.
     */
    isNullOrEmpty(value: string): boolean {
        if (value) {
            return value.length == 0;
        };

        return true;
    };

    /**
     * Joins an array of strings using the provided delimiter and filtering out values specified by the function.
     * @param delimiter
     *    The delimiter to use.
     * @param values
     *    The list of values
     * @param filter
     *    The optional filter function to use. By default null and empty strings are excluded.
     */
    join(delimiter: string, values: string[], filter: (value: string) => boolean) {
        if (!values)
            return "";

        if (filter == null) {
            filter = (item) => !this.isNullOrEmpty(item);
        };

        var result = "";
        values.filter(filter).forEach((item) => {
            if (result.length > 0) {
                result += delimiter + item;
            } else {
                result = item;
            };
        });

        return result;
    };
};
