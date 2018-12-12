/**
 * Provides services for working with file paths.
 */
export class PathService {

    /**
     * Combines two paths together.
     * @param leftPath
     *   The left path.
     * @param path2
     *   The right path.
     */
    combine(leftPath: string, rightPath: string): string {
        let leftSlash = false, rightSlash = false;

        if (!leftPath || leftPath === "") {
            return rightPath;
        };
        if (!rightPath || rightPath === "") {
            return leftPath;
        };

        leftSlash = leftPath[leftPath.length - 1] === "/";
        rightSlash = rightPath[0] === "/";

        if (!leftSlash && !rightSlash) {
            return leftPath + "/" + rightPath;
        } else if ((leftSlash && !rightSlash) || (!leftSlash && rightSlash)) {
            return leftPath + rightPath;
        };

        return leftPath + rightPath.substr(1, rightPath.length - 1);
    };
};
