import { compose } from "../../shared/functions/compose"
import { withRouter } from "./withRouter/withRouter"
import { withStrictMode } from "./withStrictMode/withStrictMode"

export const withProviders = compose([withStrictMode, withRouter])