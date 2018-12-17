import { ArrayService } from "../services/array.service";
import { PathService } from "../services/path.service";
import { StringService } from "../services/string.service";
import { ConvertService } from "../services/convert.service";

export default class FsmbServices {       
    Arrays: ArrayService = new ArrayService();
    Paths: PathService = new PathService();
    Strings: StringService = new StringService();
    Convert: ConvertService = new ConvertService();
}
