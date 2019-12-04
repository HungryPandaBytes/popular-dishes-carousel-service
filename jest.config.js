// SET UP FILE ================================================

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// if React runs on a new version, the following will trigger this accordingly.
configure({ adapter: new Adapter() });
