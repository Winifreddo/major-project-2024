import { auth } from "@/auth.config";
import { cache } from "react";
// use cache to deduplicate requests to the server
export default cache(auth);